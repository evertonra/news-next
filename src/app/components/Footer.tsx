"use client";

import React from "react";
import { useHomePage } from "../HomePageContext";
import Image from "next/image";

export default function Footer() {
  const { infos, loading } = useHomePage() as unknown as {
    infos: { settings: { logo_footer: string } };
    loading: boolean;
  };

  if (loading) return <div>Carregando...</div>;

  return (
    <footer>
      <Image
        width={100}
        height={50}
        src={infos.settings.logo_footer}
        alt="Logo do rodapé"
      />
    </footer>
  );
}
