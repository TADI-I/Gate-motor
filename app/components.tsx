import type { ReactNode } from "react";
import { displayPhone, email, phone, whatsapp } from "./site-data";

export function Header() {
  return <>
    <div className="emergency-bar"><div className="shell emergency-inner"><span><i /> 24/7 emergency call-outs across Pretoria</span><a href={`tel:${phone}`}>{displayPhone}</a></div></div>
    <header className="site-header"><div className="shell nav-wrap">
      <a className="brand" href="/" aria-label="Gate Repairs Pretoria home"><span className="brand-mark">GR</span><span>Gate Repairs<small>Pretoria</small></span></a>
      <nav className="desktop-nav" aria-label="Main navigation"><a href="/">Home</a><a href="/about">About us</a><a href="/services">Services</a><a href="/contact">Contact</a></nav>
      <a className="button button-dark nav-cta" href={whatsapp} target="_blank" rel="noreferrer">Get a free quote <span>↗</span></a>
      <details className="mobile-menu"><summary aria-label="Open navigation"><span /><span /><span /></summary><div><a href="/">Home</a><a href="/about">About us</a><a href="/services">Services</a><a href="/contact">Contact</a></div></details>
    </div></header>
  </>;
}

export function Footer() {
  return <>
    <footer><div className="shell footer-grid"><div><a className="brand brand-light" href="/"><span className="brand-mark">GR</span><span>Gate Repairs<small>Pretoria</small></span></a><p>Gate automation and property security specialists serving Pretoria and surrounding areas.</p></div><div><h3>Explore</h3><a href="/">Home</a><a href="/about">About us</a><a href="/services">Services</a><a href="/contact">Contact</a></div><div><h3>Contact</h3><a href={`tel:${phone}`}>{displayPhone}</a><a href={`mailto:${email}`}>{email}</a><span>47 Hesketh Drive, Moreleta Park<br />Pretoria East</span></div><div><h3>Hours</h3><span>Emergency assistance: 24/7</span><span>Quotes via WhatsApp: 24/7</span><span>Onsite visits by booking</span></div></div><div className="shell footer-bottom"><span>© {new Date().getFullYear()} Gate Repairs Pretoria</span><span>Repairs • Installations • Maintenance</span></div></footer>
    <a className="floating-whatsapp" href={whatsapp} target="_blank" rel="noreferrer" aria-label="Chat to Gate Repairs Pretoria on WhatsApp"><span>●</span> WhatsApp</a>
  </>;
}

export function PageShell({ children }: { children: ReactNode }) {
  return <main><Header />{children}<Footer /></main>;
}

export function CallToAction({ title = "Let’s get your gate working again." }: { title?: string }) {
  return <section className="cta-section"><div className="shell cta-inner"><p className="eyebrow light">Need help now?</p><h2>{title}</h2><div><a className="button button-light" href={whatsapp} target="_blank" rel="noreferrer">Get a free quote <span>↗</span></a><a className="cta-call" href={`tel:${phone}`}>{displayPhone}</a></div></div></section>;
}

export function InnerHero({ eyebrow, title, copy, image, alt }: { eyebrow: string; title: string; copy: string; image: string; alt: string }) {
  return <section className="inner-hero"><div className="shell inner-hero-grid"><div><p className="eyebrow">{eyebrow}</p><h1>{title}</h1><p>{copy}</p></div><div className="inner-hero-image"><img src={image} alt={alt} /><span>Gate Repairs Pretoria</span></div></div></section>;
}
