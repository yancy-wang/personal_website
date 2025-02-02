import Image from 'next/image';
import React from 'react';

export default function PoetryComponent5() {
  return (
    <div className="relative max-w-4xl mx-auto p-6 bg-white dark:bg-white-900 rounded-xl shadow-2xl overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <Image
          src="/img/p5.png"
          alt="Riga"
          layout="fill"
          objectFit="cover"
          className="opacity-60 blur-sm"
        />
      </div>

      {/* Poem Content */}
      <div className="relative z-10 p-8 bg-black bg-opacity-50 rounded-xl text-white shadow-lg">
      <p className="leading-relaxed tracking-wide space-y-4 text-lg md:text-xl italic text-white-600">
This moment mirrors eons past<br />
Beyond reach<br />
Beyond sight's frontier<br />
Lingers cosmic auroras that were, and are no more<br /><br />

Eternity exists solely in stolen instants<br />
All destined to become stellar particulates<br />
Our planet but a desert of weathered names<br />
Ideologies - malicious fabrications of despair<br /><br />

The void inhales with glacial indifference<br />
Yet when this truth crystallizes<br />
What conviction withstands entropy's tide?<br />
If even life's pulse proves semiotically void<br /><br />

Should the nocturnal breeze's caress<br />
Be but neural circuits hallucinating grace?<br />
</p>
<p className="leading-relaxed tracking-wide space-y-4 text-lg md:text-xl">
此时就很像那时那刻<br />
就好像在你触及之外<br />
视野之外<br />
有些特别绚烂的东西存在着，存在过。<br /><br />

这世上只有片刻的永恒<br />
一切都注定化为风中沙尘<br />
大地是由风化的姓名们组成的荒芜沙漠<br />
主义和信仰都是不怀好意的绝望谎言<br /><br />

宇宙冰冷无情<br />
但如果一旦接受了这个<br />
那又有什么事值得坚持的呢<br />
倘若连生命本身都没有意义<br /><br />

即使夜风温柔<br />
但连那种温柔难道不也仅仅是一种自我感动的幻觉吗<br />
</p>
      </div>
    </div>
  );
}
