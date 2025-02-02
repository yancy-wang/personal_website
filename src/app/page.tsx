import { AnimatedTestimonialsDemo } from "@/components/animated-testimonials-demo";
import { MorphingTextDemo } from "@/components/text_moon";
import { IconCloudDemo } from "@/components/icon_cloud"
import { ThreeDCardDemo } from "@/components/3d_card";
import { AppleCardsCarouselDemo } from "@/components/apple_cards_carousel_demo"
import { LensDemo } from "@/components/lens-demo";
import { TextGenerateEffectDemo1 } from "@/components/text_generate_1";
import { TextGenerateEffectDemo2 } from "@/components/text_generate_2";
import {SparklesPreview } from "@/components/sparkles-preview";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Banner } from "@/components/Banner";
import { SparklesTextDemo} from "@/components/star_text"
import { SparklesTextDemo1} from "@/components/star_text1"
import { SparklesTextDemo2} from "@/components/star_text2"
import { SparklesTextDemo3} from "@/components/star_text3"
import { WorldMapDemo }from "@/components/world_map_demo"
import { CardContainer }from "@/components/book_container"
import {CollectionDemo} from "@/components/collection_container"
export default function Home() {
  return (
    <div>
      <Banner />
      <SparklesPreview />
      <AnimatedTestimonialsDemo />
      <SparklesTextDemo />
      <IconCloudDemo />
      <SparklesTextDemo1 />
      <CardContainer />
      <SparklesTextDemo2 />
      <AppleCardsCarouselDemo />
      <SparklesTextDemo3 />
      <CollectionDemo />
      <WorldMapDemo />
      
    </div>
  );
}
