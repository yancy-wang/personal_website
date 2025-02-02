import Image from "next/image";
import React from "react";
import { Carousel, Card } from "@/components/ui/apple-cards-carousel";
import  PoetryComponent1  from "@/components/poetry_1"
import  PoetryComponent2  from "@/components/poerty_2"
import  PoetryComponent3  from "@/components/poetry_3"
import  PoetryComponent4  from "@/components/poetry_4"
import  PoetryComponent5  from "@/components/poetry_5"
export function AppleCardsCarouselDemo() {
  const cards = data.map((card, index) => (
    <Card key={card.src} card={card} index={index} />
  ));

  return (
    <div className="w-full h-full py-20">
      <Carousel items={cards} />
    </div>
  );
}

const DummyContent = () => {
  return (
    <>
      {[...new Array(3).fill(1)].map((_, index) => {
        return (
          <div
            key={"dummy-content" + index}
            className="bg-[#F5F5F7] dark:bg-neutral-800 p-8 md:p-14 rounded-3xl mb-4"
          >
            <p className="text-neutral-600 dark:text-neutral-400 text-base md:text-2xl font-sans max-w-3xl mx-auto">
              <span className="font-bold text-neutral-700 dark:text-neutral-200">
                The first rule of Apple club is that you boast about Apple club.
              </span>{" "}
              Keep a journal, quickly jot down a grocery list, and take amazing
              class notes. Want to convert those notes to text? No problem.
              Langotiya jeetu ka mara hua yaar is ready to capture every
              thought.
            </p>
            <Image
              src="https://assets.aceternity.com/macbook.png"
              alt="Macbook mockup from Aceternity UI"
              height="500"
              width="500"
              className="md:w-1/2 md:h-1/2 h-full w-full mx-auto object-contain"
            />
          </div>
        );
      })}
    </>
  );
};

const data = [
  {
    category: "Suomenlinna",
    title: "Quantum Entanglement of Missed Heartbeats",
    src: "/img/suomalinna.JPG",
    content: <PoetryComponent1 />,
  },
  {
    category: "Tallinn Castle",
    title: "Ontological Poverty",
    src: "/img/p2.JPG",
    content: <PoetryComponent2 />,
  },
  {
    category: "Austria",
    title: "Summer Masquerade: A Bourgeoisie's Lumberyard Sonata",
    src: "/img/p3.png",
    content: <PoetryComponent3 />,
  },

  {
    category: "Dubrovnik",
    title: "Postmodern Eucharist",
    src: "/img/p4.png",
    content: <PoetryComponent4 />,
  },
  {
    category: "Riga",
    title: "Ephemeral Eternities",
    src: "/img/p5.png",
    content: <PoetryComponent5 />,
  },
];
