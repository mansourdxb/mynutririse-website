"use client";

import { useState } from "react";

export default function SupportPage() {
  return (
    <div className="pt-24">
      <section className="mx-auto max-w-4xl px-6 py-20">
        <div className="text-center">
          <h1 className="text-4xl font-bold tracking-tight text-slate-800 sm:text-5xl">
            How can we help?
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-slate-600">
            Whether you have a question, need troubleshooting help, or want to
            share an idea — we&apos;re here for you.
          </p>
        </div>

        <div className="mt-16 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {/* Email Support */}
          <div className="group rounded-2xl border border-zinc-200 bg-white p-8 transition-all hover:border-emerald-200 hover:shadow-lg hover:shadow-emerald-50">
            <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-emerald-50 text-emerald-600">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="h-6 w-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0L3.32 8.91a2.25 2.25 0 0 1-1.07-1.916V6.75"
                />
              </svg>
            </div>
            <h2 className="mt-6 text-lg font-semibold text-slate-800">
              Email Support
            </h2>
            <p className="mt-2 text-sm leading-6 text-slate-600">
              We typically respond within 24 hours.
            </p>
            <a
              href="mailto:support@mynutririse.com"
              className="mt-4 inline-block text-sm font-medium text-emerald-600 hover:text-emerald-700"
            >
              support@mynutririse.com
            </a>
          </div>

          {/* FAQ */}
          <div className="group rounded-2xl border border-zinc-200 bg-white p-8 transition-all hover:border-emerald-200 hover:shadow-lg hover:shadow-emerald-50">
            <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-emerald-50 text-emerald-600">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="h-6 w-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M9.879 7.519c1.171-1.025 3.071-1.025 4.242 0 1.172 1.025 1.172 2.687 0 3.712-.203.179-.43.326-.67.442-.745.361-1.45.999-1.45 1.827v.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Zm-9 5.25h.008v.008H12v-.008Z"
                />
              </svg>
            </div>
            <h2 className="mt-6 text-lg font-semibold text-slate-800">FAQ</h2>
            <p className="mt-2 text-sm leading-6 text-slate-600">
              Find answers to common questions about the app, your account, and
              subscriptions.
            </p>
            <a
              href="#faq"
              className="mt-4 inline-block text-sm font-medium text-emerald-600 hover:text-emerald-700"
            >
              Browse FAQ &rarr;
            </a>
          </div>

          {/* Feature Request */}
          <div className="group rounded-2xl border border-zinc-200 bg-white p-8 transition-all hover:border-emerald-200 hover:shadow-lg hover:shadow-emerald-50">
            <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-emerald-50 text-emerald-600">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="h-6 w-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M12 18v-5.25m0 0a6.01 6.01 0 0 0 1.5-.189m-1.5.189a6.01 6.01 0 0 1-1.5-.189m3.75 7.478a12.06 12.06 0 0 1-4.5 0m3.75 2.383a14.406 14.406 0 0 1-3 0M14.25 18v-.192c0-.983.658-1.823 1.508-2.316a7.5 7.5 0 1 0-7.517 0c.85.493 1.509 1.333 1.509 2.316V18"
                />
              </svg>
            </div>
            <h2 className="mt-6 text-lg font-semibold text-slate-800">
              Feature Request
            </h2>
            <p className="mt-2 text-sm leading-6 text-slate-600">
              Tell us what you&apos;d like to see next. We read every
              suggestion.
            </p>
            <a
              href="mailto:feedback@mynutririse.com"
              className="mt-4 inline-block text-sm font-medium text-emerald-600 hover:text-emerald-700"
            >
              feedback@mynutririse.com
            </a>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section id="faq" className="mx-auto max-w-4xl px-6 pb-20">
        <h2 className="text-3xl font-bold tracking-tight text-slate-800">
          Frequently Asked Questions
        </h2>
        <p className="mt-4 text-slate-600">
          Browse help topics from the MyNutriRise app.
        </p>

        <div className="mt-12 space-y-10">
          {/* Getting Started */}
          <FaqCategory title="Getting Started">
            <FaqItem question="Welcome to MyNutriRise">
              MyNutriRise is your all-in-one nutrition and health companion.
              Track meals with AI-powered food recognition, monitor your water
              intake, manage your weight, explore international recipes, and
              much more — all in one app.
            </FaqItem>
            <FaqItem question="Setting Up Your Profile">
              During onboarding, MyNutriRise asks about your age, weight,
              height, activity level, and goals. This information is used to
              calculate your daily calorie and macro targets. You can update
              these anytime from your profile.
            </FaqItem>
            <FaqItem question="Your First Meal Scan">
              Tap the scan button (center of the bottom bar) to photograph any
              meal. Our AI identifies ingredients, estimates portions, and
              provides a full nutritional breakdown. You can edit the results if
              needed.
            </FaqItem>
            <FaqItem question="Navigating the App">
              Use the bottom tabs to switch between Home, Fasting, Nutri Hub
              (quick actions), Recipes, Analytics, and AI Chat. The Nutri Hub
              gives you quick access to all features. Tap Edit to customize the
              layout.
            </FaqItem>
          </FaqCategory>

          {/* Meal Tracking */}
          <FaqCategory title="Meal Tracking">
            <FaqItem question="How does the AI Food Scanner work?">
              Point your camera at any meal and tap scan. Our AI analyzes the
              image to identify foods, estimate portion sizes, and calculate
              nutritional values including calories, protein, carbs, fat, fiber,
              and more.
            </FaqItem>
            <FaqItem question="Tips for better scan results">
              For the most accurate results: photograph meals from above, ensure
              good lighting, keep the plate centered in frame, and include the
              full plate. The AI works best with clearly visible individual
              dishes.
            </FaqItem>
            <FaqItem question="How do I scan packaged foods?">
              Tap the barcode icon to scan packaged food items. The app looks up
              the product in a global food database and auto-fills the
              nutritional information. If a barcode is not in our database, you
              can manually enter the nutrition facts from the package label.
            </FaqItem>
            <FaqItem question="What is Quick Add?">
              Use Quick Add to rapidly log calories and macros without scanning.
              Perfect for when you know the approximate nutritional values or
              are in a hurry. You can also search any food name to auto-fill
              nutrition data from our database.
            </FaqItem>
          </FaqCategory>

          {/* Nutrition & Recipes */}
          <FaqCategory title="Nutrition & Recipes">
            <FaqItem question="How do AI Meal Plans work?">
              AI Meal Plans generates a personalized weekly meal plan based on
              your calorie target, macro goals, dietary preferences, and cuisine
              preferences. Each plan includes breakfast, lunch, dinner, and
              snacks. Tap refresh to regenerate any meal slot.
            </FaqItem>
            <FaqItem question="Can I browse international cuisines?">
              Yes! Browse dishes from cuisines around the world including Middle
              Eastern, Mediterranean, Asian, Latin American, Indian, and more.
              Each cuisine features authentic dishes with full nutritional data,
              organized by meal type.
            </FaqItem>
            <FaqItem question="How do Grocery Lists work?">
              Tap Grocery List in the Nutri Hub to create shopping lists. Add
              items manually or generate a list from your meal plan or saved
              recipes. Check off items as you shop and organize by category.
            </FaqItem>
            <FaqItem question="Can I import recipes from websites?">
              Yes! Paste a recipe URL from popular cooking websites and
              MyNutriRise will extract the ingredients and nutritional
              information automatically. Review and adjust after importing, then
              save to your personal collection.
            </FaqItem>
          </FaqCategory>

          {/* Health Tracking */}
          <FaqCategory title="Health Tracking">
            <FaqItem question="How does the Water Tracker work?">
              MyNutriRise sets a personalized daily water goal based on your
              weight and activity level (about 30-35ml per kg of body weight).
              Tap the water drop icon to log glasses or custom amounts.
              Quick-add buttons let you log common sizes with a single tap.
              Enable notifications for periodic hydration reminders.
            </FaqItem>
            <FaqItem question="How do I track my weight?">
              Record your weight regularly (ideally at the same time each day).
              MyNutriRise shows your weight trend over time with a smoothed
              average line. Set a target weight in your profile and the app
              calculates a healthy rate of change. Safe weight loss is 0.5-1 kg
              per week.
            </FaqItem>
            <FaqItem question="Can I connect wearable devices?">
              MyNutriRise integrates with Health Connect (Android) and Apple
              Health (iOS) to sync steps, heart rate, sleep, and exercise data
              from your wearable devices. This data enhances your daily calorie
              calculations.
            </FaqItem>
            <FaqItem question="What micronutrients are tracked?">
              Beyond macros, MyNutriRise tracks key micronutrients including
              fiber, sodium, sugar, iron, calcium, and vitamins from your logged
              meals. See how your daily intake compares to recommended values
              and identify potential deficiencies.
            </FaqItem>
          </FaqCategory>

          {/* Intermittent Fasting */}
          <FaqCategory title="Intermittent Fasting">
            <FaqItem question="What is Intermittent Fasting?">
              Intermittent fasting (IF) is an eating pattern that cycles between
              periods of fasting and eating. Common methods include the 16:8
              method (16 hours fasting, 8 hours eating), the 5:2 diet, and
              Eat-Stop-Eat. During fasting, your body starts burning fat for
              energy, insulin levels drop, and cellular repair processes are
              initiated.
            </FaqItem>
            <FaqItem question="How do I start my first fasting week?">
              Start with a 12-hour fast (e.g., 8pm to 8am). By day 3-4, extend
              to 14 hours. By day 5-7, try 16 hours if comfortable. Stay
              hydrated with water, herbal tea, or black coffee. Common
              first-week challenges include headaches (drink more water),
              irritability, and difficulty sleeping — these typically improve
              after the first week.
            </FaqItem>
            <FaqItem question="What can I consume during fasting?">
              Stick to zero-calorie beverages: water (plain or sparkling), black
              coffee (no sugar, no cream), herbal tea, and green tea. Even a
              small amount of calories can break your fast and stop the
              metabolic benefits.
            </FaqItem>
            <FaqItem question="When should I stop fasting?">
              Stop fasting and consult a doctor if you experience persistent
              dizziness or fainting, extreme fatigue, significant mood changes,
              irregular heartbeat, or rapid weight loss. Fasting is not suitable
              for everyone — consult your doctor if you are pregnant,
              breastfeeding, have a history of eating disorders, or have
              diabetes.
            </FaqItem>
          </FaqCategory>

          {/* Progress & Insights */}
          <FaqCategory title="Progress & Insights">
            <FaqItem question="What does the Progress Dashboard show?">
              The Analytics tab shows your nutrition trends, calorie balance,
              macro breakdown, and goal progress over time. Switch between
              daily, weekly, and monthly views. Track your calorie balance
              (consumed vs. burned) and identify macro trends.
            </FaqItem>
            <FaqItem question="How does the Nutrition Calendar work?">
              The Nutrition Calendar shows a month-at-a-glance view with
              color-coded days: green means on target, yellow means close, red
              means off track. Tap any day to see a detailed breakdown of what
              you ate and how it compared to your goals.
            </FaqItem>
            <FaqItem question="What is the Wellness Score?">
              Your Wellness Score (0-100) considers nutrition quality,
              hydration, activity level, sleep, and consistency. It provides a
              holistic view of your health habits. Focus on areas where you
              score lowest for the biggest improvements.
            </FaqItem>
            <FaqItem question="Can I export my data?">
              Yes! Export your nutrition data as detailed reports. Choose the
              date range and what to include: meals, macros, weight, water,
              exercise. Export in PDF or CSV format to share with your doctor,
              nutritionist, or personal trainer.
            </FaqItem>
          </FaqCategory>

          {/* Subscription & Account */}
          <FaqCategory title="Subscription & Account">
            <FaqItem question="What is included in Premium?">
              MyNutriRise offers a generous free tier with basic meal logging,
              water tracking, and limited recipes. Premium unlocks AI meal
              plans, advanced analytics, unlimited recipe access, and
              international cuisines. Manage your subscription through the App
              Store or Play Store.
            </FaqItem>
            <FaqItem question="How do I restore my purchases?">
              If you reinstall the app or switch devices, your premium status is
              restored automatically when you sign in. If not, go to Settings
              &gt; Subscription &gt; Restore Purchases.
            </FaqItem>
            <FaqItem question="Does MyNutriRise support Dark Mode?">
              Yes! Toggle dark mode from Settings. By default, MyNutriRise
              follows your system theme, so if your phone switches to dark mode
              at night, the app follows automatically.
            </FaqItem>
            <FaqItem question="How do I delete my account?">
              To delete your account and all associated data, go to the Help
              Center in the app and select Delete Account. This action is
              permanent and cannot be undone — all your meal logs, progress, and
              settings will be removed.
            </FaqItem>
          </FaqCategory>
        </div>
      </section>
    </div>
  );
}

/* ── FAQ Components ──────────────────────────────────────────────── */

function FaqCategory({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) {
  return (
    <div>
      <h3 className="text-xl font-semibold text-slate-800">{title}</h3>
      <div className="mt-4 divide-y divide-zinc-200 rounded-2xl border border-zinc-200 bg-white">
        {children}
      </div>
    </div>
  );
}

function FaqItem({
  question,
  children,
}: {
  question: string;
  children: React.ReactNode;
}) {
  const [open, setOpen] = useState(false);

  return (
    <div>
      <button
        onClick={() => setOpen(!open)}
        className="flex w-full items-center justify-between px-6 py-5 text-left transition-colors hover:bg-zinc-50"
      >
        <span className="text-sm font-medium text-slate-800">{question}</span>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={2}
          stroke="currentColor"
          className={`h-4 w-4 shrink-0 text-slate-400 transition-transform ${
            open ? "rotate-180" : ""
          }`}
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="m19.5 8.25-7.5 7.5-7.5-7.5"
          />
        </svg>
      </button>
      {open && (
        <div className="px-6 pb-5 text-sm leading-6 text-slate-600">
          {children}
        </div>
      )}
    </div>
  );
}
