import { motion, AnimatePresence, type Variants } from "framer-motion";
import { useState } from "react";
import { X } from "lucide-react";
import portfolio1 from "@/assets/portfolio-1.png";
import portfolio2 from "@/assets/portfolio-2.png";
import portfolio3 from "@/assets/portfolio-3.png";

import heroImg from "@/assets/concept/hero.png";
import aboutImg from "@/assets/concept/about.png";
import typoImg from "@/assets/concept/typo.png";
import featuredImg from "@/assets/concept/featured.png";

import AnimatedSection from "@/components/AnimatedSection";

const fallbacks = [portfolio1, portfolio2, portfolio3];

const staggerContainer: Variants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.08 } },
};

const cardVariant: Variants = {
  hidden: { opacity: 0, y: 30, scale: 0.97 },
  show: { opacity: 1, y: 0, scale: 1, transition: { duration: 0.5, ease: "easeOut" } },
};

const projects = [
  {
    id: 1,
    title: "Uprising Studios Portfolio",
    category: "Agency Website",
    description: "A high-converting agency website built with modern UI, smooth animations, and a focus on performance and conversion. Designed to showcase services, portfolio, and capture leads effectively.",
    images: [heroImg, aboutImg, typoImg, featuredImg],
    tech: ["React", "Tailwind", "Framer Motion"],
  },
];

export default function Portfolio() {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [selectedProject, setSelectedProject] = useState<any>(null);

  return (
    <div className="w-full min-h-screen pb-28 pt-10 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-[#0b0b0b]" />
      <div className="absolute top-0 left-1/4 w-[600px] h-[600px] rounded-full pointer-events-none"
        style={{ background: "radial-gradient(circle, rgba(255,26,26,0.06) 0%, transparent 70%)" }} />
      <div className="absolute inset-0 opacity-[0.025]"
        style={{
          backgroundImage: "linear-gradient(rgba(255,26,26,1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,26,26,1) 1px, transparent 1px)",
          backgroundSize: "80px 80px"
        }}
      />

      <div className="container px-4 mx-auto relative z-10">

        {/* Header */}
        <div className="pt-16 mb-16 text-center">
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-xs font-mono tracking-[0.4em] text-[#ff1a1a] mb-4 uppercase"
          >
            Selected Work
          </motion.p>
          <div className="overflow-hidden">
            <motion.h1
              initial={{ y: 60, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.6, ease: "easeOut" }}
              className="text-5xl md:text-7xl font-black uppercase tracking-tight mb-6"
            >
              Our <span className="text-[#ff1a1a]" style={{ filter: "drop-shadow(0 0 20px rgba(255,26,26,0.5))" }}>Work</span>
            </motion.h1>
          </div>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
            className="text-white/40 max-w-xl mx-auto font-mono text-sm"
          >
            We don't just build websites. We engineer digital assets that command authority and drive revenue.
          </motion.p>
        </div>

        {/* Filters */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="flex flex-wrap justify-center gap-3 mb-14"
        >
          <span className="px-5 py-2 rounded-full text-sm font-mono tracking-wider bg-linear-gradient(135deg, #ff1a1a, #8b0000) color: #fff boxShadow: 0 0 20px rgba(255,26,26,0.4) border: 1px solid rgba(255,26,26,0.5)">
            Agency Website
          </span>
        </motion.div>

        {/* Grid */}
        <AnimatePresence mode="wait">
          <motion.div
            className="flex justify-center"
            variants={staggerContainer}
            initial="hidden"
            animate="show"
          >
            {projects.map((project, i) => (
              <motion.div
                key={project.id}
                variants={cardVariant}
                whileHover={{ y: -8, scale: 1.01, boxShadow: "0 30px 60px rgba(0,0,0,0.6), 0 0 40px rgba(255,26,26,0.12)" }}
                data-cursor="card"
                className="group relative rounded-2xl overflow-hidden flex flex-col max-w-lg"
                style={{
                  background: "rgba(255,255,255,0.02)",
                  border: "1px solid rgba(255,255,255,0.06)",
                  backdropFilter: "blur(16px)",
                  boxShadow: "0 20px 40px rgba(0,0,0,0.4)",
                }}
              >
                {/* Hover glow */}
                <motion.div
                  className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none rounded-2xl z-20"
                  style={{ boxShadow: "inset 0 0 60px rgba(255,26,26,0.1), 0 0 40px rgba(255,26,26,0.1)" }}
                />
                {/* Top border glow */}
                <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-[#ff1a1a]/0 to-transparent group-hover:via-[#ff1a1a]/60 transition-all duration-500 z-20" />

                {/* Image */}
                <div className="relative aspect-video overflow-hidden">
                  <img
                    src={project.images[currentImageIndex]}
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
                  {/* Hover overlay */}
                  <motion.div
                    className="absolute inset-0 flex items-center justify-center gap-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                    style={{ backdropFilter: "blur(4px)", background: "rgba(0,0,0,0.4)" }}
                  >
                    <button
                      onClick={() => setSelectedProject(project)}
                      className="flex items-center gap-2 px-5 py-2.5 rounded-full font-mono text-xs text-white transition-all cursor-pointer"
                      style={{
                        background: "linear-gradient(135deg, #ff1a1a, #8b0000)",
                        boxShadow: "0 0 20px rgba(255,26,26,0.4)",
                      }}
                    >
                      View Project Detail
                    </button>
                  </motion.div>
                  {/* Dots */}
                  <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex gap-2">
                    {project.images.map((_, idx) => (
                      <button
                        key={idx}
                        onClick={() => setCurrentImageIndex(idx)}
                        className={`w-2 h-2 rounded-full transition ${idx === currentImageIndex ? 'bg-red-500' : 'bg-white/30'}`}
                      />
                    ))}
                  </div>
                </div>

                {/* Content */}
                <div className="p-6 flex flex-col flex-1">
                  <span className="text-[10px] font-mono text-[#ff1a1a] mb-2 uppercase tracking-[0.3em]">{project.category}</span>
                  <h3 className="text-lg font-bold mb-2 tracking-wide">{project.title}</h3>
                  <p className="text-white/40 text-sm flex-1 mb-5 leading-relaxed">{project.description}</p>
                  <div className="flex flex-wrap gap-2 pt-4 border-t border-white/5">
                    {project.tech.map((tech, idx) => (
                      <span key={idx} className="text-[10px] px-2.5 py-1 rounded-full font-mono text-white/40"
                        style={{ background: "rgba(255,255,255,0.04)", border: "1px solid rgba(255,255,255,0.07)" }}>
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </AnimatePresence>

        {projects.length === 0 && (
          <div className="text-center py-20 text-white/20 font-mono">
            No projects found.
          </div>
        )}
      </div>

      {/* Detail Overlay */}
      <AnimatePresence>
        {selectedProject && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 overflow-y-auto bg-black/90 backdrop-blur-md"
          >
            <div className="fixed top-6 right-6 z-50">
              <button 
                onClick={() => setSelectedProject(null)}
                className="p-3 bg-[#111] hover:bg-[#222] border border-white/10 hover:text-[#ff1a1a] rounded-full text-white transition-colors"
              >
                <X size={24} />
              </button>
            </div>
            
            <div className="max-w-4xl mx-auto px-4 py-20 relative">
              <motion.div
                initial={{ y: 40, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.2 }}
                className="text-center mb-16"
              >
                <p className="text-sm font-mono tracking-[0.4em] text-[#ff1a1a] uppercase mb-4">{selectedProject.category}</p>
                <h2 className="text-4xl md:text-6xl font-black tracking-tight mb-6 text-white">{selectedProject.title}</h2>
                <p className="text-lg text-white/50 max-w-2xl mx-auto leading-relaxed">{selectedProject.description}</p>
              </motion.div>

              <div className="space-y-24">
                {selectedProject.images.map((image: string, index: number) => (
                  <motion.div 
                    key={index}
                    initial={{ y: 40, opacity: 0 }} 
                    animate={{ y: 0, opacity: 1 }} 
                    transition={{ delay: 0.3 + index * 0.1 }}
                    className="flex flex-col gap-6"
                  >
                    <div className="relative w-full aspect-video bg-[#050505] rounded-2xl overflow-hidden border border-white/10 shadow-[0_20px_50px_rgba(0,0,0,0.5)] p-2">
                      <div className="relative w-full h-full rounded-xl overflow-hidden">
                        <div className="absolute inset-0 bg-[#000] z-0" />
                        <img 
                          src={image} 
                          alt={`Project image ${index + 1}`} 
                          className="absolute w-full h-auto object-cover z-10"
                          style={{ top: "-12%", left: "0", minHeight: "130%" }}
                        />
                      </div>
                    </div>
                  </motion.div>
                ))}

                {/* KEY HIGHLIGHTS */}
                <motion.div 
                   initial={{ y: 20, opacity: 0 }}
                   whileInView={{ y: 0, opacity: 1 }}
                   viewport={{ once: true }}
                   className="pt-16 mt-8 border-t border-white/5 text-center"
                >
                  <h3 className="text-xl font-bold text-white mb-6 uppercase tracking-wider">Key Highlights</h3>
                  <div className="flex flex-wrap justify-center items-center gap-4">
                    {selectedProject.tech.map((tech: string, idx: number) => (
                      <span key={idx} className="px-5 py-2.5 bg-white-[0.03] border border-white/10 rounded-full text-white/70 font-mono text-xs tracking-wide">
                        {tech}
                      </span>
                    ))}
                  </div>
                </motion.div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

