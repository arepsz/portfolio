import { Card, CardContent, CardHeader, CardTitle } from "./ui/card"

export const About = () => {
    return (
        <div className="px-10 pb-20 flex flex-col justify-center items-center h-screen">
            <h2 className="text-center text-4xl text-white font-extrabold mb-20">
                About me
            </h2>
            <div className="w-2/4 grid grid-cols-2 sm:grid-cols-2 md:grid-cols-2
            lg:grid-cols-2 gap-4">
                <Card className="bg-[#595959] border-none text-white">
                    <CardHeader>
                        <CardTitle className="flex items-center gap-x-2">
                            <div>
                                <p className="text-lg">
                                    Computer Scrience degree
                                </p>
                                <p className="text-zinc-400 text-sm">
                                    Eötvös Loránd University
                                </p>
                            </div>
                        </CardTitle>
                        <CardContent className="pt-4 px-0">
                            I graduated from ELTE faculty of Informatics in June 2023.
                        </CardContent>
                    </CardHeader>
                </Card>
                <Card className="bg-[#595959] border-none text-white">
                    <CardHeader>
                        <CardTitle className="flex items-center gap-x-2">
                            <div>
                                <p className="text-lg">
                                    Language proficiency
                                </p>
                                <p className="text-zinc-400 text-sm">
                                    Advanced English
                                </p>
                            </div>
                        </CardTitle>
                        <CardContent className="pt-4 px-0">
                            I got my English C1 language certificate from LanguageCert.
                        </CardContent>
                    </CardHeader>
                </Card>
            </div>
        </div>
    )
}