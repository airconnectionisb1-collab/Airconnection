import * as React from "react"
import { format } from "date-fns"
import {
  Calendar as CalendarIcon, ArrowLeftRight, PlaneTakeoff, PlaneLanding,
  Phone, Search, Users, Armchair, ChevronDown, Loader2, CheckCircle2, Plane, Plus, X
} from "lucide-react"
import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import { Calendar } from "@/components/ui/calendar"
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover"
import { Command, CommandEmpty, CommandGroup, CommandInput, CommandItem, CommandList } from "@/components/ui/command"
import { Input } from "@/components/ui/input"
import { AIRPORTS } from "@/data/airports"

const AGENTS = [
  { name: "Air connection Expert", phone: "923335457255" },
]

type Leg = { from: string; to: string; date?: Date }

function buildWhatsAppUrl(
  phone: string, name: string,
  tripType: string, legs: { fromLabel: string; toLabel: string; dateLabel: string }[],
  retDate: string, pax: string, cabin: string, contact: string,
) {
  const tripLabel = tripType === "round" ? "Round Trip" : tripType === "one" ? "One Way" : "Multi-City"
  const lines = [
    `Hello ${name}! I am interested in booking a flight.`,
    "",
    `✈️ *Flight Details:*`,
    `• Trip Type: ${tripLabel}`,
  ]
  if (tripType === "multi") {
    legs.forEach((leg, i) => {
      lines.push(``, `*Leg ${i + 1}:*`)
      lines.push(`  From: ${leg.fromLabel}`)
      lines.push(`  To: ${leg.toLabel}`)
      lines.push(`  Date: ${leg.dateLabel}`)
    })
  } else {
    lines.push(`• From: ${legs[0]?.fromLabel || ""}`)
    lines.push(`• To: ${legs[0]?.toLabel || ""}`)
    lines.push(`• Departure: ${legs[0]?.dateLabel || ""}`)
    if (tripType === "round") lines.push(`• Return: ${retDate || "Flexible"}`)
  }
  lines.push("", `• Passengers: ${pax}`, `• Cabin: ${cabin}`)
  if (contact) lines.push(`• Contact: ${contact}`)
  lines.push("", "Please let me know the best available rates. Thank you!")
  return `https://wa.me/${phone}?text=${encodeURIComponent(lines.join("\n"))}`
}

export function FlightSearchPortal() {
  const [tripType, setTripType] = React.useState("round")
  const [date, setDate] = React.useState<Date>()
  const [returnDate, setReturnDate] = React.useState<Date>()
  const [fromCode, setFromCode] = React.useState("")
  const [toCode, setToCode] = React.useState("")
  const [fromOpen, setFromOpen] = React.useState(false)
  const [toOpen, setToOpen] = React.useState(false)
  const [contact, setContact] = React.useState("")

  // Multi-city legs (extra legs beyond the first)
  const [extraLegs, setExtraLegs] = React.useState<Leg[]>([{ from: "", to: "", date: undefined }])

  const addLeg = () => { if (extraLegs.length < 3) setExtraLegs([...extraLegs, { from: "", to: "", date: undefined }]) }
  const removeLeg = (i: number) => setExtraLegs(extraLegs.filter((_, idx) => idx !== i))
  const updateLeg = (i: number, patch: Partial<Leg>) => setExtraLegs(extraLegs.map((l, idx) => idx === i ? { ...l, ...patch } : l))

  const [adults, setAdults] = React.useState(1)
  const [children, setChildren] = React.useState(0)
  const [infants, setInfants] = React.useState(0)
  const totalPax = adults + children + infants
  const paxLabel = [
    `${adults} Adult${adults > 1 ? "s" : ""}`,
    children > 0 ? `${children} Child${children > 1 ? "ren" : ""}` : "",
    infants > 0 ? `${infants} Infant${infants > 1 ? "s" : ""}` : "",
  ].filter(Boolean).join(", ")

  const [cabinClass, setCabinClass] = React.useState("Economy")

  // Overlay states
  const [processing, setProcessing] = React.useState(false)
  const [showAgentPicker, setShowAgentPicker] = React.useState(false)

  const codeToLabel = (code: string) => {
    const a = AIRPORTS.find(a => a.code === code)
    return a ? `${a.city} (${a.code})` : ""
  }

  const getAllLegs = () => {
    const first = { fromLabel: codeToLabel(fromCode), toLabel: codeToLabel(toCode), dateLabel: date ? format(date, "PPP") : "" }
    if (tripType !== "multi") return [first]
    return [first, ...extraLegs.map(l => ({ fromLabel: codeToLabel(l.from), toLabel: codeToLabel(l.to), dateLabel: l.date ? format(l.date, "PPP") : "Flexible" }))]
  }

  const getAgentUrl = (agent: typeof AGENTS[0]) => buildWhatsAppUrl(
    agent.phone, agent.name, tripType, getAllLegs(),
    returnDate ? format(returnDate, "PPP") : "",
    paxLabel, cabinClass, contact,
  )

  const canSearch = fromCode && toCode && date && (tripType !== "multi" || extraLegs.every(l => l.from && l.to))

  const handleSearch = () => {
    if (!canSearch) return
    setProcessing(true)
    setShowAgentPicker(false)
    setTimeout(() => {
      setProcessing(false)
      setShowAgentPicker(true)
    }, 2000)
  }

  return (
    <>
      {/* Processing Spinner Overlay */}
      {processing && (
        <div className="fixed inset-0 z-[9999] flex items-center justify-center bg-black/60 backdrop-blur-sm animate-in fade-in duration-200">
          <div className="bg-white rounded-3xl p-10 shadow-2xl flex flex-col items-center gap-5 min-w-[280px] animate-in zoom-in-95 duration-300">
            <Loader2 className="h-14 w-14 text-primary animate-spin" />
            <p className="text-lg font-bold text-slate-800">Finding best fares...</p>
            <p className="text-sm text-muted-foreground text-center">Searching across 300+ airlines for you</p>
          </div>
        </div>
      )}

      {/* Agent Selection Popup */}
      {showAgentPicker && (
        <div className="fixed inset-0 z-[9999] flex items-center justify-center bg-black/60 backdrop-blur-sm animate-in fade-in duration-200" onClick={() => setShowAgentPicker(false)}>
          <div className="bg-white rounded-3xl p-8 sm:p-10 shadow-2xl flex flex-col items-center gap-6 w-[90vw] max-w-[420px] animate-in zoom-in-95 duration-300" onClick={e => e.stopPropagation()}>
            <CheckCircle2 className="h-14 w-14 text-green-500" />
            <div className="text-center">
              <p className="text-xl font-bold text-slate-800">Fares Found!</p>
              <p className="text-sm text-muted-foreground mt-1">Choose an agent to get your personalized quote on WhatsApp</p>
            </div>

            <div className="w-full space-y-3">
              {AGENTS.map(agent => (
                <a
                  key={agent.phone}
                  href={getAgentUrl(agent)}
                  target="_blank"
                  rel="noreferrer"
                  onClick={() => setShowAgentPicker(false)}
                  className="flex items-center gap-4 w-full rounded-2xl border border-border p-4 hover:border-[#25D366] hover:bg-[#25D366]/5 transition-colors group"
                >
                  <div className="flex items-center justify-center h-12 w-12 rounded-full bg-[#25D366] text-white shrink-0">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 24 24"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/></svg>
                  </div>
                  <div className="flex-1">
                    <p className="font-bold text-slate-800 group-hover:text-[#25D366] transition-colors">{agent.name}</p>
                    <p className="text-xs text-muted-foreground">Tap to chat on WhatsApp</p>
                  </div>
                  <ChevronDown className="h-5 w-5 text-muted-foreground -rotate-90 group-hover:text-[#25D366] transition-colors" />
                </a>
              ))}
            </div>

            <button onClick={() => setShowAgentPicker(false)} className="text-sm text-muted-foreground hover:text-foreground transition-colors mt-1">
              Cancel
            </button>
          </div>
        </div>
      )}

      <div className="w-full bg-white dark:bg-card rounded-2xl shadow-elevated p-4 sm:p-6 mb-12 border border-border mt-8 sm:-mt-16 relative z-20">
        {/* Top Row */}
        <div className="flex flex-wrap items-center gap-3 sm:gap-5 mb-5 text-[13px] sm:text-sm">
          <div className="flex items-center rounded-full border border-blue-200 overflow-hidden bg-white">
            {(["round", "one", "multi"] as const).map((t, i) => (
              <button key={t} onClick={() => setTripType(t)}
                className={cn("px-4 py-1.5 font-medium transition-colors outline-none",
                  i > 0 && "border-l border-border",
                  tripType === t ? "bg-blue-50 text-blue-600" : "hover:bg-muted text-muted-foreground"
                )}>
                {t === "round" ? "Round Trip" : t === "one" ? "One Way" : "Multi-City"}
              </button>
            ))}
          </div>
          <div className="h-5 w-px bg-border hidden md:block" />

          {/* Cabin */}
          <Popover>
            <PopoverTrigger asChild>
              <button aria-label="Select Cabin Class" className="flex items-center gap-1.5 hover:text-foreground transition-colors outline-none text-muted-foreground font-medium">
                <Armchair size={16} className="text-blue-500" /> {cabinClass} <ChevronDown size={14} className="opacity-50" />
              </button>
            </PopoverTrigger>
            <PopoverContent className="w-44 p-1">
              {["Economy", "Premium Economy", "Business", "First"].map(c => (
                <div key={c} onClick={() => setCabinClass(c)} className="p-2.5 hover:bg-muted cursor-pointer text-sm rounded-lg font-medium">{c}</div>
              ))}
            </PopoverContent>
          </Popover>

          {/* Passengers */}
          <Popover>
            <PopoverTrigger asChild>
              <button aria-label="Select Travellers" className="flex items-center gap-1.5 hover:text-foreground transition-colors outline-none text-muted-foreground font-medium">
                <Users size={16} className="text-blue-500" /> {totalPax} Traveller{totalPax > 1 ? "s" : ""} <ChevronDown size={14} className="opacity-50" />
              </button>
            </PopoverTrigger>
            <PopoverContent className="w-64 p-4">
              {([
                { label: "Adults", sub: "≥ 12 years", val: adults, set: setAdults, min: 1 },
                { label: "Children", sub: "2–11 years", val: children, set: setChildren, min: 0 },
                { label: "Infants", sub: "< 2 years", val: infants, set: setInfants, min: 0 },
              ] as const).map(p => (
                <div key={p.label} className="flex justify-between items-center py-2">
                  <div><p className="font-semibold text-sm">{p.label}</p><p className="text-xs text-muted-foreground">{p.sub}</p></div>
                  <div className="flex items-center gap-2">
                    <Button variant="outline" size="icon" className="h-7 w-7 rounded-full" onClick={() => p.set(Math.max(p.min, p.val - 1))}>-</Button>
                    <span className="w-4 text-center font-medium text-sm">{p.val}</span>
                    <Button variant="outline" size="icon" className="h-7 w-7 rounded-full" onClick={() => p.set(p.val + 1)}>+</Button>
                  </div>
                </div>
              ))}
            </PopoverContent>
          </Popover>
        </div>

        {/* Leg 1 — Main Inputs */}
        <div className="flex flex-col lg:flex-row gap-3">
          {/* From / To */}
          <div className="flex flex-col sm:flex-row relative flex-1">
            <Popover open={fromOpen} onOpenChange={setFromOpen}>
              <PopoverTrigger asChild>
                <Button aria-label="Select Departure Airport" variant="outline" role="combobox" className="justify-start w-full sm:rounded-r-none h-14 pl-12 text-base font-normal border-border bg-white shadow-none hover:bg-muted/50 hover:text-foreground">
                  <PlaneTakeoff className="absolute left-4 top-1/2 -translate-y-1/2 text-blue-500" size={20} />
                  {fromCode ? codeToLabel(fromCode) : <span className="text-muted-foreground">From Where</span>}
                </Button>
              </PopoverTrigger>
              <PopoverContent className="w-[300px] p-0" align="start">
                <Command><CommandInput placeholder="Search airports..." /><CommandList><CommandEmpty>No airport found.</CommandEmpty><CommandGroup>
                  {AIRPORTS.map(a => (
                    <CommandItem key={a.code} value={`${a.city} ${a.name} ${a.code}`} onSelect={() => { setFromCode(a.code); setFromOpen(false) }} className="cursor-pointer">
                      <PlaneTakeoff className="mr-2 h-4 w-4 opacity-50" />
                      <div className="flex flex-col"><span className="font-medium">{a.city} ({a.code})</span><span className="text-xs text-muted-foreground">{a.name}</span></div>
                    </CommandItem>
                  ))}
                </CommandGroup></CommandList></Command>
              </PopoverContent>
            </Popover>

            <button onClick={() => { const t = fromCode; setFromCode(toCode); setToCode(t) }}
              className="absolute left-1/2 sm:top-1/2 top-[3.5rem] -translate-x-1/2 -translate-y-1/2 z-10 bg-white border border-border rounded-full p-1.5 hover:bg-blue-50 text-blue-500 shadow-sm transition-colors rotate-90 sm:rotate-0 outline-none">
              <ArrowLeftRight size={16} />
            </button>

            <Popover open={toOpen} onOpenChange={setToOpen}>
              <PopoverTrigger asChild>
                <Button aria-label="Select Destination Airport" variant="outline" role="combobox" className="justify-start w-full sm:rounded-l-none border-t-0 sm:border-t sm:border-l-0 h-14 pl-12 sm:pl-10 text-base font-normal border-border bg-white shadow-none hover:bg-muted/50 hover:text-foreground">
                  <PlaneLanding className="absolute left-4 top-1/2 -translate-y-1/2 text-blue-500" size={20} />
                  {toCode ? codeToLabel(toCode) : <span className="text-muted-foreground">To Where</span>}
                </Button>
              </PopoverTrigger>
              <PopoverContent className="w-[300px] p-0" align="start">
                <Command><CommandInput placeholder="Search airports..." /><CommandList><CommandEmpty>No airport found.</CommandEmpty><CommandGroup>
                  {AIRPORTS.map(a => (
                    <CommandItem key={a.code} value={`${a.city} ${a.name} ${a.code}`} onSelect={() => { setToCode(a.code); setToOpen(false) }} className="cursor-pointer">
                      <PlaneLanding className="mr-2 h-4 w-4 opacity-50" />
                      <div className="flex flex-col"><span className="font-medium">{a.city} ({a.code})</span><span className="text-xs text-muted-foreground">{a.name}</span></div>
                    </CommandItem>
                  ))}
                </CommandGroup></CommandList></Command>
              </PopoverContent>
            </Popover>
          </div>

          {/* Departure Date */}
          <Popover>
            <PopoverTrigger asChild>
              <Button variant="outline" className={cn("h-14 px-4 text-base bg-white border-border hover:bg-muted/50 shadow-none justify-start text-left font-normal lg:w-[160px]", !date && "text-muted-foreground")}>
                {date ? format(date, "PPP") : <span>Departure</span>}
              </Button>
            </PopoverTrigger>
            <PopoverContent className="w-auto p-0" align="start"><Calendar mode="single" selected={date} onSelect={setDate} disabled={d => d < new Date(new Date().setHours(0,0,0,0))} initialFocus /></PopoverContent>
          </Popover>

          {/* Return Date — only for Round Trip */}
          {tripType === "round" && (
            <Popover>
              <PopoverTrigger asChild>
                <Button variant="outline" className={cn("h-14 px-4 text-base bg-white border-border hover:bg-muted/50 shadow-none justify-start text-left font-normal lg:w-[160px]", !returnDate && "text-muted-foreground")}>
                  {returnDate ? format(returnDate, "PPP") : <span>Returning</span>}
                </Button>
              </PopoverTrigger>
              <PopoverContent className="w-auto p-0" align="start"><Calendar mode="single" selected={returnDate} onSelect={setReturnDate} disabled={d => d < (date || new Date(new Date().setHours(0,0,0,0)))} initialFocus /></PopoverContent>
            </Popover>
          )}
        </div>

        {/* Multi-City Extra Legs */}
        {tripType === "multi" && (
          <div className="mt-4 space-y-3">
            {extraLegs.map((leg, i) => (
              <div key={i} className="flex flex-col sm:flex-row gap-3 items-stretch sm:items-center p-3 rounded-xl bg-blue-50/50 border border-blue-100">
                <span className="text-xs font-bold text-blue-600 shrink-0 self-center">Leg {i + 2}</span>
                {/* From */}
                <AirportPicker
                  value={leg.from}
                  onChange={code => updateLeg(i, { from: code })}
                  placeholder="From"
                  icon="takeoff"
                />
                {/* To */}
                <AirportPicker
                  value={leg.to}
                  onChange={code => updateLeg(i, { to: code })}
                  placeholder="To"
                  icon="landing"
                />
                {/* Date */}
                <Popover>
                  <PopoverTrigger asChild>
                    <Button variant="outline" className={cn("h-12 px-4 text-sm bg-white border-border hover:bg-muted/50 shadow-none justify-start text-left font-normal min-w-[140px]", !leg.date && "text-muted-foreground")}>
                      {leg.date ? format(leg.date, "PPP") : <span>Date</span>}
                    </Button>
                  </PopoverTrigger>
                  <PopoverContent className="w-auto p-0" align="start"><Calendar mode="single" selected={leg.date} onSelect={d => updateLeg(i, { date: d })} disabled={d => d < new Date(new Date().setHours(0,0,0,0))} initialFocus /></PopoverContent>
                </Popover>
                {/* Remove */}
                <Button variant="ghost" size="icon" className="h-10 w-10 shrink-0 text-red-400 hover:text-red-600 hover:bg-red-50 rounded-full" onClick={() => removeLeg(i)}>
                  <X size={18} />
                </Button>
              </div>
            ))}
            {extraLegs.length < 3 && (
              <button onClick={addLeg} className="flex items-center gap-2 text-sm font-semibold text-blue-600 hover:text-blue-700 transition-colors pl-1 outline-none">
                <Plus size={16} /> Add another flight
              </button>
            )}
          </div>
        )}

        {/* Contact & Search */}
        <div className="flex flex-col sm:flex-row gap-3 mt-4">
          <div className="relative flex-1 sm:max-w-[220px]">
            <label htmlFor="flight-contact" className="sr-only">Contact Number</label>
            <Phone className="absolute left-3.5 top-1/2 -translate-y-1/2 text-blue-500 h-5 w-5" />
            <Input id="flight-contact" name="contact" autoComplete="tel" placeholder="Contact No." value={contact} onChange={e => setContact(e.target.value)} className="pl-11 h-14 text-base bg-white border-border shadow-none" />
          </div>
          <Button
            onClick={handleSearch}
            disabled={!canSearch || processing}
            className="h-14 px-8 text-lg font-semibold bg-[#25D366] hover:bg-[#1fb855] text-white flex-1 sm:flex-initial shadow-none rounded-lg disabled:opacity-50 gap-2"
          >
            <Search className="h-5 w-5" /> Search
          </Button>
        </div>
      </div>
    </>
  )
}

/** Small reusable airport picker for multi-city leg rows */
function AirportPicker({ value, onChange, placeholder, icon }: { value: string; onChange: (code: string) => void; placeholder: string; icon: "takeoff" | "landing" }) {
  const [open, setOpen] = React.useState(false)
  const Icon = icon === "takeoff" ? PlaneTakeoff : PlaneLanding
  const label = value ? AIRPORTS.find(a => a.code === value) : null

  return (
    <Popover open={open} onOpenChange={setOpen}>
      <PopoverTrigger asChild>
        <Button variant="outline" role="combobox" className="justify-start h-12 pl-10 text-sm font-normal border-border bg-white shadow-none hover:bg-muted/50 hover:text-foreground flex-1 min-w-[140px]">
          <Icon className="absolute left-3 top-1/2 -translate-y-1/2 text-blue-500" size={16} />
          {label ? `${label.city} (${label.code})` : <span className="text-muted-foreground">{placeholder}</span>}
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-[280px] p-0" align="start">
        <Command><CommandInput placeholder="Search airports..." /><CommandList><CommandEmpty>No airport found.</CommandEmpty><CommandGroup>
          {AIRPORTS.map(a => (
            <CommandItem key={a.code} value={`${a.city} ${a.name} ${a.code}`} onSelect={() => { onChange(a.code); setOpen(false) }} className="cursor-pointer">
              <Icon className="mr-2 h-4 w-4 opacity-50" />
              <div className="flex flex-col"><span className="font-medium">{a.city} ({a.code})</span><span className="text-xs text-muted-foreground">{a.name}</span></div>
            </CommandItem>
          ))}
        </CommandGroup></CommandList></Command>
      </PopoverContent>
    </Popover>
  )
}
