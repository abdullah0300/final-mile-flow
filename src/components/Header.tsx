import { Button } from "@/components/ui/button";
import { NavigationMenu, NavigationMenuContent, NavigationMenuItem, NavigationMenuLink, NavigationMenuList, NavigationMenuTrigger } from "@/components/ui/navigation-menu";
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger, DropdownMenuSeparator } from "@/components/ui/dropdown-menu";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { cn } from "@/lib/utils";
import { useAuth } from "@/hooks/useAuth";
import { User, LogOut, Menu, ChevronDown, Truck, Building, Phone, FileText } from "lucide-react";
import { toast } from "sonner";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const Header = () => {
  const { user, signOut } = useAuth();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const navigate = useNavigate();
  
  const handleSignOut = async () => {
    try {
      const { error } = await signOut();
      if (error) {
        toast.error('Failed to sign out');
        console.error('Sign out error:', error);
      } else {
        toast.success('Signed out successfully');
        // Wait a moment for state to update
        setTimeout(() => {
          navigate('/');
        }, 100);
      }
    } catch (err) {
      console.error('Sign out error:', err);
      toast.error('An error occurred while signing out');
    }
  };

  const closeMobileMenu = () => setMobileMenuOpen(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white shadow-md">
      <div className="w-full">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16 lg:h-20">
            {/* Logo */}
            <a 
              href="/" 
              className="flex items-center hover:opacity-90 transition-opacity duration-200"
            >
              <img 
                src="/lovable-uploads/a79e44cd-5cd8-4248-aa3a-3b2071208a15.png" 
                alt="Fleetory Logo" 
                className="" style={{ height: '200px' }} 
              />
            </a>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center gap-1">
              <NavigationMenu>
                <NavigationMenuList className="flex items-center gap-1">
                  <NavigationMenuItem>
                    <NavigationMenuLink 
                      href="/" 
                      className="px-4 py-2 text-sm font-medium text-gray-700 hover:text-logistics-blue hover:bg-gray-50 rounded-lg transition-all duration-200"
                    >
                      Home
                    </NavigationMenuLink>
                  </NavigationMenuItem>

                  <NavigationMenuItem>
                    <NavigationMenuTrigger className="px-4 py-2 text-sm font-medium text-gray-700 hover:text-logistics-blue hover:bg-gray-50 rounded-lg transition-all duration-200">
                      <Truck className="w-4 h-4 mr-2" />
                      Services
                    </NavigationMenuTrigger>
                    <NavigationMenuContent>
                      <div className="w-[400px] p-4 bg-white shadow-xl rounded-xl border border-gray-100">
                        <div className="grid gap-2">
                          <NavigationMenuLink 
                            href="/services/same-day-delivery" 
                            className="block p-4 rounded-lg hover:bg-gray-50 transition-all duration-200 group"
                          >
                            <div className="font-semibold text-gray-900 group-hover:text-logistics-blue mb-1">
                              Same Day Delivery
                            </div>
                            <div className="text-sm text-gray-600">
                              Urgent deliveries with rapid collection
                            </div>
                          </NavigationMenuLink>
                          <NavigationMenuLink 
                            href="/services/timed-delivery" 
                            className="block p-4 rounded-lg hover:bg-gray-50 transition-all duration-200 group"
                          >
                            <div className="font-semibold text-gray-900 group-hover:text-logistics-blue mb-1">
                              Timed Delivery
                            </div>
                            <div className="text-sm text-gray-600">
                              Scheduled pickup with guaranteed time slots
                            </div>
                          </NavigationMenuLink>
                          <NavigationMenuLink 
                            href="/services/light-haulage" 
                            className="block p-4 rounded-lg hover:bg-gray-50 transition-all duration-200 group"
                          >
                            <div className="font-semibold text-gray-900 group-hover:text-logistics-blue mb-1">
                              Light Haulage
                            </div>
                            <div className="text-sm text-gray-600">
                              From small packages to large palletised goods
                            </div>
                          </NavigationMenuLink>
                          
                        </div>
                      </div>
                    </NavigationMenuContent>
                  </NavigationMenuItem>

                  <NavigationMenuItem>
                    <NavigationMenuLink 
                      href="/fleet" 
                      className="px-4 py-2 text-sm font-medium text-gray-700 hover:text-logistics-blue hover:bg-gray-50 rounded-lg transition-all duration-200"
                    >
                      Our Fleet
                    </NavigationMenuLink>
                  </NavigationMenuItem>

                  <NavigationMenuItem>
                    <NavigationMenuTrigger className="px-4 py-2 text-sm font-medium text-gray-700 hover:text-logistics-blue hover:bg-gray-50 rounded-lg transition-all duration-200">
                      <Building className="w-4 h-4 mr-2" />
                      Industries
                    </NavigationMenuTrigger>
                    <NavigationMenuContent>
                      <div className="w-[400px] p-4 bg-white shadow-xl rounded-xl border border-gray-100">
                        <div className="grid gap-2">
                          {[
                            { href: "/industries/healthcare", title: "Healthcare & Medical", desc: "Medical supplies transport" },
                            { href: "/industries/legal-services", title: "Legal Services", desc: "Document delivery & court filing" },
                            { href: "/industries/construction", title: "Construction & Trade", desc: "Building materials logistics" },
                            { href: "/industries/retail", title: "Retail & E-commerce", desc: "Last-mile delivery solutions" },
                            { href: "/industries/manufacturing", title: "Manufacturing", desc: "Just-in-time parts delivery" },
                            { href: "/industries/residential", title: "Residential", desc: "House removals & furniture" }
                          ].map((item) => (
                            <NavigationMenuLink 
                              key={item.href}
                              href={item.href} 
                              className="block p-3 rounded-lg hover:bg-gray-50 transition-all duration-200 group"
                            >
                              <div className="font-semibold text-gray-900 group-hover:text-logistics-blue text-sm mb-0.5">
                                {item.title}
                              </div>
                              <div className="text-xs text-gray-600">
                                {item.desc}
                              </div>
                            </NavigationMenuLink>
                          ))}
                        </div>
                      </div>
                    </NavigationMenuContent>
                  </NavigationMenuItem>

                  <NavigationMenuItem>
                    <NavigationMenuLink 
                      href="/about" 
                      className="px-4 py-2 text-sm font-medium text-gray-700 hover:text-logistics-blue hover:bg-gray-50 rounded-lg transition-all duration-200"
                    >
                      About
                    </NavigationMenuLink>
                  </NavigationMenuItem>

                  <NavigationMenuItem>
                    <NavigationMenuLink 
                      href="/contact" 
                      className="px-4 py-2 text-sm font-medium text-gray-700 hover:text-logistics-blue hover:bg-gray-50 rounded-lg transition-all duration-200"
                    >
                      Contact
                    </NavigationMenuLink>
                  </NavigationMenuItem>
                </NavigationMenuList>
              </NavigationMenu>
            </nav>

            {/* Right side - CTA and Auth */}
            <div className="flex items-center gap-3">
              <Button 
                onClick={() => navigate('/booking')}
                className="hidden lg:flex bg-logistics-orange hover:bg-logistics-orange-light text-white font-semibold px-6 py-2 rounded-lg transition-all duration-200 shadow-sm hover:shadow-md"
              >
                Book Now
              </Button>

              {/* Desktop Auth */}
              <div className="hidden lg:flex items-center">
                {user ? (
                  <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                      <Button 
                        variant="ghost" 
                        className="flex items-center gap-2 px-4 py-2 rounded-lg hover:bg-gray-50"
                      >
                        <User className="w-5 h-5 text-gray-700" />
                        <span className="text-sm font-medium text-gray-700">Account</span>
                        <ChevronDown className="w-4 h-4 text-gray-500" />
                      </Button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent align="end" className="w-56 bg-white shadow-lg rounded-lg border border-gray-100 p-2">
                      <DropdownMenuItem 
                        onClick={() => navigate('/profile')}
                        className="flex items-center gap-3 px-3 py-2 rounded-md hover:bg-gray-50 cursor-pointer"
                      >
                        <User className="w-4 h-4 text-gray-600" />
                        <span className="text-sm font-medium text-gray-700">My Profile</span>
                      </DropdownMenuItem>
                      <DropdownMenuItem 
                        onClick={() => navigate('/booking')}
                        className="flex items-center gap-3 px-3 py-2 rounded-md hover:bg-gray-50 cursor-pointer"
                      >
                        <FileText className="w-4 h-4 text-gray-600" />
                        <span className="text-sm font-medium text-gray-700">My Bookings</span>
                      </DropdownMenuItem>
                      <DropdownMenuSeparator className="my-2" />
                      <DropdownMenuItem 
                        onClick={async (e) => {
                          e.preventDefault();
                          await handleSignOut();
                        }}
                        className="flex items-center gap-3 px-3 py-2 rounded-md hover:bg-red-50 cursor-pointer group"
                      >
                        <LogOut className="w-4 h-4 text-gray-600 group-hover:text-red-600" />
                        <span className="text-sm font-medium text-gray-700 group-hover:text-red-600">
                          Sign Out
                        </span>
                      </DropdownMenuItem>
                    </DropdownMenuContent>
                  </DropdownMenu>
                ) : (
                  <Button 
                    onClick={() => navigate('/auth')}
                    variant="outline"
                    className="text-sm font-medium px-4 py-2 border-gray-300 hover:border-gray-400"
                  >
                    Sign In
                  </Button>
                )}
              </div>

              {/* Mobile Menu Button */}
              <Button 
                variant="ghost" 
                size="icon" 
                className="lg:hidden"
                onClick={() => setMobileMenuOpen(true)}
              >
                <Menu className="h-6 w-6 text-gray-700" />
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile Menu Sheet */}
      <Sheet open={mobileMenuOpen} onOpenChange={setMobileMenuOpen}>
        <SheetContent side="right" className="w-full max-w-sm bg-white p-0">
          <div className="flex flex-col h-full">
            {/* Mobile Menu Header */}
            <div className="p-6 border-b border-gray-100">
              <img 
                src="/lovable-uploads/a79e44cd-5cd8-4248-aa3a-3b2071208a15.png" 
                alt="Fleetory" 
                className="h-10 w-auto"
              />
            </div>
            
            {/* Mobile Menu Content */}
            <nav className="flex-1 overflow-y-auto p-6">
              <div className="space-y-1">
                <a 
                  href="/" 
                  onClick={closeMobileMenu}
                  className="block px-4 py-3 rounded-lg text-gray-700 font-medium hover:bg-gray-50 transition-colors"
                >
                  Home
                </a>

                <div className="pt-4 pb-2">
                  <h3 className="px-4 text-xs font-semibold text-gray-400 uppercase tracking-wider">
                    Services
                  </h3>
                </div>
                <a 
                  href="/services/same-day-delivery" 
                  onClick={closeMobileMenu}
                  className="block px-4 py-3 rounded-lg text-gray-600 hover:bg-gray-50 transition-colors"
                >
                  Same Day Delivery
                </a>
                <a 
                  href="/services/timed-delivery" 
                  onClick={closeMobileMenu}
                  className="block px-4 py-3 rounded-lg text-gray-600 hover:bg-gray-50 transition-colors"
                >
                  Timed Delivery
                </a>
                <a 
                  href="/services/light-haulage" 
                  onClick={closeMobileMenu}
                  className="block px-4 py-3 rounded-lg text-gray-600 hover:bg-gray-50 transition-colors"
                >
                  Light Haulage
                </a>

                <a 
                  href="/fleet" 
                  onClick={closeMobileMenu}
                  className="block px-4 py-3 rounded-lg text-gray-700 font-medium hover:bg-gray-50 transition-colors"
                >
                  Our Fleet
                </a>

                <div className="pt-4 pb-2">
                  <h3 className="px-4 text-xs font-semibold text-gray-400 uppercase tracking-wider">
                    Industries
                  </h3>
                </div>
                {[
                  { href: "/industries/healthcare", title: "Healthcare & Medical" },
                  { href: "/industries/legal-services", title: "Legal Services" },
                  { href: "/industries/construction", title: "Construction & Trade" },
                  { href: "/industries/retail", title: "Retail & E-commerce" },
                  { href: "/industries/manufacturing", title: "Manufacturing" },
                  { href: "/industries/residential", title: "Residential" }
                ].map((item) => (
                  <a 
                    key={item.href}
                    href={item.href}
                    onClick={closeMobileMenu}
                    className="block px-4 py-3 rounded-lg text-gray-600 hover:bg-gray-50 transition-colors"
                  >
                    {item.title}
                  </a>
                ))}

                <a 
                  href="/about" 
                  onClick={closeMobileMenu}
                  className="block px-4 py-3 rounded-lg text-gray-700 font-medium hover:bg-gray-50 transition-colors"
                >
                  About Us
                </a>

                <a 
                  href="/contact" 
                  onClick={closeMobileMenu}
                  className="block px-4 py-3 rounded-lg text-gray-700 font-medium hover:bg-gray-50 transition-colors"
                >
                  Contact Us
                </a>
              </div>
            </nav>

            {/* Mobile Menu Footer */}
            <div className="border-t border-gray-100 p-6 space-y-3">
              <Button 
                onClick={() => {
                  navigate('/booking');
                  closeMobileMenu();
                }}
                className="w-full bg-logistics-orange hover:bg-logistics-orange-light text-white font-semibold py-3 rounded-lg"
              >
                Book Now
              </Button>

              {user ? (
                <div className="space-y-2 pt-2">
                  <Button
                    variant="ghost"
                    onClick={() => {
                      navigate('/profile');
                      closeMobileMenu();
                    }}
                    className="w-full justify-start"
                  >
                    <User className="w-4 h-4 mr-3" />
                    My Profile
                  </Button>
                  <Button
                    variant="ghost"
                    onClick={async () => {
                      await handleSignOut();
                      closeMobileMenu();
                    }}
                    className="w-full justify-start text-red-600 hover:text-red-700 hover:bg-red-50"
                  >
                    <LogOut className="w-4 h-4 mr-3" />
                    Sign Out
                  </Button>
                </div>
              ) : (
                <Button 
                  variant="outline"
                  onClick={() => {
                    navigate('/auth');
                    closeMobileMenu();
                  }}
                  className="w-full"
                >
                  Sign In
                </Button>
              )}
            </div>
          </div>
        </SheetContent>
      </Sheet>
    </header>
  );
};

export default Header;