import type { Facts } from "@/data/facts";

// eslint-disable-next-line @typescript-eslint/no-unused-vars
export default (f: Facts) => ({
  metaTitle: "Support",
  metaDescription:
    "Get help with MyNutriRise. Contact our support team, browse FAQs, or submit a feature request.",
  title: "How can we help?",
  subtitle:
    "Whether you have a question, need troubleshooting help, or want to share an idea — we're here for you.",
  cards: {
    email: {
      title: "Email Support",
      text: "We typically respond within 24 hours.",
      link: "support@mynutririse.com",
    },
    faq: {
      title: "FAQ",
      text: "Find answers to common questions about the app.",
      link: "Browse FAQ →",
    },
    feature: {
      title: "Feature Request",
      text: "Tell us what you'd like to see next.",
      link: "contact@mynutririse.com",
    },
  },
  faqEyebrow: "Support Center",
  faqTitle: "Frequently Asked Questions",
  faqSubtitle:
    "Browse help topics from the MyNutriRise app. Can't find what you need? Reach out to our support team.",
  questionCount: {
    // One form per CLDR plural category; languages use the ones they need.
    zero: "{n} questions",
    one: "{n} question",
    two: "{n} questions",
    few: "{n} questions",
    many: "{n} questions",
    other: "{n} questions",
  },
  categories: {
    all: "All Topics",
    gettingStarted: "Getting Started",
    mealTracking: "Meal Tracking",
    nutrition: "Nutrition & Recipes",
    health: "Health Tracking",
    fasting: "Fasting",
    progress: "Progress & Insights",
    account: "Account",
  },
  faqs: [
    {
      category: "gettingStarted",
      question: "Welcome to MyNutriRise",
      answer:
        "MyNutriRise is your all-in-one nutrition and health companion. Track meals with AI-powered food recognition, monitor your water intake, manage your weight, explore international recipes, and much more — all in one app.",
    },
    {
      category: "gettingStarted",
      question: "Setting Up Your Profile",
      answer:
        "During onboarding, MyNutriRise asks about your age, weight, height, activity level, and goals. This information is used to calculate your daily calorie and macro targets. You can update these anytime from your profile.",
    },
    {
      category: "gettingStarted",
      question: "Your First Meal Scan",
      answer:
        "Tap the scan button (center of the bottom bar) to photograph any meal. Our AI identifies ingredients, estimates portions, and provides a full nutritional breakdown. You can edit the results if needed.",
    },
    {
      category: "gettingStarted",
      question: "Navigating the App",
      answer:
        "Use the bottom tabs to switch between Home, Fasting, Nutri Hub (quick actions), Recipes, Analytics, and AI Chat. The Nutri Hub gives you quick access to all features. Tap Edit to customize the layout.",
    },
    {
      category: "mealTracking",
      question: "How does the AI Food Scanner work?",
      answer:
        "Point your camera at any meal and tap scan. Our AI analyzes the image to identify foods, estimate portion sizes, and calculate nutritional values including calories, protein, carbs, fat, fiber, and more.",
    },
    {
      category: "mealTracking",
      question: "Tips for better scan results",
      answer:
        "For the most accurate results: photograph meals from above, ensure good lighting, keep the plate centered in frame, and include the full plate. The AI works best with clearly visible individual dishes.",
    },
    {
      category: "mealTracking",
      question: "How do I scan packaged foods?",
      answer:
        "Tap the barcode icon to scan packaged food items. The app looks up the product in a global food database and auto-fills the nutritional information. If a barcode is not in our database, you can manually enter the nutrition facts from the package label.",
    },
    {
      category: "mealTracking",
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
  ],
});
