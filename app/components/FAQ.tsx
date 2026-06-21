'use client';

import { useState } from 'react';

const faqs = [
  {
    q: 'What industries does Senappe Software serve?',
    a: 'Senappe Software serves healthcare (hospitals, clinics, diagnostic centers, insurance companies), property & real estate (landlords, property managers, rental marketplaces), government organizations, universities, and enterprises across Ethiopia and global markets.',
  },
  {
    q: 'What is included in the Healthcare Information System?',
    a: 'Our Healthcare platform covers Hospital Management, Electronic Medical Records (EMR/EHR), Telemedicine, Laboratory Information Systems, Pharmacy Management, Radiology & Imaging, Health Insurance platforms, Patient Portals, and AI-powered Healthcare Analytics — all integrated in one unified system.',
  },
  {
    q: 'Can your systems be deployed on-premises?',
    a: 'Yes. All our platforms support both cloud and on-premises deployment. Enterprise and government clients can opt for fully on-premises infrastructure with dedicated support, ensuring data sovereignty and compliance with local regulations.',
  },
  {
    q: 'How does Senappe Software use AI in its products?',
    a: 'AI is embedded across our product suite — from clinical decision support and predictive analytics in healthcare, to intelligent recommendation engines in property platforms, to document processing and workflow automation in enterprise systems. We use machine learning models trained on domain-specific data.',
  },
  {
    q: 'What blockchain capabilities do you offer?',
    a: 'We provide blockchain-based identity management, digital verification, tamper-proof audit trails, smart contract systems, and secure data sharing. These are especially valuable for health records integrity, insurance claims, and government digital services.',
  },
  {
    q: 'How long does implementation take?',
    a: 'Implementation timelines vary by scope. A standard clinic deployment can go live in 4–8 weeks. Full hospital or enterprise rollouts typically take 3–6 months, including data migration, staff training, and integration with existing systems. We provide dedicated project managers throughout.',
  },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggle = (i: number) => setOpenIndex(openIndex === i ? null : i);

  return (
    <section className="faq" id="faq">
      <div className="container faq-inner">
        <div className="section-head">
          <h2>Frequently Asked Questions</h2>
          <p>
            Everything you need to know about Senappe Software and how our platforms can transform
            your organization
          </p>
        </div>

        <div className="faq-list">
          {faqs.map((item, i) => (
            <div className={`faq-item${openIndex === i ? ' open' : ''}`} key={i}>
              <button className="faq-q" onClick={() => toggle(i)}>
                {item.q}
                <span className="faq-icon">+</span>
              </button>
              <div
                className="faq-a"
                style={{ maxHeight: openIndex === i ? 400 : 0 }}
              >
                <p>{item.a}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
