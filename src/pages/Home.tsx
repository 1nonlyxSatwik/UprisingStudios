import { motion, useScroll, useTransform, type Variants } from "framer-motion";
import { Code, Zap, Smartphone } from "lucide-react";
import { Link } from "wouter";
import { useRef, useState } from "react";
import heroBg from "@/assets/hero-bg.png";
import portfolio1 from "@/assets/portfolio-1.png";
import portfolio2 from "@/assets/portfolio-2.png";
import portfolio3 from "@/assets/portfolio-3.png";
import heroImg from "@/assets/concept/hero.png";
import aboutImg from "@/assets/concept/about.png";
import typoImg from "@/assets/concept/typo.png";
import featuredImg from "@/assets/concept/featured.png";

const projects = [
  {
    id: 1,
    title: "Personal Brand Website",
    category: "Personal Brand",
    description: "A clean, modern website for a personal brand that improves brand perception and user engagement.",
    images: [heroImg, aboutImg, typoImg, featuredImg],
    tech: ["React", "Tailwind", "Framer Motion"],
    problem: "Generic personal website with poor user engagement and unclear brand identity",
    solution: "Custom-designed website with clear brand messaging and engaging user experience",
    result: "Created a clean, modern website that improves brand perception and user engagement"
  },
];

const team = [
  { id: 1, name: "Satwik Mani Tripathi", role: "Lead Developer" },
  { id: 2, name: "Akash Gautam", role: "Full Stack Developer" },
  { id: 3, name: "Lakshay Yadav", role: "Frontend Developer" },
  { id: 4, name: "Dhruv Kumar", role: "Backend Developer" },
];

const packages = [
  {
    id: 1,
    name: "Starter",
    description: "Perfect for getting started online",
    price: "₹13,999",
    duration: "One-time",
    features: [
      "Landing Page",
      "Responsive Design",
      "Basic Animations",
      "1 Revision"
    ],
    highlighted: false,
    cta: "Get Started",
  },
  {
    id: 2,
    name: "Growth",
    description: "Best for scaling personal brands & startups",
    price: "₹19,999",
    duration: "One-time",
    features: [
      "Full Website (3–5 pages)",
      "Modern UI/UX",
      "Animations",
      "SEO Basics",
      "2–3 Revisions"
    ],
    highlighted: true,
    cta: "Book a Call",
  },
  {
    id: 3,
    name: "Premium",
    description: "For serious brands that need performance",
    price: "₹29,999",
    duration: "One-time",
    features: [
      "Advanced Website",
      "Payment Integration",
      "High-end UI",
      "Performance Optimization",
      "Priority Delivery"
    ],
    highlighted: false,
    cta: "Request Proposal",
  },
];

const staggerContainer: Variants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.1 } },
};

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0 },
};

export default function Home() {
  const heroRef = useRef<HTMLDivElement>(null);
  const [selectedService, setSelectedService] = useState<any>(null);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const { scrollYProgress } = useScroll({ target: heroRef });
  const bgY = useTransform(scrollYProgress, [0, 1], ["0%", "25%"]);

  const services = [
    { title: "Web Development", desc: "Modern web apps with premium interactions.", icon: Code },
    { title: "UI/UX Design", desc: "Clean interfaces that convert.", icon: Smartphone },
    { title: "Performance", desc: "Fast loading experiences for every screen.", icon: Zap },
  ];

  return (
    <div className="w-full">
      <section ref={heroRef} className="relative min-h-screen overflow-hidden pt-24">
        <motion.img
          src={heroBg}
          alt="Hero background"
          className="absolute inset-0 h-full w-full object-cover opacity-20"
          style={{ y: bgY }}
        />
        <div className="absolute inset-0 bg-black/85" />
        <div className="relative z-10 mx-auto flex h-full max-w-6xl flex-col justify-center px-6 py-20 text-center text-white">
          <p className="mb-6 text-sm uppercase tracking-[0.35em] text-red-500">Creative digital studio</p>
          <h1 className="mx-auto max-w-3xl text-5xl font-black tracking-tight leading-[0.9] sm:text-6xl md:text-7xl">We build websites for personal brands and startups that actually generate leads.</h1>
          <p className="mx-auto mt-6 max-w-2xl text-lg text-white/70">Modern, high-converting websites designed to help you grow faster — not just look good.</p>
          <div className="mt-16 flex flex-col items-center justify-center gap-6 sm:flex-row">
            <Link href="/book" className="w-full sm:w-auto">
              <button className="inline-flex items-center justify-center rounded-full bg-red-500 px-10 py-5 text-sm font-bold uppercase tracking-[0.2em] text-white transition-all duration-300 hover:bg-red-600 hover:scale-105 hover:shadow-lg hover:shadow-red-500/25">
                Book a Free Call
              </button>
            </Link>
            <Link href="/portfolio" className="w-full sm:w-auto">
              <button className="inline-flex items-center justify-center rounded-full border border-white/10 bg-white/5 px-10 py-5 text-sm font-bold uppercase tracking-[0.2em] text-white transition hover:bg-white/10">
                View Work
              </button>
            </Link>
          </div>
          <div className="mt-12 flex flex-wrap justify-center gap-8 text-sm text-white/60">
            <div className="flex items-center gap-2">
              <span className="h-2 w-2 rounded-full bg-red-500"></span>
              Fast delivery
            </div>
            <div className="flex items-center gap-2">
              <span className="h-2 w-2 rounded-full bg-red-500"></span>
              Clean UI
            </div>
            <div className="flex items-center gap-2">
              <span className="h-2 w-2 rounded-full bg-red-500"></span>
              Conversion-focused
            </div>
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="mx-auto max-w-6xl px-6">
          <div className="text-center mb-16">
            <p className="text-sm uppercase tracking-[0.35em] text-red-500">Why choose us</p>
            <h2 className="mt-4 text-4xl font-black text-white">Built for personal brands and startups.</h2>
          </div>
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
            {[
              { title: "Built for creators & startups", desc: "We understand the unique needs of personal brands and early-stage companies." },
              { title: "Clean, modern UI/UX", desc: "Professional designs that build trust and credibility with your audience." },
              { title: "Fast delivery", desc: "Quick turnaround times so you can launch and start growing faster." },
              { title: "Focused on results", desc: "Every website is built with conversion and business growth in mind." }
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="text-center p-8 rounded-[2rem] border border-white/10 bg-black/40 shadow-xl"
              >
                <div className="text-xl font-bold text-white mb-4">{item.title}</div>
                <div className="text-sm text-white/70 leading-relaxed">{item.desc}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="mx-auto max-w-6xl px-6">
          <div className="grid gap-6 md:grid-cols-3">
            {services.map((service) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.5 }}
                className="rounded-[2rem] border border-white/10 bg-black/40 p-8 shadow-xl"
              >
                <service.icon className="mb-5 h-10 w-10 text-red-500" />
                <h3 className="text-2xl font-black text-white">{service.title}</h3>
                <p className="mt-4 text-white/60">{service.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="mx-auto max-w-6xl px-6">
          <div className="mb-12 flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
            <div>
              <p className="text-sm uppercase tracking-[0.35em] text-red-500">Case Study</p>
              <h2 className="mt-4 text-4xl font-black text-white">How we transformed a business website.</h2>
            </div>
            <Link href="/portfolio" className="inline-block">
              <button className="rounded-full border border-white/10 bg-white/5 px-6 py-3 text-sm font-semibold uppercase tracking-[0.2em] text-white transition hover:bg-white/10">
                View All Work
              </button>
            </Link>
          </div>

          <div className="flex justify-center">
            {projects.map((project) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.5 }}
                className="group overflow-hidden rounded-[2rem] border border-white/10 bg-black/40 shadow-xl max-w-4xl w-full"
              >
                <div className="relative aspect-[16/9] overflow-hidden">
                  <img src={project.images[currentImageIndex]} alt={project.title} className="h-full w-full object-cover transition duration-700 group-hover:scale-110" />
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
                <div className="p-8">
                  <span className="text-[11px] uppercase tracking-[0.35em] text-red-500">{project.category}</span>
                  <h3 className="text-3xl font-black text-white mt-2 mb-6">{project.title}</h3>
                  
                  <div className="grid gap-6 md:grid-cols-3 mb-8">
                    <div className="space-y-3">
                      <div className="text-red-500 font-bold text-sm uppercase tracking-[0.2em]">Problem</div>
                      <div className="text-white/70 text-sm leading-relaxed">{project.problem}</div>
                    </div>
                    <div className="space-y-3">
                      <div className="text-red-500 font-bold text-sm uppercase tracking-[0.2em]">Solution</div>
                      <div className="text-white/70 text-sm leading-relaxed">{project.solution}</div>
                    </div>
                    <div className="space-y-3">
                      <div className="text-red-500 font-bold text-sm uppercase tracking-[0.2em]">Result</div>
                      <div className="text-white/70 text-sm leading-relaxed">{project.result}</div>
                    </div>
                  </div>

                  <div className="flex flex-wrap gap-2">
                    {project.tech.map((t) => (
                      <span key={t} className="text-xs bg-red-500/10 text-red-300 px-3 py-1 rounded">{t}</span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24">
        <div className="mx-auto max-w-6xl px-6">
          <div className="mb-14 text-center">
            <p className="text-sm uppercase tracking-[0.35em] text-red-500">Pricing</p>
            <h2 className="mt-4 text-4xl font-black text-white">Premium packages for ambitious teams.</h2>
          </div>
          <div className="grid gap-10 lg:grid-cols-3">
            {packages.map((pkg) => (
              <motion.div
                key={pkg.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.5 }}
                className={`group relative rounded-[2rem] border p-12 shadow-xl transition-all duration-300 hover:scale-105 hover:shadow-2xl ${
                  pkg.highlighted 
                    ? "border-red-500/40 bg-gradient-to-br from-red-500/10 to-white/5 shadow-red-500/20" 
                    : "border-white/10 bg-black/40 hover:border-white/20"
                }`}
              >
                {pkg.highlighted && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <span className="rounded-full bg-red-500 px-4 py-2 text-xs font-bold uppercase tracking-[0.2em] text-white shadow-lg">
                      Most Popular
                    </span>
                  </div>
                )}
                <div>
                  <h3 className="text-3xl font-black text-white">{pkg.name}</h3>
                  <p className="mt-3 text-sm text-white/60">{pkg.description}</p>
                </div>
                <p className="mt-8 text-5xl font-black text-white">{pkg.price}</p>
                <ul className="mt-8 space-y-4">
                  {pkg.features.map((feature, index) => (
                    <li key={index} className="flex items-start gap-3 text-sm leading-7 text-white/70">
                      <span className="mt-1 h-2 w-2 rounded-full bg-white/50 flex-shrink-0"></span>
                      {feature}
                    </li>
                  ))}
                </ul>
                <button className={`mt-12 w-full rounded-full py-4 text-sm font-bold uppercase tracking-[0.2em] transition-all duration-300 ${
                  pkg.highlighted 
                    ? "bg-red-500 text-white hover:bg-red-600 hover:shadow-lg hover:shadow-red-500/25" 
                    : "border border-white/20 bg-white/5 text-white hover:bg-white/10 hover:border-white/30"
                }`}>
                  {pkg.cta}
                </button>
              </motion.div>
            ))}
          </div>
          <div className="mt-14 text-center">
            <p className="text-red-400 font-semibold text-lg">We take only 3–4 projects per month</p>
          </div>
          <div className="mt-16 text-center">
            <div className="mb-8 border-t border-white/10 pt-8">
              <p className="text-sm text-white/60">
                Enterprise solutions (₹5,00,000+) — <Link href="/book" className="text-red-400 hover:text-red-300 transition-colors">Contact for custom quote</Link>
              </p>
            </div>
            <div className="flex flex-wrap justify-center gap-8 text-sm text-white/50">
              <div className="flex items-center gap-2">
                <span className="h-2 w-2 rounded-full bg-white/50"></span>
                Trusted by startups & creators
              </div>
              <div className="flex items-center gap-2">
                <span className="h-2 w-2 rounded-full bg-white/50"></span>
                Fast delivery
              </div>
              <div className="flex items-center gap-2">
                <span className="h-2 w-2 rounded-full bg-white/50"></span>
                Conversion-focused design
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="mx-auto max-w-6xl px-6">
          <div className="text-center mb-16">
            <p className="text-sm uppercase tracking-[0.35em] text-red-500">How it works</p>
            <h2 className="mt-4 text-4xl font-black text-white">From idea to launch in 4 simple steps.</h2>
          </div>
          <div className="grid gap-8 md:grid-cols-4">
            {[
              { step: "01", title: "Book a call", desc: "Schedule a free discovery call to discuss your project and goals." },
              { step: "02", title: "We plan your website", desc: "We create a detailed plan with timeline and deliverables." },
              { step: "03", title: "We design & build", desc: "We build your website with regular updates and feedback." },
              { step: "04", title: "Launch & optimize", desc: "We launch your site and optimize for maximum performance." }
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="text-center p-8 rounded-[2rem] border border-white/10 bg-black/40 shadow-xl"
              >
                <div className="text-3xl font-black text-red-500 mb-4">{item.step}</div>
                <div className="text-xl font-bold text-white mb-4">{item.title}</div>
                <div className="text-sm text-white/70 leading-relaxed">{item.desc}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="mx-auto max-w-6xl px-6 text-center">
          <h2 className="text-4xl font-black text-white mb-6">Let's build something that actually grows your brand.</h2>
          <p className="text-lg text-white/70 mb-12 max-w-2xl mx-auto">Ready to take your personal brand or startup to the next level? Let's create a website that drives real results.</p>
          <Link href="/book">
            <button className="inline-flex items-center justify-center rounded-full bg-red-500 px-12 py-6 text-lg font-bold uppercase tracking-[0.2em] text-white transition-all duration-300 hover:bg-red-600 hover:scale-105 hover:shadow-lg hover:shadow-red-500/25">
              Book a Free Call
            </button>
          </Link>
        </div>
      </section>

      <section className="pb-24">
        <div className="mx-auto max-w-6xl px-6">
          <div className="mb-12">
            <p className="text-sm uppercase tracking-[0.35em] text-red-500">Team</p>
            <h2 className="mt-4 text-4xl font-black text-white">Built by a focused creative team.</h2>
          </div>
          <div className="grid gap-6 md:grid-cols-4">
            {team.map((member) => (
              <motion.div
                key={member.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.5 }}
                className="rounded-[2rem] border border-white/10 bg-black/40 p-6 text-center"
              >
                <div className="mb-4 h-16 w-16 rounded-full bg-white/5 text-center leading-[4rem] text-2xl text-red-500">{member.name.charAt(0)}</div>
                <h3 className="text-lg font-black text-white">{member.name}</h3>
                <p className="mt-3 text-sm text-white/60">{member.role}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
