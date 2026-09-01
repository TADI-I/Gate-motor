import type { Metadata } from "next";
import { CallToAction, InnerHero, PageShell } from "../components";
import { address, areas, displayPhone, email, phone, whatsapp } from "../site-data";

export const metadata: Metadata = { title: "Contact Gate Repairs Pretoria", description: "Call, WhatsApp or email Gate Repairs Pretoria for a free quote or 24/7 emergency gate motor assistance." };

const coverageGroups = [
  ["Gate automation", "Pretoria East, Centurion, Montana, Garsfontein, Lynnwood, Monument Park, Moreleta Park, Waterkloof, Faerie Glen and surrounding suburbs."],
  ["Electric fencing", "Pretoria, Centurion, Moreleta Park, Lynnwood, Montana, Boshkop, Midrand and wider Gauteng project areas."],
  ["Garage doors", "Pretoria East, Centurion, Montana, Garsfontein, Lynnwood, Waterkloof, Moreleta Park and Silver Lakes."],
  ["CCTV & alarms", "Pretoria, Centurion, Hatfield, Menlo Park, Montana, Moreleta Park, Villieria, Wonderboom, Waterkloof, Irene and Faerie Glen."],
];

export default function ContactPage() {
  return <PageShell>
    <InnerHero eyebrow="Contact us" title="Help is closer than you think." copy="For the fastest quote, send us a WhatsApp message with your Pretoria suburb and a photo or short video of the problem." image="/images/garage-door.webp" alt="Garage door repair service in Pretoria" />
    <section className="section contact-section"><div className="shell contact-grid"><div className="contact-intro"><p className="eyebrow">Get in touch</p><h2>Choose the easiest way to reach us.</h2><p>Emergency calls and online enquiries are attended 24/7. Onsite visits are arranged by booking after we understand what you need.</p></div><div className="contact-cards"><a className="contact-card primary" href={whatsapp} target="_blank" rel="noreferrer"><span>01</span><small>Fastest response</small><h3>WhatsApp us</h3><p>Send a photo, video and your suburb.</p><b>Start a chat ↗</b></a><a className="contact-card" href={`tel:${phone}`}><span>02</span><small>Speak to us</small><h3>{displayPhone}</h3><p>Call for emergency assistance or a booking.</p><b>Call now →</b></a><a className="contact-card" href={`mailto:${email}`}><span>03</span><small>Email enquiries</small><h3>Email our team</h3><p>{email}</p><b>Write an email →</b></a><div className="contact-card"><span>04</span><small>Our address</small><h3>Pretoria East</h3><p>{address}</p><b>Visits by appointment</b></div></div></div></section>
    <section className="contact-band"><div className="shell contact-band-grid"><div><p className="eyebrow light">What to send us</p><h2>A quicker quote starts with the right details.</h2></div><ol><li><span>01</span>Your name and Pretoria suburb</li><li><span>02</span>A photo or short video of the issue</li><li><span>03</span>The motor or system brand, if known</li><li><span>04</span>Whether the property is currently secure</li></ol></div></section>
    <section className="section coverage-section"><div className="shell"><div className="section-heading"><div><p className="eyebrow">Service area</p><h2>Technicians across Pretoria.</h2></div><p>Not sure whether we cover your suburb? Send us your location on WhatsApp and we’ll confirm availability.</p></div><div className="coverage-grid">{areas.map((area,i) => <span key={area}><b>{String(i+1).padStart(2,"0")}</b>{area}</span>)}</div><div className="coverage-groups">{coverageGroups.map(([title,copy]) => <article key={title}><h3>{title}</h3><p>{copy}</p></article>)}</div></div></section>
    <CallToAction title="Send the fault. We’ll take it from there." />
  </PageShell>;
}
