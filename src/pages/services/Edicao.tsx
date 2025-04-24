
import ServiceLayout from "@/components/ServiceLayout";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";

const Edicao = () => {
  const navigate = useNavigate();

  return (
    <ServiceLayout>
      <div className="container mx-auto px-4 py-16 min-h-screen">
        <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
          <div>
            <h1 className="text-4xl font-bold mb-6 text-yhwh-brown-dark font-playfair">
              Edição de Vídeo Profissional
            </h1>
            <p className="text-lg mb-8 text-yhwh-brown-medium">
              Transforme sua história em uma experiência visual impactante. Nossa equipe de editores 
              especializados combina criatividade e técnica para criar vídeos que cativam e engajam 
              seu público-alvo.
            </p>
            <Button 
              className="bg-yhwh-brown-dark hover:bg-yhwh-brown-medium text-white"
              onClick={() => navigate("/#contact")}
            >
              Solicitar Orçamento
            </Button>
          </div>
          <div className="relative">
            <img
              src="/lovable-uploads/b0c3a698-b2cd-40f9-96ef-1a7785603203.png"
              alt="Edição de Vídeo"
              className="w-full h-auto rounded-lg shadow-xl"
            />
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-16">
          <div className="p-6 bg-yhwh-brown-soft rounded-lg">
            <h3 className="text-xl font-bold mb-4 text-yhwh-brown-dark">Edição Criativa</h3>
            <p className="text-yhwh-brown-medium">
              Narrativas envolventes através de técnicas avançadas de edição e 
              efeitos visuais personalizados.
            </p>
          </div>
          <div className="p-6 bg-yhwh-brown-soft rounded-lg">
            <h3 className="text-xl font-bold mb-4 text-yhwh-brown-dark">Colorização Profissional</h3>
            <p className="text-yhwh-brown-medium">
              Correção e gradação de cores para criar a atmosfera perfeita para 
              sua mensagem.
            </p>
          </div>
          <div className="p-6 bg-yhwh-brown-soft rounded-lg">
            <h3 className="text-xl font-bold mb-4 text-yhwh-brown-dark">Otimização para Redes</h3>
            <p className="text-yhwh-brown-medium">
              Adaptação do conteúdo para diferentes plataformas e formatos 
              de mídia social.
            </p>
          </div>
        </div>

        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold mb-8 text-yhwh-brown-dark font-playfair">
            Por que escolher nosso serviço de edição?
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white p-8 rounded-lg shadow-lg">
              <h3 className="text-xl font-bold mb-4 text-yhwh-brown-dark">Expertise Técnica</h3>
              <p className="text-yhwh-brown-medium">
                Nossa equipe domina as mais recentes ferramentas e técnicas de edição 
                para entregar resultados excepcionais.
              </p>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-lg">
              <h3 className="text-xl font-bold mb-4 text-yhwh-brown-dark">Atenção aos Detalhes</h3>
              <p className="text-yhwh-brown-medium">
                Cuidado meticuloso com cada frame para garantir a mais alta qualidade 
                em cada projeto.
              </p>
            </div>
          </div>
        </div>
      </div>
    </ServiceLayout>
  );
};

export default Edicao;
