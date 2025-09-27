import { Helmet } from "react-helmet-async";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Phone, Clock, Shield, CheckCircle } from "lucide-react";
import { useNavigate } from "react-router-dom";

const Manchester = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen">
      <Helmet>
        <title>
          Same Day Courier Manchester | Fleetory – Rapid Nationwide Service
        </title>
        <meta
          name="description"
          content="Fast, insured same day courier in Manchester. Collection in 60 minutes, proof of delivery, 24/7 availability. Serving Greater Manchester & beyond."
        />
      </Helmet>

      <Header />

      <div className="pt-20">
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-logistics-blue to-logistics-blue-light text-white py-16">
          <div className="container mx-auto px-6">
            <div className="max-w-4xl mx-auto text-center">
              <h1 className="text-4xl md:text-5xl font-bold mb-6">
                Same Day Courier Manchester – Fast & Reliable Nationwide Service
              </h1>
              <p className="text-xl md:text-2xl text-white/90 mb-8">
                Looking for a same-day courier in Manchester? Fleetory provides
                rapid collections, insured transport, and proof of delivery –
                operating 24/7 for your convenience.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button
                  onClick={() => navigate("/booking")}
                  size="lg"
                  className="bg-logistics-orange hover:bg-logistics-orange-light text-white font-semibold px-8 py-3"
                >
                  Get Instant Quote
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="border-white text-black hover:bg-white hover:text-logistics-blue"
                  onClick={() => window.open("tel:01332492501", "_self")}
                >
                  <Phone className="w-5 h-5 mr-2" />
                  01332 492 501
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Local Coverage */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-6">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl font-bold text-logistics-dark mb-8 text-center">
                Local Coverage in Manchester
              </h2>
              <p className="text-lg text-gray-700 leading-relaxed text-center">
                We serve Manchester city centre, Salford Quays, Trafford Park,
                MediaCity, and Greater Manchester boroughs. Whether you're a
                business needing urgent stock moved, or an individual with a
                time-critical package, we've got you covered.
              </p>
            </div>
          </div>
        </section>

        {/* Services */}
        <section className="py-16 bg-logistics-gray">
          <div className="container mx-auto px-6">
            <h2 className="text-3xl font-bold text-logistics-dark mb-12 text-center">
              Our Manchester Courier Services
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
              <div className="bg-white p-6 rounded-lg shadow-md text-center">
                <Clock className="w-12 h-12 text-logistics-orange mx-auto mb-4" />
                <h3 className="font-semibold text-logistics-dark mb-2">
                  Collection within 60 minutes in Manchester
                </h3>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-md text-center">
                <CheckCircle className="w-12 h-12 text-logistics-orange mx-auto mb-4" />
                <h3 className="font-semibold text-logistics-dark mb-2">
                  Nationwide same-day deliveries
                </h3>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-md text-center">
                <CheckCircle className="w-12 h-12 text-logistics-orange mx-auto mb-4" />
                <h3 className="font-semibold text-logistics-dark mb-2">
                  Tracked proof of delivery
                </h3>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-md text-center">
                <Shield className="w-12 h-12 text-logistics-orange mx-auto mb-4" />
                <h3 className="font-semibold text-logistics-dark mb-2">
                  Vehicle range: small vans, SWB, LWB, XLWB, Luton vans
                </h3>
              </div>
            </div>
          </div>
        </section>

        {/* Why Choose Fleetory Manchester */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-6">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl font-bold text-logistics-dark mb-8 text-center">
                Why Choose Fleetory Manchester
              </h2>
              <div className="grid md:grid-cols-3 gap-8">
                <div className="text-center">
                  <h3 className="font-semibold text-logistics-dark mb-2">
                    Knowledge of Manchester's busy roads & logistics hubs
                  </h3>
                </div>
                <div className="text-center">
                  <h3 className="font-semibold text-logistics-dark mb-2">
                    Trusted by local businesses in retail, creative, and
                    industrial sectors
                  </h3>
                </div>
                <div className="text-center">
                  <h3 className="font-semibold text-logistics-dark mb-2">
                    Available around the clock, 365 days a year
                  </h3>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>

      <Footer />
    </div>
  );
};

export default Manchester;
