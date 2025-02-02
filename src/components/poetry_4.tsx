import Image from 'next/image';
import React from 'react';

export default function PoetryComponent4() {
  return (
    <div className="relative max-w-4xl mx-auto p-6 bg-white dark:bg-white-900 rounded-xl shadow-2xl overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <Image
          src="/img/p3.png"
          alt="Austria"
          layout="fill"
          objectFit="cover"
          className="opacity-60 blur-sm"
        />
      </div>

      {/* Poem Content */}
      <div className="relative z-10 p-8 bg-black bg-opacity-50 rounded-xl text-white shadow-lg">
      <p className="leading-relaxed tracking-wide space-y-4 text-lg md:text-xl italic text-white-600">
Postmodern nihilism manifests as three blades purchased -<br />
One for celestial sacrifice, one for homicide, one for self-immolation<br />
We nostalgia-binge on Nokia-era banditry<br />
Architecting neon-drenched Night Cities from broken SIM cards<br /><br />

The West crusades against Orwellian chains<br />
That strangle humanity's last death-drive thrill<br />
While the East pixelates flesh into red/green QR mandalas<br />
Soon extending this chromatic liturgy to inanimate matter<br />
Even the Big Other gets algorithmically optimized<br /><br />

Cyber-leftist gurus preach domesticated virtue<br />
"Cease your vagrant ways" they sermonize<br />
Yet rogue alchemists smell cadaverine on saints' collars<br />
Urging initiates to taste steel and blood<br />
Those resisting temptation still birth cosmic punchlines<br /><br />

Postmodernity's dialectical carousel spins -<br />
Radicals yearn for conservatism's womb<br />
Traditionalists crave revolution's blade<br />
Love gets conscripted as DMZ<br />
Where all ideologies bludgeon each other senseless<br /><br />

We pack cockroach-meal MREs<br />
And embark into cartographic voids<br />
</p>
<p className="leading-relaxed tracking-wide space-y-4 text-lg md:text-xl">
后现代虚无主义就是你想去买三把刀，一把留着祭天地，一把留着杀人，一把留着自杀。<br />
后现代怀念起诺基亚年代杀人越货的日子，然后逐步建立起夜之城。<br /><br />

西方世界坚决抵制1984里的社会<br />
那扼杀了人们唯一剩下的死亡冲动<br />
东方那边用一个个小矩形将人描成红的和绿的<br />
再过两年物体也这样<br />
试图用科学控制一切<br />
大他者也得取其精华去其糟粕<br /><br />

网左头子希望大家都能当良家子<br />
别再流浪<br />
但却有江湖术士嗅到了良家子身上的死人味<br />
劝其应当杀伐果断刀口舔血<br />
纵使抵御住了术士的诱惑<br />
总有一两个幸运儿会成为命运的玩笑<br /><br />

后现代就是激进的向往着保守<br />
保守的向往着激进<br />
最后把爱推出来当一个中间地带<br />
打得不可开交<br /><br />

带上蟑螂粉末做成的速食<br />
去无人区探险<br />
</p>
      </div>
    </div>
  );
}
