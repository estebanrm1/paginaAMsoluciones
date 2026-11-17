// Fuente única de contenido del sitio. Todo el copy vive acá para mantener coherencia de marca.
// Regla: no inventar clientes, resultados, cifras ni testimonios.
import type { ImageMetadata } from 'astro';
import rinconShot from '../assets/work/rincon-gourmet.png';
import chefShot from '../assets/work/portfolio-chef.png';
import cvShot from '../assets/work/cv-online.png';

export const site = {
  name: 'Enlace AR',
  short: 'Enlace',
  /** Dominio sugerido (libre según DNS al 17/11/2026; registrar en NIC Argentina). */
  futureDomain: 'enlace.ar',
  url: 'https://enlace-ar.netlify.app',
  tagline: 'Tecnología con propósito',
  description:
    'Desarrollo web, inteligencia artificial y automatización para empresas, pymes y profesionales. Primero entendemos tu negocio; después elegimos la tecnología.',
  location: 'Tucumán, Argentina',
  modality: 'Trabajamos de forma remota',
  whatsapp: 'https://wa.me/543813198483',
  phoneDisplay: '+54 381 319-8483',
  phoneE164: '+543813198483',
  instagram: 'https://www.instagram.com/amsolucionesweb/',
  instagramHandle: '@amsolucionesweb',
  linkedin: 'https://www.linkedin.com/company/am-soluciones-w',
  whatsappMessage: 'Hola Enlace, quiero contarles qué necesito mejorar en mi negocio.',
};

export const waLink = (text: string = site.whatsappMessage) => `${site.whatsapp}?text=${encodeURIComponent(text)}`;

export const nav = [
  { href: '/#soluciones', label: 'Soluciones' },
  { href: '/#metodo', label: 'Cómo trabajamos' },
  { href: '/#trabajos', label: 'Trabajos' },
  { href: '/nosotros', label: 'Nosotros' },
];

/** Situaciones reales que vive un negocio, contadas en su idioma (sin tecnicismos). */
export const problems = [
  {
    pain: 'Cargás los mismos datos en varios lugares.',
    answer: 'Conectamos tus herramientas para que la información se cargue una sola vez y llegue a donde tiene que llegar.',
  },
  {
    pain: 'Respondés las mismas preguntas todos los días.',
    answer: 'Creamos asistentes y respuestas automáticas que atienden lo repetitivo y te derivan lo importante.',
  },
  {
    pain: 'Los reportes se arman a mano, con planillas.',
    answer: 'Automatizamos la recolección de datos y el armado de reportes para que tengas la información al día.',
  },
  {
    pain: 'Tu negocio no se ve en internet como merece.',
    answer: 'Diseñamos sitios claros y rápidos que explican lo que hacés y transmiten confianza desde el primer vistazo.',
  },
  {
    pain: 'Querés usar inteligencia artificial, pero no sabés por dónde empezar.',
    answer: 'Identificamos en qué tareas aporta valor real y la implementamos con criterio, paso a paso.',
  },
  {
    pain: 'Hay tareas que solo una persona sabe cómo se hacen.',
    answer: 'Ordenamos y documentamos procesos para que el negocio no dependa de la memoria de nadie.',
  },
];

export type SolutionSlug = 'desarrollo-web' | 'inteligencia-artificial' | 'automatizacion-e-integraciones';

export interface Solution {
  slug: SolutionSlug;
  index: string;
  name: string;
  short: string;
  summary: string;
  seoTitle: string;
  seoDescription: string;
  h1: string;
  lead: string;
  solves: string[];
  offerings: { title: string; text: string }[];
  examples: { title: string; before: string; after: string }[];
  includes: string[];
  faq: { q: string; a: string }[];
}

export const solutions: Solution[] = [
  {
    slug: 'desarrollo-web',
    index: '01',
    name: 'Desarrollo web y soluciones digitales',
    short: 'Desarrollo web',
    summary: 'Sitios, portfolios y herramientas a medida, pensados para comunicar con claridad y para funcionar en el día a día.',
    seoTitle: 'Desarrollo web y soluciones digitales a medida',
    seoDescription:
      'Sitios web para negocios, portfolios profesionales, CV online y herramientas internas a medida. Rápidos, claros y adaptados a cualquier dispositivo.',
    h1: 'Sitios y herramientas digitales que comunican y funcionan.',
    lead: 'Diseñamos y desarrollamos sitios web, portfolios y herramientas a medida, a partir de lo que tu negocio necesita transmitir y resolver.',
    solves: [
      'Tu negocio no tiene presencia en internet, o la que tiene no transmite confianza.',
      'Tus clientes no encuentran rápido lo que necesitan saber: qué hacés, dónde estás, cómo contactarte.',
      'Usás planillas o procesos manuales que podrían ser una herramienta simple y ordenada.',
    ],
    offerings: [
      { title: 'Sitios web para negocios', text: 'Servicios, ubicación, horarios y contacto directo, con una estructura que guía al visitante hacia la consulta.' },
      { title: 'Portfolios y sitios personales', text: 'Para profesionales y emprendedores que quieren mostrar su trabajo y su trayectoria con identidad propia.' },
      { title: 'CV online', text: 'Un currículum digital claro, accesible desde cualquier dispositivo y fácil de compartir.' },
      { title: 'Herramientas a medida', text: 'Paneles, formularios y aplicaciones internas que reemplazan planillas y ordenan la operación.' },
      { title: 'Visibilidad en buscadores', text: 'Estructura, velocidad y contenidos preparados para que te encuentren en Google.' },
      { title: 'Mantenimiento y soporte', text: 'Actualizaciones y mejoras para que tu sitio siga funcionando y evolucione con tu negocio.' },
    ],
    examples: [
      {
        title: 'Un negocio gastronómico',
        before: 'La carta, los horarios y las reservas se consultan por mensaje, una y otra vez.',
        after: 'Un sitio con carta, horarios, ubicación y un canal de reservas siempre disponible.',
      },
      {
        title: 'Un profesional independiente',
        before: 'Su trabajo está disperso en redes y archivos que no reflejan su experiencia.',
        after: 'Un portfolio propio que presenta sus proyectos y facilita el contacto.',
      },
      {
        title: 'Un equipo que trabaja con planillas',
        before: 'Varias personas editan la misma planilla y nadie sabe cuál es la versión correcta.',
        after: 'Una herramienta simple, con formularios y un panel que muestra el estado real.',
      },
    ],
    includes: [
      'Diseño adaptado a celulares, tablets y computadoras',
      'Carga rápida y buenas prácticas para buscadores',
      'Contacto directo por formulario, WhatsApp o redes',
      'Accesibilidad para que cualquier persona pueda usarlo',
    ],
    faq: [
      {
        q: '¿Cuánto tarda en estar listo un sitio?',
        a: 'Depende del alcance. Un CV online o un sitio sencillo puede estar listo en pocos días; un sitio con más secciones o una herramienta a medida se planifica por etapas, con fechas claras desde el inicio.',
      },
      {
        q: '¿Puedo actualizar el contenido después?',
        a: 'Sí. Te acompañamos con opciones de mantenimiento y, si lo necesitás, preparamos el sitio para que puedas modificar los contenidos más frecuentes.',
      },
      {
        q: '¿El sitio va a funcionar bien en celulares?',
        a: 'Sí. Diseñamos cada sitio pensando primero en cómo se ve y se usa desde un teléfono, y lo probamos en distintos tamaños de pantalla.',
      },
    ],
  },
  {
    slug: 'inteligencia-artificial',
    index: '02',
    name: 'Inteligencia artificial aplicada',
    short: 'Inteligencia artificial',
    summary: 'Asistentes, procesamiento de información y tareas inteligentes que liberan horas de trabajo repetitivo.',
    seoTitle: 'Inteligencia artificial aplicada a negocios',
    seoDescription:
      'Asistentes inteligentes, procesamiento de documentos y automatización con IA para empresas y profesionales. Usamos la IA donde ahorra tiempo de verdad.',
    h1: 'Inteligencia artificial aplicada a tareas reales.',
    lead: 'La IA es una herramienta poderosa cuando resuelve una tarea concreta. Te ayudamos a identificar esas tareas y a implementarla de forma segura, clara y medible.',
    solves: [
      'Tu equipo pierde horas respondiendo consultas que se repiten.',
      'Recibís documentos, correos o pedidos que alguien tiene que leer, clasificar y cargar a mano.',
      'Tenés información valiosa, pero nadie tiene tiempo de analizarla.',
    ],
    offerings: [
      { title: 'Asistentes para clientes', text: 'Responden consultas frecuentes con la información de tu negocio y derivan a una persona cuando hace falta.' },
      { title: 'Asistentes internos', text: 'Ayudan a tu equipo a encontrar procedimientos, políticas o datos sin buscar en diez lugares distintos.' },
      { title: 'Lectura de documentos', text: 'Extraen datos de facturas, formularios o comprobantes y los cargan donde corresponde.' },
      { title: 'Clasificación y resumen', text: 'Ordenan mensajes, correos y pedidos por tema o prioridad, y resumen lo importante.' },
      { title: 'Generación de contenidos', text: 'Borradores de respuestas, descripciones de productos y textos que tu equipo revisa y aprueba.' },
      { title: 'Análisis de información', text: 'Detectan patrones en tus datos para ayudarte a tomar mejores decisiones.' },
    ],
    examples: [
      {
        title: 'Atención de consultas',
        before: 'Cada mensaje sobre envíos, horarios o precios se responde manualmente.',
        after: 'Un asistente responde lo frecuente y deriva a una persona las consultas que lo requieren.',
      },
      {
        title: 'Carga de comprobantes',
        before: 'Alguien lee cada factura recibida y copia los datos a una planilla.',
        after: 'Los datos se extraen automáticamente y una persona solo valida los casos dudosos.',
      },
      {
        title: 'Correo desbordado',
        before: 'La bandeja de entrada mezcla pedidos, reclamos y consultas sin ningún orden.',
        after: 'Cada mensaje se clasifica y resume, y llega a quien tiene que resolverlo.',
      },
    ],
    includes: [
      'Diagnóstico de qué tareas conviene resolver con IA',
      'Supervisión humana en las decisiones importantes',
      'Definición clara de qué datos se usan y dónde se guardan',
      'Medición del tiempo ahorrado y ajustes continuos',
    ],
    faq: [
      {
        q: '¿La IA va a reemplazar a mi equipo?',
        a: 'No es el objetivo. Usamos la IA para quitar tareas repetitivas y que las personas se enfoquen en lo que requiere criterio, trato y experiencia.',
      },
      {
        q: '¿Qué pasa con la información de mi negocio?',
        a: 'Antes de implementar, definimos juntos qué información usa cada solución, quién puede acceder y dónde se guarda. Usamos solo los datos necesarios para la tarea.',
      },
      {
        q: '¿Y si la IA se equivoca?',
        a: 'Diseñamos cada solución con controles: revisión humana en los pasos sensibles, respuestas basadas en tu información y derivación a una persona cuando hay dudas.',
      },
    ],
  },
  {
    slug: 'automatizacion-e-integraciones',
    index: '03',
    name: 'Automatización e integraciones',
    short: 'Automatización',
    summary: 'Procesos que se ejecutan solos y herramientas que comparten información entre sí, sin copiar y pegar.',
    seoTitle: 'Automatización de procesos e integración de sistemas',
    seoDescription:
      'Conectamos tus sistemas, planillas, tiendas online y canales de comunicación para que la información fluya sola y tu equipo deje de hacer tareas manuales.',
    h1: 'Menos tareas repetitivas. Más tiempo para lo importante.',
    lead: 'Conectamos tus sistemas, planillas, tienda online y canales de comunicación para que la información fluya sola y tu equipo deje de copiar y pegar.',
    solves: [
      'Los mismos datos se cargan a mano en distintos sistemas.',
      'Las herramientas que usás no se comunican entre sí.',
      'Los procesos dependen de recordatorios, mensajes y buena memoria.',
    ],
    offerings: [
      { title: 'Integración entre plataformas', text: 'Conectamos tu sistema de gestión, tienda online, planillas y otras herramientas para que compartan información.' },
      { title: 'Automatización de tareas', text: 'Altas, actualizaciones, avisos y recordatorios que se ejecutan solos, en el momento justo.' },
      { title: 'Flujos de trabajo', text: 'Rediseñamos procesos para eliminar pasos innecesarios antes de automatizarlos.' },
      { title: 'Reportes automáticos', text: 'La información se reúne sola y llega lista para revisar, sin armar planillas cada semana.' },
      { title: 'Notificaciones inteligentes', text: 'Avisos por correo o mensajería cuando algo requiere atención: un pedido, un vencimiento, un faltante.' },
      { title: 'Digitalización de procesos', text: 'Pasamos procesos en papel o planillas sueltas a herramientas digitales ordenadas.' },
    ],
    examples: [
      {
        title: 'Pedidos y stock',
        before: 'Cada pedido se copia a una planilla y el stock se actualiza a mano, con errores.',
        after: 'El pedido se registra, el stock se actualiza y el cliente recibe la confirmación automáticamente.',
      },
      {
        title: 'Seguimiento de clientes',
        before: 'Las consultas quedan en chats y correos, y algunas se olvidan.',
        after: 'Cada consulta se registra en un solo lugar, con recordatorios de seguimiento.',
      },
      {
        title: 'Reporte semanal',
        before: 'Todos los lunes alguien junta datos de tres sistemas para armar un informe.',
        after: 'El informe se genera solo y llega a tu correo listo para leer.',
      },
    ],
    includes: [
      'Relevamiento del proceso antes de automatizar',
      'Pruebas con casos reales antes de ponerlo en marcha',
      'Avisos si algo falla, para que nada quede en silencio',
      'Documentación clara de cómo funciona cada automatización',
    ],
    faq: [
      {
        q: '¿Necesito cambiar los sistemas que ya uso?',
        a: 'Normalmente no. Primero buscamos conectar lo que ya tenés; solo recomendamos cambiar una herramienta cuando eso simplifica de verdad el trabajo.',
      },
      {
        q: '¿Qué pasa si una automatización falla?',
        a: 'Las diseñamos con avisos y registros: si algo no funciona como debería, te enteras enseguida y sabemos exactamente dónde revisar.',
      },
      {
        q: '¿Se puede automatizar cualquier proceso?',
        a: 'No siempre conviene. En el diagnóstico evaluamos qué procesos se repiten lo suficiente y tienen reglas claras como para que automatizarlos valga la pena.',
      },
    ],
  },
];

/** Base transversal del ecosistema. */
export const consulting = {
  name: 'Consultoría y diagnóstico',
  text: 'Analizamos cómo trabajás hoy, detectamos cuellos de botella y oportunidades, y priorizamos qué conviene mejorar primero.',
};

export const aiUses = [
  ['Asistentes', 'Responden consultas frecuentes con la información de tu negocio.'],
  ['Documentos', 'Extraen datos de facturas, formularios y comprobantes.'],
  ['Clasificación', 'Ordenan y resumen mensajes, correos y pedidos.'],
  ['Contenidos', 'Generan borradores que tu equipo revisa y aprueba.'],
  ['Equipo', 'Ayudan a encontrar procedimientos e información interna.'],
  ['Análisis', 'Detectan patrones en tus datos para decidir mejor.'],
] as const;

export const audiences = [
  {
    id: 'empresa',
    label: 'Empresas y pymes',
    title: 'Optimizá operaciones y hacé que tus sistemas trabajen en conjunto.',
    points: [
      'Automatización de tareas administrativas y operativas',
      'Integración entre sistemas de gestión, tienda online y planillas',
      'Herramientas internas a medida',
      'Inteligencia artificial aplicada a atención y procesamiento de información',
    ],
    cta: 'Quiero optimizar mi empresa',
  },
  {
    id: 'profesional',
    label: 'Profesionales y emprendedores',
    title: 'Profesionalizá tu actividad y ganá tiempo para lo que mejor sabés hacer.',
    points: [
      'Sitio web, portfolio o CV online con identidad propia',
      'Automatización de consultas, turnos y seguimiento',
      'Herramientas de IA para tu trabajo diario',
      'Asesoramiento para elegir las herramientas adecuadas',
    ],
    cta: 'Quiero potenciar mi proyecto',
  },
] as const;

export const method = [
  { title: 'Escuchamos', text: 'Conversamos sobre tu negocio, tus objetivos y lo que hoy te frena.' },
  { title: 'Diagnosticamos', text: 'Analizamos procesos y herramientas para detectar problemas y oportunidades.' },
  { title: 'Proponemos', text: 'Te presentamos una solución concreta y priorizada, en un lenguaje claro.' },
  { title: 'Construimos', text: 'Desarrollamos por etapas, con avances que podés ver y probar.' },
  { title: 'Acompañamos', text: 'Medimos, ajustamos y seguimos mejorando junto a vos.' },
];

export const differentiators = [
  { title: 'Mirada de negocio', text: 'Nuestro equipo combina experiencia en operaciones y comercio electrónico con desarrollo de software.' },
  { title: 'Lenguaje claro', text: 'Te explicamos cada decisión sin tecnicismos. Si algo no aporta valor, te lo decimos.' },
  { title: 'Soluciones a medida', text: 'No vendemos paquetes cerrados: diseñamos a partir de cómo trabaja tu negocio.' },
  { title: 'Trato directo', text: 'Hablás con las personas que diseñan y construyen tu solución, de principio a fin.' },
];

export interface Work {
  slug: string;
  title: string;
  kind: string;
  description: string;
  url: string;
  image: ImageMetadata;
  alt: string;
}

/** Proyectos de muestra publicados por el equipo (son demos, no casos de clientes). */
export const works: Work[] = [
  {
    slug: 'rincon-gourmet',
    title: 'Rincón Gourmet',
    kind: 'Sitio para restaurante',
    description: 'Carta, reservas y contacto, horarios y búsqueda de personal, con una estética cálida y elegante.',
    url: 'https://demo-pagina-web.netlify.app/',
    image: rinconShot,
    alt: 'Portada del sitio de muestra Rincón Gourmet: menú de navegación sobre la fotografía de un salón con mesas servidas.',
  },
  {
    slug: 'portfolio-chef',
    title: 'Portfolio de chef',
    kind: 'Sitio personal',
    description: 'Sitio profesional para un chef, con secciones de experiencia y habilidades y formulario de contacto.',
    url: 'https://am-solucionesweb.github.io/portfoliocv/',
    image: chefShot,
    alt: 'Portada del portfolio de muestra para un chef: un plato de sushi y el botón «Contáctame».',
  },
  {
    slug: 'cv-online',
    title: 'CV online',
    kind: 'Currículum digital',
    description: 'Modelo de CV online de una página: presentación, descarga del currículum y enlaces a redes.',
    url: 'https://demo-cv-basico.netlify.app/',
    image: cvShot,
    alt: 'Portada del CV online de muestra: presentación de una desarrolladora front-end con su fotografía.',
  },
];

export const faq = [
  {
    q: '¿Necesito saber de tecnología para trabajar con ustedes?',
    a: 'No. Nos contás cómo trabajás y qué te gustaría mejorar; nosotros nos ocupamos de traducirlo en una solución y de explicarte cada paso en lenguaje claro.',
  },
  {
    q: '¿Trabajan con negocios chicos o solo con empresas?',
    a: 'Con ambos. Acompañamos a empresas y pymes que quieren optimizar su operación, y a profesionales y emprendedores que necesitan profesionalizar su actividad.',
  },
  {
    q: '¿Cuánto cuesta un proyecto?',
    a: 'Depende del alcance. Después de una primera conversación te enviamos una propuesta con alcance, etapas, plazos y costo detallados, para que decidas con toda la información.',
  },
  {
    q: '¿Por dónde conviene empezar?',
    a: 'Por lo que más tiempo o dinero te cuesta hoy. En el diagnóstico priorizamos las mejoras con mayor impacto y menor esfuerzo, para que veas resultados desde el principio.',
  },
  {
    q: '¿La inteligencia artificial es para mi negocio?',
    a: 'Si tenés tareas repetitivas con información (consultas, documentos, correos, reportes), probablemente sí. Si no aporta valor real, te lo vamos a decir.',
  },
  {
    q: '¿Ofrecen soporte después de la entrega?',
    a: 'Sí. Ofrecemos opciones de mantenimiento y soporte para que tu solución siga funcionando y evolucione junto con tu negocio.',
  },
  {
    q: '¿Dónde están y cómo trabajan?',
    a: 'Estamos en Tucumán, Argentina, y trabajamos de forma remota: reuniones por videollamada, avances compartidos y comunicación directa por WhatsApp o correo.',
  },
];

export interface TeamMember {
  name: string;
  role: string;
  bio: string;
  links: { label: string; href: string }[];
}

export const team: TeamMember[] = [
  {
    name: 'Esteban Molina',
    role: 'Soluciones, integraciones e IA',
    bio: 'Más de diez años en operaciones y comercio electrónico. Se especializa en integraciones entre plataformas, automatización de procesos e inteligencia artificial aplicada al negocio.',
    links: [
      { label: 'LinkedIn', href: 'https://www.linkedin.com/in/esteban-molina-dev/' },
      { label: 'GitHub', href: 'https://github.com/estebanrm1' },
      { label: 'Portfolio', href: 'https://esteban-molina-cv.netlify.app/' },
    ],
  },
  {
    name: 'Aron Arias',
    role: 'Desarrollo web',
    bio: 'Desarrollador web full stack. Lleva adelante el diseño y el desarrollo de sitios y aplicaciones web, del primer boceto a la publicación.',
    links: [
      { label: 'LinkedIn', href: 'https://www.linkedin.com/in/gabriel-aron-arias/' },
      { label: 'GitHub', href: 'https://github.com/Aron9377' },
    ],
  },
];

export const principles = [
  { title: 'Primero el negocio', text: 'Entendemos el problema antes de proponer una herramienta.' },
  { title: 'Claridad', text: 'Decisiones explicadas, plazos concretos y avances visibles.' },
  { title: 'Lo justo y necesario', text: 'La solución más simple que resuelve bien el problema.' },
  { title: 'Mejora continua', text: 'Medimos, aprendemos y ajustamos después de cada entrega.' },
];

export const needs = [
  { value: 'presencia-web', label: 'Presencia web (sitio, portfolio o CV online)' },
  { value: 'automatizacion', label: 'Automatizar tareas repetitivas' },
  { value: 'integraciones', label: 'Conectar herramientas y sistemas' },
  { value: 'ia', label: 'Aplicar inteligencia artificial' },
  { value: 'herramienta', label: 'Una herramienta a medida' },
  { value: 'asesoramiento', label: 'No estoy seguro: necesito asesoramiento' },
];
