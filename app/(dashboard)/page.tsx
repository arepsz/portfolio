import { About } from "@/components/about";

export default function Home() {
    return (
      <>
      <div className='mb-8 space-y-4 h-screen flex flex-col items-center justify-center'>
        <h2 className="text-7xl md:text-9xl font-bold
        text-center bg-gradient-to-br from-green-400 to-blue-600 bg-clip-text text-transparent">
          Farkas Árpád
        </h2>
        <p className="text-white
        text-small md:text-lg text-center">
          full-stack web developer
        </p>
      </div>
      <About />
      </>
    )
  }