import type { Facts } from "@/data/facts";

// Inline tags: <b>…</b> bold, <email>…</email> support mailto link,
// <site>…</site> website link, <fatsecretPrivacy>…</fatsecretPrivacy> external link.
// eslint-disable-next-line @typescript-eslint/no-unused-vars
export default (f: Facts) => ({
  metaTitle: "Privacy Policy",
  metaDescription:
    "Learn how MyNutriRise collects, uses, and protects your personal information.",
  title: "Privacy Policy",
  lastUpdated: "Last updated: May 29, 2026",
  // Translations: note that the English version is the legally binding one. Empty in English.
  bindingNote: "",
  sections: [
    {
      heading: "1. Information We Collect",
      blocks: [
        {
          type: "p",
          text: "MyNutriRise collects the following information to provide you with a personalized health and nutrition experience:",
        },
        {
          type: "ul",
          items: [
            "<b>Account Information:</b> Email address, name, and profile photo when you create an account.",
            "<b>Health & Body Data:</b> Weight, height, body measurements, dietary preferences, allergies, health goals, and activity level that you voluntarily provide.",
            "<b>Nutrition Data:</b> Meals logged, calorie and macro tracking data, fasting sessions, and water intake.",
            "<b>Photos:</b> Food photos taken for nutrition analysis and progress photos for body transformation tracking.",
            "<b>Usage Data:</b> App interactions, feature usage patterns, and device information for improving our service.",
          ],
        },
      ],
    },
    {
      heading: "2. How We Use Your Information",
      blocks: [
        { type: "p", text: "We use your information to:" },
        {
          type: "ul",
          items: [
            "Provide personalized nutrition recommendations and meal suggestions.",
            "Track your health goals, fasting sessions, water intake, and progress.",
            "Power AI coaching features with relevant context about your health journey.",
            "Generate grocery lists and meal plans based on your preferences.",
            "Display achievements, streaks, and gamification features.",
            "Improve our app and develop new features.",
            "Send you reminders and notifications (with your permission).",
          ],
        },
      ],
    },
    {
      heading: "3. Data Storage & Security",
      blocks: [
        { type: "p", text: "Your data is stored securely using Google Firebase services:" },
        {
          type: "ul",
          items: [
            "Firebase Authentication for secure sign-in.",
            "Cloud Firestore for structured data (meals, goals, progress).",
            "Firebase Storage for photos (food scans, progress photos).",
            "All data is encrypted in transit using TLS/SSL.",
            "Firebase infrastructure complies with SOC 1, SOC 2, and SOC 3 standards.",
          ],
        },
        {
          type: "p",
          text: "We implement industry-standard security measures to protect your personal information from unauthorized access, alteration, disclosure, or destruction.",
        },
        { type: "h3", text: "Data Retention" },
        {
          type: "p",
          text: "We retain your personal, nutrition, and health data for as long as your account remains active, so the app can show your history, progress, and trends. Health data read from Google Health Connect or Apple Health is refreshed each time the app syncs and is kept only while the integration is connected. When you delete your account, all associated data is permanently removed from our systems within 30 days (see “Your Rights” below).",
        },
      ],
    },
    {
      heading: "4. Health Data",
      blocks: [
        {
          type: "p",
          text: "MyNutriRise can connect to Google Health Connect (Android) or Apple Health (iOS), but only after you grant explicit permission. We access only the data types needed for the app's activity and sleep features:",
        },
        {
          type: "ul",
          items: [
            "<b>Steps</b> — to show daily activity and refine calorie-balance estimates. (Read and write.)",
            "<b>Active energy / calories burned</b> — to calculate your daily energy expenditure.",
            "<b>Exercise & workouts</b> — to reflect activity in your daily summary.",
            "<b>Distance</b> — to display movement alongside steps.",
            "<b>Hydration / water</b> — to sync water intake with your tracker.",
            "<b>Sleep</b> — to display sleep duration and recovery insights. (Read and write.)",
          ],
        },
        {
          type: "p",
          text: "On iOS only, the app may also read <b>basal energy</b> and <b>flights climbed</b> to improve energy-expenditure estimates. We do not request these on Android.",
        },
        {
          type: "ul",
          items: [
            "Health data is used <b>solely</b> to power these in-app features — never for advertising or profiling.",
            "It is stored in your private Firestore document, is not shared with other users, and is <b>never sold</b> to any third party.",
            "You can disconnect health integration at any time from Settings, and revoke access in Health Connect or Apple Health.",
            "Health data is deleted along with your account (see “Your Rights” and “Data Retention”).",
          ],
        },
      ],
    },
    {
      heading: "5. Data Sharing",
      blocks: [
        { type: "p", text: "We do NOT:" },
        {
          type: "ul",
          items: [
            "Sell your personal data to third parties.",
            "Share your health data with advertisers.",
            "Use your data for purposes other than providing our service.",
          ],
        },
        {
          type: "p",
          text: "We MAY share anonymized, aggregated data for analytics and service improvement.",
        },
      ],
    },
    {
      heading: "6. Third-Party Services",
      blocks: [
        {
          type: "p",
          text: "We use FatSecret Platform API to provide nutrition data, barcode scanning, and food search. Search queries you enter may be transmitted to FatSecret. See FatSecret's privacy policy at <fatsecretPrivacy>https://platform.fatsecret.com/privacy</fatsecretPrivacy>.",
        },
      ],
    },
    {
      heading: "7. Your Rights",
      blocks: [
        { type: "p", text: "You have the right to:" },
        {
          type: "ul",
          items: [
            "Access your personal data stored in the app.",
            "Update or correct your information through the Edit Profile screen.",
            "<b>Delete your account and all associated data</b> directly in the app: go to <b>Settings → Delete Account</b>. This permanently removes your account, profile, nutrition history, photos, and any stored health data. You can also request deletion by emailing <email>support@mynutririse.com</email>. Deletions are completed within 30 days.",
            "Opt out of notifications at any time.",
            "Disconnect health data integration.",
            "Request a copy of your data.",
          ],
        },
      ],
    },
    {
      heading: "8. Children's Privacy",
      blocks: [
        {
          type: "p",
          text: "MyNutriRise is not intended for children under 13 years of age. We do not knowingly collect personal information from children under 13. If you believe we have collected such information, please contact us immediately.",
        },
      ],
    },
    {
      heading: "9. Changes to This Policy",
      blocks: [
        {
          type: "p",
          text: "We may update this Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy in the app and updating the “Last updated” date.",
        },
      ],
    },
    {
      heading: "10. Contact Us",
      blocks: [
        {
          type: "p",
          text: "If you have questions about this Privacy Policy or your data, contact us at:",
        },
        { type: "p", text: "Email: <email>support@mynutririse.com</email>" },
        { type: "p", variant: "tight", text: "Website: <site>https://mynutririse.com</site>" },
      ],
    },
  ],
});
