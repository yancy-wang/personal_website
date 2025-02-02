import Image from "next/image";
import React from "react";
import { CardBody, CardContainer, CardItem } from "@/components/ui/3d-card";
import Link from "next/link";

// Props definition
interface ThreeDCardProps {
  title: string;
  description: string;
  imageUrl: string; // Local path to the image
  link: string;
}

export function ThreeDCardDemo({ title, description, imageUrl, link }: ThreeDCardProps) {
  return (
    <CardContainer className="inter-var transition-transform duration-500 ease-in-out hover:scale-105">
      <CardBody className="bg-gray-50 relative group/card dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.2] dark:bg-black dark:border-white/[0.2] border-black/[0.1] w-full sm:w-[30rem] h-auto rounded-xl p-6 border transition-all duration-300 hover:shadow-xl hover:border-emerald-400">
        
        {/* Title */}
        <CardItem
          translateZ="50"
          className="text-xl font-bold text-neutral-600 dark:text-white"
        >
          {title}
        </CardItem>

        {/* Description */}
        <CardItem
          as="p"
          translateZ="60"
          className="text-neutral-500 text-sm max-w-sm mt-2 dark:text-neutral-300"
        >
          {description}
        </CardItem>

        {/* Local Image */}
        <CardItem translateZ="100" className="w-full mt-4">
          <Image
            src={imageUrl} // Local file path
            height={600}
            width={1000}
            className="h-60 w-full object-cover rounded-xl group-hover/card:shadow-xl transition-transform duration-500 hover:scale-105"
            alt={title}
            priority
          />
        </CardItem>

        {/* Buttons */}
        <div className="flex justify-between items-center mt-6">
          <CardItem
            translateZ={20}
            as={Link}
            href={link}
            target="_blank"
            className="px-4 py-2 rounded-xl text-xs font-medium text-emerald-600 dark:text-emerald-400 hover:text-white hover:bg-emerald-500 dark:hover:bg-emerald-400 dark:hover:text-black transition-all duration-300"
          >
            Learn More →
          </CardItem>
        </div>
      </CardBody>
    </CardContainer>
  );
}
