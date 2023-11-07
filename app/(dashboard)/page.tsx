"use client"

import { About } from "@/components/about";
import { ReadingProgress } from "@/components/reading-progress";
import { Skills } from "@/components/skills";

export default function Home() {
    const completion = ReadingProgress();

    return (
      <div className="space-y-4 py-4 flex flex-col
      h-full">
        <div className='space-y-4 pb-28 h-screen flex flex-col items-center justify-center'>
          <h2 className="text-5xl md:text-9xl font-bold
          text-center bg-gradient-to-br from-green-400 to-blue-600 bg-clip-text text-transparent">
            Farkas Árpád
          </h2>
          <p className="text-white
          text-small md:text-lg text-center">
            full-stack web developer
          </p>
          <div className="flex items-center justify-center w-72 absolute top-[27%] md:top-[45%]">
            <div className="w-14 h-14 rounded-full border-2 border-black animate-bounce before:content-[''] before:absolute before:top-3 before:left-4 before:w-5 before:h-5
            before:border-b-2 before:border-l-2 before:border-black before:-rotate-45"></div>
          </div>
        </div>
        <About />
        <span style={{transform: `translateY(${completion-103}%)`}} className="md:ml-72 absolute bg-gradient-to-b from-green-400 to-blue-600 w-1 h-full left-0"></span>
      </div>
    )
  }