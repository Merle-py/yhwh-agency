
import { useEffect, useRef, useState } from "react";

const Contact = () => {
  const contactRef = useRef<HTMLDivElement>(null);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
  });
  const [formStatus, setFormStatus] = useState<{
    submitted: boolean;
    error: boolean;
    message: string;
  }>({
    submitted: false,
    error: false,
    message: "",
  });

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

    if (contactRef.current) {
      const elements = contactRef.current.querySelectorAll(".animate-element");
      elements.forEach((el) => observer.observe(el));
    }

    return () => {
      if (contactRef.current) {
        const elements = contactRef.current.querySelectorAll(".animate-element");
        elements.forEach((el) => observer.unobserve(el));
      }
    };
  }, []);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Simulate form submission
    setFormStatus({
      submitted: true,
      error: false,
      message: "Mensagem enviada com sucesso! Entraremos em contato em breve.",
    });
    
    // Reset form after 5 seconds
    setTimeout(() => {
      setFormStatus({
        submitted: false,
        error: false,
        message: "",
      });
      setFormData({
        name: "",
        email: "",
        phone: "",
      });
    }, 5000);
  };

  return (
    <section id="contact" ref={contactRef} className="py-24 bg-white relative">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="animate-element opacity-0 animate-fade-in section-title">
            Entre em Contato
          </h2>
          <p className="animate-element opacity-0 animate-fade-in delay-100 section-subtitle">
            Vamos transformar sua presença digital juntos. Fale conosco hoje.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-16 items-center">
          <div className="animate-element opacity-0 animate-slide-in">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label
                  htmlFor="name"
                  className="block text-sm font-medium text-yhwh-brown-dark mb-2"
                >
                  Nome Completo
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 rounded-md border border-yhwh-brown-light/30 focus:border-yhwh-brown-light focus:ring-1 focus:ring-yhwh-brown-light focus:outline-none transition-colors duration-300"
                  placeholder="Seu nome"
                />
              </div>

              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-yhwh-brown-dark mb-2"
                >
                  E-mail
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 rounded-md border border-yhwh-brown-light/30 focus:border-yhwh-brown-light focus:ring-1 focus:ring-yhwh-brown-light focus:outline-none transition-colors duration-300"
                  placeholder="seu.email@exemplo.com"
                />
              </div>

              <div>
                <label
                  htmlFor="phone"
                  className="block text-sm font-medium text-yhwh-brown-dark mb-2"
                >
                  Telefone
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 rounded-md border border-yhwh-brown-light/30 focus:border-yhwh-brown-light focus:ring-1 focus:ring-yhwh-brown-light focus:outline-none transition-colors duration-300"
                  placeholder="(11) 99999-9999"
                />
              </div>

              {formStatus.submitted && (
                <div
                  className={`p-4 rounded-md ${
                    formStatus.error
                      ? "bg-red-100 text-red-700"
                      : "bg-green-100 text-green-700"
                  }`}
                >
                  {formStatus.message}
                </div>
              )}

              <div>
                <button
                  type="submit"
                  className="w-full btn-primary"
                  disabled={formStatus.submitted}
                >
                  {formStatus.submitted ? "Enviado" : "Fale conosco"}
                </button>
              </div>
            </form>
          </div>

          <div className="animate-element opacity-0 animate-slide-in delay-200">
            <div className="bg-yhwh-brown-soft/20 rounded-lg p-8">
              <h3 className="text-2xl font-playfair font-bold text-yhwh-brown-dark mb-6">
                Informações de Contato
              </h3>

              <div className="space-y-6">
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
                        d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                      />
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-playfair font-bold text-yhwh-brown-dark mb-1">
                      Telefone
                    </h4>
                    <p className="text-yhwh-brown-medium">+55 (11) 9999-8888</p>
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
                        d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                      />
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-playfair font-bold text-yhwh-brown-dark mb-1">
                      E-mail
                    </h4>
                    <p className="text-yhwh-brown-medium">contato@yhwhagency.com</p>
                  </div>
                </div>
              </div>

            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
