import { FaLinkedin, FaReddit } from "react-icons/fa";
import { HiMail } from "react-icons/hi";

export function ContactSection() {
  const contactInfo = [
    {
      icon: <FaLinkedin className="text-2xl" />,
      title: "Reach out on LinkedIn",
      value: "linkedin.com/in/evan-m-de-leon",
      href: "https://www.linkedin.com/in/evan-m-de-leon-189636275/",
    },
    {
      icon: <HiMail className="text-2xl" />,
      title: "Write an email",
      value: "hilencesilence@gmail.com",
      href: "mailto:hilencesilence@gmail.com",
    },
    {
      icon: <FaReddit className="text-2xl" />,
      title: "Chat me on Reddit!",
      value: "@BaconShadow",
      href: "https://www.reddit.com/user/BaconShadow/",
    },
  ];

  return (
    <section
      id="contact"
      className="section py-24 px-6 transition-colors duration-300"
    >
      <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        {/* Left Column: Typography */}
        <div className="space-y-6">
          <div className="space-y-2">
            <span className="text-sm font-bold tracking-[0.2em] uppercase opacity-60">
              Contact Me
            </span>
            <h2 className="text-5xl md:text-6xl font-black tracking-tight">
              Let's talk!
            </h2>
          </div>

          <p className="text-lg leading-relaxed max-w-md opacity-70">
            Feel free to reach out! I'm here to help and will respond within 24
            hours. Your questions matter to me!
          </p>
        </div>

        {/* Right Column: Modern Contact Card */}
        <div className="relative">
          {/* Subtle Decorative Gradient Background */}
          <div className="absolute -inset-4 bg-gradient-to-tr from-[#3b60c1] to-purple-500 rounded-3xl blur-2xl opacity-10 dark:opacity-20"></div>

          <div className="relative bg-[#f8f9fa] dark:bg-[#161616] border border-gray-200 dark:border-white/10 p-8 md:p-10 rounded-2xl shadow-2xl">
            <div className="space-y-10">
              {contactInfo.map((item, index) => (
                <a
                  key={index}
                  href={item.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-start gap-5 group transition-all"
                >
                  <div className="flex-shrink-0 w-12 h-12 flex items-center justify-center rounded-xl bg-white dark:bg-[#242424] shadow-sm border border-gray-100 dark:border-white/5 group-hover:scale-110 group-hover:bg-[#3b60c1] group-hover:text-white transition-all duration-300">
                    {item.icon}
                  </div>

                  <div className="space-y-1">
                    <h4 className="font-bold text-sm uppercase tracking-wider opacity-50">
                      {item.title}
                    </h4>
                    <p className="text-lg font-medium border-b border-transparent group-hover:border-[#3b60c1] inline-block transition-colors">
                      {item.value}
                    </p>
                  </div>
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
