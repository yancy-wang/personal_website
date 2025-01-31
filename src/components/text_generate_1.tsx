import { TextGenerateEffect } from "@/components/ui/text-generate-effect";

const words = `关山难越谁悲失路之人
`;

export function TextGenerateEffectDemo1() {
  return <TextGenerateEffect 
  className="custom-text-generate font-title"
  words={words} />;
}
