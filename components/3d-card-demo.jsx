"use client";
import { CardBody, CardContainer, CardItem } from "@/components/ui/3d-card";
// import type { CardProps } from "@/types/card"

export default function ThreeDCardDemo({
  title,
  description,
  imageUrl,
  buttonText
}) {
  return (
    <CardContainer className="relative">
      <CardBody className="bg-primary hover:shadow-md hover:shadow-secondary dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:bg-black dark:border-white/[0.2] border-secondary w-auto sm:w-[25rem] rounded-xl p-6 border">
        <CardItem translateZ="50" className="text-xl font-bold text-secondary">
          {title}
        </CardItem>
        <div className="flex h-16">
        <CardItem as="p" translateZ="60" className="text-gray-200 text-sm max-w-sm mt-2 dark:text-neutral-300">
          {description}
        </CardItem>
        </div>
        <div className="flex items-center justify-center w-full h-60">
          <CardItem translateZ="100" className="big_boss realtive flex text-secondary items-center justify-center w-full my-5">
            {imageUrl}
          </CardItem>
        </div>
        <div className="absolute bottom-6 left-6 right-6 flex justify-between items-center">
          <CardItem
            translateZ={20}
            as="button"
            className="px-4 py-2 rounded-xl bg-secondary text-primary dark:bg-white dark:text-black text-xs font-semibold"
          >
            {buttonText}
          </CardItem>
        </div>
      </CardBody>
    </CardContainer>
  )
}

