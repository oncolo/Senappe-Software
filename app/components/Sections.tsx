'use client';

import Link from 'next/link';

const projects = [
  {
    img: 'https://senappe.com/ai-powered-analytics.jpg',
    title: 'Hospital Management System',
    desc: 'End-to-end hospital operations platform covering patient registration, ward management, billing, and clinical workflows.',
    tags: ['Healthcare', 'EMR', 'AI', 'Cloud'],
    featured: true,
  },
  {
    img: 'https://senappe.com/custom-saas-development.jpg',
    title: 'Telemedicine Platform',
    desc: 'Secure video consultation, e-prescription, and remote patient monitoring platform for clinics and insurance providers.',
    tags: ['Telemedicine', 'IoT', 'Healthcare', 'SaaS'],
    featured: true,
  },
  {
    img: 'https://senappe.com/saas-integration-strategies.jpg',
    title: 'Rental & Property Management',
    desc: 'Full-stack property listing, tenant management, booking, and real estate analytics platform.',
    tags: ['PropTech', 'Analytics', 'SaaS', 'Dashboard'],
  },
  {
    img: 'https://senappe.com/ai-agents-in-enterprise-software.jpg',
    title: 'Enterprise ERP & CRM Suite',
    desc: 'Integrated ERP, CRM, and HR management system with AI-driven workflow automation for large organizations.',
    tags: ['ERP', 'CRM', 'AI', 'Enterprise'],
  },
];

export function Projects() {
  return (
    <section className="projects">
      <div className="container">
        <div className="section-head">
          <h2>Featured Solutions</h2>
          <p>
            Explore our flagship platforms built for hospitals, property managers, enterprises, and
            governments across Ethiopia and global markets.
          </p>
        </div>

        <div className="project-grid">
          {projects.map((p) => (
            <article className="project-card" key={p.title}>
              <div className="project-img">
                <img src={p.img} alt={p.title} />
                {p.featured && <span className="badge-featured">Featured</span>}
              </div>
              <div className="project-body">
                <h3>{p.title}</h3>
                <p>{p.desc}</p>
                <div className="tag-row">
                  {p.tags.map((t) => <span className="tag" key={t}>{t}</span>)}
                </div>
                <div className="project-links">
                  <Link href="#">Live Demo</Link>
                  <Link href="#">Code</Link>
                </div>
              </div>
            </article>
          ))}
        </div>

        <div className="center-cta">
          <Link href="#" className="btn btn-outline">View All Projects</Link>
        </div>
      </div>
    </section>
  );
}

export function QuoteFeature() {
  return (
    <section className="quote-feature">
      <div className="container quote-inner">
        <blockquote>
          &ldquo;Senappe Software&apos;s hospital management system transformed how we operate. Patient
          records, billing, and lab results are now unified in one place — our staff efficiency
          improved by over 40%.&rdquo;
        </blockquote>
        <div className="quote-person">
          <img src="https://senappe.com/professional-headshot-of-female-tech-cto.jpg" alt="Dr. Mekdes Alemu" />
          <div>
            <strong>Dr. Mekdes Alemu</strong>
            <span>Chief Medical Officer, Addis Ababa General Hospital</span>
          </div>
        </div>
      </div>
    </section>
  );
}

const testimonials = [
  { quote: 'Senappe\'s EMR system completely changed how our physicians document patient encounters. The AI-assisted clinical notes save each doctor over an hour daily, and the interoperability with our lab and pharmacy is seamless.', name: 'Dr. Tigist Bekele', org: 'St. Paul\'s Hospital', img: 'https://senappe.com/professional-headshot-of-female-tech-cto.jpg' },
  { quote: 'The property management platform streamlined our entire rental portfolio. Tenant onboarding, rent collection, and maintenance requests are all automated now.', name: 'Yonas Tesfaye', org: 'Addis Real Estate Group', img: 'https://senappe.com/tech-ceo-headshot.png' },
  { quote: 'Their blockchain-based identity verification cut our insurance claim processing time from weeks to hours. Fraud incidents dropped significantly.', name: 'Hiwot Girma', org: 'Ethiopian Health Insurance Agency', img: 'https://senappe.com/professional-headshot-of-female-tech-cto.jpg' },
  { quote: 'We deployed the ERP suite across 12 departments in under 3 months. The workflow automation alone saved us hundreds of manual hours per month.', name: 'Dawit Mengistu', org: 'Ethio Telecom', img: 'https://senappe.com/tech-ceo-headshot.png' },
  { quote: 'The telemedicine platform let us extend care to rural patients who previously had no access to specialists. It\'s been transformative for our mission.', name: 'Dr. Selam Haile', org: 'Mekelle University Hospital', img: 'https://senappe.com/professional-headshot-of-female-tech-cto.jpg' },
  { quote: 'Senappe\'s AI analytics dashboard gives our management real-time visibility into occupancy, revenue, and maintenance costs across all our properties.', name: 'Biruk Tadesse', org: 'Capital Property Management', img: 'https://senappe.com/tech-ceo-headshot.png' },
];

export function Testimonials() {
  return (
    <section className="testimonials" id="testimonials">
      <div className="container">
        <div className="section-head">
          <h2>Trusted by organizations that matter</h2>
          <p>
            Hear how hospitals, property managers, and enterprises across Ethiopia
            <br />are transforming their operations with Senappe Software
          </p>
        </div>
        <div className="testimonial-grid">
          {testimonials.map((t) => (
            <article className="testimonial-card" key={t.name}>
              <p>&ldquo;{t.quote}&rdquo;</p>
              <div className="testimonial-person">
                <img src={t.img} alt={t.name} />
                <div>
                  <strong>{t.name}</strong>
                  <span>{t.org}</span>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export function CTA() {
  return (
    <section className="cta" id="contact">
      <div className="container">
        <div className="cta-header">
          <span className="eyebrow-pill">Contact Us</span>
          <h2>Let&apos;s Build Something <span className="text-grad">That Matters</span></h2>
          <p className="cta-sub">
            Ready to digitize your hospital, automate your property operations, or transform
            your enterprise? Get in touch with our team of experts.
          </p>
        </div>

        <div className="contact-grid">
          {/* Left Column: Send Message Form */}
          <div className="contact-card">
            <h3>Send Us a Message</h3>
            <p className="card-sub">Fill out the form below and we&apos;ll get back to you as soon as possible.</p>

            <form className="contact-form" onSubmit={(e) => e.preventDefault()}>
              <div className="form-row">
                <div className="form-group">
                  <label htmlFor="firstName">First Name</label>
                  <input type="text" id="firstName" placeholder="John" required />
                </div>
                <div className="form-group">
                  <label htmlFor="lastName">Last Name</label>
                  <input type="text" id="lastName" placeholder="Doe" required />
                </div>
              </div>

              <div className="form-group">
                <label htmlFor="email">Email</label>
                <input type="email" id="email" placeholder="john@example.com" required />
              </div>

              <div className="form-group">
                <label htmlFor="company">Company</label>
                <input type="text" id="company" placeholder="Your Company Name" />
              </div>

              <div className="form-group">
                <label htmlFor="service">Service Interest</label>
                <select id="service" defaultValue="">
                  <option value="" disabled>Select a service</option>
                  <option value="healthcare">Healthcare Systems</option>
                  <option value="property">Property &amp; Rental</option>
                  <option value="enterprise">Enterprise Solutions</option>
                  <option value="ai">AI-Powered Solutions</option>
                  <option value="blockchain">Blockchain &amp; Identity</option>
                </select>
              </div>

              <div className="form-group">
                <label htmlFor="budget">Project Budget</label>
                <select id="budget" defaultValue="">
                  <option value="" disabled>Select budget range</option>
                  <option value="under-10k">Under $10,000</option>
                  <option value="10k-50k">$10,000 - $50,000</option>
                  <option value="50k-100k">$50,000 - $100,000</option>
                  <option value="over-100k">$100,000+</option>
                </select>
              </div>

              <div className="form-group">
                <label htmlFor="message">Message</label>
                <textarea id="message" rows={4} placeholder="Tell us about your project and requirements..."></textarea>
              </div>

              <button type="submit" className="btn btn-primary btn-block btn-lg">
                <span>Send Message</span>
                <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" style={{ marginLeft: '4px' }}>
                  <line x1="22" y1="2" x2="11" y2="13" />
                  <polygon points="22 2 15 22 11 13 2 9 22 2" />
                </svg>
              </button>
            </form>
          </div>

          {/* Right Column: Contact Info Cards */}
          <div className="contact-info">
            <h3>Get in Touch</h3>
            <p className="info-sub">
              We&apos;re here to help you navigate the complexities of modern technology
              and find the perfect solution for your business needs.
            </p>

            <div className="info-list">
              <div className="info-item-card">
                <div className="info-icon">
                  <svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                    <polyline points="22,6 12,13 2,6" />
                  </svg>
                </div>
                <div>
                  <strong>Email Us</strong>
                  <a href="mailto:hello@senappe.com" className="info-link">hello@senappe.com</a>
                  <span className="info-desc">Send us an email and we&apos;ll respond within 24 hours.</span>
                </div>
              </div>

              <div className="info-item-card">
                <div className="info-icon">
                  <svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
                  </svg>
                </div>
                <div>
                  <strong>Call Us</strong>
                  <a href="tel:+251933353793" className="info-link">+251 (0) 933 353 793</a>
                  <span className="info-desc">Speak directly with our team during business hours.</span>
                </div>
              </div>

              <div className="info-item-card">
                <div className="info-icon">
                  <svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
                    <circle cx="12" cy="10" r="3" />
                  </svg>
                </div>
                <div>
                  <strong>Visit Us</strong>
                  <span className="info-val">Addis Ababa, Ethiopia</span>
                  <span className="info-desc">Headquartered in Addis Ababa, serving global markets.</span>
                </div>
              </div>

              <div className="info-item-card">
                <div className="info-icon">
                  <svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                    <circle cx="12" cy="12" r="10" />
                    <polyline points="12 6 12 12 16 14" />
                  </svg>
                </div>
                <div>
                  <strong>Business Hours</strong>
                  <span className="info-val">Mon-Fri 9AM-6PM EAT</span>
                  <span className="info-desc">We&apos;re here to help during standard business hours.</span>
                </div>
              </div>
            </div>

            <div className="guarantee-card">
              <h4>Quick Response Guarantee</h4>
              <p>
                We understand that time is crucial in business. That&apos;s why we guarantee
                a response to all inquiries within 24 hours, and often much sooner.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export function Footer() {
  return (
    <footer className="site-footer">
      <div className="container footer-inner">
        <div className="footer-brand">
          <Link href="#" className="brand">
            <img src="https://senappe.com/senappe.svg" alt="Senappe Software" className="brand-logo" />
            <span>Senappe Software</span>
          </Link>
          <p>
            Senappe Software builds AI-powered, blockchain-secured enterprise platforms for
            healthcare, property management, and digital transformation — headquartered in Ethiopia,
            serving global markets.
          </p>
          <div className="social-row">
            <a href="https://twitter.com/senape_software" aria-label="Twitter">𝕏</a>
            <a href="https://github.com/senape-software" aria-label="GitHub">GH</a>
            <a href="https://linkedin.com/company/senape-software" aria-label="LinkedIn">in</a>
            <a href="https://instagram.com/senape_software" aria-label="Instagram">IG</a>
            <a href="https://youtube.com/@senape-software" aria-label="YouTube">YT</a>
            <a href="https://facebook.com/senape.software" aria-label="Facebook">FB</a>
          </div>
        </div>

        <div className="footer-col">
          <h4>Solutions</h4>
          <Link href="#">Healthcare Systems</Link>
          <Link href="#">Property &amp; Rental</Link>
          <Link href="#">Enterprise Solutions</Link>
          <Link href="#">AI-Powered Solutions</Link>
          <Link href="#">Blockchain &amp; Identity</Link>
        </div>

        <div className="footer-col">
          <h4>Company</h4>
          <Link href="#">About Us</Link>
          <Link href="#">Our Team</Link>
          <Link href="#">Careers</Link>
          <Link href="#">Blog</Link>
          <Link href="#contact">Contact</Link>
        </div>

        <div className="footer-col">
          <h4>Resources</h4>
          <Link href="#">Documentation</Link>
          <Link href="#">API Reference</Link>
          <Link href="#">Support</Link>
          <Link href="#">Privacy Policy</Link>
          <Link href="#">Terms of Service</Link>
        </div>
      </div>

      <div className="container footer-bottom">
        <span>© 2026 Senappe Software. All rights reserved.</span>
        <div className="footer-bottom-links">
          <Link href="#">Privacy</Link>
          <Link href="#">Terms</Link>
          <Link href="#">Cookies</Link>
        </div>
      </div>
    </footer>
  );
}
