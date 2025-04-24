
import ServiceLayout from "@/components/ServiceLayout";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";

const SocialMedia = () => {
  const navigate = useNavigate();

  return (
    <ServiceLayout>
      <div className="container mx-auto px-4 py-16 min-h-screen">
        <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
          <div>
            <h1 className="text-4xl font-bold mb-6 text-yhwh-brown-dark font-playfair">
              Social Media
            </h1>
            <p className="text-lg mb-8 text-yhwh-brown-medium">
              Gestão estratégica de redes sociais que gera engajamento real e 
              resultados mensuráveis para sua marca.
            </p>
            <Button 
              className="bg-yhwh-brown-dark hover:bg-yhwh-brown-medium text-white"
              onClick={() => navigate("/#contact")}
            >
              Iniciar Estratégia
            </Button>
          </div>
          <div className="relative">
            <img
              src="/lovable-uploads/photo-1487058792275-0ad4aaf24ca7.png"
              alt="Social Media"
              className="w-full h-auto rounded-lg shadow-xl"
            />
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-16">
          <div className="p-6 bg-yhwh-brown-soft rounded-lg">
            <h3 className="text-xl font-bold mb-4 text-yhwh-brown-dark">Planejamento</h3>
            <p className="text-yhwh-brown-medium">
              Estratégia personalizada de conteúdo para cada rede social.
            </p>
          </div>
          <div className="p-6 bg-yhwh-brown-soft rounded-lg">
            <h3 className="text-xl font-bold mb-4 text-yhwh-brown-dark">Produção</h3>
            <p className="text-yhwh-brown-medium">
              Criação de conteúdo relevante e engajador para sua audiência.
            </p>
          </div>
          <div className="p-6 bg-yhwh-brown-soft rounded-lg">
            <h3 className="text-xl font-bold mb-4 text-yhwh-brown-dark">Gestão</h3>
            <p className="text-yhwh-brown-medium">
              Gerenciamento completo das redes sociais e interação com seguidores.
            </p>
          </div>
        </div>
      </div>
    </ServiceLayout>
  );
};

export default SocialMedia;
