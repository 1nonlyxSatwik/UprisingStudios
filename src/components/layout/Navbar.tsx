import { Link, useLocation } from "wouter";
import { useState, useEffect } from "react";
import { Menu, X, Phone } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export default function Navbar() {
  const [location] = useLocation();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { name: "Portfolio", path: "/portfolio" },
  ];

  return (
    <motion.header
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.7, delay: 2.2, ease: "easeOut" }}
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ${
        isScrolled
          ? "bg-black/40 backdrop-blur-2xl border-b border-white/10 shadow-[0_8px_32px_rgba(0,0,0,0.4)]"
          : "bg-transparent border-b border-transparent"
      }`}
    >
      <div className="container mx-auto px-4 h-20 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-3 group">
          <div className="relative w-9 h-9">
            <div className="absolute inset-0 bg-[#ff1a1a] rounded-md rotate-45 shadow-[0_0_20px_rgba(255,26,26,0.6)] group-hover:shadow-[0_0_30px_rgba(255,26,26,0.9)] transition-shadow duration-300" />
            <div className="absolute inset-[30%] bg-black rounded-sm rotate-45" />
          </div>
          <div className="flex flex-col leading-none">
            <span className="text-base font-black tracking-[0.15em] text-white">UPRISING</span>
            <span className="text-[10px] font-light tracking-[0.4em] text-[#ff1a1a]">STUDIOS</span>
          </div>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-12">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.path}
              className={`text-sm font-medium transition-all duration-200 relative group ${
                location === link.path ? "text-white" : "text-white/50 hover:text-white"
              }`}
            >
              {link.name}
              <span className={`absolute -bottom-1 left-0 h-[1px] bg-[#ff1a1a] transition-all duration-300 ${
                location === link.path ? "w-full" : "w-0 group-hover:w-full"
              }`} />
            </Link>
          ))}

          {/* Refined Book a Call button */}
          <Link href="/book">
            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="flex items-center gap-2 px-6 py-2.5 rounded-full text-sm font-medium text-white transition-colors"
              style={{
                backgroundColor: "#e60000",
                boxShadow: "0 2px 10px rgba(230,0,0,0.2)",
              }}
            >
              <Phone size={14} />
              <span>Book a Call</span>
            </motion.button>
          </Link>
        </nav>

        {/* Mobile toggle */}
        <button
          className="md:hidden text-white p-2"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.2 }}
            className="md:hidden absolute top-20 left-0 w-full p-4 flex flex-col gap-4 bg-black/80 backdrop-blur-2xl border-t border-white/10"
          >
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.path}
                className="text-lg font-medium p-3 block border-b border-white/5 hover:text-[#ff1a1a] transition-colors"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {link.name}
              </Link>
            ))}
            <Link href="/book" onClick={() => setIsMobileMenuOpen(false)}>
              <button className="w-full mt-2 py-3 rounded-full font-bold text-white"
                style={{ background: "linear-gradient(135deg, #ff1a1a 0%, #8b0000 100%)" }}>
                Book a Call
              </button>
            </Link>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
