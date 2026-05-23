import { Hero } from "@/components/sections/Hero";
import { Features } from "@/components/sections/Features";
import { AppShowcase } from "@/components/sections/AppShowcase";
import { AppExperience } from "@/components/sections/AppExperience";
import { SocialProof } from "@/components/sections/SocialProof";
import { Premium } from "@/components/sections/Premium";
import { CTA } from "@/components/sections/CTA";

export default function Home() {
  return (
    <>
      <Hero />
      <Features />
      <AppShowcase />
      <AppExperience />
      <SocialProof />
      <Premium />
      <CTA />
    </>
  );
}
