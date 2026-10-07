import type { Facts } from "@/data/facts";
import type en from "../en/privacy";

// Inline tags: <b>…</b> bold, <email>…</email> support mailto link,
// <site>…</site> website link, <fatsecretPrivacy>…</fatsecretPrivacy> external link.
// eslint-disable-next-line @typescript-eslint/no-unused-vars
export default (f: Facts): ReturnType<typeof en> => ({
  metaTitle: "Política de privacidad",
  metaDescription:
    "Descubre cómo MyNutriRise recopila, utiliza y protege tu información personal.",
  title: "Política de privacidad",
  lastUpdated: "Última actualización: 29 de mayo de 2026",
  // Translations: note that the English version is the legally binding one. Empty in English.
  bindingNote:
    "Esta traducción se ofrece solo por comodidad. La versión en inglés es la jurídicamente vinculante y prevalece en caso de discrepancia.",
  sections: [
    {
      heading: "1. Información que recopilamos",
      blocks: [
        {
          type: "p",
          text: "MyNutriRise recopila la siguiente información para ofrecerte una experiencia de salud y nutrición personalizada:",
        },
        {
          type: "ul",
          items: [
            "<b>Información de la cuenta:</b> dirección de correo electrónico, nombre y foto de perfil cuando creas una cuenta.",
            "<b>Datos de salud y corporales:</b> peso, altura, medidas corporales, preferencias alimentarias, alergias, objetivos de salud y nivel de actividad que proporcionas voluntariamente.",
            "<b>Datos de nutrición:</b> comidas registradas, datos de seguimiento de calorías y macros, sesiones de ayuno y consumo de agua.",
            "<b>Fotos:</b> fotos de comida tomadas para el análisis nutricional y fotos de progreso para el seguimiento de tu transformación corporal.",
            "<b>Datos de uso:</b> interacciones con la app, patrones de uso de las funciones e información del dispositivo para mejorar nuestro servicio.",
          ],
        },
      ],
    },
    {
      heading: "2. Cómo utilizamos tu información",
      blocks: [
        { type: "p", text: "Utilizamos tu información para:" },
        {
          type: "ul",
          items: [
            "Ofrecer recomendaciones nutricionales y sugerencias de comidas personalizadas.",
            "Hacer seguimiento de tus objetivos de salud, sesiones de ayuno, consumo de agua y progreso.",
            "Hacer funcionar las funciones de coaching con IA con el contexto relevante sobre tu evolución de salud.",
            "Generar listas de compras y planes de alimentación según tus preferencias.",
            "Mostrar logros, rachas y funciones de gamificación.",
            "Mejorar nuestra app y desarrollar nuevas funciones.",
            "Enviarte recordatorios y notificaciones (con tu permiso).",
          ],
        },
      ],
    },
    {
      heading: "3. Almacenamiento y seguridad de los datos",
      blocks: [
        { type: "p", text: "Tus datos se almacenan de forma segura mediante los servicios de Google Firebase:" },
        {
          type: "ul",
          items: [
            "Firebase Authentication para un inicio de sesión seguro.",
            "Cloud Firestore para los datos estructurados (comidas, objetivos, progreso).",
            "Firebase Storage para las fotos (escaneos de comida, fotos de progreso).",
            "Todos los datos se cifran en tránsito mediante TLS/SSL.",
            "La infraestructura de Firebase cumple las normas SOC 1, SOC 2 y SOC 3.",
          ],
        },
        {
          type: "p",
          text: "Aplicamos medidas de seguridad estándar del sector para proteger tu información personal frente al acceso, la alteración, la divulgación o la destrucción no autorizados.",
        },
        { type: "h3", text: "Conservación de los datos" },
        {
          type: "p",
          text: "Conservamos tus datos personales, de nutrición y de salud mientras tu cuenta permanezca activa, para que la app pueda mostrar tu historial, tu progreso y tus tendencias. Los datos de salud leídos de Google Health Connect o Apple Health se actualizan cada vez que la app se sincroniza y solo se conservan mientras la integración esté conectada. Cuando eliminas tu cuenta, todos los datos asociados se eliminan de forma permanente de nuestros sistemas en un plazo de 30 días (consulta «Tus derechos» más abajo).",
        },
      ],
    },
    {
      heading: "4. Datos de salud",
      blocks: [
        {
          type: "p",
          text: "MyNutriRise puede conectarse a Google Health Connect (Android) o Apple Health (iOS), pero solo después de que concedas tu permiso explícito. Solo accedemos a los tipos de datos necesarios para las funciones de actividad y sueño de la app:",
        },
        {
          type: "ul",
          items: [
            "<b>Pasos</b>: para mostrar la actividad diaria y afinar las estimaciones del balance de calorías. (Lectura y escritura).",
            "<b>Energía activa / calorías quemadas</b>: para calcular tu gasto energético diario.",
            "<b>Ejercicio y entrenamientos</b>: para reflejar la actividad en tu resumen diario.",
            "<b>Distancia</b>: para mostrar el movimiento junto con los pasos.",
            "<b>Hidratación / agua</b>: para sincronizar el consumo de agua con tu registro.",
            "<b>Sueño</b>: para mostrar la duración del sueño y análisis de recuperación. (Lectura y escritura).",
          ],
        },
        {
          type: "p",
          text: "Solo en iOS, la app también puede leer la <b>energía basal</b> y los <b>pisos subidos</b> para mejorar las estimaciones del gasto energético. No solicitamos estos datos en Android.",
        },
        {
          type: "ul",
          items: [
            "Los datos de salud se utilizan <b>exclusivamente</b> para hacer funcionar estas funciones de la app, nunca con fines publicitarios ni de elaboración de perfiles.",
            "Se almacenan en tu documento privado de Firestore, no se comparten con otros usuarios y <b>nunca se venden</b> a terceros.",
            "Puedes desconectar la integración de salud en cualquier momento desde Ajustes y revocar el acceso en Health Connect o Apple Health.",
            "Los datos de salud se eliminan junto con tu cuenta (consulta «Tus derechos» y «Conservación de los datos»).",
          ],
        },
      ],
    },
    {
      heading: "5. Comunicación de datos",
      blocks: [
        { type: "p", text: "NO hacemos lo siguiente:" },
        {
          type: "ul",
          items: [
            "Vender tus datos personales a terceros.",
            "Compartir tus datos de salud con anunciantes.",
            "Utilizar tus datos para fines distintos de la prestación de nuestro servicio.",
          ],
        },
        {
          type: "p",
          text: "PODEMOS compartir datos anonimizados y agregados con fines analíticos y de mejora del servicio.",
        },
      ],
    },
    {
      heading: "6. Servicios de terceros",
      blocks: [
        {
          type: "p",
          text: "Utilizamos la API de FatSecret Platform para proporcionar datos nutricionales, el escaneo de códigos de barras y la búsqueda de alimentos. Las búsquedas que introduces pueden transmitirse a FatSecret. Consulta la política de privacidad de FatSecret en <fatsecretPrivacy>https://platform.fatsecret.com/privacy</fatsecretPrivacy>.",
        },
      ],
    },
    {
      heading: "7. Tus derechos",
      blocks: [
        { type: "p", text: "Tienes derecho a:" },
        {
          type: "ul",
          items: [
            "Acceder a tus datos personales almacenados en la app.",
            "Actualizar o corregir tu información desde la pantalla Editar perfil.",
            "<b>Eliminar tu cuenta y todos los datos asociados</b> directamente en la app: ve a <b>Ajustes → Eliminar cuenta</b>. Esto elimina de forma permanente tu cuenta, tu perfil, tu historial de nutrición, tus fotos y cualquier dato de salud almacenado. También puedes solicitar la eliminación por correo electrónico a <email>support@mynutririse.com</email>. Las eliminaciones se completan en un plazo de 30 días.",
            "Darte de baja de las notificaciones en cualquier momento.",
            "Desconectar la integración de datos de salud.",
            "Solicitar una copia de tus datos.",
          ],
        },
      ],
    },
    {
      heading: "8. Privacidad de los menores",
      blocks: [
        {
          type: "p",
          text: "MyNutriRise no está dirigida a menores de 13 años. No recopilamos de forma consciente información personal de menores de 13 años. Si crees que hemos recopilado este tipo de información, ponte en contacto con nosotros de inmediato.",
        },
      ],
    },
    {
      heading: "9. Cambios en esta política",
      blocks: [
        {
          type: "p",
          text: "Podemos actualizar esta Política de privacidad periódicamente. Te notificaremos cualquier cambio publicando la nueva Política de privacidad en la app y actualizando la fecha de «Última actualización».",
        },
      ],
    },
    {
      heading: "10. Contacto",
      blocks: [
        {
          type: "p",
          text: "Si tienes preguntas sobre esta Política de privacidad o sobre tus datos, ponte en contacto con nosotros en:",
        },
        { type: "p", text: "Correo electrónico: <email>support@mynutririse.com</email>" },
        { type: "p", variant: "tight", text: "Sitio web: <site>https://mynutririse.com</site>" },
      ],
    },
  ],
});
