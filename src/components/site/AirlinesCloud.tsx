import { AIRLINES } from "@/data/airlines";

export function AirlinesCloud() {
  const allNames = AIRLINES.map(a => a.name.split(' (')[0]);
  const extra = ["Lufthansa", "KLM Airlines", "Air France", "Swiss Air", "Air Canada", "Cathay Pacific", "Singapore Airlines", "AirAsia", "Thai Airways", "American Airlines", "AirBlue"];
  const combined = [...new Set([...allNames, ...extra])].sort();

  return (
    <div className="bg-[#050810] py-10 border-t border-white/5">
      <div className="container-px mx-auto max-w-7xl">
        <div className="flex flex-col items-center">
          <h3 className="text-[10px] font-black uppercase tracking-[0.4em] text-white/40 mb-6 text-center">
            Our Global Airline Partners &amp; Destinations
          </h3>
          <div className="flex flex-wrap justify-center items-center gap-x-3 gap-y-2 max-w-5xl mx-auto">
            {combined.map((name, i) => (
              <div key={name} className="flex items-center">
                <span className="text-[11px] font-bold text-white/60 hover:text-primary transition-colors cursor-default whitespace-nowrap">
                  {name}
                </span>
                {i < combined.length - 1 && (
                  <span className="ml-3 text-white/15 font-thin">·</span>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
