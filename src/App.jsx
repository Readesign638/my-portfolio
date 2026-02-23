import React from 'react';
import { Mail, Phone, ExternalLink, MessageSquare, Download, Code2, Globe, Award } from 'lucide-react';

export default function App() {
  return (
    <div className="min-h-screen bg-[#0f0a07] text-white selection:bg-[#f39200]/30 scroll-smooth">
      
      {/* Glassmorphism Floating Email Button */}
      <a 
        href="#contact-form" 
        className="fixed bottom-8 right-8 z-[100] bg-[#f39200]/70 backdrop-blur-md text-black p-4 rounded-full shadow-[0_8px_32px_rgba(243,146,0,0.3)] border border-white/20 hover:bg-[#f39200] hover:scale-110 transition-all duration-300 active:scale-95 group"
        aria-label="Email Me"
      >
        <Mail size={28} strokeWidth={2.5} />
        <span className="absolute right-16 top-1/2 -translate-y-1/2 bg-black/80 backdrop-blur-md text-[#f39200] text-xs font-black py-2 px-4 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none whitespace-nowrap uppercase tracking-widest border border-[#f39200]/20">
          Send a Message
        </span>
        <span className="absolute inset-0 rounded-full bg-[#f39200] animate-ping opacity-20 group-hover:hidden"></span>
      </a>

      {/* Navigation */}
      <nav className="flex justify-between items-center px-[10%] py-6 fixed w-full top-0 z-50 bg-[#0f0a07]/90 backdrop-blur-xl border-b border-white/5">
        <div className="text-3xl font-black tracking-tighter text-[#f39200]">RealebohaSekhitlane</div>
        <ul className="hidden md:flex gap-10 text-[0.95rem] font-bold uppercase tracking-widest text-zinc-400">
          <li><a href="#home" className="hover:text-[#f39200] transition">Home</a></li>
          <li><a href="#about" className="hover:text-[#f39200] transition">About</a></li>
          <li><a href="#skills-exp" className="hover:text-[#f39200] transition">Skills & Experience</a></li>
        </ul>
        <a href="#contact-form" className="flex items-center gap-2 bg-[#f39200] text-black px-6 py-3 rounded-full font-black text-sm hover:scale-105 transition active:scale-95">
          <MessageSquare size={18} />
          LET'S TALK
        </a>
      </nav>

      {/* Hero Section */}
      <section id="home" className="flex flex-col lg:flex-row items-center min-h-screen px-[10%] pt-[140px] pb-20 gap-16">
        <div className="flex-[1.4]">
          <h1 className="text-7xl md:text-8xl lg:text-9xl font-black leading-[0.9] tracking-tighter mb-8 text-balance">
            Hi, I'm <br /><span className="text-[#f39200]">Realeboha</span> 👋
          </h1>
         <p className="text-2xl md:text-3xl font-bold mb-6 text-zinc-300 italic">
  Developer & SEO Specialist
</p>
<p className="text-xl text-zinc-400 mb-10 leading-relaxed max-w-[650px]">
  I build fast, modern websites that help businesses grow. Currently 
  focusing on high-end web development and search engine performance 
  at{' '}
  <strong className="text-white">Comfort Digital (PTY) LTD</strong>.
</p>
          <div className="flex flex-wrap gap-6">
            <a href="#contact-form" className="flex items-center gap-3 bg-[#f39200] text-black px-10 py-5 rounded-2xl font-black text-lg shadow-[0_20px_40px_rgba(243,146,0,0.2)] hover:-translate-y-1 transition">
              <Mail size={22} />
              Contact Me
            </a>
            <a href="#" className="flex items-center gap-3 border-2 border-zinc-800 px-10 py-5 rounded-2xl font-bold text-lg hover:bg-white/5 transition">
              <Download size={22} />
              Download CV
            </a>
          </div>
        </div>
        <div className="relative w-80 h-80 md:w-[500px] md:h-[500px] bg-[#f39200] overflow-hidden animate-morph shrink-0 shadow-2xl shadow-orange-500/20">
          <img src="images/profile.jpeg" alt="Realeboha" className="w-full h-full object-cover" />
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-32 px-[10%] bg-black/40 border-y border-white/5">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-16 lg:gap-32">
          
          <div className="flex-1 grid grid-cols-2 gap-5 w-full">
            <div className="relative aspect-square overflow-hidden rounded-3xl border border-white/10 group">
                <img src="images/weather_b91120.jfif" className="w-full h-full object-cover group-hover:scale-110 transition duration-700" alt="Weather Project" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/40 to-transparent flex flex-col justify-end p-6">
                  <h4 className="text-[#f39200] font-black text-sm uppercase tracking-widest mb-1">Weather App</h4>
                  <p className="text-[11px] md:text-xs text-zinc-300 leading-snug">Dynamic UI backgrounds and live forecasting tools.</p>
                </div>
            </div>

            <div className="relative aspect-square overflow-hidden rounded-3xl border border-white/10 group">
                <img src="images/code_b91160.jfif" className="w-full h-full object-cover group-hover:scale-110 transition duration-700" alt="Coding Work" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/40 to-transparent flex flex-col justify-end p-6">
                  <h4 className="text-[#f39200] font-black text-sm uppercase tracking-widest mb-1">Architecture</h4>
                  <p className="text-[11px] md:text-xs text-zinc-300 leading-snug">Building clean, scalable frontend structures for mobile.</p>
                </div>
            </div>

            <div className="relative aspect-square overflow-hidden rounded-3xl border border-white/10 group">
                <img src="images/dental.jfif" className="w-full h-full object-cover group-hover:scale-110 transition duration-700" alt="Dental Project" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/40 to-transparent flex flex-col justify-end p-6">
                  <h4 className="text-[#f39200] font-black text-sm uppercase tracking-widest mb-1">Healthcare UI</h4>
                  <p className="text-[11px] md:text-xs text-zinc-300 leading-snug">Appointment management system for clinical practices.</p>
                </div>
            </div>

            <div className="relative aspect-square overflow-hidden rounded-3xl border border-white/10 group">
                <img src="images/OIP.jfif" className="w-full h-full object-cover group-hover:scale-110 transition duration-700" alt="Agency Work" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/40 to-transparent flex flex-col justify-end p-6">
                  <h4 className="text-[#f39200] font-black text-sm uppercase tracking-widest mb-1">Comfort Digital</h4>
                  <p className="text-[11px] md:text-xs text-zinc-300 leading-snug">Premium web solutions and high-level SEO strategies.</p>
                </div>
            </div>
          </div>

          <div className="flex-1 space-y-8">
            <h2 className="text-6xl md:text-7xl font-black tracking-tighter leading-none">
              About <span className="text-[#f39200]">Me</span>
            </h2>
            <p className="text-2xl md:text-3xl text-zinc-200 leading-snug font-medium italic border-l-4 border-[#f39200] pl-6">
              "Bridging the gap between classroom theory and professional results."
            </p>
            <p className="text-xl text-zinc-400 leading-relaxed">
              I am <strong>Realeboha Sekhitlane</strong>, a <strong>Mobile Computing student at Botho University</strong>. Currently applying academic principles to real-world challenges at 
              <a href="https://comfortdigital.co.za/" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1 text-white font-semibold underline decoration-[#f39200]/40 underline-offset-8 hover:text-[#f39200] transition-all ml-1">
                Comfort Digital (PTY) LTD <ExternalLink size={14} />
              </a>.
            </p>
            
            <div className="pt-10 space-y-6 border-t border-white/10 text-xl font-medium">
              <div className="flex items-center gap-4">
                <div className="bg-orange-500/10 p-3 rounded-lg text-[#f39200]"><Phone size={20} /></div>
                <div className="flex gap-4 text-zinc-300">
                  <a href="tel:+26662803236" className="hover:text-[#f39200] transition-all">+266 6280 3236</a>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <div className="bg-orange-500/10 p-3 rounded-lg text-[#f39200]"><Mail size={20} /></div>
                <a href="mailto:realebohasekhitlane51@gmail.com" className="text-zinc-300 hover:text-[#f39200] transition-all break-all underline decoration-white/10 underline-offset-4">
                  realebohasekhitlane51@gmail.com
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Skills & Experience */}
      <section id="skills-exp" className="py-32 px-[10%]">
        <div className="grid lg:grid-cols-[1fr_1.4fr] gap-24">
          <div>
            <div className="flex items-center gap-3 mb-12 border-b-4 border-[#f39200] inline-flex pb-2">
                <Code2 className="text-[#f39200]" />
                <h3 className="text-4xl font-black">Technical Stack</h3>
            </div>
            <div className="space-y-10">
              {[
                { name: "WordPress / SEO", level: "80%", status: "Regular" },
                { name: "Ionic & Cordova", level: "30%", status: "Learning" },
                { name: "React JS", level: "45%", status: "Familiar" }
              ].map((skill) => (
                <div key={skill.name} className="group">
                  <div className="flex justify-between mb-3 font-bold text-lg text-zinc-300">
                    <span>{skill.name}</span>
                    <span className="text-[#f39200] text-xs uppercase tracking-widest">{skill.status}</span>
                  </div>
                  <div className="w-full h-2 bg-white/5 rounded-full overflow-hidden">
                    <div className="h-full bg-[#f39200]" style={{ width: skill.level }}></div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div>
             <div className="flex items-center gap-3 mb-12 border-b-4 border-[#f39200] inline-flex pb-2">
                <Globe className="text-[#f39200]" />
                <h3 className="text-4xl font-black">Experience</h3>
            </div>
            <div className="border-l-4 border-white/5 pl-12 space-y-16 relative">
              
              <TimelineItem 
                date="2025 - PRESENT" 
                title="Junior WordPress FrontEnd Developer"
                company="Comfort Digital (PTY) LTD"
                desc={
                  <div className="space-y-6">
                    <p className="text-xl">
                      Leading WordPress development and site audits. Applying technical SEO strategies using RankMath 
                      to boost visibility, page speeds, and general site maintenance.
                    </p>
                    <div className="bg-white/5 border border-white/10 rounded-2xl p-6 hover:border-[#f39200]/30 transition group/card shadow-xl">
                      <div className="flex items-center gap-3 mb-3 text-[#f39200]">
                        <Award size={20} />
                        <span className="text-xs font-black uppercase tracking-[0.2em]">Major Contribution</span>
                      </div>
                      <p className="text-lg md:text-xl text-zinc-100 font-semibold mb-4 leading-relaxed">
                        Technical contributor to the <span className="text-white font-black underline decoration-[#f39200]">2025 Digital Marketing ROI White Paper</span>. 
                        I was responsible for developing the site environment, performing technical SEO audits, and optimizing performance benchmarks.
                      </p>
                      <a 
                        href="https://comfortdigital.co.za/digital-marketing-roi-white-paper-2025/" 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 text-sm font-black text-[#f39200] hover:text-white transition uppercase tracking-widest"
                      >
                        View Project <ExternalLink size={16} />
                      </a>
                    </div>
                  </div>
                }
              />

              <TimelineItem 
                date="2025" 
                title="Frontend Training"
                company="Codveda Technology"
                desc="Gained foundation in modern web development standards including React.js architecture, Bootstrap grid systems, and Tailwind CSS styling using Visual Studio Code."
              />
            </div>
          </div>
        </div>
      </section>

      {/* Contact Form Section */}
      <section id="contact-form" className="py-32 px-[10%] bg-black/20 border-t border-white/5">
        <div className="max-w-4xl mx-auto text-center">
            <h3 className="text-5xl md:text-6xl font-black mb-16">Send a <span className="text-[#f39200]">Message</span></h3>
            <form action="https://formspree.io/f/xzdakknq" method="POST" className="space-y-6 text-left">
              <input type="text" name="_gotcha" style={{ display: 'none' }} />
              <input type="hidden" name="_subject" value="New Portfolio Message from Website" />

              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-xs uppercase tracking-widest font-bold text-zinc-500">Your Name</label>
                  <input type="text" name="name" required className="w-full bg-white/5 border border-white/10 rounded-xl px-6 py-4 outline-none focus:border-[#f39200] transition" placeholder="John Doe" />
                </div>
                <div className="space-y-2">
                  <label className="text-xs uppercase tracking-widest font-bold text-zinc-500">Email Address</label>
                  <input type="email" name="email" required className="w-full bg-white/5 border border-white/10 rounded-xl px-6 py-4 outline-none focus:border-[#f39200] transition" placeholder="john@example.com" />
                </div>
              </div>
              <div className="space-y-2">
                <label className="text-xs uppercase tracking-widest font-bold text-zinc-500">Message</label>
                <textarea name="message" required rows="5" className="w-full bg-white/5 border border-white/10 rounded-xl px-6 py-4 outline-none focus:border-[#f39200] transition" placeholder="Tell me about your project..."></textarea>
              </div>
              <button type="submit" className="w-full bg-[#f39200] text-black font-black py-5 rounded-xl hover:scale-[1.02] transition active:scale-95 shadow-lg shadow-orange-500/20">SEND MESSAGE</button>
            </form>
        </div>
      </section>

      <footer className="py-12 text-center border-t border-white/5 text-zinc-600 font-bold tracking-widest text-xs uppercase">
        &copy; 2026 REALEBOHA SEKHITLANE. ALL RIGHTS RESERVED.
      </footer>
    </div>
  );
}

function TimelineItem({ date, title, company, desc }) {
  return (
    <div className="relative group">
      <div className="absolute -left-[58px] top-1.5 w-5 h-5 bg-[#f39200] rounded-full border-4 border-[#0f0a07] shadow-[0_0_15px_#f39200] group-hover:scale-125 transition duration-300" />
      <div className="text-[#f39200] font-black text-sm mb-2 tracking-tighter">{date}</div>
      <div className="text-3xl font-black text-white mb-2">{title}</div>
      <span className="text-zinc-500 italic font-bold text-lg mb-4 block">{company}</span>
      <div className="text-zinc-400 text-lg leading-relaxed max-w-2xl">{desc}</div>
    </div>
  );
}