import type { Facts } from "@/data/facts";
import type en from "../en/halal";

export default (f: Facts): ReturnType<typeof en> => ({
  metaTitle: "Compteur de calories halal et appli nutrition musulmane | MyNutriRise",
  metaDescription: `Comptez vos calories avec une appli de nutrition compatible halal : ${f.CUISINES} cuisines du monde, un programme de jeûne pour le Ramadan, l’enregistrement des repas par photo grâce à l’IA et une prise en charge complète de l’arabe.`,
  breadcrumb: "Appli de nutrition halal",
  title: "Le compteur de calories compatible halal, pensé pour votre cuisine",
  intro:
    "La plupart des applis de calories ont été pensées autour des menus occidentaux : cherchez un biryani, un mandi ou un kabuli pulao et vous obtenez un haussement d’épaules. MyNutriRise est différente : le suivi de l’alimentation halal y est une fonctionnalité à part entière, pas un ajout de dernière minute.",
  library: {
    title: `Halal vérifié sur ${f.DISHES} plats et ${f.CUISINES} cuisines`,
    body: "Chaque plat est accompagné des calories, protéines, glucides et lipides par portion — de l’Adana kebab (380 kcal) au tajine de poulet (380 kcal) en passant par le kabuli pulao (480 kcal). Parcourez les cuisines que votre famille prépare vraiment :",
    cuisines: [
      "Turque",
      "Marocaine",
      "Persane",
      "Égyptienne",
      "Pakistanaise",
      "Indonésienne",
      "Malaisienne",
      "Afghane",
      "Somalienne et d’Afrique de l’Est",
      "Nigériane et d’Afrique de l’Ouest",
      "Du Golfe et émiratie",
      "Yéménite",
      "Libanaise",
      "Ouzbèke et d’Asie centrale",
      "Bangladaise",
      "Indienne",
      "Arabe et moyen-orientale",
    ],
    more: "+ bien d’autres",
    recipesLink: "Découvrez une sélection de plats sur notre <link>page recettes</link>.",
  },
  ramadan: {
    title: "Un jeûne prêt pour le Ramadan",
    body: `MyNutriRise propose ${f.FASTING_PLAN_COUNT} programmes de jeûne, dont un <b>programme Ramadan</b> dédié qui suit votre jeûne de l’aube au coucher du soleil. Continuez à enregistrer vos repas pour garder des apports en calories et en protéines stables tout au long du mois. En dehors du Ramadan, le même suivi couvre le 16:8, le 5:2, l’OMAD et bien plus encore — consultez notre <link>guide du jeûne 16:8 pour débutants</link>.`,
  },
  photo: {
    title: "Prenez une photo, l’IA s’occupe du reste",
    body: "Avec les repas servis à partager, difficile d’estimer « une portion ». Photographiez votre assiette : l’IA identifie le plat, estime votre portion et enregistre calories et macros en quelques secondes. Définissez votre objectif quotidien avec notre <link>calculateur de calories</link> gratuit et l’app tient les comptes pour vous.",
  },
  language: {
    title: "Dans votre langue",
    body: "L’app parle <b>anglais, arabe, allemand, espagnol, français et russe</b> — y compris le coach IA et les programmes alimentaires comme <b>Moyen-Orient équilibré</b>, un programme de 4 semaines compatible halal à base de viandes grillées, de légumineuses, de salades fraîches et de céréales complètes.",
  },
  faqTitle: "Questions fréquentes",
  faqs: [
    {
      question: "MyNutriRise est-elle compatible halal ?",
      answer: `Oui. Le filtrage halal est vérifié sur chacun des ${f.DISHES} plats du catalogue, issus de ${f.CUISINES} cuisines du monde, avec des recettes et des programmes alimentaires compatibles halal — dont un programme dédié, « Moyen-Orient équilibré ».`,
    },
    {
      question: "Existe-t-il un mode Ramadan ?",
      answer: `Oui. Parmi ses ${f.FASTING_PLAN_COUNT} programmes de jeûne, MyNutriRise propose un programme Ramadan dédié qui suit votre jeûne de l’aube au coucher du soleil, pendant que vous continuez à enregistrer vos repas pour rester équilibré tout au long du mois.`,
    },
    {
      question: "Puis-je suivre des plats traditionnels comme le biryani ou le kabuli pulao ?",
      answer:
        "Oui. Des plats comme le biryani au poulet, le kabuli pulao, le nihari, le mandi, le koshari ou le tajine figurent dans la bibliothèque d’aliments avec leurs calories, protéines, glucides et lipides par portion — ou prenez une photo et l’IA estime votre portion exacte.",
    },
    {
      question: "Quelles langues l’app prend-elle en charge ?",
      answer:
        "MyNutriRise est disponible en anglais, arabe, allemand, espagnol, français et russe, sur iPhone comme sur Android.",
    },
  ],
  cta: {
    title: "La cuisine de votre culture, enfin bien suivie",
    body: "Téléchargement gratuit sur iPhone et Android — ou commencez par le <link>quiz programme en 1 minute</link>.",
  },
});
