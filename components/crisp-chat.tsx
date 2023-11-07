"use client";

import { useEffect } from "react";
import {Crisp} from "crisp-sdk-web";

export const CrispChat = () => {
    useEffect(() => {
        Crisp.configure("5fab3dca-2a86-4d24-bd6d-839386a56344")
    }, [])

    return null
}