import Link from "next/link";
import type { ReactNode } from "react";

type Crumb = { name: string; path: string };
export default function PageHero({ crumbs, title, lede, children, letter }: { crumbs: Crumb[]; title: ReactNode; lede?: ReactNode; children?: ReactNode; letter?: string }) {
  return (
    <section className="page-hero">
      {letter && <span className="hero-letter" aria-hidden="true">{letter}</span>}
      <div className="wrap">
        <nav className="crumbs" aria-label="Breadcrumb">
          {crumbs.map((c, i) => (
            <span key={c.path}>
              {i < crumbs.length - 1 ? <><Link href={c.path}>{c.name}</Link> /</> : <span aria-current="page">{c.name}</span>}
            </span>
          ))}
        </nav>
        <h1>{title}</h1>
        {lede && <p className="lede">{lede}</p>}
        {children}
      </div>
    </section>
  );
}
