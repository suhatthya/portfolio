import React, { useMemo } from "react";

const COLORS = ["#F2B5C8", "#99C1DD", "#F8D7A6", "#92CC94", "#E4C1F9"];

export default function Flowers() {
    const petals = useMemo(
        () =>
            Array.from({ length: 18 }, (_, i) => ({
                left: `${(i * 5.7 + 2) % 100}%`,
                delay: `${(i * 0.55) % 9}s`,
                dur: `${7 + (i % 5)}s`,
                color: COLORS[i % COLORS.length],
                size: 5 + (i % 5),
            })),
        []
    );

    return (
        <div className="flower-wrap">
            {petals.map((p, i) => (
                <div
                    key={i}
                    className="petal"
                    style={{
                        left: p.left,
                        animationDelay: p.delay,
                        animationDuration: p.dur,
                        background: p.color,
                        width: `${p.size}px`,
                        height: `${p.size * 1.6}px`,
                    }}
                />
            ))}
        </div>
    );
}