import { Link } from "wouter";
import { motion } from "framer-motion";

export default function Footer() {
  return (
    <footer className="w-full border-t border-white/5 relative overflow-hidden">
      {/* Glass background */}
      <div className="absolute inset-0 bg-black/60 backdrop-blur-xl" />
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[80%] h-[1px] bg-gradient-to-r from-transparent via-[#ff1a1a]/50 to-transparent" />
      <div className="absolute bottom-0 right-0 w-[400px] h-[400px] rounded-full bg-[#ff1a1a]/5 blur-[100px] pointer-events-none" />

      <div className="relative z-10 container mx-auto px-4 pt-16 pb-8 grid grid-cols-1 md:grid-cols-4 gap-8">
        <div className="col-span-1 md:col-span-2">
          <Link href="/" className="flex items-center gap-3 mb-5 group">
            <div className="relative w-8 h-8">
              <div className="absolute inset-0 bg-[#ff1a1a] rounded-md rotate-45 shadow-[0_0_15px_rgba(255,26,26,0.5)]" />
              <div className="absolute inset-[30%] bg-black rounded-sm rotate-45" />
            </div>
            <div className="flex flex-col leading-none">
              <span className="text-sm font-black tracking-[0.15em] text-white">UPRISING</span>
              <span className="text-[9px] font-light tracking-[0.4em] text-[#ff1a1a]">STUDIOS</span>
            </div>
          </Link>
          <p className="text-white/40 text-sm max-w-sm mb-6 leading-relaxed">
            A fierce, ambitious web development agency. We build digital experiences that command authority and drive real growth.
          </p>

          <div className="mt-8 text-xs text-white/20 font-mono">
            &copy; {new Date().getFullYear()} Uprising Studios. All rights reserved.
          </div>
        </div>

        <div>
          <h4 className="font-bold mb-5 uppercase tracking-widest text-xs text-white/50">Navigation</h4>
          <ul className="flex flex-col gap-3">
            {[["Home", "/"], ["About", "/about"], ["Portfolio", "/portfolio"], ["Book a Call", "/book"]].map(([name, path]) => (
              <li key={name}>
                <Link href={path} className="text-white/40 hover:text-[#ff1a1a] transition-colors text-sm group flex items-center gap-2">
                  <span className="w-0 group-hover:w-3 h-[1px] bg-[#ff1a1a] transition-all duration-200 inline-block" />
                  {name}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h4 className="font-bold mb-5 uppercase tracking-widest text-xs text-white/50">Contact</h4>
          <ul className="flex flex-col gap-3 text-sm text-white/40">
            <li>Sonipat, Haryana</li>
            <li>India</li>
            <li className="mt-3 flex flex-col gap-2">
              <a href="mailto:uprisingstudio25@gmail.com" className="hover:text-[#ff1a1a] transition-colors">
                uprisingstudio25@gmail.com
              </a>
              <a href="tel:+918569934323" className="hover:text-[#ff1a1a] transition-colors">
                +91 85699 34323
              </a>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
}
