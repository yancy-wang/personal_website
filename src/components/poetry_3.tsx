import Image from 'next/image';
import React from 'react';

export default function PoetryComponent3() {
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
The dream of a summer cabin cools my bourgeois soul<br />
Though lately I suppress this fervor with Marxist chic<br />
When denied class mobility, one learns to sway with winds<br /><br />

No seaside vistas for this retreat - bad feng shui<br />
In Finland where dark currents swirl beneath midnight sun<br />
Let there be forests to feed his axe's hungry swing<br />
Bronzed torso bending to split timber's secret rings<br /><br />

I long to play Persephone in this Nordic underworld<br />
Where sweat-salted blades might kiss my waiting palm<br />
He lets droplets jewel his brow like liquid amber<br />
Come Monday, all sawdust scrubbed from corporate skin<br /><br />

His suit armor still steaming from boardroom colosseum<br />
We revel in bloodstained laurels yet gag at losers' stench<br />
Their entrails garland skyscrapers - urban viscera<br /><br />

Hometown memories now condiment jars on shelf<br />
"Swallow these giblets," they whisper, "to ease the gnawing"<br />
</p>
<p className="leading-relaxed tracking-wide space-y-4 text-lg md:text-xl">
梦想有一个夏日消暑的小屋<br />
这好像是我那中产阶级梦的一部分<br />
但最近我压制得很狂热<br />
马克思主义似乎成了某种时尚单品<br />
做不了中产至少做个墙头草<br /><br />

这个小屋不需要面朝大海春暖花开<br />
因为这种似乎风水不好<br />
容易自杀<br />
特别是在芬兰这种自杀率已经很高的地界<br />
大概是需要很多树的<br />
因为我很喜欢看他裸着上身<br />
劈开木头<br /><br />

我想去捣蛋<br />
斧头或许会落在我的掌心<br />
汗水从他的额间留下<br />
他也不擦<br />
但周一之前他会弄得干干净净的<br />
穿上商业律师的西装<br /><br />

好像是修罗场里刚厮杀出来<br />
一面为修罗场的光荣榜沾沾自喜<br />
一面受不了修罗场的输家<br />
他们好肮脏<br />
内脏什么的全部挂在外面<br /><br />

故乡的话好像就像调味品<br />
叫你吃掉这些杂碎<br />
好受一点<br />
</p>
      </div>
    </div>
  );
}
