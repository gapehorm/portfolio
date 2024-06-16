// src/pages/HomePage.tsx
"use client";

import React, { useState, useEffect } from "react";
import { navItems } from "@/data";
import Hero from "@/components/Hero";
import Grid from "@/components/Grid";
import Footer from "@/components/Footer";
import Clients from "@/components/Clients";
import Approach from "@/components/Approach";
import Experience from "@/components/Experience";
import RecentProjects from "@/components/RecentProjects";
import { FloatingNav } from "@/components/ui/FloatingNavbar";
import Preloader from "@/components/Preloader";
import MultiStepLoader from "@/components/ui/multi-step-loader";

const Home = () => {
  const [isLoading, setIsLoading] = useState(true);

  const loadingStates = [
    { text: "Click" }, // English
    { text: "Clic" }, // French
    { text: "Cliquez" }, // French
    { text: "Klicken" }, // German
    { text: "Clicca" }, // Italian
    { text: "クリック" }, // Japanese (Katakana)
    { text: "点击" }, // Chinese (Simplified)
    { text: "클릭하세요" }, // Korean
    { text: "คลิก" }, // Thai
  ];

  // Remove useEffect since loading state will be controlled by user interaction

  return (
    <main className="relative bg-black-100 flex justify-center items-center flex-col overflow-hidden mx-auto sm:px-10 px-5">
      {isLoading ? (
        <div
          onClick={() => setIsLoading(false)}
          className="w-full h-full fixed inset-0 z-[100] flex items-center justify-center backdrop-blur-2xl cursor-pointer"
        >
          <MultiStepLoader loading={true} loadingStates={loadingStates} />
        </div>
      ) : (
        <div className="max-w-7xl w-full">
          <FloatingNav navItems={navItems} />
          <Hero />
          <Grid />
          <Clients />
          <Experience />
          <Approach />
          <Footer />
        </div>
      )}
    </main>
  );
};

export default Home;
