"use client"

import { cn } from "@/lib/utils";
import { AlignLeft, Briefcase, LayoutDashboard, MessageSquare, User2 } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { useEffect, useLayoutEffect, useState } from "react";

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

const clamp = (value: number) => Math.max(0, value);

const isBetween = (value: number, floor: number, ceil: number) =>
  value >= floor && value <= ceil;

const useScrollspy = (ids: string[], offset: number = 0) => {
  const [activeId, setActiveId] = useState("home");

  useLayoutEffect(() => {
    const listener = () => {
      const scroll = window.scrollY;

      const position = ids
        .map((id) => {
          const element = document.getElementById(id);

          if (!element) return { id, top: -1, bottom: -1 };

          const rect = element.getBoundingClientRect();
          const top = clamp(rect.top + scroll - offset);
          const bottom = clamp(rect.bottom + scroll - offset);

          return { id, top, bottom };
        })
        .find(({ top, bottom }) => isBetween(scroll, top, bottom));

      setActiveId(position?.id || "");
    };

    listener();

    window.addEventListener("resize", listener);
    window.addEventListener("scroll", listener);

    return () => {
      window.removeEventListener("resize", listener);
      window.removeEventListener("scroll", listener);
    };
  }, [ids, offset]);

  return activeId;
};

export const Sidebar = () => {
    const ids = ["home", "about", "skills", "work", "contact"];
    const activeId = useScrollspy(ids, 50);

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
                            className={cn("text-sm group flex p-3 w-full justify-start font-medium cursor-pointer hover:text-white hover:bg-white/10 rounded-lg transition text-zinc-400",
                            route.href.split('#')[1] === activeId && "text-white bg-white/10")}
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