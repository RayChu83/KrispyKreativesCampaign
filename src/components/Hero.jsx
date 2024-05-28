import React from "react";

export default function Hero() {
  return (
    <section className="flex items-center justify-between md:flex-nowrap flex-wrap-reverse">
      <span className="space-y-2 p-3">
        <h1 className="text-5xl tracking-wide">
          Snap, Crackle, Swing <br className="md:block hidden" /> like {" "}
          <span className="text-[#ee141f]">Spiderman</span>!!!
        </h1>
        <button className="p-2 text-lg bg-[#00afef] text-white tracking-wider transition-colors duration-150 drop-shadow-[5px_4px_0px_rgba(238,20,31,1)]">Pre-Order Now!</button>
      </span>
      <img src="/KrispyKreativesHero.png" alt="Spiderman" className="animate-bounce transition-all duration-200 max-h-[400px] max-w-[400px]"/>
    </section>
  );
}
