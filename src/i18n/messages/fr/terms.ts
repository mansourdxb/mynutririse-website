import type { Facts } from "@/data/facts";
import type en from "../en/terms";

// Inline tags: <email>…</email> support mailto link, <site>…</site> website link,
// <fatsecret>…</fatsecret> external link.
export default (f: Facts): ReturnType<typeof en> => ({
  metaTitle: "Conditions d’utilisation",
  metaDescription:
    "Consultez les conditions générales qui régissent votre utilisation de l’application et des services MyNutriRise.",
  title: "Conditions d’utilisation",
  lastUpdated: "Dernière mise à jour : 15 mai 2026",
  // Translations: note that the English version is the legally binding one. Empty in English.
  bindingNote:
    "Cette traduction est fournie à titre indicatif. Seule la version anglaise fait foi en cas de divergence.",
  sections: [
    {
      heading: "1. Acceptation des conditions",
      blocks: [
        {
          type: "p",
          text: "En téléchargeant, en installant ou en utilisant MyNutriRise (l’« Application »), vous acceptez d’être lié par les présentes Conditions d’utilisation. Si vous ne les acceptez pas, n’utilisez pas l’Application.",
        },
      ],
    },
    {
      heading: "2. Description du service",
      blocks: [
        {
          type: "p",
          text: "MyNutriRise est une application de suivi de la santé et de la nutrition qui propose :",
        },
        {
          type: "ul",
          items: [
            "L’analyse photo des aliments et l’analyse nutritionnelle",
            "L’enregistrement des repas et le suivi des calories et des macros",
            "Un minuteur et un suivi du jeûne intermittent",
            "Un coaching nutritionnel propulsé par l’IA",
            `Une base de données de cuisines du monde comptant ${f.DISHES} plats`,
            "La génération de listes de courses",
            "Le suivi de la consommation d’eau",
            "Le suivi de la progression physique avec photos",
            "Des éléments de ludification avec badges, XP et séries",
            "L’intégration avec des appareils de santé",
          ],
        },
      ],
    },
    {
      heading: "3. Absence d’avis médical",
      blocks: [
        {
          type: "p",
          variant: "important",
          text: "IMPORTANT : MyNutriRise n’est PAS une application médicale et ne fournit PAS d’avis médical. Les informations fournies le sont uniquement à des fins éducatives et d’information générale.",
        },
        {
          type: "ul",
          items: [
            "Consultez toujours un professionnel de santé qualifié avant d’apporter des changements importants à votre alimentation ou à votre programme d’exercice.",
            "N’utilisez pas cette Application pour diagnostiquer, traiter, guérir ou prévenir une quelconque maladie.",
            "Si vous souffrez d’une affection médicale ou d’un trouble du comportement alimentaire, ou si vous êtes enceinte, consultez votre médecin avant d’utiliser cette Application.",
            "Les réponses du coaching IA sont générées par une intelligence artificielle et ne sauraient remplacer un avis médical professionnel.",
          ],
        },
      ],
    },
    {
      heading: "4. Comptes utilisateurs",
      blocks: [
        {
          type: "ul",
          items: [
            "Vous devez fournir des informations exactes lors de la création d’un compte.",
            "Vous êtes responsable de la sécurité de vos identifiants de connexion.",
            "Vous devez avoir au moins 13 ans pour utiliser cette Application.",
            "Un seul compte par personne. Ne partagez pas votre compte.",
          ],
        },
      ],
    },
    {
      heading: "5. Abonnements et paiements",
      blocks: [
        {
          type: "ul",
          items: [
            "MyNutriRise propose une formule gratuite et une formule d’abonnement Premium.",
            "Les abonnements Premium sont facturés via le Google Play Store ou l’Apple App Store.",
            "Les abonnements sont renouvelés automatiquement, sauf résiliation au moins 24 heures avant la fin de la période en cours.",
            "Les remboursements sont traités conformément aux règles de la boutique d’applications concernée.",
            "Nous nous réservons le droit de modifier nos tarifs moyennant un préavis.",
          ],
        },
      ],
    },
    {
      heading: "6. Utilisation acceptable",
      blocks: [
        { type: "p", text: "Vous vous engagez à NE PAS :" },
        {
          type: "ul",
          items: [
            "Utiliser l’Application à des fins illégales.",
            "Tenter de procéder à l’ingénierie inverse de l’Application, de la pirater ou de la compromettre.",
            "Utiliser la fonctionnalité de coaching IA pour des sujets sans rapport avec la santé.",
            "Publier des contenus inappropriés, choquants ou illégaux.",
            "Mentir sur votre identité ou usurper l’identité d’autrui.",
            "Entraver ou perturber le fonctionnement de l’Application.",
          ],
        },
      ],
    },
    {
      heading: "7. Propriété intellectuelle",
      blocks: [
        {
          type: "ul",
          items: [
            "MyNutriRise, y compris sa conception, ses fonctionnalités, son code et son contenu, est la propriété de NutriLife et est protégée par les lois relatives à la propriété intellectuelle.",
            "La base de données de cuisines du monde est un contenu propriétaire.",
            "Vous ne pouvez pas copier, modifier ou distribuer l’Application, ni créer d’œuvres dérivées à partir de celle-ci.",
          ],
        },
      ],
    },
    {
      heading: "8. Contenus de tiers",
      blocks: [
        {
          type: "p",
          text: "Les informations nutritionnelles affichées dans cette application sont fournies par l’API FatSecret Platform et sont soumises aux conditions d’utilisation de FatSecret, disponibles à l’adresse <fatsecret>https://platform.fatsecret.com</fatsecret>.",
        },
      ],
    },
    {
      heading: "9. Contenus des utilisateurs",
      blocks: [
        {
          type: "ul",
          items: [
            "Vous restez propriétaire des photos et des données que vous téléversez.",
            "En téléversant du contenu, vous nous accordez une licence limitée pour le stocker et le traiter aux fins de la fourniture du service.",
            "Nous ne revendiquons aucun droit de propriété sur vos données de santé personnelles.",
          ],
        },
      ],
    },
    {
      heading: "10. Limitation de responsabilité",
      blocks: [
        { type: "p", variant: "caps", text: "Dans toute la mesure permise par la loi :" },
        {
          type: "ul",
          items: [
            "MyNutriRise est fournie « EN L’ÉTAT », sans garantie d’aucune sorte.",
            "Nous ne sommes pas responsables des conséquences sur la santé résultant de l’utilisation de l’Application.",
            "Nous ne sommes pas responsables des pertes de données, bien que nous prenions des mesures raisonnables pour protéger vos données.",
            "Notre responsabilité totale ne saurait excéder le montant que vous avez payé pour l’Application au cours des 12 derniers mois.",
          ],
        },
      ],
    },
    {
      heading: "11. Résiliation",
      blocks: [
        {
          type: "ul",
          items: [
            "Nous pouvons suspendre ou résilier votre compte si vous enfreignez les présentes Conditions.",
            "Vous pouvez supprimer votre compte à tout moment.",
            "En cas de résiliation, vos données seront supprimées conformément à notre Politique de confidentialité.",
          ],
        },
      ],
    },
    {
      heading: "12. Modifications des conditions",
      blocks: [
        {
          type: "p",
          text: "Nous pouvons mettre à jour les présentes Conditions de temps à autre. La poursuite de l’utilisation de l’Application après ces modifications vaut acceptation des nouvelles Conditions.",
        },
      ],
    },
    {
      heading: "13. Contact",
      blocks: [
        { type: "p", text: "Pour toute question concernant les présentes Conditions :" },
        { type: "p", text: "E-mail : <email>support@mynutririse.com</email>" },
        { type: "p", variant: "tight", text: "Site web : <site>https://mynutririse.com</site>" },
      ],
    },
  ],
});
