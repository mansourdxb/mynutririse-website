import type { Facts } from "@/data/facts";
import type en from "../en/privacy";

// Inline tags: <b>…</b> bold, <email>…</email> support mailto link,
// <site>…</site> website link, <fatsecretPrivacy>…</fatsecretPrivacy> external link.
// eslint-disable-next-line @typescript-eslint/no-unused-vars
export default (f: Facts): ReturnType<typeof en> => ({
  metaTitle: "Politique de confidentialité",
  metaDescription:
    "Découvrez comment MyNutriRise collecte, utilise et protège vos informations personnelles.",
  title: "Politique de confidentialité",
  lastUpdated: "Dernière mise à jour : 29 mai 2026",
  // Translations: note that the English version is the legally binding one. Empty in English.
  bindingNote:
    "Cette traduction est fournie à titre indicatif. Seule la version anglaise fait foi en cas de divergence.",
  sections: [
    {
      heading: "1. Informations que nous collectons",
      blocks: [
        {
          type: "p",
          text: "MyNutriRise collecte les informations suivantes afin de vous offrir une expérience santé et nutrition personnalisée :",
        },
        {
          type: "ul",
          items: [
            "<b>Informations de compte :</b> adresse e-mail, nom et photo de profil lorsque vous créez un compte.",
            "<b>Données de santé et corporelles :</b> poids, taille, mensurations, préférences alimentaires, allergies, objectifs de santé et niveau d’activité que vous fournissez volontairement.",
            "<b>Données nutritionnelles :</b> repas enregistrés, données de suivi des calories et des macros, sessions de jeûne et consommation d’eau.",
            "<b>Photos :</b> photos d’aliments prises pour l’analyse nutritionnelle et photos de progression pour le suivi de votre transformation physique.",
            "<b>Données d’utilisation :</b> interactions avec l’app, habitudes d’utilisation des fonctionnalités et informations sur l’appareil, afin d’améliorer notre service.",
          ],
        },
      ],
    },
    {
      heading: "2. Utilisation de vos informations",
      blocks: [
        { type: "p", text: "Nous utilisons vos informations pour :" },
        {
          type: "ul",
          items: [
            "Fournir des recommandations nutritionnelles et des suggestions de repas personnalisées.",
            "Suivre vos objectifs de santé, vos sessions de jeûne, votre consommation d’eau et votre progression.",
            "Alimenter les fonctionnalités de coaching IA avec un contexte pertinent sur votre parcours santé.",
            "Générer des listes de courses et des programmes de repas selon vos préférences.",
            "Afficher les succès, les séries et les fonctionnalités de ludification.",
            "Améliorer notre app et développer de nouvelles fonctionnalités.",
            "Vous envoyer des rappels et des notifications (avec votre autorisation).",
          ],
        },
      ],
    },
    {
      heading: "3. Stockage et sécurité des données",
      blocks: [
        { type: "p", text: "Vos données sont stockées de manière sécurisée à l’aide des services Google Firebase :" },
        {
          type: "ul",
          items: [
            "Firebase Authentication pour une connexion sécurisée.",
            "Cloud Firestore pour les données structurées (repas, objectifs, progression).",
            "Firebase Storage pour les photos (analyses d’aliments, photos de progression).",
            "Toutes les données sont chiffrées en transit au moyen du protocole TLS/SSL.",
            "L’infrastructure Firebase est conforme aux normes SOC 1, SOC 2 et SOC 3.",
          ],
        },
        {
          type: "p",
          text: "Nous mettons en œuvre des mesures de sécurité conformes aux normes du secteur afin de protéger vos informations personnelles contre tout accès, toute modification, toute divulgation ou toute destruction non autorisés.",
        },
        { type: "h3", text: "Conservation des données" },
        {
          type: "p",
          text: "Nous conservons vos données personnelles, nutritionnelles et de santé tant que votre compte reste actif, afin que l’app puisse afficher votre historique, votre progression et vos tendances. Les données de santé lues depuis Google Health Connect ou Apple Health sont actualisées à chaque synchronisation de l’app et ne sont conservées que tant que l’intégration est connectée. Lorsque vous supprimez votre compte, toutes les données associées sont définitivement supprimées de nos systèmes dans un délai de 30 jours (voir « Vos droits » ci-dessous).",
        },
      ],
    },
    {
      heading: "4. Données de santé",
      blocks: [
        {
          type: "p",
          text: "MyNutriRise peut se connecter à Google Health Connect (Android) ou à Apple Health (iOS), mais uniquement après que vous en avez donné l’autorisation explicite. Nous n’accédons qu’aux types de données nécessaires aux fonctionnalités d’activité et de sommeil de l’app :",
        },
        {
          type: "ul",
          items: [
            "<b>Pas</b> : pour afficher l’activité quotidienne et affiner les estimations du bilan calorique. (Lecture et écriture.)",
            "<b>Énergie active / calories brûlées</b> : pour calculer votre dépense énergétique quotidienne.",
            "<b>Exercices et entraînements</b> : pour refléter l’activité dans votre résumé quotidien.",
            "<b>Distance</b> : pour afficher vos déplacements à côté des pas.",
            "<b>Hydratation / eau</b> : pour synchroniser la consommation d’eau avec votre suivi.",
            "<b>Sommeil</b> : pour afficher la durée du sommeil et des analyses de récupération. (Lecture et écriture.)",
          ],
        },
        {
          type: "p",
          text: "Sur iOS uniquement, l’app peut également lire l’<b>énergie au repos</b> et les <b>étages montés</b> afin d’améliorer les estimations de la dépense énergétique. Nous ne demandons pas ces données sur Android.",
        },
        {
          type: "ul",
          items: [
            "Les données de santé sont utilisées <b>exclusivement</b> pour faire fonctionner ces fonctionnalités dans l’app, et jamais à des fins publicitaires ou de profilage.",
            "Elles sont stockées dans votre document Firestore privé, ne sont pas partagées avec d’autres utilisateurs et ne sont <b>jamais vendues</b> à un tiers.",
            "Vous pouvez déconnecter l’intégration santé à tout moment depuis les Paramètres et révoquer l’accès dans Health Connect ou Apple Health.",
            "Les données de santé sont supprimées en même temps que votre compte (voir « Vos droits » et « Conservation des données »).",
          ],
        },
      ],
    },
    {
      heading: "5. Partage des données",
      blocks: [
        { type: "p", text: "Nous NE faisons PAS ce qui suit :" },
        {
          type: "ul",
          items: [
            "Vendre vos données personnelles à des tiers.",
            "Partager vos données de santé avec des annonceurs.",
            "Utiliser vos données à d’autres fins que la fourniture de notre service.",
          ],
        },
        {
          type: "p",
          text: "Nous POUVONS partager des données anonymisées et agrégées à des fins d’analyse et d’amélioration du service.",
        },
      ],
    },
    {
      heading: "6. Services tiers",
      blocks: [
        {
          type: "p",
          text: "Nous utilisons l’API FatSecret Platform pour fournir les données nutritionnelles, la lecture des codes-barres et la recherche d’aliments. Les recherches que vous saisissez peuvent être transmises à FatSecret. Consultez la politique de confidentialité de FatSecret à l’adresse <fatsecretPrivacy>https://platform.fatsecret.com/privacy</fatsecretPrivacy>.",
        },
      ],
    },
    {
      heading: "7. Vos droits",
      blocks: [
        { type: "p", text: "Vous avez le droit de :" },
        {
          type: "ul",
          items: [
            "Accéder à vos données personnelles stockées dans l’app.",
            "Mettre à jour ou corriger vos informations depuis l’écran Modifier le profil.",
            "<b>Supprimer votre compte et toutes les données associées</b> directement dans l’app : rendez-vous dans <b>Paramètres → Supprimer le compte</b>. Cette action supprime définitivement votre compte, votre profil, votre historique nutritionnel, vos photos et toutes les données de santé stockées. Vous pouvez également demander la suppression par e-mail à <email>support@mynutririse.com</email>. Les suppressions sont effectuées dans un délai de 30 jours.",
            "Refuser les notifications à tout moment.",
            "Déconnecter l’intégration des données de santé.",
            "Demander une copie de vos données.",
          ],
        },
      ],
    },
    {
      heading: "8. Confidentialité des enfants",
      blocks: [
        {
          type: "p",
          text: "MyNutriRise n’est pas destinée aux enfants de moins de 13 ans. Nous ne collectons pas sciemment d’informations personnelles auprès d’enfants de moins de 13 ans. Si vous pensez que nous avons collecté de telles informations, veuillez nous contacter immédiatement.",
        },
      ],
    },
    {
      heading: "9. Modifications de la présente politique",
      blocks: [
        {
          type: "p",
          text: "Nous pouvons mettre à jour la présente Politique de confidentialité de temps à autre. Nous vous informerons de toute modification en publiant la nouvelle Politique de confidentialité dans l’app et en mettant à jour la date de « Dernière mise à jour ».",
        },
      ],
    },
    {
      heading: "10. Nous contacter",
      blocks: [
        {
          type: "p",
          text: "Pour toute question concernant la présente Politique de confidentialité ou vos données, contactez-nous :",
        },
        { type: "p", text: "E-mail : <email>support@mynutririse.com</email>" },
        { type: "p", variant: "tight", text: "Site web : <site>https://mynutririse.com</site>" },
      ],
    },
  ],
});
