import Link from 'next/link';

export default function Hero() {
  return (
    <section className="hero">
      <div className="container">
        <div className="hero-card">
          <div className="hero-grid-bg" aria-hidden="true" />
          <div className="hero-card-glow" aria-hidden="true" />

          {/* Glowing tech squares decoration */}
          <div className="grid-square sq-1" aria-hidden="true" />
          <div className="grid-square sq-2" aria-hidden="true" />
          <div className="grid-square sq-3" aria-hidden="true" />
          <div className="grid-square sq-4" aria-hidden="true" />

          <div className="hero-inner">
            <Link href="/#about" className="eyebrow-pill">
              <span className="pulse-dot" />
              Healthcare &middot; PropTech &middot; Enterprise AI
            </Link>
            <h1>
              Enterprise<br className="br-desktop" />
              Software Built<br className="br-desktop" />
              for <span className="text-grad">Healthcare,</span><br className="br-desktop" />
              <span className="text-grad">Property &amp; Beyond</span>
            </h1>
            <p className="hero-sub">
              Senappe Software delivers AI-powered, blockchain-secured
              enterprise platforms — from hospital management systems
              and EMR solutions to property management and custom
              SaaS — built for organizations that demand reliability
            </p>
            <div className="hero-ctas">
              <Link href="/#contact" className="btn btn-primary btn-lg">Request a Demo</Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
