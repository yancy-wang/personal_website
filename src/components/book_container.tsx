import React from "react";
import { ThreeDCardDemo } from "@/components/3d_card";

export function CardContainer() {
  return (
    <div className="card-container">
      <ThreeDCardDemo 
        title="An introductory dictionarybof Lacanian psychoanalysis"
        description={`Dylan Evans’ An Introductory Dictionary of Lacanian Psychoanalysis is an essential guide to deciphering Lacan’s notoriously dense terminology, serving students, scholars, and clinicians.

        Structure: Alphabetical entries (e.g., Mirror Stage, Symbolic Order, objet petit a) blend concise definitions with Freudian, Hegelian, and Saussurean contexts.
        
        Clarity & Critique: Explains contradictions (e.g., the evolving Real) without oversimplification.
        
        Interconnectedness: Cross-references (e.g., desire ↔ lack) mirror Lacan’s theoretical web.
        
        Context: Links Lacan’s reinvention of Freud’s Oedipus complex to linguistics and philosophy.
        
        Practicality: Addresses clinical challenges and critiques, bridg
        `}
        imageUrl="/img/lacan_dic.png" // Local image
        link="https://archive.org/details/an-introductory-dictionary-of-lacanian-psychoanalysis_202006"
      />

      <ThreeDCardDemo
        title="Écrits: The First Complete Edition in English, Jacques Lacan"
        description={`Jacques Lacan's Écrits is a seminal collection consolidating his groundbreaking contributions to psychoanalysis, linguistics, and philosophy.

1. The Mirror Stage: Human subjectivity starts with the recognition of self-image, forming the ego through illusion.

2. Symbolic Order & Language: The unconscious is structured like a language, shaped by signifiers and social norms.

3. The Real: Represents trauma and the unspeakable void beyond language.

4. Desire & Object a: Desire is driven by the unattainable, an endless pursuit fueled by 'objet petit a'.      

5. Interdisciplinary Reach: Lacan bridges psychoanalysis with philosophy, literature, and mathematics.          `}
        imageUrl="/img/Ecrits_lacan.jpeg" // Local image
        link="https://archive.org/details/ecritsfirstcompl0000laca/page/n7/mode/2up"
      />

      <ThreeDCardDemo
        title="Enjoy Your Symptom!"
        description={`Slavoj Žižek's Enjoy Your Symptom! is a provocative exploration of Lacanian psychoanalysis through the lens of popular culture, film, and philosophy.

        Symptom & Enjoyment: Žižek redefines the symptom as a source of enjoyment (jouissance), revealing how it structures subjectivity beyond mere pathology.
        
        Ideology Critique: Drawing from Marx and Lacan, he shows how ideology operates unconsciously, shaping desires and fantasies in daily life.
        
        Cinema as Theory: Films by Hitchcock, Lynch, and Tarkovsky become case studies to illustrate complex psychoanalytic concepts.
        
        The Real: Žižek explores the traumatic kernel of the Real, which disrupts symbolic coherence and exposes hidden truths.
        
        Paradox & Humor: Blending high theory with pop culture, Žižek’s style challenges conventional thinking with irony and wit.`}
        imageUrl="/img/enjoy_zizek.png" // Local image
        link="https://archive.org/details/enjoyyoursymptom0000zize"
      />

      <ThreeDCardDemo
        title="Phenomenology of Spirit"
        description={`G.W.F. Hegel's Phenomenology of Spirit is a foundational work in German idealism, tracing the development of human consciousness toward absolute knowledge.

        Sense-Certainty to Self-Consciousness: Hegel shows how immediate experience evolves into self-awareness through dialectical contradictions.
        
        Master-Slave Dialectic: A key moment where self-consciousness emerges through struggle, recognition, and the dynamics of power.
        
        Reason & Spirit: Consciousness transcends individuality, realizing itself within social, cultural, and historical contexts as 'Spirit' (Geist).
        
        The Unhappy Consciousness: Explores internal division, where individuals confront the gap between finite existence and infinite ideals.
        
        Absolute Knowledge: The culmination of consciousness’s journey, achieving self-realization through the synthesis of thought, experience, and history.`}
        imageUrl="/img/hegel.png"
        link="https://archive.org/details/hegelsphenomenol0000heid"
      />

      <ThreeDCardDemo
        title="Northern School Tomb Raiding Chronicles（北派盗墓笔记）"
        description={`“寻龙分金看缠山，一重缠是一重关” Northern School Tomb Raiders is a gripping Chinese novel series delving into the clandestine world of tomb robbing, blending folklore, history, and moral ambiguity.

        Northern School Techniques: Focuses on pragmatic methods like soil analysis with the Luoyang Spade, contrasting the South’s mystical feng shui.
        
        Jiangshi & Traps: Teams battle reanimated corpses (jiangshi) and ancient mechanisms guarding tombs.
        
        Code of Honor: “Take sparingly, respect the dead” – a fragile ethics amidst greed and survival.
        
        Brotherhood & Betrayal: Loyalties fracture as hunters vie for relics tied to dynastic secrets.
        
        Cultural Layers: Tombs mirror China’s history, from Warring States stratagems to Qing decadence.`}
        imageUrl="/img/bp.jpg"
        link="https://fanqienovel.com/reader/6985746826607788574"
      />

      <ThreeDCardDemo
        title="The Ming Dynasty Chronicles"
        description={`"The Ming Dynasty Chronicles" is a captivating historical narrative that delves into the rise and fall of the Ming dynasty, offering rich insights into its emperors, politics, and key events.

        Founding of the Ming: Chronicles Zhu Yuanzhang’s journey from a peasant rebel to founding emperor, establishing strong centralized rule.
        
        Court Intrigue & Power Struggles: Explores the complexities of imperial politics, including factional conflicts, eunuch influence, and palace intrigue.
        
        Emperors & Their Legacies: Analyzes the reigns of notable emperors, from the capable Yongle to the enigmatic Wanli, highlighting their governance styles.
        
        Military Campaigns & Exploration: Covers epic battles, the defense against Mongol threats, and Zheng He’s maritime voyages, showcasing Ming’s global reach.
        
        Decline & Fall: Examines the dynasty’s gradual decay due to corruption, fiscal crises, and rebellion, leading to its dramatic collapse in the 17th century.`}
        imageUrl="/img/mc.png"
        link="https://m.mingchaonaxieshier.com/"
      />
    </div>
  );
}
