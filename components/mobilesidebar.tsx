"use client"

import { useEffect, useState } from "react";
import { Sheet, SheetContent, SheetTrigger } from "./ui/sheet";
import { Sidebar } from "./sidebar";
import { Button } from "./ui/button";
import { Menu } from "lucide-react";

export const MobileSidebar = () => {
    const [isMounted, setIsMounted] = useState(false);

    useEffect(() => {
        setIsMounted(true);
    }, [])

    if(!isMounted){
        return null;
    }
    return (
        <Sheet>
            <SheetTrigger>
                <Button variant="ghost" size="icon"
                    className="md:hidden">
                    <Menu />
                </Button>
            </SheetTrigger>
            <SheetContent side="left">
                <Sidebar />
            </SheetContent>
        </Sheet>
    )
}