import React from "react";

export default function Product() {
  return (
    <section className="flex items-center justify-center gap-x-10 md:flex-nowrap flex-wrap-reverse">
      <span className="space-y-2 p-3">
        <h2 className="text-3xl tracking-wide">
          Savor the taste of Rice Krispie treats while <span className="text-[#ee141f]">enjoying an adventure</span>!
        </h2>
        <ul className="p-3 bg-[#00afef] text-white drop-shadow-[5px_4px_0px_rgba(238,20,31,1)]">
          <li className="text-xl tracking-wide">• Perfect On-the-Go Snack</li>
          <li className="text-xl tracking-wide">• Sweet, Crunchy, and Delicious!</li>
          <li className="text-xl tracking-wide">• Fun and Exciting Design for kids</li>
        </ul>
      </span>
      <img
        src="/KrispyKreativesRiceKrispy.png"
        alt="Rice Krispy Spider Man Collaboration"
        className="max-h-[350px] max-w-[350px] m-auto"
      />
    </section>
  );
}
