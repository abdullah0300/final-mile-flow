import { Helmet } from "react-helmet-async";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Phone, Clock, Shield, CheckCircle } from "lucide-react";
import { useNavigate } from "react-router-dom";

const Birmingham = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen">
      <Helmet>
        <title>
          Same Day Courier Birmingham | Fleetory – 24/7 Urgent Delivery
        </title>
        <meta
          name="description"
          content="Same day courier in Birmingham with 60-minute collection. Nationwide delivery, proof of delivery, insured vehicles. Call Fleetory 24/7 today."
        />
      </Helmet>

      <Header />

      <div className="pt-20">
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-logistics-blue to-logistics-blue-light text-white py-16">
          <div className="container mx-auto px-6">
            <div className="max-w-4xl mx-auto text-center">
              <h1 className="text-4xl md:text-5xl font-bold mb-6">
                Same Day Courier in Birmingham – 24/7 Urgent Deliveries
              </h1>
              <p className="text-xl md:text-2xl text-white/90 mb-8">
                Fleetory offers professional same-day courier services in
                Birmingham and the wider West Midlands. We guarantee collection
                within 60 minutes and direct, nationwide deliveries.
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
                Local Coverage in Birmingham
              </h2>
              <p className="text-lg text-gray-700 leading-relaxed text-center">
                Covering Birmingham city centre, Digbeth, Jewellery Quarter, and
                Aston, plus industrial zones and Birmingham Airport logistics.
                We handle urgent business and personal deliveries across the
                region with speed and reliability.
              </p>
            </div>
          </div>
        </section>

        {/* Services */}
        <section className="py-16 bg-logistics-gray">
          <div className="container mx-auto px-6">
            <h2 className="text-3xl font-bold text-logistics-dark mb-12 text-center">
              Our Birmingham Courier Services
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
              <div className="bg-white p-6 rounded-lg shadow-md text-center">
                <Clock className="w-12 h-12 text-logistics-orange mx-auto mb-4" />
                <h3 className="font-semibold text-logistics-dark mb-2">
                  Fast pickup across Birmingham & West Midlands
                </h3>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-md text-center">
                <CheckCircle className="w-12 h-12 text-logistics-orange mx-auto mb-4" />
                <h3 className="font-semibold text-logistics-dark mb-2">
                  Nationwide coverage within the same day
                </h3>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-md text-center">
                <CheckCircle className="w-12 h-12 text-logistics-orange mx-auto mb-4" />
                <h3 className="font-semibold text-logistics-dark mb-2">
                  Proof of delivery with every job
                </h3>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-md text-center">
                <Shield className="w-12 h-12 text-logistics-orange mx-auto mb-4" />
                <h3 className="font-semibold text-logistics-dark mb-2">
                  Vehicle options: from small vans to Luton vans
                </h3>
              </div>
            </div>
          </div>
        </section>

        {/* Why Choose Fleetory Birmingham */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-6">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl font-bold text-logistics-dark mb-8 text-center">
                Why Choose Fleetory Birmingham
              </h2>
              <div className="grid md:grid-cols-3 gap-8">
                <div className="text-center">
                  <h3 className="font-semibold text-logistics-dark mb-2">
                    Strategic base near the M6 and Midlands road network
                  </h3>
                </div>
                <div className="text-center">
                  <h3 className="font-semibold text-logistics-dark mb-2">
                    Experienced with corporate, retail & healthcare deliveries
                    in Birmingham
                  </h3>
                </div>
                <div className="text-center">
                  <h3 className="font-semibold text-logistics-dark mb-2">
                    Transparent pricing, no hidden fees
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

export default Birmingham;
