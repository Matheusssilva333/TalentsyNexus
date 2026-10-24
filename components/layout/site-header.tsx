import Link from "next/link";

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-30 border-b border-white/10 bg-[#07090d]/90 backdrop-blur-xl">
      <div className="shell flex h-[70px] items-center justify-between gap-4">
        <Link href="/" aria-label="Talentsy Nexus — página inicial" className="flex items-center gap-2.5">
          <span className="grid h-8 w-8 place-items-center rounded-[10px] bg-accent text-sm font-black text-ink">T</span>
          <span className="text-[.96rem] font-extrabold tracking-[-.04em]">Talentsy <span className="text-accent">Nexus</span></span>
        </Link>
        <nav aria-label="Navegação principal" className="flex items-center gap-5 text-[.82rem] font-semibold text-[#c3c9c3]">
          <Link className="transition hover:text-white" href="/">Descobrir</Link>
          <Link className="transition hover:text-white" href="/feed">Episódios</Link>
          <Link className="transition hover:text-white" href="/sobre">Sobre</Link>
        </nav>
      </div>
    </header>
  );
}
