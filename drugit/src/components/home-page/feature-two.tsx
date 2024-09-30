// React and Next.js imports
import Link from "next/link";

// Third-party library imports
import Balancer from "react-wrap-balancer";

// UI component imports
import { Container, Section } from "@/components/layout";

// Icon imports
import { ArrowRight, Coins } from "lucide-react";

type FeatureText = {
  icon: JSX.Element;
  title: string;
  description: string;
  href?: string;
  cta?: string;
};

const featureText: FeatureText[] = [
  {
    icon: <Coins className="h-6 w-6" />,
    title: "Lorem Ipsum",
    href: "/",
    description:
      "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
    cta: "Learn More",
  },
  {
    icon: <Coins className="h-6 w-6" />,
    title: "Lorem Ipsum",
    href: "/",
    description:
      "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
    cta: "Learn More",
  },
  {
    icon: <Coins className="h-6 w-6" />,
    title: "Lorem Ipsum",
    href: "/",
    description:
      "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
    cta: "Learn More",
  },
  {
    icon: <Coins className="h-6 w-6" />,
    title: "Lorem Ipsum",
    href: "/",
    description:
      "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
    cta: "Learn More",
  },
  {
    icon: <Coins className="h-6 w-6" />,
    title: "Lorem Ipsum",
    href: "/",
    description:
      "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
    cta: "Learn More",
  },
  {
    icon: <Coins className="h-6 w-6" />,
    title: "Lorem Ipsum",
    href: "/",
    description:
      "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
    cta: "Learn More",
  },
];

const FeatureTwo = () => {
  const itemCount = featureText.length;
  return (
    <Section className="border-b">
      <Container className="not-prose">
        <div className="flex items-center flex-col gap-6">
          <h3 className="text-4xl">
            <Balancer>Key Features</Balancer>
          </h3>
          <h4 className="text-2xl text-center font-light opacity-70">
            <Balancer>
              Revolutionize your drug discovery journey with our AI Engine.
              Discover, collect, and explore diverse molecules with
              unprecedented speed and efficiency. The future of drug discovery
              is at your fingertips.
            </Balancer>
          </h4>

          <div className="mt-6 grid gap-4 md:mt-12 md:grid-cols-4">
            {featureText.map(
              ({ icon, title, description, href, cta }, index) => {
                const isLastRowFull = itemCount % 4 === 0;

                return itemCount - index < 3 && !isLastRowFull ? (
                  <Link
                    href={`${href}`}
                    className={`grid grid-cols-subgrid gap-4 col-span-${
                      itemCount % 4
                    } flex flex-col justify-between gap-6 rounded-lg border p-6 transition-all hover:-mt-2 hover:mb-2 "`}
                    key={index}
                  >
                    <div className="grid gap-4">
                      {icon}
                      <h4 className="text-xl text-primary">{title}</h4>
                      <p className="text-base opacity-75">{description}</p>
                    </div>
                    {cta && (
                      <div className="flex h-fit items-center text-sm font-semibold">
                        <p>{cta}</p> <ArrowRight className="ml-2 h-4 w-4" />
                      </div>
                    )}
                  </Link>
                ) : (
                  <Link
                    href={`${href}`}
                    className="flex flex-col justify-between gap-6 rounded-lg border p-6 transition-all hover:-mt-2 hover:mb-2 "
                    key={index}
                  >
                    <div className="grid gap-4">
                      {icon}
                      <h4 className="text-xl text-primary">{title}</h4>
                      <p className="text-base opacity-75">{description}</p>
                    </div>
                    {cta && (
                      <div className="flex h-fit items-center text-sm font-semibold">
                        <p>{cta}</p> <ArrowRight className="ml-2 h-4 w-4" />
                      </div>
                    )}
                  </Link>
                );
              }
            )}
          </div>
        </div>
      </Container>
    </Section>
  );
};

export default FeatureTwo;
