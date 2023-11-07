"use client"

import { cn } from "@/lib/utils";
import { AlignLeft, Briefcase, LayoutDashboard, MessageSquare, User2 } from "lucide-react";
import { Montserrat } from "next/font/google"
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import Image from "next/image";

const monsterrat = Montserrat({weight: "600", subsets:
["latin"]})

const routes = [
    {
        label: "Home",
        icon: LayoutDashboard,
        href: "#home",
        color: "text-zinc-400"
    },
    {
        label: "About me",
        icon: User2,
        href: "#about",
        color: "text-rose-500"
    },
    {
        label: "My skills",
        icon: AlignLeft,
        href: "#skills",
        color: "text-blue-600"
    },
    {
        label: "My work",
        icon: Briefcase,
        href: "#work",
        color: "text-cyan-300"
    },
    {
        label: "Contact me",
        icon: MessageSquare,
        href: "#contact",
        color: "text-orange-500"
    }
]

export const Sidebar = () => {
    const pathname = usePathname();
    const [isMounted, setIsMounted] = useState(false);

    return (
        <div className="space-y-4 py-4 flex flex-col
        h-full bg-[#19191a] text-white">
            <div className="px-3 py-2 flex-1">
                <Link href="#home" className="flex 
                items-center pl-3 mb-14">
                    <div className="relative w-16 h-16 mr-4">
                        <Image 
                            fill
                            alt="Logo"
                            src="/logo.png"
                        />
                    </div>
                    <div className="relative w-16 h-16 mr-4">
                        <Image 
                            fill
                            alt="Logo"
                            src="/me.jpg"
                            className="rounded"
                        />
                    </div>
                </Link>
                <div className="space-y-1">
                    {routes.map((route) => (
                        <Link
                            href={route.href}
                            key={route.href}
                            className={cn("text-sm group flex p-3 w-full justify-start font-medium cursor-pointer hover:text-white hover:bg-white/10 rounded-lg transition",
                            pathname === route.href ? "text-white bg-white/10" : "text-zinc-400")}
                        >
                            <div className="flex items-center flex-1">
                                <route.icon className={cn("h-5 w-5 mr-3", route.color)}/>
                                {route.label}
                            </div>
                        </Link>
                    ))}
                </div>
            </div>
        </div>
    )
}