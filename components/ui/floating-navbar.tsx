"use client";
import React, { useState } from "react";
import {
  motion,
  AnimatePresence,
  useScroll,
  useMotionValueEvent,
} from "framer-motion";
import { cn } from "@/lib/utils";
import Link from "next/link";

export const FloatingNav = ({
  navItems,
  className,
}: {
  navItems: {
    name: string;
    link: string;
    icon?: JSX.Element;
  }[];
  className?: string;
}) => {
  const { scrollYProgress } = useScroll();

  const [visible, setVisible] = useState(true);

  useMotionValueEvent(scrollYProgress, "change", (current) => {
    // Check if current is not undefined and is a number
    if (typeof current === "number") {
      let direction 
       direction = (current!) - scrollYProgress.getPrevious()!;
console.log(direction)
        if (direction <= 0) {
          setVisible(true);
        } else {
          setVisible(false);
        }

    }
  });

  return (
    <AnimatePresence mode="popLayout">
      <motion.div
        initial={{
          opacity: 1,
          y: -100,
        }}
        animate={{
          y: visible ? 0 : -100,
          opacity: visible ? 1 : 0,
        }}
        transition={{
          duration: 0.2,
        }}
        className={cn(
          "flex max-w-fit fixed top-10 py-4 inset-x-0 mx-auto border border-transparent dark:border-white/[0.2] rounded-full bg-blue-950 shadow-sm shadow-amber-300 z-[5000] pr-2 pl-8  items-center justify-center space-x-4",
          className
        )}
      >
        {navItems.map((navItem: any, idx: number) => (
          <Link
            key={`link=${idx}`}
            href={navItem.link}
            className={cn(
              "relative dark:text-white items-center flex space-x-1 text-amber-400 dark:hover:text-sky-200 hover:text-white-200",
            )}
          >
            <span className="block text-sm">{navItem.name}</span>
          </Link>
        ))}
        <div>

        </div>
        <button className=" text-sm font-medium relative  text-black dark:text-white  py-2 rounded-full">
          {/* <span>Login</span> */}
          {/* <span className="absolute inset-x-0 w-1/2 mx-auto -bottom-px bg-gradient-to-r from-transparent via-blue-500 to-transparent  h-px" /> */}
        </button>
      </motion.div>
    </AnimatePresence>
  );
};
