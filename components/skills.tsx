import { CircularProgression } from "./circular-progression";

export const Skills = () => {
  const serviceTab = [
    {
        value: 90,
        title: "Oracle SQL"
    },
    {
        value: 80,
        title: "JavaScript",
    },
    {
        value: 75,
        title: "Next.js",
    },
    {
        value: 70,
        title: "TypeScript",
    },
    {
        value: 70,
        title: "React.js",
    },
    {
        value: 70,
        title: "Git",
    },
    {
        value: 60,
        title: "Python"
    },
    {
        value: 50,
        title: "PHP"
    },
    {
        value: 40,
        title: "Node.js",
    },
    {
        value: 25,
        title: "Docker",
    },
    {
        value: 20,
        title: "AWS",
    }
  ];
  return (
    <div className="px-10 mb-8 flex flex-col justify-center items-center lg:h-screen" id="skills">
        <h2 className="text-center text-5xl md:text-7xl text-white font-extrabold mb-2">
                My skills
        </h2>
        <p className="text-white pb-20
            text-small md:text-lg text-center">
                You can see my skills visualized in some fancy progress bars
            </p>
        <div className="container mx-auto w-full flex items-center flex-wrap lg:flex-nowrap px-0">
            <div className="w-full h-full ">
            <div className="flex lg:justify-around lg:flex-row flex-col justify-center grid grid-cols-3 sm:grid-cols-2 md:grid-cols-4
                lg:grid-cols-5 xl:grid-cols-6">
                {serviceTab.map((x, index) => {
                return (
                    <div key={index} className="flex flex-col items-center">
                        <div className="text-xl text-white">{x.title}</div>
                        <div>
                            <CircularProgression
                            serviceTab={serviceTab}
                            index={index}
                            />
                        </div>
                    </div>
                );
                })}
            </div>
            </div>
        </div>
    </div>
  );
}