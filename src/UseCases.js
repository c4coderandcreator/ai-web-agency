import { useTranslation } from "react-i18next";
import SupremMilkLogo from "./assets/banner-1.png";
import SecondPrj1 from "./assets/banner-3.png";
import SecondPrj2 from "./assets/banner-2.png";
import SecondPrj3 from "./assets/banner-4.png";
import Man1 from "./assets/people/man_1.png";
import Man2 from "./assets/people/man_2.jpeg";
import Man3 from "./assets/people/man_3.jpeg";
import Man4 from "./assets/people/man_4.jpeg";

export const useAllCases = () => {
  const { t } = useTranslation("global");

  return [
    {
      title: t("use_cases_data.suprem_milk.title"),
      titleFull: t("use_cases_data.suprem_milk.titleFull"),
      description: t("use_cases_data.suprem_milk.description"),
      image: SupremMilkLogo,
      route: "/use-case/suprem-milk",
      reviewer: {
        reviewerImage: Man3,
        name: t("use_cases_data.suprem_milk.reviewer.name"),
        review: t("use_cases_data.suprem_milk.reviewer.review"),
      },
      info: [
        {
          label: t("use_cases_data.suprem_milk.info.website"),
          value: "https://suprem-milk.eu/",
          isLink: true,
        },
        {
          label: t("use_cases_data.suprem_milk.info.location"),
          value: t("use_cases_data.suprem_milk.info.location_value"),
        },
        {
          label: t("use_cases_data.suprem_milk.info.industry"),
          value: t("use_cases_data.suprem_milk.info.industry_value"),
        },
        {
          label: t("use_cases_data.suprem_milk.info.goal"),
          value: t("use_cases_data.suprem_milk.info.goal_value"),
        },
      ],
    },
    {
      title: t("use_cases_data.n_and_group.title"),
      description: t("use_cases_data.n_and_group.description"),
      image: SecondPrj1,
      route: "/use-case/n-and-group",
      reviewer: {
        reviewerImage: Man1,
        name: t("use_cases_data.n_and_group.reviewer.name"),
        review: t("use_cases_data.n_and_group.reviewer.review"),
      },
      info: [
        {
          label: t("use_cases_data.suprem_milk.info.website"),
          value: "https://www.n-andgroup.com/",
          isLink: true,
        },
        {
          label: t("use_cases_data.suprem_milk.info.location"),
          value: t("use_cases_data.n_and_group.info.location_value"),
        },
        {
          label: t("use_cases_data.suprem_milk.info.industry"),
          value: t("use_cases_data.n_and_group.info.industry_value"),
        },
        {
          label: t("use_cases_data.suprem_milk.info.goal"),
          value: t("use_cases_data.n_and_group.info.goal_value"),
        },
      ],
    },
    {
      title: t("use_cases_data.virality_system.title"),
      description: t("use_cases_data.virality_system.description"),
      image: SecondPrj2,
      route: "/use-case/virality-system",
      reviewer: {
        reviewerImage: Man2,
        name: t("use_cases_data.virality_system.reviewer.name"),
        review: t("use_cases_data.virality_system.reviewer.review"),
      },
      info: [
        {
          label: t("use_cases_data.suprem_milk.info.website"),
          value: "https://www.viralitysystem.it/",
          isLink: true,
        },
        {
          label: t("use_cases_data.suprem_milk.info.location"),
          value: t("use_cases_data.virality_system.info.location_value"),
        },
        {
          label: t("use_cases_data.suprem_milk.info.industry"),
          value: t("use_cases_data.virality_system.info.industry_value"),
        },
        {
          label: t("use_cases_data.suprem_milk.info.goal"),
          value: t("use_cases_data.virality_system.info.goal_value"),
        },
      ],
    },
    {
      title: t("use_cases_data.extra_outdoor.title"),
      description: t("use_cases_data.extra_outdoor.description"),
      image: SecondPrj3,
      route: "/use-case/extra-outdoor",
      reviewer: {
        reviewerImage: Man4,
        name: t("use_cases_data.extra_outdoor.reviewer.name"),
        review: t("use_cases_data.extra_outdoor.reviewer.review"),
      },
      info: [
        {
          label: t("use_cases_data.suprem_milk.info.website"),
          value: "https://extraoutdoor.it/infissi/",
          isLink: true,
        },
        {
          label: t("use_cases_data.suprem_milk.info.location"),
          value: t("use_cases_data.extra_outdoor.info.location_value"),
        },
        {
          label: t("use_cases_data.suprem_milk.info.industry"),
          value: t("use_cases_data.extra_outdoor.info.industry_value"),
        },
        {
          label: t("use_cases_data.suprem_milk.info.goal"),
          value: t("use_cases_data.extra_outdoor.info.goal_value"),
        },
      ],
    },
  ];
};

// Legacy export for backward compatibility
export const AllCases = [
  // Legacy data for backward compatibility - will be replaced by useAllCases hook
  {
    title: "Suprem - Milk",
    titleFull:
      "Delivering real-time coin data to millions of Crypto Insiders visitors",
    description:
      "Crypto Insiders, the largest cryptocurrency news platform in the Netherlands, attracts over 2 million visitors monthly. Their team needed a reliable system to manage content creation and distribution across multiple channels.",
    image: SupremMilkLogo,
    route: "/use-case/suprem-milk",
    reviewer: {
      reviewerImage: Man3,
      name: "Riccardo Ferrari",
      review:
        "Algorithmx is an amazing company. We've been surprised by the speed, attention to details, and immediate understanding of our needs. Not only they understood our needs, but they recommended us alternative solutions or additional tools to improve our mockup product",
    },
    info: [
      {
        label: "Website",
        value: "https://suprem-milk.eu/",
        isLink: true,
      },
      { label: "Location", value: "Italy" },
      { label: "Industry", value: "Agricultural" },
      {
        label: "Goal",
        value:
          "AI system to analyze agricultural products and provide insights",
      },
    ],
  },
  {
    title: "N and Group",
    description:
      "A leading tech innovator in quantum computing needed a sophisticated dashboard to visualize complex data outputs. We delivered an intuitive interface that simplified user interaction with advanced computational results.",
    image: SecondPrj1,
    route: "/use-case/n-and-group",
    reviewer: {
      reviewerImage: Man1,
      name: "Daniele Del Vecchio",
      review:
        "Algorithmx's AI helped us automate our customer service. The chatbot they developed significantly reduced response times and improved customer satisfaction",
    },
    info: [
      {
        label: "Website",
        value: "https://www.n-andgroup.com/",
        isLink: true,
      },
      { label: "Location", value: "Italy" },
      { label: "Industry", value: "Mechanich" },
      {
        label: "Goal",
        value:
          "AI chatbot to automate customer service and improve response times",
      },
    ],
  },
  {
    title: "Virality System",
    description:
      "This environmental monitoring startup required a scalable platform to process sensor data from thousands of locations. Our solution provided real-time analytics and actionable insights for sustainability decision-makers",
    image: SecondPrj2,
    route: "/use-case/virality-system",
    reviewer: {
      reviewerImage: Man2,
      name: "Davide Gentile",
      review:
        "Excellent experience with Algorithmx. Always careful about deadlines and developing the best code. Paying attention to the figma and my requests. Really good we will continue to collaborate",
    },
    info: [
      {
        label: "Website",
        value: "https://www.viralitysystem.it/",
        isLink: true,
      },
      { label: "Location", value: "Italy" },
      { label: "Industry", value: "Social Network" },
      {
        label: "Goal",
        value: "Full social network with AI-driven content recommendations",
      },
    ],
  },
  {
    title: "Extra Outdoor",
    description:
      "We used Algorithmx's AI-powered analytics to optimize our marketing campaigns. Their solutions provided valuable insights that led to a 20% increase in conversion rates",
    image: SecondPrj3,
    route: "/use-case/extra-outdoor",
    reviewer: {
      reviewerImage: Man4,
      name: "Andrea Partisani",
      review:
        "We used Algorithmx's AI-powered analytics to optimize our marketing campaigns. Their solutions provided valuable insights that led to a 20% increase in conversion rates",
    },
    info: [
      {
        label: "Website",
        value: "https://extraoutdoor.it/infissi/",
        isLink: true,
      },
      { label: "Location", value: "Italy" },
      { label: "Industry", value: "Fixtures and fittings" },
      {
        label: "Goal",
        value: "AI system to analyze customer behavior and improve retention",
      },
    ],
  },
];
