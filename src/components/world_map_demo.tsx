"use client";
import WorldMap from "@/components/ui/world-map";
import { motion } from "motion/react";

export function WorldMapDemo() {
  return (
    <div className=" py-40 dark:bg-black w-full">
      <div className="max-w-7xl mx-auto text-center">
        <p className="font-bold text-xl md:text-4xl dark:text-white text-black">
          <span className="text-neutral-400" >
            {"My Footprints".split("").map((word, idx) => (
              <motion.span
                key={idx}
                className="inline-block"
                initial={{ x: -10, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ duration: 0.5, delay: idx * 0.04 }}
              >
                {word}
              </motion.span>
            ))}
          </span>
        </p>
      </div>
      <WorldMap
        dots={[
            {
              start: { lat: 22.5431, lng: 114.0579 }, // Shenzhen
              end: { lat: 39.9042, lng: 116.4074 },   // Beijing
            },
            {
              start: { lat: 39.9042, lng: 116.4074 }, // Beijing
              end: { lat: 31.2304, lng: 121.4737 },   // Shanghai
            },
            {
              start: { lat: 31.2304, lng: 121.4737 }, // Shanghai
              end: { lat: 23.1291, lng: 113.2644 },   // Guangzhou
            },
            {
              start: { lat: 23.1291, lng: 113.2644 }, // Guangzhou
              end: { lat: 26.6477, lng: 106.6302 },   // Guiyang
            },
            {
              start: { lat: 26.6477, lng: 106.6302 }, // Guiyang
              end: { lat: 34.3416, lng: 108.9398 },   // Xi'an
            },
            {
              start: { lat: 34.3416, lng: 108.9398 }, // Xi'an
              end: { lat: 37.4638, lng: 121.4479 },   // Yantai
            },
            {
              start: { lat: 37.4638, lng: 121.4479 }, // Yantai
              end: { lat: 25.0453, lng: 102.7103 },   // Yunnan
            },
            {
              start: { lat: 25.0453, lng: 102.7103 }, // Yunnan
              end: { lat: 29.5630, lng: 106.5516 },   // Chongqing
            },
            {
              start: { lat: 29.5630, lng: 106.5516 }, // Chongqing
              end: { lat: 60.1695, lng: 24.9354 },    // Helsinki
            },
            {
              start: { lat: 60.1695, lng: 24.9354 },  // Helsinki
              end: { lat: 59.4370, lng: 24.7535 },    // Tallinn
            },
            {
              start: { lat: 59.4370, lng: 24.7535 },  // Tallinn
              end: { lat: 59.3293, lng: 18.0686 },    // Stockholm
            },
            {
              start: { lat: 59.3293, lng: 18.0686 },  // Stockholm
              end: { lat: 48.2082, lng: 16.3738 },    // Vienna
            },
            {
              start: { lat: 48.2082, lng: 16.3738 },  // Vienna
              end: { lat: 46.1512, lng: 14.9955 },    // Slovenia
            },
            {
              start: { lat: 46.1512, lng: 14.9955 },  // Slovenia
              end: { lat: 43.5081, lng: 16.4402 },    // Split
            },
            {
              start: { lat: 43.5081, lng: 16.4402 },  // Split
              end: { lat: 42.6507, lng: 18.0944 },    // Dubrovnik
            },
            {
              start: { lat: 42.6507, lng: 18.0944 },  // Dubrovnik
              end: { lat: 52.2297, lng: 21.0122 },    // Warsaw
            }
          ]}
      />
    </div>
  );
}
