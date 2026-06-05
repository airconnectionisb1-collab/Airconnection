import { Link } from "@tanstack/react-router";

export function SEOBlock() {
  const keywords =
    "best travel agency in pakistan, no.1 travel agency in pakistan, top travel agency islamabad, best visa consultant pakistan, top visa consultancy islamabad, #1 visa expert pakistan, reliable travel agents in pakistan, best tour operator pakistan, cheap flights pakistan, flight booking pakistan, hotel reservation islamabad, corporate travel agency pakistan, best travel and tours pakistan, immigration consultant islamabad, schengen visa agent pakistan, uk visa consultant pakistan, usa visa expert islamabad, canada immigration consultant pakistan, europe visa services pakistan, authorized travel agent pakistan, IATA travel agency pakistan, top 10 travel agencies in pakistan, best holiday packages pakistan, best umrah packages pakistan, pakistan no.1 travel agency and consultancy, top travel agency pakistan, best in islamabad, travel agency";

  return (
    <div className="mt-16 border-t border-white/10 pt-8 text-sm text-white/60">
      <div className="grid gap-8 md:grid-cols-2">
        <div>
          <h2 className="text-xl font-black text-white uppercase tracking-tight mb-4">
            Pakistan's No.1 <span className="text-accent">Visit Visa</span> Expert
          </h2>
          <p className="leading-relaxed text-white/70">
            Air connection Travel and Tours is Pakistan's premier choice for Visit Visas and Customized Tourism.
            As the top-rated agency in Islamabad, we specialize in high-success visit visa processing
            and premium travel experiences worldwide.
          </p>
          <div className="mt-4 p-3 rounded-xl bg-red-500/10 border border-red-500/20 text-[11px] font-bold text-red-400 uppercase tracking-widest inline-block">
            Note: We exclusively handle Visit Visas & Tourism. (No Work or Study Visas)
          </div>
        </div>

        <div className="space-y-4">
          <p className="font-bold text-white/90 text-sm uppercase tracking-wider border-b border-white/10 pb-2">
            Our Specialized Services
          </p>
          <ul className="grid grid-cols-1 sm:grid-cols-2 gap-x-4 gap-y-2 text-xs font-medium text-white/60">
            <li className="flex items-center gap-2">
              <div className="h-1.5 w-1.5 rounded-full bg-accent" /> Worldwide Air Ticketing
            </li>
            <li className="flex items-center gap-2">
              <div className="h-1.5 w-1.5 rounded-full bg-accent" /> Visit Visa Processing
            </li>
            <li className="flex items-center gap-2">
              <div className="h-1.5 w-1.5 rounded-full bg-accent" /> Tourism & Group Tours
            </li>
            <li className="flex items-center gap-2">
              <div className="h-1.5 w-1.5 rounded-full bg-accent" /> Premium Hotel Bookings
            </li>
            <li className="flex items-center gap-2">
              <div className="h-1.5 w-1.5 rounded-full bg-accent" /> Expert Travel Guides
            </li>
            <li className="flex items-center gap-2">
              <div className="h-1.5 w-1.5 rounded-full bg-accent" /> Corporate Travel
            </li>
          </ul>
        </div>
      </div>

      <p className="mt-8 text-xs text-white/40 leading-relaxed border-t border-white/5 pt-4">
        Whether you're planning a vacation or a business trip, Air connection Travel and Tours is your ultimate gateway with a 98% success rate.
        Contact the <Link to="/contact" className="text-white/60 hover:text-accent underline transition-colors">best travel and tours company in Pakistan</Link> today.
      </p>


      {/* Hidden Keywords & Backlinks for SEO */}
      <div className="sr-only" aria-hidden="true">
        <p>{keywords}</p>
        <div className="flex flex-col gap-1 mt-2">
          <a href="https://airconnection.pk" title="Air connection Travel and Tours Pakistan" target="_blank" rel="noopener noreferrer">Air connection Travel and Tours Pakistan</a>
          <a href="https://airconnection.pk" title="Air connection Travel and Tours" target="_blank" rel="noopener noreferrer">Air connection Travel and Tours</a>
          <a href="https://www.facebook.com/profile.php?id=61572120569006" title="Air connection Travel and Tours Facebook" target="_blank" rel="noopener noreferrer">Air connection Travel and Tours Facebook</a>
        </div>
      </div>
    </div>
  );
}
