interface Plans {
  src: string;
  title: string;
  subtitle: string;
  number: string;
  link: string;
  icon: string;
  button: string;
  month: string;
  description1?: string;
  description2?: string;
  description3?: string;
  description4?: string;
  description5?: string;
  description6?: string;
  description7?: string;
}

export const plan: Plans[] = [
  {
    src: "",
    title: "Basic",
    subtitle: "Graphic Design",
    number: "R300",
    link: "",
    icon: "ri-check-line",
    button: "Talk to Us",
    month: "/month",
    description1: "Facebook e Instagram",
    description2: "6 Postagens mensais (Máx. de 3 carrosséis)",
    description3: " Criação de artes para os Posts",
    description4: " Planejamento",
    description5: " Cronograma para as postagens",
    description6: "  Harmonização do feed",
    description7: " Revisão de conteúdo",
  },
  {
    src: "",
    title: "Custom",
    subtitle: "Marketing",
    number: "",
    link: "",
    icon: "ri-check-line",
    button: "Talk to Us",
    month: " Take only what you need",
    description1: "",
    description2: "",
    description3: "",
    description4: "",
    description5: "",
  },
  {
    src: "",
    title: "Pro",
    subtitle: "Websites",
    number: "1700",
    link: "",
    icon: "ri-check-line",
    button: "Talk to Us",
    month: "/month",
    description1: "",
    description2: "",
    description3: "",
    description4: "",
    description5: "",
  },
];
