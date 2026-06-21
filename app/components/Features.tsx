export default function Features() {
  return (
    <section className="features" id="solutions">
      <div className="container">
        <div className="section-head" style={{ marginBottom: '48px' }}>
          <p style={{ fontSize: '13px', color: 'var(--text-faint)', textTransform: 'uppercase', letterSpacing: '0.06em', marginBottom: '14px', fontWeight: 600 }}>
            Trusted by hospitals, enterprises, and government organizations
          </p>
          <h2 style={{ marginTop: '0' }}>Power Every Vertical with Intelligent Software</h2>
          <p>
            From AI-driven clinical decision support to automated property workflows, Senappe
            Software&apos;s platform adapts to your industry and scales with your organization.
          </p>
        </div>

        <div className="features-grid">
          {/* Card 1 */}
          <div className="feature-card-item">
            <div className="feature-card-header">
              <h3>AI Clinical Decision Support.</h3>
              <p>Real-time diagnostic assistance and treatment recommendations powered by ML.</p>
            </div>
            <div className="feature-card-body">
              <div className="mock-code-editor">
                <div className="editor-content">
                  <span className="code-keyword">toast-row</span> <span className="code-type">(type)</span> {'{'}
                  <br />
                  &nbsp;&nbsp;<span className="code-key">name</span>: <span className="code-string">&quot;success&quot;</span>;
                  <br />
                  &nbsp;&nbsp;<span className="code-key">children</span>: [
                  <br />
                  &nbsp;&nbsp;&nbsp;&nbsp;{'{'}<span className="code-key">type</span>: <span className="code-string">&apos;svg&apos;</span>, <span className="code-key">d</span>: <span className="code-string">&apos;M3.85 7.88...&apos;</span>{'}'},
                  <br />
                  &nbsp;&nbsp;&nbsp;&nbsp;{'{'}<span className="code-key">type</span>: <span className="code-string">&apos;span&apos;</span>, <span className="code-key">text</span>: <span className="code-string">&apos;Diagnostic...&apos;</span>{'}'}
                  <br />
                  &nbsp;&nbsp;];
                  <br />
                  &nbsp;&nbsp;<span className="code-key">className</span>: <span className="code-string">&quot;toast-row-success&quot;</span>;
                  <br />
                  {'}'}
                  <br />
                  <br />
                  <span className="code-keyword">toast-row</span> <span className="code-type">(type)</span> {'{'}
                  <br />
                  &nbsp;&nbsp;<span className="code-comment">// suggested treatment plan generated</span>
                  <br />
                  &nbsp;&nbsp;<span className="code-key">color</span>: <span className="code-var">var(--accent)</span>;
                  <br />
                  {'}'}
                </div>
                <div className="editor-action-btn">
                  <span>Apply changes</span>
                  <svg viewBox="0 0 14 14" width="10" height="10" fill="none" stroke="currentColor" strokeWidth="2.5">
                    <path d="M5.83 2.33l4.67 4.67-4.67 4.67M10.5 7H2.33" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </div>
              </div>
            </div>
          </div>

          {/* Card 2 */}
          <div className="feature-card-item">
            <div className="feature-card-header">
              <h3>Electronic Medical Records</h3>
              <p>Unified EMR/EHR platform with seamless interoperability across care settings.</p>
            </div>
            <div className="feature-card-body">
              <div className="mock-code-editor">
                <div className="editor-content">
                  <span className="code-keyword">button</span> <span className="code-type">(type)</span> {'{'}
                  <br />
                  &nbsp;&nbsp;<span className="code-key">name</span>: <span className="code-string">&quot;button&quot;</span>;
                  <br />
                  &nbsp;&nbsp;<span className="code-key">children</span>: [
                  <br />
                  &nbsp;&nbsp;&nbsp;&nbsp;{'{'}<span className="code-key">type</span>: <span className="code-string">&apos;svg&apos;</span>, <span className="code-key">d</span>: <span className="code-string">&apos;M12 3v12...&apos;</span>{'}'},
                  <br />
                  &nbsp;&nbsp;&nbsp;&nbsp;{'{'}<span className="code-key">type</span>: <span className="code-string">&apos;span&apos;</span>, <span className="code-key">text</span>: <span className="code-string">&apos;download for macOS&apos;</span>{'}'}
                  <br />
                  &nbsp;&nbsp;]
                  <br />
                  {'}'}
                </div>
                <div className="editor-overlay-pill">
                  <svg viewBox="0 0 24 24" width="12" height="12" fill="none" stroke="currentColor" strokeWidth="3" style={{ marginRight: '5px' }}>
                    <path d="M12 3v12m0 0l-4-4m4 4l4-4M5 21h14" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                  <span>d for macOS</span>
                </div>
              </div>
            </div>
          </div>

          {/* Card 3 */}
          <div className="feature-card-item">
            <div className="feature-card-header">
              <h3>One-click system integrations</h3>
              <p>Connect labs, pharmacies, imaging, and insurance systems effortlessly.</p>
            </div>
            <div className="feature-card-body">
              <div className="mock-grid-icons">
                {Array.from({ length: 16 }).map((_, idx) => {
                  return (
                    <div className="grid-cell" key={idx}>
                      {idx === 0 && (
                        <div className="cell-icon">
                          <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2.5">
                            <circle cx="12" cy="12" r="10" />
                            <path d="M8 12h8M12 8v8" />
                          </svg>
                        </div>
                      )}
                      {idx === 6 && (
                        <div className="cell-icon">
                          <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round">
                            <circle cx="12" cy="12" r="4" />
                            <path d="M12 2v2M12 20v2M4.9 4.9l1.4 1.4M17.7 17.7l1.4 1.4M2 12h2M20 12h2M6.3 17.7l-1.4 1.4M19.1 4.9l-1.4 1.4" />
                          </svg>
                        </div>
                      )}
                      {idx === 8 && (
                        <div className="cell-icon">
                          <svg viewBox="0 0 24 24" width="18" height="18" fill="currentColor">
                            <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                          </svg>
                        </div>
                      )}
                      {idx === 11 && (
                        <div className="cell-icon">
                          <span style={{ fontSize: '11px', fontWeight: 800 }}>M</span>
                        </div>
                      )}
                      {idx === 14 && (
                        <div className="cell-icon">
                          <svg viewBox="0 0 24 24" width="18" height="18" fill="currentColor">
                            <path d="M13 10V2L4 14h7v8l9-12h-7z" />
                          </svg>
                        </div>
                      )}
                    </div>
                  );
                })}
              </div>
            </div>
          </div>

          {/* Card 4 */}
          <div className="feature-card-item">
            <div className="feature-card-header">
              <h3>Blockchain identity &amp; verification</h3>
              <p>Tamper-proof audit trails, digital credentials, and secure data sharing.</p>
            </div>
            <div className="feature-card-body">
              <div className="mock-card mock-integrations">
                <div className="integ-search">
                  <svg viewBox="0 0 24 24" width="13" height="13" fill="none" stroke="currentColor" strokeWidth="2" style={{ marginRight: '6px' }}>
                    <circle cx="11" cy="11" r="7" />
                    <path d="M21 21l-4.3-4.3" />
                  </svg>
                  <span>Search for servers</span>
                </div>
                <div className="integ-list">
                  {[
                    { name: 'Figma', installed: true },
                    { name: 'Shadow UI', installed: false },
                    { name: 'Next.js', installed: true },
                    { name: 'Tailwind CSS', installed: false },
                    { name: 'Monorepo', installed: true },
                  ].map((item) => (
                    <div className="integ-item" key={item.name}>
                      <span className={`integ-indicator${item.installed ? ' checked' : ''}`}>
                        {item.installed && (
                          <svg viewBox="0 0 24 24" width="10" height="10" fill="none" stroke="#0a0a0b" strokeWidth="4">
                            <polyline points="20 6 9 17 4 12" />
                          </svg>
                        )}
                      </span>
                      <span>{item.name}</span>
                      {item.installed && <em>Installed</em>}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Card 5 */}
          <div className="feature-card-item">
            <div className="feature-card-header">
              <h3>Parallel AI processing agents</h3>
              <p>Run concurrent analytics, predictions, and automation across your enterprise.</p>
            </div>
            <div className="feature-card-body">
              <div className="mock-tasks">
                {[
                  {
                    icon: (
                      <svg viewBox="0 0 24 24" width="13" height="13" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                        <polyline points="20 6 9 17 4 12" />
                      </svg>
                    ),
                    title: 'Update buttons',
                    meta: '12k tokens · o3 · pointer/update-pain...'
                  },
                  {
                    icon: (
                      <svg viewBox="0 0 24 24" width="13" height="13" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M21.5 2v6h-6M21.34 15.57a10 10 0 11-.57-8.38l5.67-5.67" />
                      </svg>
                    ),
                    title: 'Flexibility issue',
                    meta: '12k tokens · claude-sonnet-4 · pointer/update-pain...'
                  },
                  {
                    icon: (
                      <svg viewBox="0 0 24 24" width="13" height="13" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M12 2L2 12l10 10 10-10L12 2z" />
                      </svg>
                    ),
                    title: 'Plan for seamless hand',
                    meta: '30k tokens · o3 · pointer/update-pain...'
                  },
                ].map((t) => (
                  <div className="task-card-row" key={t.title}>
                    <div className="task-icon">{t.icon}</div>
                    <div style={{ flex: 1 }}>
                      <strong>{t.title}</strong>
                      <small>{t.meta}</small>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Card 6 */}
          <div className="feature-card-item">
            <div className="feature-card-header">
              <h3>Cloud-native deployment</h3>
              <p>Deploy on any cloud or on-premises with zero-downtime rollouts.</p>
            </div>
            <div className="feature-card-body">
              <div className="mock-card mock-terminal">
                <pre className="terminal-log" style={{ maxHeight: '110px' }}>{`[16:37:25.637] Running build in Washington, D.C.
[16:37:25.638] Build machine config: 2 cores, 8 GB
[16:37:25.653] Retrieving deployment files...
[16:37:25.979] Downloading 84 deployment files...
[16:37:29.945] Running "vercel build"
[16:37:39.137] ▲ Next.js 15.2.4
[16:37:41.439] ✓ Compiled successfully`}</pre>
                <div className="terminal-cta">
                  <svg viewBox="0 0 24 24" width="13" height="13" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M4.5 16.5c-1.5 1.26-2 3-2 3s1.74-.5 3-2L18 5.5c1.1-1.1 1-2.9 0-3.9s-2.8-1.1-3.9 0L4.5 16.5zM12 8l4 4" />
                  </svg>
                  <span>Deploy on Vercel</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
