import { motion } from "framer-motion";

const WhatsAppIcon = ({ className }: { className?: string }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 448 512"
    fill="currentColor"
    className={className}
  >
    <path d="M380.9 97.1C339 55.1 283.2 32 223.9 32c-122.4 0-222 99.6-222 222 0 39.1 10.2 77.3 29.6 111L0 480l117.7-30.9c32.4 17.7 68.9 27 106.1 27h.1c122.3 0 224.1-99.6 224.1-222 0-59.3-25.2-115-67.1-157zM223.9 414.8c-33.1 0-65.5-8.9-94-25.7l-6.7-4-69.8 18.3L72 334.1l-4.4-7.1c-18.5-29.7-28.2-64.2-28.2-100.4 0-103.5 84.3-187.8 187.9-187.8 50.1 0 97.3 19.5 132.8 55 35.5 35.5 55 82.7 55 132.8 0 103.5-84.3 187.8-187.8 187.8zM326.6 276.5c-5.6-2.8-33.3-16.5-38.5-18.4-5.2-1.9-9-2.8-12.8 2.8-3.8 5.6-14.6 18.4-17.9 22.2-3.3 3.8-6.6 4.2-12.2 1.4-5.6-2.8-23.7-8.8-45.2-28-16.7-14.9-28-33.3-31.3-38.9-3.3-5.6-.3-8.6 2.4-11.4 2.5-2.5 5.6-6.6 8.5-9.9 2.8-3.3 3.8-5.6 5.6-9.4 1.9-3.8.9-7.1-.5-9.9-1.4-2.8-12.8-30.9-17.6-42.3-4.6-11.1-9.3-9.6-12.8-9.8-3.3-.2-7.1-.2-10.9-.2-3.8 0-9.9 1.4-15.1 7.1-5.2 5.6-20.4 19.9-20.4 48.4s20.9 56.1 23.8 60c2.8 3.8 40.9 62.4 99.1 87.5 13.8 5.9 24.6 9.4 33 12 13.9 4.4 26.6 3.8 36.6 2.3 11.2-1.7 34.3-14 39.1-27.5 4.8-13.5 4.8-25 3.3-27.5-1.5-2.5-5.3-3.9-10.9-6.7z" />
  </svg>
);

export function WhatsAppButton() {
  // Configured with your specific number and message
  const phoneNumber = "923335457255"; // Formatted with +92 country code
  const message = "Hi Air connection Travel and Tours, I need help with a visa enquiry.";
  const href = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;

  return (
    <motion.a
      initial={{ scale: 0, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ type: "spring", stiffness: 260, damping: 20, delay: 1 }}
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat on WhatsApp"
      className="fixed bottom-4 right-4 sm:bottom-6 sm:right-6 lg:bottom-8 lg:right-8 z-[100] group flex items-center justify-center focus:outline-none"
    >
      {/* Outer frosted glass glow effect */}
      <span className="absolute inset-0 rounded-full bg-[#25D366]/20 backdrop-blur-md border border-[#25D366]/30 shadow-[0_0_20px_rgba(37,211,102,0.3)] transition-all duration-300 group-hover:scale-110 group-hover:bg-[#25D366]/30 group-hover:shadow-[0_0_30px_rgba(37,211,102,0.5)] group-active:scale-95" />

      {/* Subtle pulsing background ring */}
      <span className="absolute inset-0 rounded-full bg-[#25D366] opacity-30 animate-[ping_3s_cubic-bezier(0,0,0.2,1)_infinite]" />

      {/* Inner solid glassy button */}
      <span className="relative flex h-12 w-12 sm:h-14 sm:w-14 lg:h-16 lg:w-16 items-center justify-center rounded-full bg-gradient-to-br from-[#25D366] to-[#1DA851] text-white shadow-inner border border-white/20 transition-transform duration-300 group-hover:scale-110 group-active:scale-95">
        <WhatsAppIcon className="h-6 w-6 sm:h-7 sm:w-7 lg:h-8 lg:w-8 drop-shadow-md transition-transform duration-300 group-hover:rotate-12" />
      </span>

      {/* Glassmorphic Tooltip */}
      <span className="pointer-events-none absolute right-full mr-4 whitespace-nowrap rounded-2xl bg-background/60 backdrop-blur-xl border border-border/50 px-4 py-2.5 text-sm font-bold text-foreground shadow-2xl opacity-0 transition-all duration-300 ease-out translate-x-4 group-hover:translate-x-0 group-hover:opacity-100 hidden sm:flex items-center gap-2.5">
        <span className="relative flex h-2.5 w-2.5">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#25D366] opacity-75"></span>
          <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-[#25D366]"></span>
        </span>
        Chat with us
      </span>
    </motion.a>
  );
}
