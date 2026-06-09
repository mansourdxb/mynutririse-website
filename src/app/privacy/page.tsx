import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description:
    "Learn how MyNutriRise collects, uses, and protects your personal information.",
  alternates: { canonical: "/privacy" },
};

export default function PrivacyPage() {
  return (
    <div className="pt-24">
      <article className="mx-auto max-w-3xl px-6 py-20">
        <h1 className="text-4xl font-bold tracking-tight text-slate-800">
          Privacy Policy
        </h1>
        <p className="mt-4 text-sm text-slate-500">
          Last updated: May 29, 2026
        </p>

        <div className="mt-12 space-y-10 text-base leading-7 text-slate-600">
          {/* 1. Information We Collect */}
          <section>
            <h2 className="text-xl font-semibold text-slate-800">
              1. Information We Collect
            </h2>
            <p className="mt-3">
              MyNutriRise collects the following information to provide you with
              a personalized health and nutrition experience:
            </p>
            <ul className="mt-3 list-disc space-y-2 pl-6">
              <li>
                <strong>Account Information:</strong> Email address, name, and
                profile photo when you create an account.
              </li>
              <li>
                <strong>Health &amp; Body Data:</strong> Weight, height, body
                measurements, dietary preferences, allergies, health goals, and
                activity level that you voluntarily provide.
              </li>
              <li>
                <strong>Nutrition Data:</strong> Meals logged, calorie and macro
                tracking data, fasting sessions, and water intake.
              </li>
              <li>
                <strong>Photos:</strong> Food photos taken for nutrition analysis
                and progress photos for body transformation tracking.
              </li>
              <li>
                <strong>Usage Data:</strong> App interactions, feature usage
                patterns, and device information for improving our service.
              </li>
            </ul>
          </section>

          {/* 2. How We Use Your Information */}
          <section>
            <h2 className="text-xl font-semibold text-slate-800">
              2. How We Use Your Information
            </h2>
            <p className="mt-3">We use your information to:</p>
            <ul className="mt-3 list-disc space-y-2 pl-6">
              <li>
                Provide personalized nutrition recommendations and meal
                suggestions.
              </li>
              <li>
                Track your health goals, fasting sessions, water intake, and
                progress.
              </li>
              <li>
                Power AI coaching features with relevant context about your
                health journey.
              </li>
              <li>
                Generate grocery lists and meal plans based on your preferences.
              </li>
              <li>
                Display achievements, streaks, and gamification features.
              </li>
              <li>Improve our app and develop new features.</li>
              <li>
                Send you reminders and notifications (with your permission).
              </li>
            </ul>
          </section>

          {/* 3. Data Storage & Security */}
          <section>
            <h2 className="text-xl font-semibold text-slate-800">
              3. Data Storage &amp; Security
            </h2>
            <p className="mt-3">
              Your data is stored securely using Google Firebase services:
            </p>
            <ul className="mt-3 list-disc space-y-2 pl-6">
              <li>Firebase Authentication for secure sign-in.</li>
              <li>
                Cloud Firestore for structured data (meals, goals, progress).
              </li>
              <li>
                Firebase Storage for photos (food scans, progress photos).
              </li>
              <li>All data is encrypted in transit using TLS/SSL.</li>
              <li>
                Firebase infrastructure complies with SOC 1, SOC 2, and SOC 3
                standards.
              </li>
            </ul>
            <p className="mt-3">
              We implement industry-standard security measures to protect your
              personal information from unauthorized access, alteration,
              disclosure, or destruction.
            </p>
            <h3 className="mt-6 font-semibold text-slate-800">Data Retention</h3>
            <p className="mt-3">
              We retain your personal, nutrition, and health data for as long as
              your account remains active, so the app can show your history,
              progress, and trends. Health data read from Google Health Connect
              or Apple Health is refreshed each time the app syncs and is kept
              only while the integration is connected. When you delete your
              account, all associated data is permanently removed from our
              systems within 30 days (see &ldquo;Your Rights&rdquo; below).
            </p>
          </section>

          {/* 4. Health Data */}
          <section>
            <h2 className="text-xl font-semibold text-slate-800">
              4. Health Data
            </h2>
            <p className="mt-3">
              MyNutriRise can connect to Google Health Connect (Android) or
              Apple Health (iOS), but only after you grant explicit permission.
              We access only the data types needed for the app&apos;s activity
              and sleep features:
            </p>
            <ul className="mt-3 list-disc space-y-2 pl-6">
              <li>
                <strong>Steps</strong> &mdash; to show daily activity and refine
                calorie-balance estimates. (Read and write.)
              </li>
              <li>
                <strong>Active energy / calories burned</strong> &mdash; to
                calculate your daily energy expenditure.
              </li>
              <li>
                <strong>Exercise &amp; workouts</strong> &mdash; to reflect
                activity in your daily summary.
              </li>
              <li>
                <strong>Distance</strong> &mdash; to display movement alongside
                steps.
              </li>
              <li>
                <strong>Hydration / water</strong> &mdash; to sync water intake
                with your tracker.
              </li>
              <li>
                <strong>Sleep</strong> &mdash; to display sleep duration and
                recovery insights. (Read and write.)
              </li>
            </ul>
            <p className="mt-3">
              On iOS only, the app may also read <strong>basal energy</strong>{" "}
              and <strong>flights climbed</strong> to improve energy-expenditure
              estimates. We do not request these on Android.
            </p>
            <ul className="mt-3 list-disc space-y-2 pl-6">
              <li>
                Health data is used <strong>solely</strong> to power these
                in-app features &mdash; never for advertising or profiling.
              </li>
              <li>
                It is stored in your private Firestore document, is not shared
                with other users, and is <strong>never sold</strong> to any
                third party.
              </li>
              <li>
                You can disconnect health integration at any time from Settings,
                and revoke access in Health Connect or Apple Health.
              </li>
              <li>
                Health data is deleted along with your account (see
                &ldquo;Your Rights&rdquo; and &ldquo;Data Retention&rdquo;).
              </li>
            </ul>
          </section>

          {/* 5. Data Sharing */}
          <section>
            <h2 className="text-xl font-semibold text-slate-800">
              5. Data Sharing
            </h2>
            <p className="mt-3">We do NOT:</p>
            <ul className="mt-3 list-disc space-y-2 pl-6">
              <li>Sell your personal data to third parties.</li>
              <li>Share your health data with advertisers.</li>
              <li>
                Use your data for purposes other than providing our service.
              </li>
            </ul>
            <p className="mt-3">
              We MAY share anonymized, aggregated data for analytics and service
              improvement.
            </p>
          </section>

          {/* 6. Third-Party Services */}
          <section>
            <h2 className="text-xl font-semibold text-slate-800">
              6. Third-Party Services
            </h2>
            <p className="mt-3">
              We use FatSecret Platform API to provide nutrition data, barcode
              scanning, and food search. Search queries you enter may be
              transmitted to FatSecret. See FatSecret&apos;s privacy policy at{" "}
              <a
                href="https://platform.fatsecret.com/privacy"
                target="_blank"
                rel="noopener noreferrer"
                className="font-medium text-emerald-600 underline underline-offset-4 hover:text-emerald-700"
              >
                https://platform.fatsecret.com/privacy
              </a>
              .
            </p>
          </section>

          {/* 7. Your Rights */}
          <section>
            <h2 className="text-xl font-semibold text-slate-800">
              7. Your Rights
            </h2>
            <p className="mt-3">You have the right to:</p>
            <ul className="mt-3 list-disc space-y-2 pl-6">
              <li>Access your personal data stored in the app.</li>
              <li>
                Update or correct your information through the Edit Profile
                screen.
              </li>
              <li>
                <strong>Delete your account and all associated data</strong>{" "}
                directly in the app: go to{" "}
                <strong>Settings &rarr; Delete Account</strong>. This permanently
                removes your account, profile, nutrition history, photos, and any
                stored health data. You can also request deletion by emailing{" "}
                <a
                  href="mailto:support@mynutririse.com"
                  className="font-medium text-emerald-600 underline underline-offset-4 hover:text-emerald-700"
                >
                  support@mynutririse.com
                </a>
                . Deletions are completed within 30 days.
              </li>
              <li>Opt out of notifications at any time.</li>
              <li>Disconnect health data integration.</li>
              <li>Request a copy of your data.</li>
            </ul>
          </section>

          {/* 8. Children's Privacy */}
          <section>
            <h2 className="text-xl font-semibold text-slate-800">
              8. Children&apos;s Privacy
            </h2>
            <p className="mt-3">
              MyNutriRise is not intended for children under 13 years of age. We
              do not knowingly collect personal information from children under
              13. If you believe we have collected such information, please
              contact us immediately.
            </p>
          </section>

          {/* 9. Changes to This Policy */}
          <section>
            <h2 className="text-xl font-semibold text-slate-800">
              9. Changes to This Policy
            </h2>
            <p className="mt-3">
              We may update this Privacy Policy from time to time. We will
              notify you of any changes by posting the new Privacy Policy in the
              app and updating the &ldquo;Last updated&rdquo; date.
            </p>
          </section>

          {/* 10. Contact Us */}
          <section>
            <h2 className="text-xl font-semibold text-slate-800">
              10. Contact Us
            </h2>
            <p className="mt-3">
              If you have questions about this Privacy Policy or your data,
              contact us at:
            </p>
            <p className="mt-3">
              Email:{" "}
              <a
                href="mailto:support@mynutririse.com"
                className="font-medium text-emerald-600 underline underline-offset-4 hover:text-emerald-700"
              >
                support@mynutririse.com
              </a>
            </p>
            <p className="mt-1">
              Website:{" "}
              <a
                href="https://mynutririse.com"
                className="font-medium text-emerald-600 underline underline-offset-4 hover:text-emerald-700"
              >
                https://mynutririse.com
              </a>
            </p>
          </section>
        </div>
      </article>
    </div>
  );
}
