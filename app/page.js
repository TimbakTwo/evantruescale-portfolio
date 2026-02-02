"use client";

import {
  AboutSection,
  ProjectsSection,
  TechnologiesSection,
  IntroductionSection,
} from "app/sections";

export default function Page() {
  return (
    <main className="container-md">
      <IntroductionSection />
      <AboutSection />
      <ProjectsSection />
      <TechnologiesSection />
    </main>
  );
}
