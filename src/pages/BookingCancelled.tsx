import { useSearchParams, useNavigate } from "react-router-dom";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { XCircle } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const BookingCancelled = () => {
  const [searchParams] = useSearchParams();
  const navigate = useNavigate();
  const reference = searchParams.get("reference");

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <div className="pt-24 pb-16">
        <div className="container mx-auto px-6 max-w-2xl">
          <Card className="border-red-200 bg-red-50">
            <CardContent className="p-8 text-center">
              <div className="mx-auto w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mb-6">
                <XCircle className="w-8 h-8 text-red-600" />
              </div>
              <h1 className="text-2xl font-bold text-red-800 mb-4">Payment Cancelled</h1>
              <p className="text-red-700 mb-6">
                Your payment was cancelled. Your booking has been saved but requires payment 
                to be confirmed. You can complete the payment later from your account.
              </p>
              {reference && (
                <div className="bg-white p-4 rounded-lg border border-red-200 mb-6">
                  <p className="text-sm font-medium text-gray-600">Booking Reference</p>
                  <p className="text-2xl font-bold text-red-600">{reference}</p>
                </div>
              )}
              <div className="flex gap-3">
                <Button 
                  onClick={() => navigate("/booking")}
                  variant="outline"
                  className="flex-1"
                >
                  Try Again
                </Button>
                <Button 
                  onClick={() => navigate("/")}
                  className="flex-1 bg-gray-600 hover:bg-gray-700"
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

export default BookingCancelled;