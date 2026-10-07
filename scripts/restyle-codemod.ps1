# Restyle codemod for the 2026 design system.
#   1. Swaps repeated heading / section / card class combos for design-system utilities.
#   2. Maps neutral colours (white, slate) to semantic tokens that switch in dark mode.
#   3. Appends dark: variants to tinted (hue) classes.
# Idempotent: re-running on an already converted file changes nothing.
#
# Usage: .\scripts\restyle-codemod.ps1 src\components\sections\Hero.tsx [more files...]
param([Parameter(Mandatory, ValueFromRemainingArguments)][string[]]$Files)
$ErrorActionPreference = 'Stop'
$utf8 = New-Object System.Text.UTF8Encoding($false)

$structural = [ordered]@{
  # eyebrows
  'text-(?:sm|xs) font-semibold tracking-widest uppercase text-emerald-600' = 'eyebrow'
  # headings
  'text-3xl sm:text-4xl lg:text-(?:5xl|\[2\.75rem\] xl:text-5xl) font-bold (?:leading-tight )?tracking-tight text-slate-800' = 'text-h2 text-ink'
  'text-3xl font-bold tracking-tight text-slate-800 sm:text-4xl(?: lg:text-5xl)?' = 'text-h2 text-ink'
  'text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight text-slate-800' = 'text-h3 text-ink'
  'text-4xl font-bold tracking-tight text-slate-800 sm:text-5xl' = 'text-h1 text-ink'
  'text-5xl font-bold tracking-tight text-slate-800 sm:text-6xl lg:text-7xl' = 'text-display text-ink'
  'text-2xl font-bold text-slate-800 sm:text-3xl' = 'text-h3 text-ink'
  # lead paragraphs
  'text-(?:base sm:text-lg|lg) (?:leading-relaxed )?text-slate-500' = 'text-lead text-ink-3'
  # layout
  'py-20 lg:py-28' = 'section-y'
  'mx-auto max-w-7xl (?:px-4 sm:px-6|px-6) lg:px-8' = 'container-page'
  # cards
  'rounded-(?:2xl|3xl) bg-white (p-\d+(?: sm:p-\d+)?) shadow-sm ring-1 ring-slate-100' = 'card $1'
  'rounded-(?:2xl|3xl) bg-white shadow-sm ring-1 ring-slate-100' = 'card'
  'transition-shadow duration-300 hover:shadow-md' = 'card-hover'
  'text-xl font-semibold text-slate-800' = 'text-h4 text-ink'
  # flat white sections -> transparent over the canvas
  '(<section[^>]*className="[^"]*?)\s?\bbg-white\b' = '$1'
  # soft section gradients -> low-saturation washes
  'bg-gradient-to-b from-(?:violet|fuchsia|purple|indigo)-50(?:/\d+)? via-\w+-50(?:/\d+)? to-white' = 'wash-lilac'
  'bg-gradient-to-b from-(?:amber|orange|rose)-50(?:/\d+)? via-\w+-50(?:/\d+)? to-white' = 'wash-peach'
  'bg-gradient-to-b from-white via-(?:emerald|green|teal|mint|sage)-50(?:/\d+)? to-white' = 'wash-mint'
  'bg-gradient-to-b from-white via-white to-white' = ''
}

$hues = 'emerald|teal|green|lime|amber|orange|yellow|rose|red|pink|violet|purple|fuchsia|indigo|blue|sky|cyan'
$B = '(?<=^|[\s"''`{(])'          # class start boundary
$E = '(?=$|[\s"''`})])'           # class end boundary
$P = '(?<pre>(?:[a-z0-9-]+:)*)'   # variant chain, e.g. hover:sm:
$O = '(?<op>/(?:[\d.]+|\[[^\]]+\]))?'

function Convert-Neutral([string]$t) {
  $map = @(
    @('text-slate-(?:900|800)', 'text-ink'),
    @('text-slate-(?:700|600)', 'text-ink-2'),
    @('text-slate-(?:500|400)', 'text-ink-3'),
    @('text-slate-300', 'text-ink-4'),
    @('bg-slate-(?:50|100)', 'bg-surface-2'),
    @('bg-slate-200', 'bg-line'),
    @('bg-slate-700', 'bg-ink-2'),
    @('(?<p>border|ring|divide|outline)-slate-(?:100|200)', '${p}-line'),
    @('(?<p>border|ring|divide|outline)-slate-300', '${p}-line-strong')
  )
  foreach ($m in $map) {
    $t = [regex]::Replace($t, "$B$P$($m[0])$O$E", { param($x)
      $root = [regex]::Replace($x.Value.Substring($x.Groups['pre'].Length), '/.*$', '')
      $new = [regex]::Replace($root, $m[0], $m[1])
      "$($x.Groups['pre'].Value)$new$($x.Groups['op'].Value)" }.GetNewClosure())
  }
  # white surfaces (keep low-opacity decorative whites as-is)
  $t = [regex]::Replace($t, "$B$P(?<p>bg|from|via|to)-white(?<op>/(?:[3-9]\d|100))?$E", { param($x)
    $tok = if ($x.Groups['p'].Value -eq 'bg') { 'surface' } else { 'canvas' }
    "$($x.Groups['pre'].Value)$($x.Groups['p'].Value)-$tok$($x.Groups['op'].Value)" })
  return $t
}

function Add-DarkHue([string]$t) {
  $rules = @(
    @("text-(?<h>$hues)-600", 'text-${h}-400'),
    @("text-(?<h>$hues)-700", 'text-${h}-300'),
    @("text-(?<h>$hues)-(?:800|900)", 'text-${h}-200'),
    @("text-(?<h>$hues)-500", 'text-${h}-400'),
    @("text-(?<h>$hues)-(?:100|200)", 'text-${h}-400/25'),
    @("bg-(?<h>$hues)-50", 'bg-${h}-400/10'),
    @("bg-(?<h>$hues)-100", 'bg-${h}-400/15'),
    @("bg-(?<h>$hues)-200", 'bg-${h}-400/25'),
    @("(?<p>border|ring)-(?<h>$hues)-(?:100|200)", '${p}-${h}-400/20'),
    @("(?<p>border|ring)-(?<h>$hues)-300", '${p}-${h}-400/30'),
    @("(?<p>from|via|to)-(?<h>$hues)-(?:50|100)", '${p}-${h}-400/[0.07]')
  )
  foreach ($r in $rules) {
    $t = [regex]::Replace($t, "$B$P$($r[0])$O$E(?!\s+dark:)", { param($x)
      $pre = $x.Groups['pre'].Value
      if ($pre -match '(^|:)dark:') { return $x.Value }
      $root = [regex]::Replace($x.Value.Substring($pre.Length), '/.*$', '')
      # translucent mid-shade glows read fine on dark; near-white 50/100 tints never do
      if ($root -notmatch '-(50|100)$' -and $x.Groups['op'].Success -and $x.Groups['op'].Value -match '^/(\d+)$' -and [int]$Matches[1] -le 30) { return $x.Value }
      $dark = [regex]::Replace($root, $r[0], $r[1])
      "$($x.Value) dark:$pre$dark" }.GetNewClosure())
  }
  return $t
}

foreach ($f in $Files) {
  $path = (Resolve-Path $f).Path
  $orig = [IO.File]::ReadAllText($path)
  $t = $orig
  foreach ($k in $structural.Keys) { $t = [regex]::Replace($t, $k, $structural[$k]) }
  $t = Convert-Neutral $t
  $t = Add-DarkHue $t
  if ($t -ne $orig) { [IO.File]::WriteAllText($path, $t, $utf8); "changed  $f" } else { "same     $f" }
}
