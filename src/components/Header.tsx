// src/components/Header.tsx
import { Button } from "@/components/ui/button";
import { NavigationMenu, NavigationMenuContent, NavigationMenuItem, NavigationMenuLink, NavigationMenuList, NavigationMenuTrigger } from "@/components/ui/navigation-menu";
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger, DropdownMenuSeparator } from "@/components/ui/dropdown-menu";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { cn } from "@/lib/utils";
import { useAuth } from "@/hooks/useAuth";
import { User, LogOut, Menu, ChevronDown, Truck, Building, Phone, FileText, BookOpen, Settings } from "lucide-react";
import { toast } from "sonner";
import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";

const Header = () => {
  const { user, signOut, isAdmin } = useAuth();
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

  // Helper function to handle navigation
  const handleNavigation = (path: string) => {
    navigate(path);
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white shadow-md">
      <div className="w-full">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16 lg:h-20">
            {/* Logo */}
            <Link 
              to="/" 
              className="flex items-center hover:opacity-90 transition-opacity duration-200"
            >
              <img 
                src="/lovable-uploads/a79e44cd-5cd8-4248-aa3a-3b2071208a15.png" 
                alt="Fleetory Logo" 
                className="" style={{ height: '200px' }} 
              />
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center gap-1">
              <NavigationMenu>
                <NavigationMenuList className="flex items-center gap-1">
                  <NavigationMenuItem>
                    <button
                      onClick={() => handleNavigation('/')}
                      className="px-4 py-2 text-sm font-medium text-gray-700 hover:text-logistics-blue hover:bg-gray-50 rounded-lg transition-all duration-200"
                    >
                      Home
                    </button>
                  </NavigationMenuItem>

                  <NavigationMenuItem>
                    <NavigationMenuTrigger className="px-4 py-2 text-sm font-medium text-gray-700 hover:text-logistics-blue hover:bg-gray-50 rounded-lg transition-all duration-200">
                      <Truck className="w-4 h-4 mr-2" />
                      Services
                    </NavigationMenuTrigger>
                    <NavigationMenuContent>
                      <div className="w-[400px] p-4 bg-white shadow-xl rounded-xl border border-gray-100">
                        <div className="grid gap-2">
                          <button
                            onClick={() => handleNavigation('/services/same-day-delivery')}
                            className="block w-full text-left p-4 rounded-lg hover:bg-gray-50 transition-all duration-200 group"
                          >
                            <div className="font-semibold text-gray-900 group-hover:text-logistics-blue mb-1">
                              Same Day Delivery
                            </div>
                            <div className="text-sm text-gray-600">
                              Urgent deliveries with rapid collection
                            </div>
                          </button>
                          <button
                            onClick={() => handleNavigation('/services/timed-delivery')}
                            className="block w-full text-left p-4 rounded-lg hover:bg-gray-50 transition-all duration-200 group"
                          >
                            <div className="font-semibold text-gray-900 group-hover:text-logistics-blue mb-1">
                              Timed Delivery
                            </div>
                            <div className="text-sm text-gray-600">
                              Scheduled pickup with guaranteed time slots
                            </div>
                          </button>
                          <button
                            onClick={() => handleNavigation('/services/light-haulage')}
                            className="block w-full text-left p-4 rounded-lg hover:bg-gray-50 transition-all duration-200 group"
                          >
                            <div className="font-semibold text-gray-900 group-hover:text-logistics-blue mb-1">
                              Light Haulage
                            </div>
                            <div className="text-sm text-gray-600">
                              From small packages to large palletised goods
                            </div>
                          </button>
                        </div>
                      </div>
                    </NavigationMenuContent>
                  </NavigationMenuItem>

                  <NavigationMenuItem>
                    <button
                      onClick={() => handleNavigation('/fleet')}
                      className="px-4 py-2 text-sm font-medium text-gray-700 hover:text-logistics-blue hover:bg-gray-50 rounded-lg transition-all duration-200"
                    >
                      Our Fleet
                    </button>
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
                            { path: "/industries/healthcare", title: "Healthcare & Medical", desc: "Medical supplies transport" },
                            { path: "/industries/legal-services", title: "Legal Services", desc: "Document delivery & court filing" },
                            { path: "/industries/construction", title: "Construction & Trade", desc: "Building materials logistics" },
                            { path: "/industries/retail", title: "Retail & E-commerce", desc: "Last-mile delivery solutions" },
                            { path: "/industries/manufacturing", title: "Manufacturing", desc: "Just-in-time parts delivery" },
                            { path: "/industries/residential", title: "Residential", desc: "House removals & furniture" }
                          ].map((item) => (
                            <button
                              key={item.path}
                              onClick={() => handleNavigation(item.path)}
                              className="block w-full text-left p-3 rounded-lg hover:bg-gray-50 transition-all duration-200 group"
                            >
                              <div className="font-semibold text-gray-900 group-hover:text-logistics-blue text-sm mb-0.5">
                                {item.title}
                              </div>
                              <div className="text-xs text-gray-600">
                                {item.desc}
                              </div>
                            </button>
                          ))}
                        </div>
                      </div>
                    </NavigationMenuContent>
                  </NavigationMenuItem>

                  <NavigationMenuItem>
                    <button
                      onClick={() => handleNavigation('/about')}
                      className="px-4 py-2 text-sm font-medium text-gray-700 hover:text-logistics-blue hover:bg-gray-50 rounded-lg transition-all duration-200"
                    >
                      About
                    </button>
                  </NavigationMenuItem>

                  {/* Blog Link */}
                  <NavigationMenuItem>
                    <button
                      onClick={() => handleNavigation('/blog')}
                      className="px-4 py-2 text-sm font-medium text-gray-700 hover:text-logistics-blue hover:bg-gray-50 rounded-lg transition-all duration-200"
                    >
                      Blog
                    </button>
                  </NavigationMenuItem>

                  <NavigationMenuItem>
                    <button
                      onClick={() => handleNavigation('/contact')}
                      className="px-4 py-2 text-sm font-medium text-gray-700 hover:text-logistics-blue hover:bg-gray-50 rounded-lg transition-all duration-200"
                    >
                      Contact
                    </button>
                  </NavigationMenuItem>

                  {/* Admin Blog Link - Only show if admin */}
                  {isAdmin && (
                    <NavigationMenuItem>
                      <button
                        onClick={() => handleNavigation('/admin/blog')}
                        className="px-4 py-2 text-sm font-medium text-logistics-orange hover:text-logistics-orange-light hover:bg-orange-50 rounded-lg transition-all duration-200 flex items-center"
                      >
                        <Settings className="w-4 h-4 mr-1" />
                        Blog Admin
                      </button>
                    </NavigationMenuItem>
                  )}
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
                        onClick={() => navigate('/profile?tab=bookings')}
                        className="flex items-center gap-3 px-3 py-2 rounded-md hover:bg-gray-50 cursor-pointer"
                      >
                        <FileText className="w-4 h-4 text-gray-600" />
                        <span className="text-sm font-medium text-gray-700">My Bookings</span>
                      </DropdownMenuItem>
                      
                      {/* Admin Blog Menu Item */}
                      {isAdmin && (
                        <>
                          <DropdownMenuSeparator className="my-2" />
                          <DropdownMenuItem 
                            onClick={() => navigate('/admin/blog')}
                            className="flex items-center gap-3 px-3 py-2 rounded-md hover:bg-orange-50 cursor-pointer"
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
                <Menu className="h-10 w-10 text-gray-700" />
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
                    handleNavigation('/blog');
                    closeMobileMenu();
                  }}
                  className="block w-full text-left px-4 py-3 rounded-lg text-gray-700 font-medium hover:bg-gray-50 transition-colors"
                >
                  Blog
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