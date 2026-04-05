import { motion } from "framer-motion";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { useToast } from "@/hooks/use-toast";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { CalendarIcon, Clock, User, Mail, Phone, MessageSquare, CheckCircle2 } from "lucide-react";
import { useState } from "react";
import AnimatedSection from "@/components/AnimatedSection";

const bookingSchema = z.object({
  name: z.string().min(2, "Name is required"),
  email: z.string().email("Invalid email address"),
  phone: z.string().optional(),
  date: z.string().min(1, "Date is required"),
  time: z.string().min(1, "Time is required"),
  type: z.enum(["call", "meeting"]),
  notes: z.string().optional(),
});

const timeSlots = [
  "9:00 AM", "10:00 AM", "11:00 AM", "12:00 PM",
  "2:00 PM", "3:00 PM", "4:00 PM", "5:00 PM",
];

export default function Book() {
  const { toast } = useToast();
  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const form = useForm<z.infer<typeof bookingSchema>>({
    resolver: zodResolver(bookingSchema),
    defaultValues: { name: "", email: "", phone: "", date: "", time: "", type: "call", notes: "" },
  });

  const onSubmit = (values: z.infer<typeof bookingSchema>) => {
    setIsSubmitting(true);
    setSubmitted(true);
    form.reset();
    toast({ title: "Booking request sent", description: "We'll follow up shortly.", variant: "default" });
    setIsSubmitting(false);
  };

  const perks = [
    { icon: User, title: "Direct Founder Access", desc: "You speak directly with the founders, not a salesperson." },
    { icon: MessageSquare, title: "Actionable Strategy", desc: "Walk away with concrete recommendations, not vague promises." },
    { icon: CheckCircle2, title: "Zero Obligation", desc: "A discovery call with no strings attached. Just value." },
  ];

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

                  <Form {...form}>
                    <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-5">
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                        <FormField control={form.control} name="name" render={({ field }) => (
                          <FormItem>
                            <FormLabel className="text-white/40 text-xs font-mono uppercase tracking-wider">Full Name *</FormLabel>
                            <FormControl>
                              <div className="relative">
                                <User className="absolute left-3 top-3 text-[#ff1a1a]/60" size={14} />
                                <Input placeholder="Your name" className="pl-9 text-sm bg-white/[0.03] border-white/10 focus:border-[#ff1a1a]/40 rounded-xl" {...field} />
                              </div>
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )} />
                        <FormField control={form.control} name="email" render={({ field }) => (
                          <FormItem>
                            <FormLabel className="text-white/40 text-xs font-mono uppercase tracking-wider">Email *</FormLabel>
                            <FormControl>
                              <div className="relative">
                                <Mail className="absolute left-3 top-3 text-[#ff1a1a]/60" size={14} />
                                <Input type="email" placeholder="you@company.com" className="pl-9 text-sm bg-white/[0.03] border-white/10 focus:border-[#ff1a1a]/40 rounded-xl" {...field} />
                              </div>
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )} />
                      </div>

                      <FormField control={form.control} name="phone" render={({ field }) => (
                        <FormItem>
                          <FormLabel className="text-white/40 text-xs font-mono uppercase tracking-wider">Phone (Optional)</FormLabel>
                          <FormControl>
                            <div className="relative">
                              <Phone className="absolute left-3 top-3 text-[#ff1a1a]/60" size={14} />
                              <Input placeholder="+91 98765 43210" className="pl-9 text-sm bg-white/[0.03] border-white/10 focus:border-[#ff1a1a]/40 rounded-xl" {...field} />
                            </div>
                          </FormControl>
                        </FormItem>
                      )} />

                      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                        <FormField control={form.control} name="date" render={({ field }) => (
                          <FormItem>
                            <FormLabel className="text-white/40 text-xs font-mono uppercase tracking-wider">Date *</FormLabel>
                            <FormControl>
                              <div className="relative">
                                <CalendarIcon className="absolute left-3 top-3 text-[#ff1a1a]/60" size={14} />
                                <Input type="date" className="pl-9 text-sm bg-white/[0.03] border-white/10 focus:border-[#ff1a1a]/40 rounded-xl" {...field} />
                              </div>
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )} />
                        <FormField control={form.control} name="time" render={({ field }) => (
                          <FormItem>
                            <FormLabel className="text-white/40 text-xs font-mono uppercase tracking-wider">Time *</FormLabel>
                            <FormControl>
                              <Select onValueChange={field.onChange} value={field.value}>
                                <SelectTrigger className="text-sm bg-white/[0.03] border-white/10 rounded-xl">
                                  <div className="flex items-center gap-2">
                                    <Clock className="text-[#ff1a1a]/60" size={14} />
                                    <SelectValue placeholder="Pick a slot" />
                                  </div>
                                </SelectTrigger>
                                <SelectContent className="bg-[#111] border-white/10">
                                  {timeSlots.map(slot => (
                                    <SelectItem key={slot} value={slot} className="text-white/70">{slot}</SelectItem>
                                  ))}
                                </SelectContent>
                              </Select>
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )} />
                      </div>

                      <FormField control={form.control} name="type" render={({ field }) => (
                        <FormItem>
                          <FormLabel className="text-white/40 text-xs font-mono uppercase tracking-wider">Session Type *</FormLabel>
                          <div className="grid grid-cols-2 gap-3">
                            {[["call", "Phone Call"], ["meeting", "Video Meeting"]].map(([val, label]) => (
                              <motion.button
                                key={val}
                                type="button"
                                whileHover={{ scale: 1.02 }}
                                whileTap={{ scale: 0.98 }}
                                onClick={() => field.onChange(val)}
                                className="py-3 rounded-xl text-sm font-mono transition-all"
                                style={field.value === val ? {
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
                        </FormItem>
                      )} />

                      <FormField control={form.control} name="notes" render={({ field }) => (
                        <FormItem>
                          <FormLabel className="text-white/40 text-xs font-mono uppercase tracking-wider">Project Details (Optional)</FormLabel>
                          <FormControl>
                            <Textarea
                              placeholder="Tell us about your project, goals, and budget..."
                              className="min-h-[90px] text-sm bg-white/[0.03] border-white/10 focus:border-[#ff1a1a]/40 rounded-xl resize-none"
                              {...field}
                            />
                          </FormControl>
                        </FormItem>
                      )} />

                      <motion.button
                        type="submit"
                        disabled={isSubmitting}
                        whileHover={{ scale: 1.02, boxShadow: "0 0 40px rgba(255,26,26,0.5)" }}
                        whileTap={{ scale: 0.98 }}
                        className="relative w-full overflow-hidden py-4 rounded-xl font-black text-base text-white"
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
                            Confirming...
                          </span>
                        ) : "Confirm Session"}
                      </motion.button>
                    </form>
                  </Form>
                </div>
              </div>
            )}
          </AnimatedSection>
        </div>
      </div>
    </div>
  );
}
