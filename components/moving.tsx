"use client";
import { useEffect, useState } from "react";

export default function BinaryAnimation() {
  const [binaries, setBinaries] = useState<{ id: number; left: number; size: number; duration: number; delay: number; value: string }[]>([]);

  useEffect(() => {
    const generateBinary = () => {
      setBinaries((prev) => [
        ...prev,
        {
          id: Math.random(),
          left: Math.random() * window.innerWidth, // Random X position
          size: Math.random() * 2 + 1, // Random font size (1rem - 3rem)
          duration: Math.random() * 3 + 2, // 2s - 5s fall time
          delay: Math.random() * 2, // Random delay to stagger falling
          value: Math.random() > 0.5 ? "0" : "1", // Random binary digit
        },
      ]);

      // Clean up old elements after a few seconds
      setTimeout(() => {
        setBinaries((prev) => prev.slice(1));
      }, 5000);
    };

    const interval = setInterval(generateBinary, 100); // Generate every 100ms
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="overflow-hidden">
      {binaries.map((binary) => (
        <span
          key={binary.id}
          className="fixed  text-secondary font-mono"
          style={{
            left: `${binary.left}px`,
            fontSize: `${binary.size}rem`,
            animation: `fall 7s linear infinite`,
          }}
        >
          {binary.value}
        </span>
      ))}

      {/* Tailwind Animation */}
      <style jsx>{`
        @keyframes fall {
          0% {
            transform: translateY(-50vh);
            opacity: 1;
          }
          100% {
            transform: translateY(200vh);
            opacity: 0.7;
          }
        }
      `}</style>
    </div>
  );
}
