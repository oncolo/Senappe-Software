'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';

export default function Header() {
  const [theme, setTheme] = useState<'dark' | 'light'>('dark');
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const saved = localStorage.getItem('senappe-theme') as 'dark' | 'light' | null;
    if (saved) {
      setTheme(saved);
      document.body.setAttribute('data-theme', saved);
    }
  }, []);

  const toggleTheme = () => {
    const next = theme === 'dark' ? 'light' : 'dark';
    setTheme(next);
    document.body.setAttribute('data-theme', next);
    localStorage.setItem('senappe-theme', next);
  };

  const toggleMenu = () => setMenuOpen((v) => !v);

  const closeMenu = () => setMenuOpen(false);

  const handleAnchorClick = (e: React.MouseEvent<HTMLAnchorElement>, targetId: string) => {
    closeMenu();
    if (window.location.pathname === '/') {
      e.preventDefault();
      const element = document.getElementById(targetId);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
        window.history.pushState(null, '', `/#${targetId}`);
      }
    }
  };

  return (
    <header className="site-header">
      <div className="container header-inner">
        <Link href="#" className="brand">
          <img src="https://senappe.com/senappe.svg" alt="Senappe Software" className="brand-logo" />
          <span>Senappe Software</span>
        </Link>

        <nav className={`main-nav${menuOpen ? ' open' : ''}`} id="mainNav">
          <div className="nav-group">
            <button className="nav-trigger" aria-haspopup="true">
              Services{' '}
              <svg className="chev" viewBox="0 0 12 12" width="10" height="10">
                <path d="M2.5 4.5L6 8l3.5-3.5" stroke="currentColor" fill="none" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </button>
            <div className="nav-dropdown dropdown-wide">
              <div className="dropdown-grid">
                <Link href="/#solutions" onClick={closeMenu} className="dropdown-item">
                  <strong>Healthcare Systems</strong>
                  <span>Hospital management, EMR/EHR, telemedicine &amp; lab systems</span>
                </Link>
                <Link href="/#solutions" onClick={closeMenu} className="dropdown-item">
                  <strong>Property &amp; Rental</strong>
                  <span>Property listing, rental marketplace &amp; landlord portals</span>
                </Link>
                <Link href="/#solutions" onClick={closeMenu} className="dropdown-item">
                  <strong>Enterprise Solutions</strong>
                  <span>ERP, CRM, HR management &amp; workflow automation</span>
                </Link>
                <Link href="/#solutions" onClick={closeMenu} className="dropdown-item">
                  <strong>AI-Powered Solutions</strong>
                  <span>Intelligent assistants, predictive analytics &amp; clinical decision support</span>
                </Link>
                <Link href="/#solutions" onClick={closeMenu} className="dropdown-item" style={{ gridColumn: 'span 2' }}>
                  <strong>Blockchain &amp; Identity</strong>
                  <span>Digital verification, audit trails &amp; secure data sharing</span>
                </Link>
              </div>
            </div>
          </div>
          <div className="nav-group">
            <button className="nav-trigger" aria-haspopup="true">
              Company{' '}
              <svg className="chev" viewBox="0 0 12 12" width="10" height="10">
                <path d="M2.5 4.5L6 8l3.5-3.5" stroke="currentColor" fill="none" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </button>
            <div className="nav-dropdown dropdown-wide">
              <div className="dropdown-grid">
                <Link href="/#about" onClick={closeMenu} className="dropdown-item">
                  <strong>About Us</strong>
                  <span>Learn about our mission and values</span>
                </Link>
                <Link href="/#about" onClick={closeMenu} className="dropdown-item">
                  <strong>Our Team</strong>
                  <span>Meet the experts behind our success</span>
                </Link>
                <Link href="/#about" onClick={closeMenu} className="dropdown-item">
                  <strong>Careers</strong>
                  <span>Join our team of innovators</span>
                </Link>
                <Link href="/#about" onClick={closeMenu} className="dropdown-item">
                  <strong>Blog</strong>
                  <span>Latest insights and industry trends</span>
                </Link>
              </div>
            </div>
          </div>
          <Link href="/#projects" className="nav-link" onClick={closeMenu}>Projects</Link>
          <Link href="/#pricing" className="nav-link" onClick={closeMenu}>Pricing</Link>
        </nav>

        <div className="header-actions">
          <button className="theme-toggle" onClick={toggleTheme} aria-label="Toggle theme" title="Toggle theme">
            <svg className="icon-sun" viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" strokeWidth="1.8">
              <circle cx="12" cy="12" r="4" />
              <path d="M12 2v2M12 20v2M4.2 4.2l1.4 1.4M18.4 18.4l1.4 1.4M2 12h2M20 12h2M4.2 19.8l1.4-1.4M18.4 5.6l1.4-1.4" strokeLinecap="round" />
            </svg>
            <svg className="icon-moon" viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" strokeWidth="1.8">
              <path d="M21 12.79A9 9 0 1111.21 3 7 7 0 0021 12.79z" />
            </svg>
          </button>
          <Link href="/login" className="btn btn-primary" onClick={closeMenu}>
            <svg viewBox="0 0 24 24" width="14" height="14" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" style={{ display: 'inline-block', verticalAlign: 'middle', marginRight: '4px' }}>
              <line x1="5" y1="12" x2="19" y2="12" />
              <polyline points="12 5 19 12 12 19" />
            </svg>
            <span>Join Now</span>
          </Link>
          <Link href="/#contact" className="btn btn-primary">Get in Touch</Link>
          <button className="menu-toggle" id="menuToggle" aria-label="Toggle navigation menu" onClick={toggleMenu}>
            <span /><span /><span />
          </button>
        </div>
      </div>
    </header>
  );
}
