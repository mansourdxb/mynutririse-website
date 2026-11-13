import type { Facts } from "@/data/facts";
import type en from "../en/tools";

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const tools = (f: Facts): ReturnType<typeof en> => ({
  // Strings shared by several tool pages and calculators.
  shared: {
    breadcrumb: "Outils",
    faqHeading: "Questions fréquentes",
    disclaimerTitle: "Ceci n’est pas un avis médical",
    disclaimer:
      "Ces calculateurs fournissent des estimations générales pour les adultes en bonne santé. Ils ne constituent pas un avis médical et ne remplacent pas un médecin ou un diététicien diplômé. Si vous êtes enceinte, allaitez, avez moins de 18 ans ou suivez un traitement pour un problème de santé, demandez un avis personnalisé avant de modifier votre alimentation.",
    sourcesHeading: "Sources",
    relatedTools: "Calculateurs associés",
    relatedGuides: "Guides associés",
    ctaButton: "Télécharger l’appli gratuite",
    sexAria: "Sexe",
    male: "Homme",
    female: "Femme",
    age: "Âge",
    heightCm: "Taille (cm)",
    weightKg: "Poids (kg)",
    /** Validation under a number field. {unit} may be empty. */
    rangeError: "Saisissez une valeur entre {min} et {max} {unit}",
    units: {
      years: "ans",
      cm: "cm",
      in: "po",
      kg: "kg",
      lb: "lb",
      kcal: "kcal",
    },
    kcalPerDay: "kcal/jour",
  },

  index: {
    metaTitle: "Outils nutrition gratuits",
    metaDescription:
      "Calculateurs gratuits d’IMC, de calories quotidiennes, de macros, de métabolisme de base et de poids idéal, sans inscription.",
    title: "Outils nutrition gratuits",
    subtitle: "Cinq calculateurs, zéro inscription. Les mêmes calculs que ceux utilisés par MyNutriRise pour créer votre programme.",
    cards: {
      calorie: {
        title: "Calculateur de calories",
        description: "Vos objectifs quotidiens pour perdre, maintenir ou prendre du poids, selon Mifflin–St Jeor.",
      },
      macro: {
        title: "Calculateur de macros",
        description: "Vos objectifs de protéines, glucides et lipides à partir de votre objectif calorique.",
      },
      bmi: {
        title: "Calculateur d’IMC",
        description: "Indice de masse corporelle et repères de poids santé, en unités métriques ou impériales.",
      },
      bmr: {
        title: "Calculateur de métabolisme de base",
        description: "Les calories que votre corps brûle au repos complet.",
      },
      idealWeight: {
        title: "Calculateur de poids idéal",
        description: "La fourchette de poids santé pour votre taille, selon les formules de Devine et de Robinson.",
      },
    },
    quiz: {
      title: "Quiz programme personnalisé",
      description: "Tout cela réuni : répondez à 4 questions et obtenez votre programme complet.",
    },
  },

  bmi: {
    metaTitle: "Calcul IMC adulte : calculez votre indice gratuitement",
    metaDescription:
      "Calculateur d’IMC gratuit pour adultes : saisissez taille et poids en unités métriques ou impériales et obtenez votre IMC et sa catégorie OMS. Calculez-le.",
    breadcrumb: "Calculateur d’IMC",
    title: "Calculateur d’IMC",
    subtitle: "Calculez votre indice de masse corporelle en quelques secondes, gratuitement et sans inscription.",
    whatIsHeading: "Qu’est-ce que l’IMC ?",
    whatIs:
      "L’indice de masse corporelle compare votre poids à votre taille : <b>IMC = poids (kg) ÷ taille (m)²</b>. Chez l’adulte, on considère généralement qu’un IMC de 18,5 à 24,9 correspond à un poids normal, de 25 à 29,9 à un surpoids et de 30 ou plus à une obésité.",
    whatIsCaveat:
      "L’IMC ne mesure pas directement la masse grasse : les sportifs très musclés sont souvent classés « en surpoids » tout en étant en parfaite santé, et les valeurs de référence peuvent légèrement varier selon l’origine ethnique. Considérez-le comme un indicateur de dépistage, pas comme un verdict.",
    resultHeading: "Que faire de votre résultat ?",
    result:
      "Si votre IMC se situe en dehors de la zone de poids normal, la réponse durable est un ajustement calorique modéré, pas un régime express. Trouvez votre objectif quotidien avec le <calorie>calculateur de calories</calorie>, découvrez la fourchette de poids derrière ces calculs avec le <ideal>calculateur de poids idéal</ideal>, et visez une évolution de 0,25 à 0,5 kg par semaine.",
    faqs: [
      {
        question: "Qu’est-ce qu’un IMC normal ?",
        answer:
          "Pour la plupart des adultes, entre 18,5 et 24,9. En dessous de 18,5, on parle de maigreur ; de 25 à 29,9, de surpoids ; à partir de 30, d’obésité. La masse musculaire, la morphologie et l’origine ethnique modifient ce qui convient à chacun.",
      },
      {
        question: "L’IMC est-il fiable pour les personnes musclées ?",
        answer:
          "Non : l’IMC ne distingue pas le muscle de la graisse, si bien que les sportifs musclés apparaissent souvent en surpoids. Le tour de taille et l’estimation de la masse grasse donnent une image plus complète.",
      },
      {
        question: "À quel rythme puis-je faire évoluer mon IMC sans risque ?",
        answer:
          "Avec une variation de poids de 0,25 à 0,5 kg par semaine, soit un déficit ou un surplus d’environ 250 à 500 kcal par jour. Aller plus vite signifie généralement perdre du muscle et subir un effet rebond.",
      },
      {
        question: "Faut-il utiliser les unités métriques ou impériales ?",
        answer:
          "Peu importe : le calculateur prend en charge les deux. La formule est identique ; en unités impériales, on multiplie simplement par 703 pour convertir les unités.",
      },
    ],
    ctaTitle: "Prêt à passer à l’action ?",
    ctaBody: "MyNutriRise suit vos repas, vos entraînements et vos progrès : prenez une photo et l’IA s’occupe de l’enregistrement.",
    calc: {
      unitsAria: "Unités",
      metric: "Métrique (cm, kg)",
      imperial: "Impérial (po, lb)",
      heightMetric: "Taille (cm)",
      heightImperial: "Taille (pouces)",
      weightMetric: "Poids (kg)",
      weightImperial: "Poids (lb)",
      result: "Votre IMC",
      categories: {
        underweight: "Maigreur",
        healthy: "Poids normal",
        overweight: "Surpoids",
        obese: "Obésité",
      },
      empty: "Saisissez votre taille et votre poids pour voir votre IMC.",
    },
  },

  bmr: {
    metaTitle: "Calcul du métabolisme de base : calories au repos",
    metaDescription:
      "Calculateur de métabolisme de base gratuit (Mifflin-St Jeor) : découvrez combien de calories votre corps brûle au repos pour planifier perte de poids ou muscle.",
    breadcrumb: "Calculateur de MB",
    title: "Calculateur de métabolisme de base",
    subtitle: "Découvrez combien de calories votre corps brûle au repos complet.",
    ctaTitle: "Faites travailler ce chiffre pour vous",
    ctaBody:
      "MyNutriRise construit votre programme quotidien à partir de ces mêmes calculs, puis suit chaque repas grâce à l’analyse photo par IA.",
    calc: {
      result: "Votre métabolisme de base",
      resultNote: "kcal/jour brûlées au repos complet (Mifflin–St Jeor)",
      empty: "Renseignez vos informations pour voir votre métabolisme de base.",
    },
  },

  calorie: {
    metaTitle: "Calculateur de calories : déficit pour perdre du poids",
    metaDescription:
      "Calculateur de calories gratuit : trouvez vos besoins d’entretien et un déficit sûr pour perdre du poids avec l’équation de Mifflin-St Jeor. Calculez-le.",
    breadcrumb: "Calculateur de calories",
    title: "Calculateur de calories",
    subtitle:
      "Découvrez combien de calories il vous faut chaque jour pour perdre du poids, le maintenir ou prendre du muscle, gratuitement et sans inscription.",
    ctaTitle: "Atteignez votre objectif chaque jour",
    ctaBody:
      "MyNutriRise suit vos calories automatiquement : photographiez votre repas et l’IA l’enregistre pour vous.",
    calc: {
      activityLabel: "Niveau d’activité",
      // Same order as the multipliers 1.2, 1.375, 1.55, 1.725, 1.9.
      activityLevels: [
        "Sédentaire (peu ou pas d’exercice)",
        "Activité légère (1 à 3 jours/semaine)",
        "Activité modérée (3 à 5 jours/semaine)",
        "Activité intense (6 à 7 jours/semaine)",
        "Activité très intense (travail physique + entraînement)",
      ],
      lose: "Perdre du poids",
      maintain: "Maintenir",
      gain: "Prendre du muscle",
      empty: "Renseignez vos informations pour voir vos objectifs caloriques quotidiens.",
    },
  },

  idealWeight: {
    metaTitle: "Calcul du poids idéal selon la taille et le sexe",
    metaDescription:
      "Calculateur de poids idéal gratuit selon la taille et le sexe, avec les formules de Devine et Robinson et la fourchette de poids santé selon l’IMC. Essayez-le.",
    breadcrumb: "Poids idéal",
    title: "Calculateur de poids idéal",
    subtitle: "Estimez une fourchette de poids santé pour votre taille, gratuitement et sans inscription.",
    meansHeading: "Ce que « poids idéal » veut vraiment dire",
    means:
      "Il n’existe pas de chiffre parfait unique. Les formules de <b>Devine</b> et de <b>Robinson</b> ont été conçues pour le dosage des médicaments en clinique et donnent un point médian utile, tandis que la fourchette basée sur l’IMC (18,5–24,9) indique la zone généralement associée à une bonne santé :",
    formulas: [
      "Devine (hommes) : 50 kg + 2,3 kg par pouce au-delà de 5 pieds",
      "Devine (femmes) : 45,5 kg + 2,3 kg par pouce au-delà de 5 pieds",
      "Robinson (hommes) : 52 kg + 1,9 kg par pouce au-delà de 5 pieds",
      "Robinson (femmes) : 49 kg + 1,7 kg par pouce au-delà de 5 pieds",
    ],
    meansNote:
      "La masse musculaire, la morphologie et l’origine ethnique modifient ce qui vous convient : utilisez cette fourchette comme une direction, pas comme une échéance.",
    sustainHeading: "Y parvenir durablement",
    sustain:
      "Choisissez un objectif dans votre fourchette de poids santé, puis remontez le fil : le <calorie>calculateur de calories</calorie> vous donne l’apport quotidien pour une évolution de 0,25 à 0,5 kg par semaine, et le <bmi>calculateur d’IMC</bmi> vous permet de vérifier vos progrès en chemin.",
    faqs: [
      {
        question: "Comment le poids idéal est-il calculé ?",
        answer:
          "Cet outil propose trois approches : les formules cliniques de Devine et de Robinson (basées sur la taille et le sexe) et la fourchette de poids qui maintient votre IMC entre 18,5 et 24,9.",
      },
      {
        question: "Pourquoi les formules donnent-elles des résultats différents ?",
        answer:
          "Chacune a été établie à partir de données de populations différentes. L’écart entre elles est voulu : votre poids santé est une fourchette, pas un point.",
      },
      {
        question: "Le poids idéal est-il différent pour les hommes et les femmes ?",
        answer:
          "Oui : à taille égale, les formules attribuent aux hommes une valeur de base plus élevée en raison des différences moyennes de masse musculaire et de morphologie.",
      },
      {
        question: "Et si je suis loin de ma fourchette idéale ?",
        answer:
          "Visez un rythme durable : 0,25 à 0,5 kg par semaine grâce à un déficit ou un surplus calorique modéré, avec suffisamment de protéines et une activité régulière.",
      },
    ],
    ctaTitle: "Y parvenir durablement",
    ctaBody: "MyNutriRise fixe un rythme réaliste, suit l’évolution de votre poids et enregistre vos repas à partir d’une simple photo.",
    calc: {
      healthyRange: "Fourchette de poids santé (IMC 18,5–24,9)",
      rangeValue: "{min}–{max} kg",
      devine: "Formule de Devine",
      robinson: "Formule de Robinson",
      miller: "Formule de Miller",
      formulaValue: "{value} kg",
      empty: "Saisissez votre taille pour voir votre fourchette de poids idéal estimée.",
    },
  },

  macro: {
    metaTitle: "Calculateur de macros : perte de gras et prise de muscle",
    metaDescription:
      "Calculateur de macros gratuit pour perdre du gras ou prendre du muscle : convertissez vos calories en grammes de protéines, glucides et lipides. Essayez-le.",
    breadcrumb: "Calculateur de macros",
    title: "Calculateur de macros",
    subtitle: "Transformez votre objectif calorique en objectifs quotidiens de protéines, de glucides et de lipides, gratuitement et sans inscription.",
    ctaTitle: "Suivez vos macros automatiquement",
    ctaBody:
      "Prenez une photo et MyNutriRise enregistre pour vous les protéines, les glucides et les lipides, avec un détail quotidien par rapport à vos objectifs.",
    calc: {
      caloriesLabel: "Calories quotidiennes",
      hint: "Vous ne connaissez pas les vôtres ? Utilisez d’abord le <link>calculateur de calories</link>.",
      dietAria: "Type d’alimentation",
      splits: {
        balanced: "Équilibré",
        highprotein: "Protéiné",
        keto: "Céto / pauvre en glucides",
        endurance: "Endurance",
      },
      splitSummary: "{p} % protéines · {c} % glucides · {f} % lipides",
      protein: "Protéines",
      carbs: "Glucides",
      fat: "Lipides",
      grams: "{n} g",
      empty: "Saisissez vos calories quotidiennes pour voir vos objectifs de macros.",
    },
  },
});

export default tools;
