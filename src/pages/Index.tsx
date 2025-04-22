
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Services from "@/components/Services";
import Portfolio from "@/components/Portfolio";
import Testimonials from "@/components/Testimonials";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import ScrollToTop from "@/components/ScrollToTop";
import Loader from "@/components/Loader";
import { useEffect } from "react";

const Index = () => {
  useEffect(() => {
    // Intersection Observer to animate elements when they come into view
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

    // Observe all elements with the .animate-element class
    document.querySelectorAll(".animate-element").forEach((el) => {
      observer.observe(el);
    });

    // Clean up
    return () => {
      document.querySelectorAll(".animate-element").forEach((el) => {
        observer.unobserve(el);
      });
    };
  }, []);

  // Enhanced smooth scroll for all anchor links
  useEffect(() => {
    const handleAnchorClick = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      const closestAnchor = target.closest('a');
      
      if (!closestAnchor) return;
      
      const href = closestAnchor.getAttribute("href");
      if (!href || !href.startsWith("#")) return;
      
      e.preventDefault();
      
      if (href === "#") {
        // Scroll to top
        window.scrollTo({
          top: 0,
          behavior: "smooth",
        });
      } else {
        // Scroll to specific element
        const targetElement = document.querySelector(href);
        if (targetElement) {
          const offsetTop = targetElement.getBoundingClientRect().top + window.scrollY - 100;
          window.scrollTo({
            top: offsetTop,
            behavior: "smooth",
          });
        }
      }
    };

    document.addEventListener("click", handleAnchorClick);

    return () => {
      document.removeEventListener("click", handleAnchorClick);
    };
  }, []);

  return (
    <div className="min-h-screen bg-white">
      <Loader />
      <Header />
      <Hero />
      <About />
      <Services />
      <Portfolio />
      <Testimonials />
      <Contact />
      <Footer />
      <ScrollToTop />
    </div>
  );
};

export default Index;
