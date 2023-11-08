import { Card, CardContent, CardHeader, CardTitle } from "./ui/card"

const content = [
    {
        name: "Computer Scrience degree",
        title: "Eötvös Loránd University",
        description: "I graduated from ELTE faculty of Informatics in June 2023."
    },
    {
        name: "Language proficiency",
        title: "Student",
        description: "I got my English C1 language certificate from LanguageCert."
    },
    {
        name: "Get to know me",
        title: "some things about me",
        description: "I'm a full-stack web developer located in Budapest, Hungary. My goal is to create web applications that not only look good, but also lead to the overall success of the product."
    },
    {
        name: "Open for work",
        title: "Full-stack or frontend",
        description: "I'm open to Job opportunities where I can contribute, learn and grow. If you have a good opportunity that matches my skills and experience then don't hesitate to contact me. "
    }
]

export const About = () => {
    return (
        <div className="pb-20 md:pb-0 px-10 mb-8 flex flex-col justify-center items-center md:h-screen" id="about">
            <h2 className="text-center text-5xl md:text-7xl text-white font-extrabold mb-2">
                About me
            </h2>
            <p className="text-white pb-20
            text-small md:text-lg text-center">
                Here you can find some information about me
            </p>
            <div className="w-10/12 md:w-3/5 grid grid-cols-1 sm:grid-cols-1 md:grid-cols-1
            lg:grid-cols-2 gap-4">
                {content.map((item) =>(
                    <Card key={item.description} className="bg-[#595959] border-none text-white">
                        <CardHeader>
                            <CardTitle className="flex items-center gap-x-2">
                                <div>
                                    <p className="text-lg bg-gradient-to-br from-green-400 to-blue-600 bg-clip-text text-transparent">
                                        {item.name}
                                    </p>
                                    <p className="text-zinc-400 text-sm">
                                        {item.title}
                                    </p>
                                </div>
                            </CardTitle>
                            <CardContent className="pt-4 px-0">
                                {item.description}
                            </CardContent>
                        </CardHeader>
                    </Card>
                ))}
            </div>
        </div>
    )
}