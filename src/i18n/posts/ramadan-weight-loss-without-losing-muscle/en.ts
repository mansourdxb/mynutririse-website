import type { Facts } from "@/data/facts";
import type { PostContent } from "../types";

// Blocks render through src/components/content/ContentBlocks.tsx; link tags
// such as <ramadan>…</ramadan> are listed in LINK_TAGS there.
export default (f: Facts): PostContent => ({
  title: "Losing weight during Ramadan without losing muscle",
  metaTitle: "Lose Weight in Ramadan Without Losing Muscle",
  description:
    "How to lose fat during Ramadan while keeping your muscle: what research shows, the right deficit, protein at iftar and suhoor, training timing and after Eid.",
  breadcrumb: "Ramadan weight loss",
  readTime: "8 min read",
  blocks: [
    {
      type: "p",
      text: "Many people see Ramadan as a chance to lose weight. It can be, but the scale does not tell the whole story: some of the weight lost during the month can be muscle, and much of it often comes back after Eid. This guide explains what research shows and how to set up your eating and training so that what you lose is mostly fat.",
    },
    { type: "h2", text: "What happens to weight and muscle during Ramadan" },
    {
      type: "p",
      text: "A 2019 systematic review and meta-analysis of healthy adults found that Ramadan fasting led to small reductions in weight and fat mass, especially in people with overweight or obesity. It also found a significant loss of fat-free mass, which includes muscle, although this was about 30% smaller than the loss of fat. An earlier meta-analysis found that weight lost during Ramadan was relatively small and was mostly regained within a few weeks after the month ended.",
    },
    {
      type: "p",
      text: "Two lessons follow. First, losing some lean mass is common, so it is worth protecting. Second, the habits you build matter more than the month itself: if you return to your old routine after Eid, the weight usually returns too.",
    },
    { type: "h2", text: "Rule 1: use a small deficit, not a crash" },
    {
      type: "p",
      text: "Your daily energy needs stay roughly the same in Ramadan. You simply eat them in a shorter window. Find your maintenance calories with the <tdee>TDEE calculator</tdee> and aim for a deficit of about 300–500 kcal a day across iftar, the evening and suhoor. That is enough to lose around 0.25–0.5 kg a week without making fasting days feel harder.",
    },
    {
      type: "p",
      text: "Avoid the temptation to eat one small meal a day. A large deficit on top of long fasts costs more muscle and leaves you tired for work, prayer and family. Never go below 1,200 kcal a day for women or 1,500 kcal a day for men without medical supervision.",
    },
    { type: "h2", text: "Rule 2: get enough protein, split over the night" },
    {
      type: "p",
      text: "Protein is your best tool for keeping muscle. If you train, aim for about 1.6 g per kg of body weight per day, and up to around 2.2 g/kg while losing fat. Research on protein distribution suggests that several meals of roughly 0.4 g/kg each work better for muscle than one large meal, so split your target over three eating moments:",
    },
    {
      type: "table",
      head: ["Eating moment", "Share of protein", "Example for a 75 kg person (about 120 g a day)"],
      rows: [
        ["Iftar", "about 40%", "Grilled chicken or fish with lentil soup, about 45–50 g"],
        ["Evening meal or snack", "about 25%", "Greek yogurt with fruit, or eggs, about 30 g"],
        ["Suhoor", "about 35%", "Eggs, labneh or ful medames with wholegrain bread, about 40 g"],
      ],
    },
    {
      type: "p",
      text: "Use the <protein>protein calculator</protein> for your own number. If you struggle to eat enough at iftar, the evening meal is the easiest place to add protein.",
    },
    { type: "h2", text: "Rule 3: keep strength training" },
    {
      type: "p",
      text: "Training gives your body a reason to hold on to muscle. You do not need to train as hard as usual; keeping the weights moving matters more than chasing personal records.",
    },
    {
      type: "ul",
      items: [
        "<b>Shortly before iftar:</b> train for 30–45 minutes and eat soon after. Keep intensity moderate because you are fasted and may be dehydrated.",
        "<b>1–2 hours after iftar:</b> you are fed and can drink water during the session. Many people find this the best option for heavier lifting.",
        "Two or three full-body sessions a week are enough to maintain muscle for a month.",
        "Stop if you feel dizzy, faint or unwell, and drink water as soon as you can.",
      ],
    },
    { type: "h2", text: "Rule 4: hydrate and sleep" },
    {
      type: "p",
      text: "Spread water across the night rather than drinking a lot at once, include soup, fruit and vegetables, and limit very salty foods at suhoor. Sleep often gets shorter in Ramadan; protect it where you can with a short nap or an earlier night, because poor sleep makes hunger harder to manage and recovery slower.",
    },
    { type: "h2", text: "A sample day" },
    {
      type: "table",
      head: ["Time", "What to eat"],
      rows: [
        ["Sunset", "Water and 2–3 dates, then a bowl of lentil soup"],
        ["Main iftar", "Grilled protein, a large salad and a moderate portion of rice or bread"],
        ["Evening", "Greek yogurt with fruit, or a small portion of nuts; water"],
        ["Suhoor", "Eggs or ful medames, wholegrain bread, cucumber and tomato, water"],
      ],
    },
    {
      type: "p",
      text: "Sweets are part of Ramadan for many families. Enjoy them in small portions a few times a week rather than every night, and log them so you can see how they fit. Our <ramadan>Ramadan diet plan</ramadan> page has more detail on balanced suhoor and iftar meals.",
    },
    { type: "h2", text: "After Eid: keep what you gained" },
    {
      type: "p",
      text: "The weeks after Ramadan decide whether your progress lasts. Return to three regular meals, keep the protein habit, keep training and stay near your new maintenance calories rather than celebrating for a month. If you want to keep losing weight, continue with a moderate deficit; our guide to <caloriesguide>how many calories to eat to lose weight</caloriesguide> explains how to set it.",
    },
    { type: "h2", text: "Track it simply" },
    {
      type: "p",
      text: `MyNutriRise includes a Ramadan fasting schedule among ${f.FASTING_PLAN_COUNT} fasting plans, logs iftar dishes from a photo and shows your protein for the day across all three eating moments. It is fully available in Arabic. See the <weightloss>weight loss app</weightloss> page for how it works.`,
    },
    { type: "h2", text: "Who should talk to a doctor first" },
    {
      type: "p",
      text: "If you have diabetes, especially if you use insulin or medicines that lower blood sugar, kidney or heart disease, are pregnant or breastfeeding, are older or take regular medication, speak to your doctor well before Ramadan about whether and how to fast safely. This article is general information, not medical or religious advice.",
    },
    {
      type: "sources",
      sources: [
        {
          label: "Fernando HA et al. Effect of Ramadan Fasting on Weight and Body Composition in Healthy Non-Athlete Adults: A Systematic Review and Meta-Analysis. Nutrients, 2019.",
          url: "https://pubmed.ncbi.nlm.nih.gov/30813495/",
        },
        {
          label: "Sadeghirad B et al. Islamic fasting and weight loss: a systematic review and meta-analysis. Public Health Nutr, 2014.",
          url: "https://pubmed.ncbi.nlm.nih.gov/23182306/",
        },
        {
          label: "Schoenfeld BJ, Aragon AA. How much protein can the body use in a single meal for muscle-building? Implications for daily protein distribution. J Int Soc Sports Nutr, 2018.",
          url: "https://pubmed.ncbi.nlm.nih.gov/29497353/",
        },
        {
          label: "Morton RW et al. A systematic review, meta-analysis and meta-regression of the effect of protein supplementation on resistance training-induced gains in muscle mass and strength. Br J Sports Med, 2018.",
          url: "https://pubmed.ncbi.nlm.nih.gov/28698222/",
        },
      ],
    },
  ],
  cta: {
    heading: "Plan your Ramadan with MyNutriRise",
    body: "Track your fast, log iftar from a photo and keep your protein on target, in Arabic or English.",
  },
});
