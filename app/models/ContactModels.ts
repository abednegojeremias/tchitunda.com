interface Contacts {
  title: string;
  subtitle: string;
  link: string;
  icon: string;
}

export const contact: Contacts[] = [
  {
    title: "WhatsApp",
    subtitle: "+244 925 423 854",
    link: "https://api.whatsapp.com/send?phone+244925423854",
    icon: "ri-whatsapp-fill",
  },
  {
    title: "Email",
    subtitle: "tchitunda.dev@gmail.com",
    link: "mailto:tchitunda.dev@gmail.com",
    icon: "ri-mail-open-fill",
  },
  {
    title: "Messenger",
    subtitle: "tchitunda",
    link: "https://m.me/tchitunda.dev",
    icon: "ri-messenger-fill",
  },
];
