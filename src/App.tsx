import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { AuthProvider } from "@/hooks/useAuth";
import Index from "./pages/Index";
import Booking from "./pages/Booking";
import Auth from "./pages/Auth";
import NotFound from "./pages/NotFound";
import Quotations from "./pages/Quotations";
import About from "./pages/About";
import Fleet from "./pages/Fleet";
import IndustriesPage from "./pages/Industries";
import SameDayDelivery from "./pages/services/SameDayDelivery";
import TimedDelivery from "./pages/services/TimedDelivery";
import LightHaulage from "./pages/services/LightHaulage";
import Healthcare from "./pages/industries/Healthcare";
import LegalServices from "./pages/industries/LegalServices";
import Construction from "./pages/industries/Construction";
import Retail from "./pages/industries/Retail";
import Manufacturing from "./pages/industries/Manufacturing";
import Residential from "./pages/industries/Residential";
import Contact from "./pages/Contact";
import FAQ from "./pages/FAQ";
import Profile from "./pages/Profile";
import BookingSuccess from "./pages/BookingSuccess";
import BookingCancelled from "./pages/BookingCancelled";
import PrivacyPolicy from "./pages/privacypolicy";
import TermsOfService from "./pages/TermsOfService";
import CookiePolicy from "./pages/CookiePolicy";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <AuthProvider>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/booking" element={<Booking />} />
            <Route path="/auth" element={<Auth />} />
            <Route path="/quotations" element={<Quotations />} />
            <Route path="/about" element={<About />} />
            <Route path="/fleet" element={<Fleet />} />
            <Route path="/industries" element={<IndustriesPage />} />
            <Route path="/services/same-day-delivery" element={<SameDayDelivery />} />
            <Route path="/services/timed-delivery" element={<TimedDelivery />} />
            <Route path="/services/light-haulage" element={<LightHaulage />} />
            <Route path="/industries/healthcare" element={<Healthcare />} />
            <Route path="/industries/legal-services" element={<LegalServices />} />
            <Route path="/industries/construction" element={<Construction />} />
            <Route path="/industries/retail" element={<Retail />} />
            <Route path="/industries/manufacturing" element={<Manufacturing />} />
            <Route path="/industries/residential" element={<Residential />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/faq" element={<FAQ />} />
            <Route path="/profile" element={<Profile />} />
            <Route path="/booking/success" element={<BookingSuccess />} />
            <Route path="/booking/cancelled" element={<BookingCancelled />} />
            <Route path="/privacy" element={<PrivacyPolicy />} />
            <Route path="/terms" element={<TermsOfService />} />
            <Route path="/cookies" element={<CookiePolicy />} />
            {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </TooltipProvider>
    </AuthProvider>
  </QueryClientProvider>
);

export default App;