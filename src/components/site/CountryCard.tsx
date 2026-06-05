import { Link } from "@tanstack/react-router";

export function CountryCard({
  name,
  short,
  image,
  accent,
  slug,
}: {
  name: string;
  short: string;
  image: string;
  accent?: string;
  slug: string;
}) {
  return (
    <Link
      to={`/countries/${slug}`}
      className="group relative block aspect-[4/5] overflow-hidden rounded-[2.5rem] bg-muted transition-all duration-700 hover:shadow-[0_40px_80px_-20px_rgba(0,0,0,0.3)] hover:-translate-y-2 lg:aspect-[3/4]"
    >
      <img
        src={image}
        alt={name}
        className="absolute inset-0 h-full w-full object-cover transition-transform duration-1000 group-hover:scale-110"
        loading="lazy"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent transition-opacity group-hover:via-black/40" />
      
      <div className="absolute inset-0 flex flex-col justify-end p-8 sm:p-10">
        <div className="mb-4 translate-y-4 opacity-0 transition-all duration-500 group-hover:translate-y-0 group-hover:opacity-100">
          <span className="inline-flex rounded-full bg-primary/90 px-5 py-1.5 text-[10px] font-black uppercase tracking-[0.2em] text-white backdrop-blur-sm">
            {accent || "Featured"}
          </span>
        </div>
        <h3 className="text-3xl font-black text-white tracking-tight sm:text-4xl">
          {name}
        </h3>
        <p className="mt-3 text-sm font-medium text-white/70 line-clamp-2 leading-relaxed opacity-0 translate-y-4 transition-all delay-75 duration-500 group-hover:opacity-100 group-hover:translate-y-0">
          {short}
        </p>
        <div className="mt-6 flex items-center gap-3 opacity-0 translate-y-4 transition-all delay-150 duration-500 group-hover:opacity-100 group-hover:translate-y-0">
          <div className="h-1 w-12 bg-primary rounded-full" />
          <span className="text-[10px] font-black uppercase tracking-widest text-white">Explore</span>
        </div>
      </div>
    </Link>
  );
}
