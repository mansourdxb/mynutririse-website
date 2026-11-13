import type { Facts } from "@/data/facts";
import type { LandingContent } from "../types";

// /ramadan-diet-plan — target searches: "Ramadan diet plan", "Ramadan weight loss";
// AR "رجيم رمضان", RU "питание в Рамадан". Blocks render through
// src/components/content/ContentBlocks.tsx; link tags are listed in LINK_TAGS there.
export default (f: Facts): LandingContent => ({
  metaTitle: "Ramadan Diet Plan: Suhoor & Iftar Guide | MyNutriRise",
  metaDescription:
    "A practical Ramadan diet plan: what to eat at suhoor and iftar, staying hydrated, losing weight safely and keeping muscle while fasting. Plan your Ramadan.",
  breadcrumb: "Ramadan Diet Plan",
  title: "Ramadan diet plan: eat well at suhoor and iftar, and keep your muscle",
  intro:
    "Ramadan changes when you eat, not how much your body needs. This guide shows how to build balanced suhoor and iftar meals, stay hydrated, keep your muscle and, if you want to, lose weight gently during the month.",
  screenshots: [
    {
      name: "fasting",
      alt: "MyNutriRise fasting screen with a fasting timer and fasting milestones",
      caption: "Track your fast with a timer, including a Ramadan schedule.",
    },
    {
      name: "meal-photos",
      alt: "MyNutriRise food diary with photos of logged meals such as shawarma and kofta with their calories",
      caption: "Log iftar dishes like shawarma and kofta from a photo.",
    },
    {
      name: "today",
      alt: "MyNutriRise Today screen showing calories left, macronutrients and steps",
      caption: "See calories and protein for the day across both meals.",
    },
  ],
  blocks: [
    { type: "h2", text: "What happens to your body in Ramadan" },
    {
      type: "p",
      text: "During Ramadan you eat and drink only between sunset and dawn, so your meals squeeze into a shorter window and your sleep often shifts. Your daily energy needs stay roughly the same. Research shows that many people lose a little weight during the month, mostly fat but also some lean mass, and that most of the weight usually returns within weeks after Ramadan. The goal of a good Ramadan diet plan is to stay energised, protect your muscle and avoid the iftar overeating that cancels out the fast.",
    },
    { type: "h2", text: "How many calories you need in Ramadan" },
    {
      type: "p",
      text: "Your needs are close to what they are the rest of the year, because your body, your activity and your resting energy use do not change much. Find your maintenance calories with the <tdee>TDEE calculator</tdee> and aim to reach it across iftar, a light evening meal and suhoor. If you want to lose weight, a moderate deficit of about 300–500 kcal is enough; never go below 1,200 kcal a day for women or 1,500 kcal a day for men.",
    },
    { type: "h2", text: "Suhoor: the meal that carries your fast" },
    {
      type: "p",
      text: "Suhoor should keep you full and steady for many hours. Build it around protein, slow-digesting carbohydrates and fibre, with some healthy fat, and drink water with it.",
    },
    {
      type: "ul",
      items: [
        "<b>Protein:</b> eggs, labneh or Greek yogurt, cheese, ful medames or chickpeas.",
        "<b>Slow carbs:</b> oats, wholegrain bread, brown rice or freekeh.",
        "<b>Fibre and water-rich food:</b> cucumber, tomatoes, fruit such as watermelon or oranges.",
        "<b>Go easy on:</b> very salty foods (pickles, salty cheese, processed meat), which make you thirsty, and large amounts of sugary items.",
        "Eat suhoor as late as you comfortably can rather than skipping it.",
      ],
    },
    { type: "h2", text: "Iftar: break the fast without overeating" },
    {
      type: "ul",
      items: [
        "Start with water and a few dates, which give quick energy without a heavy load.",
        "Have a bowl of soup, for example lentil soup, before the main meal. It rehydrates and helps you eat more slowly.",
        "Build the main plate as a balance: half vegetables or salad, a quarter protein (grilled chicken, fish, lean meat, legumes) and a quarter rice, bread or potatoes.",
        "Keep fried foods like sambousek and sweets like qatayef or kunafa as small portions rather than every night.",
        "Take a break after iftar before deciding whether you need more.",
      ],
    },
    { type: "h2", text: "A sample day" },
    {
      type: "table",
      head: ["Time", "Meal", "Example"],
      rows: [
        ["Sunset", "Iftar (light start)", "Water, 3 dates, lentil soup"],
        ["After prayer", "Main iftar", "Grilled chicken or fish, salad, a portion of rice or bread"],
        ["Evening", "Snack", "Greek yogurt with fruit, or a handful of nuts"],
        ["Before dawn", "Suhoor", "Eggs or ful medames, wholegrain bread, cucumber and tomato, water"],
      ],
    },
    { type: "h2", text: "Staying hydrated" },
    {
      type: "p",
      text: "You cannot drink during the day, so spread water across the evening and night instead of drinking a lot at once. Water-rich foods such as soup, fruit and vegetables help. Limit very salty food and keep tea and coffee moderate, especially at suhoor. If you feel dizzy, confused or faint during a fast, it is a sign to stop and seek help.",
    },
    { type: "h2", text: "Keeping your muscle while fasting" },
    {
      type: "p",
      text: "Studies of Ramadan fasting show that some of the weight lost is lean mass, not only fat. You can protect your muscle with three habits:",
    },
    {
      type: "ul",
      items: [
        "<b>Protein at every meal:</b> split your daily target, about 1.6 g per kg of body weight if you train, between iftar, the evening snack and suhoor. The <protein>protein calculator</protein> gives your number.",
        "<b>Keep strength training:</b> lighter sessions are fine. Many people train shortly before iftar or 1–2 hours after it.",
        "<b>Avoid a large deficit:</b> a small one is enough; the month is short and a big deficit costs more muscle.",
      ],
    },
    { type: "h2", text: "Losing weight in Ramadan" },
    {
      type: "p",
      text: "Ramadan can be a good start for healthier habits, but research shows the weight people lose during the month is usually small and mostly regained afterwards. If weight loss is your goal, the habits matter more than the month: a moderate deficit, controlled iftar portions and protein at every meal, continued after Eid. Our <weightloss>weight loss app</weightloss> page and the <deficit>calorie deficit calculator</deficit> help you plan beyond Ramadan.",
    },
    { type: "h2", text: "How MyNutriRise helps during Ramadan" },
    {
      type: "ul",
      items: [
        `A Ramadan schedule is one of ${f.FASTING_PLAN_COUNT} fasting plans in the app, with a timer for your fast.`,
        "Snap a photo of your iftar plate and the AI logs calories and macros, so you can see how the whole evening adds up.",
        `Halal filtering is checked across every dish, and the library covers ${f.CUISINES} cuisines, including Gulf and Middle Eastern recipes.`,
        "The app is fully available in Arabic.",
      ],
    },
    {
      type: "p",
      text: "For how a daily fasting window compares with Ramadan fasting, see our <ifguide>16:8 intermittent fasting guide</ifguide>.",
    },
    { type: "h2", text: "Who should talk to a doctor first" },
    {
      type: "p",
      text: "People with diabetes, especially those using insulin or certain other medicines, people with kidney or heart disease, pregnant or breastfeeding women, older adults and anyone taking regular medication should speak to their doctor well before Ramadan about whether and how to fast safely.",
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
          label: "Morton RW et al. A systematic review, meta-analysis and meta-regression of the effect of protein supplementation on resistance training-induced gains in muscle mass and strength. Br J Sports Med, 2018.",
          url: "https://pubmed.ncbi.nlm.nih.gov/28698222/",
        },
      ],
    },
  ],
  faqs: [
    {
      question: "What should I eat at suhoor to stay full?",
      answer:
        "Combine protein (eggs, yogurt, labneh, ful), slow carbohydrates (oats, wholegrain bread) and fibre-rich fruit and vegetables, with water. Avoid very salty and very sugary foods.",
    },
    {
      question: "How should I break my fast?",
      answer:
        "Start with water and a few dates, then soup, then a balanced main plate of vegetables, protein and a moderate portion of rice or bread. Eating slowly helps prevent overeating.",
    },
    {
      question: "Can I lose weight during Ramadan?",
      answer:
        "Yes, with a moderate calorie deficit and controlled iftar portions. Research shows weight lost during Ramadan is often regained, so keep the habits after Eid.",
    },
    {
      question: "How do I avoid losing muscle while fasting?",
      answer:
        "Eat protein at every meal, keep doing some strength training, and avoid a large calorie deficit during the month.",
    },
    {
      question: "When is the best time to exercise in Ramadan?",
      answer:
        "Many people train shortly before iftar so they can eat soon after, or 1–2 hours after iftar when they are fed and hydrated. Keep sessions moderate and stop if you feel unwell.",
    },
    {
      question: "Is fasting safe for people with diabetes?",
      answer:
        "It depends on the type of diabetes and medication. Speak to your doctor well before Ramadan; some people need to adjust their treatment and some are advised not to fast.",
    },
  ],
  disclaimer:
    "This page gives general information, not medical or religious advice. If you have diabetes or another medical condition, take regular medication, or are pregnant or breastfeeding, speak to your doctor before Ramadan about fasting safely.",
  ctaTitle: "Plan your Ramadan with MyNutriRise",
  ctaBody: "Free to download. Track your fast, log iftar from a photo and keep your protein on target all month.",
});
