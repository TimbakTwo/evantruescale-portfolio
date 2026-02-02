"use client";

import { HeadingDivider, Loader } from "components";
import { Suspense } from "react";
import { ErrorBoundary } from "react-error-boundary";
import Error from "../error";
import { Projects } from "./components/Projects";
import { Filter } from "./components/Filter";

export default function Page() {
  // Hardcoded GitHub projects with all fields
  const projects = [
    {
      title: "Agevent",
      description:
        "Event management app built with Next.js for creating and managing events easily.",
      images: ["agevent.jpg"], // add image file in /public/images or wherever your project expects
      liveUrl: "https://agevent.vercel.app/",
      repoUrl: "https://github.com/TimbakTwo/agevent",
      stack: ["Next.js", "React", "Tailwind CSS", "Sanity (removed for now)"],
    },
    {
      title: "InPlate",
      description: "Food and restaurant app for tracking meals and menu items.",
      images: ["inplate.jpg"],
      liveUrl: "https://inplate-delta.vercel.app/",
      repoUrl: "https://github.com/TimbakTwo/InPlate",
      stack: ["Next.js", "React", "Tailwind CSS", "Supabase"],
    },
  ];

  // Optional filter click (placeholder, not active yet)
  const onClick = () => {};

  return (
    <div className="container-md">
      <section id="projects" className="section">
        <HeadingDivider title="Relevant Projects" />
        <Filter onClick={onClick} /> {/* Optional UI placeholder */}
        <Suspense
          fallback={
            <div className="flex-center">
              <Loader />
            </div>
          }
        >
          <ErrorBoundary FallbackComponent={Error}>
            {projects.length === 0 ? (
              <div className="flex-center">
                <h3 className="text-2xl">No projects to display</h3>
              </div>
            ) : (
              <Projects projects={projects} />
            )}
          </ErrorBoundary>
        </Suspense>
      </section>
    </div>
  );
}
