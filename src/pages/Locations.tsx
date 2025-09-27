import { Helmet } from "react-helmet-async";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { MapPin, Phone, Clock, Shield, CheckCircle } from "lucide-react";
import { useNavigate } from "react-router-dom";

const Locations = () => {
  const navigate = useNavigate();

  const majorCities = [
    {
      name: "London",
      path: "/locations/london",
      description:
        "Fast, insured, and reliable transportation across the capital and nationwide.",
    },
    {
      name: "Birmingham",
      path: "/locations/birmingham",
      description:
        "Professional same-day courier services with 60-minute collection and direct, nationwide deliveries.",
    },
    {
      name: "Manchester",
      path: "/locations/manchester",
      description:
        "Rapid collections, insured transport, and proof of delivery – operating 24/7 for your convenience.",
    },
    {
      name: "Derby",
      path: "/locations/derby",
      description:
        "Urgent deliveries with collection inside 60 minutes, proof of delivery, and fully insured vehicles.",
    },
  ];

  const regionalAreas = [
    {
      region: "Midlands",
      cities: "Nottingham, Leicester, Coventry, Wolverhampton, Stoke-on-Trent",
    },
    {
      region: "North West",
      cities: "Liverpool, Warrington, Bolton, Stockport",
    },
    { region: "South East", cities: "Reading, Slough, Watford, Croydon" },
    { region: "South West", cities: "Bristol, Swindon, Bath" },
    {
      region: "Yorkshire & North East",
      cities: "Leeds, Sheffield, Newcastle, Durham",
    },
    {
      region: "Scotland & Wales",
      cities: "Glasgow, Edinburgh, Cardiff, Swansea",
    },
  ];

  return (
    <div className="min-h-screen">
      <Helmet>
        <title>
          Same Day Courier UK Locations | Fleetory Nationwide Coverage
        </title>
        <meta
          name="description"
          content="Same day courier services across the UK. Fast collection within 60 minutes, nationwide delivery, fully insured fleet. Serving major cities and towns."
        />
      </Helmet>

      <Header />

      <div className="pt-20">
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-logistics-blue to-logistics-blue-light text-white py-16">
          <div className="container mx-auto px-6">
            <div className="max-w-4xl mx-auto text-center">
              <h1 className="text-4xl md:text-5xl font-bold mb-6">
                Same Day Courier UK – Fleetory Nationwide Coverage
              </h1>
              <p className="text-xl md:text-2xl text-white/90 mb-8">
                At Fleetory, we understand that time is critical. That's why we
                offer reliable same-day courier services across the UK, ensuring
                your parcels are collected within 60 minutes and delivered
                securely, 24/7, 365 days a year. Whether you're in a bustling
                city or a quiet town, our extensive network of insured vehicles
                and professional drivers are ready to serve you.
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

        {/* Major Cities We Cover */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-6">
            <h2 className="text-3xl font-bold text-logistics-dark mb-12 text-center">
              Major Cities We Cover
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
              {majorCities.map((city) => (
                <div
                  key={city.name}
                  className="bg-white border border-gray-200 rounded-lg p-6 shadow-md hover:shadow-lg transition-shadow"
                >
                  <div className="flex items-center mb-4">
                    <MapPin className="w-6 h-6 text-logistics-orange mr-2" />
                    <h3 className="text-xl font-semibold text-logistics-dark">
                      {city.name}
                    </h3>
                  </div>
                  <p className="text-gray-700 text-sm mb-4 leading-relaxed">
                    {city.description}
                  </p>
                  <Button
                    onClick={() => navigate(city.path)}
                    variant="outline"
                    className="w-full border-logistics-orange text-logistics-orange hover:bg-logistics-orange hover:text-white"
                  >
                    Learn More
                  </Button>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Regional Coverage */}
        <section className="py-16 bg-logistics-gray">
          <div className="container mx-auto px-6">
            <h2 className="text-3xl font-bold text-logistics-dark mb-12 text-center">
              Neighbouring Areas & Regional Coverage
            </h2>
            <p className="text-lg text-gray-700 text-center mb-12 max-w-3xl mx-auto">
              We also serve a wide range of neighbouring towns and cities,
              ensuring comprehensive coverage across the UK:
            </p>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
              {regionalAreas.map((area) => (
                <div
                  key={area.region}
                  className="bg-white p-6 rounded-lg shadow-md"
                >
                  <h3 className="text-lg font-semibold text-logistics-dark mb-3">
                    {area.region}:
                  </h3>
                  <p className="text-gray-700">{area.cities}</p>
                </div>
              ))}
            </div>
            <div className="text-center mt-8">
              <p className="text-gray-700 max-w-2xl mx-auto">
                Even if your location isn't listed above, our extensive network
                allows us to reach most areas promptly. Contact us to confirm
                service availability in your area.
              </p>
            </div>
          </div>
        </section>

        {/* Why Choose Fleetory */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-6">
            <h2 className="text-3xl font-bold text-logistics-dark mb-12 text-center">
              Why Choose Fleetory Nationwide
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
              <div className="text-center">
                <Clock className="w-16 h-16 text-logistics-orange mx-auto mb-4" />
                <h3 className="text-lg font-semibold text-logistics-dark mb-2">
                  60-Minute Collection
                </h3>
                <p className="text-gray-700">
                  We guarantee collection within 60 minutes of booking, ensuring
                  timely deliveries.
                </p>
              </div>
              <div className="text-center">
                <Shield className="w-16 h-16 text-logistics-orange mx-auto mb-4" />
                <h3 className="text-lg font-semibold text-logistics-dark mb-2">
                  Fully Insured Fleet
                </h3>
                <p className="text-gray-700">
                  Our vehicles range from small vans to Luton vans, all fully
                  insured for your peace of mind.
                </p>
              </div>
              <div className="text-center">
                <CheckCircle className="w-16 h-16 text-logistics-orange mx-auto mb-4" />
                <h3 className="text-lg font-semibold text-logistics-dark mb-2">
                  Proof of Delivery
                </h3>
                <p className="text-gray-700">
                  Receive a signature and photo confirmation upon delivery,
                  providing you with verifiable proof.
                </p>
              </div>
              <div className="text-center">
                <Clock className="w-16 h-16 text-logistics-orange mx-auto mb-4" />
                <h3 className="text-lg font-semibold text-logistics-dark mb-2">
                  24/7 Availability
                </h3>
                <p className="text-gray-700">
                  Our services are available around the clock, including
                  weekends and holidays, to meet your urgent delivery needs.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 bg-logistics-orange">
          <div className="container mx-auto px-6 text-center">
            <h2 className="text-3xl font-bold text-white mb-6">
              Need a Courier Now?
            </h2>
            <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
              Need a same-day courier anywhere in the UK? Call us now at 01332
              492 501 or get an instant quote online. Our team is here to assist
              you with all your urgent delivery requirements.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                onClick={() => navigate("/booking")}
                size="lg"
                className="bg-white text-logistics-orange hover:bg-gray-100 font-semibold px-8 py-3"
              >
                Get Instant Quote
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-white text-white hover:bg-white hover:text-logistics-orange"
                onClick={() => window.open("tel:01332492501", "_self")}
              >
                <Phone className="w-5 h-5 mr-2" />
                Call Now
              </Button>
            </div>
          </div>
        </section>
      </div>

      <Footer />
    </div>
  );
};

export default Locations;
