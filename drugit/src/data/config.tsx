import { NextSeoProps } from "next-seo";
import { FaInstagram, FaLinkedin } from "react-icons/fa";
import { FiCheck } from "react-icons/fi";
import { Logo } from "./logo";

const siteConfig = {
  logo: Logo,
  seo: {
    title: "DrugIT",
    description: "Unlocking the power of molecules",
  } as NextSeoProps,
  termsUrl: "#",
  privacyUrl: "#",
  header: {
    links: [
      {
        id: "features",
        label: "Features",
      },
      {
        id: "testimonials",
        label: "Testimonials",
      },
      {
        id: "pricing",
        label: "Pricing",
      },
      {
        id: "faq",
        label: "FAQ",
      },
      {
        label: "Login",
        href: "/workspace",
      },
      {
        label: "Sign Up",
        href: "/signup",
        variant: "primary",
      },
    ],
  },
  footer: {
    links: [
      {
        href: "mailto:support@drugit.live",
        label: "Contact",
      },
      {
        href: "https://www.instagram.com/drugit.ai",
        label: <FaInstagram size="14" />,
      },
      {
        href: "https://www.linkedin.com/company/drugit/",
        label: <FaLinkedin size="14" />,
      },
    ],
  },
  signup: {
    title: "Begin Your Drug Discovery Journey",
    features: [
      {
        icon: FiCheck,
        title: "User-Friendly",
        description:
          "Our platform is designed with intuitive navigation and clear workflows, making molecular analysis accessible to all researchers.",
      },
      {
        icon: FiCheck,
        title: "Customizable Workflows",
        description:
          "Easily tailor the platform's features and interfaces to suit your specific research needs and preferences.",
      },
      {
        icon: FiCheck,
        title: "Integrative",
        description:
          "Seamlessly integrate with existing research tools and databases to enhance your drug discovery processes.",
      },
      {
        icon: FiCheck,
        title: "Efficient",
        description:
          "Optimized for speed and performance, DrugIT streamlines your research efforts, allowing for quicker analysis and decision-making.",
      },
    ],
  },
};

export default siteConfig;
