function StackNovaWebsite() {
  const services = [
    'Web Development',
    'Cloud Solutions',
    'Mobile Apps',
    'IT Consulting',
    'AI Integration',
    'Cybersecurity',
  ];

  const team = [
    { name: 'Mustapha Adamu Atmos', role: 'Build and manage all technical products and infrastructure.', description: 'A Chief Technology Officer (CTO) is responsible for managing a company technology systems, software development, and digital innovation to support business growth.' },
    { name: 'Aliyu Rabiu Sulaiman', role: 'Ensure products are user-friendly and drive company growth.', description: 'The Frontend, Growth & Quality Lead is responsible for building responsive user interfaces, improving user engagement, and maintaining high software quality standards to deliver an efficient and reliable digital experience.' },
    { name: 'Kabir Abubakar Kirna', role: 'Lead the company, drive growth, and oversee business strategy.', description: 'The Chief Executive Officer (CEO) leads the organization’s overall vision, strategy, and operations, ensuring business growth, innovation, and long-term success.' },
    { name: 'Khalil Hussain', role: 'Build the StackNova brand and maintain a strong online presence.', description: 'The Brand, Content & Community Lead manages brand identity, creates engaging content, and builds strong user communities to drive awareness, engagement, and loyalty across digital platforms.' },
  ];

  const testimonials = [
    'StackNova transformed our infrastructure and improved efficiency dramatically.',
    'Reliable, scalable, and highly professional team.',
    'Their AI automation reduced manual work across departments.',
  ];

  const blog = [
    'How AI Is Reshaping Modern Enterprises',
    'Top Cloud Security Practices in 2026',
    'Why Scalable Software Matters for Growth',
  ];

  return (
    <div className="min-h-screen bg-slate-950 text-white font-sans">
      <nav className="sticky top-0 z-50 backdrop-blur-xl bg-slate-950/70 border-b border-slate-800 px-6 py-4 md:px-16">
        <div className="max-w-6xl mx-auto flex justify-between items-center">
          <h1 className="text-2xl font-bold text-cyan-400">StackNova</h1>
          <div className="hidden md:flex gap-8 text-slate-300">
            <a href="#about">About</a>
            <a href="#services">Services</a>
            <a href="#team">Team</a>
            <a href="#blog">Blog</a>
            <a href="#contact">Contact</a>
          </div>
        </div>
      </nav>

      <section className="relative overflow-hidden px-6 py-24 md:px-16">
        <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/20 via-blue-600/10 to-transparent" />
        <div className="absolute inset-0 opacity-20 bg-[radial-gradient(circle_at_center,_rgba(255,255,255,0.15),transparent_35%)]" />
        <div className="relative mx-auto max-w-6xl text-center">
          <h1 className="text-5xl md:text-7xl font-bold">Building Smarter Digital Solutions</h1>
          <p className="mt-6 text-slate-300 text-lg max-w-3xl mx-auto">
            StackNova helps businesses scale through software engineering, AI automation,
            cybersecurity, and cloud-native solutions.
          </p>
          <button className="mt-8 px-8 py-3 rounded-2xl bg-cyan-500 text-black font-semibold shadow-xl">
            Get Started
          </button>
        </div>
      </section>

      <section id="about" className="px-6 py-20 md:px-16">
        <div className="max-w-5xl mx-auto text-center">
          <h2 className="text-4xl font-bold">About StackNova</h2>
          <p className="mt-6 text-slate-300 leading-8">
          StackNova is a premier IT company, dedicated to transforming ambitious business concepts into scalable, enterprise-grade digital realities. Led by Kabir Abubakar Kirna (CEO) and Mustapha Adamu Atmos (CTO), along with Aliyu Rabiu Sulaiman and Khalil Hussain, the firm delivers custom web development, cloud solutions, and AI integration. Operating as a dedicated engineering partner, StackNova combines 24/7 technical monitoring with proactive cybersecurity to ensure your ideas are user-friendly, highly secure, and built to scale efficiently.</p>
        </div>
      </section>

      <section id="services" className="px-6 py-20 md:px-16">
  <div className="max-w-6xl mx-auto">
    <h2 className="text-4xl font-bold mb-12">Our Services</h2>
    <div className="grid md:grid-cols-3 gap-6">
      {services.map((service) => (
        <div key={service} className="rounded-3xl bg-slate-900 border border-slate-800 p-8 shadow-xl transition-transform duration-300 hover:-translate-y-2">
          <h3 className="text-xl font-semibold">{service}</h3>
          <p className="mt-3 text-slate-400">Secure, scalable solutions engineered for growth.</p>
          
          {/* Updated Button to Scroll to Contact Form */}
          <a 
            href="#contact" 
            className="mt-6 inline-block px-6 py-2 rounded-xl bg-cyan-500/10 text-cyan-400 border border-cyan-500/20 font-medium hover:bg-cyan-500 hover:text-black transition-colors"
          >
            Inquire Now
          </a>
        </div>
      ))}
    </div>
  </div>
</section>

      <section id="team" className="px-6 py-20 md:px-16">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold mb-12">Meet Our Team</h2>
          <div className="grid md:grid-cols-4 gap-6">
            {team.map((member, index) => (
              <div key={member.name} className="rounded-3xl border border-slate-800 p-8 text-center bg-slate-900">
                <img src={`${index + 1}.jpeg`} alt={member.name} className="w-20 h-20 mx-auto rounded-full object-cover mb-4" />
                <h3 className="font-semibold">{member.name}</h3>
                <p className="mt-2 text-sm text-slate-300">{member.description}</p>
                <p className="mt-3 text-slate-400">{member.role}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="blog" className="px-6 py-20 md:px-16">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold mb-12">Latest Insights</h2>
          <div className="grid md:grid-cols-3 gap-6">
            {blog.map((post) => (
              <div key={post} className="rounded-3xl border border-slate-800 p-8 bg-slate-900">
                <h3 className="text-xl font-semibold">{post}</h3>
                <p className="mt-3 text-slate-400">Read insights on innovation, AI, cloud, and enterprise growth.</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="contact" className="px-6 py-24 md:px-16">
        <div className="max-w-4xl mx-auto rounded-[2rem] bg-gradient-to-r from-cyan-500 to-blue-600 p-12 text-black shadow-2xl">
          <h2 className="text-4xl font-bold text-center">Contact StackNova</h2>
          <div className="mt-8 grid gap-4">
            <input className="p-4 rounded-xl w-full" placeholder="Full Name" />
            <input className="p-4 rounded-xl w-full" placeholder="Email Address" />
            <textarea className="p-4 rounded-xl min-h-[140px] w-full" placeholder="Your Message" />
            <button className="px-8 py-3 rounded-2xl bg-black text-white font-semibold">Send Message</button>
          </div>
        </div>
      </section>

      <footer className="px-6 py-10 md:px-16 border-t border-slate-800 text-slate-400">
        {/* Changed grid layout to md:grid-cols-4 to host the new column cleanly */}
        <div className="max-w-6xl mx-auto grid gap-8 md:grid-cols-4 md:items-start">
          
          <div className="text-center md:text-left">
            <h3 className="font-semibold text-slate-200">Company</h3>
            <div className="mt-3 flex flex-col gap-2 text-slate-300">
              <a href="#terms" className="hover:text-white">Terms of Use</a>
              <a href="#privacy" className="hover:text-white">Privacy Notice</a>
            </div>
          </div>
          <div className="text-center md:text-left">
            <h3 className="font-semibold text-slate-200">Contact</h3>
            <div className="mt-3 flex flex-col gap-2 text-slate-300">
              <a href="mailto:stacknoveng@gmail.com" className="hover:text-white">stacknoveng@gmail.com</a>
              <a href="tel:+2349061605459" className="hover:text-white">+2349061605459</a>
            </div>
          </div>
          {/* New Location Column added below */}
          <div className="text-center md:text-left">
            <h3 className="font-semibold text-slate-200">Location</h3>
            <div className="mt-3 flex flex-col gap-2 text-slate-300">
              <span>Wuye, Jabi, Federal Capital Territory</span>
            </div>
          </div>
          <div className="text-center md:text-left pt-1">
            <div>© 2026 StackNova. All rights reserved.</div>
          </div>
        </div>
      </footer>
    </div>
  );
}

ReactDOM.createRoot(document.getElementById('root')).render(<StackNovaWebsite />);
