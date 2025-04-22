import { useEffect, useRef } from "react";
import { Button } from "@/components/ui/button";
import { useIsMobile } from "@/hooks/use-mobile";

const Hero = () => {
  const heroRef = useRef<HTMLDivElement>(null);
  const isMobile = useIsMobile();

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

    if (heroRef.current) {
      const elements = heroRef.current.querySelectorAll(".animate-element");
      elements.forEach((el) => observer.observe(el));
    }

    return () => {
      if (heroRef.current) {
        const elements = heroRef.current.querySelectorAll(".animate-element");
        elements.forEach((el) => observer.unobserve(el));
      }
    };
  }, []);

  return (
    <section 
      ref={heroRef}
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-yhwh-brown-soft"
      style={{
        backgroundImage: "linear-gradient(to right, rgba(255,255,255,0.7), rgba(255,255,255,0.6)), url('https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?auto=format&fit=crop&q=80')",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="absolute inset-0 bg-gradient-to-r from-yhwh-white/95 to-yhwh-white/45 z-0"></div>
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center my-16 pt-20">
        <h2 className="animate-element opacity-0 animate-fade-in text-5xl md:text-6xl lg:text-7xl font-playfair font-bold text-yhwh-brown-dark leading-tight mb-6">
          Transformamos <span className="text-yhwh-brown-light">marcas</span> em<br />
          <span className="italic">referências</span> digitais
        </h2>
        
        <p className="animate-element opacity-0 animate-fade-in delay-200 text-xl md:text-2xl text-yhwh-brown-medium max-w-3xl mx-auto mb-10 leading-relaxed">
          Estratégias personalizadas e resultados excepcionais 
          para marcas que buscam autoridade e inovação.
        </p>
        
        <div className="animate-element opacity-0 animate-fade-in delay-300">
          <a 
            href="#contact" 
            className={`btn-primary text-lg px-8 py-4 rounded-md shadow-lg hover:shadow-xl inline-block
              ${isMobile ? 'w-full' : ''}
            `}
            style={isMobile ? { maxWidth: '100%', width: '100%' } : {}}
          >
            Solicite um diagnóstico gratuito
          </a>
        </div>
        
        <div className="animate-element opacity-0 animate-fade-in delay-400 mt-24 md:mt-32 flex flex-wrap justify-center gap-12">
          <div className="text-center">
            <p className="text-yhwh-brown-dark/60 uppercase text-sm tracking-wider mb-1">Experiência</p>
            <p className="text-4xl font-playfair font-bold text-yhwh-brown-dark">+2 Anos</p>
          </div>
          <div className="text-center">
            <p className="text-yhwh-brown-dark/60 uppercase text-sm tracking-wider mb-1">Clientes</p>
            <p className="text-4xl font-playfair font-bold text-yhwh-brown-dark">+100</p>
          </div>
          <div className="text-center">
            <p className="text-yhwh-brown-dark/60 uppercase text-sm tracking-wider mb-1">Projetos</p>
            <p className="text-4xl font-playfair font-bold text-yhwh-brown-dark">+300</p>
          </div>
        </div>
      </div>
      
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <a href="#about" className="text-yhwh-brown-dark/70 hover:text-yhwh-brown-dark transition-colors">
          <svg
            className="w-8 h-8"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M19 14l-7 7m0 0l-7-7m7 7V3"
            />
          </svg>
        </a>
      </div>
    </section>
  );
};

export default Hero;
