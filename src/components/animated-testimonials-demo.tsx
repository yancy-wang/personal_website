import { AnimatedTestimonials } from "@/components/ui/animated-testimonials";

export function AnimatedTestimonialsDemo() {
  
  const testimonials = [
    {
      quote:
        "Desire is the desire of the Other.",
      name: "Psychoanalysis",
      designation: "Psychoanalysis is the exploration of the human mind, where 'the unconscious is structured like a language' (Jacques Lacan), and our hidden desires slip through the cracks of speech, dreams, and everyday actions. Rooted in Freud's groundbreaking work, it seeks to uncover how 'where id was, there ego shall be' (Sigmund Freud), revealing the buried conflicts between instinct and social constraint. At its core, psychoanalysis teaches us that 'man’s desire is the desire of the Other' (Lacan), shaped not just by personal longing but by the gaze and recognition of others. It delves into the symbolic landscapes where 'truth has the structure of a fiction', exposing how our realities are often constructed through unconscious narratives we inherit and repeat. Ultimately, psychoanalysis is a journey toward self-awareness, where we come to realize that 'I think where I am not, therefore I am where I do not think'—a paradox that captures the very heart of the human psyche.",
      src: "/img/lacan.jpg",
    },
    {
      quote:
        "关山难越谁悲失路之人，萍水相逢尽是他乡之客",
      name: "Poetry",
      designation: "Have you pondered the river and the moon? The waters rush eastward yet remain ever-present, The lunar orb waxes and wanes but never diminishes. Through the lens of transience, heaven-earth alters with every blink; Through the gaze of eternity, all beings—and we—are deathless. Why crave more? All under cosmos belongs to its rightful keeper—What isn't ours, we shan't pluck by a hair's breadth. Yet the river-breeze composing nocturnes at our temples, The mountain-moon painting silver on our eyelids—These are Creation's immortal treasury, Where you and I drink moonlight from the same chalice of infinity. 客亦知夫水与月乎？逝者如斯，而未尝往也；盈虚者如彼，而卒莫消长也。盖将自其变者而观之，则天地曾不能以一瞬；自其不变者而观之，则物与我皆无尽也，而又何羡乎！且夫天地之间，物各有主，苟非吾之所有，虽一毫而莫取。惟江上之清风，与山间之明月，耳得之而为声，目遇之而成色，取之无禁，用之不竭。是造物者之无尽藏也，而吾与子之所共适。",
      src: "/img/calligraph.jpg",
    },
    {
      quote:
        "Wake up, samurai. The city ain't what we burn. It's the cyber-cages where souls rust.",
      name: "Cyberpunk 2077",
      designation: "Cyberpunk 2077: The Neon-Drenched Apotheosis of Gaming as the Ninth Art",
      src: "/img/2077.jpg",
    },
  ];
  return <AnimatedTestimonials testimonials={testimonials} />;
}
