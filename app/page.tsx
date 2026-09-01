const phone = "+27752461831";
const whatsapp = `https://wa.me/${phone.replace("+", "")}?text=${encodeURIComponent(
  "Hi Gate Repairs Pretoria, I would like a free quote.",
)}`;

const services = [
  { number: "01", title: "Gate motor repairs", copy: "Fault finding, batteries, remotes, PCBs, wheels and complete motor replacements for sliding and swing gates.", image: "/images/gate-motor.webp", alt: "Technician working on a gate motor" },
  { number: "02", title: "Electric fencing", copy: "New installations, compliance-minded repairs, energisers and maintenance for homes, farms and businesses.", image: "/images/electric-fence.webp", alt: "Electric fence installation on a boundary wall" },
  { number: "03", title: "Garage doors", copy: "Repairs and installations for sectional, roll-up, tip-up and roller shutter doors, including automation.", image: "/images/garage-door.webp", alt: "Garage door being repaired" },
  { number: "04", title: "CCTV & alarms", copy: "Wired and wireless alarms plus analogue, network and Wi-Fi cameras with remote mobile viewing.", image: "/images/cctv.webp", alt: "Home security camera installation" },
];

const plans = [
  { name: "Gate & motor", price: "R250", items: ["Anytime repairs", "Annual battery replacement", "Annual gate wheel replacement", "Remote programming & resets"] },
  { name: "Garage door", price: "R350", featured: true, items: ["Basic service every 3 months", "Major service every 24 months", "Anytime door & motor repairs", "Lubrication and spring tensioning"] },
  { name: "Electric fence", price: "R250", items: ["Basic service every 3 months", "Wire tension & voltage checks", "Annual energiser battery", "Anytime major servicing"] },
];

const faqs = [
  ["How quickly can you help?", "Online quotes are usually sent within 1–2 hours. After quote approval, onsite work is typically scheduled within 24–48 hours. Emergency assistance is available 24/7."],
  ["Which gate motor brands do you repair?", "We work on all major brands, with particular experience in Centurion, Gemini, ET Nice and DTS. Our technicians carry common spare parts for faster onsite repairs."],
  ["Do you charge for a quote?", "No. Online and onsite assessments are free. Send us a WhatsApp message with a photo or short video of the issue and your Pretoria suburb to get started."],
  ["When should a gate motor be replaced?", "Replacement may be more sensible when the model is discontinued, parts are unavailable, the motor is damaged beyond repair, or repeat repairs are approaching the price of a new unit."],
];

export default function Home() {
  return (
    <main>
      <div className="emergency-bar"><div className="shell emergency-inner"><span><i /> 24/7 emergency call-outs across Pretoria</span><a href={`tel:${phone}`}>075 246 1831</a></div></div>

      <header className="site-header"><div className="shell nav-wrap">
        <a className="brand" href="#top" aria-label="Gate Repairs Pretoria home"><span className="brand-mark">GR</span><span>Gate Repairs<small>Pretoria</small></span></a>
        <nav aria-label="Main navigation"><a href="#services">Services</a><a href="#why-us">Why us</a><a href="#plans">Care plans</a><a href="#areas">Areas</a></nav>
        <a className="button button-dark nav-cta" href={whatsapp} target="_blank" rel="noreferrer">Get a free quote <span>↗</span></a>
      </div></header>

      <section className="hero" id="top"><div className="shell hero-grid">
        <div className="hero-copy">
          <p className="eyebrow"><span>Fast. Local. Reliable.</span></p>
          <h1>Your gate should open.<br /><em>Every time.</em></h1>
          <p className="hero-lede">Expert gate motor repairs and security installations across Pretoria. Quick turnaround, honest advice, and a technician when you need one.</p>
          <div className="hero-actions"><a className="button button-orange" href={whatsapp} target="_blank" rel="noreferrer">Book on WhatsApp <span>↗</span></a><a className="text-link" href={`tel:${phone}`}>Call 075 246 1831 <span>→</span></a></div>
          <div className="brand-list" aria-label="Brands serviced"><span>We service</span><b>CENTURION</b><b>GEMINI</b><b>ET NICE</b><b>DTS</b></div>
        </div>
        <div className="hero-media"><img src="/images/gate-motor.webp" alt="Gate motor installation and repair in Pretoria" /><div className="availability-card"><span className="pulse" /><div><strong>Technicians available</strong><small>Pretoria & surrounding areas</small></div></div><div className="hero-stamp"><strong>24/7</strong><span>Emergency<br />support</span></div></div>
      </div></section>

      <section className="proof"><div className="shell proof-grid"><div><strong>Same-day</strong><span>response available</span></div><div><strong>All major</strong><span>brands supported</span></div><div><strong>Free</strong><span>quotes & assessments</span></div><div><strong>Pretoria-wide</strong><span>local technicians</span></div></div></section>

      <section className="section services" id="services"><div className="shell">
        <div className="section-heading"><div><p className="eyebrow">What we fix</p><h2>One team.<br />Complete security.</h2></div><p>From a gate that won’t move to a full perimeter-security upgrade, our technicians handle the systems that protect your property.</p></div>
        <div className="service-grid">{services.map((service) => <article className="service-card" key={service.title}><div className="service-image"><img src={service.image} alt={service.alt} loading="lazy" /><span>{service.number}</span></div><div className="service-body"><h3>{service.title}</h3><p>{service.copy}</p><a href={whatsapp} target="_blank" rel="noreferrer">Get a quote <span>↗</span></a></div></article>)}</div>
      </div></section>

      <section className="section process" id="why-us"><div className="shell process-grid">
        <div className="process-intro"><p className="eyebrow light">How it works</p><h2>Fixed without the runaround.</h2><p>Clear communication from first message to final test. No inflated emergency fees and no work starts before you approve the quote.</p><a className="button button-orange" href={whatsapp} target="_blank" rel="noreferrer">Start your booking <span>↗</span></a></div>
        <ol className="steps"><li><span>01</span><div><h3>Tell us what’s wrong</h3><p>Call or send a photo, video and your suburb on WhatsApp.</p></div></li><li><span>02</span><div><h3>Get a clear quote</h3><p>We assess the issue and explain your repair or replacement options.</p></div></li><li><span>03</span><div><h3>We fix and test</h3><p>A technician completes the work and checks the system before handover.</p></div></li></ol>
      </div></section>

      <section className="section plans" id="plans"><div className="shell">
        <div className="section-heading compact"><div><p className="eyebrow">Stay ahead of faults</p><h2>Maintenance plans</h2></div><p>Simple scheduled care for smoother operation and fewer surprise call-outs. Replacement parts are excluded.</p></div>
        <div className="plan-grid">{plans.map((plan) => <article className={`plan-card ${plan.featured ? "featured" : ""}`} key={plan.name}>{plan.featured && <span className="popular">Most comprehensive</span>}<p>{plan.name}</p><div className="price"><strong>{plan.price}</strong><span>/ month</span></div><ul>{plan.items.map((item) => <li key={item}><span>✓</span>{item}</li>)}</ul><a href={whatsapp} target="_blank" rel="noreferrer">Enquire about this plan <span>→</span></a></article>)}</div>
      </div></section>

      <section className="areas" id="areas"><div className="shell areas-grid"><div><p className="eyebrow light">Local coverage</p><h2>Across Pretoria.<br />Close when it matters.</h2></div><div className="area-list">{["Pretoria East", "Centurion", "Montana", "Pretoria North", "Garsfontein", "Moreleta Park", "Faerie Glen", "Surrounding areas"].map((area, i) => <span key={area}><b>{String(i + 1).padStart(2, "0")}</b>{area}</span>)}</div></div></section>

      <section className="section faq-section"><div className="shell faq-grid"><div><p className="eyebrow">Good to know</p><h2>Common questions</h2><p>Still unsure? Send us a message and a technician will help you work out the next step.</p></div><div className="faq-list">{faqs.map(([question, answer], i) => <details key={question} open={i === 0}><summary>{question}<span>+</span></summary><p>{answer}</p></details>)}</div></div></section>

      <section className="cta-section"><div className="shell cta-inner"><p className="eyebrow light">Need help now?</p><h2>Let’s get your gate<br />working again.</h2><div><a className="button button-light" href={whatsapp} target="_blank" rel="noreferrer">Get a free quote <span>↗</span></a><a className="cta-call" href={`tel:${phone}`}>075 246 1831</a></div></div></section>

      <footer><div className="shell footer-grid"><div><a className="brand brand-light" href="#top"><span className="brand-mark">GR</span><span>Gate Repairs<small>Pretoria</small></span></a><p>Gate automation and property security specialists serving Pretoria and surrounding areas.</p></div><div><h3>Contact</h3><a href={`tel:${phone}`}>075 246 1831</a><a href="mailto:admin@gaterepairspta.co.za">admin@gaterepairspta.co.za</a><span>47 Hesketh Drive, Moreleta Park<br />Pretoria East</span></div><div><h3>Hours</h3><span>Emergency assistance: 24/7</span><span>Quotes via WhatsApp: 24/7</span><span>Onsite visits by booking</span></div></div><div className="shell footer-bottom"><span>© {new Date().getFullYear()} Gate Repairs Pretoria</span><span>Repairs • Installations • Maintenance</span></div></footer>

      <a className="floating-whatsapp" href={whatsapp} target="_blank" rel="noreferrer" aria-label="Chat to Gate Repairs Pretoria on WhatsApp"><span>●</span> WhatsApp</a>
    </main>
  );
}
