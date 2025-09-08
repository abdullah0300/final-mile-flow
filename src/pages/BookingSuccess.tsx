import { useEffect } from "react";
import { useSearchParams, useNavigate } from "react-router-dom";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { CheckCircle } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { supabase } from "@/integrations/supabase/client";

const BookingSuccess = () => {
  const [searchParams] = useSearchParams();
  const navigate = useNavigate();
  const reference = searchParams.get("reference");

  useEffect(() => {
    // Update booking status to paid
    if (reference) {
      updateBookingStatus();
    }
  }, [reference]);

  const updateBookingStatus = async () => {
    try {
      const { error } = await supabase
        .from("bookings")
        .update({ payment_status: "paid", status: "confirmed" })
        .eq("reference_number", reference);

      if (error) {
        console.error("Error updating booking status:", error);
      }
    } catch (error) {
      console.error("Error:", error);
    }
  };

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <div className="pt-24 pb-16">
        <div className="container mx-auto px-6 max-w-2xl">
          <Card className="border-green-200 bg-green-50">
            <CardContent className="p-8 text-center">
              <div className="mx-auto w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mb-6">
                <CheckCircle className="w-8 h-8 text-green-600" />
              </div>
              <h1 className="text-2xl font-bold text-green-800 mb-4">Payment Successful!</h1>
              <p className="text-green-700 mb-6">
                Your payment has been processed successfully. Your booking is now confirmed 
                and our team will contact you shortly with driver details.
              </p>
              {reference && (
                <div className="bg-white p-4 rounded-lg border border-green-200 mb-6">
                  <p className="text-sm font-medium text-gray-600">Booking Reference</p>
                  <p className="text-2xl font-bold text-green-600">{reference}</p>
                </div>
              )}
              <div className="flex gap-3">
                <Button 
                  onClick={() => navigate("/profile")}
                  variant="outline"
                  className="flex-1"
                >
                  View My Bookings
                </Button>
                <Button 
                  onClick={() => navigate("/")}
                  className="flex-1 bg-logistics-orange hover:bg-logistics-orange-light"
                >
                  Back to Home
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default BookingSuccess;