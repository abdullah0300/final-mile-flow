// src/components/Header.tsx
import { Button } from "@/components/ui/button";
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger, DropdownMenuSeparator } from "@/components/ui/dropdown-menu";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { useAuth } from "@/hooks/useAuth";
import { User, LogOut, Menu, ChevronDown, Truck, Building, MapPin, Settings } from "lucide-react";
import { toast } from "sonner";
import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";

const Header = () => {
  const { user, signOut, isAdmin } = useAuth();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const [locationsOpen, setLocationsOpen] = useState(false);
  const [industriesOpen, setIndustriesOpen] = useState(false);
  const navigate = useNavigate();

  const handleSignOut = async () => {
    try {
      const { error } = await signOut();
      if (error) {
        toast.error('Failed to sign out');
        console.error('Sign out error:', error);
      } else {
        toast.success('Signed out successfully');
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

  const handleNavigation = (path: string) => {
    navigate(path);
    setServicesOpen(false);
    setLocationsOpen(false);
    setIndustriesOpen(false);
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white border-b border-gray-200">
      <div className="w-full">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-20">
            {/* Logo */}
            <Link
              to="/"
              className="flex items-center hover:opacity-90 transition-opacity duration-200"
            >
              <img
                src="/lovable-uploads/a79e44cd-5cd8-4248-aa3a-3b2071208a15.png"
                alt="Fleetory Logo"
                className=""
                style={{ height: '200px' }}
              />
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center space-x-1">
              <Link
                to="/"
                className="px-4 py-2 text-sm font-medium text-gray-700 hover:text-logistics-blue hover:bg-gray-50 rounded-md transition-all duration-200"
              >
                Home
              </Link>

              {/* Services Dropdown */}
              <DropdownMenu open={servicesOpen} onOpenChange={setServicesOpen}>
                <DropdownMenuTrigger asChild>
                  <button
                    onMouseEnter={() => setServicesOpen(true)}
                    onMouseLeave={() => setServicesOpen(false)}
                    className="flex items-center gap-1 px-4 py-2 text-sm font-medium text-gray-700 hover:text-logistics-blue hover:bg-gray-50 rounded-md transition-all duration-200"
                  >
                    <Truck className="w-4 h-4" />
                    Services
                    <ChevronDown className="w-3.5 h-3.5" />
                  </button>
                </DropdownMenuTrigger>
                <DropdownMenuContent
                  align="start"
                  className="w-72 p-3"
                  onMouseEnter={() => setServicesOpen(true)}
                  onMouseLeave={() => setServicesOpen(false)}
                >
                  <DropdownMenuItem
                    onClick={() => handleNavigation('/services/same-day-delivery')}
                    className="cursor-pointer p-3 rounded-md focus:bg-gray-50"
                  >
                    <div>
                      <div className="font-semibold text-gray-900 mb-1">Same Day Delivery</div>
                      <div className="text-xs text-gray-600">Urgent deliveries with rapid collection</div>
                    </div>
                  </DropdownMenuItem>
                  <DropdownMenuItem
                    onClick={() => handleNavigation('/services/timed-delivery')}
                    className="cursor-pointer p-3 rounded-md focus:bg-gray-50"
                  >
                    <div>
                      <div className="font-semibold text-gray-900 mb-1">Timed Delivery</div>
                      <div className="text-xs text-gray-600">Scheduled pickup with guaranteed time slots</div>
                    </div>
                  </DropdownMenuItem>
                  <DropdownMenuItem
                    onClick={() => handleNavigation('/services/light-haulage')}
                    className="cursor-pointer p-3 rounded-md focus:bg-gray-50"
                  >
                    <div>
                      <div className="font-semibold text-gray-900 mb-1">Light Haulage</div>
                      <div className="text-xs text-gray-600">From small packages to large palletised goods</div>
                    </div>
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>

              <Link
                to="/fleet"
                className="px-4 py-2 text-sm font-medium text-gray-700 hover:text-logistics-blue hover:bg-gray-50 rounded-md transition-all duration-200"
              >
                Our Fleet
              </Link>

              {/* Locations Dropdown */}
              <DropdownMenu open={locationsOpen} onOpenChange={setLocationsOpen}>
                <DropdownMenuTrigger asChild>
                  <button
                    onMouseEnter={() => setLocationsOpen(true)}
                    onMouseLeave={() => setLocationsOpen(false)}
                    className="flex items-center gap-1 px-4 py-2 text-sm font-medium text-gray-700 hover:text-logistics-blue hover:bg-gray-50 rounded-md transition-all duration-200"
                  >
                    <MapPin className="w-4 h-4" />
                    Locations
                    <ChevronDown className="w-3.5 h-3.5" />
                  </button>
                </DropdownMenuTrigger>
                <DropdownMenuContent
                  align="start"
                  className="w-72 p-3"
                  onMouseEnter={() => setLocationsOpen(true)}
                  onMouseLeave={() => setLocationsOpen(false)}
                >
                  <DropdownMenuItem
                    onClick={() => handleNavigation('/locations')}
                    className="cursor-pointer p-3 rounded-md focus:bg-gray-50 mb-1"
                  >
                    <div>
                      <div className="font-semibold text-gray-900 mb-1">All Locations</div>
                      <div className="text-xs text-gray-600">View all cities and areas we cover nationwide</div>
                    </div>
                  </DropdownMenuItem>
                  <DropdownMenuSeparator className="my-2" />
                  {[
                    { path: "/locations/london", title: "London", desc: "Express collection across Greater London" },
                    { path: "/locations/birmingham", title: "Birmingham", desc: "Professional service in West Midlands" },
                    { path: "/locations/manchester", title: "Manchester", desc: "Rapid collections in Greater Manchester" },
                    { path: "/locations/derby", title: "Derby", desc: "Fast local service across Derbyshire" }
                  ].map((location) => (
                    <DropdownMenuItem
                      key={location.path}
                      onClick={() => handleNavigation(location.path)}
                      className="cursor-pointer p-2.5 rounded-md focus:bg-gray-50"
                    >
                      <div>
                        <div className="font-medium text-gray-900 text-sm mb-0.5">{location.title}</div>
                        <div className="text-xs text-gray-600">{location.desc}</div>
                      </div>
                    </DropdownMenuItem>
                  ))}
                </DropdownMenuContent>
              </DropdownMenu>

              {/* Industries Dropdown */}
              <DropdownMenu open={industriesOpen} onOpenChange={setIndustriesOpen}>
                <DropdownMenuTrigger asChild>
                  <button
                    onMouseEnter={() => setIndustriesOpen(true)}
                    onMouseLeave={() => setIndustriesOpen(false)}
                    className="flex items-center gap-1 px-4 py-2 text-sm font-medium text-gray-700 hover:text-logistics-blue hover:bg-gray-50 rounded-md transition-all duration-200"
                  >
                    <Building className="w-4 h-4" />
                    Industries
                    <ChevronDown className="w-3.5 h-3.5" />
                  </button>
                </DropdownMenuTrigger>
                <DropdownMenuContent
                  align="start"
                  className="w-72 p-3"
                  onMouseEnter={() => setIndustriesOpen(true)}
                  onMouseLeave={() => setIndustriesOpen(false)}
                >
                  {[
                    { path: "/industries/healthcare", title: "Healthcare & Medical", desc: "Medical supplies transport" },
                    { path: "/industries/legal-services", title: "Legal Services", desc: "Document delivery & court filing" },
                    { path: "/industries/construction", title: "Construction & Trade", desc: "Building materials logistics" },
                    { path: "/industries/retail", title: "Retail & E-commerce", desc: "Last-mile delivery solutions" },
                    { path: "/industries/manufacturing", title: "Manufacturing", desc: "Just-in-time parts delivery" },
                    { path: "/industries/residential", title: "Residential", desc: "House removals & furniture" }
                  ].map((item) => (
                    <DropdownMenuItem
                      key={item.path}
                      onClick={() => handleNavigation(item.path)}
                      className="cursor-pointer p-2.5 rounded-md focus:bg-gray-50"
                    >
                      <div>
                        <div className="font-medium text-gray-900 text-sm mb-0.5">{item.title}</div>
                        <div className="text-xs text-gray-600">{item.desc}</div>
                      </div>
                    </DropdownMenuItem>
                  ))}
                </DropdownMenuContent>
              </DropdownMenu>

              <Link
                to="/about"
                className="px-4 py-2 text-sm font-medium text-gray-700 hover:text-logistics-blue hover:bg-gray-50 rounded-md transition-all duration-200"
              >
                About
              </Link>

              <Link
                to="/contact"
                className="px-4 py-2 text-sm font-medium text-gray-700 hover:text-logistics-blue hover:bg-gray-50 rounded-md transition-all duration-200"
              >
                Contact
              </Link>

              {/* Admin Blog Link - Only show if admin */}
              {isAdmin && (
                <button
                  onClick={() => handleNavigation('/admin/blog')}
                  className="flex items-center gap-1 px-4 py-2 text-sm font-medium text-logistics-orange hover:bg-orange-50 rounded-md transition-all duration-200"
                >
                  <Settings className="w-4 h-4" />
                  Blog Admin
                </button>
              )}
            </nav>

            {/* Right side - CTA and Auth */}
            <div className="flex items-center gap-3">
              <Button
                onClick={() => navigate('/booking')}
                className="hidden lg:flex bg-logistics-orange hover:bg-logistics-orange-light text-white font-semibold px-6 py-2.5 rounded-md transition-all duration-200 shadow-sm hover:shadow-md"
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
                        className="flex items-center gap-2 px-3 py-2 rounded-md hover:bg-gray-50"
                      >
                        <div className="w-8 h-8 rounded-full bg-logistics-blue/10 flex items-center justify-center">
                          <User className="w-4 h-4 text-logistics-blue" />
                        </div>
                        <ChevronDown className="w-4 h-4 text-gray-500" />
                      </Button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent align="end" className="w-56 p-2">
                      <DropdownMenuItem
                        onClick={() => navigate('/profile')}
                        className="flex items-center gap-3 px-3 py-2.5 rounded-md cursor-pointer"
                      >
                        <User className="w-4 h-4 text-gray-600" />
                        <span className="text-sm font-medium text-gray-700">My Profile</span>
                      </DropdownMenuItem>
                      <DropdownMenuItem
                        onClick={() => navigate('/profile?tab=bookings')}
                        className="flex items-center gap-3 px-3 py-2.5 rounded-md cursor-pointer"
                      >
                        <Truck className="w-4 h-4 text-gray-600" />
                        <span className="text-sm font-medium text-gray-700">My Bookings</span>
                      </DropdownMenuItem>

                      {isAdmin && (
                        <>
                          <DropdownMenuSeparator className="my-2" />
                          <DropdownMenuItem
                            onClick={() => navigate('/admin/blog')}
                            className="flex items-center gap-3 px-3 py-2.5 rounded-md cursor-pointer hover:bg-orange-50"
                          >
                            <Settings className="w-4 h-4 text-logistics-orange" />
                            <span className="text-sm font-medium text-logistics-orange">Blog Admin</span>
                          </DropdownMenuItem>
                        </>
                      )}

                      <DropdownMenuSeparator className="my-2" />
                      <DropdownMenuItem
                        onClick={async (e) => {
                          e.preventDefault();
                          await handleSignOut();
                        }}
                        className="flex items-center gap-3 px-3 py-2.5 rounded-md cursor-pointer hover:bg-red-50"
                      >
                        <LogOut className="w-4 h-4 text-red-600" />
                        <span className="text-sm font-medium text-red-600">Sign Out</span>
                      </DropdownMenuItem>
                    </DropdownMenuContent>
                  </DropdownMenu>
                ) : (
                  <Button
                    onClick={() => navigate('/auth')}
                    variant="outline"
                    className="text-sm font-medium px-4 py-2 border-gray-300 hover:border-logistics-blue hover:text-logistics-blue"
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
                src="/lovable-uploads/4d1ca312-1fa6-4205-9ba7-717a631fe2fe.png"
                alt="Fleetory"
                className="h-20 w-auto"
              />
            </div>

            {/* Mobile Menu Content */}
            <nav className="flex-1 overflow-y-auto p-6">
              <div className="space-y-1">
                <button
                  onClick={() => {
                    handleNavigation('/');
                    closeMobileMenu();
                  }}
                  className="block w-full text-left px-4 py-3 rounded-lg text-gray-700 font-medium hover:bg-gray-50 transition-colors"
                >
                  Home
                </button>

                <div className="pt-4 pb-2">
                  <h3 className="px-4 text-xs font-semibold text-gray-400 uppercase tracking-wider">
                    Services
                  </h3>
                </div>
                <button
                  onClick={() => {
                    handleNavigation('/services/same-day-delivery');
                    closeMobileMenu();
                  }}
                  className="block w-full text-left px-4 py-3 rounded-lg text-gray-600 hover:bg-gray-50 transition-colors"
                >
                  Same Day Delivery
                </button>
                <button
                  onClick={() => {
                    handleNavigation('/services/timed-delivery');
                    closeMobileMenu();
                  }}
                  className="block w-full text-left px-4 py-3 rounded-lg text-gray-600 hover:bg-gray-50 transition-colors"
                >
                  Timed Delivery
                </button>
                <button
                  onClick={() => {
                    handleNavigation('/services/light-haulage');
                    closeMobileMenu();
                  }}
                  className="block w-full text-left px-4 py-3 rounded-lg text-gray-600 hover:bg-gray-50 transition-colors"
                >
                  Light Haulage
                </button>

                <button
                  onClick={() => {
                    handleNavigation('/fleet');
                    closeMobileMenu();
                  }}
                  className="block w-full text-left px-4 py-3 rounded-lg text-gray-700 font-medium hover:bg-gray-50 transition-colors"
                >
                  Our Fleet
                </button>

                <div className="pt-4 pb-2">
                  <h3 className="px-4 text-xs font-semibold text-gray-400 uppercase tracking-wider">
                    Locations
                  </h3>
                </div>
                <button
                  onClick={() => {
                    handleNavigation('/locations');
                    closeMobileMenu();
                  }}
                  className="block w-full text-left px-4 py-3 rounded-lg text-gray-700 font-medium hover:bg-gray-50 transition-colors"
                >
                  All Locations
                </button>
                <button
                  onClick={() => {
                    handleNavigation('/locations/london');
                    closeMobileMenu();
                  }}
                  className="block w-full text-left px-4 py-3 rounded-lg text-gray-600 hover:bg-gray-50 transition-colors"
                >
                  London
                </button>
                <button
                  onClick={() => {
                    handleNavigation('/locations/birmingham');
                    closeMobileMenu();
                  }}
                  className="block w-full text-left px-4 py-3 rounded-lg text-gray-600 hover:bg-gray-50 transition-colors"
                >
                  Birmingham
                </button>
                <button
                  onClick={() => {
                    handleNavigation('/locations/manchester');
                    closeMobileMenu();
                  }}
                  className="block w-full text-left px-4 py-3 rounded-lg text-gray-600 hover:bg-gray-50 transition-colors"
                >
                  Manchester
                </button>
                <button
                  onClick={() => {
                    handleNavigation('/locations/derby');
                    closeMobileMenu();
                  }}
                  className="block w-full text-left px-4 py-3 rounded-lg text-gray-600 hover:bg-gray-50 transition-colors"
                >
                  Derby
                </button>

                <div className="pt-4 pb-2">
                  <h3 className="px-4 text-xs font-semibold text-gray-400 uppercase tracking-wider">
                    Industries
                  </h3>
                </div>
                {[
                  { path: "/industries/healthcare", title: "Healthcare & Medical" },
                  { path: "/industries/legal-services", title: "Legal Services" },
                  { path: "/industries/construction", title: "Construction & Trade" },
                  { path: "/industries/retail", title: "Retail & E-commerce" },
                  { path: "/industries/manufacturing", title: "Manufacturing" },
                  { path: "/industries/residential", title: "Residential" }
                ].map((item) => (
                  <button
                    key={item.path}
                    onClick={() => {
                      handleNavigation(item.path);
                      closeMobileMenu();
                    }}
                    className="block w-full text-left px-4 py-3 rounded-lg text-gray-600 hover:bg-gray-50 transition-colors"
                  >
                    {item.title}
                  </button>
                ))}

                <button
                  onClick={() => {
                    handleNavigation('/about');
                    closeMobileMenu();
                  }}
                  className="block w-full text-left px-4 py-3 rounded-lg text-gray-700 font-medium hover:bg-gray-50 transition-colors"
                >
                  About Us
                </button>

                <button
                  onClick={() => {
                    handleNavigation('/contact');
                    closeMobileMenu();
                  }}
                  className="block w-full text-left px-4 py-3 rounded-lg text-gray-700 font-medium hover:bg-gray-50 transition-colors"
                >
                  Contact Us
                </button>

                {/* Admin Blog Link for Mobile */}
                {isAdmin && (
                  <button
                    onClick={() => {
                      handleNavigation('/admin/blog');
                      closeMobileMenu();
                    }}
                    className="block w-full text-left px-4 py-3 rounded-lg text-logistics-orange font-medium hover:bg-orange-50 transition-colors"
                  >
                    Blog Admin
                  </button>
                )}
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

                  {isAdmin && (
                    <Button
                      variant="ghost"
                      onClick={() => {
                        navigate('/admin/blog');
                        closeMobileMenu();
                      }}
                      className="w-full justify-start text-logistics-orange hover:text-logistics-orange-light"
                    >
                      <Settings className="w-4 h-4 mr-3" />
                      Blog Admin
                    </Button>
                  )}

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
