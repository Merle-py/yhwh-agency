import React, { useState, useEffect } from "react";

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, targetId: string) => {
    e.preventDefault();
    const element = document.querySelector(targetId);
    if (element) {
      const offsetTop = element.getBoundingClientRect().top + window.scrollY - 100;
      window.scrollTo({
        top: offsetTop,
        behavior: 'smooth'
      });
      setIsMobileMenuOpen(false);
    }
  };

  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-white/95 backdrop-blur-sm shadow-sm py-3"
          : "bg-transparent py-5"
      }`}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center">
        <a 
          href="#" 
          onClick={(e) => {
            e.preventDefault();
            window.scrollTo({
              top: 0,
              behavior: 'smooth'
            });
          }}
          className="text-yhwh-brown-dark flex items-center"
        >
          <img
            src="/lovable-uploads/e39ca635-cba2-47d7-b864-8ae2416e17c8.png"
            alt="YHWH Agency"
            className="h-[145px] w-auto mr-2"
            style={{ maxHeight: 145 }}
          />
        </a>

        <button
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          className="md:hidden text-yhwh-brown-dark focus:outline-none"
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            {isMobileMenuOpen ? (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            ) : (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            )}
          </svg>
        </button>

        <nav className="hidden md:flex items-center space-x-8">
          <a href="#about" className="nav-link" onClick={(e) => handleNavClick(e, '#about')}>
            Sobre
          </a>
          <a href="#services" className="nav-link" onClick={(e) => handleNavClick(e, '#services')}>
            Serviços
          </a>
          <a href="#portfolio" className="nav-link" onClick={(e) => handleNavClick(e, '#portfolio')}>
            Portfólio
          </a>
          <a href="#testimonials" className="nav-link" onClick={(e) => handleNavClick(e, '#testimonials')}>
            Depoimentos
          </a>
          <a href="#contact" className="nav-link" onClick={(e) => handleNavClick(e, '#contact')}>
            Contato
          </a>
          <a href="#contact" className="btn-primary" onClick={(e) => handleNavClick(e, '#contact')}>
            Diagnóstico Gratuito
          </a>
        </nav>
      </div>

      <div
        className={`md:hidden absolute w-full bg-white shadow-md transition-all duration-300 ease-in-out ${
          isMobileMenuOpen ? "max-h-80 py-4" : "max-h-0 overflow-hidden"
        }`}
      >
        <div className="container mx-auto px-4 flex flex-col space-y-4">
          <a
            href="#about"
            className="nav-link p-2"
            onClick={(e) => handleNavClick(e, '#about')}
          >
            Sobre
          </a>
          <a
            href="#services"
            className="nav-link p-2"
            onClick={(e) => handleNavClick(e, '#services')}
          >
            Serviços
          </a>
          <a
            href="#portfolio"
            className="nav-link p-2"
            onClick={(e) => handleNavClick(e, '#portfolio')}
          >
            Portfólio
          </a>
          <a
            href="#testimonials"
            className="nav-link p-2"
            onClick={(e) => handleNavClick(e, '#testimonials')}
          >
            Depoimentos
          </a>
          <a
            href="#contact"
            className="nav-link p-2"
            onClick={(e) => handleNavClick(e, '#contact')}
          >
            Contato
          </a>
          <a
            href="#contact"
            className="btn-primary text-center"
            onClick={(e) => handleNavClick(e, '#contact')}
          >
            Diagnóstico Gratuito
          </a>
        </div>
      </div>
    </header>
  );
};

export default Header;
