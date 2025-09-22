import { useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { useAuth } from '@/hooks/useAuth';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { toast } from 'sonner';
import { Loader2 } from 'lucide-react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import EmailVerificationModal from '@/components/EmailVerificationModal';

const Auth = () => {
  const [loading, setLoading] = useState(false);
  const [loginForm, setLoginForm] = useState({ email: '', password: '' });
  const [signupForm, setSignupForm] = useState({
    email: '',
    password: '',
    confirmPassword: '',
    firstName: '',
    lastName: '',
    businessName: '',
    phone: ''
  });
  const [activeTab, setActiveTab] = useState("login");
  
  // New states for email verification modal
  const [showVerificationModal, setShowVerificationModal] = useState(false);
  const [registeredEmail, setRegisteredEmail] = useState("");

  const { signIn, signUp } = useAuth();
  const navigate = useNavigate();
  const location = useLocation();

  const from = location.state?.from?.pathname || '/';

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!loginForm.email || !loginForm.password) {
      toast.error('Please fill in all fields');
      return;
    }

    setLoading(true);
    const { error } = await signIn(loginForm.email, loginForm.password);

    if (error) {
      console.error("Login error:", error);
      
      // Check if it's an unverified email error
      if (error.message?.includes('email not confirmed') || error.message?.includes('Email not confirmed')) {
        toast.error('Please verify your email before signing in. Check your inbox for the verification link.');
        
        // Optionally show the verification modal again
        setRegisteredEmail(loginForm.email);
        setShowVerificationModal(true);
      } else {
        toast.error(error.message);
      }
    } else {
      toast.success('Welcome back!');
      navigate(from, { replace: true });
    }
    setLoading(false);
  };

  const handleSignup = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!signupForm.email || !signupForm.password || !signupForm.firstName || !signupForm.lastName || !signupForm.phone) {
      toast.error('Please fill in all required fields');
      return;
    }

    if (signupForm.password !== signupForm.confirmPassword) {
      toast.error('Passwords do not match');
      return;
    }

    if (signupForm.password.length < 6) {
      toast.error('Password must be at least 6 characters');
      return;
    }

    setLoading(true);
    const { data, error } = await signUp(signupForm.email, signupForm.password, {
      first_name: signupForm.firstName,
      last_name: signupForm.lastName,
      business_name: signupForm.businessName || 'N/A',
      phone: signupForm.phone
    });

    // Check if user already exists
    if (data?.user && data.user.identities?.length === 0) {
      toast.error("An account with this email already exists. Please sign in instead.");
      setActiveTab("login");
      setLoading(false);
      return;
    }

    if (error) {
      console.error("Signup error:", error);

      const msg = error.message.toLowerCase();
      if (msg.includes("already") || msg.includes("duplicate")) {
        toast.error('An account with this email already exists. Please sign in instead.');
        setActiveTab("login");
      } else if (msg.includes("password")) {
        toast.error('Password is too weak. Please choose a stronger one.');
      } else {
        toast.error(error.message);
      }
      setLoading(false);
    } else {
      // Success! Show the verification modal instead of just a toast
      setRegisteredEmail(signupForm.email);
      setShowVerificationModal(true);
      
      // Clear the form
      setSignupForm({
        email: '',
        password: '',
        confirmPassword: '',
        firstName: '',
        lastName: '',
        businessName: '',
        phone: ''
      });
      
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <div className="pt-24 pb-16">
        <div className="container mx-auto px-6 max-w-md">
          <Card>
            <CardHeader className="text-center">
              <CardTitle className="text-2xl">Account Access</CardTitle>
              <CardDescription>
                Sign in to your account or create a new one to manage your bookings
              </CardDescription>
            </CardHeader>
            <CardContent>
              <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
                <TabsList className="grid w-full grid-cols-2">
                  <TabsTrigger value="login">Sign In</TabsTrigger>
                  <TabsTrigger value="signup">Sign Up</TabsTrigger>
                </TabsList>

                {/* LOGIN */}
                <TabsContent value="login">
                  <form onSubmit={handleLogin} className="space-y-4">
                    <div className="space-y-2">
                      <Label htmlFor="login-email">Email</Label>
                      <Input
                        id="login-email"
                        type="email"
                        placeholder="your.email@example.com"
                        value={loginForm.email}
                        onChange={(e) => setLoginForm({ ...loginForm, email: e.target.value })}
                        required
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="login-password">Password</Label>
                      <Input
                        id="login-password"
                        type="password"
                        placeholder="Enter your password"
                        value={loginForm.password}
                        onChange={(e) => setLoginForm({ ...loginForm, password: e.target.value })}
                        required
                      />
                    </div>
                    <Button type="submit" className="w-full" disabled={loading}>
                      {loading ? (
                        <>
                          <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                          Signing In...
                        </>
                      ) : (
                        "Sign In"
                      )}
                    </Button>
                  </form>

                  <div className="mt-3 text-center">
                    <button
                      type="button"
                      className="text-sm text-blue-600 hover:underline"
                      onClick={() => navigate("/forgot-password")}
                    >
                      Forgot your password?
                    </button>
                  </div>
                </TabsContent>

                {/* SIGNUP */}
                <TabsContent value="signup">
                  <form onSubmit={handleSignup} className="space-y-4">
                    <div className="grid grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="signup-firstname">First Name *</Label>
                        <Input
                          id="signup-firstname"
                          placeholder="John"
                          value={signupForm.firstName}
                          onChange={(e) => setSignupForm({ ...signupForm, firstName: e.target.value })}
                          required
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="signup-lastname">Last Name *</Label>
                        <Input
                          id="signup-lastname"
                          placeholder="Doe"
                          value={signupForm.lastName}
                          onChange={(e) => setSignupForm({ ...signupForm, lastName: e.target.value })}
                          required
                        />
                      </div>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="signup-business">Business Name</Label>
                      <Input
                        id="signup-business"
                        placeholder="Your Company Ltd (or N/A)"
                        value={signupForm.businessName}
                        onChange={(e) => setSignupForm({ ...signupForm, businessName: e.target.value })}
                      />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="signup-phone">Phone Number *</Label>
                      <Input
                        id="signup-phone"
                        type="tel"
                        placeholder="+44 7XXX XXXXXX"
                        value={signupForm.phone}
                        onChange={(e) => setSignupForm({ ...signupForm, phone: e.target.value })}
                        required
                      />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="signup-email">Email *</Label>
                      <Input
                        id="signup-email"
                        type="email"
                        placeholder="your.email@example.com"
                        value={signupForm.email}
                        onChange={(e) => setSignupForm({ ...signupForm, email: e.target.value })}
                        required
                      />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="signup-password">Password *</Label>
                      <Input
                        id="signup-password"
                        type="password"
                        placeholder="Enter a secure password"
                        value={signupForm.password}
                        onChange={(e) => setSignupForm({ ...signupForm, password: e.target.value })}
                        required
                      />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="signup-confirm">Confirm Password *</Label>
                      <Input
                        id="signup-confirm"
                        type="password"
                        placeholder="Confirm your password"
                        value={signupForm.confirmPassword}
                        onChange={(e) => setSignupForm({ ...signupForm, confirmPassword: e.target.value })}
                        required
                      />
                    </div>

                    <Button type="submit" className="w-full" disabled={loading}>
                      {loading ? (
                        <>
                          <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                          Creating Account...
                        </>
                      ) : (
                        'Create Account'
                      )}
                    </Button>
                  </form>
                </TabsContent>
              </Tabs>
            </CardContent>
          </Card>
        </div>
      </div>

      {/* Email Verification Modal */}
      <EmailVerificationModal
        isOpen={showVerificationModal}
        onClose={() => setShowVerificationModal(false)}
        email={registeredEmail}
      />

      <Footer />
    </div>
  );
};

export default Auth;