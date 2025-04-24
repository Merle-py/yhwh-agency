import { useEffect, useRef } from "react";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

const testimonials = [
  {
    name: "Maria Santos",
    position: "CEO & Fundadora",
    testimonial:
      "A YHWH Agency transformou completamente nossa presença digital! A estratégia personalizada nos trouxe resultados impressionantes em apenas alguns meses.",
    stars: 5,
    image: "/lovable-uploads/e217a2d9-f645-4361-85c7-900f55659e63.webp",
  },
  {
    name: "João Silva",
    position: "Diretor de Marketing",
    testimonial:
      "Finalmente encontrei uma agência que entende realmente de estratégia digital. O investimento valeu cada centavo pelo retorno que obtivemos.",
    stars: 5,
    image: "/lovable-uploads/e217a2d9-f645-4361-85c7-900f55659e63.webp",
  },
  {
    name: "Ana Costa",
    position: "Empreendedora",
    testimonial:
      "A equipe da YHWH Agency é excepcional! O rebranding da minha marca superou todas as expectativas e os resultados são visíveis.",
    stars: 5,
    image: "/lovable-uploads/e217a2d9-f645-4361-85c7-900f55659e63.webp",
  },
];

const Testimonials = () => {
  const testimonialsRef = useRef<HTMLDivElement>(null);

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
            index < count ? "text-green-500" : "text-gray-300"
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

        <div className="animate-element opacity-0 animate-fade-in delay-200">
          <Carousel
            opts={{
              align: "start",
              loop: true,
            }}
            className="w-full"
          >
            <CarouselContent className="-ml-2 md:-ml-4">
              {testimonials.map((testimonial, index) => (
                <CarouselItem key={index} className="pl-2 md:pl-4 md:basis-1/3">
                  <div className="bg-white rounded-xl p-8 shadow-lg h-full">
                    <div className="flex flex-col items-center text-center h-full">
                      <div className="flex mb-4">
                        {renderStars(testimonial.stars)}
                      </div>
                      <p className="text-lg text-gray-700 italic mb-6 flex-grow">
                        "{testimonial.testimonial}"
                      </p>
                      <Avatar className="w-16 h-16 mb-4">
                        <AvatarImage src={testimonial.image} alt={testimonial.name} />
                        <AvatarFallback>{testimonial.name[0]}</AvatarFallback>
                      </Avatar>
                      <h4 className="font-bold text-lg text-yhwh-brown-dark">
                        {testimonial.name}
                      </h4>
                      <p className="text-sm text-gray-600">
                        {testimonial.position}
                      </p>
                    </div>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <div className="hidden md:block">
              <CarouselPrevious className="absolute -left-12 bg-yhwh-brown-dark hover:bg-yhwh-brown-dark/90 text-white" />
              <CarouselNext className="absolute -right-12 bg-yhwh-brown-dark hover:bg-yhwh-brown-dark/90 text-white" />
            </div>
          </Carousel>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
