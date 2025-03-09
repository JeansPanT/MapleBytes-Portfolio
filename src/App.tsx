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

      <motion.div
        className="fixed top-0 left-0 right-0 h-1 bg-[#4ECCA3] origin-left z-50"
        style={{ scaleX }}
      />

      {/* Navigation Bar */}
      <nav className="fixed top-0 w-full z-40 py-2 px-4">
  <div className="max-w-7xl mx-auto flex items-center justify-between">
    {/* Left Section: Logo (text hidden on mobile) */}
    <div className="flex items-center space-x-3">
      <MapleBytesLogo className="w-32 h-32 md:w-32 md:h-32" fill="#4ECCA3" />
      <span className="hidden md:block text-3xl font-bold">MapleBytes</span>
    </div>

    {/* Desktop Navigation (visible on md and up) */}
    <div className="hidden md:flex items-center space-x-8">
      <div className="flex items-center backdrop-blur-md bg-black/30 rounded-full px-12 py-3 border border-gray-800/50">
        <motion.a
          href="#home"
          className="px-6 hover:text-[#4ECCA3] transition-colors flex items-center space-x-2"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
        >
          <Home className="w-4 h-4" />
          <span>Home</span>
        </motion.a>
        <motion.a
          href="#services"
          className="px-6 hover:text-[#4ECCA3] transition-colors flex items-center space-x-2"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
        >
          <Server className="w-4 h-4" />
          <span>Services</span>
        </motion.a>
        <motion.a
          href="#projects"
          className="px-6 hover:text-[#4ECCA3] transition-colors flex items-center space-x-2"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
        >
          <FolderGit2 className="w-4 h-4" />
          <span>Projects</span>
        </motion.a>
        <motion.a
          href="#about"
          className="px-6 hover:text-[#4ECCA3] transition-colors flex items-center space-x-2"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
        >
          <Users className="w-4 h-4" />
          <span>About Us</span>
        </motion.a>
        <motion.a
          href="#contact"
          className="px-6 hover:text-[#4ECCA3] transition-colors flex items-center space-x-2"
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
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
        >
          <Github className="w-6 h-6" />
        </motion.a>
        <motion.a
          href="#"
          className="hover:text-[#4ECCA3] transition-colors"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
        >
          <Linkedin className="w-6 h-6" />
        </motion.a>
      </div>
    </div>

    {/* Mobile Hamburger Icon (visible on mobile) */}
    <div className="flex md:hidden">
      <button onClick={() => setIsMobileMenuOpen(true)}>
        <Menu className="w-10 h-10 text-white" />
      </button>
    </div>
  </div>
</nav>

{isMobileMenuOpen && (
  <div className="fixed inset-0 bg-black/90 z-50 flex flex-col items-center justify-center">
    <button
      onClick={() => setIsMobileMenuOpen(false)}
      className="absolute top-4 right-4"
    >
      <X className="w-10 h-10 text-white" />
    </button>
    <div className="flex flex-col items-center space-y-8">
      <motion.a
        href="#home"
        onClick={() => setIsMobileMenuOpen(false)}
        className="text-2xl hover:text-[#4ECCA3] transition-colors"
      >
        Home
      </motion.a>
      <motion.a
        href="#services"
        onClick={() => setIsMobileMenuOpen(false)}
        className="text-2xl hover:text-[#4ECCA3] transition-colors"
      >
        Services
      </motion.a>
      <motion.a
        href="#projects"
        onClick={() => setIsMobileMenuOpen(false)}
        className="text-2xl hover:text-[#4ECCA3] transition-colors"
      >
        Projects
      </motion.a>
      <motion.a
        href="#about"
        onClick={() => setIsMobileMenuOpen(false)}
        className="text-2xl hover:text-[#4ECCA3] transition-colors"
      >
        About Us
      </motion.a>
      <motion.a
        href="#contact"
        onClick={() => setIsMobileMenuOpen(false)}
        className="text-2xl hover:text-[#4ECCA3] transition-colors"
      >
        Contact
      </motion.a>
    </div>
  </div>
)}

      {/* Hero Section */}
      <div id="home" className="relative min-h-screen flex flex-col items-center justify-center px-4 hero-gradient pt-16 overflow-hidden">
        <video
          autoPlay
          muted
          loop
          playsInline
          className="hero-video"
          src="https://cdn.pixabay.com/vimeo/328035647/digital-20077.mp4?width=1280&hash=e5f5c9c1e9e8f1c9f8f8f8f8f8f8f8f8f8f8f8"
        />

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="relative z-10"
        >
          <h1 className="text-4xl sm:text-6xl md:text-7xl font-bold text-center max-w-4xl gradient-text">
            Where Vision Meets Code
          </h1>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="relative z-10"
        >
          <p className="mt-6 text-lg md:text-xl text-gray-400 text-center max-w-2xl">
            We're a dynamic team of software enthusiasts crafting exceptional digital experiences.
            From desktop applications to mobile solutions, we bring your vision to life.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mt-12 flex space-x-4 relative z-10"
        >
          <motion.button
            className="px-4 py-2 md:px-8 md:py-3 bg-[#4ECCA3] text-black rounded-full font-medium hover:bg-[#3db389] transition-colors"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Get in Touch
          </motion.button>
          <motion.button
            className="px-4 py-2 md:px-8 md:py-3 border border-gray-700 rounded-full font-medium hover:border-[#4ECCA3] transition-colors"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            View Portfolio
          </motion.button>
        </motion.div>

        <motion.div
          className="absolute bottom-10 z-10"
          animate={{ y: [0, -10, 0] }}
          transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
        >
          <Rocket className="w-6 h-6 text-gray-400" />
        </motion.div>
      </div>

      {/* Services Section */}
      <div className="py-24 px-4" id="services">
        <div className="max-w-7xl mx-auto">
          <FadeInSection>
            <h2 className="text-4xl font-bold text-center gradient-text mb-16">
              Comprehensive Software Solutions
            </h2>
          </FadeInSection>

          <div className="grid md:grid-cols-3 gap-8">
            <FadeInSection delay={200}>
              <div className="p-6 rounded-2xl bg-gray-900 border border-gray-800 hover:border-[#4ECCA3] transition-colors">
                <Laptop className="w-10 h-10 text-[#4ECCA3] mb-4" />
                <h3 className="text-xl font-bold mb-2">Desktop Applications</h3>
                <p className="text-gray-400">
                  Powerful, intuitive desktop solutions that streamline your business operations.
                </p>
              </div>
            </FadeInSection>

            <FadeInSection delay={400}>
              <div className="p-6 rounded-2xl bg-gray-900 border border-gray-800 hover:border-[#4ECCA3] transition-colors">
                <Smartphone className="w-10 h-10 text-[#4ECCA3] mb-4" />
                <h3 className="text-xl font-bold mb-2">Mobile Development</h3>
                <p className="text-gray-400">
                  Cross-platform mobile apps that deliver exceptional user experiences.
                </p>
              </div>
            </FadeInSection>

            <FadeInSection delay={600}>
              <div className="p-6 rounded-2xl bg-gray-900 border border-gray-800 hover:border-[#4ECCA3] transition-colors">
                <Server className="w-10 h-10 text-[#4ECCA3] mb-4" />
                <h3 className="text-xl font-bold mb-2">API & Backend</h3>
                <p className="text-gray-400">
                  Scalable, secure backend solutions and APIs that power your applications.
                </p>
              </div>
            </FadeInSection>
          </div>
        </div>
      </div>

      {/* Projects Section */}
      <div className="py-24 px-4 bg-gray-900" id="projects">
        <div className="max-w-7xl mx-auto">
          <FadeInSection>
            <h2 className="text-4xl font-bold text-center gradient-text mb-16">
              Our Latest Projects
            </h2>
          </FadeInSection>

          <div className="grid md:grid-cols-2 gap-8">
            <FadeInSection delay={200}>
              <div className="relative group overflow-hidden rounded-2xl">
                <img 
                  src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2426&q=80"
                  alt="Project 1"
                  className="w-full aspect-video object-cover transform group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent flex items-end p-6">
                  <div>
                    <h3 className="text-xl font-bold mb-2">E-Commerce Platform</h3>
                    <p className="text-gray-300">Modern shopping experience with React and Node.js</p>
                  </div>
                </div>
              </div>
            </FadeInSection>

            <FadeInSection delay={400}>
              <div className="relative group overflow-hidden rounded-2xl">
                <img 
                  src="https://images.unsplash.com/photo-1526498460520-4c246339dccb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2370&q=80"
                  alt="Project 2"
                  className="w-full aspect-video object-cover transform group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent flex items-end p-6">
                  <div>
                    <h3 className="text-xl font-bold mb-2">Mobile Banking App</h3>
                    <p className="text-gray-300">Secure financial transactions on the go</p>
                  </div>
                </div>
              </div>
            </FadeInSection>
          </div>
        </div>
      </div>

      {/* About Section */}
      <div className="py-24 px-4" id="about">
        <div className="max-w-7xl mx-auto">
          <FadeInSection>
            <h2 className="text-4xl font-bold text-center gradient-text mb-16">
              Why Choose MapleBytes?
            </h2>
          </FadeInSection>

          <div className="grid md:grid-cols-2 gap-12">
            <FadeInSection delay={200}>
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <Zap className="w-6 h-6 text-[#4ECCA3] mt-1" />
                  <div>
                    <h3 className="text-xl font-bold mb-2">Modern Tech Stack</h3>
                    <p className="text-gray-400">
                      We leverage cutting-edge technologies and frameworks to build future-proof solutions.
                    </p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <Braces className="w-6 h-6 text-[#4ECCA3] mt-1" />
                  <div>
                    <h3 className="text-xl font-bold mb-2">Clean Code</h3>
                    <p className="text-gray-400">
                      Our commitment to code quality ensures maintainable and scalable applications.
                    </p>
                  </div>
                </div>
              </div>
            </FadeInSection>

            <FadeInSection delay={400}>
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <Rocket className="w-6 h-6 text-[#4ECCA3] mt-1" />
                  <div>
                    <h3 className="text-xl font-bold mb-2">Agile Development</h3>
                    <p className="text-gray-400">
                      Rapid iterations and continuous delivery to keep your project on track.
                    </p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <Users className="w-6 h-6 text-[#4ECCA3] mt-1" />
                  <div>
                    <h3 className="text-xl font-bold mb-2">Expert Team</h3>
                    <p className="text-gray-400">
                      Skilled developers and designers dedicated to your project's success.
                    </p>
                  </div>
                </div>
              </div>
            </FadeInSection>
          </div>
        </div>
      </div>

      {/* Contact Section */}
      <div className="py-24 px-4 bg-gray-900" id="contact">
        <div className="max-w-7xl mx-auto">
          <FadeInSection>
            <h2 className="text-4xl font-bold text-center gradient-text mb-16">
              Get in Touch
            </h2>
          </FadeInSection>

          <div className="max-w-2xl mx-auto">
            <FadeInSection delay={200}>
              <form className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-400 mb-2">Name</label>
                    <input
                      type="text"
                      className="w-full px-4 py-2 bg-gray-800 border border-gray-700 rounded-lg focus:outline-none focus:border-[#4ECCA3]"
                      placeholder="John Doe"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-400 mb-2">Email</label>
                    <input
                      type="email"
                      className="w-full px-4 py-2 bg-gray-800 border border-gray-700 rounded-lg focus:outline-none focus:border-[#4ECCA3]"
                      placeholder="john@example.com"
                    />
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-400 mb-2">Message</label>
                  <textarea
                    rows={4}
                    className="w-full px-4 py-2 bg-gray-800 border border-gray-700 rounded-lg focus:outline-none focus:border-[#4ECCA3]"
                    placeholder="Tell us about your project"
                  ></textarea>
                </div>
                <button
                  type="submit"
                  className="w-full px-4 py-2 md:px-8 md:py-3 bg-[#4ECCA3] text-black rounded-lg font-medium hover:bg-[#3db389] transition-colors"
                >
                  Send Message
                </button>
              </form>
            </FadeInSection>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
