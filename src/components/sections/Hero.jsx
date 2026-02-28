import React from "react";

const Hero = () => {
  console.log("Hero renderizando");
    return (

    <section
className="h-screen pt-20 bg-cover bg-center flex items-center justify-center text-center relative"      style={{
        backgroundImage:
          "url('https://i0.wp.com/raspberrymag.com/wp-content/uploads/2015/05/Exhibici%C3%B3n-Perfumes-Natura-3.jpg?ssl=1')",
      }}
    >
      <div className="absolute inset-0 bg-black/40"></div>

      <div className="relative z-10 text-white max-w-2xl px-4">
        <h2 className="text-5xl md:text-6xl font-light mb-6">
          Belleza consciente inspirada en la naturaleza
        </h2>

        <p className="text-lg mb-8">
          Descubre productos que cuidan tu piel y el planeta.
        </p>

        <button className="bg-orange-600 hover:bg-green-700 transition px-8 py-3 rounded-full text-lg">
          Explorar colección
        </button>
      </div>
    </section>
  );
};

export default Hero;

