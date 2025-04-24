
import ServiceLayout from "@/components/ServiceLayout";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";

const Rebranding = () => {
  const navigate = useNavigate();

  return (
    <ServiceLayout>
      <div className="container mx-auto px-4 py-16 min-h-screen">
        <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
          <div>
            <h1 className="text-4xl font-bold mb-6 text-yhwh-brown-dark font-playfair">
              Rebranding Estratégico
            </h1>
            <p className="text-lg mb-8 text-yhwh-brown-medium">
              Revitalize sua marca mantendo sua essência. Nossa expertise em rebranding 
              ajuda empresas a se adaptarem às mudanças do mercado sem perder sua identidade.
            </p>
            <Button 
              className="bg-yhwh-brown-dark hover:bg-yhwh-brown-medium text-white"
              onClick={() => navigate("/#contact")}
            >
              Transformar Marca
            </Button>
          </div>
          <div className="relative">
            <img
              src="/lovable-uploads/1af4660d-8074-4e32-b824-dc7dcdd736df.png"
              alt="Rebranding"
              className="w-full h-auto rounded-lg shadow-xl"
            />
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-16">
          <div className="p-6 bg-yhwh-brown-soft rounded-lg">
            <h3 className="text-xl font-bold mb-4 text-yhwh-brown-dark">Análise de Marca</h3>
            <p className="text-yhwh-brown-medium">
              Diagnóstico completo da situação atual da marca e oportunidades de melhoria.
            </p>
          </div>
          <div className="p-6 bg-yhwh-brown-soft rounded-lg">
            <h3 className="text-xl font-bold mb-4 text-yhwh-brown-dark">Reposicionamento</h3>
            <p className="text-yhwh-brown-medium">
              Estratégia de reposicionamento para conectar com novos públicos.
            </p>
          </div>
          <div className="p-6 bg-yhwh-brown-soft rounded-lg">
            <h3 className="text-xl font-bold mb-4 text-yhwh-brown-dark">Implementação</h3>
            <p className="text-yhwh-brown-medium">
              Execução do rebranding em todos os pontos de contato da marca.
            </p>
          </div>
        </div>
      </div>
    </ServiceLayout>
  );
};

export default Rebranding;
