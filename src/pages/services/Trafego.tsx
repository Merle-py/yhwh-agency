
import ServiceLayout from "@/components/ServiceLayout";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";

const Trafego = () => {
  const navigate = useNavigate();

  return (
    <ServiceLayout>
      <div className="container mx-auto px-4 py-16 min-h-screen">
        <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
          <div>
            <h1 className="text-4xl font-bold mb-6 text-yhwh-brown-dark font-playfair">
              Tráfego Pago
            </h1>
            <p className="text-lg mb-8 text-yhwh-brown-medium">
              Estratégias avançadas de anúncios online para maximizar seu ROI e 
              alcançar o público certo no momento certo.
            </p>
            <Button 
              className="bg-yhwh-brown-dark hover:bg-yhwh-brown-medium text-white"
              onClick={() => navigate("/#contact")}
            >
              Impulsionar Resultados
            </Button>
          </div>
          <div className="relative">
            <img
              src="/lovable-uploads/photo-1526374965328-7f61d4dc18c5.png"
              alt="Tráfego Pago"
              className="w-full h-auto rounded-lg shadow-xl"
            />
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-16">
          <div className="p-6 bg-yhwh-brown-soft rounded-lg">
            <h3 className="text-xl font-bold mb-4 text-yhwh-brown-dark">Google Ads</h3>
            <p className="text-yhwh-brown-medium">
              Campanhas otimizadas para busca, display e YouTube.
            </p>
          </div>
          <div className="p-6 bg-yhwh-brown-soft rounded-lg">
            <h3 className="text-xl font-bold mb-4 text-yhwh-brown-dark">Meta Ads</h3>
            <p className="text-yhwh-brown-medium">
              Anúncios estratégicos para Facebook, Instagram e WhatsApp.
            </p>
          </div>
          <div className="p-6 bg-yhwh-brown-soft rounded-lg">
            <h3 className="text-xl font-bold mb-4 text-yhwh-brown-dark">Analytics</h3>
            <p className="text-yhwh-brown-medium">
              Monitoramento e otimização contínua das campanhas.
            </p>
          </div>
        </div>
      </div>
    </ServiceLayout>
  );
};

export default Trafego;
