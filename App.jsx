import React, { useState } from 'react';
import { Mail, Phone, ExternalLink, MessageSquare, Download, Code2, Globe, Award, Menu, X } from 'lucide-react';

// --- Reusable Sub-Components ---

const ProjectCard = ({ img, title, desc }) => (
  <div className="relative aspect-square overflow-hidden rounded-3xl border border-white/10 group shadow-2xl">
    <img src={`images/${img}`} className="w-full h-full object-cover group-hover:scale-110 transition duration-700" alt={title} />
    <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/40 to-transparent flex flex-col justify-end p-6">
      <h4 className="text-[#f39200] font-black text-lg uppercase tracking-widest mb-1">{title}</h4>
      <p className="text-sm text-zinc-300 leading-snug">{desc}</p>
    </div>
  </div>
);

const SkillItem = ({ name, level, status }) => (
  <div className="group">
    <div className="flex justify-between mb-3 font-bold text-xl text-zinc-300">
      <span>{name}</span>
      <span className="text-[#f39200] text-xs uppercase tracking-widest">{status}</span>
    </div>
    <div className="w-full h-2.5 bg-white/5 rounded-full overflow-hidden">
      <div className="h-full bg-[#f39200] transition-all duration-1000" style={{ width: level }}></div>
    </div>
  </div>
);

const TimelineItem = ({ date, title, company, children }) => (
  <div className="relative group mb-16 last:mb-0">
    <div className="absolute -left-[58px] top-1.5 w-6 h-6 bg-[#f39200] rounded-full border-4 border-[#0f0a07] shadow-[0_0_15px_#f39200] group-hover:scale-125 transition duration-300" />
    <div className="text-[#f39200] font-black text-base mb-2 tracking-tighter uppercase">{date}</div>
    <div className="text-3xl md:text-4xl font-black text-white mb-2">{title}</div>
    <span className="text-zinc-500 italic font-bold text-xl mb-4 block">{company}</span>
    <div className="text-zinc-400 text-xl leading-relaxed max-w-3xl">{children}</div>
  </div>
);

// --- Main Application ---

export default function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div className="min-h-screen bg-[#0f0a07] text-white selection:bg-[#f39200]/30 scroll-smooth overflow-x-hidden">
      
      {/* Glassmorphism FAB */}
      <a 
        href="#contact-form" 
        className="fixed bottom-8 right-8 z-[100] bg-[#f39200] text-black p-5 rounded-full shadow-2xl hover:scale-110 transition-all active:scale-95 group"
      >
        <Mail size={30} strokeWidth={2.5} />
        <span className="absolute right-20 top-1/2 -translate-y-1/2 bg-black/90 text-[#f39200] text-xs font-black py-2 px-4 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap uppercase tracking-widest border border-[#f39200]/20 pointer-events-none">
          Send a Message
        </span>
      </a>

      {/* Navigation */}
      <nav className="flex justify-between items-center px-6 md:px-[10%] py-6 fixed w-full top-0 z-[150] bg-[#0f0a07]/95 backdrop-blur-xl border-b border-white/5">
        <div className="text-2xl md:text-3xl font-black tracking-tighter text-[#f39200]">RealebohaSekhitlane</div>
        
        <ul className="hidden lg:flex gap-10 text-[1rem] font-bold uppercase tracking-widest text-zinc-400">
          <li><a href="#home" className="hover:text-[#f39200] transition">Home</a></li>
          <li><a href="#about" className="hover:text-[#f39200] transition">About</a></li>
          <li><a href="#skills-exp" className="hover:text-[#f39200] transition">Experience</a></li>
        </ul>

        <div className="flex gap-4 items-center">
          <a href="#contact-form" className="flex items-center gap-2 bg-[#f39200] text-black px-6 py-3 rounded-full font-black text-sm hover:scale-105 transition active:scale-95 shadow-xl shadow-orange-500/10">
            <MessageSquare size={18} />
            LET'S TALK
          </a>
          <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="lg:hidden text-[#f39200]">
            {isMenuOpen ? <X size={35} /> : <Menu size={35} />}
          </button>
        </div>

        {/* Mobile Menu Overlay */}
        <div className={`fixed inset-0 bg-[#0f0a07] z-[200] flex flex-col items-center justify-center transition-transform duration-500 ${isMenuOpen ? 'translate-x-0' : 'translate-x-full'}`}>
          <button onClick={() => setIsMenuOpen(false)} className="absolute top-8 right-8 text-[#f39200]"><X size={40} /></button>
          <ul className="text-center text-3xl font-black space-y-12 uppercase tracking-widest">
            <li><a href="#home" onClick={() => setIsMenuOpen(false)}>Home</a></li>
            <li><a href="#about" onClick={() => setIsMenuOpen(false)}>About</a></li>
            <li><a href="#skills-exp" onClick={() => setIsMenuOpen(false)}>Skills</a></li>
            <li><a href="#contact-form" onClick={() => setIsMenuOpen(false)} className="text-[#f39200]">Contact</a></li>
          </ul>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="home" className="flex flex-col lg:flex-row items-center min-h-screen px-6 md:px-[10%] pt-[140px] pb-20 gap-16">
        <div className="flex-[1.4] text-center lg:text-left">
          <h1 className="text-6xl md:text-8xl lg:text-[10rem] font-black leading-[0.85] tracking-tighter mb-8">
            Hi, I'm <br /><span className="text-[#f39200]">Realeboha</span> 👋
          </h1>
          <p className="text-2xl md:text-4xl font-bold mb-6 text-zinc-300 italic">
            Developer & SEO Specialist
          </p>
          <p className="text-xl md:text-2xl text-zinc-400 mb-10 leading-relaxed max-w-[700px] mx-auto lg:mx-0">
            Specializing in high-end WordPress development and search engine growth at <strong className="text-white">Comfort Digital (PTY) LTD</strong>. 
            Merging technical development with data-driven SEO.
          </p>
          <div className="flex flex-col sm:flex-row justify-center lg:justify-start gap-6">
            <a href="#contact-form" className="flex items-center justify-center gap-3 bg-[#f39200] text-black px-10 py-5 rounded-2xl font-black text-xl shadow-2xl hover:-translate-y-1 transition">
              <Mail size={24} /> Contact Me
            </a>
            <a 
  href="/RealebohaSekhitlane_CV.pdf" 
  target="_blank" 
  rel="noopener noreferrer"
  className="flex items-center justify-center gap-3 border-2 border-zinc-800 px-10 py-5 rounded-2xl font-bold text-xl hover:bg-white/5 transition"
>
  <Download size={24} /> 
  Download CV
</a>
          </div>
        </div>
        <div className="relative w-72 h-80 md:w-[450px] md:h-[550px] bg-[#f39200] rounded-3xl overflow-hidden shrink-0 shadow-[20px_20px_0px_0px_rgba(243,146,0,1)]">
          <img src="images/profile.jpeg" alt="Realeboha" className="w-full h-full object-cover" />
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-32 px-6 md:px-[10%] bg-black/40 border-y border-white/5">
        <div className="flex flex-col lg:flex-row items-center gap-16 lg:gap-32">
          <div className="flex-1 grid grid-cols-2 gap-6 w-full order-2 lg:order-1">
            <ProjectCard img="weather_b91120.jfif" title="Weather App" desc="Live forecasting systems." />
            <ProjectCard img="dental.jfif" title="Healthcare UI" desc="Clinic management UX." />
            <ProjectCard img="code_b91160.jfif" title="Architecture" desc="Clean frontend scaling." />
            <ProjectCard img="OIP.jfif" title="Comfort Digital" desc="SEO & Performance." />
          </div>

          <div className="flex-1 space-y-10 order-1 lg:order-2">
            <h2 className="text-6xl md:text-8xl font-black tracking-tighter leading-none">
              About <span className="text-[#f39200]">Me</span>
            </h2>
            <p className="text-2xl md:text-3xl text-zinc-200 leading-snug font-medium italic border-l-8 border-[#f39200] pl-8">
              "Bridging the gap between classroom theory and professional results."
            </p>
            <p className="text-xl md:text-2xl text-zinc-400 leading-relaxed">
              Based in Maseru, I am a Mobile Computing student at Botho University. I optimize digital experiences through a blend of technical SEO (RankMath) and responsive WordPress architecture.
            </p>
            <div className="pt-10 space-y-6 border-t border-white/10 text-xl">
              <div className="flex items-center gap-5">
                <div className="bg-orange-500/10 p-4 rounded-xl text-[#f39200] shadow-xl"><Phone size={24} /></div>
                <a href="tel:+26662803236" className="text-zinc-300 hover:text-[#f39200] font-bold">+266 6280 3236</a>
              </div>
              <div className="flex items-center gap-5">
                <div className="bg-orange-500/10 p-4 rounded-xl text-[#f39200] shadow-xl"><Mail size={24} /></div>
                <a href="mailto:realebohasekhitlane51@gmail.com" className="text-zinc-300 hover:text-[#f39200] font-bold underline decoration-[#f39200]/30 break-all">realebohasekhitlane51@gmail.com</a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Experience & Skills */}
      <section id="skills-exp" className="py-32 px-6 md:px-[10%]">
        <div className="grid lg:grid-cols-2 gap-24">
          <div>
            <h3 className="text-4xl font-black mb-16 border-b-4 border-[#f39200] inline-block pb-4 tracking-tighter uppercase">Technical Skills</h3>
            <div className="space-y-12">
              <SkillItem name="WordPress / RankMath SEO" level="80%" status="Regular" />
              <SkillItem name="React.js / Frontend Architecture" level="50%" status="Familiar" />
              <SkillItem name="Ionic / Cordova Mobile Dev" level="30%" status="Learning" />
            </div>
          </div>

          <div>
            <h3 className="text-4xl font-black mb-16 border-b-4 border-[#f39200] inline-block pb-4 tracking-tighter uppercase">Experience</h3>
            <div className="border-l-4 border-white/5 pl-12">
              <TimelineItem 
                date="2025 - PRESENT" 
                title="WordPress Dev Intern" 
                company="Comfort Digital (PTY) LTD"
              >
                <div className="space-y-8">
                  <p>Leading site audits and maintenance. Implementing RankMath SEO strategies to maximize organic growth and page performance.</p>
                  
                  {/* Flagship Project Highlight */}
                  <div className="bg-white/5 border border-white/10 rounded-2xl p-8 hover:border-[#f39200]/40 transition shadow-2xl">
                    <div className="flex items-center gap-3 mb-4 text-[#f39200]">
                      <Award size={24} />
                      <span className="text-sm font-black uppercase tracking-widest">Contributor</span>
                    </div>
                    <p className="text-xl md:text-2xl text-white font-bold mb-6 leading-tight">
                      Technical audit lead for the <span className="text-[#f39200] underline underline-offset-8">2025 Digital Marketing ROI White Paper</span>.
                    </p>
                    <a href="https://comfortdigital.co.za/digital-marketing-roi-white-paper-2025/" target="_blank" className="flex items-center gap-2 text-sm font-black text-[#f39200] uppercase tracking-widest hover:text-white transition">
                      View White Paper <ExternalLink size={16} />
                    </a>
                  </div>
                </div>
              </TimelineItem>

              <TimelineItem date="2022 - 2027" title="BSc Mobile Computing" company="Botho University">
                <p>Developing high-level software architecture for mobile applications and modern web standards.</p>
              </TimelineItem>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Form */}
      <section id="contact-form" className="py-32 px-6 md:px-[10%] bg-[#f39200]">
        <div className="max-w-4xl mx-auto text-black">
          <h3 className="text-6xl md:text-8xl font-black mb-12 tracking-tighter">Let's <br />Build.</h3>
          <form action="https://formspree.io/f/xzdakknq" method="POST" className="space-y-8">
            <div className="grid md:grid-cols-2 gap-8">
              <input type="text" name="name" required className="bg-black/10 border-b-4 border-black p-6 font-black text-2xl outline-none placeholder:text-black/30" placeholder="NAME" />
              <input type="email" name="email" required className="bg-black/10 border-b-4 border-black p-6 font-black text-2xl outline-none placeholder:text-black/30" placeholder="EMAIL" />
            </div>
            <textarea name="message" required rows="4" className="w-full bg-black/10 border-b-4 border-black p-6 font-black text-2xl outline-none placeholder:text-black/30" placeholder="TELL ME ABOUT YOUR PROJECT..."></textarea>
            <button type="submit" className="w-full bg-black text-[#f39200] py-8 text-2xl font-black uppercase shadow-2xl hover:bg-zinc-900 transition active:scale-95">Send Message</button>
          </form>
        </div>
      </section>

      <footer className="py-16 text-center border-t border-white/5 text-zinc-500 font-black tracking-[0.4em] text-xs uppercase">
        &copy; 2026 REALEBOHA SEKHITLANE &bull; DEVELOPED IN LESOTHO
      </footer>
    </div>
  );
}