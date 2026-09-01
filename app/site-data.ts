export const phone = "+27752461831";
export const displayPhone = "075 246 1831";
export const email = "admin@gaterepairspta.co.za";
export const address = "47 Hesketh Drive, Moreleta Park, Pretoria East";
export const whatsapp = `https://wa.me/${phone.replace("+", "")}?text=${encodeURIComponent("Hi Gate Repairs Pretoria, I would like a free quote.")}`;

export const services = [
  { number: "01", title: "Gate motor repairs", short: "Fast fault finding and dependable repairs for sliding and swing gates.", copy: "We repair batteries, chargers, remotes, PCBs, sensors, wheels, rails and complete gate motor systems. When an older motor is no longer economical to fix, we will explain the replacement options clearly before work begins.", image: "/images/gate-motor.webp", alt: "Technician working on a gate motor", brands: "Centurion, Gemini, ET Nice, DTS and other major brands" },
  { number: "02", title: "Gate motor installations", short: "Supply and installation of new sliding and swing gate automation.", copy: "We install new gate motors for homes and businesses, or replace outdated units. New installations include setup, testing, remote programming, manufacturer warranty and our service guarantee.", image: "/images/gate-motor.webp", alt: "Automated driveway gate motor", brands: "Sliding gates, swing gates, smart access and safety beams" },
  { number: "03", title: "Electric fencing", short: "New installations, repairs and scheduled perimeter maintenance.", copy: "Our team installs and repairs electric fencing for homes, farms and commercial properties. We handle energisers, batteries, broken strands, voltage faults and general fence maintenance with neat, safety-minded workmanship.", image: "/images/electric-fence.webp", alt: "Electric fence installation on a boundary wall", brands: "Nemtek, Stafix, Stinger and compatible systems" },
  { number: "04", title: "Garage doors", short: "Repairs, automation and new garage door installations.", copy: "We work on sectional, roll-up, tip-up and roller shutter doors. Services include spring tensioning, track alignment, roller and hinge replacement, lubrication, motor repairs and new automation.", image: "/images/garage-door.webp", alt: "Garage door being repaired", brands: "Residential and commercial doors and motors" },
  { number: "05", title: "CCTV systems", short: "Cameras that keep your property visible from wherever you are.", copy: "We install and repair analogue, network and Wi-Fi camera systems for homes and businesses, including recording equipment and remote viewing on your phone.", image: "/images/cctv.webp", alt: "Home security camera installation", brands: "Analogue, IP, Wi-Fi and remote-viewing systems" },
  { number: "06", title: "Alarm systems", short: "Wired and wireless protection for homes and businesses.", copy: "From new alarm installations to fault finding and repairs, we help keep your system dependable. We work with leading wired and wireless platforms and can advise on the right setup for your property.", image: "/images/cctv.webp", alt: "Home alarm and security system", brands: "Paradox, Ajax, IDS, DSC, Texecom and more" },
];

export const plans = [
  { name: "Gate & motor", price: "R250", items: ["Anytime gate and motor repairs", "Annual standard battery replacement", "Annual gate wheel replacement", "Remote programming and motor resets"] },
  { name: "Garage door", price: "R350", featured: true, items: ["Basic service every 3 months", "Major service every 24 months", "Anytime door and motor repairs", "Lubrication, cleaning and spring tensioning"] },
  { name: "Electric fence", price: "R250", items: ["Basic service every 3 months", "Wire tension and voltage checks", "Annual standard energiser battery", "Anytime major servicing and repairs"] },
];

export const areas = ["Pretoria East", "Centurion", "Montana", "Pretoria North", "Garsfontein", "Moreleta Park", "Faerie Glen", "Surrounding areas"];
