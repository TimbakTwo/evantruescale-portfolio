import Link from "next/link";
import { FiExternalLink } from "react-icons/fi";

export function ProjectsSection() {
  const projects = [
    {
      title: "Agevent",
      description:
        "An AI-powered event planning assistant that helps users create personalized events based on their preferences and interests.",
      tags: [
        "Next.js",
        "React",
        "Tailwind CSS",
        "Radix UI",
        "Clerk Auth",
        "Convex",
        "React Hook Form",
        "Zod",
        "Google Gemini AI",
      ],

      image: "agevent.png", // Replace with your image path
      link: "https://agevent.vercel.app/",
    },
    {
      title: "InPlate",
      description:
        "A curated list of available dishes with suggested recipes powered by AI, with custom photo recognition to identify ingredients and provide personalized meal suggestions.",
      tags: [
        "Next.js",
        "React",
        "Tailwind CSS",
        "Radix UI",
        "Clerk Auth",
        "Arcjet Security",
        "Google Gemini AI",
        "Strapi CMS",
        "SQLite / PostgreSQL",
      ],

      image: "inplateProject.png", // Replace with your image path
      link: "https://inplate-delta.vercel.app/",
    },
  ];

  return (
    <section id="projects" className="section py-20 px-6">
      {/* Centered Header */}
      <div className="max-w-6xl mx-auto text-center mb-16">
        <h2 className="title">Projects</h2>
      </div>

      {/* Projects Container */}
      <div className="max-w-6xl mx-auto space-y-12">
        {projects.map((project, index) => (
          <div
            key={project.title}
            className={`flex flex-col md:flex-row overflow-hidden rounded-xl shadow-lg border border-gray-200 dark:border-gray-800 ${
              index % 2 !== 0 ? "md:flex-row-reverse" : ""
            }`}
          >
            {/* Text Side */}
            <div className="flex flex-col justify-center p-8 md:w-2/5 bg-white dark:bg-[#1a1a1a]">
              <h3 className="text-2xl font-bold mb-3">{project.title}</h3>
              <p className="mb-6 leading-relaxed opacity-80">
                {project.description}
              </p>

              {/* Project Tags */}
              <div className="flex flex-wrap gap-2 mb-8">
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className="bg-[#e0e0e0] dark:bg-[#242424] px-4 py-2 rounded text-xs font-semibold"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              {/* Link Button */}
              <div>
                <Link
                  href={project.link}
                  target="_blank"
                  className="inline-flex items-center gap-2 bg-[#3b60c1] hover:opacity-90 text-white font-bold py-2 px-5 rounded transition-all"
                >
                  Check it <FiExternalLink />
                </Link>
              </div>
            </div>

            {/* Image Side */}
            <div className="md:w-3/5 h-64 md:h-auto overflow-hidden bg-gray-100">
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
              />
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
