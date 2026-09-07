// Everything personal lives here — edit this file, never the components.
export const site = {
  name: "Mustafa Mehboob",
  role: "Full Stack Software Engineer",
  tagline: "I build production platforms end to end — and keep them standing.",
  location: "Lahore, Pakistan",
  timezone: "PKT (UTC+5)",
  email: "mustafaw3451@gmail.com",
  phone: "+92 311 4456240",
  whatsapp: "923114456240", // digits only, for wa.me links
  linkedin: "https://www.linkedin.com/in/mustafa-mehboob-b21068224/",
  github: "https://github.com/mustafa-mx",
  // Create a free account at cal.com, then put your handle/event here,
  // e.g. "mustafa-mehboob/intro-call". Leave "" to show the email fallback.
  calLink: "",
  resumeUrl: "/Mustafa-Mehboob-Resume.pdf", // drop your PDF into /public
} as const

export const metrics = [
  { value: 4, suffix: "+", label: "years shipping production software" },
  { value: 1, prefix: "$", suffix: "M+", label: "revenue processed by a platform I lead" },
  { value: 600, prefix: "~", suffix: "M", label: "hostile requests blocked in one live DDoS" },
  { value: 10, suffix: "+", label: "products taken to production" },
] as const
