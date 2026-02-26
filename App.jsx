import React, { useState } from 'react';
import { Mail, Download, Menu, X, Code, BookOpen, Smartphone, Layout, Monitor, ExternalLink, Smartphone as MobileIcon } from 'lucide-react';

// --- Sub-Components ---

const ServiceCard = ({ icon: Icon, title, desc }) => (
  <div className="bg-[#1a1412] p-6 md:p-8 rounded-xl border border-white/5 hover:border-[#f39200]/50 transition-all group">
    <div className="bg-[#f39200]/10 w-10 h-10 md:w-12 md:h-12 flex items-center justify-center rounded-lg mb-6 group-hover:bg-[#f39200] group-hover:text-black transition-colors">
      <Icon size={20} className="text-[#f39200] group-hover:text-black" />
    </div>
    <h4 className="text-white font-bold text-base md:text-lg mb-3">{title}</h4>
    <p className="text-zinc-400 text-xs md:text-sm leading-relaxed">{desc}</p>
  </div>
);

const ExperienceItem = ({ date, title, company, children }) => (
  <div className="mb-12 last:mb-0 relative pl-8 border-l-2 border-white/5">
    <div className="absolute -left-[9px] top-0 w-4 h-4 rounded-full bg-[#f39200] shadow-[0_0_10px_#f39200]" />
    <span className="text-[#f39200] text-[10px] font-black uppercase tracking-widest">{date}</span>
    <h4 className="text-xl md:text-2xl font-bold text-white mt-1">{title}</h4>
    <p className="text-zinc-500 font-medium mb-4 italic text-sm md:text-base">{company}</p>
    <div className="text-zinc-400 text-sm leading-relaxed">{children}</div>
  </div>
);

export default function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div className="min-h-screen bg-[#0f0a07] text-white font-sans selection:bg-[#f39200]/30 overflow-x-hidden">
      
      {/* Navigation */}
      <nav className="flex justify-between items-center px-6 md:px-[10%] py-4 md:py-5 fixed w-full top-0 z-[150] bg-[#0f0a07]/90 backdrop-blur-md border-b border-white/5">
        {/* Scaled down logo for mobile */}
        <div className="text-base md:text-xl font-bold text-[#f39200] tracking-tight uppercase">DevPortfolio</div>
        
        <ul className="hidden lg:flex gap-8 text-[10px] font-black uppercase tracking-[0.2em] text-zinc-400">
          <li><a href="#services" className="hover:text-[#f39200] transition">Services</a></li>
          <li><a href="#about" className="hover:text-[#f39200] transition">About Me</a></li>
          <li><a href="#experience" className="hover:text-[#f39200] transition">Experience</a></li>
          <li><a href="#contact" className="hover:text-[#f39200] transition">Contact</a></li>
        </ul>

        <div className="flex items-center gap-4">
          {/* Scaled down button for mobile */}
          <a href="#contact" className="bg-[#f39200] text-black px-4 py-1.5 md:px-6 md:py-2 rounded-full font-black text-[9px] md:text-[10px] uppercase tracking-widest hover:brightness-110 transition">
            Let's Talk
          </a>
          {/* Hamburger Icon */}
          <button onClick={() => setIsMenuOpen(true)} className="lg:hidden text-[#f39200] p-1">
            <Menu size={24} />
          </button>
        </div>

        {/* Mobile Menu Overlay */}
        <div className={`fixed inset-0 bg-[#0f0a07] z-[200] flex flex-col items-center justify-center transition-transform duration-500 ${isMenuOpen ? 'translate-x-0' : 'translate-x-full'}`}>
           <button onClick={() => setIsMenuOpen(false)} className="absolute top-6 right-6 text-[#f39200]"><X size={32} /></button>
           <ul className="text-center space-y-8">
             <li><a href="#services" onClick={() => setIsMenuOpen(false)} className="text-xl font-black uppercase tracking-widest">Services</a></li>
             <li><a href="#about" onClick={() => setIsMenuOpen(false)} className="text-xl font-black uppercase tracking-widest">About Me</a></li>
             <li><a href="#experience" onClick={() => setIsMenuOpen(false)} className="text-xl font-black uppercase tracking-widest">Experience</a></li>
             <li><a href="#contact" onClick={() => setIsMenuOpen(false)} className="text-xl font-black text-[#f39200] uppercase tracking-widest">Contact</a></li>
           </ul>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="home" className="flex flex-col lg:flex-row items-center justify-between min-h-screen px-6 md:px-[10%] pt-32 pb-20 gap-12">
        <div className="flex-1 text-center lg:text-left">
          <h1 className="text-4xl md:text-7xl font-bold mb-4 leading-tight">
            Hi, I'm <span className="text-[#f39200]">Realeboha</span> 👋
          </h1>
          <p className="text-base md:text-xl font-semibold text-zinc-300 mb-6">
            Frontend Developer & Digital Marketing Enthusiast
          </p>
          <p className="text-zinc-400 mb-10 max-w-lg mx-auto lg:mx-0 leading-relaxed text-sm md:text-base">
            I craft digital solutions that combine cutting-edge technology with beautiful design. Let's turn your ideas into reality.
          </p>
          
          <div className="flex flex-wrap justify-center lg:justify-start gap-4 mb-12">
            <a href="#contact" className="bg-[#f39200] text-black px-6 py-3 rounded-lg font-bold flex items-center gap-2 hover:bg-orange-500 transition text-xs md:text-sm">
              Contact Me <span>→</span>
            </a>
            {/* Added check for correct file path */}
            <a href="./Realeboha_Sekhitlane_CV.pdf" download="Realeboha_Sekhitlane_CV.pdf" className="border border-zinc-700 px-6 py-3 rounded-lg font-bold flex items-center gap-2 hover:bg-white/5 transition text-zinc-300 text-xs md:text-sm">
              <Download size={18} /> Download CV
            </a>
          </div>

          <div className="flex justify-center lg:justify-start gap-10">
            <div><span className="block text-xl md:text-2xl font-bold text-[#f39200]">2+</span> <span className="text-[9px] md:text-[10px] text-zinc-500 uppercase font-black tracking-widest">Years Exp</span></div>
            <div><span className="block text-xl md:text-2xl font-bold text-[#f39200]">15+</span> <span className="text-[9px] md:text-[10px] text-zinc-500 uppercase font-black tracking-widest">Projects</span></div>
          </div>
        </div>

        <div className="flex-1 flex justify-center order-first lg:order-last">
          <div className="relative w-48 h-48 md:w-[380px] md:h-[380px] bg-[#f39200] rounded-[30%_70%_70%_30%/30%_30%_70%_70%] overflow-hidden shadow-2xl transition-transform hover:scale-105 duration-700">
             <img src="images/profile.jpeg" alt="Realeboha Sekhitlane" className="w-full h-full object-cover" />
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 px-6 md:px-[10%] text-center bg-black/20">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">My <span className="text-[#f39200]">Services</span></h2>
        <p className="text-zinc-500 mb-12 md:mb-16 max-w-xl mx-auto text-[10px] uppercase tracking-widest">Comprehensive digital solutions tailored to your business needs</p>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 text-left">
          <ServiceCard icon={Code} title="Web Development" desc="Custom web applications built with modern technologies for optimal performance." />
          <ServiceCard icon={BookOpen} title="Technical Writing" desc="Clear documentation to help users understand and utilize products effectively." />
          <ServiceCard icon={MobileIcon} title="Mobile Development" desc="Native and cross-platform mobile apps delivering seamless experiences." />
          <ServiceCard icon={Mail} title="Email Marketing" desc="Strategic email campaigns that engage your audience and drive conversions." />
          <ServiceCard icon={Layout} title="UI/UX Design" desc="User-centered designs combining aesthetics with functionality." />
          <ServiceCard icon={Monitor} title="Web Design" desc="Responsive website designs that reflect your brand identity." />
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 px-6 md:px-[10%]">
        <div className="flex flex-col lg:flex-row items-center gap-12 md:gap-16">
          <div className="flex-1 grid grid-cols-2 gap-3 w-full order-last lg:order-first">
             <img src="images/weather_b91120.jfif" className="rounded-xl grayscale hover:grayscale-0 transition duration-500 aspect-square object-cover border border-white/5" alt="Project 1" />
             <img src="images/dental.jfif" className="rounded-xl grayscale hover:grayscale-0 transition duration-500 aspect-square object-cover border border-white/5" alt="Project 2" />
             <img src="images/code_b91160.jfif" className="rounded-xl grayscale hover:grayscale-0 transition duration-500 aspect-square object-cover border border-white/5" alt="Project 3" />
             <img src="images/OIP.jfif" className="rounded-xl grayscale hover:grayscale-0 transition duration-500 aspect-square object-cover border border-white/5" alt="Project 4" />
          </div>
          
          <div className="flex-1">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">About <span className="text-[#f39200]">Me</span></h2>
            <h3 className="text-[10px] md:text-sm font-black text-zinc-500 mb-6 uppercase tracking-[0.2em]">Junior WordPress Front-End Developer</h3>
            
            <p className="text-base md:text-lg italic text-zinc-200 border-l-4 border-[#f39200] pl-6 mb-8 py-2">
              "Bridging the gap between classroom theory and professional results."
            </p>

            <p className="text-zinc-400 mb-8 leading-relaxed text-sm md:text-base">
              I am Realeboha Sekhitlane, a Mobile Computing student at Botho University with hands-on industry experience in web development and technical SEO. I thrive at turning academic knowledge into real business value, and I am currently doing exactly that as a Junior WordPress Front-End Developer at <span className="text-white font-bold">Comfort Digital (PTY) LTD</span>.
            </p>
            
            <div className="grid grid-cols-2 gap-8 mb-10">
              <div>
                <h4 className="text-[#f39200] font-black text-[10px] mb-2 uppercase tracking-widest flex items-center gap-2"><Layout size={14}/> Frontend</h4>
                <p className="text-[10px] md:text-[11px] text-zinc-500 font-bold uppercase">React, JavaScript, Tailwind, Vue.js</p>
              </div>
              <div>
                <h4 className="text-[#f39200] font-black text-[10px] mb-2 uppercase tracking-widest flex items-center gap-2"><Code size={14}/> Backend</h4>
                <p className="text-[10px] md:text-[11px] text-zinc-500 font-bold uppercase">Node.js, MongoDB, REST APIs, PHP</p>
              </div>
            </div>

            <div className="flex gap-4">
               <a href="#contact" className="bg-[#f39200] text-black px-6 py-3 rounded-lg font-black text-[10px] uppercase tracking-widest">Contact Me</a>
               <a href="#services" className="border border-zinc-800 text-zinc-400 px-6 py-3 rounded-lg font-black text-[10px] uppercase tracking-widest">Portfolio</a>
            </div>
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="py-20 px-6 md:px-[10%] bg-black/20">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 md:mb-16 text-center">Professional <span className="text-[#f39200]">Journey</span></h2>
        <div className="max-w-3xl mx-auto">
          
          <ExperienceItem 
            date="2025 - PRESENT" 
            title="Junior WordPress Front-End Developer" 
            company="Comfort Digital (PTY) LTD"
          >
            <p className="mb-4">Delivering end-to-end WordPress development and site audits in a live agency environment. Implementing technical SEO strategies with RankMath to improve search visibility and page performance, while handling ongoing site maintenance for client projects.</p>
            <div className="bg-white/5 p-4 md:p-5 rounded-lg border border-white/5">
              <p className="font-bold text-white text-[10px] mb-2 uppercase tracking-widest flex items-center gap-2">
                <ExternalLink size={14} className="text-[#f39200]"/> Major Contribution:
              </p>
              <p className="text-xs italic mb-4">Co-contributor to the 2025 Digital Marketing ROI White Paper, where I owned the technical side: building the site environment, conducting SEO audits, and optimizing performance benchmarks that fed directly into the report's findings.</p>
              <a href="#" className="text-[#f39200] text-[10px] font-black uppercase tracking-widest flex items-center gap-1 hover:underline">
                View Project <ExternalLink size={12} />
              </a>
            </div>
          </ExperienceItem>

          <ExperienceItem 
            date="2025" 
            title="Frontend Development Training" 
            company="Codveda Technology"
          >
            <p>Built a practical foundation in modern front-end development, working with React.js, Bootstrap, and Tailwind CSS inside a professional development environment (VS Code). Focused on industry-standard architecture and responsive design principles.</p>
          </ExperienceItem>

          <ExperienceItem 
            date="2022 - 2027" 
            title="BSc Honors Mobile Computing" 
            company="Botho University"
          >
            <p>Focused on high-level software architecture and responsive design principles for mobile and web platforms.</p>
          </ExperienceItem>

        </div>
      </section>

      {/* Contact Form Section */}
      <section id="contact" className="py-20 px-6 md:px-[10%]">
        <div className="max-w-4xl mx-auto bg-[#1a1412] p-8 md:p-16 rounded-3xl border border-white/5">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Let's <span className="text-[#f39200]">Work Together</span></h2>
            <p className="text-zinc-500 text-sm">Have a project in mind? Reach out and let's make it happen.</p>
          </div>
          <form className="grid gap-6">
            <div className="grid md:grid-cols-2 gap-6">
              <input type="text" placeholder="Name" className="bg-black/50 border border-white/10 p-4 rounded-xl outline-none focus:border-[#f39200] transition text-sm" />
              <input type="email" placeholder="Email" className="bg-black/50 border border-white/10 p-4 rounded-xl outline-none focus:border-[#f39200] transition text-sm" />
            </div>
            <textarea placeholder="Your Message" rows="5" className="bg-black/50 border border-white/10 p-4 rounded-xl outline-none focus:border-[#f39200] transition text-sm"></textarea>
            <button className="bg-[#f39200] text-black py-4 rounded-xl font-black uppercase tracking-widest hover:brightness-110 transition text-sm">Send Message</button>
          </form>
        </div>
      </section>

      <footer className="py-12 text-center border-t border-white/5 text-[8px] md:text-[9px] text-zinc-600 font-black uppercase tracking-[0.4em]">
        &copy; 2026 REALEBOHA SEKHITLANE &bull; BUILT IN LESOTHO
      </footer>
    </div>
  );
}