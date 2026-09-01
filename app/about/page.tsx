import type { Metadata } from "next";
import { CallToAction, InnerHero, PageShell } from "../components";

export const metadata: Metadata = { title: "About Us | Gate Repairs Pretoria", description: "Meet the local technicians behind Gate Repairs Pretoria and learn how we deliver dependable gate automation and security services." };

const values = [
  ["01", "Clear advice", "We explain the fault, the available options and the price before work begins."],
  ["02", "Practical experience", "Our technicians work across gate automation, garage doors, electric fencing, CCTV and alarms."],
  ["03", "Respect for your property", "Neat workmanship, careful testing and a clean handover are part of every visit."],
  ["04", "Support when it matters", "A failed gate is a security risk, which is why emergency help is available around the clock."],
];

export default function AboutPage() {
  return <PageShell>
    <InnerHero eyebrow="About us" title="Local expertise. Honest service." copy="We help Pretoria homeowners and businesses keep their entrances and security systems working properly—with practical advice, responsive support and workmanship built to last." image="/images/electric-fence.webp" alt="Security installation at a Pretoria property" />
    <section className="section story-section"><div className="shell story-grid"><div><p className="eyebrow">Our approach</p><h2>Security work should feel straightforward.</h2></div><div className="story-copy"><p>Gate Repairs Pretoria brings gate automation and property security services together under one dependable local team. We repair existing equipment, install new systems and maintain the parts that protect access to your home or business.</p><p>Our first job is to understand the actual fault. We assess before recommending, keep common gate motor parts close at hand and only suggest replacement when continued repair no longer makes financial sense.</p><p>From the first WhatsApp message to the final system test, we aim to make the process clear, efficient and respectful of your time.</p></div></div></section>
    <section className="about-proof"><div className="shell proof-grid"><div><strong>24/7</strong><span>emergency support</span></div><div><strong>1–2 hrs</strong><span>typical online quote</span></div><div><strong>24–48 hrs</strong><span>typical onsite turnaround</span></div><div><strong>Free</strong><span>assessments and quotes</span></div></div></section>
    <section className="section values-section"><div className="shell"><div className="section-heading"><div><p className="eyebrow">What guides us</p><h2>Built around your peace of mind.</h2></div><p>Every repair or installation should leave you with a safer property and a clear understanding of the work completed.</p></div><div className="value-grid">{values.map(([number,title,copy]) => <article key={title}><span>{number}</span><h3>{title}</h3><p>{copy}</p></article>)}</div></div></section>
    <section className="section process"><div className="shell process-grid"><div className="process-intro"><p className="eyebrow light">Why choose us</p><h2>The right fix, not the quickest sale.</h2><p>We work on all major brands and keep a practical stock of common parts. When repair is viable, we repair. When replacement makes more sense, we explain why.</p><a className="button button-orange" href="/services">Explore our services <span>→</span></a></div><ol className="steps"><li><span>01</span><div><h3>Experienced technicians</h3><p>Hands-on knowledge across gate motors and integrated security systems.</p></div></li><li><span>02</span><div><h3>Fast local response</h3><p>Pretoria-wide coverage with same-day support available.</p></div></li><li><span>03</span><div><h3>Work you can rely on</h3><p>Careful testing, service guarantees and support after installation.</p></div></li></ol></div></section>
    <CallToAction title="Put a dependable team on the job." />
  </PageShell>;
}
