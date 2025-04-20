
import { useEffect, useRef } from "react";

const About = () => {
  const aboutRef = useRef<HTMLDivElement>(null);

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

    if (aboutRef.current) {
      const elements = aboutRef.current.querySelectorAll(".animate-element");
      elements.forEach((el) => observer.observe(el));
    }

    return () => {
      if (aboutRef.current) {
        const elements = aboutRef.current.querySelectorAll(".animate-element");
        elements.forEach((el) => observer.unobserve(el));
      }
    };
  }, []);

  return (
    <section
      id="about"
      ref={aboutRef}
      className="py-24 bg-white"
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="animate-element opacity-0 animate-fade-in section-title">
            Sobre Nós
          </h2>
          <p className="animate-element opacity-0 animate-fade-in delay-100 section-subtitle">
            Somos uma agência de marketing premium focada em transformar marcas através de estratégias exclusivas e inovadoras.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="animate-element opacity-0 animate-slide-in">
            <div className="relative">
              <div className="absolute -top-8 -left-8 w-48 h-48 bg-yhwh-brown-light/10 rounded-lg z-0"></div>
              <div className="relative z-10 bg-white p-6 rounded-lg shadow-xl">
                <img
                  src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&q=80"
                  alt="YHWH Agency Team"
                  className="w-full h-auto rounded-lg"
                />
              </div>
              <div className="absolute -bottom-8 -right-8 w-64 h-32 bg-yhwh-brown-dark/10 rounded-lg z-0"></div>
            </div>
          </div>

          <div className="animate-element opacity-0 animate-slide-in delay-200">
            <h3 className="text-2xl md:text-3xl font-playfair font-bold text-yhwh-brown-dark mb-6">
              Nossa Missão é Elevar sua Marca ao Próximo Nível
            </h3>
            <p className="text-yhwh-brown-medium mb-6 leading-relaxed">
              Na YHWH Agency, não criamos apenas campanhas – construímos legados digitais. Nosso time combina expertise estratégica, visão criativa e execução técnica precisa para transformar a presença de marca dos nossos clientes.
            </p>
            <p className="text-yhwh-brown-medium mb-10 leading-relaxed">
              Trabalhamos com marcas que buscam excelência e diferenciação em um mercado altamente competitivo. Nossa abordagem personalizada garante que cada solução seja tão única quanto a visão de nossos clientes.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div className="flex items-start">
                <div className="bg-yhwh-brown-light/10 rounded-full p-3 mr-4">
                  <svg
                    className="w-6 h-6 text-yhwh-brown-dark"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2"
                    />
                  </svg>
                </div>
                <div>
                  <h4 className="font-playfair font-bold text-yhwh-brown-dark mb-2">
                    Personalização Estratégica
                  </h4>
                  <p className="text-yhwh-brown-medium text-sm">
                    Soluções feitas sob medida para os objetivos específicos de cada marca.
                  </p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="bg-yhwh-brown-light/10 rounded-full p-3 mr-4">
                  <svg
                    className="w-6 h-6 text-yhwh-brown-dark"
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
                </div>
                <div>
                  <h4 className="font-playfair font-bold text-yhwh-brown-dark mb-2">
                    Resultados Mensuráveis
                  </h4>
                  <p className="text-yhwh-brown-medium text-sm">
                    Análises detalhadas e estratégias baseadas em dados para máximo retorno.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
