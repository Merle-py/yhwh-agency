
import { useEffect, useRef, useState } from "react";

const portfolioItems = [
  {
    title: "Lumina Branding",
    category: "Branding",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80",
  },
  {
    title: "Ethereal Collection",
    category: "Captação de Conteúdo",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80",
  },
  {
    title: "Aura Social",
    category: "Social Media",
    image: "https://images.unsplash.com/photo-1581090464777-f3220bbe1b8b?auto=format&fit=crop&q=80",
  },
  {
    title: "Elixir Rebranding",
    category: "Rebranding",
    image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&q=80",
  },
  {
    title: "Serpent Films",
    category: "Edição de Vídeo",
    image: "https://images.unsplash.com/photo-1605810230434-7631ac76ec81?auto=format&fit=crop&q=80",
  },
  {
    title: "Crystal Campaigns",
    category: "Tráfego Pago",
    image: "https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7?auto=format&fit=crop&q=80",
  },
];

const Portfolio = () => {
  const portfolioRef = useRef<HTMLDivElement>(null);
  const [filter, setFilter] = useState("all");
  const [filteredItems, setFilteredItems] = useState(portfolioItems);

  useEffect(() => {
    if (filter === "all") {
      setFilteredItems(portfolioItems);
    } else {
      setFilteredItems(
        portfolioItems.filter((item) => item.category === filter)
      );
    }
  }, [filter]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("opacity-100");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1 }
    );

    if (portfolioRef.current) {
      const elements = portfolioRef.current.querySelectorAll(".animate-element");
      elements.forEach((el) => observer.observe(el));
    }

    return () => {
      if (portfolioRef.current) {
        const elements = portfolioRef.current.querySelectorAll(".animate-element");
        elements.forEach((el) => observer.unobserve(el));
      }
    };
  }, []);

  const categories = ["all", ...new Set(portfolioItems.map((item) => item.category))];

  return (
    <section id="portfolio" ref={portfolioRef} className="py-24 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="animate-element opacity-0 animate-fade-in section-title">
            Nosso Portfólio
          </h2>
          <p className="animate-element opacity-0 animate-fade-in delay-100 section-subtitle">
            Conheça alguns dos nossos projetos e cases de sucesso.
          </p>
        </div>

        <div className="animate-element opacity-0 animate-fade-in delay-200 flex flex-wrap justify-center mb-12 gap-2">
          {categories.map((category, index) => (
            <button
              key={index}
              onClick={() => setFilter(category)}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                filter === category
                  ? "bg-yhwh-brown-dark text-white"
                  : "bg-yhwh-brown-light/10 text-yhwh-brown-dark hover:bg-yhwh-brown-light/20"
              }`}
            >
              {category === "all" ? "Todos" : category}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredItems.map((item, index) => (
            <div
              key={index}
              className="animate-element opacity-0 animate-scale-in group"
              style={{ animationDelay: `${100 * index}ms` }}
            >
              <div className="relative overflow-hidden rounded-lg shadow-md">
                <div className="absolute inset-0 bg-gradient-to-t from-yhwh-brown-dark to-transparent opacity-0 group-hover:opacity-70 transition-opacity duration-300 z-10"></div>
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-72 object-cover transform group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 flex flex-col justify-end p-6 translate-y-8 group-hover:translate-y-0 opacity-0 group-hover:opacity-100 transition-all duration-300 z-20">
                  <span className="text-yhwh-brown-light text-sm font-medium">
                    {item.category}
                  </span>
                  <h3 className="text-white text-xl font-playfair font-bold">
                    {item.title}
                  </h3>
                  <a 
                    href="#" 
                    className="mt-3 inline-flex items-center text-white"
                  >
                    Ver Projeto
                    <svg
                      className="w-4 h-4 ml-2"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M14 5l7 7m0 0l-7 7m7-7H3"
                      />
                    </svg>
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
