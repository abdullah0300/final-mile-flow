import {
  Phone,
  Mail,
  MapPin,
  MessageCircle,
  Clock,
  Truck,
  Building,
  FileText,
  Users,
} from "lucide-react";
import { useNavigate } from "react-router-dom";

const Footer = () => {
  const navigate = useNavigate();

  return (
    <footer className="bg-logistics-dark text-white">
      <div className="container mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
          {/* Company Info */}
          <div className="space-y-4 lg:col-span-1">
            <div className="bg-white p-3 rounded-lg inline-block">
              <img
                src="/lovable-uploads/a79e44cd-5cd8-4248-aa3a-3b2071208a15.png"
                alt="Fleetory Logo"
                className="h-12 w-auto"
              />
            </div>
            <p className="text-white/80 leading-relaxed text-sm">
              Professional same-day courier services across the UK. From urgent
              documents to pallet deliveries, we've got you covered 24/7.
            </p>
            <div className="flex gap-4 pt-2">
              <a
                href="https://wa.me/447352288232"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white/10 p-2 rounded-full hover:bg-logistics-orange transition-colors duration-200"
              >
                <MessageCircle className="h-5 w-5" />
              </a>
              <a
                href="mailto: info@fleetory.co.uk"
                className="bg-white/10 p-2 rounded-full hover:bg-logistics-orange transition-colors duration-200"
              >
                <Mail className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Services */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold flex items-center">
              <Truck className="h-5 w-5 mr-2 text-logistics-orange" />
              Services
            </h4>
            <ul className="space-y-2 text-white/80 text-sm">
              <li>
                <a
                  href="/services/same-day-delivery"
                  className="hover:text-logistics-orange transition-colors duration-200"
                >
                  Same Day Delivery
                </a>
              </li>
              <li>
                <a
                  href="/services/timed-delivery"
                  className="hover:text-logistics-orange transition-colors duration-200"
                >
                  Timed Delivery
                </a>
              </li>
              {/* <li>
                <a
                  href="/services/light-haulage"
                  className="hover:text-logistics-orange transition-colors duration-200"
                >
                  Light Haulage
                </a>
              </li> */}
              <li>
                <a
                  href="/fleet"
                  className="hover:text-logistics-orange transition-colors duration-200"
                >
                  Our Fleet
                </a>
              </li>
            </ul>
          </div>

          {/* Industries */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold flex items-center">
              <Building className="h-5 w-5 mr-2 text-logistics-orange" />
              Industries
            </h4>
            <ul className="space-y-2 text-white/80 text-sm">
              <li>
                <a
                  href="/industries/healthcare"
                  className="hover:text-logistics-orange transition-colors duration-200"
                >
                  Healthcare & Medical
                </a>
              </li>
              <li>
                <a
                  href="/industries/legal-services"
                  className="hover:text-logistics-orange transition-colors duration-200"
                >
                  Legal Services
                </a>
              </li>
              <li>
                <a
                  href="/industries/construction"
                  className="hover:text-logistics-orange transition-colors duration-200"
                >
                  Construction
                </a>
              </li>
              <li>
                <a
                  href="/industries/retail"
                  className="hover:text-logistics-orange transition-colors duration-200"
                >
                  Retail & E-commerce
                </a>
              </li>
              <li>
                <a
                  href="/industries/manufacturing"
                  className="hover:text-logistics-orange transition-colors duration-200"
                >
                  Manufacturing
                </a>
              </li>
              <li>
                <a
                  href="/industries/residential"
                  className="hover:text-logistics-orange transition-colors duration-200"
                >
                  Residential
                </a>
              </li>
            </ul>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold flex items-center">
              <FileText className="h-5 w-5 mr-2 text-logistics-orange" />
              Quick Links
            </h4>
            <ul className="space-y-2 text-white/80 text-sm">
              <li>
                <a
                  href="/about"
                  className="hover:text-logistics-orange transition-colors duration-200"
                >
                  About Us
                </a>
              </li>
              <li>
                <a
                  href="/faq"
                  className="hover:text-logistics-orange transition-colors duration-200"
                >
                  FAQ
                </a>
              </li>
              <li>
                <a
                  href="/contact"
                  className="hover:text-logistics-orange transition-colors duration-200"
                >
                  Contact Us
                </a>
              </li>
              <li>
                <a
                  href="/booking"
                  className="hover:text-logistics-orange transition-colors duration-200"
                >
                  Get Quote
                </a>
              </li>
              <li>
                <a
                  href="/auth"
                  className="hover:text-logistics-orange transition-colors duration-200"
                >
                  Sign In
                </a>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold flex items-center">
              <Phone className="h-5 w-5 mr-2 text-logistics-orange" />
              Get in Touch
            </h4>
            <div className="space-y-3 text-sm">
              <div className="flex items-start space-x-3">
                <Clock className="h-4 w-4 text-logistics-orange flex-shrink-0 mt-0.5" />
                <div className="text-white/80">
                  <p className="font-medium">24/7 Service</p>
                  <p>Available round the clock</p>
                </div>
              </div>

              <div className="space-y-2">
                <a
                  href="tel:+447539868853"
                  className="flex items-center space-x-3 text-white/80 hover:text-logistics-orange transition-colors duration-200"
                >
                  <Phone className="h-4 w-4 text-logistics-orange flex-shrink-0" />
                  <span>+44 7539 868853</span>
                </a>
                <a
                  href="tel:+447352288232"
                  className="flex items-center space-x-3 text-white/80 hover:text-logistics-orange transition-colors duration-200"
                >
                  <Phone className="h-4 w-4 text-logistics-orange flex-shrink-0" />
                  <span>+44 7352 288232</span>
                </a>
              </div>

              <a
                href="mailto: info@fleetory.co.uk"
                className="flex items-center space-x-3 text-white/80 hover:text-logistics-orange transition-colors duration-200"
              >
                <Mail className="h-4 w-4 text-logistics-orange flex-shrink-0" />
                <span> info@fleetory.co.uk</span>
              </a>

              <div className="flex items-start space-x-3">
                <MapPin className="h-4 w-4 text-logistics-orange flex-shrink-0 mt-0.5" />
                <div className="text-white/80">
                  <p>Nationwide Coverage</p>
                  <p>United Kingdom</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="bg-white/10 rounded-xl p-8 mt-12 text-center">
          <h3 className="text-2xl font-bold mb-4">
            Ready to Book Your Delivery?
          </h3>
          <p className="text-white/80 mb-6 max-w-2xl mx-auto">
            Get instant quotes and book same-day deliveries across the UK.
            Professional service, competitive prices, and real-time tracking.
          </p>
          <button
            onClick={() => navigate("/booking")}
            className="bg-logistics-orange hover:bg-logistics-orange-light text-white font-semibold px-8 py-3 rounded-lg transition-all duration-200 shadow-lg hover:shadow-xl"
          >
            Get Instant Quote
          </button>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-white/20 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="text-white/60 text-sm">
              © 2024 Fleetory. All rights reserved.
            </div>
            <div className="flex space-x-6 text-sm text-white/60">
              <a
                href="/privacy-policy"
                className="hover:text-logistics-orange transition-colors duration-200"
              >
                Privacy Policy
              </a>
              <a
                href="/terms"
                className="hover:text-logistics-orange transition-colors duration-200"
              >
                Terms of Service
              </a>
              <a
                href="/cookies"
                className="hover:text-logistics-orange transition-colors duration-200"
              >
                Cookie Policy
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
