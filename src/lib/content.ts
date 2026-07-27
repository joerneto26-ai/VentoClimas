export const brand = {
  name: "Vento Climas",
  full: "Vento Climas · Aire Acondicionado GDL",
  tagline: "Aire fresco, garantía escrita.",
  established: 2018,
};

export const contact = {
  phoneDisplay: "+52 33 1234 5678",
  phoneHref: "tel:+523312345678",
  whatsapp: "523312345678",
  email: "hola@ventoclimas.mx",
  address: "Av. Vallarta 2440, Arcos Vallarta",
  city: "Guadalajara, Jal.",
  hours: "Lun a Vie · 9:00–19:00 · Sáb 9:00–14:00 · Urgencias por WhatsApp",
};

const DEFAULT_MSG =
  "Hola Vento Climas, vi su página y me gustaría una cotización sin compromiso para mi aire acondicionado.";

export function waLink(message: string = DEFAULT_MSG) {
  return `https://wa.me/${contact.whatsapp}?text=${encodeURIComponent(message)}`;
}

export const nav = [
  { label: "Instalaciones", href: "#proyectos" },
  { label: "Proceso", href: "#proceso" },
  { label: "Servicios", href: "#servicios" },
  { label: "Reseñas", href: "#testimonios" },
  { label: "Contacto", href: "#contacto" },
];

/* ---- TrustBar: 4 contadores (datos demo realistas) ---- */
export const stats = [
  { icon: "award", value: 8, suffix: "+", label: "Años de experiencia en la ZMG" },
  { icon: "snow", value: 2000, suffix: "+", label: "Sistemas instalados y funcionando" },
  { icon: "star", value: 4.9, decimals: 1, suffix: "/5", label: "Promedio en 127 reseñas de Google" },
  { icon: "shield", value: 100, suffix: "%", label: "Trabajos con garantía escrita" },
];

export const badges = [
  "CONOCER EC0102 · Instalación de aire acondicionado",
  "Manejo certificado de refrigerantes R-410A / R-32",
  "Garantía escrita de 12 meses",
  "Póliza de responsabilidad civil",
  "Equipos Daikin, LG, Midea y Mirage",
];

/* ---- Pain point: problema → agitar → solución ---- */
export const painPoint = {
  eyebrow: "¿Le suena familiar?",
  title: "Su clima falla justo cuando más calor hace.",
  problems: [
    "El equipo enfría poco y el recibo de CFE llega cada vez más caro.",
    "Ruido, goteo o mal olor cada vez que lo prende.",
    "El técnico que vino la vez pasada ya no volvió a contestar.",
    "Con la ola de calor de Guadalajara, dormir o trabajar se vuelve imposible.",
  ],
  agitate:
    "Mientras tanto, el calor no espera: noches sin dormir, niños irritables y un recibo de luz que sigue subiendo porque el equipo trabaja el doble para enfriar la mitad. Cada temporada que pasa, la reparación sale más cara — o termina en comprar un equipo nuevo a la mala.",
  solution:
    "En Vento Climas lo atendemos el mismo día: diagnóstico honesto, precio cerrado por escrito y técnicos certificados con 8 años en la ZMG. Reparamos si se puede reparar; y si toca equipo nuevo, lo instalamos hoy con garantía escrita.",
};

/* ---- Value props (alternadas imagen izq/der) ---- */
export const valueProps = [
  {
    eyebrow: "Instalación",
    title: "Aire acondicionado instalado hoy, frío esta noche",
    desc: "Mini split inverter dimensionado para su espacio real: ni chico ni sobrecapacitado. Instalación limpia con vacío, carga de refrigerante y pruebas de funcionamiento. En la mayoría de los casos, el mismo día.",
    image:
      "https://images.pexels.com/photos/5463575/pexels-photo-5463575.jpeg?auto=compress&cs=tinysrgb&fit=crop&w=1000&h=800",
    imageAlt: "Técnico de Vento Climas instalando y verificando un aire acondicionado en Guadalajara",
    cta: "Quiero mi instalación",
  },
  {
    eyebrow: "Mantenimiento",
    title: "Su equipo enfriando como nuevo, gastando menos luz",
    desc: "Limpieza profunda de filtros y serpentines, revisión de gas, presiones y consumo eléctrico. Un mantenimiento al año evita la mayoría de las fallas caras y alarga años la vida de su equipo.",
    image:
      "https://images.pexels.com/photos/33671149/pexels-photo-33671149.jpeg?auto=compress&cs=tinysrgb&fit=crop&w=1000&h=800",
    imageAlt: "Mantenimiento preventivo de unidad de aire acondicionado con herramienta profesional",
    cta: "Agendar mi mantenimiento",
  },
  {
    eyebrow: "Reparación",
    title: "Diagnóstico honesto: reparamos si se puede reparar",
    desc: "Detectamos fugas, fallas eléctricas y de compresor con herramienta profesional. Le decimos claramente qué tiene su equipo, cuánto cuesta y si conviene reparar o reemplazar. Sin sorpresas.",
    image:
      "https://images.pexels.com/photos/38709544/pexels-photo-38709544.jpeg?auto=compress&cs=tinysrgb&fit=crop&w=1000&h=800",
    imageAlt: "Técnico revisando carga de refrigerante con manifold durante una reparación",
    cta: "Necesito una reparación",
  },
];

export const features = [
  {
    icon: "snow",
    title: "Equipos inverter de bajo consumo",
    desc: "Instalamos tecnología inverter que puede bajar su recibo de CFE hasta 40% frente a un equipo viejo.",
  },
  {
    icon: "award",
    title: "Técnicos certificados EC0102",
    desc: "8 años instalando y reparando en toda la ZMG. Personal propio, no subcontratado.",
  },
  {
    icon: "file",
    title: "Precio cerrado por escrito",
    desc: "Cotizamos antes de empezar. Lo que firma es lo que paga: sin cargos ocultos ni “extras” al final.",
  },
  {
    icon: "clock",
    title: "Respuesta el mismo día",
    desc: "En ola de calor no puede esperar. Diagnóstico y urgencias atendidas el mismo día hábil.",
  },
  {
    icon: "wrench",
    title: "Herramienta y refacciones reales",
    desc: "Manifold, bomba de vacío y detección de fugas. Refacciones originales, no adaptadas.",
  },
  {
    icon: "shield",
    title: "Garantía escrita de 12 meses",
    desc: "Mano de obra e instalación garantizadas por escrito, además de la garantía del fabricante.",
  },
];

export const processSteps = [
  {
    n: "01",
    title: "Cuéntenos qué le pasa",
    desc: "WhatsApp o llamada de 10 minutos. Entendemos su caso y agendamos visita el mismo día hábil.",
    icon: "file",
  },
  {
    n: "02",
    title: "Cotización cerrada por escrito",
    desc: "Diagnóstico claro y precio final antes de tocar un tornillo. Sin compromiso.",
    icon: "shield",
  },
  {
    n: "03",
    title: "Instalación o reparación limpia",
    desc: "Llegamos puntuales, protegemos su espacio y dejamos todo funcionando y recogido.",
    icon: "wrench",
  },
  {
    n: "04",
    title: "Garantía y soporte 12 meses",
    desc: "Garantía escrita y seguimiento post-servicio. Si algo falla, regresamos sin costo.",
    icon: "award",
  },
];

export const benefits = [
  "Hasta 40% de ahorro en el recibo de CFE con equipos inverter bien dimensionados.",
  "Aire más limpio y sano: filtros y serpentines sin polvo, moho ni mal olor.",
  "Garantía escrita de 12 meses en mano de obra e instalación.",
  "Atención el mismo día hábil en toda la Zona Metropolitana de Guadalajara.",
  "Refacciones originales y equipos de marcas con soporte en México.",
];

export const portfolio = [
  {
    title: "3 mini splits inverter en casa",
    category: "Instalación",
    location: "Providencia",
    meta: "Equipos 1.5 ton · 1 día de instalación",
    span: "lg",
    image:
      "https://images.pexels.com/photos/32497161/pexels-photo-32497161.jpeg?auto=compress&cs=tinysrgb&fit=crop&w=1100&h=1000",
  },
  {
    title: "Condensadora en azotea",
    category: "Instalación",
    location: "Chapalita",
    meta: "Mini split 2 ton · protección contra intemperie",
    span: "sm",
    image:
      "https://images.pexels.com/photos/16848596/pexels-photo-16848596.jpeg?auto=compress&cs=tinysrgb&fit=crop&w=900&h=700",
  },
  {
    title: "Puesta en marcha y carga de gas",
    category: "Instalación",
    location: "Zapopan",
    meta: "Vacío, carga R-410A y pruebas de presión",
    span: "sm",
    image:
      "https://images.pexels.com/photos/5463575/pexels-photo-5463575.jpeg?auto=compress&cs=tinysrgb&fit=crop&w=900&h=700",
  },
  {
    title: "Detección y sellado de fuga",
    category: "Reparación",
    location: "Colonia Americana",
    meta: "Fuga en tubería · recarga y garantía 12 meses",
    span: "sm",
    image:
      "https://images.pexels.com/photos/38709544/pexels-photo-38709544.jpeg?auto=compress&cs=tinysrgb&fit=crop&w=900&h=700",
  },
  {
    title: "Reparación de compresor",
    category: "Reparación",
    location: "Santa Tere",
    meta: "Diagnóstico y refacción original · mismo día",
    span: "sm",
    image:
      "https://images.pexels.com/photos/33671149/pexels-photo-33671149.jpeg?auto=compress&cs=tinysrgb&fit=crop&w=900&h=700",
  },
  {
    title: "Oficina con 8 equipos",
    category: "Comercial",
    location: "Puerta de Hierro",
    meta: "Proyecto comercial · mantenimiento programado",
    span: "sm",
    image:
      "https://images.pexels.com/photos/2456270/pexels-photo-2456270.jpeg?auto=compress&cs=tinysrgb&fit=crop&w=900&h=700",
  },
  {
    title: "Mantenimiento preventivo anual",
    category: "Mantenimiento",
    location: "Lomas del Valle",
    meta: "Limpieza profunda + revisión eléctrica",
    span: "sm",
    image:
      "https://images.pexels.com/photos/32497161/pexels-photo-32497161.jpeg?auto=compress&cs=tinysrgb&fit=crop&w=900&h=700",
  },
  {
    title: "Sustitución de condensadora",
    category: "Mantenimiento",
    location: "Tlaquepaque",
    meta: "Retiro de equipo viejo e instalación de nuevo",
    span: "sm",
    image:
      "https://images.pexels.com/photos/16848596/pexels-photo-16848596.jpeg?auto=compress&cs=tinysrgb&fit=crop&w=900&h=701",
  },
];

export const benefitsImage =
  "https://images.pexels.com/photos/16848596/pexels-photo-16848596.jpeg?auto=compress&cs=tinysrgb&fit=crop&w=1000&h=1100";

export function avatarUrl(id: number) {
  return `https://images.pexels.com/photos/${id}/pexels-photo-${id}.jpeg?auto=compress&cs=tinysrgb&fit=crop&w=200&h=200`;
}

export const trustAvatars = [774909, 220453, 415829];

export const testimonials = [
  {
    quote:
      "Se me descompuso el clima en plena ola de calor de mayo y ese mismo día vinieron. Me dieron precio cerrado antes de empezar y quedó enfriando como nuevo.",
    name: "Karla Ibarría",
    role: "Casa particular · Chapalita",
    avatar: avatarUrl(733872),
  },
  {
    quote:
      "Instalaron 3 mini splits inverter en mi casa en un solo día. Limpios, puntuales y me explicaron todo. El recibo de CFE bajó casi 35%.",
    name: "Héctor Orozco",
    role: "Residencia en Providencia",
    avatar: avatarUrl(1222271),
  },
  {
    quote:
      "Les damos el mantenimiento de los 6 equipos de la oficina desde hace 3 años. Cero fallas desde entonces y reporte fotográfico en cada visita.",
    name: "Lic. Mariana Solís",
    role: "Oficinas en Puerta de Hierro",
    avatar: avatarUrl(1239291),
  },
  {
    quote:
      "Otro técnico me dijo que había que cambiar el equipo completo. Vento Climas encontró la fuga, la selló y llevo un año sin problemas. Honestidad pura.",
    name: "Jorge A. Ceballos",
    role: "Consultorio en Zapopan",
    avatar: avatarUrl(2379004),
  },
];

export const services = [
  {
    name: "Instalación Mini Split",
    tagline: "Equipo inverter dimensionado para su espacio, instalado hoy.",
    price: "Desde $2,500",
    priceNote: "instalación estándar · equipo aparte",
    badge: "Más solicitado",
    includes: [
      "Visita y dimensionamiento sin costo",
      "Carga eléctrica, drenaje y soporte incluidos",
      "Vacío y carga de refrigerante con pruebas",
      "Garantía escrita de 12 meses",
    ],
    cta: "Cotizar instalación",
  },
  {
    name: "Mantenimiento Preventivo",
    tagline: "Limpieza profunda y revisión completa, una vez al año.",
    price: "Desde $650",
    priceNote: "por equipo · precio cerrado",
    includes: [
      "Limpieza de filtros y serpentines",
      "Revisión de gas, presiones y fugas",
      "Revisión eléctrica y de drenaje",
      "Reporte fotográfico del servicio",
    ],
    cta: "Agendar mantenimiento",
  },
  {
    name: "Reparación y Urgencias",
    tagline: "Diagnóstico honesto y atención el mismo día.",
    price: "Desde $450",
    priceNote: "diagnóstico · se descuenta de la reparación",
    includes: [
      "Diagnóstico con manifold y multímetro",
      "Detección y sellado de fugas",
      "Refacciones originales con garantía",
      "Atención el mismo día hábil",
    ],
    cta: "Solicitar reparación",
  },
];

export const faqs = [
  {
    q: "¿Cuánto cuesta instalar un aire acondicionado en Guadalajara?",
    a: "La instalación estándar parte de $2,500 MXN más el equipo. Un mini split inverter de 1 tonelada, equipo más instalación, suele quedar entre $11,000 y $18,000 MXN según marca y capacidad. Le damos precio cerrado por escrito tras una visita sin costo.",
  },
  {
    q: "¿Dan garantía por escrito?",
    a: "Sí. Toda instalación y reparación incluye garantía escrita de 12 meses en mano de obra, además de la garantía del fabricante del equipo (hasta 5 años en compresor según la marca).",
  },
  {
    q: "¿Pueden venir hoy mismo?",
    a: "En la mayoría de los casos, sí. Atendemos urgencias el mismo día hábil en toda la ZMG, sujeto a agenda. Escríbanos por WhatsApp y le confirmamos horario en minutos.",
  },
  {
    q: "¿Qué marcas instalan y reparan?",
    a: "Instalamos Daikin, LG, Midea, Mirage, Samsung y Carrier. Reparamos prácticamente todas las marcas del mercado mexicano, con refacciones originales.",
  },
  {
    q: "¿De verdad baja el recibo de luz un equipo inverter?",
    a: "Sí. Frente a un equipo convencional de más de 8 años, un inverter bien dimensionado puede reducir el consumo entre 30% y 40%. La clave es elegir la capacidad correcta para su espacio: por eso la visita de dimensionamiento es sin costo.",
  },
  {
    q: "¿En qué zonas de Guadalajara trabajan?",
    a: "En toda la Zona Metropolitana: Guadalajara, Zapopan, Tlaquepaque, Tonalá y Tlajomulco. Providencia, Chapalita, Americana, Puerta de Hierro y todas las colonias aledañas.",
  },
];

export const locations = [
  "Providencia",
  "Chapalita",
  "Colonia Americana",
  "Puerta de Hierro",
  "Lomas del Valle",
  "Zapopan",
  "Tlaquepaque",
  "Tonalá",
  "Tlajomulco",
  "Santa Tere",
  "Arcos Vallarta",
  "Jardines del Bosque",
  "Ciudad del Sol",
  "La Estancia",
  "Valle Real",
  "El Palomar",
];

export const projectTypes = [
  "Instalación de equipo nuevo",
  "Mantenimiento preventivo",
  "Reparación / urgencia",
  "Proyecto comercial",
  "Otro",
];
