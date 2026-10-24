import Link from "next/link";
import { appSettings } from "@/lib/content";

export function SiteFooter() {
  return (
    <footer className="site-footer">
      <div className="shell footer-inner">
        <span>© 2025 {appSettings.brand}. Histórias que conectam.</span>
        <div className="flex gap-5">
          <Link href="/sobre" className="hover:text-white">Sobre a empresa</Link>
          <Link href="/feed" className="hover:text-white">Assistir episódios</Link>
        </div>
      </div>
    </footer>
  );
}
