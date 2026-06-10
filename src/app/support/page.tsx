"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const categories = [
  { id: "all", label: "All Topics", emoji: "📋" },
  { id: "getting-started", label: "Getting Started", emoji: "🚀" },
  { id: "meal-tracking", label: "Meal Tracking", emoji: "📸" },
  { id: "nutrition", label: "Nutrition & Recipes", emoji: "🥗" },
  { id: "health", label: "Health Tracking", emoji: "💪" },
  { id: "fasting", label: "Fasting", emoji: "⏱️" },
  { id: "progress", label: "Progress & Insights", emoji: "📊" },
  { id: "account", label: "Account", emoji: "⚙️" },
];

const faqs = [
  {
    category: "getting-started",
    question: "Welcome to MyNutriRise",
    answer:
      "MyNutriRise is your all-in-one nutrition and health companion. Track meals with AI-powered food recognition, monitor your water intake, manage your weight, explore international recipes, and much more — all in one app.",
  },
  {
    category: "getting-started",
    question: "Setting Up Your Profile",
    answer:
      "During onboarding, MyNutriRise asks about your age, weight, height, activity level, and goals. This information is used to calculate your daily calorie and macro targets. You can update these anytime from your profile.",
  },
  {
    category: "getting-started",
    question: "Your First Meal Scan",
    answer:
      "Tap the scan button (center of the bottom bar) to photograph any meal. Our AI identifies ingredients, estimates portions, and provides a full nutritional breakdown. You can edit the results if needed.",
  },
  {
    category: "getting-started",
    question: "Navigating the App",
    answer:
      "Use the bottom tabs to switch between Home, Fasting, Nutri Hub (quick actions), Recipes, Analytics, and AI Chat. The Nutri Hub gives you quick access to all features. Tap Edit to customize the layout.",
  },
  {
    category: "meal-tracking",
    question: "How does the AI Food Scanner work?",
    answer:
      "Point your camera at any meal and tap scan. Our AI analyzes the image to identify foods, estimate portion sizes, and calculate nutritional values including calories, protein, carbs, fat, fiber, and more.",
  },
  {
    category: "meal-tracking",
    question: "Tips for better scan results",
    answer:
      "For the most accurate results: photograph meals from above, ensure good lighting, keep the plate centered in frame, and include the full plate. The AI works best with clearly visible individual dishes.",
  },
  {
    category: "meal-tracking",
    question: "How do I scan packaged foods?",
    answer:
      "Tap the barcode icon to scan packaged food items. The app looks up the product in a global food database and auto-fills the nutritional information. If a barcode is not in our database, you can manually enter the nutrition facts from the package label.",
  },
  {
    category: "meal-tracking",
    question: "What is Quick Add?",
    answer:
      "Use Quick Add to rapidly log calories and macros without scanning. Perfect for when you know the approximate nutritional values or are in a hurry. You can also search any food name to auto-fill nutrition data from our database.",
  },
  {
    category: "nutrition",
    question: "How do AI Meal Plans work?",
    answer:
      "AI Meal Plans generates a personalized weekly meal plan based on your calorie target, macro goals, dietary preferences, and cuisine preferences. Each plan includes breakfast, lunch, dinner, and snacks. Tap refresh to regenerate any meal slot.",
  },
  {
    category: "nutrition",
    question: "Can I browse international cuisines?",
    answer:
      "Yes! Browse dishes from cuisines around the world including Middle Eastern, Mediterranean, Asian, Latin American, Indian, and more. Each cuisine features authentic dishes with full nutritional data, organized by meal type.",
  },
  {
    category: "nutrition",
    question: "How do Grocery Lists work?",
    answer:
      "Tap Grocery List in the Nutri Hub to create shopping lists. Add items manually or generate a list from your meal plan or saved recipes. Check off items as you shop and organize by category.",
  },
  {
    category: "nutrition",
    question: "Can I import recipes from websites?",
    answer:
      "Yes! Paste a recipe URL from popular cooking websites and MyNutriRise will extract the ingredients and nutritional information automatically. Review and adjust after importing, then save to your personal collection.",
  },
  {
    category: "health",
    question: "How does the Water Tracker work?",
    answer:
      "MyNutriRise sets a personalized daily water goal based on your weight and activity level (about 30-35ml per kg of body weight). Tap the water drop icon to log glasses or custom amounts. Quick-add buttons let you log common sizes with a single tap. Enable notifications for periodic hydration reminders.",
  },
  {
    category: "health",
    question: "How do I track my weight?",
    answer:
      "Record your weight regularly (ideally at the same time each day). MyNutriRise shows your weight trend over time with a smoothed average line. Set a target weight in your profile and the app calculates a healthy rate of change. Safe weight loss is 0.5-1 kg per week.",
  },
  {
    category: "health",
    question: "Can I connect wearable devices?",
    answer:
      "MyNutriRise integrates with Health Connect (Android) and Apple Health (iOS) to sync steps, heart rate, sleep, and exercise data from your wearable devices. This data enhances your daily calorie calculations.",
  },
  {
    category: "health",
    question: "What micronutrients are tracked?",
    answer:
      "Beyond macros, MyNutriRise tracks key micronutrients including fiber, sodium, sugar, iron, calcium, and vitamins from your logged meals. See how your daily intake compares to recommended values and identify potential deficiencies.",
  },
  {
    category: "fasting",
    question: "What is Intermittent Fasting?",
    answer:
      "Intermittent fasting (IF) is an eating pattern that cycles between periods of fasting and eating. Common methods include the 16:8 method (16 hours fasting, 8 hours eating), the 5:2 diet, and Eat-Stop-Eat. During fasting, your body starts burning fat for energy, insulin levels drop, and cellular repair processes are initiated.",
  },
  {
    category: "fasting",
    question: "How do I start my first fasting week?",
    answer:
      "Start with a 12-hour fast (e.g., 8pm to 8am). By day 3-4, extend to 14 hours. By day 5-7, try 16 hours if comfortable. Stay hydrated with water, herbal tea, or black coffee. Common first-week challenges include headaches (drink more water), irritability, and difficulty sleeping — these typically improve after the first week.",
  },
  {
    category: "fasting",
    question: "What can I consume during fasting?",
    answer:
      "Stick to zero-calorie beverages: water (plain or sparkling), black coffee (no sugar, no cream), herbal tea, and green tea. Even a small amount of calories can break your fast and stop the metabolic benefits.",
  },
  {
    category: "fasting",
    question: "When should I stop fasting?",
    answer:
      "Stop fasting and consult a doctor if you experience persistent dizziness or fainting, extreme fatigue, significant mood changes, irregular heartbeat, or rapid weight loss. Fasting is not suitable for everyone — consult your doctor if you are pregnant, breastfeeding, have a history of eating disorders, or have diabetes.",
  },
  {
    category: "progress",
    question: "What does the Progress Dashboard show?",
    answer:
      "The Analytics tab shows your nutrition trends, calorie balance, macro breakdown, and goal progress over time. Switch between daily, weekly, and monthly views. Track your calorie balance (consumed vs. burned) and identify macro trends.",
  },
  {
    category: "progress",
    question: "How does the Nutrition Calendar work?",
    answer:
      "The Nutrition Calendar shows a month-at-a-glance view with color-coded days: green means on target, yellow means close, red means off track. Tap any day to see a detailed breakdown of what you ate and how it compared to your goals.",
  },
  {
    category: "progress",
    question: "What is the Wellness Score?",
    answer:
      "Your Wellness Score (0-100) considers nutrition quality, hydration, activity level, sleep, and consistency. It provides a holistic view of your health habits. Focus on areas where you score lowest for the biggest improvements.",
  },
  {
    category: "progress",
    question: "Can I export my data?",
    answer:
      "Yes! Export your nutrition data as detailed reports. Choose the date range and what to include: meals, macros, weight, water, exercise. Export in PDF or CSV format to share with your doctor, nutritionist, or personal trainer.",
  },
  {
    category: "account",
    question: "What is included in Premium?",
    answer:
      "MyNutriRise offers a generous free tier with basic meal logging, water tracking, and limited recipes. Premium unlocks AI meal plans, advanced analytics, unlimited recipe access, and international cuisines. Manage your subscription through the App Store or Play Store.",
  },
  {
    category: "account",
    question: "How do I restore my purchases?",
    answer:
      "If you reinstall the app or switch devices, your premium status is restored automatically when you sign in. If not, go to Settings > Subscription > Restore Purchases.",
  },
  {
    category: "account",
    question: "Does MyNutriRise support Dark Mode?",
    answer:
      "Yes! Toggle dark mode from Settings. By default, MyNutriRise follows your system theme, so if your phone switches to dark mode at night, the app follows automatically.",
  },
  {
    category: "account",
    question: "How do I delete my account?",
    answer:
      "To delete your account and all associated data, go to the Help Center in the app and select Delete Account. This action is permanent and cannot be undone — all your meal logs, progress, and settings will be removed.",
  },
];

function FaqItem({
  question,
  answer,
  isOpen,
  onToggle,
}: {
  question: string;
  answer: string;
  isOpen: boolean;
  onToggle: () => void;
}) {
  const panelId = `faq-${question.replace(/\W+/g, "-").toLowerCase()}`;
  return (
    <div className="border-b border-slate-100 last:border-b-0">
      <button
        onClick={onToggle}
        aria-expanded={isOpen}
        aria-controls={panelId}
        className="flex w-full items-center justify-between gap-4 px-5 py-5 text-left transition-colors hover:bg-emerald-50/40 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-emerald-500 sm:px-6"
      >
        <span
          className={`text-sm font-medium transition-colors sm:text-[15px] ${isOpen ? "text-emerald-600" : "text-slate-700"}`}
        >
          {question}
        </span>
        <motion.div
          animate={{ rotate: isOpen ? 180 : 0 }}
          transition={{ duration: 0.3, ease: [0.4, 0, 0.2, 1] }}
          className={`flex h-6 w-6 shrink-0 items-center justify-center rounded-full transition-colors ${isOpen ? "bg-emerald-100 text-emerald-600" : "bg-slate-100 text-slate-500"}`}
        >
          <svg width="12" height="12" viewBox="0 0 12 12" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
            <path d="M2 4.5L6 8.5L10 4.5" />
          </svg>
        </motion.div>
      </button>
      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: [0.4, 0, 0.2, 1] }}
            className="overflow-hidden"
            id={panelId}
          >
            <div className="px-5 pb-5 sm:px-6">
              <p className="text-sm leading-relaxed text-slate-500 sm:text-[15px] sm:leading-7">
                {answer}
              </p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default function SupportPage() {
  const [activeCategory, setActiveCategory] = useState("all");
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const filtered =
    activeCategory === "all"
      ? faqs
      : faqs.filter((f) => f.category === activeCategory);

  const handleCategoryChange = (id: string) => {
    setActiveCategory(id);
    setOpenIndex(null);
  };

  return (
    <div className="pt-24">
      {/* Hero */}
      <section className="mx-auto max-w-4xl px-6 py-20">
        <div className="text-center">
          <h1 className="text-4xl font-bold tracking-tight text-slate-800 sm:text-5xl">
            How can we help?
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-slate-500">
            Whether you have a question, need troubleshooting help, or want to
            share an idea — we&apos;re here for you.
          </p>
        </div>

        <div className="mt-16 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          <div className="group rounded-2xl border border-slate-100 bg-white p-8 transition-all hover:border-emerald-200 hover:shadow-lg hover:shadow-emerald-50">
            <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-emerald-50 text-emerald-600">
              <svg fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="h-6 w-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0L3.32 8.91a2.25 2.25 0 0 1-1.07-1.916V6.75" />
              </svg>
            </div>
            <h2 className="mt-6 text-lg font-semibold text-slate-800">Email Support</h2>
            <p className="mt-2 text-sm leading-6 text-slate-500">We typically respond within 24 hours.</p>
            <a href="mailto:support@mynutririse.com" className="mt-4 inline-block text-sm font-medium text-emerald-600 hover:text-emerald-700">
              support@mynutririse.com
            </a>
          </div>

          <div className="group rounded-2xl border border-slate-100 bg-white p-8 transition-all hover:border-emerald-200 hover:shadow-lg hover:shadow-emerald-50">
            <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-emerald-50 text-emerald-600">
              <svg fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="h-6 w-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="M9.879 7.519c1.171-1.025 3.071-1.025 4.242 0 1.172 1.025 1.172 2.687 0 3.712-.203.179-.43.326-.67.442-.745.361-1.45.999-1.45 1.827v.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Zm-9 5.25h.008v.008H12v-.008Z" />
              </svg>
            </div>
            <h2 className="mt-6 text-lg font-semibold text-slate-800">FAQ</h2>
            <p className="mt-2 text-sm leading-6 text-slate-500">Find answers to common questions about the app.</p>
            <a href="#faq" className="mt-4 inline-block text-sm font-medium text-emerald-600 hover:text-emerald-700">
              Browse FAQ &rarr;
            </a>
          </div>

          <div className="group rounded-2xl border border-slate-100 bg-white p-8 transition-all hover:border-emerald-200 hover:shadow-lg hover:shadow-emerald-50 sm:col-span-2 lg:col-span-1">
            <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-emerald-50 text-emerald-600">
              <svg fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="h-6 w-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 18v-5.25m0 0a6.01 6.01 0 0 0 1.5-.189m-1.5.189a6.01 6.01 0 0 1-1.5-.189m3.75 7.478a12.06 12.06 0 0 1-4.5 0m3.75 2.383a14.406 14.406 0 0 1-3 0M14.25 18v-.192c0-.983.658-1.823 1.508-2.316a7.5 7.5 0 1 0-7.517 0c.85.493 1.509 1.333 1.509 2.316V18" />
              </svg>
            </div>
            <h2 className="mt-6 text-lg font-semibold text-slate-800">Feature Request</h2>
            <p className="mt-2 text-sm leading-6 text-slate-500">Tell us what you&apos;d like to see next.</p>
            <a href="mailto:contact@mynutririse.com" className="mt-4 inline-block text-sm font-medium text-emerald-600 hover:text-emerald-700">
              contact@mynutririse.com
            </a>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section id="faq" className="bg-gradient-to-b from-white to-emerald-50/30 py-20 lg:py-28">
        <div className="mx-auto max-w-4xl px-6">
          <div className="text-center">
            <p className="text-sm font-semibold tracking-widest uppercase text-emerald-600 mb-3">
              Support Center
            </p>
            <h2 className="text-3xl font-bold tracking-tight text-slate-800 sm:text-4xl">
              Frequently Asked Questions
            </h2>
            <p className="mt-4 text-base text-slate-500 max-w-xl mx-auto">
              Browse help topics from the MyNutriRise app. Can&apos;t find what you need? Reach out to our support team.
            </p>
          </div>

          {/* Category filter pills */}
          <div className="mt-10 flex flex-wrap justify-center gap-2">
            {categories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => handleCategoryChange(cat.id)}
                aria-pressed={activeCategory === cat.id}
                className={`inline-flex items-center gap-1.5 rounded-full px-4 py-2 text-sm font-medium transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-500 focus-visible:ring-offset-2 ${
                  activeCategory === cat.id
                    ? "bg-emerald-500 text-white shadow-md shadow-emerald-500/25"
                    : "bg-white text-slate-600 border border-slate-200 hover:border-emerald-300 hover:text-emerald-600 hover:bg-emerald-50"
                }`}
              >
                <span className="text-sm">{cat.emoji}</span>
                <span className="hidden sm:inline">{cat.label}</span>
              </button>
            ))}
          </div>

          {/* Count badge */}
          <div className="mt-6 text-center">
            <span className="text-xs text-slate-500">
              {filtered.length} {filtered.length === 1 ? "question" : "questions"}
            </span>
          </div>

          {/* FAQ list */}
          <motion.div
            layout
            className="mt-6 overflow-hidden rounded-2xl border border-slate-200/80 bg-white shadow-sm"
          >
            <AnimatePresence mode="wait">
              <motion.div
                key={activeCategory}
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -8 }}
                transition={{ duration: 0.2 }}
              >
                {filtered.map((faq, i) => (
                  <FaqItem
                    key={`${activeCategory}-${i}`}
                    question={faq.question}
                    answer={faq.answer}
                    isOpen={openIndex === i}
                    onToggle={() => setOpenIndex(openIndex === i ? null : i)}
                  />
                ))}
              </motion.div>
            </AnimatePresence>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
