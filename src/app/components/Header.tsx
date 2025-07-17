"use client";

import React from "react";
import { useHomePage } from "../HomePageContext";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Header() {
  const { infos, loading } = useHomePage();
  const pathname = usePathname();

  if (loading) return <div>Carregando...</div>;

  function slugify(str: string) {
    return str
      .normalize("NFD")
      .replace(/[\u0300-\u036f]/g, "")
      .toLowerCase();
  }

  return (
    <header>
      <div className="bg-blue-950 h-24 w-full px-[5%] md:px-[10%] flex items-center justify-between">
        <Image width={100} height={50} src={infos.settings.logo} />
        <div>
          <ul className="flex gap-6">
            {infos.pages.map((page, index) => {
              const isHome =
                slugify(page.name) === "inicio" ||
                slugify(page.name) === "home";
              const href = isHome ? "/" : `/${slugify(page.name)}/${page.id}`;
              const isActive = pathname === href;

              return (
                <li key={index}>
                  <Link
                    className={`text-white cursor-pointer text-[18px] font-[400] ${
                      isActive ? "border-b-2 border-white" : ""
                    }`}
                    href={href}>
                    {page.name}
                  </Link>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </header>
  );
}
