import { useEffect, useState } from "react";

const reviewCards = [
  {
    name: "Paulo Ferreira",
    time: "1 year ago",
    text: "Décio, ótimo atendimento..",
    image: "https://i.pravatar.cc/100?img=1",
  },
  {
    name: "Henry Teixeira",
    time: "1 year ago",
    text: "Gracias Angie por ahorrarme tanto dinero en mis vehículos siempre es un placer verte.",
    image: "https://i.pravatar.cc/100?img=2",
  },
  {
    name: "Rodolfo Vital",
    time: "1 year ago",
    text: "Obrigado pela gentileza e educação em todo atendimento.",
    image: "https://i.pravatar.cc/100?img=3",
  },
  {
    name: "Alex Huerta",
    time: "1 year ago",
    text: "Excellent service, very friendly and professional, thank you Decio.",
    image: "https://i.pravatar.cc/100?img=4",
  },
];

function ReviewsPage() {
  const [startIndex, setStartIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setStartIndex((prev) => (prev + 1) % reviewCards.length);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  // show 4 cards rotating
  const visibleCards = Array.from({ length: 4 }, (_, i) => {
    return reviewCards[(startIndex + i) % reviewCards.length];
  });

  return (
    <section className="bg-[var(--color-page-bg)] pb-14 overflow-hidden">

      <div className="mx-auto w-full max-w-7xl px-6 md:px-10">
       

        {/* HEADER */}
        <div className="mt-16 text-center">
          <p className="text-4xl text-amber-500">★★★★★</p>
          <p className="mt-2 text-2xl font-bold text-[var(--color-text)]">EXCELLENT</p>
          <p className="mt-1 text-sm text-slate-600">
            Based on 2,832 reviews
          </p>

          <p className="mt-2 text-4xl font-semibold">
            <span className="text-[#4285f4]">G</span>
            <span className="text-[#db4437]">o</span>
            <span className="text-[#f4b400]">o</span>
            <span className="text-[#4285f4]">g</span>
            <span className="text-[#0f9d58]">l</span>
            <span className="text-[#db4437]">e</span>
          </p>
        </div>

        {/* CARDS */}
        <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-4 transition-all duration-500">
          {visibleCards.map((card, index) => (
            <article key={index} className="surface-card group relative p-5 transition-all duration-500 hover:scale-105">
              {/* HEADER */}
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <img
                    src={card.image}
                    alt={card.name}
                    className="h-10 w-10 rounded-full object-cover border"
                  />
                  <div>
                    <p className="text-sm font-bold text-[var(--color-text)]">
                      {card.name}
                    </p>
                    <p className="text-xs text-slate-500">{card.time}</p>
                  </div>
                </div>

                <span className="text-xs font-semibold text-[var(--color-primary)]">
                  G
                </span>
              </div>

              {/* STARS */}
              <p className="mt-3 text-lg text-amber-500">★★★★★</p>

              {/* TEXT */}
              <p className="mt-2 text-sm leading-6 text-slate-700">
                {card.text}
              </p>

              {/* HOVER EFFECT */}
              <div className="absolute inset-0 rounded-[var(--radius-card)] bg-gradient-to-tr from-transparent to-blue-50 opacity-0 transition group-hover:opacity-100" />
            </article>
          ))}
        </div>

        <p className="mt-6 text-right text-xs text-slate-500">
          Verified by Trustindex
        </p>
      </div>
    </section>
  );
}

export default ReviewsPage;