// card-demo.tsx
"use client";
import React from "react";
import { LensDemo } from "./lens-demo";
import { LensDemo1 } from "./lens-demo1";
import { LensDemo2 } from "./lens-demo2";
import { LensDemo3 } from "./lens-demo3";
import { LensDemo4 } from "./lens-demo4";
import { LensDemo5 } from "./lens-demo5";
import { LensDemo6 } from "./lens-demo6";
import { LensDemo7 } from "./lens-demo7";
import { LensDemo8 } from "./lens-demo8";

export function CollectionDemo() {
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      <LensDemo/>
      <LensDemo1/>
      <LensDemo2/>
      <LensDemo3/>
      <LensDemo4/>
      <LensDemo5/>
      <LensDemo6/>
      <LensDemo7/>
      <LensDemo8/>
      {/* 
        */}
      </div>
    </div>
  );
}