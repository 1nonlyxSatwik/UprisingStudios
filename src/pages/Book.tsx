import { motion } from "framer-motion";
import { CalendarIcon, Clock, User, Mail, Phone, MessageSquare, CheckCircle2 } from "lucide-react";
import { useState } from "react";
import AnimatedSection from "@/components/AnimatedSection";

const timeSlots = [
  "9:00 AM", "10:00 AM", "11:00 AM", "12:00 PM",
  "2:00 PM", "3:00 PM", "4:00 PM", "5:00 PM",
];

export default function Book() {
  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [sessionType, setSessionType] = useState("call");
  const [submitSuccess, setSubmitSuccess] = useState(false);
  const [submitError, setSubmitError] = useState(false);

  const perks = [
    { icon: User, title: "Direct Founder Access", desc: "You speak directly with the founders, not a salesperson." },
    { icon: MessageSquare, title: "Actionable Strategy", desc: "Walk away with concrete recommendations, not vague promises." },
    { icon: CheckCircle2, title: "Zero Obligation", desc: "A discovery call with no strings attached. Just value." },
  ];

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitError(false);

    try {
      const formData = new FormData(e.target);
      
      const response = await fetch("https://formspree.io/f/mpqokabp", {
        method: "POST",
        body: formData,
        headers: {
          Accept: "application/json",
        },
      });

      if (response.ok) {
        setSubmitted(true);
        setSubmitSuccess(true);
        e.target.reset();
        setSessionType("call");
        
        // Hide success message after 3 seconds
        setTimeout(() => setSubmitSuccess(false), 3000);
      } else {
        setSubmitError(true);
      }
    } catch (error) {
      console.error("Form submission error:", error);
      setSubmitError(true);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="w-full min-h-screen pb-28 pt-10 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-[#0b0b0b]" />
      <div className="absolute top-1/3 right-0 w-[500px] h-[500px] rounded-full pointer-events-none"
        style={{ background: "radial-gradient(circle, rgba(255,26,26,0.08) 0%, transparent 70%)" }} />
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] rounded-full pointer-events-none"
        style={{ background: "radial-gradient(circle, rgba(255,26,26,0.05) 0%, transparent 70%)" }} />
      <div className="absolute inset-0 opacity-[0.02]"
        style={{
          backgroundImage: "linear-gradient(rgba(255,26,26,1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,26,26,1) 1px, transparent 1px)",
          backgroundSize: "80px 80px"
        }}
      />

      <div className="container px-4 mx-auto max-w-6xl relative z-10 pt-16">
        <div className="text-center mb-16">
          <p className="text-xs font-mono tracking-[0.4em] text-[#ff1a1a] mb-4 uppercase">Free Discovery Session</p>
          <h1 className="text-4xl md:text-6xl font-black uppercase tracking-tight leading-tight mb-6">
            Let's Talk<br />
            <span className="text-[#ff1a1a]" style={{ filter: "drop-shadow(0 0 20px rgba(255,26,26,0.4))" }}>Business.</span>
          </h1>
          <p className="text-white/40 mb-10 leading-relaxed font-mono text-sm max-w-2xl mx-auto">
            30 minutes. No fluff. We'll review your project and tell you exactly what it takes to build something that wins.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">

          {/* Left: Info */}
          <AnimatedSection direction="left" className="flex flex-col justify-center">
            <div className="mb-12">
              <h3 className="text-xl font-black mb-6 text-white">What happens next?</h3>
              <div className="space-y-4">
                <div className="flex items-start gap-4 p-4 rounded-xl" style={{ background: "rgba(255,255,255,0.02)", border: "1px solid rgba(255,255,255,0.06)" }}>
                  <div className="p-2 rounded-lg flex-shrink-0" style={{ background: "rgba(255,26,26,0.1)", border: "1px solid rgba(255,26,26,0.2)" }}>
                    <CheckCircle2 className="text-[#ff1a1a]" size={16} />
                  </div>
                  <div>
                    <h4 className="font-bold text-sm mb-1">We review your requirements</h4>
                    <p className="text-white/40 text-xs leading-relaxed">We analyze your project details and business goals.</p>
                  </div>
                </div>
                <div className="flex items-start gap-4 p-4 rounded-xl" style={{ background: "rgba(255,255,255,0.02)", border: "1px solid rgba(255,255,255,0.06)" }}>
                  <div className="p-2 rounded-lg flex-shrink-0" style={{ background: "rgba(255,26,26,0.1)", border: "1px solid rgba(255,26,26,0.2)" }}>
                    <CheckCircle2 className="text-[#ff1a1a]" size={16} />
                  </div>
                  <div>
                    <h4 className="font-bold text-sm mb-1">We contact you within 24 hours</h4>
                    <p className="text-white/40 text-xs leading-relaxed">You get a confirmed time slot for our discovery call.</p>
                  </div>
                </div>
                <div className="flex items-start gap-4 p-4 rounded-xl" style={{ background: "rgba(255,255,255,0.02)", border: "1px solid rgba(255,255,255,0.06)" }}>
                  <div className="p-2 rounded-lg flex-shrink-0" style={{ background: "rgba(255,26,26,0.1)", border: "1px solid rgba(255,26,26,0.2)" }}>
                    <CheckCircle2 className="text-[#ff1a1a]" size={16} />
                  </div>
                  <div>
                    <h4 className="font-bold text-sm mb-1">You get a clear plan and next steps</h4>
                    <p className="text-white/40 text-xs leading-relaxed">Walk away with a detailed project plan and next steps for your website.</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="space-y-4">
              {perks.map((perk, i) => {
                const Icon = perk.icon;
                return (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.4 + i * 0.12 }}
                    className="flex items-start gap-4 p-5 rounded-xl"
                    style={{
                      background: "rgba(255,255,255,0.02)",
                      border: "1px solid rgba(255,255,255,0.06)",
                      backdropFilter: "blur(12px)",
                      borderLeft: "2px solid rgba(255,26,26,0.5)",
                    }}
                  >
                    <div className="p-2 rounded-lg flex-shrink-0"
                      style={{ background: "rgba(255,26,26,0.1)", border: "1px solid rgba(255,26,26,0.2)" }}>
                      <Icon className="text-[#ff1a1a]" size={18} />
                    </div>
                    <div>
                      <h4 className="font-bold text-sm mb-1">{perk.title}</h4>
                      <p className="text-white/40 text-xs leading-relaxed">{perk.desc}</p>
                    </div>
                  </motion.div>
                );
              })}
            </div>

            {/* Floating stats */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.9 }}
              className="grid grid-cols-3 gap-4 mt-10"
            >
              {[["~30", "Minutes"], ["Free", "Consultation"], ["24h", "Response"]].map(([num, label]) => (
                <div key={label} className="text-center p-4 rounded-xl"
                  style={{ background: "rgba(255,255,255,0.02)", border: "1px solid rgba(255,255,255,0.05)" }}>
                  <div className="text-xl font-black text-[#ff1a1a]">{num}</div>
                  <div className="text-[10px] font-mono text-white/30 uppercase tracking-wider">{label}</div>
                </div>
              ))}
            </motion.div>
          </AnimatedSection>

          {/* Right: Form */}
          <AnimatedSection direction="right">
            {submitted ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                className="flex flex-col items-center justify-center h-full text-center p-12 rounded-2xl"
                style={{
                  background: "rgba(255,26,26,0.05)",
                  border: "1px solid rgba(255,26,26,0.2)",
                  backdropFilter: "blur(16px)",
                }}
              >
                <motion.div
                  animate={{ scale: [1, 1.2, 1] }}
                  transition={{ duration: 0.5 }}
                >
                  <CheckCircle2 className="text-[#ff1a1a] mx-auto mb-6" size={64} />
                </motion.div>
                <h3 className="text-2xl font-black mb-3">Booking Confirmed!</h3>
                <p className="text-white/50 font-mono text-sm">We'll be in touch within 24 hours to confirm your session details.</p>
                <motion.button
                  whileHover={{ scale: 1.04 }}
                  onClick={() => setSubmitted(false)}
                  className="mt-8 px-8 py-3 rounded-full text-sm font-bold"
                  style={{ background: "linear-gradient(135deg, #ff1a1a, #8b0000)", color: "#fff" }}
                >
                  Book Another
                </motion.button>
              </motion.div>
            ) : (
              <div className="relative rounded-2xl overflow-hidden"
                style={{
                  background: "rgba(255,255,255,0.025)",
                  border: "1px solid rgba(255,255,255,0.08)",
                  backdropFilter: "blur(24px)",
                  boxShadow: "0 30px 80px rgba(0,0,0,0.5), inset 0 1px 0 rgba(255,255,255,0.06)",
                }}>
                {/* Red top line */}
                <div className="absolute top-0 left-0 w-full h-[2px] bg-gradient-to-r from-transparent via-[#ff1a1a] to-transparent" />

                <div className="p-8 md:p-10">
                  <h3 className="text-xl font-black mb-1 tracking-wide">Schedule Your Session</h3>
                  <p className="text-white/30 text-xs font-mono mb-8">Fill in your details and we'll confirm shortly.</p>

                  <form 
                    onSubmit={handleSubmit}
                    className="space-y-5"
                  >
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                      <div>
                        <label className="text-white/40 text-xs font-mono uppercase tracking-wider block mb-2">Full Name *</label>
                        <div className="relative">
                          <User className="absolute left-3 top-3 text-[#ff1a1a]/60" size={14} />
                          <input 
                            type="text" 
                            name="name" 
                            placeholder="Your name" 
                            required
                            className="w-full pl-9 pr-4 py-2 text-sm bg-white/[0.03] border border-white/10 focus:border-[#ff1a1a]/40 rounded-xl focus:outline-none transition text-white placeholder-white/30"
                          />
                        </div>
                      </div>
                      <div>
                        <label className="text-white/40 text-xs font-mono uppercase tracking-wider block mb-2">Email *</label>
                        <div className="relative">
                          <Mail className="absolute left-3 top-3 text-[#ff1a1a]/60" size={14} />
                          <input 
                            type="email" 
                            name="email" 
                            placeholder="you@company.com" 
                            required
                            className="w-full pl-9 pr-4 py-2 text-sm bg-white/[0.03] border border-white/10 focus:border-[#ff1a1a]/40 rounded-xl focus:outline-none transition text-white placeholder-white/30"
                          />
                        </div>
                      </div>
                    </div>

                    <div>
                      <label className="text-white/40 text-xs font-mono uppercase tracking-wider block mb-2">Phone (Optional)</label>
                      <div className="relative">
                        <Phone className="absolute left-3 top-3 text-[#ff1a1a]/60" size={14} />
                        <input 
                          type="tel" 
                          name="phone" 
                          placeholder="+91 98765 43210" 
                          className="w-full pl-9 pr-4 py-2 text-sm bg-white/[0.03] border border-white/10 focus:border-[#ff1a1a]/40 rounded-xl focus:outline-none transition text-white placeholder-white/30"
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                      <div>
                        <label className="text-white/40 text-xs font-mono uppercase tracking-wider block mb-2">Date *</label>
                        <div className="relative">
                          <CalendarIcon className="absolute left-3 top-3 text-[#ff1a1a]/60" size={14} />
                          <input 
                            type="date" 
                            name="date" 
                            required
                            className="w-full pl-9 pr-4 py-2 text-sm bg-white/[0.03] border border-white/10 focus:border-[#ff1a1a]/40 rounded-xl focus:outline-none transition text-white"
                          />
                        </div>
                      </div>
                      <div>
                        <label className="text-white/40 text-xs font-mono uppercase tracking-wider block mb-2">Time *</label>
                        <div className="relative">
                          <Clock className="absolute left-3 top-3 text-[#ff1a1a]/60" size={14} />
                          <select 
                            name="time" 
                            required
                            className="w-full pl-9 pr-4 py-2 text-sm bg-white/[0.03] border border-white/10 focus:border-[#ff1a1a]/40 rounded-xl focus:outline-none transition text-white appearance-none"
                          >
                            <option value="" disabled>Pick a slot</option>
                            {timeSlots.map(slot => (
                              <option key={slot} value={slot}>{slot}</option>
                            ))}
                          </select>
                        </div>
                      </div>
                    </div>

                    <div>
                      <label className="text-white/40 text-xs font-mono uppercase tracking-wider block mb-3">Session Type *</label>
                      <div className="grid grid-cols-2 gap-3">
                        {[["call", "Phone Call"], ["meeting", "Video Meeting"]].map(([val, label]) => (
                          <motion.button
                            key={val}
                            type="button"
                            whileHover={{ scale: 1.02 }}
                            whileTap={{ scale: 0.98 }}
                            onClick={() => setSessionType(val)}
                            className="py-3 rounded-xl text-sm font-mono transition-all"
                            style={sessionType === val ? {
                              background: "linear-gradient(135deg, rgba(255,26,26,0.3), rgba(139,0,0,0.2))",
                              border: "1px solid rgba(255,26,26,0.5)",
                              color: "#fff",
                            } : {
                              background: "rgba(255,255,255,0.02)",
                              border: "1px solid rgba(255,255,255,0.08)",
                              color: "rgba(255,255,255,0.4)",
                            }}
                          >
                            {label}
                          </motion.button>
                        ))}
                      </div>
                      <input type="hidden" name="type" value={sessionType} />
                    </div>

                    <div>
                      <label className="text-white/40 text-xs font-mono uppercase tracking-wider block mb-2">Project Details (Optional)</label>
                      <textarea
                        name="message"
                        placeholder="Tell us about your project, goals, and budget..."
                        rows={5}
                        className="w-full px-4 py-3 text-sm bg-white/[0.03] border border-white/10 focus:border-[#ff1a1a]/40 rounded-xl focus:outline-none transition text-white placeholder-white/30 resize-none"
                      />
                    </div>

                    {submitSuccess && (
                      <motion.div
                        initial={{ opacity: 0, y: -10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0 }}
                        className="p-3 rounded-xl text-sm font-mono text-center"
                        style={{
                          background: "linear-gradient(135deg, rgba(34,197,94,0.1), rgba(22,163,74,0.05))",
                          border: "1px solid rgba(34,197,94,0.3)",
                          color: "#22c55e"
                        }}
                      >
                        ✓ Your request has been submitted successfully!
                      </motion.div>
                    )}

                    {submitError && (
                      <motion.div
                        initial={{ opacity: 0, y: -10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0 }}
                        className="p-3 rounded-xl text-sm font-mono text-center"
                        style={{
                          background: "linear-gradient(135deg, rgba(239,68,68,0.1), rgba(220,38,38,0.05))",
                          border: "1px solid rgba(239,68,68,0.3)",
                          color: "#ef4444"
                        }}
                      >
                        ✗ Something went wrong. Please try again.
                      </motion.div>
                    )}

                    <motion.button
                      type="submit"
                      disabled={isSubmitting}
                      whileHover={{ scale: 1.02, boxShadow: "0 0 40px rgba(255,26,26,0.5)" }}
                      whileTap={{ scale: 0.98 }}
                      className="relative w-full overflow-hidden py-4 rounded-xl font-black text-base text-white disabled:opacity-70"
                      style={{
                        background: "linear-gradient(135deg, #ff1a1a 0%, #8b0000 100%)",
                        boxShadow: "0 0 24px rgba(255,26,26,0.3), inset 0 1px 0 rgba(255,255,255,0.15)",
                      }}
                    >
                      <motion.span
                        className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent"
                        animate={{ x: ["-100%", "200%"] }}
                        transition={{ repeat: Infinity, duration: 2, ease: "linear", repeatDelay: 2 }}
                      />
                      {isSubmitting ? (
                        <span className="flex items-center justify-center gap-2">
                          <motion.div
                            className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full"
                            animate={{ rotate: 360 }}
                            transition={{ repeat: Infinity, duration: 0.8, ease: "linear" }}
                          />
                          Sending...
                        </span>
                      ) : "Confirm Session"}
                    </motion.button>
                  </form>
                </div>
              </div>
            )}
          </AnimatedSection>
        </div>
      </div>
    </div>
  );
}
