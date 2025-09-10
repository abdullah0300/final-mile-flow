import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { FileText, AlertCircle, Package, Truck, Clock, CreditCard, Scale, Shield } from "lucide-react";

const TermsOfService = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      
      {/* Hero Section */}
      <section className="pt-24 pb-12 bg-gradient-to-br from-logistics-blue to-logistics-blue-light">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center text-white">
            <FileText className="w-16 h-16 mx-auto mb-6 text-white/90" />
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              Terms of Service
            </h1>
            <p className="text-xl opacity-90">
              Fleetory – Conditions of Carriage 2025
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
              <div className="mb-12 bg-amber-50 border border-amber-200 rounded-lg p-6">
                <div className="flex items-start">
                  <AlertCircle className="w-6 h-6 text-amber-600 mr-3 flex-shrink-0 mt-1" />
                  <div className="text-gray-700">
                    <p className="font-semibold mb-2">Important Notice</p>
                    <p className="leading-relaxed">
                      Fleetory ("the Carrier") is not a common carrier and accepts goods for carriage only on these Conditions. 
                      No employee or agent of the Carrier may alter or vary these Conditions unless expressly authorised in 
                      writing by a Director or authorised representative of Fleetory. If any provision is found invalid, 
                      illegal or unenforceable, it will be adjusted to the minimum extent necessary to make it valid. 
                      These Conditions apply to all contracts to the exclusion of any other terms. Customers are responsible 
                      for reading and understanding these Conditions, arranging adequate insurance, and seeking professional 
                      advice if required.
                    </p>
                  </div>
                </div>
              </div>

              {/* Section 1 - Definitions */}
              <div className="mb-10">
                <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
                  <div className="w-10 h-10 bg-logistics-orange rounded-full flex items-center justify-center mr-3">
                    <span className="text-white font-bold">1</span>
                  </div>
                  Definitions
                </h2>
                <div className="pl-13 space-y-3 text-gray-700">
                  <div className="grid gap-3">
                    <div className="bg-gray-50 p-4 rounded-lg">
                      <span className="font-semibold">Customer</span> – the person or company contracting with Fleetory for carriage services.
                    </div>
                    <div className="bg-gray-50 p-4 rounded-lg">
                      <span className="font-semibold">Contract</span> – the agreement between the Customer and Fleetory for the carriage of goods.
                    </div>
                    <div className="bg-gray-50 p-4 rounded-lg">
                      <span className="font-semibold">Consignee</span> – the person or company to whom Fleetory delivers the Consignment.
                    </div>
                    <div className="bg-gray-50 p-4 rounded-lg">
                      <span className="font-semibold">Consignment</span> – goods sent as a single item, parcel, package, or multiple items in one load from one address to another.
                    </div>
                    <div className="bg-gray-50 p-4 rounded-lg">
                      <span className="font-semibold">Dangerous Goods</span> – substances/articles prohibited or restricted under ADR regulations or which present a hazard to people or property.
                    </div>
                    <div className="bg-gray-50 p-4 rounded-lg">
                      <span className="font-semibold">Excluded Goods</span> – glass, ceramics, liquids, or any goods of similar fragility, unless otherwise agreed in writing.
                    </div>
                    <div className="bg-gray-50 p-4 rounded-lg">
                      <span className="font-semibold">Demurrage</span> – charges for improper, excessive, or unreasonable detention of Fleetory's vehicles or equipment.
                    </div>
                    <div className="bg-gray-50 p-4 rounded-lg">
                      <span className="font-semibold">Force Majeure Event</span> – events beyond Fleetory's reasonable control as defined in clause 10(2)(c).
                    </div>
                    <div className="bg-gray-50 p-4 rounded-lg">
                      <span className="font-semibold">In Writing</span> – includes email, fax, or other durable electronic communications.
                    </div>
                  </div>
                </div>
              </div>

              {/* Section 2 - Parties & Sub-Contracting */}
              <div className="mb-10">
                <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
                  <div className="w-10 h-10 bg-logistics-orange rounded-full flex items-center justify-center mr-3">
                    <span className="text-white font-bold">2</span>
                  </div>
                  Parties & Sub-Contracting
                </h2>
                <div className="pl-13 space-y-3 text-gray-700">
                  <ol className="list-decimal list-inside space-y-2">
                    <li>The Customer warrants ownership of the goods or authority from the owner to contract under these Conditions.</li>
                    <li>Fleetory may employ other carriers to perform the service and may assign rights/obligations as permitted by law.</li>
                    <li>References to "Fleetory" include subcontractors, employees, and agents engaged in the carriage.</li>
                  </ol>
                </div>
              </div>

              {/* Section 3 - Dangerous Goods & Excluded Goods */}
              <div className="mb-10">
                <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
                  <div className="w-10 h-10 bg-logistics-orange rounded-full flex items-center justify-center mr-3">
                    <span className="text-white font-bold">3</span>
                  </div>
                  Dangerous Goods & Excluded Goods
                </h2>
                <div className="pl-13 space-y-3 text-gray-700">
                  <ol className="list-decimal list-inside space-y-2">
                    <li>Dangerous Goods must be declared in writing in advance. Acceptance is subject to compliance with all legal packing, marking, and documentation requirements.</li>
                    <li>Fleetory does not carry Dangerous Goods by sea or air, or those requiring legally mandated driver training, unless agreed in writing.</li>
                    <li>Excluded Goods are only carried at the Customer's risk, and Fleetory accepts no liability for damage unless expressly agreed.</li>
                  </ol>
                </div>
              </div>

              {/* Section 4 - Loading, Unloading & Access */}
              <div className="mb-10">
                <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
                  <div className="w-10 h-10 bg-logistics-orange rounded-full flex items-center justify-center mr-3">
                    <span className="text-white font-bold">4</span>
                  </div>
                  Loading, Unloading & Access
                </h2>
                <div className="pl-13 space-y-3 text-gray-700">
                  <ol className="list-decimal list-inside space-y-2">
                    <li>Unless otherwise agreed, the Customer is responsible for loading/unloading and ensuring suitable access.</li>
                    <li>Any site damage caused by unsuitable access is the Customer's responsibility.</li>
                    <li>Any specific delivery equipment required must be agreed in advance, with associated costs payable by the Customer.</li>
                  </ol>
                </div>
              </div>

              {/* Section 5 - Transit */}
              <div className="mb-10">
                <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
                  <div className="w-10 h-10 bg-logistics-orange rounded-full flex items-center justify-center mr-3">
                    <span className="text-white font-bold">5</span>
                  </div>
                  Transit
                </h2>
                <div className="pl-13 space-y-3 text-gray-700">
                  <ol className="list-decimal list-inside space-y-2">
                    <li>Transit begins when Fleetory takes possession of the Consignment.</li>
                    <li>Transit ends when delivered to the agreed address or as otherwise defined in clause 7 of the RHA terms.</li>
                    <li>If delivery cannot be completed for reasons beyond Fleetory's control, goods may be returned at the customer's expense.</li>
                  </ol>
                </div>
              </div>

              {/* Section 6 - Cancellations */}
              <div className="mb-10">
                <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
                  <div className="w-10 h-10 bg-logistics-orange rounded-full flex items-center justify-center mr-3">
                    <span className="text-white font-bold">6</span>
                  </div>
                  Cancellations
                </h2>
                <div className="pl-13 space-y-3 text-gray-700">
                  <ol className="list-decimal list-inside space-y-2">
                    <li>Fleetory may refuse to carry goods it deems unsafe or unfit for carriage.</li>
                    <li>Cancellation after a driver has been dispatched will incur wasted journey charges based on mileage or time, whichever is greater.</li>
                  </ol>
                </div>
              </div>

              {/* Section 7 - Signed Receipts & Delivery Discretion */}
              <div className="mb-10">
                <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
                  <div className="w-10 h-10 bg-logistics-orange rounded-full flex items-center justify-center mr-3">
                    <span className="text-white font-bold">7</span>
                  </div>
                  Signed Receipts & Delivery Discretion
                </h2>
                <div className="pl-13 space-y-3 text-gray-700">
                  <ol className="list-decimal list-inside space-y-2">
                    <li>Fleetory will provide delivery receipts and retain them for a minimum of 6 months.</li>
                    <li>Unless "signature required" is specified, Fleetory may leave goods in a location deemed safe or with a neighbour for domestic deliveries.</li>
                  </ol>
                </div>
              </div>

              {/* Section 8 - Carrier's Charges & Waiting Time */}
              <div className="mb-10">
                <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
                  <div className="w-10 h-10 bg-logistics-orange rounded-full flex items-center justify-center mr-3">
                    <span className="text-white font-bold">8</span>
                  </div>
                  Carrier's Charges & Waiting Time
                </h2>
                <div className="pl-13 space-y-3 text-gray-700">
                  <ol className="list-decimal list-inside space-y-2">
                    <li>Invoices are payable within 30 days of the invoice date unless otherwise stated.</li>
                    <li>If payment is not received by the due date, Fleetory may apply a Late Payment Administration Fee of 3% of the overdue amount per month (or part thereof). This fee is a fixed charge intended to cover the additional administrative, collection, and account management costs incurred in managing overdue accounts. It is not charged as interest.</li>
                    <li>All sums must be paid without deduction, set-off, or deferment.</li>
                    <li>Waiting time charges apply if loading/unloading delays occur beyond agreed allowances, billed in 15-minute increments.</li>
                  </ol>
                </div>
              </div>

              {/* Section 9 - Liability for Loss & Damage */}
              <div className="mb-10">
                <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
                  <div className="w-10 h-10 bg-logistics-orange rounded-full flex items-center justify-center mr-3">
                    <span className="text-white font-bold">9</span>
                  </div>
                  Liability for Loss & Damage
                </h2>
                <div className="pl-13 space-y-3 text-gray-700">
                  <ol className="list-decimal list-inside space-y-2">
                    <li>Liability is limited in accordance with clause 12 (RHA basis: £1,300 per tonne or value of goods, whichever is less).</li>
                    <li>Certain losses (e.g., loss of profits, goodwill, indirect losses) are excluded entirely.</li>
                    <li>Fleetory is not liable for events outside its control, including Force Majeure Events.</li>
                  </ol>
                </div>
              </div>

              {/* Section 10 - Fraud */}
              <div className="mb-10">
                <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
                  <div className="w-10 h-10 bg-logistics-orange rounded-full flex items-center justify-center mr-3">
                    <span className="text-white font-bold">10</span>
                  </div>
                  Fraud
                </h2>
                <div className="pl-13 text-gray-700">
                  <p>No liability applies if fraud by the Customer, Consignee, or owner is involved, unless Fleetory's own staff were complicit.</p>
                </div>
              </div>

              {/* Section 11 - Limitation of Liability */}
              <div className="mb-10">
                <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
                  <div className="w-10 h-10 bg-logistics-orange rounded-full flex items-center justify-center mr-3">
                    <span className="text-white font-bold">11</span>
                  </div>
                  Limitation of Liability
                </h2>
                <div className="pl-13 space-y-3 text-gray-700">
                  <ol className="list-decimal list-inside space-y-2">
                    <li>Liability for goods is limited to:
                      <ul className="list-disc list-inside mt-2 ml-6 space-y-1">
                        <li>Value of goods lost/damaged, or</li>
                        <li>£1,300 per tonne gross weight, whichever is less, subject to a £10 minimum.</li>
                      </ul>
                    </li>
                    <li>Claims must be supported by proof of value and noted on delivery documents at time of receipt.</li>
                  </ol>
                </div>
              </div>

              {/* Section 12 - Indemnity to Fleetory */}
              <div className="mb-10">
                <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
                  <div className="w-10 h-10 bg-logistics-orange rounded-full flex items-center justify-center mr-3">
                    <span className="text-white font-bold">12</span>
                  </div>
                  Indemnity to Fleetory
                </h2>
                <div className="pl-13 text-gray-700">
                  <p className="mb-3">The Customer indemnifies Fleetory for:</p>
                  <ul className="list-disc list-inside space-y-2">
                    <li>Losses caused by breach of these Conditions, incorrect information, insufficient packaging, or fraud.</li>
                    <li>Claims exceeding Fleetory's stated liability limits.</li>
                    <li>HMRC claims relating to dutiable goods.</li>
                  </ul>
                </div>
              </div>

              {/* Section 13 - Time Limits for Claims */}
              <div className="mb-10">
                <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
                  <div className="w-10 h-10 bg-logistics-orange rounded-full flex items-center justify-center mr-3">
                    <span className="text-white font-bold">13</span>
                  </div>
                  Time Limits for Claims
                </h2>
                <div className="pl-13 space-y-3 text-gray-700">
                  <ol className="list-decimal list-inside space-y-2">
                    <li>Damage/loss claims must be notified in writing within 3 days.</li>
                    <li>Other claims must be notified within 7 days.</li>
                    <li>Invoice queries must be raised within 14 days.</li>
                  </ol>
                </div>
              </div>

              {/* Section 14 - Lien */}
              <div className="mb-10">
                <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
                  <div className="w-10 h-10 bg-logistics-orange rounded-full flex items-center justify-center mr-3">
                    <span className="text-white font-bold">14</span>
                  </div>
                  Lien
                </h2>
                <div className="pl-13 text-gray-700">
                  <p>Fleetory has a lien on goods for unpaid charges and may sell goods after reasonable notice to recover amounts owed.</p>
                </div>
              </div>

              {/* Section 15 - Unreasonable Detention */}
              <div className="mb-10">
                <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
                  <div className="w-10 h-10 bg-logistics-orange rounded-full flex items-center justify-center mr-3">
                    <span className="text-white font-bold">15</span>
                  </div>
                  Unreasonable Detention
                </h2>
                <div className="pl-13 text-gray-700">
                  <p>Customers are liable for costs due to improper or excessive detention of Fleetory's vehicles or equipment.</p>
                </div>
              </div>

              {/* Section 16 - Law & Jurisdiction */}
              <div className="mb-10">
                <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
                  <div className="w-10 h-10 bg-logistics-orange rounded-full flex items-center justify-center mr-3">
                    <span className="text-white font-bold">16</span>
                  </div>
                  Law & Jurisdiction
                </h2>
                <div className="pl-13 text-gray-700">
                  <p>This Contract is governed by English law. Disputes are subject to the exclusive jurisdiction of the English courts.</p>
                </div>
              </div>

              {/* Contact Information */}
              <div className="mt-16 bg-gray-50 rounded-lg p-8">
                <h3 className="text-xl font-bold text-gray-900 mb-4">Contact Information</h3>
                <div className="space-y-2 text-gray-700">
                  <p><strong>Fleetory Ltd (16600045)</strong></p>
                  <p>3 Glebe Rise, Littleover, Derby, DE23 6GX, UK</p>
                  <p><strong>Telephone number:</strong> <a href="tel:01332492501" className="text-logistics-blue hover:underline">01332 492501</a></p>
                  <p><strong>Out of hours Mobile Number:</strong> <a href="tel:07539868853" className="text-logistics-blue hover:underline">07539868853</a></p>
                  <p><strong>Email:</strong> <a href="mailto:info@fleetory.co.uk" className="text-logistics-blue hover:underline">info@fleetory.co.uk</a></p>
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

export default TermsOfService;