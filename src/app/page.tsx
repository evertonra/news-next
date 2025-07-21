"use client";

import { useHomePage } from "./HomePageContext";
import HomeCards, { type Infos } from "./components/HomeCards";

export default function Home() {
  const { infos, loading } = useHomePage() as unknown as {
    infos: { home: Infos[] };
    loading: boolean;
  };
  if (infos && infos.home) {
    console.log("infos", infos.home);
  }
  return (
    <div className="w-full min-h-screen">
      {loading ? (
        <div>Carregando dados da home...</div>
      ) : (
        <section className="w-full px-[5%] md:px-[10%] mt-4">
          <div className="grid grid-cols-1 lg:grid-cols-3 w-full gap-8">
            {infos?.home?.map((item, idx) => (
              <div className="flex flex-col gap-4 " key={idx}>
                <h2
                  className="text-3xl font-bold"
                  style={{ color: item.font_in_home }}>
                  {item.name}
                </h2>

                <HomeCards infos={item} />
              </div>
            ))}
          </div>
        </section>
      )}
    </div>
  );
}
