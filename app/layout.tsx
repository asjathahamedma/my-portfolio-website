import type { Metadata } from "next";
import { Electrolize } from "next/font/google";
import "./globals.css";
import TopRightProfile from "./components/TopRightProfile";
import { FloatingDock } from "./components/floating-dock";
import Image from "next/image";

import {
  IconBrandGithub,
  IconHome,
  IconBrain,
  IconRocket,
  IconBook,
  IconBrandLinkedin,
  IconUser,

} from "@tabler/icons-react";
import BackgroundParticlesWrapper from "./components/BackgroundParticlesWrapper";




const electrolize = Electrolize({
  weight: '400',
  subsets: ['latin']
});

export const metadata: Metadata = {
  title: "GlitchViper",
  description: "",
};

const links = [
  { title: "Home", icon: <IconHome className="h-full w-full text-neutral-500 dark:text-black" />, href: "/" },
  { title: "Skills", icon: <IconBrain className="h-full w-full text-neutral-500 dark:text-black" />, href: "/skills" },
  { title: "Projects", icon: <IconRocket className="h-full w-full text-neutral-500 dark:text-black" />, href: "/projects" },
  { title: "WriteUps", icon: <IconBook className="h-full w-full text-neutral-500 dark:text-black" />, href: "/writeups" },
  { title: "About Me", icon: <IconUser className="h-full w-full text-neutral-500 dark:text-black" />, href: "/about" },
  { title: "My LinkedIn", icon: <IconBrandLinkedin className="h-full w-full text-neutral-500 dark:text-black" />, href: "https://www.linkedin.com/in/asjathahamedmohamedaazath" },
  { title: "My GitHub", icon: <IconBrandGithub className="h-full w-full text-neutral-500 dark:text-black" />, href: "https://github.com/AsjathAhamedMohamedAazath?tab=repositories" },
];

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${electrolize.className} antialiased`}>
        {/* Gradient wrapper over background */}
        <div className="relative min-h-screen bg-gradient-to-b from-white to-white dark:from-[#01242d] dark:to-[#020006]">
          <div className="fixed inset-0 pointer-events-none">
            <Image
              src="/effect.png"
              alt="Background"
              fill
              className="object-cover opacity-5"
            />

          </div>

          <BackgroundParticlesWrapper />
          <div className="absolute top-0 right-0 z-20">
            <TopRightProfile />
          </div>

          <main>
              {children}
          </main>

          <div className="fixed bottom-4 left-1/2 transform -translate-x-1/2 z-20">
            <FloatingDock mobileClassName="translate-y-20" items={links} />
          </div>
        </div>
      </body>
    </html>
  );
}


