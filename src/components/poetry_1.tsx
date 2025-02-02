import Image from 'next/image';
import React from 'react';

export default function PoetryComponent1() {
  return (
    <div className="relative max-w-4xl mx-auto p-6 bg-white dark:bg-gray-900 rounded-xl shadow-2xl overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <Image
          src="/img/suomalinna.JPG"
          alt="Suomenlinna"
          layout="fill"
          objectFit="cover"
          className="opacity-60 blur-sm"
        />
      </div>

      {/* Poem Content */}
      <div className="relative z-10 p-8 bg-black bg-opacity-50 rounded-xl text-white shadow-lg">
        <p className="leading-relaxed tracking-wide space-y-4 text-lg md:text-xl">
          They say the West holds Pure Lands of bliss<br />
          And Suomenlinna in late summer's embrace<br />
          Should future souls inquire of my cherished isle<br />
          I shall breathe only his name<br /><br />

          Were I to confess to the world<br />
          Our first kiss on the Ferris wheel tasted of awkwardness<br />
          That moment absurd as folktales<br />
          Yet still I crave love's whisper in this mortal coil<br />
          A transient reprieve from life's fabrications<br />
          Where past and future dissolve<br />
          Leaving only your essence<br /><br />

          At ground zero of the atomic bloom<br />
          I witnessed our souls merge like yin and yang<br />
          An instant of cosmic rebirth -<br />
          Pandora's vessel spilled not despair, but hope<br />
          Hope woven through language's tapestry<br />
          Humanity's pilgrimage from primal sands<br />
          Beneath ancient moonlight's vigil<br /><br />

          Echoes of discord rise as skyscrapers pierce clouds<br />
          Monoliths that defy deconstruction<br />
          We feign indifference, blaming voids in others<br />
          Pretending you forgot what I never recalled<br />
          Centuries pass yet patterns hold<br />
          If reincarnation's wheel should spin<br />
          Lovers orbit eternal near-misses<br />
          Through aeons unchanged
        </p>
        <p className="leading-relaxed tracking-wide space-y-4 text-lg md:text-xl">
据说西方有极乐世界<br />
有夏末的芬兰堡<br />
倘若今后有人问我最爱的小岛<br />
要说他的名字<br /><br />

倘若我告诉世人<br />
摩天轮上的初吻只觉得尴尬<br />
那荒唐得像个谎言<br />
却还是希望在这个世间有些许的爱存在<br /><br />

似乎能在一瞬间忘记这世间所有的谎言<br />
甚至忘记了过去未来<br />
现在只有你了<br /><br />

最后处在原子弹核爆的中心<br />
我看见我们好像阴阳交融<br />
然后是天地重启亦或是世界初开的一瞬<br /><br />

潘多拉的盒子里是希望<br />
希望是语言是符号<br />
人类自蛮荒的沙滩上<br />
远古的月光下走来<br /><br />

远处传来声音<br />
开始误会猜忌<br />
高楼大厦耸立<br />
让人无法解构<br /><br />

我们骗自己<br />
那是对方的缺失<br />
不是我的<br />
假装你忘了我也从来没有记起<br /><br />

即使几百年前也是这样<br />
如果有什么轮回的话<br />
爱人们总是会错过<br />
亘古不变
</p>
      </div>
    </div>
  );
}
