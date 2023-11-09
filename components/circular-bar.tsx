import { useCallback, useEffect, useState } from "react";

interface CircularProgressBarProps {
    value: number
    width: number
}

const useMediaQuery = (width: number) => {
    const [targetReached, setTargetReached] = useState(false);
  
    const updateTarget = useCallback((e: any) => {
      if (e.matches) {
        setTargetReached(true);
      } else {
        setTargetReached(false);
      }
    }, []);
  
    useEffect(() => {
      const media = window.matchMedia(`(max-width: ${width}px)`);
      media.addEventListener("change", updateTarget);
      // Check on mount (callback is not called until a change occurs)
      if (media.matches) {
        setTargetReached(true);
      }
      return () => media.removeEventListener('change', updateTarget);
    }, []);
  
    return targetReached;
};

export const CircularProgressBar = ({
    value,
    width
}: CircularProgressBarProps) => {
    const md = useMediaQuery(768)
    const radius = md ? 55 : 70;
    const dashArray = radius * Math.PI * 2;
    const dashOffset = dashArray - (dashArray * value) / 100;
    return (
        <div>
            <svg
            width={width}
            height={width}
            viewBox={`0 0 ${width} ${width}`}
            className="pl-4 pr-4"
            >
                <defs>
                    <linearGradient id="gradient">
                        <stop offset="10%" stopColor="#4ade80"/>
                        <stop offset="70%" stopColor="#2563eb"/>
                    </linearGradient>
                </defs>
                <circle 
                    cx={width / 2}
                    cy={width / 2}
                    strokeWidth={15}
                    r={radius}
                    className="fill-none stroke-slate-400"
                />

                <circle 
                    cx={width / 2}
                    cy={width / 2}
                    strokeWidth={15}
                    r={radius}
                    className="fill-none"
                    style={{
                        strokeDasharray: dashArray,
                        strokeDashoffset: dashOffset,
                        strokeLinejoin: "round",
                        strokeLinecap: "round"
                    }}
                    transform={`rotate(-90 ${width / 2} ${width / 2})`}
                    stroke="url(#gradient)"
                />
                <text x="50%" y="50%" dy="0.3em" textAnchor="middle"
                className="text-3xl fill-white"
                >
                    {value}%
                </text>
            </svg>
        </div>
    )
}