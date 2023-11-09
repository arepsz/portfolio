"use client"

import { About } from "@/components/about";
import { Contact } from "@/components/contact";
import { ReadingProgress } from "@/components/reading-progress";
import { Skills } from "@/components/skills";
import { Work } from "@/components/work";

export default function Home() {
    return (
      <div className="space-y-4 py-4 flex flex-col h-full">
        <div className='space-y-4 pb-28 h-screen flex flex-col items-center justify-center'>
          <h2 className="text-5xl md:text-9xl font-bold
          text-center bg-gradient-to-br from-green-400 to-blue-600 bg-clip-text text-transparent">
            Farkas Árpád
          </h2>
          <p className="text-white
          text-small md:text-lg text-center">
            full-stack web developer
          </p>
          <div className="flex items-center justify-center w-72 absolute top-[20%] sm:top-[25%] md:top-[25%] lg:top-[25%]">
            <div className="w-14 h-14 rounded-full border-2 border-black animate-bounce before:content-[''] before:absolute before:top-3 before:left-4 before:w-5 before:h-5
            before:border-b-2 before:border-l-2 before:border-black before:-rotate-45"></div>
          </div>
        </div>
        <About />
        <Skills />
        <Work />
        <Contact />
        <ReadingProgress />
      </div>
    )
  }