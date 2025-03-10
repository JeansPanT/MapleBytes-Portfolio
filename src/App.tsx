import React from 'react';
import { useInView } from 'react-intersection-observer';
import { motion, useScroll, useSpring } from 'framer-motion';
import { Github, Linkedin, Laptop, Server, Smartphone, Rocket, Zap, Users, Home, Phone, FolderGit2, Braces, Menu, X } from 'lucide-react';
import { CustomCursor } from './components/CustomCursor';
import MapleBytesLogo from './components/MapleBytesLogo';

function FadeInSection({ children, delay = 0 }: { children: React.ReactNode; delay?: number }) {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 20 }}
      animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
      transition={{ duration: 0.6, delay: delay / 1000 }}
    >
      {children}
    </motion.div>
  );
}

function App() {
  const { scrollYProgress } = useScroll();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = React.useState(false);
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });

  return (
    <div className="min-h-screen bg-black text-white">
      <CustomCursor />

      {/* Improved progress bar with glow effect */}
      <motion.div
        className="fixed top-0 left-0 right-0 h-1 bg-[#4ECCA3] origin-left z-50 shadow-[0_0_8px_#4ECCA3]"
        style={{ scaleX }}
      />

      {/* Navigation Bar with glass morphism effect */}
      <nav className="fixed top-0 w-full z-40 py-6 px-5 backdrop-blur-sm bg-black/20">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          {/* Left Section: Logo (text hidden on mobile) */}
          <div className="flex items-center space-x-3">
            <MapleBytesLogo className="w-32 h-32 md:w-24 md:h-24" fill="#4ECCA3" />
            <span className="hidden md:block text-3xl font-bold">
              <span className="text-white">Maple</span><span className="text-[#4ECCA3]">Bytes</span>
            </span>
          </div>

          {/* Desktop Navigation (visible on md and up) */}
          <div className="hidden md:flex items-center space-x-8">
            <div className="flex items-center backdrop-blur-md bg-black/30 rounded-full px-8 py-3 border border-[#4ECCA3]/20">
              <motion.a
                href="#home"
                className="px-4 hover:text-[#4ECCA3] transition-colors flex items-center space-x-2"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
              >
                <Home className="w-4 h-4" />
                <span>Home</span>
              </motion.a>
              <motion.a
                href="#services"
                className="px-4 hover:text-[#4ECCA3] transition-colors flex items-center space-x-2"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
              >
                <Server className="w-4 h-4" />
                <span>Services</span>
              </motion.a>
              <motion.a
                href="#projects"
                className="px-4 hover:text-[#4ECCA3] transition-colors flex items-center space-x-2"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
              >
                <FolderGit2 className="w-4 h-4" />
                <span>Projects</span>
              </motion.a>
              <motion.a
                href="#about"
                className="px-4 hover:text-[#4ECCA3] transition-colors flex items-center space-x-2"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
              >
                <Users className="w-4 h-4" />
                <span>About Us</span>
              </motion.a>
              <motion.a
                href="#contact"
                className="px-4 hover:text-[#4ECCA3] transition-colors flex items-center space-x-2"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
              >
                <Phone className="w-4 h-4" />
                <span>Contact</span>
              </motion.a>
            </div>
            <div className="flex items-center space-x-4">
              <motion.a
                href="#"
                className="hover:text-[#4ECCA3] transition-colors"
                whileHover={{ scale: 1.1, color: '#4ECCA3' }}
                whileTap={{ scale: 0.95 }}
              >
                <Github className="w-6 h-6" />
              </motion.a>
              <motion.a
                href="#"
                className="hover:text-[#4ECCA3] transition-colors"
                whileHover={{ scale: 1.1, color: '#4ECCA3' }}
                whileTap={{ scale: 0.95 }}
              >
                <Linkedin className="w-6 h-6" />
              </motion.a>
            </div>
          </div>

          {/* Mobile Hamburger Icon (visible on mobile) */}
          <div className="flex md:hidden">
            <motion.button 
              onClick={() => setIsMobileMenuOpen(true)}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
            >
              <Menu className="w-8 h-8 text-[#4ECCA3]" />
            </motion.button>
          </div>
        </div>
      </nav>

      {/* Enhanced mobile menu with animations */}
      {isMobileMenuOpen && (
        <motion.div 
          className="fixed inset-0 bg-black/95 z-50 flex flex-col items-center justify-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          <motion.button
            onClick={() => setIsMobileMenuOpen(false)}
            className="absolute top-4 right-4"
            whileHover={{ scale: 1.1, color: '#4ECCA3' }}
            whileTap={{ scale: 0.95 }}
          >
            <X className="w-8 h-8 text-white" />
          </motion.button>
          <div className="flex flex-col items-center space-y-8">
            {['home', 'services', 'projects', 'about', 'contact'].map((item, index) => (
              <motion.a
                key={item}
                href={`#${item}`}
                onClick={() => setIsMobileMenuOpen(false)}
                className="text-2xl hover:text-[#4ECCA3] transition-colors"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ scale: 1.1, x: 5 }}
              >
                {item.charAt(0).toUpperCase() + item.slice(1)}
              </motion.a>
            ))}
          </div>
        </motion.div>
      )}

      {/* Hero Section with enhanced video backdrop */}
      <div id="home" className="relative min-h-screen flex flex-col items-center justify-center px-4 pt-16 overflow-hidden">
        {/* Video Background with overlay */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute inset-0 bg-black/60 z-10"></div>
          <video
            autoPlay
            muted
            loop
            playsInline
            className="absolute w-full h-full object-cover"
            src="https://res.cloudinary.com/douyfrapo/video/upload/v1741596289/animation_video_2_bj6szk.mp4"
          />
          {/* Additional gradient overlay */}
          <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-transparent to-black z-10"></div>
          
          {/* Animated particles effect */}
          <div className="particle-container">
            {Array.from({ length: 20 }).map((_, i) => (
              <div 
                key={i} 
                className="absolute w-2 h-2 rounded-full bg-[#4ECCA3]/30"
                style={{
                  top: `${Math.random() * 100}%`,
                  left: `${Math.random() * 100}%`,
                  animation: `float ${3 + Math.random() * 7}s linear infinite`,
                  animationDelay: `${Math.random() * 5}s`
                }}
              ></div>
            ))}
          </div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="relative z-20"
        >
          <h1 className="text-5xl sm:text-6xl md:text-7xl font-bold text-center max-w-4xl mb-2">
            Where <span className="text-[#4ECCA3]">Vision</span> Meets <span className="text-[#4ECCA3]">Code</span>
          </h1>
          {/* Added animated underline */}
          <motion.div 
            className="h-1 bg-[#4ECCA3] w-32 mx-auto mt-2"
            initial={{ width: 0 }}
            animate={{ width: 128 }}
            transition={{ delay: 0.5, duration: 1 }}
          />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="relative z-20"
        >
          <p className="mt-6 text-lg md:text-xl text-gray-300 text-center max-w-2xl">
            We're a dynamic team of software enthusiasts crafting exceptional digital experiences.
            From desktop applications to mobile solutions, we bring your vision to life.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mt-12 flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4 relative z-20"
        >
          <motion.button
            className="px-6 py-3 md:px-8 md:py-3 bg-[#4ECCA3] text-black rounded-full font-medium hover:bg-[#3db389] transition-colors shadow-lg shadow-[#4ECCA3]/20"
            whileHover={{ scale: 1.05, boxShadow: '0 0 15px rgba(78, 204, 163, 0.5)' }}
            whileTap={{ scale: 0.95 }}
          >
            Get in Touch
          </motion.button>
          <motion.button
            className="px-6 py-3 md:px-8 md:py-3 border border-[#4ECCA3]/30 rounded-full font-medium hover:border-[#4ECCA3] transition-colors"
            whileHover={{ scale: 1.05, borderColor: '#4ECCA3' }}
            whileTap={{ scale: 0.95 }}
          >
            View Portfolio
          </motion.button>
        </motion.div>

        <motion.div
          className="absolute bottom-10 z-20"
          animate={{ y: [0, -10, 0] }}
          transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
        >
          <Rocket className="w-6 h-6 text-[#4ECCA3]" />
        </motion.div>
      </div>

      {/* Services Section with improved card design */}
      <div className="py-24 px-4 bg-gradient-to-b from-black to-gray-900" id="services">
        <div className="max-w-7xl mx-auto">
          <FadeInSection>
            <h2 className="text-4xl font-bold text-center mb-2">
              Comprehensive <span className="text-[#4ECCA3]">Software Solutions</span>
            </h2>
            <div className="h-1 bg-[#4ECCA3] w-32 mx-auto mb-16"></div>
          </FadeInSection>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: <Laptop className="w-12 h-12 text-[#4ECCA3] mb-4" />,
                title: "Desktop Applications",
                description: "Powerful, intuitive desktop solutions that streamline your business operations."
              },
              {
                icon: <Smartphone className="w-12 h-12 text-[#4ECCA3] mb-4" />,
                title: "Mobile Development",
                description: "Cross-platform mobile apps that deliver exceptional user experiences."
              },
              {
                icon: <Server className="w-12 h-12 text-[#4ECCA3] mb-4" />,
                title: "API & Backend",
                description: "Scalable, secure backend solutions and APIs that power your applications."
              }
            ].map((service, index) => (
              <FadeInSection delay={200 * (index + 1)} key={index}>
                <motion.div 
                  className="p-8 rounded-2xl bg-gray-900/60 border border-gray-800 hover:border-[#4ECCA3] transition-all duration-300 backdrop-blur-sm"
                  whileHover={{ 
                    y: -10,
                    boxShadow: '0 10px 30px -10px rgba(78, 204, 163, 0.3)'
                  }}
                >
                  {service.icon}
                  <h3 className="text-xl font-bold mb-2">{service.title}</h3>
                  <p className="text-gray-400">{service.description}</p>
                </motion.div>
              </FadeInSection>
            ))}
          </div>
        </div>
      </div>

      {/* Projects Section with hover effects */}
      <div className="py-24 px-4 bg-black" id="projects">
        <div className="max-w-7xl mx-auto">
          <FadeInSection>
            <h2 className="text-4xl font-bold text-center mb-2">
              Our Latest <span className="text-[#4ECCA3]">Projects</span>
            </h2>
            <div className="h-1 bg-[#4ECCA3] w-32 mx-auto mb-16"></div>
          </FadeInSection>

          <div className="grid md:grid-cols-2 gap-8">
            {[
              {
                img: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2426&q=80",
                title: "E-Commerce Platform",
                description: "Modern shopping experience with React and Node.js"
              },
              {
                img: "https://images.unsplash.com/photo-1526498460520-4c246339dccb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2370&q=80",
                title: "Mobile Banking App",
                description: "Secure financial transactions on the go"
              }
            ].map((project, index) => (
              <FadeInSection delay={200 * (index + 1)} key={index}>
                <motion.div 
                  className="relative group overflow-hidden rounded-2xl border border-transparent hover:border-[#4ECCA3] transition-colors duration-300"
                  whileHover={{ scale: 1.02 }}
                >
                  <img 
                    src={project.img}
                    alt={`Project ${index + 1}`}
                    className="w-full aspect-video object-cover transform group-hover:scale-110 transition-transform duration-500"
                  />
                  {/* Improved overlay with animated border */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent flex items-end p-6 opacity-80 group-hover:opacity-100 transition-opacity duration-300">
                    <div>
                      <h3 className="text-xl font-bold mb-2 text-[#4ECCA3]">{project.title}</h3>
                      <p className="text-gray-300">{project.description}</p>
                      <motion.button 
                        className="mt-4 px-4 py-2 bg-transparent border border-[#4ECCA3] text-[#4ECCA3] rounded-full text-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                        whileHover={{ scale: 1.05, backgroundColor: 'rgba(78, 204, 163, 0.1)' }}
                      >
                        View Project
                      </motion.button>
                    </div>
                  </div>
                </motion.div>
              </FadeInSection>
            ))}
          </div>
        </div>
      </div>

      {/* About Section with improved layout */}
      <div className="py-24 px-4 bg-gradient-to-b from-gray-900 to-black" id="about">
        <div className="max-w-7xl mx-auto">
          <FadeInSection>
            <h2 className="text-4xl font-bold text-center mb-2">
              Why Choose <span className="text-[#4ECCA3]">MapleBytes</span>?
            </h2>
            <div className="h-1 bg-[#4ECCA3] w-32 mx-auto mb-16"></div>
          </FadeInSection>

          <div className="grid md:grid-cols-2 gap-12">
            {[
              [
                {
                  icon: <Zap className="w-6 h-6 text-[#4ECCA3] mt-1" />,
                  title: "Modern Tech Stack",
                  description: "We leverage cutting-edge technologies and frameworks to build future-proof solutions."
                },
                {
                  icon: <Braces className="w-6 h-6 text-[#4ECCA3] mt-1" />,
                  title: "Clean Code",
                  description: "Our commitment to code quality ensures maintainable and scalable applications."
                }
              ],
              [
                {
                  icon: <Rocket className="w-6 h-6 text-[#4ECCA3] mt-1" />,
                  title: "Agile Development",
                  description: "Rapid iterations and continuous delivery to keep your project on track."
                },
                {
                  icon: <Users className="w-6 h-6 text-[#4ECCA3] mt-1" />,
                  title: "Expert Team",
                  description: "Skilled developers and designers dedicated to your project's success."
                }
              ]
            ].map((group, groupIndex) => (
              <FadeInSection delay={200 * (groupIndex + 1)} key={groupIndex}>
                <div className="space-y-8">
                  {group.map((item, index) => (
                    <motion.div 
                      className="flex items-start space-x-4 p-6 rounded-xl bg-black/30 border border-gray-800/50 hover:border-[#4ECCA3]/30 transition-all duration-300"
                      whileHover={{ y: -5, boxShadow: '0 5px 15px -5px rgba(78, 204, 163, 0.2)' }}
                      key={index}
                    >
                      <div className="p-2 bg-gray-800/50 rounded-lg">
                        {item.icon}
                      </div>
                      <div>
                        <h3 className="text-xl font-bold mb-2">{item.title}</h3>
                        <p className="text-gray-400">{item.description}</p>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </FadeInSection>
            ))}
          </div>
        </div>
      </div>

      {/* Contact Section with improved form */}
      <div className="py-24 px-4 bg-black" id="contact">
        <div className="max-w-7xl mx-auto">
          <FadeInSection>
            <h2 className="text-4xl font-bold text-center mb-2">
              Get in <span className="text-[#4ECCA3]">Touch</span>
            </h2>
            <div className="h-1 bg-[#4ECCA3] w-32 mx-auto mb-16"></div>
          </FadeInSection>

          <div className="max-w-2xl mx-auto">
            <FadeInSection delay={200}>
              <form className="space-y-6 p-8 rounded-2xl border border-gray-800/50 backdrop-blur-sm bg-gray-900/20">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-400 mb-2">Name</label>
                    <input
                      type="text"
                      className="w-full px-4 py-3 bg-gray-800/80 border border-gray-700 rounded-lg focus:outline-none focus:border-[#4ECCA3] focus:ring-1 focus:ring-[#4ECCA3] transition-all"
                      placeholder="John Doe"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-400 mb-2">Email</label>
                    <input
                      type="email"
                      className="w-full px-4 py-3 bg-gray-800/80 border border-gray-700 rounded-lg focus:outline-none focus:border-[#4ECCA3] focus:ring-1 focus:ring-[#4ECCA3] transition-all"
                      placeholder="john@example.com"
                    />
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-400 mb-2">Message</label>
                  <textarea
                    rows={4}
                    className="w-full px-4 py-3 bg-gray-800/80 border border-gray-700 rounded-lg focus:outline-none focus:border-[#4ECCA3] focus:ring-1 focus:ring-[#4ECCA3] transition-all"
                    placeholder="Tell us about your project"
                  ></textarea>
                </div>
                <motion.button
                  type="submit"
                  className="w-full px-6 py-3 bg-[#4ECCA3] text-black rounded-lg font-medium shadow-lg shadow-[#4ECCA3]/20 hover:bg-[#3db389] transition-colors"
                  whileHover={{ scale: 1.02, boxShadow: '0 0 15px rgba(78, 204, 163, 0.3)' }}
                  whileTap={{ scale: 0.98 }}
                >
                  Send Message
                </motion.button>
              </form>
            </FadeInSection>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="py-8 px-4 border-t border-gray-800">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center">
          <div className="flex items-center space-x-2 mb-4 md:mb-0">
            <MapleBytesLogo className="w-8 h-8" fill="#4ECCA3" />
            <span className="text-lg font-bold">
              <span className="text-white">Maple</span><span className="text-[#4ECCA3]">Bytes</span>
            </span>
          </div>
          <div className="text-gray-400 text-sm">
            © {new Date().getFullYear()} MapleBytes. All rights reserved.
          </div>
        </div>
      </footer>

      {/* CSS for particle animation */}
<style>{`
  @keyframes float {
    0% {
      transform: translateY(0) scale(1);
      opacity: 0;
    }
    50% {
      opacity: 0.8;
    }
    100% {
      transform: translateY(-100vh) scale(0.5);
      opacity: 0;
    }
  }
  
  .hero-gradient {
    background: linear-gradient(to bottom, rgba(0,0,0,0.8), rgba(0,0,0,0.4));
  }
  
  .gradient-text {
    background: linear-gradient(90deg, #fff, #4ECCA3);
    -webkit-background-clip: text;
    background-clip: text;
    color: transparent;
  }
  
  .hero-video {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    object-fit: cover;
    z-index: -1;
  }
`}</style>
    </div>
  );
}

export default App;