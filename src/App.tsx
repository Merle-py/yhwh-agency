import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import Branding from "./pages/services/Branding";
import Captacao from "./pages/services/Captacao";
import Edicao from "./pages/services/Edicao";
import Rebranding from "./pages/services/Rebranding";
import SocialMedia from "./pages/services/SocialMedia";
import Trafego from "./pages/services/Trafego";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/servicos/branding" element={<Branding />} />
          <Route path="/servicos/captacao" element={<Captacao />} />
          <Route path="/servicos/edicao" element={<Edicao />} />
          <Route path="/servicos/rebranding" element={<Rebranding />} />
          <Route path="/servicos/socialmedia" element={<SocialMedia />} />
          <Route path="/servicos/trafego" element={<Trafego />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
