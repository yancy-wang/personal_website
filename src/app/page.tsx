import { AnimatedTestimonialsDemo } from "@/components/animated-testimonials-demo";
import { MorphingTextDemo } from "@/components/text_moon";
import { IconCloudDemo } from "@/components/icon_cloud"
import { ThreeDCardDemo } from "@/components/3d_card";
import { AppleCardsCarouselDemo } from "@/components/apple_cards_carousel_demo"
import { LensDemo } from "@/components/lens-demo";
import { TextGenerateEffectDemo1 } from "@/components/text_generate_1";
import { TextGenerateEffectDemo2 } from "@/components/text_generate_2";
import {SparklesPreview } from "@/components/sparkles-preview";
import { AuroraTextDemo } from "@/components/aurora";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Banner } from "@/components/Banner";
export default function Home() {
  return (
    <div>
      <Banner />
      <h1>Skills</h1>
      <AnimatedTestimonialsDemo />


      <IconCloudDemo />
      <ThreeDCardDemo />
      <AppleCardsCarouselDemo />
      <LensDemo />
      
    </div>
  );
}
