"use client";

import React from "react";
import Image from "next/image";

interface InfoItem {
  image: string;
  title: string;
  font_in_home: string;
}

interface Infos {
  contents: InfoItem[];
  title: string; // Nome da categoria, ex: "Economia"
  color: string; // Cor da categoria, ex: "text-green-500"
  font_in_home: string; // Cor da fonte para o título na home
  name: string; // Nome da categoria, usado em page.tsx
}

export type { Infos };

export default function HomeCards({ infos }: { infos: Infos }) {
  const [main, ...others] = infos.contents;
  console.log("infos", infos);

  return (
    <div className="flex flex-col w-full">
      {/* Card principal */}
      {main && (
        <div className="border-b border-slate-300 pb-4 mb-4">
          <div className="relative">
            <Image
              src={main.image}
              alt={main.title}
              width={400}
              height={200}
              className="object-cover rounded-lg w-full max-h-[220px] h-full"
            />
            {/* Gradiente overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent rounded-lg"></div>

            <div className="px-4 absolute bottom-0 z-10 rounded-b-lg ">
              <h3 className="text-white text-lg font-bold">{main.title}</h3>
            </div>
          </div>
        </div>
      )}

      {/* Lista das outras notícias */}
      <div className="flex flex-col gap-4">
        {others.map((item, idx) => (
          <div
            key={idx}
            className="flex items-center gap-3 border-b border-slate-300 pb-4">
            <div className="relative w-1/3 h-[112px]">
              {/* Marcador colorido */}
              <div
                className="absolute top-0 left-0 w-6 h-3 rounded-ss-lg"
                style={{ backgroundColor: infos.font_in_home }}
              />

              {/* Imagem */}
              <Image
                width={128}
                height={60}
                src={item.image}
                alt={item.title}
                className="rounded-lg object-cover w-full h-full"
              />
            </div>
            <h4 className="w-2/3 text-base font-bold line-clamp-3">
              {item.title}
            </h4>
          </div>
        ))}
      </div>
    </div>
  );
}
