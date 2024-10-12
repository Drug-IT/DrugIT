import { HStack, Text } from "@chakra-ui/react";

export default {
  title: "Pricing for Every Stage",
  description:
    "Choose a subscription plan that fits your research needs and gain access to our powerful features for molecular analysis and drug discovery.",
  plans: [
    {
      id: "basic",
      title: "Basic Plan",
      description: "Essential features for early-stage researchers.",
      price: "Free",
      features: [
        {
          title: "Molecular Analysis Tools",
        },
        {
          title: "Basic ADME Predictions",
        },
        {
          title: "Access to Community Forums",
        },
        {
          title: "Chatbot Support",
        },
        {
          title: "Documentation and Tutorials",
        },
        {
          title: "And much more...",
        },
      ],
      action: {
        href: "#",
      },
    },
    {
      id: "standard",
      title: "Standard Plan",
      description: "Comprehensive tools for small teams and startups.",
      price: (
        <HStack>
          <Text textDecoration="line-through" fontSize="sm" color="gray.400">
            €499,-
          </Text>
          <Text>€249,-</Text>
        </HStack>
      ),
      features: [
        {
          title: "Unlimited Molecular Docking Simulations",
        },
        {
          title: "Advanced ADME Value Predictions",
        },
        {
          title: "Collaboration Tools for Teams",
        },
        {
          title: "Enhanced Data Visualization",
        },
        {
          title: "1 Year of Software Updates",
        },
        {
          title: "Private Support Channel",
        },
      ],
      action: {
        href: "https://yourplatform.com/pricing/standard",
      },
    },
    {
      id: "enterprise",
      title: "Enterprise Plan",
      description: "Unlimited access for larger organizations.",
      price: (
        <HStack>
          <Text fontSize="md">contact us for a custom plan</Text>
        </HStack>
      ),
      features: [
        {
          title: "Unlimited Projects and Users",
        },
        {
          title: "Custom API Access",
        },
        {
          title: "Dedicated Account Manager",
        },
        {
          title: "Advanced Predictive Modeling",
        },
        {
          title: "Priority Support and Training",
        },
      ],
      action: {
        href: "https://yourplatform.com/pricing/enterprise",
      },
    },
  ],
};
