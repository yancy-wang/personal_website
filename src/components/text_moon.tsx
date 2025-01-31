import { MorphingText } from "@/components/ui/morphing-text";

const texts = [
  "俱怀逸兴壮思飞",
  "欲上青天览明月",
];

export function MorphingTextDemo() {
  return <MorphingText 
          className="custom-morphing-font font-title"
        texts={texts} />;
}
