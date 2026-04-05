import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";

export default function LoadingScreen() {
  const [visible, setVisible] = useState(true);
  const [count, setCount] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCount(prev => {
        if (prev >= 100) {
          clearInterval(interval);
          return 100;
        }
        return prev + 4;
      });
    }, 30);

    const timer = setTimeout(() => setVisible(false), 2200);
    return () => {
      clearInterval(interval);
      clearTimeout(timer);
    };
  }, []);

  const letters = "UPRISING".split("");
  const letters2 = "STUDIOS".split("");

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          key="loader"
          className="fixed inset-0 z-[9999] flex flex-col items-center justify-center bg-[#0b0b0b] overflow-hidden"
          exit={{ opacity: 0 }}
          transition={{ duration: 0.6, ease: "easeInOut" }}
        >
          {/* Animated red orb behind text */}
          <motion.div
            className="absolute w-[600px] h-[600px] rounded-full"
            style={{
              background: "radial-gradient(circle, rgba(255,26,26,0.15) 0%, transparent 70%)",
            }}
            animate={{ scale: [0.8, 1.2, 0.8] }}
            transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
          />

          {/* Grid lines */}
          <div className="absolute inset-0 opacity-[0.03]"
            style={{
              backgroundImage: "linear-gradient(rgba(255,26,26,1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,26,26,1) 1px, transparent 1px)",
              backgroundSize: "60px 60px"
            }}
          />

          {/* Logo mark */}
          <motion.div
            className="mb-6"
            initial={{ scale: 0, rotate: -45 }}
            animate={{ scale: 1, rotate: 0 }}
            transition={{ duration: 0.6, ease: "backOut" }}
          >
            <div className="w-12 h-12 bg-[#ff1a1a] rounded-md rotate-45 flex items-center justify-center shadow-[0_0_40px_rgba(255,26,26,0.6)]">
              <div className="w-6 h-6 bg-[#0b0b0b] rounded-sm rotate-45" />
            </div>
          </motion.div>

          {/* UPRISING */}
          <div className="flex overflow-hidden mb-1">
            {letters.map((l, i) => (
              <motion.span
                key={i}
                className="text-5xl md:text-7xl font-black tracking-[0.2em] text-white"
                initial={{ y: 80, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.3 + i * 0.06, duration: 0.5, ease: "easeOut" }}
              >
                {l}
              </motion.span>
            ))}
          </div>

          {/* STUDIOS */}
          <div className="flex overflow-hidden mb-12">
            {letters2.map((l, i) => (
              <motion.span
                key={i}
                className="text-2xl md:text-3xl font-light tracking-[0.6em] text-[#ff1a1a]"
                initial={{ y: 40, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.7 + i * 0.05, duration: 0.4, ease: "easeOut" }}
              >
                {l}
              </motion.span>
            ))}
          </div>

          {/* Progress bar */}
          <div className="w-64 h-[2px] bg-white/10 rounded-full overflow-hidden">
            <motion.div
              className="h-full bg-gradient-to-r from-[#ff1a1a] to-red-400 rounded-full"
              style={{ width: `${count}%` }}
              transition={{ duration: 0.1 }}
            />
          </div>
          <motion.p
            className="mt-3 text-xs font-mono text-white/30 tracking-widest"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
          >
            LOADING {count}%
          </motion.p>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
