import React from "react";

export default function Advertisement() {
  return (
    <section className="flex gap-x-10 md:flex-nowrap flex-wrap space-y-2">
      <video
        width="320"
        height="240"
        className="rounded-xl drop-shadow-[7px_6px_0px_rgba(0,175,239,1)] m-auto"
        poster="/KrispyKreativesThumbnail.png"
        controls
      >
        <source src="/KrispyKreativeAdvertisement.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      <span className="p-3">
        <h1 className="text-4xl flex items-center gap-4 tracking-wide flex-wrap">
          <span className="bg-[#ee141f] text-white p-2 whitespace-nowrap">
            Spiderman
          </span>{" "}
          X {"  "}
          <span className="bg-[#00afef] text-white p-2 whitespace-nowrap">
            Rice Krispies Treats
          </span>
        </h1>
        <p className="tracking-wide text-lg">October 2024 - February 2025</p>
        <p className="tracking-wider text-xl">
          Collaborating Spider-Man with Rice Krispies evokes nostalgia and
          emotional connections for adults while providing fun and relatability
          for kids. This partnership bridges generations, making the Rice
          Krispies experience more enjoyable and exciting for busy families,
          enhancing the brand's appeal and creating shared family moments. This
          commercial will be advertised on websites such as Instagram, Tiktok,
          and Youtube.
        </p>
      </span>
    </section>
  );
}
