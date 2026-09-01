import type { Metadata } from "next";
import { CallToAction, InnerHero, PageShell } from "../components";
import { plans, services, whatsapp } from "../site-data";

export const metadata: Metadata = { title: "Gate & Security Services | Gate Repairs Pretoria", description: "Gate motor repairs and installations, electric fencing, garage doors, CCTV, alarms and maintenance plans across Pretoria." };

export default function ServicesPage() {
  return <PageShell>
    <InnerHero eyebrow="Our services" title="Everything your entrance needs." copy="Repairs, replacements, new installations and scheduled maintenance for the systems that control access to your property." image="/images/gate-motor.webp" alt="Gate motor repair and installation" />
    <section className="section service-detail-section"><div className="shell"><div className="service-detail-list">{services.map((service) => <article key={service.title}><div className="detail-image"><img src={service.image} alt={service.alt} loading="lazy" /><span>{service.number}</span></div><div className="detail-copy"><p className="eyebrow">{service.short}</p><h2>{service.title}</h2><p>{service.copy}</p><strong>{service.brands}</strong><a className="text-link" href={whatsapp} target="_blank" rel="noreferrer">Request a quote <span>↗</span></a></div></article>)}</div></div></section>
    <section className="section plans"><div className="shell"><div className="section-heading compact"><div><p className="eyebrow">Stay ahead of faults</p><h2>Maintenance plans</h2></div><p>Simple scheduled care for smoother operation and fewer surprise call-outs. Replacement parts are excluded unless specifically listed.</p></div><div className="plan-grid">{plans.map((plan) => <article className={`plan-card ${plan.featured ? "featured" : ""}`} key={plan.name}>{plan.featured && <span className="popular">Most comprehensive</span>}<p>{plan.name}</p><div className="price"><strong>{plan.price}</strong><span>/ month</span></div><ul>{plan.items.map((item) => <li key={item}><span>✓</span>{item}</li>)}</ul><a href={whatsapp} target="_blank" rel="noreferrer">Enquire about this plan <span>→</span></a></article>)}</div></div></section>
    <CallToAction title="Tell us what needs fixing." />
  </PageShell>;
}
