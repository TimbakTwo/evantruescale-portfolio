export function AboutSection() {
  const toolkit = [
    "JavaScript",
    "Node.js",
    "TypeScript",
    "CSS",
    "SASS",
    "GraphQL",
    "SQL",
    "React",
    "React Native",
    "Redux",
    "Next.js",
    "Angular",
    "Phaser",
    "GSAP",
    "Express",
    "Vite",
    "webpack",
    "Astro",
    "Jest",
    "Cypress",
    "CLI",
    "Git",
    "SEO",
    "a11y",
    "Vercel",
  ];

  return (
    <section className="section font-sans py-20 px-6">
      {/* Header Container - Direct child with margin: auto */}
      <div className="max-w-6xl mx-auto text-center mb-16">
        <h2 className="title">About me</h2>

        <p className="subtitle text-xl italic">
          Building software for <span className="font-bold not-italic">20</span>{" "}
          years
        </p>
      </div>

      {/* Content Grid Container - Direct child with margin: auto */}
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-16">
        {/* Left Column: Bio */}
        <div className="flex flex-col items-start">
          <h3 className="text-2xl font-bold mb-6">Get to know me!</h3>
          <div className="space-y-4 leading-relaxed mb-8">
            <p>
              I'm a software developer specializing in JavaScript and web
              technologies, with a passion for performance, accessibility,
              mentoring, and enhancing both user and developer experiences.
            </p>
            <p>
              I embrace digital minimalism, using technology to create
              meaningful solutions that improve lives and drive business value.
            </p>
            <p>
              In my free time, I work on side projects and explore emerging
              technologies. Check out some of my work in the Projects section
              below.
            </p>
            <p>
              I'm always open to collaborations where I can contribute, learn,
              and grow. If my skills and experience align with your needs, feel
              free to reach out!
            </p>
          </div>
          <button className="bg-[#3b60c1] hover:opacity-90 text-white font-bold py-3 px-8 rounded shadow-md transition-all">
            Projects
          </button>
        </div>

        {/* Right Column: Toolkit */}
        <div>
          <h3 className="text-2xl font-bold mb-6">My toolkit</h3>
          <div className="flex flex-wrap gap-3">
            {toolkit.map((skill) => (
              <span
                key={skill}
                className="bg-[#e0e0e0] dark:bg-[#242424] px-4 py-2 rounded-md text-sm font-semibold transition-colors"
              >
                {skill}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
