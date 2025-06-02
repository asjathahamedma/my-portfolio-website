"use client";

import dynamic from "next/dynamic";

const BackgroundParticles = dynamic(() => import("./BackgroundParticles"), {
  ssr: false,
});

export default function BackgroundParticlesWrapper() {
  return <BackgroundParticles />;
}
