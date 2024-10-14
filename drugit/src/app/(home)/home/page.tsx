"use client";
import {
  Box,
  ButtonGroup,
  Container,
  Heading,
  HStack,
  Stack,
  Text,
} from "@chakra-ui/react";
import * as React from "react";

import { Faq } from "@/components/faq";
import { Features } from "@/components/features";
import { BackgroundGradient } from "@/components/gradients/background-gradient";
import { Hero } from "@/components/hero";
import { Pricing } from "@/components/pricing/pricing";
import Image from "next/image";
import {
  FiBox,
  FiCode,
  FiFlag,
  FiLock,
  FiSearch,
  FiTerminal,
  FiToggleLeft,
  FiTrendingUp,
  FiUserPlus,
} from "react-icons/fi";

import { ButtonLink } from "@/components/button-link/button-link";
import { Testimonial, Testimonials } from "@/components/testimonials";

import faq from "@/data/faq";
import pricing from "@/data/pricing";
import testimonials from "@/data/testimonials";

export default function Home() {
  return (
    <Box>
      <Box>
        <HeroSection />

        <FeaturesSection />

        <TestimonialsSection />

        <PricingSection />

        <FaqSection />
      </Box>
    </Box>
  );
}

const HeroSection: React.FC = () => {
  return (
    <Box position="relative" overflow="hidden">
      <BackgroundGradient height="100%" zIndex="-1" />
      <Container maxW="container.xl" pt={{ base: 40, lg: 60 }} pb="40">
        <Stack direction={{ base: "column", lg: "row" }} alignItems="center">
          <Hero
            id="home"
            justifyContent="flex-start"
            px="0"
            title="Unlocking the power of molecules"
            /*{
              <FallInPlace fontWeight="bold">
                Unlocking the power of molecules
              </FallInPlace>
            }*/
            description="we revolutionize drug discovery through the power of advanced AI
            and data-driven insights.
            From identifying promising drug candidates to
            predicting their efficacy in clinical trials."
            /*{
              <FallInPlace delay={0.4} fontWeight="medium">
                we revolutionize drug discovery through the power of advanced AI
                and data-driven insights.
                <Br></Br>From identifying promising drug candidates to
                predicting their efficacy in clinical trials.
              </FallInPlace>
            }*/
          >
            <HStack pt="8" pb="12" spacing="8">
              <ButtonGroup spacing={4} alignItems="center">
                <ButtonLink colorScheme="primary" size="lg" href="/signup">
                  Sign Up
                </ButtonLink>
              </ButtonGroup>
            </HStack>
            {/*<FallInPlace delay={0.8}>
              <HStack pt="8" pb="12" spacing="8">
                <ButtonGroup spacing={4} alignItems="center">
                  <ButtonLink colorScheme="primary" size="lg" href="/signup">
                    Sign Up
                  </ButtonLink>
                </ButtonGroup>
              </HStack>
          </FallInPlace>*/}
          </Hero>
          <Box
            height="600px"
            position="absolute"
            display={{ base: "none", lg: "block" }}
            left={{ lg: "60%", xl: "55%" }}
            width="80vw"
            maxW="1100px"
            margin="0 auto"
          >
            <Box overflow="hidden" height="100%">
              <Image
                src="/screenshot.png"
                width={1200}
                height={762}
                alt="Screenshot of an analysis in DrugIT"
                priority
              />
            </Box>
            {/*<FallInPlace delay={1}>
              <Box overflow="hidden" height="100%">
                <Image
                  src="/static/screenshots/list.png"
                  width={1200}
                  height={762}
                  alt="Screenshot of a ListPage in Saas UI Pro"
                  quality="75"
                  priority
                />
              </Box>
        </FallInPlace>*/}
          </Box>
        </Stack>
      </Container>
    </Box>
  );
};

const FeaturesSection = () => {
  return (
    <Features
      id="features"
      title={
        <Heading
          lineHeight="short"
          fontSize={["2xl", null, "4xl"]}
          textAlign="left"
          as="p"
        >
          Not Your Standard Drug Discovery Platform
        </Heading>
      }
      description={
        <>
          DrugIT includes everything you need to revolutionize the drug
          discovery process.
        </>
      }
      align="left"
      columns={[1, 2, 3]}
      iconSize={4}
      features={[
        {
          title: "AI-Powered Insights",
          icon: FiBox,
          description:
            "Leverage advanced AI algorithms to analyze molecular structures and select promising drug targets with high efficacy predictions.",
          variant: "inline",
        },
        {
          title: "Disease Target Identification",
          icon: FiTrendingUp,
          description:
            "Identify and prioritize disease targets based on molecular data, ensuring a focused approach to drug discovery.",
          variant: "inline",
        },
        {
          title: "Molecular Analysis",
          icon: FiLock,
          description:
            "Perform comprehensive molecular analyses to evaluate potential drug candidates and optimize their structures for better performance.",
          variant: "inline",
        },
        {
          title: "Predictive Modeling for Drug Efficacy",
          icon: FiToggleLeft,
          description:
            "Utilize predictive modeling to forecast drug efficacy in various diseases, allowing for informed decision-making in candidate selection.",
          variant: "inline",
        },
        {
          title: "Chatbot Assistance",
          icon: FiFlag,
          description:
            "Engage with our intelligent chatbot for real-time assistance, guidance on molecular analysis, and answers to your research questions.",
          variant: "inline",
        },
        {
          title: "ADME Value Predictions",
          icon: FiSearch,
          description:
            "Predict Absorption, Distribution, Metabolism, and Excretion (ADME) values to assess the pharmacokinetic properties of compounds.",
          variant: "inline",
        },
        {
          title: "Molecular Docking Simulations",
          icon: FiUserPlus,
          description:
            "Utilize advanced molecular docking techniques to simulate interactions between drug candidates and their targets, optimizing binding affinity.",
          variant: "inline",
        },
        {
          title: "Interactive Visualization Tools",
          icon: FiTerminal,
          description:
            "Access intuitive visualization tools to explore molecular interactions and disease pathways, enhancing understanding and communication.",
          variant: "inline",
        },
        {
          title: "Clinical Trial Insights",
          icon: FiCode,
          description: (
            <>
              Gain insights into clinical trial outcomes by analyzing molecular
              data and predicting success rates for specific drug candidates.
            </>
          ),
          variant: "inline",
        },
      ]}
    />
  );
};

const TestimonialsSection = () => {
  const columns = React.useMemo(() => {
    return testimonials.items.reduce<Array<typeof testimonials.items>>(
      (columns, t, i) => {
        columns[i % 3].push(t);

        return columns;
      },
      [[], [], []]
    );
  }, []);

  return (
    <Testimonials
      id="testimonials"
      title={testimonials.title}
      columns={[1, 2, 3]}
      innerWidth="container.xl"
    >
      <>
        {columns.map((column, i) => (
          <Stack key={i} spacing="8">
            {column.map((t, i) => (
              <Testimonial key={i} {...t} />
            ))}
          </Stack>
        ))}
      </>
    </Testimonials>
  );
};

const PricingSection = () => {
  return (
    <Pricing {...pricing}>
      <Text p="8" textAlign="center" color="muted">
        VAT may be applicable depending on your location.
      </Text>
    </Pricing>
  );
};

const FaqSection = () => {
  return <Faq {...faq} />;
};
