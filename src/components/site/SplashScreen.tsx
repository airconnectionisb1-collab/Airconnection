import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import logo from "@/assets/logo.png";

export function SplashScreen() {
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    // Only show once per session
    const seen = sessionStorage.getItem("ac_splash_shown");
    if (seen) {
      setVisible(false);
      return;
    }

    // Hide after 2.4 s
    const timer = setTimeout(() => {
      setVisible(false);
      sessionStorage.setItem("ac_splash_shown", "1");
    }, 2400);

    return () => clearTimeout(timer);
  }, []);

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          key="splash"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, scale: 1.04 }}
          transition={{ duration: 0.55, ease: [0.4, 0, 0.2, 1] }}
          className="fixed inset-0 z-[9999] flex flex-col items-center justify-center bg-[#03060f] overflow-hidden"
        >
          {/* Radial glow */}
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(211,47,47,0.18),transparent_60%)]" />

          {/* Animated rings */}
          {[1, 2, 3].map((i) => (
            <motion.div
              key={i}
              className="absolute rounded-full border border-primary/10"
              initial={{ width: 80, height: 80, opacity: 0 }}
              animate={{
                width: 80 + i * 120,
                height: 80 + i * 120,
                opacity: [0, 0.4, 0],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                delay: i * 0.4,
                ease: "easeOut",
              }}
            />
          ))}

          {/* Content */}
          <div className="relative z-10 flex flex-col items-center gap-6">
            {/* Logo */}
            <motion.div
              initial={{ opacity: 0, scale: 0.7, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              transition={{ duration: 0.6, ease: [0.34, 1.56, 0.64, 1] }}
              className="relative"
            >
              {/* Glow behind logo */}
              <div className="absolute inset-0 blur-2xl bg-primary/20 rounded-full scale-150" />
              <img
                src={logo}
                alt="Air Connection"
                className="relative h-24 sm:h-28 w-auto object-contain drop-shadow-2xl brightness-0 invert"
              />
            </motion.div>

            {/* Brand name */}
            <motion.div
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="flex flex-col items-center gap-1.5"
            >
              <span className="text-2xl sm:text-3xl font-black tracking-tighter text-white leading-none">
                Air <span className="text-primary italic">Connection</span>
              </span>
              <span className="text-[10px] font-black uppercase tracking-[0.4em] text-white/35">
                Travel &amp; Tours · Islamabad
              </span>
            </motion.div>

            {/* Loading bar */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
              className="w-36 sm:w-48 h-0.5 bg-white/10 rounded-full overflow-hidden mt-2"
            >
              <motion.div
                className="h-full bg-gradient-to-r from-primary to-red-400 rounded-full"
                initial={{ width: "0%" }}
                animate={{ width: "100%" }}
                transition={{ duration: 1.8, ease: "easeInOut", delay: 0.2 }}
              />
            </motion.div>

            {/* Tagline */}
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.7 }}
              className="text-[10px] font-bold uppercase tracking-[0.3em] text-white/20"
            >
              Pakistan&apos;s No.1 Travel Agency
            </motion.p>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
