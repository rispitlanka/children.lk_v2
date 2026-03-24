"use client";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import childrenLogo from "@/public/images/logo.png";

const NAV_ITEMS = [
  { label: "Home", href: "/" },
  { label: "Resources", href: "/resources" },
  { label: "Learning", href: "/learning" },
  { label: "Media", href: "/media" },
  { label: "Events", href: "/events" },
];

export default function Navbar({ className }: { className: string }) {
  const pathname = usePathname();

  return (
    <header className={`flex justify-center ${className}`}>
      <div className="flex h-20 w-full max-w-[1256px] items-center rounded-[100px] border border-[#EEF0F3] bg-[var(--color-primary)]" style={{ paddingLeft: "32px", paddingRight: "24px" }}>
        <div className="shrink-0">
          <Image src={childrenLogo} width={127} height={127} alt="children.lk"/>
        </div>

        <div className="flex w-full justify-center">
          <nav className="hidden w-full items-center justify-center gap-[43px] lg:flex">
            {NAV_ITEMS.map((item) => {
              const isActive =
                item.href === "/" ? pathname === "/" : pathname.startsWith(item.href);

              return (
                <Link key={item.href} href={item.href} className="text-sm font-medium transition-colors">
                  <span className={isActive ? "text-[var(--color-white)]" : "text-[var(--color-accent)]"}>
                    {item.label}
                  </span>
                  {isActive && <span className="mt-1 block h-0.5 w-full bg-[var(--color-white)]" />}
                </Link>
              );
            })}
          </nav>
        </div>
        <div className="shrink-0">
            <button
                type="button"
                className="flex h-10 items-center justify-center gap-2 rounded-2xl bg-[var(--color-white)] text-sm font-medium text-[var(--color-accent)]"
                style={{ paddingLeft: "16px", paddingRight: "16px", minWidth: "146px" }}
            >
                <span className="whitespace-nowrap text-center">Register / Login</span>
            </button>
        </div>
      </div>
    </header>
  );
}
