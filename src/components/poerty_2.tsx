import Image from 'next/image';
import React from 'react';

export default function PoetryComponent2() {
  return (
    <div className="relative max-w-4xl mx-auto p-6 bg-white dark:bg-gray-900 rounded-xl shadow-2xl overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <Image
          src="/img/p2.JPG"
          alt="Suomenlinna"
          layout="fill"
          objectFit="cover"
          className="opacity-60 blur-sm"
        />
      </div>

      {/* Poem Content */}
      <div className="relative z-10 p-8 bg-black bg-opacity-50 rounded-xl text-white shadow-lg">
      <p className="leading-relaxed tracking-wide space-y-4 text-lg md:text-xl">
Loneliness is luxury reserved for the wealthy<br />
Those scorched by poverty<br />
Need only gaze at newborn sprouts<br />
At this sky - blue yet ash-grey<br /><br />

Sunlight permeates<br />
You feel strength<br />
Knowing others share this view<br />
No superiority<br />
Only equality in this breath<br /><br />

Merely watching this firmament<br />
The traversing sparrows<br />
High-soaring ravens<br />
Mourning spring's departure with autumn's sigh<br />
Finally understanding why we learn language<br /><br />

Language that forges social strata<br />
Breeds pain, war, tears<br />
Yet for shared symbolic resonance<br />
We defy mortality<br /><br />

Death bequeaths love<br />
Death alone is freedom<br />
Death becomes hope<br />
I adore those who court death to truly live<br /><br />

Afternoon sweat on skin<br />
Left unblotted<br />
Meaningless, utterly meaningless<br />
To die freely<br />
To live voluptuously<br /><br />

We exist in pure poverty<br />
Death remains the only certainty<br />
Within linguistic constructs<br />
Beyond semantic prisons<br />
</p>
<p className="leading-relaxed tracking-wide space-y-4 text-lg md:text-xl">
孤独是留给有钱人的<br />
赤贫的人<br />
光是看着新发的芽<br />
这蓝却又灰蒙的天<br /><br />

阳光渗入的<br />
你感到力量<br />
有人和你一同望着<br />
没有优越感<br />
此刻都平等了<br /><br />

光是看着这天空<br />
越过的飞鸟<br />
高飞的渡鸦<br />
感叹起春去秋来<br />
终于明白了为什么要学习语言<br /><br />

语言构造了阶级<br />
痛苦战争泪水<br />
但为了那一份相同的意象<br />
对抗死亡<br /><br />

死亡寄予了爱<br />
死亡是唯一自由的<br />
死亡是希望<br />
我喜欢向死而生的人<br /><br />

午后皮肤上的汗<br />
他也不擦<br />
无意义无意义<br />
自由地死<br />
享乐地生<br /><br />

我们赤贫存粹<br />
死亡是唯一可以把握的<br />
在语言里<br />
在语言外<br />
</p>
      </div>
    </div>
  );
}
