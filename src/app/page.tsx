"use client";

import { useHomePage } from "./HomePageContext";
import HomeCards from "./components/HomeCards";

export default function Home() {
  const { infos, loading } = useHomePage() as unknown as {
    infos: any;
    loading: boolean;
  };
  console.log("infos", infos.home);
  return (
    <div className="w-full min-h-screen">
      {loading ? (
        <div>Carregando dados da home...</div>
      ) : (
        <section className="w-full px-[5%] md:px-[10%] ">
          <div className="flex flex-col w-full gap-8">
            {infos?.home?.map((item: any, idx: number) => (
              <div className="flex flex-col gap-4">
                <h2 className="text-black text-[30px] font-bold">
                  {item.name}
                </h2>
                <HomeCards key={idx} infos={item} />
              </div>
            ))}
          </div>
        </section>
      )}
    </div>
  );
}
