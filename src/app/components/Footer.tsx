import React from "react";

const Footer = () => (
  <footer className="w-full bg-gray-800 text-white py-4 px-8 text-center mt-auto">
    <p>
      &copy; {new Date().getFullYear()} Meu Site. Todos os direitos reservados.
    </p>
  </footer>
);

export default Footer;
