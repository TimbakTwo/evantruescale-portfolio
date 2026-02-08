"use client";

import {
  AboutSection,
  ProjectsSection,
  ContactSection,
  IntroductionSection,
} from "app/sections";

export default function Page() {
  return (
    <main className="container-md">
      <IntroductionSection />
      <AboutSection />
      <ProjectsSection />
      <ContactSection />
    </main>
  );
}
