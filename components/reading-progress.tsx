"use client"

import { useEffect, useState } from "react";

export const ReadingProgress = () => {
    const [completion, setCompletion] = useState<number>(0);

    useEffect(() => {
        const updateScrollCompletion = () => {
            const windowHeight = window.innerHeight;
            const documentHeight = document.documentElement.scrollHeight;
            const scrollY = window.scrollY;
            
            setCompletion(
                (scrollY / (documentHeight - windowHeight))*100
            )

        }
        window.addEventListener('scroll', updateScrollCompletion)

        return () => {
            window.removeEventListener('scroll', updateScrollCompletion)
        }
    }, [])

    return <span style={{transform: `translateY(${completion-101.6}%)`}} className="lg:ml-72 absolute bg-gradient-to-b from-green-400 to-blue-600 w-1 h-full left-0"></span>
}