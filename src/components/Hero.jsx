import React from "react";

export default function Hero() {
  return (
    <section className="flex items-center justify-between md:flex-nowrap flex-wrap-reverse">
      <span className="space-y-2 p-3">
        <h1 className="text-5xl tracking-wide">
          Snap, Crackle, Swing <br className="md:block hidden" /> like {" "}
          <span className="text-[#ee141f]">Spiderman</span>!!!
        </h1>
        <a href="https://www.ricekrispies.com/" target="_blank" rel="noreferrer" className="block w-fit p-2 text-lg bg-[#00afef] hover:bg-[#ee141f] text-white tracking-wider drop-shadow-[5px_4px_0px_rgba(238,20,31,1)] hover:drop-shadow-[5px_4px_0px_rgba(0,175,239,1)]">Pre-Order Now!</a>
      </span>
      <img src="/KrispyKreativesHero.png" alt="Spiderman" className="animate-bounce transition-all duration-200 max-h-[400px] max-w-[400px] m-auto"/>
    </section>
  );
}
