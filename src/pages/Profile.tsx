import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "@/hooks/useAuth";
import { supabase } from "@/integrations/supabase/client";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Badge } from "@/components/ui/badge";
import { Skeleton } from "@/components/ui/skeleton";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { toast } from "sonner";
import { User, Mail, Phone, Building, Clock, Package, CreditCard, Loader2 } from "lucide-react";

interface Profile {
  first_name: string;
  last_name: string;
  business_name: string | null;
  phone: string;
}

interface Booking {
  id: string;
  reference_number: string;
  created_at: string;
  status: string;
  service_type: string;
  collect_from: string;
  deliver_to: string;
  pricing: any;
  payment_status?: string;
}

const Profile = () => {
  const { user } = useAuth();
  const navigate = useNavigate();
  const [profile, setProfile] = useState<Profile | null>(null);
  const [bookings, setBookings] = useState<Booking[]>([]);
  const [loading, setLoading] = useState(true);
  const [updating, setUpdating] = useState(false);
  const [editMode, setEditMode] = useState(false);
  const [formData, setFormData] = useState({
    first_name: "",
    last_name: "",
    business_name: "",
    phone: ""
  });

 useEffect(() => {
  // Check if we're still loading auth state
  const checkAuth = async () => {
    const { data: { session } } = await supabase.auth.getSession();
    if (!session) {
      navigate("/auth", { state: { from: { pathname: "/profile" } } });
      return;
    }
    if (user) {
      fetchProfile();
      fetchBookings();
    }
  };
  
  checkAuth();
}, [user, navigate]);

  const fetchProfile = async () => {
    try {
      const { data, error } = await supabase
        .from("profiles")
        .select("*")
        .eq("user_id", user?.id)
        .single();

      if (error) throw error;

      setProfile(data);
      setFormData({
        first_name: data.first_name,
        last_name: data.last_name,
        business_name: data.business_name || "",
        phone: data.phone
      });
    } catch (error) {
      console.error("Error fetching profile:", error);
      toast.error("Failed to load profile");
    } finally {
      setLoading(false);
    }
  };

  const fetchBookings = async () => {
    try {
      const { data, error } = await supabase
        .from("bookings")
        .select("*")
        .eq("user_id", user?.id)
        .order("created_at", { ascending: false });

      if (error) throw error;
      setBookings(data || []);
    } catch (error) {
      console.error("Error fetching bookings:", error);
      toast.error("Failed to load bookings");
    }
  };

  const handleUpdateProfile = async () => {
    setUpdating(true);
    try {
      const { error } = await supabase
        .from("profiles")
        .update({
          first_name: formData.first_name,
          last_name: formData.last_name,
          business_name: formData.business_name || null,
          phone: formData.phone,
          updated_at: new Date().toISOString()
        })
        .eq("user_id", user?.id);

      if (error) throw error;

      toast.success("Profile updated successfully");
      setEditMode(false);
      fetchProfile();
    } catch (error) {
      console.error("Error updating profile:", error);
      toast.error("Failed to update profile");
    } finally {
      setUpdating(false);
    }
  };

  const getStatusColor = (status: string) => {
    switch (status.toLowerCase()) {
      case "pending":
        return "bg-yellow-100 text-yellow-800";
      case "confirmed":
        return "bg-blue-100 text-blue-800";
      case "in_transit":
        return "bg-purple-100 text-purple-800";
      case "delivered":
        return "bg-green-100 text-green-800";
      case "cancelled":
        return "bg-red-100 text-red-800";
      default:
        return "bg-gray-100 text-gray-800";
    }
  };

  const getPaymentStatusColor = (status?: string) => {
    switch (status?.toLowerCase()) {
      case "paid":
        return "bg-green-100 text-green-800";
      case "pending":
        return "bg-yellow-100 text-yellow-800";
      case "unpaid":
        return "bg-gray-100 text-gray-800";
      default:
        return "bg-gray-100 text-gray-800";
    }
  };

  if (loading) {
    return (
      <div className="min-h-screen">
        <Header />
        <div className="container mx-auto px-6 py-8">
          <div className="space-y-4">
            <Skeleton className="h-12 w-1/3" />
            <Skeleton className="h-64 w-full" />
            <Skeleton className="h-96 w-full" />
          </div>
        </div>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen">
      <Header />
      
      <div className="container mx-auto px-6 py-8">
        <h1 className="text-3xl font-bold text-foreground mb-8">My Account</h1>

        <Tabs defaultValue="profile" className="space-y-6">
          <TabsList className="grid w-full md:w-[400px] grid-cols-2">
            <TabsTrigger value="profile">Profile</TabsTrigger>
            <TabsTrigger value="bookings">My Bookings</TabsTrigger>
          </TabsList>

          <TabsContent value="profile">
            <Card>
              <CardHeader>
                <CardTitle>Profile Information</CardTitle>
                <CardDescription>
                  Manage your account details and preferences
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="flex items-center gap-4 mb-6">
                  <div className="h-16 w-16 rounded-full bg-logistics-blue/10 flex items-center justify-center">
                    <User className="h-8 w-8 text-logistics-blue" />
                  </div>
                  <div>
                    <p className="text-lg font-semibold">{profile?.first_name} {profile?.last_name}</p>
                    <p className="text-sm text-muted-foreground">{user?.email}</p>
                  </div>
                </div>

                {editMode ? (
                  <div className="space-y-4">
                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <Label htmlFor="first_name">First Name</Label>
                        <Input
                          id="first_name"
                          value={formData.first_name}
                          onChange={(e) => setFormData({...formData, first_name: e.target.value})}
                        />
                      </div>
                      <div>
                        <Label htmlFor="last_name">Last Name</Label>
                        <Input
                          id="last_name"
                          value={formData.last_name}
                          onChange={(e) => setFormData({...formData, last_name: e.target.value})}
                        />
                      </div>
                    </div>
                    <div>
                      <Label htmlFor="business_name">Business Name (Optional)</Label>
                      <Input
                        id="business_name"
                        value={formData.business_name}
                        onChange={(e) => setFormData({...formData, business_name: e.target.value})}
                      />
                    </div>
                    <div>
                      <Label htmlFor="phone">Phone Number</Label>
                      <Input
                        id="phone"
                        value={formData.phone}
                        onChange={(e) => setFormData({...formData, phone: e.target.value})}
                      />
                    </div>
                    <div className="flex gap-2">
                      <Button 
                        onClick={handleUpdateProfile} 
                        disabled={updating}
                        className="bg-logistics-orange hover:bg-logistics-orange-light"
                      >
                        {updating ? (
                          <>
                            <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                            Saving...
                          </>
                        ) : (
                          "Save Changes"
                        )}
                      </Button>
                      <Button 
                        variant="outline" 
                        onClick={() => {
                          setEditMode(false);
                          setFormData({
                            first_name: profile?.first_name || "",
                            last_name: profile?.last_name || "",
                            business_name: profile?.business_name || "",
                            phone: profile?.phone || ""
                          });
                        }}
                      >
                        Cancel
                      </Button>
                    </div>
                  </div>
                ) : (
                  <div className="space-y-4">
                    <div className="flex items-center gap-2 text-sm">
                      <Mail className="h-4 w-4 text-muted-foreground" />
                      <span>{user?.email}</span>
                    </div>
                    <div className="flex items-center gap-2 text-sm">
                      <Phone className="h-4 w-4 text-muted-foreground" />
                      <span>{profile?.phone}</span>
                    </div>
                    {profile?.business_name && (
                      <div className="flex items-center gap-2 text-sm">
                        <Building className="h-4 w-4 text-muted-foreground" />
                        <span>{profile.business_name}</span>
                      </div>
                    )}
                    <Button 
                      variant="outline" 
                      onClick={() => setEditMode(true)}
                      className="mt-4"
                    >
                      Edit Profile
                    </Button>
                  </div>
                )}
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="bookings">
            <Card>
              <CardHeader>
                <CardTitle>Booking History</CardTitle>
                <CardDescription>
                  View and manage your delivery bookings
                </CardDescription>
              </CardHeader>
              <CardContent>
                {bookings.length === 0 ? (
                  <div className="text-center py-12">
                    <Package className="h-12 w-12 text-muted-foreground mx-auto mb-4" />
                    <p className="text-muted-foreground mb-4">No bookings yet</p>
                    <Button 
                      onClick={() => navigate("/booking")}
                      className="bg-logistics-orange hover:bg-logistics-orange-light"
                    >
                      Book Your First Delivery
                    </Button>
                  </div>
                ) : (
                  <div className="space-y-4">
                    {bookings.map((booking) => (
                      <Card key={booking.id} className="border">
                        <CardContent className="p-4">
                          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                            <div className="space-y-2">
                              <div className="flex items-center gap-2">
                                <span className="font-semibold">#{booking.reference_number}</span>
                                <Badge className={getStatusColor(booking.status)}>
                                  {booking.status.replace("_", " ").toUpperCase()}
                                </Badge>
                                {booking.payment_status && (
                                  <Badge className={getPaymentStatusColor(booking.payment_status)}>
                                    <CreditCard className="h-3 w-3 mr-1" />
                                    {booking.payment_status.toUpperCase()}
                                  </Badge>
                                )}
                              </div>
                              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                                <Clock className="h-3 w-3" />
                                {new Date(booking.created_at).toLocaleDateString("en-GB", {
                                  day: "numeric",
                                  month: "short",
                                  year: "numeric",
                                  hour: "2-digit",
                                  minute: "2-digit"
                                })}
                              </div>
                              <div className="text-sm">
                                <p><strong>Service:</strong> {booking.service_type}</p>
                                <p><strong>From:</strong> {booking.collect_from}</p>
                                <p><strong>To:</strong> {booking.deliver_to}</p>
                              </div>
                            </div>
                            <div className="text-right">
                              <p className="text-2xl font-bold text-logistics-orange">
                                £{booking.pricing?.total || "0.00"}
                              </p>
                              {/* <Button 
                                variant="outline" 
                                size="sm" 
                                className="mt-2"
                                onClick={() => navigate(`/booking/${booking.id}`)}
                              >
                                View Details
                              </Button> */}
                            </div>
                          </div>
                        </CardContent>
                      </Card>
                    ))}
                  </div>
                )}
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>

      <Footer />
    </div>
  );
};

export default Profile;