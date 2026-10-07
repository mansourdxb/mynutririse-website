import type { Facts } from "@/data/facts";
import type en from "../en/tools";

const tools = (f: Facts): ReturnType<typeof en> => ({
  // Strings shared by several tool pages and calculators.
  shared: {
    breadcrumb: "Outils",
    faqHeading: "Questions fréquentes",
    disclaimer:
      "Cet outil fournit des estimations générales et ne constitue pas un avis médical. Consultez un professionnel avant tout changement alimentaire important.",
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
    mifflin: {
      men: "Hommes : MB = 10 × poids (kg) + 6,25 × taille (cm) − 5 × âge + 5",
      women: "Femmes : MB = 10 × poids (kg) + 6,25 × taille (cm) − 5 × âge − 161",
    },
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
    metaTitle: "Calcul de l’IMC (indice de masse corporelle)",
    metaDescription:
      "Calculateur d’IMC gratuit (métrique et impérial). Comparez votre indice de masse corporelle aux valeurs de référence et comprenez ce chiffre.",
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
    metaTitle: "Calculateur de métabolisme de base (MB)",
    metaDescription:
      "Calculateur de métabolisme de base gratuit (Mifflin–St Jeor). Découvrez les calories brûlées au repos et comment en faire un objectif quotidien.",
    breadcrumb: "Calculateur de MB",
    title: "Calculateur de métabolisme de base",
    subtitle: "Découvrez combien de calories votre corps brûle au repos complet.",
    whatIsHeading: "Qu’est-ce que le métabolisme de base ?",
    whatIs:
      "Votre métabolisme de base correspond à l’énergie dont votre corps a besoin simplement pour rester en vie — respiration, circulation, réparation des cellules — sans le moindre mouvement. Il représente généralement 60 à 70 % des calories que vous brûlez dans une journée, c’est pourquoi il sert de base à tout objectif calorique.",
    equationIntro: "Ce calculateur utilise l’<b>équation de Mifflin–St Jeor</b> :",
    example:
      "<b>Exemple détaillé :</b> une femme de 28 ans, 162 cm et 60 kg : 10×60 + 6,25×162 − 5×28 − 161 = <b>1 312 kcal/jour</b> au repos complet.",
    targetHeading: "Du métabolisme de base à l’objectif quotidien",
    target:
      "Le métabolisme de base n’est que la moitié « repos » de l’équation. Multipliez-le par un facteur d’activité (1,2 à 1,9) pour obtenir votre dépense énergétique journalière totale : c’est exactement ce que fait notre <calorie>calculateur de calories</calorie>, et le <macro>calculateur de macros</macro> répartit ensuite le résultat en protéines, glucides et lipides.",
    fastingHeading: "Le métabolisme de base pendant le jeûne",
    fasting:
      "Le jeûne de courte durée — 16:8 ou jeûne quotidien pendant le Ramadan — ne fait pas baisser votre métabolisme de base de manière significative. Le ralentissement métabolique ne devient préoccupant qu’en cas d’apports très faibles et prolongés. Pendant le Ramadan, vos besoins au repos restent les mêmes : prévoyez le suhoor et l’iftar pour les couvrir.",
    faqs: [
      {
        question: "Qu’est-ce qu’un métabolisme de base normal ?",
        answer:
          "La plupart des adultes se situent approximativement entre 1 200 et 2 000 kcal/jour selon leur gabarit, leur âge et leur sexe. Les corps plus grands et plus jeunes brûlent davantage au repos ; le métabolisme de base diminue doucement avec l’âge.",
      },
      {
        question: "Le métabolisme de base correspond-il aux calories que je dois manger ?",
        answer:
          "Non. Le métabolisme de base correspond à ce que vous brûlez au repos complet. Votre objectif quotidien est ce chiffre multiplié par un facteur d’activité : utilisez le calculateur de calories pour obtenir le total.",
      },
      {
        question: "Le jeûne fait-il baisser mon métabolisme de base ?",
        answer:
          "Le jeûne intermittent quotidien, y compris celui du Ramadan, a peu d’effet sur le métabolisme de base. Seule une restriction sévère et prolongée entraîne une adaptation métabolique significative.",
      },
      {
        question: "Comment augmenter mon métabolisme de base ?",
        answer:
          "Prendre du muscle est le moyen le plus fiable : le tissu musculaire brûle plus d’énergie au repos que la graisse. La musculation associée à un apport suffisant en protéines augmente votre dépense au repos avec le temps.",
      },
    ],
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
    metaTitle: "Calculateur de besoins caloriques",
    metaDescription:
      "Calculez vos besoins caloriques (Mifflin–St Jeor) : objectifs gratuits pour maigrir, maintenir ou prendre du muscle, et guide du Ramadan.",
    breadcrumb: "Calculateur de calories",
    title: "Calculateur de calories",
    subtitle:
      "Découvrez combien de calories il vous faut chaque jour pour perdre du poids, le maintenir ou prendre du muscle, gratuitement et sans inscription.",
    howHeading: "Comment vos besoins caloriques sont calculés",
    howIntro:
      "Ce calculateur utilise l’<b>équation de Mifflin–St Jeor</b>, la formule la plus couramment utilisée par les diététiciens pour estimer le métabolisme de base (MB), c’est-à-dire l’énergie que votre corps brûle au repos :",
    tdeeIntro:
      "Votre métabolisme de base est ensuite multiplié par un facteur d’activité pour estimer votre dépense énergétique journalière totale (DEJ) :",
    table: {
      level: "Niveau d’activité",
      multiplier: "Coefficient",
      week: "Semaine type",
      // Same order as the multipliers 1.2, 1.375, 1.55, 1.725, 1.9.
      rows: [
        { level: "Sédentaire", week: "Travail de bureau, peu ou pas d’exercice" },
        { level: "Activité légère", week: "Exercice léger 1 à 3 jours/semaine" },
        { level: "Activité modérée", week: "Exercice modéré 3 à 5 jours/semaine" },
        { level: "Activité intense", week: "Exercice soutenu 6 à 7 jours/semaine" },
        { level: "Activité très intense", week: "Travail physique et entraînement" },
      ],
    },
    example:
      "<b>Exemple détaillé :</b> un homme de 30 ans, 175 cm et 75 kg, a un métabolisme de base de 10×75 + 6,25×175 − 5×30 + 5 = 1 699 kcal. S’il fait de l’exercice 3 à 5 jours par semaine (×1,55), ses besoins d’entretien sont d’environ 2 633 kcal/jour, soit environ 2 133 pour perdre environ 0,5 kg par semaine, ou environ 2 933 pour prendre du muscle avec un léger surplus.",
    numberHeading: "Que faire de ce chiffre ?",
    number:
      "Un objectif ne fonctionne que si vous suivez vos apports par rapport à lui. Répartissez vos calories intelligemment sur la journée — notre <macro>calculateur de macros</macro> gratuit transforme ce chiffre en objectifs de protéines, de glucides et de lipides — et pesez-vous chaque semaine, en ajustant de 100 à 200 kcal si votre tendance s’écarte de l’objectif. Pour comprendre la partie « énergie au repos » du calcul, consultez le <bmr>calculateur de métabolisme de base</bmr>.",
    ramadanHeading: "Les calories pendant le Ramadan et le jeûne",
    ramadan:
      "Le jeûne change le <em>moment</em> où vous mangez, pas les besoins de votre corps. Pendant le Ramadan, visez votre objectif quotidien en le répartissant entre le suhoor et l’iftar : misez sur les protéines et les glucides lents au suhoor, rompez le jeûne avec des boissons et des dattes, et gardez un repas d’iftar équilibré plutôt que de tout concentrer dans une seule assiette démesurée. La même logique s’applique au 16:8 et aux autres protocoles ; notre <guide>guide du 16:8 pour débutants</guide> détaille tout cela.",
    faqs: [
      {
        question: "Combien de calories manger pour perdre du poids ?",
        answer:
          "Un déficit d’environ 500 kcal par rapport à vos besoins d’entretien entraîne une perte d’environ 0,5 kg (1 lb) par semaine. Utilisez le calculateur ci-dessus pour connaître vos besoins d’entretien, puis retirez 500 kcal, sans descendre sous 1 200 kcal/jour sans avis médical.",
      },
      {
        question: "Quelle formule ce calculateur de calories utilise-t-il ?",
        answer:
          "Il utilise l’équation de Mifflin–St Jeor, largement considérée comme la formule la plus précise pour estimer les besoins énergétiques au repos, multipliée par un facteur d’activité compris entre 1,2 (sédentaire) et 1,9 (activité très intense).",
      },
      {
        question: "Les calculateurs de calories sont-ils précis ?",
        answer:
          "Pour la plupart des personnes, les équations donnent une estimation à environ ±10 % près. Considérez ce chiffre comme un point de départ : suivez vos apports et votre poids pendant 2 à 3 semaines, puis ajustez de 100 à 200 kcal si votre tendance réelle s’écarte de l’objectif.",
      },
      {
        question: "Mes besoins caloriques changent-ils pendant le Ramadan ?",
        answer:
          "Vos besoins énergétiques quotidiens restent à peu près les mêmes ; c’est la fenêtre alimentaire qui change. Visez votre objectif habituel en le répartissant entre le suhoor et l’iftar, en misant à chaque repas sur les protéines et l’hydratation plutôt que de tout concentrer dans un seul gros repas.",
      },
    ],
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
    metaTitle: "Calculateur de poids idéal selon votre taille",
    metaDescription:
      "Calculateur de poids idéal gratuit basé sur les formules de Devine et de Robinson et sur la zone d’IMC normale : trouvez un objectif réaliste pour votre taille.",
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
      formulaValue: "{value} kg",
      empty: "Saisissez votre taille pour voir votre fourchette de poids idéal estimée.",
    },
  },

  macro: {
    metaTitle: "Calculateur de macros nutritionnels",
    metaDescription:
      "Calculateur de macros gratuit : vos calories en objectifs de protéines, glucides et lipides, en répartition équilibrée, protéinée, céto ou endurance.",
    breadcrumb: "Calculateur de macros",
    title: "Calculateur de macros",
    subtitle: "Transformez votre objectif calorique en objectifs quotidiens de protéines, de glucides et de lipides, gratuitement et sans inscription.",
    chooseHeading: "Comment choisir votre répartition",
    choose:
      "Une répartition <b>équilibrée</b> (30 % de protéines / 40 % de glucides / 30 % de lipides) convient à la plupart des gens. Optez pour une répartition <b>protéinée</b> (40 %) pour prendre du muscle ou le préserver en déficit : les protéines sont aussi le macronutriment le plus rassasiant. La répartition <b>céto</b> limite les glucides à environ 5 % pour les programmes pauvres en glucides, et la répartition <b>endurance</b> porte les glucides à 50 % pour soutenir de gros volumes d’entraînement.",
    math:
      "Le calcul est simple : les protéines et les glucides apportent <b>4 kcal par gramme</b>, les lipides <b>9 kcal par gramme</b>. Pour 2 000 kcal avec une répartition équilibrée, cela donne 150 g de protéines, 200 g de glucides et 67 g de lipides.",
    startHeading: "Partez du bon nombre de calories",
    start:
      "Votre répartition ne vaut que par les calories qu’elle divise. Si vous n’avez pas encore fixé d’objectif quotidien, utilisez d’abord le <calorie>calculateur de calories</calorie> ; et si vous mangez des plats traditionnels, notre guide pour <guide>suivre ses macros avec les plats de sa culture</guide> montre comment atteindre ces objectifs avec du biryani, du tajine ou du kabuli pulao au menu.",
    practiceHeading: "Atteindre vos macros au quotidien",
    practice:
      "Construisez chaque repas autour d’une source de protéines, adaptez les glucides à vos jours d’entraînement et considérez les lipides comme le reste. La régularité prime sur la précision : rester à ±10 g de chaque objectif, c’est une bonne journée.",
    faqs: [
      {
        question: "Quelle répartition des macros pour perdre du poids ?",
        answer:
          "Davantage de protéines aide le plus : 35 à 40 % de protéines préservent le muscle et vous rassasient en déficit calorique. C’est le déficit lui-même, et non la répartition exacte, qui fait perdre du poids.",
      },
      {
        question: "De combien de protéines ai-je besoin pour prendre du muscle ?",
        answer:
          "Environ 1,6 à 2,2 g par kg de poids corporel et par jour. La répartition protéinée (40 %) avec un surplus modéré permet d’atteindre cette fourchette pour la plupart des gens.",
      },
      {
        question: "Les macros comptent-elles plus que les calories ?",
        answer:
          "Les calories déterminent l’évolution du poids ; les macros déterminent comment vous vous sentez et ce que vous conservez. Fixez d’abord vos calories, puis utilisez les macros pour protéger votre masse musculaire et votre énergie.",
      },
      {
        question: "Puis-je suivre mes macros avec une alimentation halal ou les plats de ma culture ?",
        answer: `Oui : les plats composés comme le biryani ou le tajine ont des profils de macros connus. MyNutriRise couvre ${f.CUISINES} cuisines du monde avec les protéines, glucides et lipides par portion.`,
      },
    ],
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
