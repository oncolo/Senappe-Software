'use client';

import { useState } from 'react';
import Link from 'next/link';

type Billing = 'annually' | 'monthly';

const plans = [
  {
    name: 'Starter',
    desc: 'For clinics, small property firms, and startups.',
    annually: 399,
    monthly: 499,
    oldPrice: 499,
    cta: 'Get Started',
    ctaClass: 'btn-outline',
    features: [
      'Up to 3 modules (e.g. EMR, Billing, Scheduling)',
      'Up to 25 users',
      'Cloud hosting included',
      'Standard integrations (lab, pharmacy)',
      'Email & chat support',
    ],
  },
  {
    name: 'Professional',
    desc: 'For hospitals, property companies, and mid-size enterprises.',
    annually: 1199,
    monthly: 1499,
    oldPrice: 1499,
    cta: 'Request Demo',
    ctaClass: 'btn-primary',
    popular: true,
    features: [
      'Everything in Starter +',
      'Unlimited modules',
      'Up to 200 users',
      'Advanced AI analytics & reporting',
      'Telemedicine & patient portal',
      'Blockchain audit trails',
      'Priority support & SLA',
      'Custom branding',
    ],
  },
  {
    name: 'Enterprise',
    desc: 'For governments, large hospital networks & enterprises.',
    custom: true,
    cta: 'Talk to Sales',
    ctaClass: 'btn-outline',
    features: [
      'Everything in Starter +',
      'Dedicated infrastructure & on-premises option',
      'Unlimited users',
      'Full AI & ML suite',
      'Custom integrations & APIs',
      'Dedicated account manager',
    ],
  },
];

export default function Pricing() {
  const [billing, setBilling] = useState<Billing>('annually');

  return (
    <section className="pricing" id="pricing">
      <div className="container">
        <div className="section-head">
          <h2>Transparent pricing for every organization</h2>
          <p>
            Choose a plan that fits your organization — from growing clinics and property firms
            <br />to large hospital networks and government institutions.
          </p>
        </div>

        <div className="billing-toggle">
          <button
            className={`toggle-opt${billing === 'annually' ? ' active' : ''}`}
            onClick={() => setBilling('annually')}
          >
            Annually
          </button>
          <button
            className={`toggle-opt${billing === 'monthly' ? ' active' : ''}`}
            onClick={() => setBilling('monthly')}
          >
            Monthly
          </button>
        </div>

        <div className="pricing-grid">
          {plans.map((plan) => (
            <div className={`price-card${plan.popular ? ' popular' : ''}`} key={plan.name}>
              {plan.popular && <span className="popular-badge">Popular</span>}
              <h3>{plan.name}</h3>
              <p className="price-desc">{plan.desc}</p>
              <div className="price-amount">
                {plan.oldPrice && <span className="price-old">${plan.oldPrice.toLocaleString()}</span>}
                <span className="price-new">
                  {plan.custom ? 'Custom' : `$${(billing === 'annually' ? plan.annually! : plan.monthly!).toLocaleString()}`}
                </span>
                <span className="price-period">/month</span>
              </div>
              <Link href="#contact" className={`btn ${plan.ctaClass} btn-block`}>
                {plan.cta}
              </Link>
              <ul className="price-features">
                {plan.features.map((f) => (
                  <li key={f}>{f}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
