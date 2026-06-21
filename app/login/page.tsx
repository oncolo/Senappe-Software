'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';

export default function LoginPage() {
  const [showPassword, setShowPassword] = useState(false);
  const [phone, setPhone] = useState('');
  const [password, setPassword] = useState('');
  const [theme, setTheme] = useState<'dark' | 'light'>('dark');

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

  const togglePassword = () => setShowPassword(!showPassword);

  return (
    <div className="login-page">
      {/* Top Header Logo */}
      <div className="login-header-nav">
        <Link href="/" className="brand">
          <img src="https://senappe.com/senappe.svg" alt="Senappe Software" className="brand-logo" />
          <span>Senappe Software</span>
        </Link>
        <div className="theme-toggle-placeholder">
          <button className="theme-toggle" onClick={toggleTheme} aria-label="Toggle theme" type="button">
            <svg className="icon-sun" viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" strokeWidth="1.8" style={{ display: theme === 'light' ? 'none' : 'block' }}>
              <circle cx="12" cy="12" r="4" />
              <path d="M12 2v2M12 20v2M4.2 4.2l1.4 1.4M18.4 18.4l1.4 1.4M2 12h2M20 12h2M4.2 19.8l1.4-1.4M18.4 5.6l1.4-1.4" strokeLinecap="round" />
            </svg>
            <svg className="icon-moon" viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" strokeWidth="1.8" style={{ display: theme === 'light' ? 'block' : 'none' }}>
              <path d="M21 12.79A9 9 0 1111.21 3 7 7 0 0021 12.79z" />
            </svg>
          </button>
        </div>
      </div>

      {/* Main Login Card */}
      <div className="login-card-container">
        <div className="login-card">
          <h2 className="login-title">Senappe Software Account</h2>

          <div className="login-section">
            <h3 className="signin-heading">Sign in</h3>
            <p className="signin-sub">Sign in with your email and password or a social provider</p>

            {/* Google Sign In Button */}
            <button className="btn-google" type="button">
              <svg viewBox="0 0 24 24" width="18" height="18" className="google-icon">
                <path fill="#ea4335" d="M12 5.04c1.66 0 3.2.57 4.38 1.69l3.27-3.27C17.67 1.49 15.01 0 12 0 7.35 0 3.37 2.67 1.44 6.56l3.86 3C6.26 6.89 8.89 5.04 12 5.04z" />
                <path fill="#4285f4" d="M23.49 12.27c0-.81-.07-1.59-.2-2.34H12v4.61h6.43c-.28 1.44-1.09 2.66-2.31 3.48l3.6 2.79c2.1-1.94 3.77-4.8 3.77-8.54z" />
                <path fill="#fbbc05" d="M5.3 14.44C5.06 13.73 4.93 12.98 4.93 12s.13-1.73.37-2.44L1.44 6.56C.52 8.42 0 10.51 0 12s.52 3.58 1.44 5.44l3.86-3z" />
                <path fill="#34a853" d="M12 24c3.24 0 5.97-1.07 7.96-2.91l-3.6-2.79c-1 .67-2.28 1.07-4.36 1.07-3.11 0-5.74-1.85-6.7-4.52H1.44v3C3.37 21.33 7.35 24 12 24z" />
              </svg>
              <span>Sign in with google</span>
            </button>

            <form className="login-form" onSubmit={(e) => e.preventDefault()}>
              {/* Phone Input */}
              <div className="form-group">
                <div className="label-row">
                  <label htmlFor="phone">Phone number</label>
                  <Link href="#" className="recover-link">Recover Account</Link>
                </div>
                <input
                  type="text"
                  id="phone"
                  placeholder="Enter your Phone number"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  required
                />
              </div>

              {/* Password Input */}
              <div className="form-group">
                <label htmlFor="password">Password</label>
                <div className="password-wrapper">
                  <input
                    type={showPassword ? "text" : "password"}
                    id="password"
                    placeholder="Enter your Password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                  />
                  <button
                    type="button"
                    className="password-toggle-btn"
                    onClick={togglePassword}
                    aria-label={showPassword ? "Hide password" : "Show password"}
                  >
                    {showPassword ? (
                      <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M17.94 17.94A10.07 10.07 0 0 1 12 20c-7 0-11-8-11-8a18.45 18.45 0 0 1 5.06-5.94M9.9 4.24A9.12 9.12 0 0 1 12 4c7 0 11 8 11 8a18.5 18.5 0 0 1-2.16 3.19m-6.72-1.07a3 3 0 1 1-4.24-4.24" />
                        <line x1="1" y1="1" x2="23" y2="23" />
                      </svg>
                    ) : (
                      <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z" />
                        <circle cx="12" cy="12" r="3" />
                      </svg>
                    )}
                  </button>
                </div>
              </div>

              {/* Sign In Button */}
              <button type="submit" className="btn btn-primary btn-block btn-lg" style={{ marginTop: '8px' }}>
                Sign in with password
              </button>
            </form>

            <p className="login-footer-text">
              Don&apos;t have an account? <Link href="#" className="signup-link">Sign up</Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
