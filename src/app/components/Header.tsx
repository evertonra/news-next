import React from "react";

const Header = () => (
  <header className="w-full bg-blue-600 text-white py-4 px-8 shadow-md flex items-center justify-between">
    <h1 className="text-2xl font-bold">Meu Site</h1>
    <nav>
      <ul className="flex gap-4">
        <li>
          <a href="#" className="hover:underline">
            Início
          </a>
        </li>
        <li>
          <a href="#" className="hover:underline">
            Sobre
          </a>
        </li>
        <li>
          <a href="#" className="hover:underline">
            Contato
          </a>
        </li>
      </ul>
    </nav>
  </header>
);

export default Header;
