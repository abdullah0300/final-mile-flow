import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Cookie, Shield, Settings, Globe, BarChart3, Megaphone, Info } from "lucide-react";

const CookiePolicy = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      
      {/* Hero Section */}
      <section className="pt-24 pb-12 bg-gradient-to-br from-logistics-blue to-logistics-blue-light">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center text-white">
            <Cookie className="w-16 h-16 mx-auto mb-6 text-white/90" />
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              Cookie Policy
            </h1>
            <p className="text-xl opacity-90">
              How we use cookies to improve your experience
            </p>
            <p className="text-sm mt-4 opacity-75">
              Effective Date: 01 September 2025
            </p>
          </div>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-16">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <div className="bg-white rounded-xl shadow-lg p-8 md:p-12">
              
              {/* Introduction */}
              <div className="mb-12">
                <p className="text-lg text-gray-700 leading-relaxed">
                  Fleetory Ltd ("Fleetory", "we", "our", or "us") uses cookies and similar technologies to improve 
                  your experience when using our website. This Cookie Policy explains what cookies are, how we use them, 
                  and your choices about managing cookies.
                </p>
                <div className="mt-4 p-4 bg-blue-50 border border-blue-200 rounded-lg">
                  <p className="text-blue-800">
                    By continuing to browse our site, you agree to our use of cookies in accordance with this policy.
                  </p>
                </div>
              </div>

              {/* Section 1 - What Are Cookies */}
              <div className="mb-12">
                <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
                  <div className="w-10 h-10 bg-logistics-orange rounded-full flex items-center justify-center mr-3">
                    <span className="text-white font-bold">1</span>
                  </div>
                  What Are Cookies?
                </h2>
                <div className="pl-13">
                  <div className="bg-gray-50 rounded-lg p-6 flex items-start">
                    <Info className="w-6 h-6 text-logistics-orange mr-3 flex-shrink-0 mt-1" />
                    <p className="text-gray-700">
                      Cookies are small text files stored on your device (computer, tablet, or mobile) when you visit 
                      a website. They help websites function properly, remember preferences, and analyse performance.
                    </p>
                  </div>
                </div>
              </div>

              {/* Section 2 - How Fleetory Uses Cookies */}
              <div className="mb-12">
                <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
                  <div className="w-10 h-10 bg-logistics-orange rounded-full flex items-center justify-center mr-3">
                    <span className="text-white font-bold">2</span>
                  </div>
                  How Fleetory Uses Cookies
                </h2>
                <div className="pl-13 text-gray-700">
                  <p className="mb-6">We use cookies to support our courier and delivery services website, including:</p>
                  
                  <div className="space-y-4">
                    <div className="bg-green-50 border border-green-200 rounded-lg p-5">
                      <div className="flex items-start">
                        <Shield className="w-5 h-5 text-green-600 mr-3 flex-shrink-0 mt-0.5" />
                        <div>
                          <h4 className="font-semibold text-green-900 mb-1">Essential Cookies</h4>
                          <p className="text-green-800">Required for the website to function (e.g., booking forms, secure payments, login).</p>
                        </div>
                      </div>
                    </div>

                    <div className="bg-blue-50 border border-blue-200 rounded-lg p-5">
                      <div className="flex items-start">
                        <BarChart3 className="w-5 h-5 text-blue-600 mr-3 flex-shrink-0 mt-0.5" />
                        <div>
                          <h4 className="font-semibold text-blue-900 mb-1">Performance & Analytics Cookies</h4>
                          <p className="text-blue-800">Help us understand how visitors use our courier booking platform, so we can improve site speed, navigation, and customer experience.</p>
                        </div>
                      </div>
                    </div>

                    <div className="bg-purple-50 border border-purple-200 rounded-lg p-5">
                      <div className="flex items-start">
                        <Settings className="w-5 h-5 text-purple-600 mr-3 flex-shrink-0 mt-0.5" />
                        <div>
                          <h4 className="font-semibold text-purple-900 mb-1">Functional Cookies</h4>
                          <p className="text-purple-800">Remember your preferences (such as saved delivery details) for a smoother checkout experience.</p>
                        </div>
                      </div>
                    </div>

                    <div className="bg-orange-50 border border-orange-200 rounded-lg p-5">
                      <div className="flex items-start">
                        <Megaphone className="w-5 h-5 text-orange-600 mr-3 flex-shrink-0 mt-0.5" />
                        <div>
                          <h4 className="font-semibold text-orange-900 mb-1">Advertising & Marketing Cookies</h4>
                          <p className="text-orange-800">Allow us to show relevant promotions, same-day delivery offers, and overnight courier services across the UK.</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Section 3 - Third-Party Cookies */}
              <div className="mb-12">
                <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
                  <div className="w-10 h-10 bg-logistics-orange rounded-full flex items-center justify-center mr-3">
                    <span className="text-white font-bold">3</span>
                  </div>
                  Third-Party Cookies
                </h2>
                <div className="pl-13 text-gray-700">
                  <p className="mb-4">Fleetory may use trusted third-party services, such as:</p>
                  <ul className="space-y-3">
                    <li className="flex items-start">
                      <Globe className="w-5 h-5 text-logistics-orange mr-3 mt-0.5 flex-shrink-0" />
                      <div>
                        <strong>Google Analytics</strong> – to track site performance and improve user experience.
                      </div>
                    </li>
                    <li className="flex items-start">
                      <Globe className="w-5 h-5 text-logistics-orange mr-3 mt-0.5 flex-shrink-0" />
                      <div>
                        <strong>Advertising Platforms</strong> – to display relevant courier service ads.
                      </div>
                    </li>
                    <li className="flex items-start">
                      <Globe className="w-5 h-5 text-logistics-orange mr-3 mt-0.5 flex-shrink-0" />
                      <div>
                        <strong>Social Media Integrations</strong> – for sharing content and engagement.
                      </div>
                    </li>
                  </ul>
                  <p className="mt-4 text-sm text-gray-600">
                    These third parties may place cookies on your device to collect anonymous usage data.
                  </p>
                </div>
              </div>

              {/* Section 4 - Why Cookies Matter */}
              <div className="mb-12">
                <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
                  <div className="w-10 h-10 bg-logistics-orange rounded-full flex items-center justify-center mr-3">
                    <span className="text-white font-bold">4</span>
                  </div>
                  Why Cookies Matter for You
                </h2>
                <div className="pl-13 text-gray-700">
                  <p className="mb-4">Cookies help us:</p>
                  <ul className="space-y-2 list-disc list-inside">
                    <li>Deliver fast and reliable <strong>UK same-day delivery</strong> and <strong>overnight courier booking services</strong>.</li>
                    <li>Tailor our website for better usability.</li>
                    <li>Analyse performance and keep improving.</li>
                    <li>Provide relevant offers to help customers save on courier services.</li>
                  </ul>
                </div>
              </div>

              {/* Section 5 - Managing Your Cookie Preferences */}
              <div className="mb-12">
                <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
                  <div className="w-10 h-10 bg-logistics-orange rounded-full flex items-center justify-center mr-3">
                    <span className="text-white font-bold">5</span>
                  </div>
                  Managing Your Cookie Preferences
                </h2>
                <div className="pl-13 text-gray-700">
                  <p className="mb-4">You have full control over cookies. You can:</p>
                  <ul className="space-y-2 list-disc list-inside mb-4">
                    <li>Adjust your browser settings to block or delete cookies.</li>
                    <li>Opt out of analytics cookies via tools like Google Analytics Opt-Out.</li>
                    <li>Decline non-essential cookies through our cookie banner when you first visit.</li>
                  </ul>
                  <div className="bg-amber-50 border border-amber-200 rounded-lg p-4">
                    <p className="text-amber-800">
                      <strong>Please note:</strong> disabling certain cookies may impact your experience when booking courier services online.
                    </p>
                  </div>
                </div>
              </div>

              {/* Section 6 - Changes to This Cookie Policy */}
              <div className="mb-12">
                <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
                  <div className="w-10 h-10 bg-logistics-orange rounded-full flex items-center justify-center mr-3">
                    <span className="text-white font-bold">6</span>
                  </div>
                  Changes to This Cookie Policy
                </h2>
                <div className="pl-13 text-gray-700">
                  <p>
                    We may update this policy occasionally to reflect changes in technology, law, or our courier services. 
                    Updates will be published on this page with a new effective date.
                  </p>
                </div>
              </div>

              {/* Section 7 - Contact Us */}
              <div className="mb-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
                  <div className="w-10 h-10 bg-logistics-orange rounded-full flex items-center justify-center mr-3">
                    <span className="text-white font-bold">7</span>
                  </div>
                  Contact Us
                </h2>
                <div className="pl-13">
                  <p className="text-gray-700 mb-4">If you have any questions about our use of cookies, please contact:</p>
                  <div className="bg-gray-50 rounded-lg p-6 space-y-2">
                    <p className="font-semibold">Fleetory Ltd (16600045)</p>
                    <p><strong>Email:</strong> <a href="mailto:info@fleetory.co.uk" className="text-logistics-blue hover:underline">info@fleetory.co.uk</a></p>
                    <p><strong>Mobile Number:</strong> <a href="tel:07539868853" className="text-logistics-blue hover:underline">07539868853</a></p>
                    <p><strong>Registered Address:</strong> 3 Glebe Rise, Littleover, Derby, DE23 6GX, UK</p>
                  </div>
                </div>
              </div>

            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default CookiePolicy;