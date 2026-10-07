import type { Facts } from "@/data/facts";
import type en from "../en/terms";

// Inline tags: <email>…</email> support mailto link, <site>…</site> website link,
// <fatsecret>…</fatsecret> external link.
export default (f: Facts): ReturnType<typeof en> => ({
  metaTitle: "Términos del servicio",
  metaDescription:
    "Lee los términos y condiciones que rigen el uso de la app y los servicios de MyNutriRise.",
  title: "Términos del servicio",
  lastUpdated: "Última actualización: 15 de mayo de 2026",
  // Translations: note that the English version is the legally binding one. Empty in English.
  bindingNote:
    "Esta traducción se ofrece solo por comodidad. La versión en inglés es la jurídicamente vinculante y prevalece en caso de discrepancia.",
  sections: [
    {
      heading: "1. Aceptación de los términos",
      blocks: [
        {
          type: "p",
          text: "Al descargar, instalar o utilizar MyNutriRise («la App»), aceptas quedar vinculado por estos Términos del servicio. Si no estás de acuerdo, no utilices la App.",
        },
      ],
    },
    {
      heading: "2. Descripción del servicio",
      blocks: [
        {
          type: "p",
          text: "MyNutriRise es una aplicación de seguimiento de salud y nutrición que ofrece:",
        },
        {
          type: "ul",
          items: [
            "Escaneo de fotos de comida y análisis nutricional",
            "Registro de comidas y seguimiento de calorías y macros",
            "Temporizador y seguimiento del ayuno intermitente",
            "Coaching nutricional con IA",
            `Base de datos de dietas culturales con ${f.DISHES} platos`,
            "Generación de listas de compras",
            "Seguimiento del consumo de agua",
            "Seguimiento del progreso corporal con fotos",
            "Gamificación con insignias, XP y rachas",
            "Integración con dispositivos de salud",
          ],
        },
      ],
    },
    {
      heading: "3. No constituye consejo médico",
      blocks: [
        {
          type: "p",
          variant: "important",
          text: "IMPORTANTE: MyNutriRise NO es una aplicación médica y NO ofrece consejo médico. La información proporcionada tiene únicamente fines educativos e informativos generales.",
        },
        {
          type: "ul",
          items: [
            "Consulta siempre a un profesional sanitario cualificado antes de hacer cambios importantes en tu alimentación o en tu rutina de ejercicio.",
            "No utilices esta App para diagnosticar, tratar, curar ni prevenir ninguna enfermedad.",
            "Si padeces una afección médica o un trastorno alimentario, o estás embarazada, consulta a tu médico antes de utilizar esta App.",
            "Las respuestas del coaching con IA son generadas por inteligencia artificial y no deben sustituir el consejo médico profesional.",
          ],
        },
      ],
    },
    {
      heading: "4. Cuentas de usuario",
      blocks: [
        {
          type: "ul",
          items: [
            "Debes proporcionar información veraz al crear una cuenta.",
            "Eres responsable de mantener la seguridad de las credenciales de tu cuenta.",
            "Debes tener al menos 13 años para utilizar esta App.",
            "Una cuenta por persona. No compartas tu cuenta.",
          ],
        },
      ],
    },
    {
      heading: "5. Suscripción y pagos",
      blocks: [
        {
          type: "ul",
          items: [
            "MyNutriRise ofrece niveles de suscripción gratuito y Premium.",
            "Las suscripciones Premium se facturan a través de Google Play Store o Apple App Store.",
            "Las suscripciones se renuevan automáticamente salvo que se cancelen al menos 24 horas antes del final del periodo en curso.",
            "Los reembolsos se gestionan conforme a las políticas de la tienda de aplicaciones correspondiente.",
            "Nos reservamos el derecho de modificar los precios con previo aviso.",
          ],
        },
      ],
    },
    {
      heading: "6. Uso aceptable",
      blocks: [
        { type: "p", text: "Te comprometes a NO:" },
        {
          type: "ul",
          items: [
            "Utilizar la App para ningún fin ilegal.",
            "Intentar aplicar ingeniería inversa, piratear o comprometer la App.",
            "Utilizar la función de coaching con IA para temas no relacionados con la salud.",
            "Subir contenido inapropiado, ofensivo o ilegal.",
            "Falsear tu identidad o suplantar a otras personas.",
            "Interferir en el funcionamiento de la App o alterarlo.",
          ],
        },
      ],
    },
    {
      heading: "7. Propiedad intelectual",
      blocks: [
        {
          type: "ul",
          items: [
            "MyNutriRise, incluidos su diseño, funciones, código y contenido, es propiedad de NutriLife y está protegida por las leyes de propiedad intelectual.",
            "La base de datos de dietas culturales es contenido propietario.",
            "No puedes copiar, modificar, distribuir ni crear obras derivadas de la App.",
          ],
        },
      ],
    },
    {
      heading: "8. Contenido de terceros",
      blocks: [
        {
          type: "p",
          text: "La información nutricional que se muestra en esta app la proporciona la API de FatSecret Platform y está sujeta a los términos del servicio de FatSecret, disponibles en <fatsecret>https://platform.fatsecret.com</fatsecret>.",
        },
      ],
    },
    {
      heading: "9. Contenido del usuario",
      blocks: [
        {
          type: "ul",
          items: [
            "Conservas la propiedad de las fotos y los datos que subes.",
            "Al subir contenido, nos concedes una licencia limitada para almacenarlo y procesarlo con el fin de prestar el servicio.",
            "No reclamamos la propiedad de tus datos personales de salud.",
          ],
        },
      ],
    },
    {
      heading: "10. Limitación de responsabilidad",
      blocks: [
        { type: "p", variant: "caps", text: "En la máxima medida permitida por la ley:" },
        {
          type: "ul",
          items: [
            "MyNutriRise se proporciona «TAL CUAL», sin garantías de ningún tipo.",
            "No somos responsables de ningún resultado de salud derivado del uso de la App.",
            "No somos responsables de la pérdida de datos, aunque adoptamos medidas razonables para proteger tus datos.",
            "Nuestra responsabilidad total no excederá el importe que hayas pagado por la App en los últimos 12 meses.",
          ],
        },
      ],
    },
    {
      heading: "11. Terminación",
      blocks: [
        {
          type: "ul",
          items: [
            "Podemos suspender o cancelar tu cuenta si incumples estos Términos.",
            "Puedes eliminar tu cuenta en cualquier momento.",
            "Tras la terminación, tus datos se eliminarán de acuerdo con nuestra Política de privacidad.",
          ],
        },
      ],
    },
    {
      heading: "12. Cambios en los términos",
      blocks: [
        {
          type: "p",
          text: "Podemos actualizar estos Términos periódicamente. El uso continuado de la App después de los cambios constituye la aceptación de los nuevos Términos.",
        },
      ],
    },
    {
      heading: "13. Contacto",
      blocks: [
        { type: "p", text: "Para preguntas sobre estos Términos:" },
        { type: "p", text: "Correo electrónico: <email>support@mynutririse.com</email>" },
        { type: "p", variant: "tight", text: "Sitio web: <site>https://mynutririse.com</site>" },
      ],
    },
  ],
});
