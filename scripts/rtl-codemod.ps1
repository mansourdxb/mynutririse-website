# Converts physical left/right Tailwind utilities to logical start/end ones so
# layouts mirror automatically in RTL (Arabic). Idempotent.
# Centering pairs like `left-1/2 -translate-x-1/2` are left physical on purpose.
#
# Usage: .\scripts\rtl-codemod.ps1 [files...]   (defaults to every .tsx under src)
param([string[]]$Files)
$ErrorActionPreference = 'Stop'
$utf8 = New-Object System.Text.UTF8Encoding($false)
if (-not $Files) { $Files = Get-ChildItem src -Recurse -Include *.tsx | % FullName }

$B = '(?<=^|[\s"''`{(])'
$E = '(?=$|[\s"''`})])'
$P = '(?<pre>(?:[a-z0-9-]+:)*)(?<neg>-?)'

$map = [ordered]@{
  'ml-'          = 'ms-'
  'mr-'          = 'me-'
  'pl-'          = 'ps-'
  'pr-'          = 'pe-'
  'text-left'    = 'text-start'
  'text-right'   = 'text-end'
  'rounded-tl-'  = 'rounded-ss-'
  'rounded-tr-'  = 'rounded-se-'
  'rounded-bl-'  = 'rounded-es-'
  'rounded-br-'  = 'rounded-ee-'
  'rounded-l-'   = 'rounded-s-'
  'rounded-r-'   = 'rounded-e-'
  'border-l-'    = 'border-s-'
  'border-r-'    = 'border-e-'
  'left-'        = 'start-'
  'right-'       = 'end-'
}

foreach ($f in $Files) {
  $orig = [IO.File]::ReadAllText($f)
  $t = $orig
  foreach ($k in $map.Keys) {
    $kk = [regex]::Escape($k)
    $tail = if ($k.EndsWith('-')) { '(?<v>[\w./\[\]%-]+)' } else { '(?<v>)' }
    $t = [regex]::Replace($t, "$B$P$kk$tail$E", {
      param($m)
      # keep centring helpers physical
      if ($k -in @('left-', 'right-') -and $m.Groups['v'].Value -eq '1/2') { return $m.Value }
      "$($m.Groups['pre'].Value)$($m.Groups['neg'].Value)$($map[$k])$($m.Groups['v'].Value)"
    }.GetNewClosure())
  }
  # bare border-l / border-r / rounded-l / rounded-r (no size suffix)
  $t = [regex]::Replace($t, "$B(?<pre>(?:[a-z0-9-]+:)*)(?<b>border|rounded)-(?<s>l|r)$E", {
    param($m) "$($m.Groups['pre'].Value)$($m.Groups['b'].Value)-$(if ($m.Groups['s'].Value -eq 'l') {'s'} else {'e'})"
  })
  if ($t -ne $orig) { [IO.File]::WriteAllText($f, $t, $utf8); "changed  $f" }
}
