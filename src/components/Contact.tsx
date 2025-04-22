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
    setFormStatus({
      submitted: true,
      error: false,
      message: "Mensagem enviada com sucesso! Entraremos em contato em breve.",
    });
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
            Entre em contato
          </h2>
          <p className="animate-element opacity-0 animate-fade-in delay-100 section-subtitle">
            Vamos transformar sua presença digital juntos. Fale conosco hoje.
          </p>
        </div>

        <div className="flex justify-center">
          <div className="animate-element opacity-0 animate-slide-in w-full max-w-2xl">
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
        </div>
      </div>
    </section>
  );
};

export default Contact;
