/**
 * Contenido del sitio.
 *
 * TODO: Este archivo concentra TODOS los textos y datos de contacto.
 * Reemplaza los valores de ejemplo por la información real de la empresa.
 * No es necesario modificar componentes para cambiar el contenido.
 */

export const company = {
  name: "Build Bytes",
  /** Partes del nombre para el logotipo bicolor. */
  nameParts: { first: "Build", second: "Bytes" },
  /** TODO: Ajustar si el rubro definitivo es distinto */
  industry: "Desarrollo de software y consultoría tecnológica",
  legalName: "Build Bytes SpA",
  foundedYear: 2015,
  email: "contacto@buildbyte.cl",
  phone: "+56 9 XXXX XXXX",
  /** Formato E.164 para el enlace tel: */
  phoneHref: "+569XXXXXXXX",
  address: "Santiago, Chile",
} as const;

export const seo = {
  title: `${company.name} | ${company.industry}`,
  shortTitle: company.name,
  description:
    "Acompañamos a empresas en el diseño e implementación de soluciones tecnológicas que ordenan sus procesos, reducen costos y habilitan crecimiento sostenible.",
  keywords: [
    "consultoría tecnológica",
    "transformación digital",
    "desarrollo de software",
    "soporte TI",
    "Santiago",
    "Chile",
  ],
} as const;

export const navigation = [
  { label: "Inicio", href: "#inicio" },
  { label: "Nosotros", href: "#nosotros" },
  { label: "Servicios", href: "#servicios" },
  { label: "Por qué elegirnos", href: "#por-que-elegirnos" },
  { label: "Contacto", href: "#contacto" },
] as const;

export const hero = {
  eyebrow: "Consultoría y tecnología para empresas",
  title: "Tecnología que ordena tu operación y acelera tu crecimiento",
  subtitle:
    "Diseñamos e implementamos soluciones digitales a la medida de cada empresa, con foco en resultados medibles, plazos claros y acompañamiento cercano.",
  primaryCta: { label: "Conoce nuestros servicios", href: "#servicios" },
  secondaryCta: { label: "Contáctanos", href: "#contacto" },
  stats: [
    { value: "+10", label: "años de experiencia" },
    { value: "+120", label: "proyectos entregados" },
    { value: "98%", label: "clientes que renuevan" },
  ],
} as const;

export const about = {
  eyebrow: "Nosotros",
  title: "Un socio tecnológico, no solo un proveedor",
  paragraphs: [
    "Somos un equipo multidisciplinario de consultores, diseñadores e ingenieros de software con base en Santiago de Chile. Trabajamos junto a empresas medianas y grandes que necesitan modernizar sus procesos sin detener su operación.",
    "Nuestra propuesta de valor es simple: entender primero el negocio y después definir la tecnología. Cada proyecto parte con un diagnóstico, continúa con entregas incrementales y termina con un equipo interno capacitado para operar la solución.",
  ],
  highlights: [
    {
      title: "Diagnóstico antes que desarrollo",
      description:
        "Levantamos procesos y prioridades reales antes de escribir una línea de código.",
    },
    {
      title: "Entregas incrementales",
      description:
        "Ciclos cortos con resultados visibles y validación continua del cliente.",
    },
    {
      title: "Transferencia de conocimiento",
      description:
        "Documentación y capacitación para que el equipo interno sea autónomo.",
    },
    {
      title: "Acompañamiento post lanzamiento",
      description:
        "Soporte, monitoreo y mejora continua una vez el proyecto está en producción.",
    },
  ],
} as const;

export type ServiceIcon =
  | "strategy"
  | "digital"
  | "code"
  | "support"
  | "data"
  | "cloud";

export const services = {
  eyebrow: "Servicios",
  title: "Soluciones para cada etapa de tu proyecto",
  description:
    "Cuatro líneas de trabajo que pueden contratarse por separado o combinarse en un plan integral.",
  items: [
    {
      id: "consultoria-estrategica",
      icon: "strategy" as ServiceIcon,
      name: "Consultoría estratégica",
      description:
        "Diagnóstico de procesos, definición de hoja de ruta tecnológica y priorización de iniciativas según impacto en el negocio.",
    },
    {
      id: "transformacion-digital",
      icon: "digital" as ServiceIcon,
      name: "Transformación digital",
      description:
        "Digitalización y automatización de procesos internos para reducir tiempos operativos y errores manuales.",
    },
    {
      id: "desarrollo-de-software",
      icon: "code" as ServiceIcon,
      name: "Desarrollo de software",
      description:
        "Aplicaciones web y plataformas internas a medida, construidas con estándares de calidad, seguridad y escalabilidad.",
    },
    {
      id: "soporte-y-mantenimiento",
      icon: "support" as ServiceIcon,
      name: "Soporte y mantenimiento",
      description:
        "Mesa de ayuda, monitoreo y evolución continua de las plataformas en producción, con acuerdos de nivel de servicio.",
    },
  ],
  /** TODO: Reemplazar por páginas de detalle reales si se necesitan */
  learnMoreLabel: "Conocer más",
} as const;

export type AdvantageIcon = "experience" | "quality" | "care" | "speed" | "commitment";

export const whyUs = {
  eyebrow: "Por qué elegirnos",
  title: "Lo que nos diferencia",
  description:
    "Trabajamos con pocos clientes a la vez para garantizar dedicación real en cada proyecto.",
  items: [
    {
      icon: "experience" as AdvantageIcon,
      title: "Experiencia comprobada",
      description:
        "Más de una década ejecutando proyectos tecnológicos en distintas industrias.",
    },
    {
      icon: "quality" as AdvantageIcon,
      title: "Calidad como estándar",
      description:
        "Revisiones de código, pruebas automatizadas y buenas prácticas en cada entrega.",
    },
    {
      icon: "care" as AdvantageIcon,
      title: "Atención personalizada",
      description:
        "Un equipo asignado y un canal directo de comunicación durante todo el proyecto.",
    },
    {
      icon: "speed" as AdvantageIcon,
      title: "Rapidez de respuesta",
      description:
        "Propuestas en menos de 48 horas y ciclos de entrega cortos y predecibles.",
    },
    {
      icon: "commitment" as AdvantageIcon,
      title: "Compromiso con el resultado",
      description:
        "Medimos el éxito por el impacto en tu operación, no por las horas facturadas.",
    },
  ],
} as const;

export const cta = {
  title: "¿Tienes un proyecto en mente? Hablemos.",
  description:
    "Cuéntanos qué necesitas y te responderemos con una propuesta clara, sin compromiso.",
  button: { label: "Ir al formulario de contacto", href: "#contacto" },
} as const;

export const contact = {
  eyebrow: "Contacto",
  title: "Conversemos sobre tu proyecto",
  description:
    "Completa el formulario y un consultor te contactará dentro de las próximas 48 horas hábiles.",
  scheduleNote: "Horario de atención: lunes a viernes, 9:00 a 18:00 h.",
} as const;

export const footer = {
  description:
    "Consultoría y desarrollo de software para empresas que buscan ordenar su operación y crecer con soporte tecnológico confiable.",
  legalLinks: [
    { label: "Política de privacidad", href: "/politica-de-privacidad" },
    { label: "Términos y condiciones", href: "/terminos" },
  ],
} as const;
