import Image from "next/image";
import Link from "next/link";
import Balancer from "react-wrap-balancer";

import { Container, Section } from "@/components/layout";
import { Button } from "@/components/ui/button";
import Placeholder from "@/public/placeholder.webp";

const FeatureEight = () => {
  return (
    <Section>
      <Container className="grid items-stretch">
        <h3 className="!mt-0">We have this amazing feature in our app.</h3>
        <p className="text-muted-foreground">
          <Balancer>
            Consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
            labore et dolore magna aliqua.
          </Balancer>
        </p>
        <div className="not-prose my-8 flex items-center gap-2">
          <Button className="w-fit" asChild>
            <Link href="#">Get Started</Link>
          </Button>
          <Button className="w-fit" asChild>
            <Link href="#">Learn More {"->"}</Link>
          </Button>
        </div>
        <div className="not-prose relative flex h-96 overflow-hidden rounded-lg border">
          <Image
            src={Placeholder}
            alt="placeholder"
            className="fill object-cover"
          />
        </div>
      </Container>
    </Section>
  );
};

export default FeatureEight;
