
import { useEffect, useRef } from "react";
import { Link } from "react-router-dom";

const serviceItems = [
  {
    title: "Branding",
    description: "Criação e desenvolvimento de marca para estabelecer identidade forte e memorável no mercado.",
    icon: (
      <svg
        className="w-10 h-10 text-yhwh-brown-light"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01"
        />
      </svg>
    ),
  },
  {
    title: "Captação de Conteúdo",
    description: "Produção fotográfica e estratégias de conteúdo personalizadas para engajar e converter seu público-alvo.",
    icon: (
      <svg
        className="w-10 h-10 text-yhwh-brown-light"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"
        />
      </svg>
    ),
  },
  {
    title: "Edição de Vídeo",
    description: "Edição profissional para storytelling visual impactante, elevando a comunicação de sua marca.",
    icon: (
      <svg
        className="w-10 h-10 text-yhwh-brown-light"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z"
        />
      </svg>
    ),
  },
  {
    title: "Rebranding",
    description: "Renovação estratégica de identidade para reposicionar e revitalizar marcas no mercado contemporâneo.",
    icon: (
      <svg
        className="w-10 h-10 text-yhwh-brown-light"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z"
        />
      </svg>
    ),
  },
  {
    title: "Social Media",
    description: "Gestão estratégica de redes sociais para construir comunidade e ampliar presença digital.",
    icon: (
      <svg
        className="w-10 h-10 text-yhwh-brown-light"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
        />
      </svg>
    ),
  },
  {
    title: "Tráfego Pago",
    description: "Estratégias avançadas de anúncios para maximizar conversões e retorno sobre investimento.",
    icon: (
      <svg
        className="w-10 h-10 text-yhwh-brown-light"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6"
        />
      </svg>
    ),
  },
];

const Services = () => {
  const servicesRef = useRef<HTMLDivElement>(null);

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

    if (servicesRef.current) {
      const elements = servicesRef.current.querySelectorAll(".animate-element");
      elements.forEach((el) => observer.observe(el));
    }

    return () => {
      if (servicesRef.current) {
        const elements = servicesRef.current.querySelectorAll(".animate-element");
        elements.forEach((el) => observer.unobserve(el));
      }
    };
  }, []);

  return (
    <section
      id="services"
      ref={servicesRef}
      className="py-24 bg-yhwh-brown-soft/30"
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="animate-element opacity-0 animate-fade-in section-title">
            Nossos Serviços
          </h2>
          <p className="animate-element opacity-0 animate-fade-in delay-100 section-subtitle">
            Soluções digitais completas e integradas para transformar sua presença online.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {serviceItems.map((service, index) => {
            const links = [
              "/servicos/branding",
              "/servicos/captacao",
              "/servicos/edicao",
              "/servicos/rebranding",
              "/servicos/socialmedia",
              "/servicos/trafego",
            ];
            return (
              <div
                key={index}
                className={`animate-element opacity-0 animate-scale-in delay-${
                  (index % 3) * 100
                } service-card group`}
              >
                <div className="mb-6 p-4 inline-block rounded-full bg-yhwh-brown-light/10 group-hover:bg-yhwh-brown-light/20 transition-colors duration-300">
                  {service.icon}
                </div>
                <h3 className="text-xl font-playfair font-bold text-yhwh-brown-dark mb-3">
                  {service.title}
                </h3>
                <p className="text-yhwh-brown-medium text-sm leading-relaxed">
                  {service.description}
                </p>
                <div className="mt-5 pt-5 border-t border-yhwh-brown-light/20">
                  <Link
                    to={links[index]}
                    className="text-yhwh-brown-dark font-medium flex items-center group-hover:text-yhwh-brown-light transition-colors duration-300"
                  >
                    Saiba mais
                    <svg
                      className="w-4 h-4 ml-2 transform group-hover:translate-x-1 transition-transform duration-300"
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
                  </Link>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Services;
