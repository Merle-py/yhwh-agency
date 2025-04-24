
import ServiceLayout from "@/components/ServiceLayout";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";

const Captacao = () => {
  const navigate = useNavigate();

  return (
    <ServiceLayout>
      <div className="container mx-auto px-4 py-16 min-h-screen">
        <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
          <div>
            <h1 className="text-4xl font-bold mb-6 text-yhwh-brown-dark font-playfair">
              Captação de Conteúdo
            </h1>
            <p className="text-lg mb-8 text-yhwh-brown-medium">
              Produção fotográfica e audiovisual profissional para criar conteúdo 
              autêntico e envolvente que destaca o melhor da sua marca.
            </p>
            <Button 
              className="bg-yhwh-brown-dark hover:bg-yhwh-brown-medium text-white"
              onClick={() => navigate("/#contact")}
            >
              Agendar Sessão
            </Button>
          </div>
          <div className="relative">
            <img
              src="/lovable-uploads/582bd334-7ea1-4e15-b5b1-1d3400c2a3c4.png"
              alt="Captação de Conteúdo"
              className="w-full h-auto rounded-lg shadow-xl"
            />
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-16">
          <div className="p-6 bg-yhwh-brown-soft rounded-lg">
            <h3 className="text-xl font-bold mb-4 text-yhwh-brown-dark">Fotografia</h3>
            <p className="text-yhwh-brown-medium">
              Ensaios fotográficos profissionais para produtos, pessoas e ambientes.
            </p>
          </div>
          <div className="p-6 bg-yhwh-brown-soft rounded-lg">
            <h3 className="text-xl font-bold mb-4 text-yhwh-brown-dark">Vídeos</h3>
            <p className="text-yhwh-brown-medium">
              Produção de vídeos institucionais, comerciais e conteúdo para redes sociais.
            </p>
          </div>
          <div className="p-6 bg-yhwh-brown-soft rounded-lg">
            <h3 className="text-xl font-bold mb-4 text-yhwh-brown-dark">Direção de Arte</h3>
            <p className="text-yhwh-brown-medium">
              Conceituação e direção criativa para produções audiovisuais.
            </p>
          </div>
        </div>
      </div>
    </ServiceLayout>
  );
};

export default Captacao;
