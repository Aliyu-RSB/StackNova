function ProductPage() {
  const [menuOpen, setMenuOpen] = React.useState(false);

  const products = [
    { icon: '☁️', title: 'NovaCloud', description: 'A managed cloud platform for scalable deployments, backup automation, and secure infrastructure monitoring.' },
    { icon: '🤖', title: 'StackAI', description: 'AI-powered workflow automation tools designed to streamline business processes and improve decision-making.' },
    { icon: '🔒', title: 'SecureEdge', description: 'Advanced perimeter security and compliance management for modern cloud-native applications.' },
    { icon: '📊', title: 'InsightHub', description: 'Analytics dashboards and reporting tools that turn operational data into growth insights.' },
  ];

  return (
    <div className="min-h-screen bg-slate-950 text-white font-sans">
      <nav className="sticky top-0 z-50 backdrop-blur-xl bg-slate-950/90 border-b border-slate-800 px-6 py-4 md:px-16">
        <div className="max-w-6xl mx-auto flex items-center justify-between gap-4">
          <a href="index.html" className="flex items-center gap-3 text-cyan-400">
            <img src="/favicon.png" alt="StackNova logo" className="h-10 w-10 rounded-xl border border-slate-700 bg-slate-900" />
            <span className="text-2xl font-bold">StackNova</span>
          </a>
          <div className="flex items-center gap-4">
            <div className="hidden md:flex gap-8 text-slate-300 items-center">
              <a href="index.html">Home</a>
              <a href="about.html">About</a>
              <div className="relative group">
                <button className="inline-flex items-center gap-2 text-slate-300 hover:text-white">
                  I.T Services
                  <span className="text-lg">▾</span>
                </button>
                <div className="absolute left-0 top-full mt-2 hidden w-44 flex-col rounded-3xl border border-slate-800 bg-slate-950 p-3 shadow-xl group-hover:flex">
                  <a href="services.html" className="rounded-2xl px-3 py-2 text-left text-slate-300 hover:bg-slate-900 hover:text-white">Services</a>
                  <a href="product.html" className="rounded-2xl px-3 py-2 text-left text-slate-300 hover:bg-slate-900 hover:text-white">Products</a>
                </div>
              </div>
              <a href="contact.html">Contact</a>
              <a href="team.html">Team</a>
              <a href="blog.html">Blog</a>
            </div>
            <button
              onClick={() => setMenuOpen((open) => !open)}
              className="md:hidden inline-flex h-11 w-11 items-center justify-center rounded-2xl border border-slate-700 bg-slate-900/90 text-slate-300 hover:bg-slate-800 transition"
              aria-label="Toggle navigation"
            >
              <span className="text-2xl">{menuOpen ? '×' : '☰'}</span>
            </button>
          </div>
        </div>
        {menuOpen && (
          <div className="md:hidden mt-4 rounded-3xl border border-slate-800 bg-slate-900/95 p-4 text-center shadow-xl">
            <div className="flex flex-col gap-3 text-slate-200">
              <a href="index.html" onClick={() => setMenuOpen(false)}>Home</a>
              <a href="about.html" onClick={() => setMenuOpen(false)}>About</a>
              <div className="rounded-3xl border border-slate-800 p-3 text-left">
                <div className="font-semibold text-slate-200">I.T Services</div>
                <div className="mt-2 flex flex-col gap-2 pl-3">
                  <a href="services.html" onClick={() => setMenuOpen(false)} className="text-slate-300 hover:text-white">Services</a>
                  <a href="product.html" onClick={() => setMenuOpen(false)} className="text-slate-300 hover:text-white">Products</a>
                </div>
              </div>
              <a href="contact.html" onClick={() => setMenuOpen(false)}>Contact</a>
              <a href="team.html" onClick={() => setMenuOpen(false)}>Team</a>
              <a href="blog.html" onClick={() => setMenuOpen(false)}>Blog</a>
            </div>
          </div>
        )}
      </nav>

      <section className="relative overflow-hidden px-6 py-24 md:px-16">
        <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/20 via-blue-600/10 to-transparent" />
        <div className="absolute inset-0 opacity-20 bg-[radial-gradient(circle_at_center,_rgba(255,255,255,0.15),transparent_35%)]" />
        <div className="relative mx-auto max-w-6xl text-center">
          <h1 className="text-4xl sm:text-5xl md:text-7xl font-bold">StackNova Products</h1>
          <p className="mt-6 text-slate-300 text-base sm:text-lg max-w-3xl mx-auto">
            Explore our flagship products built for cloud-native operations, AI automation, security, and analytics.
          </p>
          <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <a href="index.html" className="px-8 py-3 rounded-2xl border border-white/20 bg-white/5 text-white font-semibold hover:bg-cyan-500/10 transition">
              Back to Home
            </a>
            <a href="index.html#contact" className="px-8 py-3 rounded-2xl bg-cyan-500 text-black font-semibold shadow-xl">
              Contact Us
            </a>
          </div>
        </div>
      </section>

      <section id="products" className="px-6 py-20 md:px-16">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold mb-12">Product Lineup</h2>
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {products.map((product) => (
              <div key={product.title} className="rounded-3xl border border-slate-800 bg-slate-900 p-8 shadow-xl">
                <h3 className="flex items-center gap-3 text-xl font-semibold text-cyan-300">
                  <span aria-hidden="true" className="text-2xl">{product.icon}</span>
                  {product.title}
                </h3>
                <p className="mt-4 text-slate-300 leading-7">{product.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <footer className="px-6 py-10 md:px-16 border-t border-slate-800 text-slate-400">
        <div className="max-w-6xl mx-auto grid gap-8 md:grid-cols-3 md:items-start">
          <div className="text-center md:text-left">
            <h3 className="font-semibold text-slate-200">StackNova</h3>
            <p className="mt-3 text-slate-300">Reliable products for modern tech teams.</p>
          </div>
          <div className="text-center md:text-left">
            <h3 className="font-semibold text-slate-200">Explore</h3>
            <div className="mt-3 flex flex-col gap-2 text-slate-300">
              <a href="index.html" className="hover:text-white">Home</a>
              <a href="index.html#contact" className="hover:text-white">Contact</a>
            </div>
          </div>
          <div className="text-center md:text-left">
            <div>© 2026 StackNova. All rights reserved.</div>
          </div>
        </div>
      </footer>
    </div>
  );
}

ReactDOM.createRoot(document.getElementById('root')).render(<ProductPage />);
