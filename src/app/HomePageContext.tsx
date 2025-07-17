"use client";
import React, { createContext, useContext, useEffect, useState } from "react";
import { apiService } from "./services/apiService";

const HomePageContext = createContext(null);

export function useHomePage() {
  return useContext(HomePageContext);
}

export function HomePageProvider({ children }) {
  const [infos, setInfos] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    apiService
      .get("/home-page")
      .then((res) => {
        console.log("res.data.data: ", res.data.data);
        setInfos(res.data.data);
      })
      .catch((err) => {
        console.error("Erro ao buscar /home-page:", err);
      })
      .finally(() => setLoading(false));
  }, []);

  return (
    <HomePageContext.Provider value={{ infos, loading }}>
      {children}
    </HomePageContext.Provider>
  );
}
