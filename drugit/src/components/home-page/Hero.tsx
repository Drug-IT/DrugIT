"use client";

import Background from "@/public/background.png";
import React from "react";
import { Container } from "../layout";
import { Button } from "../ui/button";

const Hero: React.FC = () => {
  return (
    <div
      className="flex items-center h-screen bg-cover bg-center"
      style={{
        backgroundImage: `url(${Background.src})`,
      }}
    >
      <Container>
        <h1 className="text-6xl pb-6 font-bold text-white">
          an AI model for drug discovery
        </h1>
        <p className="text-3xl justify-center pb-10 text-white">
          DrugIT is an AI model that automates the task for searching for “HITS”
          to resolve the oriblem of the lengthy period between the discovery of
          a potential drug and its availability to patients through training on
          datasets of chemical components and predicting the therapeutic
          activity of the candidate molecule.
        </p>
        <Button variant="filled" size="lg" className="text-xl">
          Get Started {">>"}
        </Button>
      </Container>
    </div>
  );
};

export default Hero;
