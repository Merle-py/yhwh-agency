
import ServiceLayout from "@/components/ServiceLayout";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";

const Branding = () => {
  const navigate = useNavigate();

  return (
    <ServiceLayout>
      <div className="container mx-auto px-4 py-16 min-h-screen">
        <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
          <div>
            <h1 className="text-4xl font-bold mb-6 text-yhwh-brown-dark font-playfair">
              Branding Estratégico
            </h1>
            <p className="text-lg mb-8 text-yhwh-brown-medium">
              Construímos identidades de marca memoráveis que conectam empresas com 
              seu público-alvo. Nossa abordagem estratégica combina criatividade com 
              pesquisa de mercado para resultados impactantes.
            </p>
            <Button 
              className="bg-yhwh-brown-dark hover:bg-yhwh-brown-medium text-white"
              onClick={() => navigate("/#contact")}
            >
              Iniciar Projeto
            </Button>
          </div>
          <div className="relative">
            <img
              src="/lovable-uploads/e39ca635-cba2-47d7-b864-8ae2416e17c8.png"
              alt="Branding"
              className="w-full h-auto rounded-lg shadow-xl"
            />
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-16">
          <div className="p-6 bg-yhwh-brown-soft rounded-lg">
            <h3 className="text-xl font-bold mb-4 text-yhwh-brown-dark">Identidade Visual</h3>
            <p className="text-yhwh-brown-medium">
              Desenvolvimento de logotipos, paletas de cores e elementos visuais únicos.
            </p>
          </div>
          <div className="p-6 bg-yhwh-brown-soft rounded-lg">
            <h3 className="text-xl font-bold mb-4 text-yhwh-brown-dark">Brand Guidelines</h3>
            <p className="text-yhwh-brown-medium">
              Manual completo de identidade visual para aplicação consistente da marca.
            </p>
          </div>
          <div className="p-6 bg-yhwh-brown-soft rounded-lg">
            <h3 className="text-xl font-bold mb-4 text-yhwh-brown-dark">Posicionamento</h3>
            <p className="text-yhwh-brown-medium">
              Estratégia de posicionamento para destacar sua marca no mercado.
            </p>
          </div>
        </div>
      </div>
    </ServiceLayout>
  );
};

export default Branding;
