"use client"

import { useEffect, useState } from "react";

export const ReadingProgress = () => {
    const [completion, setCompletion] = useState<number>(0);

    useEffect(() => {
        const updateScrollCompletion = () => {
            let scrollProgress: number = window.scrollY
            let scrollHeight: number = Math.max(
                document.body.scrollHeight,
                document.documentElement.scrollHeight,
                document.body.offsetHeight,
                document.documentElement.offsetHeight,
                document.body.clientHeight,
                document.documentElement.clientHeight) - window.innerHeight
            if(scrollHeight){
                setCompletion(
                    parseFloat((scrollProgress / scrollHeight).toFixed(2)) * 100
                )
            }

        }
        window.addEventListener('scroll', updateScrollCompletion)

        return () => {
            window.removeEventListener('scroll', updateScrollCompletion)
        }
    }, [])

    return <span style={{transform: `translateY(${completion-103}%)`}} className="md:ml-72 absolute bg-gradient-to-b from-green-400 to-blue-600 w-1 h-full left-0"></span>
}