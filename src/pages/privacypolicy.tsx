import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Shield, Lock, Eye, Users, Clock, Database, Mail, FileText } from "lucide-react";

const PrivacyPolicy = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      
      {/* Hero Section */}
      <section className="pt-24 pb-12 bg-gradient-to-br from-logistics-blue to-logistics-blue-light">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center text-white">
            <Shield className="w-16 h-16 mx-auto mb-6 text-white/90" />
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              Privacy Policy
            </h1>
            <p className="text-xl opacity-90">
              Your privacy is our priority. Learn how we protect your data.
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
                  Fleetory Ltd ("Fleetory", "we", "our", or "us") is committed to protecting your privacy. 
                  This Privacy Policy explains how we collect, use, store, and protect your personal information 
                  when you use our courier services, including same-day and overnight delivery across the UK.
                </p>
                <p className="text-lg text-gray-700 leading-relaxed mt-4 italic">
                  Our tagline is "The network that moves you" – and safeguarding your data is an important 
                  part of moving you with trust.
                </p>
              </div>

              {/* Section 1 */}
              <div className="mb-10">
                <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center">
                  <div className="w-8 h-8 bg-logistics-orange rounded-full flex items-center justify-center mr-3">
                    <span className="text-white font-bold">1</span>
                  </div>
                  Who We Are
                </h2>
                <div className="pl-11 space-y-2 text-gray-700">
                  <p>Fleetory Ltd is a courier service provider operating nationwide across the UK.</p>
                  <ul className="space-y-2 mt-4">
                    <li><strong>Company Name:</strong> Fleetory Ltd</li>
                    <li><strong>Registered Number:</strong> 16600045</li>
                    <li><strong>Registered Address:</strong> 3 Glebe Rise, Littleover, Derby, DE23 6GX, UK</li>
                    <li><strong>Contact Email:</strong> info@fleetory.co.uk</li>
                  </ul>
                  <p className="mt-4">
                    For the purposes of UK data protection law, Fleetory Ltd is the Data Controller of your personal information.
                  </p>
                </div>
              </div>

              {/* Section 2 */}
              <div className="mb-10">
                <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center">
                  <div className="w-8 h-8 bg-logistics-orange rounded-full flex items-center justify-center mr-3">
                    <span className="text-white font-bold">2</span>
                  </div>
                  Information We Collect
                </h2>
                <div className="pl-11 text-gray-700">
                  <p className="mb-4">We may collect the following types of personal information when you use our services:</p>
                  <ul className="space-y-3">
                    <li className="flex items-start">
                      <Eye className="w-5 h-5 text-logistics-orange mr-3 mt-0.5 flex-shrink-0" />
                      <div>
                        <strong>Identity & Contact Information:</strong> Name, email address, phone number, billing and delivery addresses.
                      </div>
                    </li>
                    <li className="flex items-start">
                      <FileText className="w-5 h-5 text-logistics-orange mr-3 mt-0.5 flex-shrink-0" />
                      <div>
                        <strong>Delivery Information:</strong> Pickup and drop-off details, parcel descriptions, instructions.
                      </div>
                    </li>
                    <li className="flex items-start">
                      <Lock className="w-5 h-5 text-logistics-orange mr-3 mt-0.5 flex-shrink-0" />
                      <div>
                        <strong>Payment Information:</strong> Transaction details (handled securely via payment providers).
                      </div>
                    </li>
                    <li className="flex items-start">
                      <Database className="w-5 h-5 text-logistics-orange mr-3 mt-0.5 flex-shrink-0" />
                      <div>
                        <strong>Usage Data:</strong> IP address, browser type, device details, cookies, website activity.
                      </div>
                    </li>
                    <li className="flex items-start">
                      <Mail className="w-5 h-5 text-logistics-orange mr-3 mt-0.5 flex-shrink-0" />
                      <div>
                        <strong>Communications:</strong> Customer support queries, feedback, surveys, or complaints.
                      </div>
                    </li>
                  </ul>
                </div>
              </div>

              {/* Section 3 */}
              <div className="mb-10">
                <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center">
                  <div className="w-8 h-8 bg-logistics-orange rounded-full flex items-center justify-center mr-3">
                    <span className="text-white font-bold">3</span>
                  </div>
                  How We Use Your Information
                </h2>
                <div className="pl-11 text-gray-700">
                  <p className="mb-4">We process your information to:</p>
                  <ul className="space-y-2 list-disc list-inside">
                    <li>Provide and manage courier services (bookings, deliveries, updates)</li>
                    <li>Process payments and issue invoices</li>
                    <li>Communicate with you about your orders</li>
                    <li>Improve our services and website performance</li>
                    <li>Send marketing communications where you have consented</li>
                    <li>Comply with legal and regulatory obligations</li>
                  </ul>
                </div>
              </div>

              {/* Section 4 */}
              <div className="mb-10">
                <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center">
                  <div className="w-8 h-8 bg-logistics-orange rounded-full flex items-center justify-center mr-3">
                    <span className="text-white font-bold">4</span>
                  </div>
                  Legal Basis for Processing
                </h2>
                <div className="pl-11 text-gray-700">
                  <p className="mb-4">We process personal information under the following lawful bases:</p>
                  <ul className="space-y-2">
                    <li><strong>Contract:</strong> To perform the courier services you request.</li>
                    <li><strong>Legal Obligation:</strong> To comply with record-keeping and tax requirements.</li>
                    <li><strong>Legitimate Interests:</strong> To operate and improve our services, prevent fraud, and ensure network security.</li>
                    <li><strong>Consent:</strong> For marketing and cookies where required.</li>
                  </ul>
                </div>
              </div>

              {/* Section 5 */}
              <div className="mb-10">
                <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center">
                  <div className="w-8 h-8 bg-logistics-orange rounded-full flex items-center justify-center mr-3">
                    <span className="text-white font-bold">5</span>
                  </div>
                  Cookies & Analytics
                </h2>
                <div className="pl-11 text-gray-700">
                  <p className="mb-4">We use cookies and similar technologies to:</p>
                  <ul className="space-y-2 list-disc list-inside">
                    <li>Enable website functionality</li>
                    <li>Measure performance and improve user experience</li>
                    <li>Analyse traffic and service usage</li>
                  </ul>
                  <p className="mt-4">You can manage or disable cookies through your browser settings.</p>
                </div>
              </div>

              {/* Section 6 */}
              <div className="mb-10">
                <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center">
                  <div className="w-8 h-8 bg-logistics-orange rounded-full flex items-center justify-center mr-3">
                    <span className="text-white font-bold">6</span>
                  </div>
                  Sharing Your Information
                </h2>
                <div className="pl-11 text-gray-700">
                  <p className="mb-4 font-semibold">We will never sell your data.</p>
                  <p className="mb-4">We may share your information with:</p>
                  <ul className="space-y-2">
                    <li><strong>Delivery Partners:</strong> Couriers within the Fleetory network to fulfil your service.</li>
                    <li><strong>Service Providers:</strong> IT hosting, payment processors, and analytics providers.</li>
                    <li><strong>Legal or Regulatory Bodies:</strong> Where required by law.</li>
                    <li><strong>Business Transfers:</strong> In the event of a merger or acquisition.</li>
                  </ul>
                </div>
              </div>

              {/* Section 7 */}
              <div className="mb-10">
                <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center">
                  <div className="w-8 h-8 bg-logistics-orange rounded-full flex items-center justify-center mr-3">
                    <span className="text-white font-bold">7</span>
                  </div>
                  Data Retention
                </h2>
                <div className="pl-11 text-gray-700">
                  <p className="mb-4">We only keep your personal information for as long as necessary to:</p>
                  <ul className="space-y-2 list-disc list-inside">
                    <li>Fulfil the purposes outlined in this Privacy Policy</li>
                    <li>Meet legal, accounting, or reporting requirements</li>
                  </ul>
                  <p className="mt-4">Once no longer needed, your data will be securely deleted or anonymised.</p>
                </div>
              </div>

              {/* Section 8 */}
              <div className="mb-10">
                <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center">
                  <div className="w-8 h-8 bg-logistics-orange rounded-full flex items-center justify-center mr-3">
                    <span className="text-white font-bold">8</span>
                  </div>
                  Security of Your Information
                </h2>
                <div className="pl-11 text-gray-700">
                  <p className="mb-4">We implement reasonable technical and organisational measures to protect your personal data from:</p>
                  <ul className="space-y-2 list-disc list-inside">
                    <li>Loss</li>
                    <li>Misuse</li>
                    <li>Unauthorised access</li>
                    <li>Disclosure or alteration</li>
                  </ul>
                  <p className="mt-4">Access is restricted to employees and partners who need the information to carry out their duties.</p>
                </div>
              </div>

              {/* Section 9 */}
              <div className="mb-10">
                <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center">
                  <div className="w-8 h-8 bg-logistics-orange rounded-full flex items-center justify-center mr-3">
                    <span className="text-white font-bold">9</span>
                  </div>
                  Your Data Protection Rights
                </h2>
                <div className="pl-11 text-gray-700">
                  <p className="mb-4">Under UK GDPR, you have the right to:</p>
                  <ul className="space-y-2 list-disc list-inside">
                    <li>Access your personal data</li>
                    <li>Rectify inaccurate or incomplete data</li>
                    <li>Erase your data ("right to be forgotten")</li>
                    <li>Restrict how your data is processed</li>
                    <li>Object to certain processing (e.g., marketing)</li>
                    <li>Data Portability: request your data in a usable format</li>
                  </ul>
                  <p className="mt-4">
                    You may also lodge a complaint with the Information Commissioner's Office (ICO), 
                    the UK's supervisory authority: <a href="https://www.ico.org.uk" target="_blank" rel="noopener noreferrer" className="text-logistics-blue hover:underline">www.ico.org.uk</a>.
                  </p>
                </div>
              </div>

              {/* Section 10 */}
              <div className="mb-10">
                <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center">
                  <div className="w-8 h-8 bg-logistics-orange rounded-full flex items-center justify-center mr-3">
                    <span className="text-white font-bold">10</span>
                  </div>
                  Children's Privacy
                </h2>
                <div className="pl-11 text-gray-700">
                  <p>
                    Our services are not directed at children under 16. We do not knowingly collect data from minors. 
                    If we become aware of such data, we will delete it immediately.
                  </p>
                </div>
              </div>

              {/* Section 11 */}
              <div className="mb-10">
                <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center">
                  <div className="w-8 h-8 bg-logistics-orange rounded-full flex items-center justify-center mr-3">
                    <span className="text-white font-bold">11</span>
                  </div>
                  Changes to This Privacy Policy
                </h2>
                <div className="pl-11 text-gray-700">
                  <p>
                    We may update this policy from time to time. Any changes will be posted on this page 
                    with a new "Effective Date".
                  </p>
                </div>
              </div>

              {/* Section 12 */}
              <div className="mb-10">
                <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center">
                  <div className="w-8 h-8 bg-logistics-orange rounded-full flex items-center justify-center mr-3">
                    <span className="text-white font-bold">12</span>
                  </div>
                  Contact Us
                </h2>
                <div className="pl-11 text-gray-700">
                  <p className="mb-4">If you have any questions about this Privacy Policy or how your data is handled, please contact us at:</p>
                  <div className="bg-gray-50 rounded-lg p-6 space-y-2">
                    <p><strong>Fleetory Ltd (16600045)</strong></p>
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

export default PrivacyPolicy;