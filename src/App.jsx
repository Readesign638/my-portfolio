import React, { useState, useEffect } from 'react';
import { 
  Mail, Phone, ExternalLink, MessageSquare, Download, Code2, 
  Globe, Award, Menu, X, Linkedin, Github, FolderGit2, Smartphone, 
  Globe2, Database, Figma, Users, GraduationCap, BookOpen, ArrowUp, MapPin
} from 'lucide-react';

export default function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [showScrollTop, setShowScrollTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
      setShowScrollTop(window.scrollY > 500);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Scroll reveal animation
  useEffect(() => {
    const observerOptions = {
      threshold: 0.1,
      rootMargin: "0px 0px -50px 0px"
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('active');
          observer.unobserve(entry.target);
        }
      });
    }, observerOptions);

    document.querySelectorAll('.reveal').forEach(el => {
      observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
  const closeMenu = () => setIsMenuOpen(false);
  
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleLinkClick = (e, href) => {
    e.preventDefault();
    closeMenu();
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-[#0f0a07] text-white selection:bg-[#f39200]/30 scroll-smooth">
      
      {/* Skip to content link */}
      <a href="#main-content" className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 bg-[#f39200] text-black px-4 py-2 rounded-lg z-[200]">
        Skip to content
      </a>

      {/* Scroll to Top Button */}
      {showScrollTop && (
        <button 
          onClick={scrollToTop}
          className="fixed bottom-5 right-5 z-[100] bg-[#f39200] text-black p-3 md:p-4 rounded-full shadow-lg hover:bg-[#f39200]/80 hover:scale-110 transition-all duration-300 active:scale-95 group focus:outline-none focus:ring-2 focus:ring-[#f39200] focus:ring-offset-2"
          aria-label="Scroll to top"
        >
          <ArrowUp size={18} className="md:w-5 md:h-5" />
          <span className="hidden md:block absolute right-16 top-1/2 -translate-y-1/2 bg-black/90 text-[#f39200] text-xs font-black py-2 px-4 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none whitespace-nowrap">
            Back to Top
          </span>
        </button>
      )}

      {/* Navigation */}
      <nav className={`fixed w-full top-0 z-50 transition-all duration-300 ${scrolled ? 'bg-[#0f0a07]/95 backdrop-blur-xl border-b border-white/5' : 'bg-transparent'}`}>
        <div className="flex justify-between items-center px-5 md:px-[10%] py-3 md:py-4">
          <a href="#home" className="flex items-center gap-2 group" onClick={(e) => handleLinkClick(e, '#home')}>
          <span className="text-sm sm:text-base md:text-xl font-black tracking-tighter text-[#f39200]">RS</span>
          </a>
          
          <ul className="hidden md:flex gap-6 lg:gap-8 text-[0.85rem] font-bold uppercase tracking-widest text-zinc-400">
            <li><a href="#home" className="hover:text-[#f39200] transition">Home</a></li>
            <li><a href="#about" className="hover:text-[#f39200] transition">About</a></li>
            <li><a href="#projects" className="hover:text-[#f39200] transition">Projects</a></li>
            <li><a href="#education" className="hover:text-[#f39200] transition">Education</a></li>
            <li><a href="#certificates" className="hover:text-[#f39200] transition">Certificates</a></li>
            <li><a href="#skills-exp" className="hover:text-[#f39200] transition">Skills</a></li>
          </ul>
          
          <a href="#contact-form" className="hidden md:flex items-center gap-2 bg-[#f39200] text-black px-5 py-2.5 rounded-full font-black text-sm hover:scale-105 transition btn-pulse">
            <MessageSquare size={15} />
            LET'S TALK
          </a>
          
          <button 
            onClick={toggleMenu}
            className="md:hidden text-white p-2 hover:text-[#f39200] transition focus:outline-none focus:ring-2 focus:ring-[#f39200] rounded-lg z-50"
            aria-label={isMenuOpen ? "Close menu" : "Open menu"}
            aria-expanded={isMenuOpen}
          >
            {isMenuOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
        
        {/* Mobile Menu */}
        <div className={`md:hidden fixed inset-0 top-[56px] bg-[#0f0a07]/98 backdrop-blur-xl transition-all duration-300 ease-in-out z-40 ${isMenuOpen ? 'opacity-100 visible translate-x-0' : 'opacity-0 invisible translate-x-full'}`}>
          <div className="flex flex-col items-center justify-start h-full gap-4 text-center px-5 pt-10">
            <a href="#home" onClick={(e) => handleLinkClick(e, '#home')} className="text-lg font-bold uppercase tracking-widest text-zinc-300 hover:text-[#f39200] transition py-2 w-full border-b border-white/10">Home</a>
            <a href="#about" onClick={(e) => handleLinkClick(e, '#about')} className="text-lg font-bold uppercase tracking-widest text-zinc-300 hover:text-[#f39200] transition py-2 w-full border-b border-white/10">About</a>
            <a href="#projects" onClick={(e) => handleLinkClick(e, '#projects')} className="text-lg font-bold uppercase tracking-widest text-zinc-300 hover:text-[#f39200] transition py-2 w-full border-b border-white/10">Projects</a>
            <a href="#education" onClick={(e) => handleLinkClick(e, '#education')} className="text-lg font-bold uppercase tracking-widest text-zinc-300 hover:text-[#f39200] transition py-2 w-full border-b border-white/10">Education</a>
            <a href="#certificates" onClick={(e) => handleLinkClick(e, '#certificates')} className="text-lg font-bold uppercase tracking-widest text-zinc-300 hover:text-[#f39200] transition py-2 w-full border-b border-white/10">Certificates</a>
            <a href="#skills-exp" onClick={(e) => handleLinkClick(e, '#skills-exp')} className="text-lg font-bold uppercase tracking-widest text-zinc-300 hover:text-[#f39200] transition py-2 w-full border-b border-white/10">Skills</a>
            <a href="#contact-form" onClick={(e) => handleLinkClick(e, '#contact-form')} className="mt-6 flex items-center justify-center gap-2 bg-[#f39200] text-black px-8 py-3 rounded-full font-black text-base hover:scale-105 transition w-48 mx-auto">
              <MessageSquare size={18} />
              LET'S TALK
            </a>
            <div className="flex gap-8 mt-8 pt-6">
              <a href="https://www.linkedin.com/in/realeboha-sekhitlane" target="_blank" rel="noopener noreferrer" className="text-zinc-400 hover:text-[#f39200] transition p-2"><Linkedin size={22} /></a>
              <a href="https://github.com/Readesign638" target="_blank" rel="noopener noreferrer" className="text-zinc-400 hover:text-[#f39200] transition p-2"><Github size={22} /></a>
            </div>
          </div>
        </div>
      </nav>

      <main id="main-content">

        {/* Hero Section */}
        <section id="home" className="flex flex-col lg:flex-row items-center min-h-[85vh] px-5 md:px-[10%] pt-28 md:pt-36 pb-12 md:pb-20 gap-8 md:gap-12">
          <div className="flex-[1.4] text-center lg:text-left slide-in-left">
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black leading-[1.2] tracking-tighter mb-4">
              Hi, I'm <br /><span className="text-[#f39200]">Realeboha</span> <span className="inline-block animate-wave">👋</span>
            </h1>
            <p className="text-base sm:text-lg md:text-2xl font-bold mb-3 text-zinc-300 italic">Developer & SEO Specialist</p>
            <p className="text-sm sm:text-base text-zinc-400 mb-6 leading-relaxed max-w-[600px] mx-auto lg:mx-0">
              I build fast, modern applications and websites that help businesses grow.
            </p>
            <div className="flex flex-wrap gap-3 justify-center lg:justify-start">
              <a href="#contact-form" className="inline-flex items-center gap-2 bg-[#f39200] text-black px-5 py-2.5 rounded-xl font-black text-sm shadow-lg hover:-translate-y-1 transition">
                <Mail size={16} />
                Contact
              </a>
              <a href="/Realeboha_SekhitlaneCV.pdf" download="Realeboha_Sekhitlane_CV.pdf" className="inline-flex items-center gap-2 border-2 border-zinc-800 px-5 py-2.5 rounded-xl font-bold text-sm hover:bg-white/5 transition">
                CV
              </a>
            </div>
          </div>
          
          <div className="relative w-40 h-40 sm:w-56 sm:h-56 md:w-72 md:h-72 lg:w-80 lg:h-80 bg-[#f39200] overflow-hidden animate-morph shrink-0 shadow-2xl shadow-orange-500/20 rounded-2xl mt-4 lg:mt-0 slide-in-right">
            <img src="/images/profile.jpeg" alt="Realeboha Sekhitlane" className="w-full h-full object-cover object-top" width="320" height="320" loading="eager" />
          </div>
        </section>

        {/* About Section */}
        <section id="about" className="py-16 md:py-20 px-5 md:px-[10%] bg-black/20 reveal">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-10">
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-black tracking-tighter mb-3 fade-in-up">
                About <span className="text-[#f39200]">Me</span>
              </h2>
              <p className="text-zinc-400 text-sm md:text-base max-w-2xl mx-auto">
                Get to know me better and how to reach out
              </p>
            </div>

            <div className="grid lg:grid-cols-2 gap-10">
              {/* About Text */}
              <div className="space-y-4 fade-in-up delay-200">
                <p className="text-base text-zinc-300 leading-relaxed">
                  I am <strong className="text-white">Realeboha Sekhitlane</strong>, a <strong className="text-white">Mobile Computing student at Botho University</strong> with a passion for creating impactful digital experiences.
                </p>
                <p className="text-base text-zinc-400 leading-relaxed">
                  I specialize in frontend development, Ionic app development, and technical SEO. I help businesses grow through modern web solutions and search engine optimization.
                </p>
              </div>

              {/* Contact Card */}
              <div className="bg-white/5 rounded-2xl p-6 border border-white/10 hover:border-[#f39200]/30 transition-all fade-in-up delay-300 card-hover">
                <h3 className="text-xl font-black text-white mb-4 flex items-center gap-2">
                  <Mail size={18} className="text-[#f39200] float-icon" />
                  Contact Information
                </h3>
                <div className="space-y-4">
                  <div className="flex items-center gap-3 p-3 bg-[#f39200]/5 rounded-xl border border-white/5">
                    <Phone size={18} className="text-[#f39200]" />
                    <div>
                      <p className="text-xs text-zinc-500">Phone</p>
                      <a href="tel:+26662803236" className="text-white hover:text-[#f39200] transition text-sm font-medium">+266 6280 3236</a>
                    </div>
                  </div>
                  <div className="flex items-center gap-3 p-3 bg-[#f39200]/5 rounded-xl border border-white/5">
                    <Mail size={18} className="text-[#f39200]" />
                    <div>
                      <p className="text-xs text-zinc-500">Email</p>
                      <a href="mailto:realebohasekhitlane51@gmail.com" className="text-white hover:text-[#f39200] transition text-sm font-medium break-all">realebohasekhitlane51@gmail.com</a>
                    </div>
                  </div>
                  <div className="flex items-center gap-3 p-3 bg-[#f39200]/5 rounded-xl border border-white/5">
                    <Globe size={18} className="text-[#f39200]" />
                    <div>
                      <p className="text-xs text-zinc-500">Availability</p>
                      <p className="text-green-400 text-sm font-medium">Open for opportunities</p>
                    </div>
                  </div>
                </div>
                <div className="mt-5 pt-4 border-t border-white/10">
                  <div className="flex gap-4 justify-start">
                    <a href="https://www.linkedin.com/in/realeboha-sekhitlane" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-zinc-400 hover:text-[#f39200] transition text-sm">
                      <Linkedin size={16} /> LinkedIn
                    </a>
                    <a href="https://github.com/Readesign638" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-zinc-400 hover:text-[#f39200] transition text-sm">
                      <Github size={16} /> GitHub
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Projects Section */}
        <section id="projects" className="py-16 md:py-20 px-5 md:px-[10%] bg-black/30 reveal">
          <div className="text-center mb-10 md:mb-12">
            <div className="inline-flex items-center gap-2 bg-[#f39200]/10 px-4 py-2 rounded-full mb-4 fade-in-up">
              <FolderGit2 size={14} className="text-[#f39200] float-icon" />
              <span className="text-[#f39200] text-[11px] font-black uppercase tracking-wider">My Work</span>
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-black tracking-tighter mb-3 fade-in-up delay-100">
              Featured <span className="text-[#f39200]">Projects</span>
            </h2>
            <p className="text-zinc-400 max-w-2xl mx-auto text-sm md:text-base fade-in-up delay-200">
              A showcase of my web development, mobile apps, and design work
            </p>
          </div>

          <div className="space-y-14">
            
            {/* Web Development Projects */}
            <div>
              <div className="flex items-center gap-3 mb-5 slide-in-left">
                <Globe2 className="text-[#f39200]" size={20} />
                <h3 className="text-lg md:text-xl font-black uppercase tracking-wider text-zinc-300">Web Development</h3>
                <div className="flex-1 h-px bg-gradient-to-r from-[#f39200]/30 to-transparent"></div>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
                <div className="fade-in-scale delay-100 card-hover"><ProjectCard title="Comfort Digital" desc="Corporate web solutions with technical SEO optimization." liveLink="https://comfortdigital.co.za/" img="/images/OIP.jfif" tech={["WordPress", "SEO"]} type="Web" /></div>
                <div className="fade-in-scale delay-200 card-hover"><ProjectCard title="Skyio Weather" desc="Real-time global weather forecasting web app." liveLink="https://skyio-weather-app.vercel.app/" repoLink="https://github.com/Readesign638/skyio-weather-app" img="/images/weather_b91120.jfif" tech={["React", "API"]} type="Web" /></div>
                <div className="fade-in-scale delay-300 card-hover"><ProjectCard title="SEO Pro Visibility" desc="SEO analysis tool for website optimization." liveLink="https://seopro-visibility.netlify.app/" repoLink="https://github.com/Readesign638/SEOPro" img="/images/SEO.PNG" tech={["SEO", "Analytics"]} type="Web" /></div>
                <div className="fade-in-scale delay-400 card-hover"><ProjectCard title="Dentist Website" desc="Custom dental practice website." img="/images/dental.jfif" tech={["WordPress", "UX"]} type="Web" /></div>
              </div>
            </div>

            {/* Mobile & UI/UX Design */}
            <div>
              <div className="flex items-center gap-3 mb-5 slide-in-left">
                <Smartphone className="text-[#f39200]" size={20} />
                <h3 className="text-lg md:text-xl font-black uppercase tracking-wider text-zinc-300">Mobile & UI/UX Design</h3>
                <div className="flex-1 h-px bg-gradient-to-r from-[#f39200]/30 to-transparent"></div>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
                <div className="fade-in-scale delay-100 card-hover"><ProjectCard title="LandConnect" desc="Ionic real estate app with Firebase - property listings & search." liveLink="https://land-connect.vercel.app/" repoLink="https://github.com/Readesign638/LandConnect" img="/images/Capture.PNG" tech={["Ionic", "Firebase"]} type="Mobile" /></div>
                <div className="fade-in-scale delay-200 card-hover"><ProjectCard title="KhotsoPay" desc="Mobile payment solution for small businesses." liveLink="https://khotso-pay-dashboard.vercel.app/" repoLink="https://github.com/Readesign638/khotso-pay-dashboard" img="/images/khotso.PNG" tech={["React Native", "Firebase"]} type="Mobile" /></div>
                <div className="fade-in-scale delay-300 card-hover"><ProjectCard title="E-commerce Prototype" desc="High-fidelity electronics app prototype with interactive flows." liveLink="https://www.figma.com/proto/f4kYUCB6gKwogrCnqOWk83/Electronics-E-Commerce-App?node-id=136-104" img="/images/prototype design.PNG" tech={["Figma", "UI/UX"]} type="Design" /></div>
              </div>
            </div>

          </div>
        </section>

        {/* Education Section */}
        <section id="education" className="py-16 md:py-20 px-5 md:px-[10%] bg-black/20 reveal">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-10 md:mb-12">
              <div className="inline-flex items-center gap-2 bg-[#f39200]/10 px-4 py-2 rounded-full mb-4 fade-in-up">
                <GraduationCap size={14} className="text-[#f39200] float-icon" />
                <span className="text-[#f39200] text-[11px] font-black uppercase tracking-wider">Academic Background</span>
              </div>
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-black tracking-tighter fade-in-up delay-100">
                <span className="text-[#f39200]">Education</span>
              </h2>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-white/5 rounded-2xl p-6 border border-white/10 hover:border-[#f39200]/30 transition-all fade-in-up delay-200 card-hover">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-12 h-12 bg-[#f39200]/10 rounded-xl flex items-center justify-center">
                    <GraduationCap size={24} className="text-[#f39200]" />
                  </div>
                  <div>
                    <h3 className="text-xl font-black text-white">Bachelor of Science</h3>
                    <p className="text-[#f39200] text-sm font-bold">Mobile Computing</p>
                  </div>
                </div>
                <p className="text-zinc-400 text-sm mb-2">Botho University</p>
                <p className="text-zinc-500 text-xs mb-3">2022 - 2027</p>
                <p className="text-sm text-zinc-400 leading-relaxed">
                  Focusing on mobile application development, web technologies, and software engineering principles.
                </p>
              </div>

              <div className="bg-white/5 rounded-2xl p-6 border border-white/10 hover:border-[#f39200]/30 transition-all fade-in-up delay-300 card-hover">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-12 h-12 bg-[#f39200]/10 rounded-xl flex items-center justify-center">
                    <Code2 size={24} className="text-[#f39200]" />
                  </div>
                  <div>
                    <h3 className="text-xl font-black text-white">Frontend Development</h3>
                    <p className="text-[#f39200] text-sm font-bold">Internship</p>
                  </div>
                </div>
                <p className="text-zinc-400 text-sm mb-2">Codveda Technologies</p>
                <p className="text-zinc-500 text-xs mb-3">October 2025 - November 2025</p>
                <p className="text-sm text-zinc-400 leading-relaxed">
                  Completed intensive internship focused on React.js, Bootstrap, Tailwind CSS, and API integration.
                </p>
              </div>
            </div>
          </div>
        </section>

       {/* Certifications Section */}
<section id="certificates" className="py-16 md:py-20 px-5 md:px-[10%] bg-black/30 reveal">
  <div className="max-w-6xl mx-auto">
    <div className="text-center mb-10 md:mb-12">
      <div className="inline-flex items-center gap-2 bg-[#f39200]/10 px-4 py-2 rounded-full mb-4 fade-in-up">
        <Award size={14} className="text-[#f39200] float-icon" />
        <span className="text-[#f39200] text-[11px] font-black uppercase tracking-wider">Professional Development</span>
      </div>
      <h2 className="text-3xl sm:text-4xl md:text-5xl font-black tracking-tighter mb-3 fade-in-up delay-100">
        Certifications & <span className="text-[#f39200]">Achievements</span>
      </h2>
      <p className="text-zinc-400 text-sm md:text-base max-w-2xl mx-auto fade-in-up delay-200">
        Industry-recognized certifications that validate my skills and knowledge
      </p>
    </div>

    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
      
      {/* NEW: Virtual Internship Program Certificate */}
      <div className="fade-in-scale delay-100 card-hover">
        <CertCard 
          title="Virtual Internship Program" 
          issuer="Virtual Internships" 
          date="July - September 2025" 
          skills={["360 Hours", "Remote Work", "Group Projects"]} 
          icon="code" 
          badge="Completion"
        />
      </div>
      
      {/* NEW: Career Webinars Explorer Level */}
      <div className="fade-in-scale delay-150 card-hover">
        <CertCard 
          title="Career Webinars - Explorer Level" 
          issuer="Virtual Internships" 
          date="2025" 
          skills={["AI Transformation", "Career Options", "Time Management"]} 
          icon="marketing" 
          badge="3 Webinars"
        />
      </div>
      
      <div className="fade-in-scale delay-200 card-hover">
        <CertCard 
          title="WordPress Junior Maintainer" 
          issuer="Comfort Digital" 
          date="May 20, 2026" 
          skills={["WordPress Admin", "Security", "SEO"]} 
          icon="wordpress" 
        />
      </div>
      
      <div className="fade-in-scale delay-250 card-hover">
        <CertCard 
          title="Mentorship Program - Cycle 3" 
          issuer="She Code Africa x HP" 
          date="March 2026" 
          skills={["Leadership", "Mobile Dev", "Networking"]} 
          icon="users" 
          badge="Mentee" 
        />
      </div>
      
      <div className="fade-in-scale delay-300 card-hover">
        <CertCard 
          title="Basics of Digital Marketing" 
          issuer="UniAthena x Cambridge" 
          date="April 17, 2025" 
          skills={["Digital Marketing", "SEO"]} 
          icon="marketing" 
        />
      </div>
      
      <div className="fade-in-scale delay-350 card-hover">
        <CertCard 
          title="Frontend Development Internship" 
          issuer="Codveda Technologies" 
          date="November 23, 2025" 
          skills={["React.js", "API Integration"]} 
          icon="code" 
        />
      </div>
      
      <div className="fade-in-scale delay-400 card-hover">
        <CertCard 
          title="Bridgia Certification" 
          issuer="Bridgia" 
          date="2025" 
          skills={["Career Readiness"]} 
          icon="bridge" 
        />
      </div>
      
      <div className="fade-in-scale delay-450 card-hover">
        <CertCard 
          title="Google Skillshop Award" 
          issuer="Google" 
          date="2025" 
          skills={["Digital Skills"]} 
          icon="google" 
          note="Login required" 
        />
      </div>
      
    </div>
  </div>
</section>
        {/* Skills Section */}
        <section id="skills-exp" className="py-16 md:py-20 px-5 md:px-[10%] reveal">
          <div className="text-center mb-10 md:mb-12">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-black tracking-tighter mb-3 fade-in-up">
              Technical <span className="text-[#f39200]">Skills</span>
            </h2>
            <p className="text-zinc-400 text-sm md:text-base fade-in-up delay-100">Technologies and tools I work with</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="bg-white/5 rounded-2xl p-6 border border-white/10 hover:border-[#f39200]/30 transition-all fade-in-up delay-200 card-hover">
              <div className="flex items-center gap-3 mb-4">
                <Code2 className="text-[#f39200] float-icon" size={22} />
                <h3 className="text-lg font-black">Frontend</h3>
              </div>
              <div className="space-y-3">
                {[
                  { name: "React.js", level: 45, experience: "Intermediate" },
                  { name: "JavaScript/TypeScript", level: 50, experience: "Building" },
                  { name: "HTML5/CSS3", level: 70, experience: "Proficient" },
                  { name: "Tailwind CSS", level: 65, experience: "Proficient" }
                ].map((skill) => (
                  <div key={skill.name}>
                    <div className="flex justify-between text-sm mb-1">
                      <span className="text-zinc-300">{skill.name}</span>
                      <span className="text-[#f39200] text-xs">{skill.experience}</span>
                    </div>
                    <div className="w-full h-1.5 bg-white/10 rounded-full overflow-hidden">
                      <div className="h-full bg-[#f39200] rounded-full transition-all duration-500" style={{ width: `${skill.level}%` }}></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-white/5 rounded-2xl p-6 border border-white/10 hover:border-[#f39200]/30 transition-all fade-in-up delay-300 card-hover">
              <div className="flex items-center gap-3 mb-4">
                <Smartphone className="text-[#f39200] float-icon" size={22} />
                <h3 className="text-lg font-black">Mobile</h3>
              </div>
              <div className="space-y-3">
                {[
                  { name: "Ionic Framework", level: 60, experience: "Regular" },
                  { name: "Capacitor/Cordova", level: 55, experience: "Regular" },
                  { name: "React Native", level: 40, experience: "Learning" },
                  { name: "Firebase", level: 60, experience: "Regular" }
                ].map((skill) => (
                  <div key={skill.name}>
                    <div className="flex justify-between text-sm mb-1">
                      <span className="text-zinc-300">{skill.name}</span>
                      <span className="text-[#f39200] text-xs">{skill.experience}</span>
                    </div>
                    <div className="w-full h-1.5 bg-white/10 rounded-full overflow-hidden">
                      <div className="h-full bg-[#f39200] rounded-full" style={{ width: `${skill.level}%` }}></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-white/5 rounded-2xl p-6 border border-white/10 hover:border-[#f39200]/30 transition-all fade-in-up delay-400 card-hover">
              <div className="flex items-center gap-3 mb-4">
                <Globe className="text-[#f39200] float-icon" size={22} />
                <h3 className="text-lg font-black">SEO & CMS</h3>
              </div>
              <div className="space-y-3">
                {[
                  { name: "WordPress", level: 80, experience: "Advanced" },
                  { name: "Technical SEO", level: 75, experience: "Proficient" },
                  { name: "RankMath/Yoast", level: 80, experience: "Advanced" },
                  { name: "Google Analytics", level: 65, experience: "Regular" }
                ].map((skill) => (
                  <div key={skill.name}>
                    <div className="flex justify-between text-sm mb-1">
                      <span className="text-zinc-300">{skill.name}</span>
                      <span className="text-[#f39200] text-xs">{skill.experience}</span>
                    </div>
                    <div className="w-full h-1.5 bg-white/10 rounded-full overflow-hidden">
                      <div className="h-full bg-[#f39200] rounded-full" style={{ width: `${skill.level}%` }}></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Tools & Deployment */}
          <div className="mt-8 fade-in-up delay-500">
            <div className="bg-white/5 rounded-2xl p-6 border border-white/10 card-hover">
              <div className="flex items-center gap-3 mb-4">
                <Database className="text-[#f39200] float-icon" size={22} />
                <h3 className="text-lg font-black">Tools & Deployment</h3>
              </div>
              <div className="flex flex-wrap gap-2">
                {["Git/GitHub", "VS Code", "Figma", "Chrome DevTools", "Postman", "npm/yarn", "Vite", "WordPress CLI", "Vercel", "Netlify"].map((tool) => (
                  <span key={tool} className="px-3 py-1.5 bg-[#f39200]/10 border border-[#f39200]/20 rounded-full text-xs font-medium text-[#f39200]">
                    {tool}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Experience Timeline */}
        <section className="py-12 md:py-16 px-5 md:px-[10%] bg-black/20 border-y border-white/5 reveal">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-black tracking-tighter text-center mb-10 fade-in-up">
              Work <span className="text-[#f39200]">Experience</span>
            </h2>
            <div className="border-l-2 border-white/10 pl-6 space-y-8">
              <TimelineItem date="July 2025 - Jan 2026" title="Junior WordPress Developer" company="Comfort Digital" desc="WordPress development, site audits, technical SEO. Contributed to 2025 Digital Marketing ROI White Paper." hasLink={true} linkUrl="https://comfortdigital.co.za/digital-marketing-roi-white-paper-2025/" />
              <TimelineItem date="October - November 2025" title="Frontend Development Intern" company="Codveda Technology" desc="Completed intensive internship. Gained practical experience in React.js, Bootstrap, Tailwind CSS, and API integration." />
              <TimelineItem date="March 2026" title="She Code Africa Mentee" company="She Code Africa x HP" desc="Selected for Cycle 3 mentorship program. Developed KhotsoPay, connected with women in tech across Africa, and gained leadership skills." />
              <TimelineItem date="May 2026" title="WordPress Junior Maintainer" company="Comfort Digital" desc="Certified in WordPress website administration, maintenance, security best practices, SEO implementation, and client support." />
            </div>
          </div>
        </section>

        {/* Contact Form */}
        <section id="contact-form" className="py-16 md:py-20 px-5 md:px-[10%] reveal">
          <div className="max-w-3xl mx-auto text-center">
            <h3 className="text-3xl sm:text-4xl md:text-5xl font-black mb-8 fade-in-up">Send a <span className="text-[#f39200]">Message</span></h3>
            <form action="https://formspree.io/f/xzdakknq" method="POST" className="space-y-5 text-left">
              <input type="text" name="_gotcha" style={{ display: 'none' }} />
              <input type="hidden" name="_subject" value="Portfolio Message" />
              <div className="grid sm:grid-cols-2 gap-5 fade-in-up delay-100">
                <input type="text" name="name" required className="w-full bg-white/5 border border-white/10 rounded-xl px-5 py-3 outline-none focus:border-[#f39200] transition text-sm" placeholder="Your Name" />
                <input type="email" name="email" required className="w-full bg-white/5 border border-white/10 rounded-xl px-5 py-3 outline-none focus:border-[#f39200] transition text-sm" placeholder="Your Email" />
              </div>
              <textarea name="message" required rows="5" className="w-full bg-white/5 border border-white/10 rounded-xl px-5 py-3 outline-none focus:border-[#f39200] transition text-sm fade-in-up delay-200" placeholder="Your Message..."></textarea>
              <button type="submit" className="w-full bg-[#f39200] text-black font-black py-4 rounded-xl hover:scale-[1.01] transition text-sm btn-pulse fade-in-up delay-300">SEND MESSAGE</button>
            </form>
          </div>
        </section>

      </main>

      {/* Footer */}
      <footer className="py-8 text-center border-t border-white/5 reveal">
        <div className="max-w-4xl mx-auto px-5">
          <div className="grid md:grid-cols-3 gap-6 mb-6 text-left">
            {/* Contact Column */}
            <div className="fade-in-up delay-100">
              <h4 className="text-[#f39200] font-black text-sm uppercase tracking-wider mb-3">Contact</h4>
              <div className="space-y-2 text-sm">
                <a href="tel:+26662803236" className="text-zinc-400 hover:text-[#f39200] transition flex items-center gap-2">
                  <Phone size={14} /> +266 6280 3236
                </a>
                <a href="mailto:realebohasekhitlane51@gmail.com" className="text-zinc-400 hover:text-[#f39200] transition flex items-center gap-2 break-all">
                  <Mail size={14} /> realebohasekhitlane51@gmail.com
                </a>
                <p className="text-zinc-400 flex items-center gap-2">
                  <MapPin size={14} /> Lesotho
                </p>
              </div>
            </div>
            
            {/* Quick Links Column */}
            <div className="fade-in-up delay-200">
              <h4 className="text-[#f39200] font-black text-sm uppercase tracking-wider mb-3">Quick Links</h4>
              <div className="space-y-2 text-sm">
                <a href="#home" className="text-zinc-400 hover:text-[#f39200] transition block">Home</a>
                <a href="#projects" className="text-zinc-400 hover:text-[#f39200] transition block">Projects</a>
                <a href="#skills-exp" className="text-zinc-400 hover:text-[#f39200] transition block">Skills</a>
              </div>
            </div>
            
            {/* Social Column */}
            <div className="fade-in-up delay-300">
              <h4 className="text-[#f39200] font-black text-sm uppercase tracking-wider mb-3">Connect</h4>
              <div className="space-y-2 text-sm">
                <a href="https://www.linkedin.com/in/realeboha-sekhitlane" target="_blank" rel="noopener noreferrer" className="text-zinc-400 hover:text-[#f39200] transition flex items-center gap-2">
                  <Linkedin size={14} /> LinkedIn
                </a>
                <a href="https://github.com/Readesign638" target="_blank" rel="noopener noreferrer" className="text-zinc-400 hover:text-[#f39200] transition flex items-center gap-2">
                  <Github size={14} /> GitHub
                </a>
              </div>
            </div>
          </div>
          
          <div className="border-t border-white/10 pt-6">
            <div className="text-zinc-600 font-bold tracking-widest text-[9px] uppercase">
              &copy; {new Date().getFullYear()} REALEBOHA SEKHITLANE. ALL RIGHTS RESERVED.
            </div>
          </div>
        </div>
      </footer>

      <style dangerouslySetInnerHTML={{
        __html: `
          @keyframes wave { 0%, 100% { transform: rotate(0deg); } 25% { transform: rotate(20deg); } 75% { transform: rotate(-10deg); } }
          .animate-wave { display: inline-block; animation: wave 1s ease-in-out infinite; transform-origin: 70% 70%; }
          
          @keyframes fadeInUp {
            from { opacity: 0; transform: translateY(30px); }
            to { opacity: 1; transform: translateY(0); }
          }
          .fade-in-up { animation: fadeInUp 0.8s ease-out forwards; }
          
          @keyframes fadeInScale {
            from { opacity: 0; transform: scale(0.95); }
            to { opacity: 1; transform: scale(1); }
          }
          .fade-in-scale { animation: fadeInScale 0.5s ease-out forwards; }
          
          @keyframes slideInLeft {
            from { opacity: 0; transform: translateX(-40px); }
            to { opacity: 1; transform: translateX(0); }
          }
          .slide-in-left { animation: slideInLeft 0.6s ease-out forwards; }
          
          @keyframes slideInRight {
            from { opacity: 0; transform: translateX(40px); }
            to { opacity: 1; transform: translateX(0); }
          }
          .slide-in-right { animation: slideInRight 0.6s ease-out forwards; }
          
          @keyframes btnPulse {
            0% { box-shadow: 0 0 0 0 rgba(243, 146, 0, 0.4); }
            70% { box-shadow: 0 0 0 10px rgba(243, 146, 0, 0); }
            100% { box-shadow: 0 0 0 0 rgba(243, 146, 0, 0); }
          }
          .btn-pulse { animation: btnPulse 2s infinite; }
          .btn-pulse:hover { animation: none; }
          
          @keyframes float {
            0% { transform: translateY(0px); }
            50% { transform: translateY(-5px); }
            100% { transform: translateY(0px); }
          }
          .float-icon { animation: float 3s ease-in-out infinite; }
          
          .card-hover { transition: all 0.3s ease; }
          .card-hover:hover { transform: translateY(-8px); box-shadow: 0 20px 40px rgba(243, 146, 0, 0.15); }
          
          .reveal { opacity: 0; transform: translateY(30px); transition: all 0.8s ease-out; }
          .reveal.active { opacity: 1; transform: translateY(0); }
          
          .delay-100 { animation-delay: 0.1s; }
          .delay-150 { animation-delay: 0.15s; }
          .delay-200 { animation-delay: 0.2s; }
          .delay-250 { animation-delay: 0.25s; }
          .delay-300 { animation-delay: 0.3s; }
          .delay-350 { animation-delay: 0.35s; }
          .delay-400 { animation-delay: 0.4s; }
          .delay-500 { animation-delay: 0.5s; }
          
          @media (prefers-reduced-motion: reduce) {
            .animate-wave, .fade-in-up, .fade-in-scale, .slide-in-left, .slide-in-right, .btn-pulse, .float-icon, .card-hover, .reveal { animation: none; transition: none; }
            .reveal { opacity: 1; transform: none; }
          }
        `
      }} />
    </div>
  );
}

// ProjectCard Component
function ProjectCard({ title, desc, liveLink, repoLink, img, tech = [], type = "Project" }) {
  return (
    <div className="group bg-white/5 rounded-xl overflow-hidden border border-white/10 hover:border-[#f39200]/40 transition-all duration-300 hover:-translate-y-1">
      <div className="relative aspect-[16/10] overflow-hidden bg-zinc-800">
        <img src={img} className="w-full h-full object-cover group-hover:scale-105 transition duration-500" alt={title} loading="lazy" />
        <div className="absolute top-2 right-2 bg-black/70 backdrop-blur-sm rounded-full px-2 py-0.5">
          <span className="text-[8px] font-black uppercase text-[#f39200]">{type}</span>
        </div>
      </div>
      <div className="p-4">
        <h4 className="text-[#f39200] font-black text-sm uppercase tracking-wider mb-1">{title}</h4>
        {tech.length > 0 && (
          <div className="flex flex-wrap gap-1.5 mb-2">
            {tech.map((tag, i) => (
              <span key={i} className="text-[8px] font-black uppercase bg-[#f39200]/10 text-[#f39200] px-1.5 py-0.5 rounded">{tag}</span>
            ))}
          </div>
        )}
        <p className="text-[11px] text-zinc-400 leading-relaxed mb-3 line-clamp-2">{desc}</p>
        <div className="flex items-center gap-3 pt-2 border-t border-white/10">
          {liveLink && (
            <a href={liveLink} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1 text-[9px] font-black uppercase tracking-wider text-white hover:text-[#f39200] transition">
              Live Demo <ExternalLink size={10} />
            </a>
          )}
          {repoLink && (
            <a href={repoLink} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1 text-[9px] font-black uppercase tracking-wider text-zinc-500 hover:text-white transition">
              Code <Code2 size={9} />
            </a>
          )}
        </div>
      </div>
    </div>
  );
}

// CertCard Component
function CertCard({ title, issuer, date, skills, icon, badge, note }) {
  const icons = {
    wordpress: <Globe size={16} />,
    users: <Users size={16} />,
    marketing: <BookOpen size={16} />,
    code: <Code2 size={16} />,
    bridge: <Award size={16} />,
    google: <Globe2 size={16} />
  };
  
  return (
    <div className="group bg-white/5 rounded-xl p-4 border border-white/10 hover:border-[#f39200]/30 transition-all duration-300 hover:-translate-y-1">
      <div className="flex items-start justify-between mb-2">
        <div className="flex items-center gap-2">
          <div className="text-[#f39200]">{icons[icon] || <Award size={16} />}</div>
          <span className="text-[#f39200] text-[9px] font-black uppercase tracking-wider">{issuer.split(' ')[0]}</span>
        </div>
        {badge && <span className="text-[7px] font-black bg-[#f39200]/20 text-[#f39200] px-2 py-0.5 rounded-full">{badge}</span>}
      </div>
      <h4 className="text-sm font-black text-white mb-1">{title}</h4>
      <p className="text-[10px] text-zinc-400 mb-1.5">{issuer}</p>
      <p className="text-[9px] text-[#f39200] font-bold mb-2">{date}</p>
      <div className="flex flex-wrap gap-1 mb-2">
        {skills.map((skill, i) => (
          <span key={i} className="text-[7px] font-black bg-white/10 text-zinc-400 px-1.5 py-0.5 rounded">{skill}</span>
        ))}
      </div>
      {note && <p className="text-[6px] text-zinc-500 mt-1">{note}</p>}
    </div>
  );
}

// TimelineItem Component
function TimelineItem({ date, title, company, desc, hasLink, linkUrl }) {
  return (
    <div className="relative group pl-4">
      <div className="absolute -left-[9px] top-1.5 w-2.5 h-2.5 bg-[#f39200] rounded-full shadow-[0_0_8px_#f39200] group-hover:scale-125 transition" aria-hidden="true" />
      <div className="text-[#f39200] font-black text-[10px] mb-1 tracking-wider">{date}</div>
      <div className="text-base md:text-lg font-black text-white mb-0.5">{title}</div>
      <span className="text-zinc-500 italic font-bold text-xs mb-2 block">{company}</span>
      <p className="text-xs text-zinc-400 leading-relaxed">
        {desc}
        {hasLink && linkUrl && (
          <a href={linkUrl} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1 text-[#f39200] hover:text-white text-[10px] mt-1 font-black uppercase tracking-wider">
            View <ExternalLink size={10} />
          </a>
        )}
      </p>
    </div>
  );
}