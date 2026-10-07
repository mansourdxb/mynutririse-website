import type { Facts } from "@/data/facts";

/*
 * Article bodies are ordered blocks:
 *   { type: "h2", text } | { type: "p", text } | { type: "ul", items } | { type: "table", head, rows }
 * Text may contain <em>, <b> (bold) and link tags (named per article, see the page).
 */
export default (f: Facts) => ({
  index: {
    metaTitle: "Nutrition & Fasting Guides",
    metaDescription:
      "Practical guides on nutrition, fasting, macro tracking, and healthy habits from the MyNutriRise team.",
    title: "The MyNutriRise Blog",
    subtitle: "Practical guides on nutrition, fasting, and building habits that stick.",
    breadcrumb: "Blog",
  },
  cta: {
    intermittentFasting: {
      heading: "Track your fast automatically",
      body: "MyNutriRise includes 16:8, 5:2 and more fasting protocols with timers, insights, and meal logging in one app.",
    },
    aiPhoto: {
      heading: "Try AI meal scanning",
      body: "MyNutriRise identifies your food, estimates portions, and logs calories and macros from a single photo.",
    },
    halalMacros: {
      heading: "Your food, tracked properly",
      body: "MyNutriRise includes halal-friendly recipes and cultural cuisine libraries — Afghan, Arabic, Bangladeshi, and more.",
    },
  },
  intermittentFasting: {
    title: "Intermittent Fasting 16:8 — A Beginner's Guide",
    description:
      "What the 16:8 fasting method is, how it works, who it suits, and how to start without making the common mistakes.",
    breadcrumb: "Intermittent Fasting 16:8",
    dateLabel: "June 9, 2026",
    readTime: "5 min read",
    blocks: [
      {
        type: "p",
        text: "The 16:8 method is the most popular form of intermittent fasting, and for good reason: it's simple. You eat during an 8-hour window each day and fast for the remaining 16 hours — most of which you spend asleep anyway.",
      },
      { type: "h2", text: "How it works" },
      {
        type: "p",
        text: "A typical 16:8 schedule means finishing dinner by 8 PM and eating your first meal at noon the next day. During the fasting window you drink water, black coffee, or unsweetened tea. Rather than changing <em>what</em> you eat, 16:8 changes <em>when</em> — which for many people naturally reduces late-night snacking and total calorie intake.",
      },
      { type: "h2", text: "Picking your eating window" },
      {
        type: "p",
        text: "The best window is the one that fits your life. Early risers often prefer 10 AM–6 PM; social eaters tend toward 12–8 PM so dinner with family stays on the table. If 16 hours feels hard at first, start with 12:12 or 14:10 and extend gradually — consistency beats intensity.",
      },
      { type: "h2", text: "Common beginner mistakes" },
      {
        type: "ul",
        items: [
          "<b>Overeating in the window.</b> Fasting doesn't cancel out calories; track your meals so the window doesn't become a free-for-all.",
          "<b>Skimping on protein.</b> With fewer meals it's easy to under-eat protein — aim to anchor each meal around a protein source.",
          "<b>Forgetting hydration.</b> Much of your usual fluid intake comes from food. Drink more water than feels necessary.",
          "<b>All-or-nothing thinking.</b> Breaking your fast early occasionally changes very little. What matters is the weekly pattern.",
        ],
      },
      { type: "h2", text: "16:8 and Ramadan — how they differ" },
      {
        type: "p",
        text: `Ramadan fasting runs roughly dawn to sunset with no food <em>or fluids</em>, while 16:8 allows water and unsweetened drinks throughout. That makes hydration the key difference: in Ramadan, front-load fluids at suhoor and iftar. The nutrition logic is the same in both — your daily calorie needs do not change, so plan your two meals to cover them. Use our free <calorieCalculator>calorie calculator</calorieCalculator> to find that number, and note that MyNutriRise includes a dedicated Ramadan schedule among its ${f.FASTING_PLAN_COUNT} fasting plans.`,
      },
      { type: "h2", text: "Who should be careful" },
      {
        type: "p",
        text: "Intermittent fasting isn't for everyone. If you are pregnant, breastfeeding, under 18, have a history of disordered eating, or manage a condition like diabetes, talk to your doctor before changing your meal timing.",
      },
    ],
  },
  aiPhoto: {
    title: "How AI Photo Calorie Tracking Actually Works",
    description:
      "Snap a photo, get calories and macros. Here's what happens behind the scenes — and how to get the most accurate results.",
    breadcrumb: "How AI Photo Calorie Tracking",
    dateLabel: "June 9, 2026",
    readTime: "4 min read",
    blocks: [
      {
        type: "p",
        text: "The biggest reason people quit calorie tracking is friction: searching databases, weighing portions, logging ingredient by ingredient. AI photo tracking attacks that friction directly — you photograph your plate and the app does the rest.",
      },
      { type: "h2", text: "What happens when you snap a photo" },
      {
        type: "p",
        text: "Modern food-recognition models work in three steps. First, the AI detects the individual foods on the plate — rice, grilled chicken, salad, sauce. Second, it estimates portion sizes from visual cues like plate diameter, food height, and density. Third, it maps each item to a nutrition database to calculate calories, protein, carbs, and fat — and presents the result for you to confirm or adjust.",
      },
      { type: "h2", text: "How accurate is it?" },
      {
        type: "p",
        text: "For everyday meals, photo estimation typically lands close enough to keep your daily totals meaningful — and crucially, it's accurate <em>consistently</em>, which matters more than perfection. A tracking method you actually use every day beats a precise one you abandon after a week. Mixed dishes, hidden oils, and stacked foods are the hardest cases, which is why a good app lets you edit the AI's guess in one tap.",
      },
      { type: "h2", text: "Five tips for better scans" },
      {
        type: "ul",
        items: [
          "Shoot from a slight angle (30–45°), not directly overhead — it helps the AI judge food height.",
          "Get the whole plate in frame, with the rim visible for scale.",
          "Good lighting matters more than a good camera.",
          "For mixed dishes like biryani or stews, name the dish when the app asks — it sharpens the estimate.",
          "Spot-check the portion the AI guessed for calorie-dense items like rice, oil, and nuts.",
        ],
      },
      { type: "h2", text: "When to use other logging methods" },
      {
        type: "p",
        text: 'Photos are perfect for plated meals. For packaged foods, a barcode scan is faster and exact. For a quick coffee or a handful of dates, voice logging ("two dates and a latte") wins. The best workflow mixes all three.',
      },
    ],
  },
  halalMacros: {
    title: "Tracking Macros with Halal & Cultural Meals",
    description:
      "Kabuli pulao, mandi, biryani — traditional dishes deserve proper tracking. How to log cultural cuisine accurately.",
    breadcrumb: "Tracking Macros",
    dateLabel: "June 9, 2026",
    readTime: "5 min read",
    blocks: [
      {
        type: "p",
        text: "Most nutrition apps were built around Western menus. Search for “kabuli pulao”, “mandi”, or “machher jhol” and you'll often find nothing — or a generic “rice with meat” entry that misses the mark. That's a real problem: if your food isn't in the database, you either guess badly or stop tracking altogether.",
      },
      { type: "h2", text: "Why cultural dishes are tricky to track" },
      {
        type: "p",
        text: "Traditional dishes are usually mixed: rice, meat, oils, nuts, and sauces cooked together. The macros depend heavily on preparation — a home-style biryani and a restaurant one can differ by hundreds of calories per serving, mostly from cooking fat. Generic database entries can't capture that range, and weighing every ingredient of a family recipe is unrealistic.",
      },
      { type: "h2", text: "A practical approach" },
      {
        type: "ul",
        items: [
          "<b>Use an app with cultural cuisine libraries.</b> Purpose-built entries for Afghan, Arabic & Middle Eastern, Bangladeshi, and other cuisines get you far closer than generic equivalents.",
          "<b>Photo-scan plated meals.</b> AI scanning estimates the actual portion in front of you — especially useful for shared, family-style serving where “one serving” is fuzzy.",
          "<b>Watch the cooking fat, not the spices.</b> Spices are nutritionally trivial; ghee and oil are where the hidden calories live. If a dish looks glossy, nudge the fat estimate up.",
          "<b>Log your staples once.</b> Save your household's regular dishes as meal templates so repeat logging takes one tap.",
        ],
      },
      { type: "h2", text: "Macros for popular dishes (per serving)" },
      {
        type: "p",
        text: "Real numbers from the MyNutriRise food library — use them as reference points when you estimate restaurant or home portions:",
      },
      {
        type: "table",
        head: ["Dish", "kcal", "Protein", "Carbs", "Fat"],
        rows: [
          ["Chicken Biryani (Pakistani)", "480", "28g", "52g", "18g"],
          ["Kabuli Pulao (Afghan)", "480", "28g", "55g", "16g"],
          ["Nihari (Pakistani)", "450", "35g", "15g", "28g"],
          ["Chicken Tagine (Moroccan)", "380", "30g", "25g", "18g"],
          ["Adana Kebab (Turkish)", "380", "32g", "8g", "24g"],
          ["Koshari (Egyptian)", "380", "14g", "62g", "8g"],
          ["Shakshuka", "354", "18g", "14g", "24g"],
        ],
      },
      {
        type: "p",
        text: "More dishes with full nutrition are on our <recipes>recipes page</recipes>; to turn your calorie goal into gram targets, use the <macroCalculator>macro calculator</macroCalculator>.",
      },
      { type: "h2", text: "Halal tracking is about more than ingredients" },
      {
        type: "p",
        text: "Eating halal while pursuing a fitness goal shouldn't mean forcing yourself onto chicken-and-broccoli meal plans. The sustainable path is keeping the food you love and adjusting portions and frequency — which is exactly what proper tracking makes possible. During Ramadan, pairing meal logging with a fasting tracker also helps you keep suhoor and iftar balanced instead of swinging between extremes. For the full picture of halal-friendly tracking, see our <halalApp>halal nutrition app</halalApp> page.",
      },
    ],
  },
});
