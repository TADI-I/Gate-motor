import { CallToAction, PageShell } from "./components";
import { areas, displayPhone, phone, services, whatsapp } from "./site-data";

const faqs = [
  ["How quickly can you help?", "Online quotes are usually sent within 1–2 hours. After approval, onsite work is typically scheduled within 24–48 hours. Emergency assistance is available 24/7."],
  ["Which brands do you repair?", "We work on all major brands, with particular experience in Centurion, Gemini, ET Nice and DTS."],
  ["Do you charge for a quote?", "No. Online and onsite assessments are free. Send a photo or video of the issue and your suburb on WhatsApp."],
];

export default function Home() {
  return <PageShell>
    <section className="hero"><div className="shell hero-grid">
      <div className="hero-copy"><p className="eyebrow"><span>Fast. Local. Reliable.</span></p><h1>Your gate should open.<br /><em>Every time.</em></h1><p className="hero-lede">Expert gate motor repairs and security installations across Pretoria. Quick turnaround, honest advice, and a technician when you need one.</p><div className="hero-actions"><a className="button button-orange" href={whatsapp} target="_blank" rel="noreferrer">Book on WhatsApp <span>↗</span></a><a className="text-link" href={`tel:${phone}`}>Call {displayPhone} <span>→</span></a></div><div className="brand-list" aria-label="Brands serviced"><span>We service</span><b>CENTURION</b><b>GEMINI</b><b>ET NICE</b><b>DTS</b></div></div>
      <div className="hero-media"><img src="/images/gate-motor.webp" alt="Gate motor installation and repair in Pretoria" /><div className="availability-card"><span className="pulse" /><div><strong>Technicians available</strong><small>Pretoria & surrounding areas</small></div></div><div className="hero-stamp"><strong>24/7</strong><span>Emergency<br />support</span></div></div>
    </div></section>
    <section className="proof"><div className="shell proof-grid"><div><strong>Same-day</strong><span>response available</span></div><div><strong>All major</strong><span>brands supported</span></div><div><strong>Free</strong><span>quotes & assessments</span></div><div><strong>Pretoria-wide</strong><span>local technicians</span></div></div></section>

    <section className="section services"><div className="shell"><div className="section-heading"><div><p className="eyebrow">What we do</p><h2>One team.<br />Complete security.</h2></div><p>From a gate that won’t move to a full perimeter-security upgrade, our technicians handle the systems that protect your property.</p></div><div className="service-grid home-service-grid">{services.map((service) => <article className="service-card" key={service.title}><div className="service-image"><img src={service.image} alt={service.alt} loading="lazy" /><span>{service.number}</span></div><div className="service-body"><h3>{service.title}</h3><p>{service.short}</p><a href="/services">View service <span>→</span></a></div></article>)}</div><div className="center-link"><a className="button button-dark" href="/services">Explore detailed guides & prices <span>→</span></a></div></div></section>

    <section className="section process"><div className="shell process-grid"><div className="process-intro"><p className="eyebrow light">How it works</p><h2>Fixed without the runaround.</h2><p>Clear communication from first message to final test. No inflated emergency fees and no work starts before you approve the quote.</p><a className="button button-orange" href="/about">Meet our team <span>→</span></a></div><ol className="steps"><li><span>01</span><div><h3>Tell us what’s wrong</h3><p>Call or send a photo, video and your suburb on WhatsApp.</p></div></li><li><span>02</span><div><h3>Get a clear quote</h3><p>We assess the issue and explain your repair or replacement options.</p></div></li><li><span>03</span><div><h3>We fix and test</h3><p>A technician completes the work and checks the system before handover.</p></div></li></ol></div></section>

    <section className="areas"><div className="shell areas-grid"><div><p className="eyebrow light">Local coverage</p><h2>Across Pretoria.<br />Close when it matters.</h2></div><div className="area-list">{areas.map((area, i) => <span key={area}><b>{String(i + 1).padStart(2, "0")}</b>{area}</span>)}</div></div></section>

    <section className="section faq-section"><div className="shell faq-grid"><div><p className="eyebrow">Good to know</p><h2>Common questions</h2><p>Still unsure? Visit our contact page and a technician will help you work out the next step.</p></div><div className="faq-list">{faqs.map(([question, answer], i) => <details key={question} open={i === 0}><summary>{question}<span>+</span></summary><p>{answer}</p></details>)}</div></div></section>
    <CallToAction />
  </PageShell>;
}
