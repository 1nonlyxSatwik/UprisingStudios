import { motion, type Variants } from "framer-motion";
import AnimatedSection from "@/components/AnimatedSection";
import { MonitorSmartphone, Zap, Paintbrush, Gauge, Linkedin, Instagram, CheckCircle } from "lucide-react";

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

const staggerContainer: Variants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.1 } },
};

type TeamMember = {
  name: string;
  role: string;
  desc: string;
  instagram?: string;
};

const teamMembers: TeamMember[] = [
  { name: "Satwik Mani Tripathi", role: "Lead Developer", desc: "Expert in scalable architectures and deep technical performance.", instagram: "https://www.instagram.com/satwik_exe/" },
  { name: "Akash Gautam", role: "Full Stack Engineer", desc: "Specializes in building robust APIs and continuous delivery pipelines.", instagram: "https://www.instagram.com/akash_gautam2509?igsh=MW1yamU1MW5laW80NQ==" },
  { name: "Lakshay Yadav", role: "UI/UX & Frontend", desc: "Crafts engaging user interfaces driven by metrics and conversion optimization.", instagram: "https://www.instagram.com/raosahab.lakshya?igsh=MWZ0ZWpoMTI5c2NyMw==" },
  { name: "Dhruv Kumar", role: "Backend & DevOps", desc: "Ensures secure, bulletproof server infrastructure and 99.9% uptime.", instagram: "https://www.instagram.com/drv_pundir_?igsh=MXNrMGp1Y3F6YzNv" },
];

const expertiseList = [
  { title: "High-converting website design", desc: "Designed to turn visitors into paying customers", icon: MonitorSmartphone },
  { title: "Fast and responsive development", desc: "Optimized for speed across all devices", icon: Zap },
  { title: "Clean UI/UX", desc: "Simple, modern interfaces focused on usability", icon: Paintbrush },
  { title: "Performance optimization", desc: "Built for fast load times and smooth performance", icon: Gauge },
];

const whyChooseUs = [
  { title: "Fast Delivery", desc: "Quick turnaround without compromising quality" },
  { title: "Conversion Focused", desc: "Designed to turn visitors into customers" },
  { title: "Clean Code", desc: "Scalable and maintainable development" },
];

export default function About() {
  return (
    <div className="w-full pt-32 pb-24 min-h-screen bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-[#140404] via-[#050505] to-[#050505]">
      {/* ── HERO & INTRO ── */}
      <section className="relative overflow-hidden pt-8 pb-16">
        <div className="container px-4 mx-auto relative z-10 text-center">
          <AnimatedSection>
            <h1 className="text-5xl md:text-7xl font-black uppercase tracking-tight mb-6 text-white leading-none">
              About Us
            </h1>
            <p className="text-xl md:text-2xl text-white/70 max-w-3xl mx-auto tracking-wide leading-relaxed font-light mb-10">
              We build websites that convert visitors into customers.
            </p>
            <div className="w-16 h-[2px] bg-[#e60000] mx-auto mb-10" />
            <p className="text-lg text-white/50 max-w-2xl mx-auto leading-relaxed">
              We design and develop high-performing websites focused on speed, clarity, and conversion. Every project is built to help businesses grow and stand out.
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* ── WHAT WE DO ── */}
      <section className="py-20 relative bg-[#0a0a0a]">
        <div className="absolute top-0 left-0 w-full h-[1px] bg-white/[0.03]" />
        <div className="absolute bottom-0 left-0 w-full h-[1px] bg-white/[0.03]" />
        
        <div className="container px-4 mx-auto relative z-10">
          <AnimatedSection className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-black uppercase tracking-tight text-white mb-4">
              What We Do
            </h2>
          </AnimatedSection>

          <motion.div
            className="flex flex-wrap justify-center gap-8 max-w-6xl mx-auto"
            variants={staggerContainer}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "-60px" }}
          >
            {expertiseList.map((item, i) => {
              const Icon = item.icon;
              return (
                <motion.div
                  key={i}
                  variants={fadeUp}
                  whileHover={{ y: -4, scale: 1.02, backgroundColor: "rgba(30,30,30,0.6)", boxShadow: "0 10px 30px rgba(0,0,0,0.5)" }}
                  className="p-8 rounded-2xl flex flex-col items-center text-center transition-all duration-300 w-full sm:w-[calc(50%-1rem)] lg:w-[calc(33.333%-1.33rem)]"
                  style={{
                    backgroundColor: "rgba(20,20,20,0.4)",
                    border: "1px solid rgba(255,255,255,0.04)"
                  }}
                >
                  <div className="w-12 h-12 mb-5 rounded-full flex items-center justify-center bg-[#e60000]/10 text-[#e60000]">
                    <Icon size={24} strokeWidth={1.5} />
                  </div>
                  <h3 className="text-lg font-bold text-white leading-tight tracking-wide mb-2">
                    {item.title}
                  </h3>
                  <p className="text-sm text-white/50 leading-relaxed font-light">
                    {item.desc}
                  </p>
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </section>

      {/* ── WHY CHOOSE US ── */}
      <section className="py-20 relative">
        <div className="container px-4 mx-auto relative z-10 max-w-5xl">
          <AnimatedSection className="mb-12 text-center">
            <h2 className="text-3xl md:text-4xl font-black uppercase tracking-tight text-white mb-4">
              Why Choose Us
            </h2>
          </AnimatedSection>
          
          <motion.div
            className="grid grid-cols-1 md:grid-cols-3 gap-6"
            variants={staggerContainer}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "-60px" }}
          >
            {whyChooseUs.map((item, i) => (
              <motion.div
                key={i}
                variants={fadeUp}
                whileHover={{ y: -4 }}
                className="p-8 rounded-xl bg-[rgba(255,255,255,0.02)] border border-white/5 flex flex-col transition-transform"
              >
                <div className="w-10 h-10 rounded-full bg-[#e60000]/10 flex items-center justify-center mb-5 text-[#e60000]">
                  <CheckCircle size={20} strokeWidth={2} />
                </div>
                <h3 className="text-lg font-bold text-white mb-2">{item.title}</h3>
                <p className="text-white/50 text-sm leading-relaxed">{item.desc}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ── TEAM ── */}
      <section className="py-20 relative">
        <div className="container px-4 mx-auto relative z-10 max-w-5xl">
          <AnimatedSection className="mb-12 text-center">
            <h2 className="text-3xl md:text-4xl font-black uppercase tracking-tight text-white mb-4">
              Core Team
            </h2>
          </AnimatedSection>

          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 gap-8"
            variants={staggerContainer}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "-60px" }}
          >
            {teamMembers.map((member, i) => (
              <motion.div
                key={i}
                variants={fadeUp}
                whileHover={{ scale: 1.02 }}
                className="group relative p-8 rounded-2xl bg-[#0d0d0d] transition-all duration-300 flex flex-col justify-between min-h-[200px]"
                style={{
                  border: "1px solid rgba(255,255,255,0.05)",
                }}
              >
                {/* Subtle Hover Highlight */}
                <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" style={{ boxShadow: "inset 0 0 0 1px rgba(230,0,0,0.2)" }} />

                <div className="relative z-10">
                  <div className="flex justify-between items-start mb-4">
                    <div>
                      <h3 className="text-2xl font-bold text-white mb-1 group-hover:text-white transition-colors duration-300">
                        {member.name}
                      </h3>
                      <p className="text-xs font-mono tracking-widest text-[#e60000] uppercase">
                        {member.role}
                      </p>
                    </div>
                    {/* Socials */}
                    <div className="flex gap-2">
                      {member.instagram && (
                        <a href={member.instagram} target="_blank" rel="noopener noreferrer" className="p-2 text-white/40 hover:text-white hover:bg-[#e60000]/10 hover:text-[#e60000] rounded-full transition-colors" aria-label="Instagram">
                          <Instagram size={18} strokeWidth={1.5} />
                        </a>
                      )}
                    </div>
                  </div>
                  <p className="text-white/50 text-sm leading-relaxed">
                    {member.desc}
                  </p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

    </div>
  );
}
