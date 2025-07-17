"use client";

import React from "react";
import Image from "next/image";

interface InfoItem {
  image: string;
  title: string;
}

interface Infos {
  contents: InfoItem[];
}

export default function HomeCards({ infos }: { infos: Infos }) {
  return (
    <div>
      <div className="flex gap-8 items-center">
        {infos?.contents?.map((item: InfoItem, idx: number) => (
          <div key={idx} className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="flex flex-col gap-4 items-center w-full border-2 border-red-400">
              <Image
                src={item.image}
                alt={item.title}
                width={250}
                height={80}
                className="rounded-lg object-cover w-full h-full"
              />
              <h2 className="text-xl font-bold text-black">{item.title}</h2>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
