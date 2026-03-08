import React, { useState } from "react";
import { Menu, X } from "lucide-react";
import { Link, useLocation } from "react-router-dom";

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  const isHome = location.pathname === "/";

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, targetId: string) => {
    if (isHome) {
      e.preventDefault();
      const element = document.getElementById(targetId);
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
      setIsMenuOpen(false);
      // Update URL hash without jumping
      window.history.pushState(null, '', `#${targetId}`);
    } else {
      setIsMenuOpen(false);
    }
  };

  return (
    <nav className="fixed top-0 w-full z-50 bg-slate-950/90 backdrop-blur-md border-b border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-20 items-center">
          <Link to="/" className="flex-shrink-0 flex items-center">
            {/* Mobile Image Logo */}
            <img 
              src="https://drive.google.com/thumbnail?id=12r0hKSKqsKS3Y8HQ2HQubE02-_kc8STB&sz=w800" 
              alt="Euro Motor Clinic Logo" 
              className="h-10 w-auto object-contain md:hidden"
              referrerPolicy="no-referrer"
            />
            {/* Desktop Text Logo */}
            <div className="hidden md:flex flex-col justify-center items-center">
              <span 
                className="text-5xl font-black tracking-wider text-brand-green leading-none"
                style={{ 
                  fontFamily: 'var(--font-orbitron)',
                  textShadow: '2px 2px 0 #000, -1px -1px 0 #000, 1px -1px 0 #000, -1px 1px 0 #000, 1px 1px 0 #000'
                }}
              >
                EURO
              </span>
              <div className="border border-brand-yellow w-full flex items-center justify-center mt-1 py-[3px] bg-slate-950/50">
                <span 
                  className="text-[0.65rem] font-bold tracking-[0.2em] text-brand-yellow leading-none"
                  style={{ fontFamily: 'var(--font-orbitron)' }}
                >
                  MOTOR CLINIC
                </span>
              </div>
            </div>
          </Link>
          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            <Link to={isHome ? "#services" : "/#services"} onClick={(e) => handleNavClick(e, 'services')} className="text-sm font-medium text-brand-green hover:text-brand-green-hover transition-colors">Services</Link>
            <Link to="/outlaw-conversions" className="text-sm font-medium text-brand-green hover:text-brand-green-hover transition-colors">Outlaw Conversions</Link>
            <Link to={isHome ? "#gallery" : "/#gallery"} onClick={(e) => handleNavClick(e, 'gallery')} className="text-sm font-medium text-brand-green hover:text-brand-green-hover transition-colors">Gallery</Link>
            <Link to={isHome ? "#team" : "/#team"} onClick={(e) => handleNavClick(e, 'team')} className="text-sm font-medium text-brand-green hover:text-brand-green-hover transition-colors">Team</Link>
            <Link to={isHome ? "#book" : "/#book"} onClick={(e) => handleNavClick(e, 'book')} className="px-5 py-2.5 bg-brand-green hover:bg-brand-green-hover text-slate-950 text-sm font-bold rounded-lg transition-colors">
              Book Service
            </Link>
          </div>
          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center">
            <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="text-brand-green hover:text-brand-green-hover">
              {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>
      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-slate-900 border-b border-slate-800">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <Link to={isHome ? "#services" : "/#services"} onClick={(e) => handleNavClick(e, 'services')} className="block px-3 py-2 text-base font-medium text-brand-green hover:text-brand-green-hover">Services</Link>
            <Link to="/outlaw-conversions" onClick={() => setIsMenuOpen(false)} className="block px-3 py-2 text-base font-medium text-brand-green hover:text-brand-green-hover">Outlaw Conversions</Link>
            <Link to={isHome ? "#gallery" : "/#gallery"} onClick={(e) => handleNavClick(e, 'gallery')} className="block px-3 py-2 text-base font-medium text-brand-green hover:text-brand-green-hover">Gallery</Link>
            <Link to={isHome ? "#team" : "/#team"} onClick={(e) => handleNavClick(e, 'team')} className="block px-3 py-2 text-base font-medium text-brand-green hover:text-brand-green-hover">Team</Link>
            <Link to={isHome ? "#book" : "/#book"} onClick={(e) => handleNavClick(e, 'book')} className="block px-3 py-2 text-base font-bold text-brand-yellow">Book Service</Link>
          </div>
        </div>
      )}
    </nav>
  );
}
