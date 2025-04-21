
import { useState, useEffect } from "react";

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

  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-white/95 backdrop-blur-sm shadow-sm py-3"
          : "bg-transparent py-5"
      }`}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center">
        <a href="#" className="text-yhwh-brown-dark flex items-center">
          <img
            src="/lovable-uploads/b0c3a698-b2cd-40f9-96ef-1a7785603203.png"
            alt="YHWH Agency"
            className="h-10 w-auto mr-2"
            style={{ maxHeight: 40 }}
          />
          {/* Se quiser o texto do lado do logo, adicione abaixo:
          <span className="sr-only">YHWH Agency</span>
          */}
        </a>

        {/* Mobile menu button */}
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

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-8">
          <a href="#about" className="nav-link">
            Sobre
          </a>
          <a href="#services" className="nav-link">
            Serviços
          </a>
          <a href="#portfolio" className="nav-link">
            Portfólio
          </a>
          <a href="#testimonials" className="nav-link">
            Depoimentos
          </a>
          <a href="#contact" className="nav-link">
            Contato
          </a>
          <a href="#contact" className="btn-primary">
            Diagnóstico Gratuito
          </a>
        </nav>
      </div>

      {/* Mobile Navigation */}
      <div
        className={`md:hidden absolute w-full bg-white shadow-md transition-all duration-300 ease-in-out ${
          isMobileMenuOpen ? "max-h-80 py-4" : "max-h-0 overflow-hidden"
        }`}
      >
        <div className="container mx-auto px-4 flex flex-col space-y-4">
          <a
            href="#about"
            className="nav-link p-2"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            Sobre
          </a>
          <a
            href="#services"
            className="nav-link p-2"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            Serviços
          </a>
          <a
            href="#portfolio"
            className="nav-link p-2"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            Portfólio
          </a>
          <a
            href="#testimonials"
            className="nav-link p-2"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            Depoimentos
          </a>
          <a
            href="#contact"
            className="nav-link p-2"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            Contato
          </a>
          <a
            href="#contact"
            className="btn-primary text-center"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            Diagnóstico Gratuito
          </a>
        </div>
      </div>
    </header>
  );
};

export default Header;

