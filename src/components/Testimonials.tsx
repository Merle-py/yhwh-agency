import { useEffect, useRef, useState } from "react";

const testimonials = [
  {
    name: "Carolina Mendes",
    position: "CEO, Lumina Designs",
    testimonial:
      "Trabalhar com a YHWH Agency transformou completamente nossa presença digital. A estratégia personalizada e o branding sofisticado nos posicionaram como referência no mercado. Resultados muito além do esperado.",
    stars: 5,
    image:
      "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=150&h=150",
  },
  {
    name: "Rodrigo Almeida",
    position: "Diretor de Marketing, Ethereal",
    testimonial:
      "Impressionado com a qualidade e precisão das campanhas. A equipe da YHWH Agency compreendeu perfeitamente o DNA da nossa marca e isso se refletiu nos excelentes resultados obtidos com o tráfego pago.",
    stars: 5,
    image:
      "https://images.unsplash.com/photo-1599566150163-29194dcaad36?auto=format&fit=crop&q=80&w=150&h=150",
  },
  {
    name: "Amanda Soares",
    position: "Fundadora, Aura Estudio",
    testimonial:
      "O rebranding realizado pela YHWH Agency revolucionou nossa comunicação. A atenção aos detalhes, o design sofisticado e a estratégia integrada criaram uma imagem que realmente representa nossos valores.",
    stars: 5,
    image:
      "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&q=80&w=150&h=150",
  },
];

const Testimonials = () => {
  const testimonialsRef = useRef<HTMLDivElement>(null);
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev === testimonials.length - 1 ? 0 : prev + 1));
    }, 6000);

    return () => clearInterval(interval);
  }, []);

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

    if (testimonialsRef.current) {
      const elements = testimonialsRef.current.querySelectorAll(
        ".animate-element"
      );
      elements.forEach((el) => observer.observe(el));
    }

    return () => {
      if (testimonialsRef.current) {
        const elements = testimonialsRef.current.querySelectorAll(
          ".animate-element"
        );
        elements.forEach((el) => observer.unobserve(el));
      }
    };
  }, []);

  const renderStars = (count: number) => {
    return Array(5)
      .fill(0)
      .map((_, index) => (
        <svg
          key={index}
          className={`w-5 h-5 ${
            index < count
              ? "text-yhwh-brown-light"
              : "text-yhwh-brown-light/20"
          }`}
          fill="currentColor"
          viewBox="0 0 20 20"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
        </svg>
      ));
  };

  return (
    <section
      id="testimonials"
      ref={testimonialsRef}
      className="py-24 bg-yhwh-brown-soft/30"
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="animate-element opacity-0 animate-fade-in section-title">
            Depoimentos
          </h2>
          <p className="animate-element opacity-0 animate-fade-in delay-100 section-subtitle">
            O que nossos clientes dizem sobre nosso trabalho.
          </p>
        </div>

        <div className="animate-element opacity-0 animate-fade-in delay-200 relative flex flex-col items-center">
          <div className="w-16 h-16 absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-8">
            <svg
              className="w-full h-full text-yhwh-brown-light/20"
              fill="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
            </svg>
          </div>

          <div className="relative overflow-hidden w-full max-w-3xl bg-white rounded-xl shadow-lg p-8 md:p-12">
            <div
              className="flex transition-transform duration-500 ease-in-out"
              style={{
                transform: `translateX(-${current * 100}%)`,
                width: `${testimonials.length * 100}%`,
              }}
            >
              {testimonials.map((testimonial, index) => (
                <div
                  key={index}
                  className="w-full flex-shrink-0 px-4 md:px-8"
                  style={{ minHeight: 210 }}
                >
                  <div className="w-full mb-8">
                    <p className="text-yhwh-brown-medium italic text-lg">
                      "{testimonial.testimonial}"
                    </p>
                  </div>
                  
                  <div className="flex items-center">
                    <div className="mr-4">
                      <img
                        src={testimonial.image}
                        alt={testimonial.name}
                        className="w-16 h-16 rounded-full object-cover border-2 border-yhwh-brown-light"
                      />
                    </div>
                    
                    <div>
                      <h4 className="font-playfair font-bold text-yhwh-brown-dark text-lg">
                        {testimonial.name}
                      </h4>
                      <p className="text-yhwh-brown-medium text-sm mb-1">
                        {testimonial.position}
                      </p>
                      <div className="flex">
                        {renderStars(testimonial.stars)}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="flex justify-center mt-8 space-x-2">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrent(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  current === index
                    ? "bg-yhwh-brown-dark w-8"
                    : "bg-yhwh-brown-light/40"
                }`}
                aria-label={`Ver depoimento ${index + 1}`}
              ></button>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
