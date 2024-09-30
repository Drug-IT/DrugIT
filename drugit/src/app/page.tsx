import FeatureEight from "@/components/home-page/feature-eight";
import FeatureFive from "@/components/home-page/feature-five";
import FeatureFour from "@/components/home-page/feature-four";
import FeatureNine from "@/components/home-page/feature-nine";
import FeatureSeven from "@/components/home-page/feature-seven";
import FeatureSix from "@/components/home-page/feature-six";
import FeatureThree from "@/components/home-page/feature-three";
import FeatureTwo from "@/components/home-page/feature-two";
import Hero from "@/components/home-page/Hero";

export default function Home() {
  return (
    <div>
      <Hero />
      <FeatureTwo />
      <FeatureThree />
      <FeatureFour />
      <FeatureFive />
      <FeatureSix />
      <FeatureSeven />
      <FeatureEight />
      <FeatureNine />
    </div>
  );
}
