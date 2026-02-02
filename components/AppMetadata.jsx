const author = "Evan de Leon";
const siteUrl = "https://yourdomain.com"; // ← replace with your real domain

const description =
  "Full-stack web developer specializing in Next.js and modern web technologies. I build scalable, high-performance applications with clean UI, strong architecture, and production-ready databases like PostgreSQL and MongoDB.";

export const AppMetadata = {
  metadataBase: new URL(siteUrl),

  title: {
    default: "Evan de Leon | Full-Stack Web Developer",
    template: "%s | Evan de Leon",
  },

  description,

  icons: {
    icon: "/favicon.png",
  },

  keywords: [
    "Evan de Leon",
    "Full-stack developer",
    "Next.js developer",
    "React developer",
    "PostgreSQL developer",
    "Web application developer",
    "Frontend developer portfolio",
  ],

  creator: author,
  authors: [{ name: author, url: siteUrl }],

  openGraph: {
    title: "Evan de Leon | Full-Stack Web Developer Portfolio",
    description,
    url: siteUrl,
    siteName: "Evan de Leon Portfolio",
    images: [
      {
        url: `${siteUrl}/screenshot.webp`,
        width: 1200,
        height: 630,
        alt: "Evan de Leon portfolio website preview",
      },
    ],
    locale: "en_US",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "Evan de Leon | Full-Stack Web Developer",
    description,
    images: [`${siteUrl}/screenshot.webp`],
  },

  robots: {
    index: true,
    follow: true,
  },
};
