import type { Metadata } from "next";
import { Geist, Geist_Mono, VT323, Fira_Code, Electrolize } from "next/font/google";
import "./globals.css";
import TopRightProfile from "./components/TopRightProfile";
import { FloatingDock } from "./components/floating-dock";
import {
  IconBrandGithub,
  IconHome,
  IconBrain,
  IconRocket,
  IconBook,
  IconCube,
  IconBrandLinkedin,
} from "@tabler/icons-react";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const vt323 = VT323({
  weight: '400',
  subsets: ['latin'],
});

const firaCode = Fira_Code({
  weight: '400',
  subsets: ['latin']
});

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
  { title: "HackTheBox", icon: <IconCube className="h-full w-full text-neutral-500 dark:text-black" />, href: "#" },
  { title: "LinkedIn", icon: <IconBrandLinkedin className="h-full w-full text-neutral-500 dark:text-black" />, href: "https://www.linkedin.com/in/asjathahamedmohamedaazath" },
  { title: "GitHub", icon: <IconBrandGithub className="h-full w-full text-neutral-500 dark:text-black" />, href: "https://github.com/AsjathAhamedMohamedAazath?tab=repositories" },
];

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${electrolize.className} antialiased`}>
        <div className="relative">
          <TopRightProfile />
        </div>
        <main>{children}</main>
        <div className="fixed bottom-4 left-1/2 transform -translate-x-1/2 z-100">
          <FloatingDock mobileClassName="translate-y-20" items={links} />
        </div>
      </body>
    </html>
  );
}
