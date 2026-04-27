import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Droplet, Menu, X } from 'lucide-react';
import { cn } from '../../lib/utils';

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const isHome = location.pathname === '/';
  const isTransparent = isHome && !isScrolled;

  const navLinks = [
    { name: 'Начало', path: '/' },
    { name: 'Продукт', path: '/product' },
    { name: 'Контакти', path: '/#contact' }
  ];

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300 ease-in-out",
        isTransparent 
          ? "bg-transparent py-5 border-b border-transparent" 
          : "bg-white/95 backdrop-blur-md shadow-sm border-b border-gray-100 py-3"
      )}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          <Link to="/" className="flex items-center gap-2 group">
            <span className={cn("font-semibold text-xl tracking-tight", isTransparent ? "text-white" : "text-text-main")}>
              Hydrogen<span className={isTransparent ? "text-white/80" : "text-brand-primary"}>Health</span>
            </span>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => {
              const isActive = location.pathname === link.path && !link.path.includes('#');
              
              if (link.path.includes('#')) {
                return (
                  <a
                    key={link.name}
                    href={link.path}
                    className={cn(
                      "text-sm font-medium tracking-tight uppercase transition-colors hover:text-brand-primary relative after:absolute after:-bottom-1 after:left-0 after:h-[2px] after:transition-all hover:after:w-full",
                      isTransparent ? "text-white/80 hover:text-white after:w-0 after:bg-white" : "text-text-main/80 hover:text-brand-primary after:w-0 after:bg-brand-primary"
                    )}
                  >
                    {link.name}
                  </a>
                );
              }

              return (
                <Link
                  key={link.name}
                  to={link.path}
                  className={cn(
                    "text-sm font-medium tracking-tight uppercase transition-colors hover:text-brand-primary relative after:absolute after:-bottom-1 after:left-0 after:h-[2px] after:transition-all hover:after:w-full",
                    isActive
                      ? (isTransparent ? "text-white after:w-full after:bg-white" : "text-brand-primary after:w-full after:bg-brand-primary")
                      : (isTransparent ? "text-white/80 hover:text-white after:w-0 after:bg-white" : "text-text-main/80 hover:text-brand-primary after:w-0 after:bg-brand-primary")
                  )}
                >
                  {link.name}
                </Link>
              )
            })}
            <a
              href="/#contact"
              className={cn(
                "px-6 py-2.5 rounded-full text-sm font-medium tracking-tight transition-all shadow-md hover:shadow-lg transform hover:-translate-y-0.5",
                isTransparent
                  ? "bg-white text-brand-primary hover:bg-brand-light"
                  : "bg-brand-primary text-white hover:bg-brand-primary-light"
              )}
            >
              Поръчай сега
            </a>
          </nav>

          {/* Mobile Menu Button */}
          <button
            className={cn("md:hidden p-2", isTransparent ? "text-white" : "text-text-main")}
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      {mobileMenuOpen && (
        <div className="md:hidden absolute top-full left-0 w-full bg-white shadow-xl border-t border-gray-100 flex flex-col py-4 px-6 gap-4">
          {navLinks.map((link) => {
            if (link.path.includes('#')) {
              return (
                <a
                  key={link.name}
                  href={link.path}
                  onClick={() => setMobileMenuOpen(false)}
                  className="py-2 text-lg font-medium text-text-main"
                >
                  {link.name}
                </a>
              );
            }
            return (
              <Link
                key={link.name}
                to={link.path}
                onClick={() => setMobileMenuOpen(false)}
                className={cn(
                  "py-2 text-lg font-medium",
                  location.pathname === link.path ? "text-brand-primary" : "text-text-main"
                )}
              >
                {link.name}
              </Link>
            );
          })}
          <a
            href="/#contact"
            onClick={() => setMobileMenuOpen(false)}
            className="mt-2 text-center py-3 bg-brand-primary text-white rounded-full font-medium"
          >
            Поръчай сега
          </a>
        </div>
      )}
    </header>
  );
}
