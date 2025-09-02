import { useState, useEffect } from 'react';
import { Moon, Sun, Download, ExternalLink, Github, Linkedin, Code, Mail, Calendar, Users, Database, Server, Cloud, GitBranch } from 'lucide-react';
import { motion, useScroll, useSpring } from 'framer-motion';
import FloatingElement from './components/FloatingElement';
import AnimatedBackground from './components/AnimatedBackground';
import Particles from './components/Particles';

// Animation variants
const fadeInUp = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.5 }
};

const staggerContainer = {
  animate: {
    transition: {
      staggerChildren: 0.1
    }
  }
};

const fadeIn = {
  initial: { opacity: 0 },
  animate: { opacity: 1 },
  transition: { duration: 0.5 }
};

function App() {
  const [darkMode, setDarkMode] = useState(true); // Changed initial state to true
  const [activeSection, setActiveSection] = useState('home');

  // Scroll progress
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['home', 'about', 'skills', 'projects', 'contact'] as const;
      const scrollPosition = window.scrollY + 100;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const offsetTop = element.offsetTop;
          const offsetHeight = element.offsetHeight;
          
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: 'home' | 'about' | 'skills' | 'projects' | 'contact') => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  // Updated skills based on latest resume
  const skills = {
    languages: ['Java', 'JavaScript', 'SQL'],
    frameworks: ['Spring Boot', 'Spring Cloud', 'Spring Security', 'Hibernate', 'Express.js', 'React.js'],
    devops: ['Docker', 'Kubernetes', 'AWS (EC2, S3, RDS, Lambda)', 'GitHub Actions', 'Jenkins', 'CI/CD'],
    databases: ['PostgreSQL', 'MySQL', 'MongoDB', 'Redis'],
    messaging: ['Apache Kafka', 'RabbitMQ'],
    testingMonitoring: ['JUnit', 'Mockito', 'Prometheus', 'Grafana', 'ELK Stack'],
    architecture: ['Microservices', 'Event-driven', 'Distributed Systems', 'RESTful APIs', 'OAuth2 + JWT']
  };

  // Updated projects from resume (with links)
  const projects = [
    {
      title: 'BookyourShow (Ticket Booking System)',
      description: 'Microservices-based ticket booking system with real-time seat-locking using Kafka and Redis, JWT auth and modular Spring Boot services.',
      tech: ['Spring Boot', 'Kafka', 'Redis', 'PostgreSQL', 'Docker'],
      github: 'https://github.com/PratyakshSingh/bookyourshow_project', // resume referenced link; replace if specific repo exists
      demo: null,
      image: 'https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=800'
    },
    {
      title: 'BuyNow - Ecommerce Platform',
      description: 'Scalable e-commerce microservices (user, cart, product, order, payment) with Kafka for async workflows, Redis caching and Spring Security + JWT RBAC.',
      tech: ['Spring Boot', 'Redis', 'Kafka', 'Spring Security', 'Docker', 'AWS'],
      github: 'https://github.com/PratyakshSingh/buyNowEcommerceApp',
      demo: null, // placeholder — replace with actual demo if available
      image: 'https://images.pexels.com/photos/230544/pexels-photo-230544.jpeg?auto=compress&cs=tinysrgb&w=800'
    },
    {
      title: 'Realtime Chat App',
      description: 'Full-featured messaging platform using Socket.io, supporting private & group chats, file share, JWT auth and MongoDB persistence.',
      tech: ['Node.js', 'Socket.io', 'MongoDB', 'React'],
      github: 'https://github.com/PratyakshSingh/mern-chat-app',
      demo: 'https://drive.google.com/file/d/1V74foIG4LDLYCBWt3jmgIIRgLW-6kGWT/view',
      image: 'https://images.pexels.com/photos/267350/pexels-photo-267350.jpeg?auto=compress&cs=tinysrgb&w=800'
    }
  ];

  // Updated experience based on resume
  const experience = [
    {
      company: 'Vena.ai',
      period: 'Dec 2024 – July 2025',
      role: 'Backend Engineer (Remote)',
      focus: [
        'Developed microservices for scheduling, medical records, and doctor availability with scalable, modular design.',
        'Implemented Kafka-based notification pipeline (email/SMS), reducing missed appointments by 40%.',
        'Developed secure REST APIs with JWT + rate limiting, optimized database schemas, and introduced Redis caching, improving query performance by 45% under peak load.',
        'Deployed containerized services on Kubernetes with probes for reliability, auto-healing, and seamless scaling.'
      ]
    },
    {
      company: 'Tata Consultancy Services (TCS)',
      period: 'Nov 2021 – May 2024',
      role: 'Software Developer (Noida, India)',
      focus: [
        'Migrated a legacy asset management platform from monolith to Spring Boot microservices, improving scalability and fault isolation.',
        'Designed and optimized REST APIs integrated with PostgreSQL and Redis, cutting average API response times by 30% and lowering DB load by 25%.',
        'Built event-driven workflows using Apache Kafka, enabling real-time data processing and reducing processing delays by 60%.',
        'Secured APIs with OAuth2 + JWT-based RBAC, ensuring role-specific access control for multiple user types.',
        'Containerized services with Docker and deployed on Kubernetes via Helm, enabling zero-downtime rolling updates.'
      ]
    }
  ];

  return (
    <div className={`min-h-screen transition-colors duration-300 relative ${darkMode ? 'bg-gray-900 text-white' : 'bg-white text-gray-900'}`}>
      <AnimatedBackground />
      <Particles darkMode={darkMode} />
      
      {/* Scroll Progress Indicator */}
      <motion.div
        className="fixed top-0 left-0 right-0 h-1 bg-gradient-to-r from-blue-500 to-purple-600 transform origin-left z-50"
        style={{ scaleX }}
      />

      {/* Navigation */}
      <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${darkMode ? 'bg-gray-900/95' : 'bg-white/95'} backdrop-blur-sm border-b ${darkMode ? 'border-gray-800' : 'border-gray-200'}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            <div className="text-xl font-bold bg-gradient-to-r from-blue-500 to-purple-600 bg-clip-text text-transparent">
              Pratyaksh Singh
            </div>
            
            <div className="hidden md:flex space-x-8">
              {(['home', 'about', 'skills', 'projects', 'contact'] as const).map((section) => (
                <button
                  key={section}
                  onClick={() => scrollToSection(section)}
                  className={`capitalize transition-colors duration-200 hover:text-blue-500 ${
                    activeSection === section ? 'text-blue-500' : darkMode ? 'text-gray-300' : 'text-gray-600'
                  }`}
                >
                  {section}
                </button>
              ))}
            </div>

            <div className="flex items-center gap-3">
              <a
                href="https://drive.google.com/file/d/19bkHORkUIGMe7a_OV0uJbtqlH_9evV1_/view?usp=sharing"
                target="_blank"
                rel="noopener noreferrer"
                className="hidden sm:inline-flex items-center gap-2 px-3 py-2 rounded-md bg-gradient-to-r from-blue-500 to-purple-600 text-white"
              >
                <Download className="w-4 h-4" />
                Resume
              </a>

              <button
                onClick={toggleDarkMode}
                className={`p-2 rounded-lg transition-colors duration-200 ${darkMode ? 'bg-gray-800 hover:bg-gray-700' : 'bg-gray-100 hover:bg-gray-200'}`}
              >
                {darkMode ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="home" className="pt-20 min-h-screen flex items-center">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1 }}
            className="text-center"
          >
            <FloatingElement delay={0.2}>
              <motion.div 
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ 
                  type: "spring",
                  stiffness: 100,
                  damping: 15,
                  delay: 0.2 
                }}
                className="w-32 h-32 mx-auto mb-6 rounded-full bg-gradient-to-r from-blue-500 to-purple-600 p-1"
                whileHover={{ scale: 1.05 }}
              >
                <div className={`w-full h-full rounded-full flex items-center justify-center text-4xl font-bold ${darkMode ? 'bg-gray-900' : 'bg-white'}`}>
                  PS
                </div>
              </motion.div>
            </FloatingElement>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ 
                duration: 0.8,
                delay: 0.5,
                type: "spring"
              }}
            >
              <motion.h1 
                className="text-5xl md:text-7xl font-bold mb-4"
                whileHover={{ scale: 1.02 }}
              >
                <span className="bg-gradient-to-r from-blue-500 to-purple-600 bg-clip-text text-transparent">
                  Pratyaksh Singh
                </span>
              </motion.h1>
              
              <motion.h2 
                className="text-xl md:text-2xl mb-6 text-gray-600 dark:text-gray-300"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.7 }}
              >
                Software Engineer | Backend Developer 
              </motion.h2>

              <motion.p 
                className="text-lg mb-8 max-w-2xl mx-auto text-gray-600 dark:text-gray-400"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.9 }}
              >
                Software Engineer with 3.5 years experience designing and delivering scalable microservices, Kafka-driven architectures, high-performance REST APIs and cloud-native deployments on AWS & Kubernetes.
              </motion.p>
            </motion.div>

            <motion.div 
              className="flex flex-wrap justify-center gap-4 mb-12"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.1 }}
            >
              <a
                href="https://drive.google.com/file/d/19bkHORkUIGMe7a_OV0uJbtqlH_9evV1_/view?usp=sharing"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-gradient-to-r from-blue-500 to-purple-600 text-white px-8 py-3 rounded-lg font-semibold hover:shadow-lg transform hover:scale-105 transition-all duration-200 flex items-center gap-2"
              >
                <Download className="w-5 h-5" />
                View Resume
              </a>
              <a
                href="https://www.linkedin.com/in/pratyaksh-singh-038662174/"
                target="_blank"
                rel="noopener noreferrer"
                className={`px-8 py-3 rounded-lg font-semibold border-2 border-blue-500 text-blue-500 hover:bg-blue-500 hover:text-white transition-all duration-200 flex items-center gap-2`}
              >
                <Linkedin className="w-5 h-5" />
                Connect on LinkedIn
              </a>
              <button
                onClick={() => scrollToSection('projects')}
                className={`px-8 py-3 rounded-lg font-semibold ${darkMode ? 'bg-gray-800 hover:bg-gray-700' : 'bg-gray-100 hover:bg-gray-200'} transition-all duration-200 flex items-center gap-2`}
              >
                <Code className="w-5 h-5" />
                Explore Projects
              </button>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* About Section */}
      <motion.section 
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        id="about" 
        className={`py-20 ${darkMode ? 'bg-gray-800' : 'bg-gray-50'}`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">About Me</h2>
            <div className="w-20 h-1 bg-gradient-to-r from-blue-500 to-purple-600 mx-auto"></div>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-start">
            <div>
              <div className="mb-12">
                <h3 className="text-2xl font-semibold mb-6 bg-gradient-to-r from-blue-500 to-purple-600 bg-clip-text text-transparent">Professional Summary</h3>
                <p className="text-lg mb-6 text-gray-600 dark:text-gray-300">
                  Software Engineer with 3.5 years of experience designing and delivering scalable and distributed microservices.
                  Proven expertise in Kafka-driven architectures, high-performance RESTful APIs, and cloud-native deployments on AWS/Kubernetes.
                </p>
                <p className="text-lg text-gray-600 dark:text-gray-300">
                  Adept at system design, API security, CI/CD, and performance tuning for enterprise-scale products. Passionate about clean code and reliability.
                </p>
              </div>
            </div>

            <div className="space-y-8">
              <h3 className="text-2xl font-semibold mb-6 bg-gradient-to-r from-blue-500 to-purple-600 bg-clip-text text-transparent">Experience Timeline</h3>
              {experience.map((exp, index) => (
                <div key={index} className="relative pl-8 pb-8 border-l-2 border-blue-500/20 last:pb-0">
                  <div className="absolute left-[-9px] top-0 w-4 h-4 rounded-full bg-gradient-to-r from-blue-500 to-purple-600"></div>
                  <div>
                    <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-2">
                      <h4 className="text-xl font-semibold">{exp.company}</h4>
                      <span className="text-blue-500 font-medium text-sm">{exp.period}</span>
                    </div>
                    <p className="text-gray-600 dark:text-gray-300 font-medium mb-3">{exp.role}</p>
                    <ul className="text-sm text-gray-500 dark:text-gray-400 leading-relaxed space-y-1">
                      {exp.focus.map((point, pointIndex) => (
                        <li key={pointIndex} className="flex items-start">
                          <span className="text-blue-500 mr-2 mt-1">•</span>
                          <span>{point}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </motion.section>

      {/* Skills Section */}
      <motion.section 
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        id="skills" 
        className="py-20"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl font-bold mb-4">Technical Skills</h2>
            <div className="w-20 h-1 bg-gradient-to-r from-blue-500 to-purple-600 mx-auto"></div>
          </motion.div>

          <motion.div 
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-2 gap-6"
          >
            {/* Programming & DevOps */}
            <div className={`p-6 rounded-xl ${darkMode ? 'bg-gray-800/50' : 'bg-gray-50'} backdrop-blur-sm`}>
              <div className="flex items-center mb-4">
                <Code className="w-6 h-6 text-blue-500 mr-2" />
                <h3 className="text-xl font-semibold bg-gradient-to-r from-blue-500 to-purple-600 bg-clip-text text-transparent">Programming Languages & Frameworks</h3>
              </div>
              <div className="flex flex-wrap gap-2">
                {skills.languages.concat(skills.frameworks).map((skill, index) => (
                  <span 
                    key={index}
                    className={`px-3 py-1.5 rounded-full text-sm font-medium ${
                      darkMode 
                        ? 'bg-gray-700/50 hover:bg-blue-500/20' 
                        : 'bg-gray-100 hover:bg-blue-50'
                    } transition-colors duration-200 hover:text-blue-500`}
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>

            {/* Cloud & DevOps */}
            <div className={`p-6 rounded-xl ${darkMode ? 'bg-gray-800/50' : 'bg-gray-50'} backdrop-blur-sm`}>
              <div className="flex items-center mb-4">
                <Cloud className="w-6 h-6 text-green-500 mr-2" />
                <h3 className="text-xl font-semibold bg-gradient-to-r from-green-400 to-teal-500 bg-clip-text text-transparent">DevOps & Cloud</h3>
              </div>
              <div className="flex flex-wrap gap-2">
                {skills.devops.map((skill, index) => (
                  <span 
                    key={index}
                    className={`px-3 py-1.5 rounded-full text-sm font-medium ${
                      darkMode 
                        ? 'bg-gray-700/50 hover:bg-green-500/20' 
                        : 'bg-gray-100 hover:bg-green-50'
                    } transition-colors duration-200 hover:text-green-500`}
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>

            {/* Databases & Messaging */}
            <div className={`p-6 rounded-xl ${darkMode ? 'bg-gray-800/50' : 'bg-gray-50'} backdrop-blur-sm`}>
              <div className="flex items-center mb-4">
                <Database className="w-6 h-6 text-orange-500 mr-2" />
                <h3 className="text-xl font-semibold bg-gradient-to-r from-orange-400 to-pink-500 bg-clip-text text-transparent">Databases & Messaging</h3>
              </div>
              <div className="flex flex-wrap gap-2">
                {[...skills.databases, ...skills.messaging].map((skill, index) => (
                  <span 
                    key={index}
                    className={`px-3 py-1.5 rounded-full text-sm font-medium ${
                      darkMode 
                        ? 'bg-gray-700/50 hover:bg-orange-500/20' 
                        : 'bg-gray-100 hover:bg-orange-50'
                    } transition-colors duration-200 hover:text-orange-500`}
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>

            {/* Architecture & Testing */}
            <div className={`p-6 rounded-xl ${darkMode ? 'bg-gray-800/50' : 'bg-gray-50'} backdrop-blur-sm`}>
              <div className="flex items-center mb-4">
                <GitBranch className="w-6 h-6 text-purple-500 mr-2" />
                <h3 className="text-xl font-semibold bg-gradient-to-r from-purple-400 to-pink-500 bg-clip-text text-transparent">Architecture & Testing</h3>
              </div>
              <div className="flex flex-wrap gap-2">
                {[...skills.architecture, ...skills.testingMonitoring].map((skill, index) => (
                  <span 
                    key={index}
                    className={`px-3 py-1.5 rounded-full text-sm font-medium ${
                      darkMode 
                        ? 'bg-gray-700/50 hover:bg-purple-500/20' 
                        : 'bg-gray-100 hover:bg-purple-50'
                    } transition-colors duration-200 hover:text-purple-500`}
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </motion.section>

      {/* Projects Section */}
      <motion.section 
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        id="projects" 
        className={`py-20 ${darkMode ? 'bg-gray-800' : 'bg-gray-50'}`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold mb-4">Featured Projects</h2>
            <div className="w-20 h-1 bg-gradient-to-r from-blue-500 to-purple-600 mx-auto mb-8"></div>
            <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
              A collection of projects that showcase my expertise in building scalable applications and microservices
            </p>
          </motion.div>

          <motion.div 
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {projects.map((project, index) => (
              <motion.div 
                key={index}
                variants={fadeInUp}
                className={`group relative rounded-xl overflow-hidden ${
                  darkMode ? 'bg-gray-900/50' : 'bg-white'
                } shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2`}
              >
                <div className="aspect-video overflow-hidden relative">
                  <img 
                    src={project.image} 
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-gray-900/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </div>

                <div className="p-6 relative z-10">
                  <h3 className="text-xl font-bold mb-3 bg-gradient-to-r from-blue-500 to-purple-600 bg-clip-text text-transparent">
                    {project.title}
                  </h3>
                  <p className={`text-sm leading-relaxed mb-4 ${
                    darkMode ? 'text-gray-300' : 'text-gray-600'
                  }`}>
                    {project.description}
                  </p>

                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tech.map((tech, techIndex) => (
                      <span 
                        key={techIndex} 
                        className={`px-2.5 py-1 rounded-full text-xs font-medium ${
                          darkMode 
                            ? 'bg-blue-500/10 text-blue-400' 
                            : 'bg-blue-50 text-blue-600'
                        } transition-colors duration-200`}
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  <div className="flex gap-4 mt-4 relative z-20">
                    {project.github && (
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={`flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200 ${
                          darkMode 
                            ? 'bg-gray-800 hover:bg-gray-700 text-gray-300 hover:text-blue-400' 
                            : 'bg-gray-100 hover:bg-gray-200 text-gray-600 hover:text-blue-600'
                        } hover:scale-105 cursor-pointer z-20`}
                      >
                        <Github className="w-4 h-4" />
                        View Code
                      </a>
                    )}
                    {project.demo && (
                      <a
                        href={project.demo}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={`flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200 ${
                          darkMode 
                            ? 'bg-blue-500/20 hover:bg-blue-500/30 text-blue-400' 
                            : 'bg-blue-50 hover:bg-blue-100 text-blue-600'
                        } hover:scale-105 cursor-pointer z-20`}
                      >
                        <ExternalLink className="w-4 h-4" />
                        Live Demo
                      </a>
                    )}
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </motion.section>

      {/* Contact Section */}
      <motion.section 
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        id="contact" 
        className="py-20"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Get In Touch</h2>
            <div className="w-20 h-1 bg-gradient-to-r from-blue-500 to-purple-600 mx-auto mb-8"></div>
            <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
              I'm open to discussing opportunities, interesting projects, or mentoring conversations.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <h3 className="text-2xl font-semibold mb-8">Let's Connect</h3>
              <div className="space-y-6">
                <a
                  href="mailto:pratyaksh.singh8171@gmail.com"
                  className={`flex items-center gap-4 p-4 rounded-lg ${darkMode ? 'bg-gray-800 hover:bg-gray-700' : 'bg-gray-50 hover:bg-gray-100'} transition-all duration-200`}
                >
                  <Mail className="w-6 h-6 text-blue-500" />
                  <div>
                    <p className="font-medium">Email</p>
                    <p className="text-gray-600 dark:text-gray-300">pratyaksh.singh8171@gmail.com</p>
                  </div>
                </a>
                
                <a
                  href="https://www.linkedin.com/in/pratyaksh-singh-038662174"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`flex items-center gap-4 p-4 rounded-lg ${darkMode ? 'bg-gray-800 hover:bg-gray-700' : 'bg-gray-50 hover:bg-gray-100'} transition-all duration-200`}
                >
                  <Linkedin className="w-6 h-6 text-blue-500" />
                  <div>
                    <p className="font-medium">LinkedIn</p>
                    <p className="text-gray-600 dark:text-gray-300">linkedin.com/in/pratyaksh-singh-038662174</p>
                  </div>
                </a>

                <a
                  href="https://github.com/PratyakshSingh"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`flex items-center gap-4 p-4 rounded-lg ${darkMode ? 'bg-gray-800 hover:bg-gray-700' : 'bg-gray-50 hover:bg-gray-100'} transition-all duration-200`}
                >
                  <Github className="w-6 h-6 text-blue-500" />
                  <div>
                    <p className="font-medium">GitHub</p>
                    <p className="text-gray-600 dark:text-gray-300">github.com/PratyakshSingh</p>
                  </div>
                </a>

                <a
                  href="https://leetcode.com/pratyaksh_singh/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`flex items-center gap-4 p-4 rounded-lg ${darkMode ? 'bg-gray-800 hover:bg-gray-700' : 'bg-gray-50 hover:bg-gray-100'} transition-all duration-200`}
                >
                  <Code className="w-6 h-6 text-blue-500" />
                  <div>
                    <p className="font-medium">LeetCode</p>
                    <p className="text-gray-600 dark:text-gray-300">leetcode.com/pratyaksh_singh</p>
                  </div>
                </a>
              </div>
            </div>

            <div className={`p-8 rounded-lg ${darkMode ? 'bg-gray-800' : 'bg-gray-50'}`}>
              <h3 className="text-2xl font-semibold mb-6">Send a Message</h3>
              <form className="space-y-6">
                <div>
                  <label className="block text-sm font-medium mb-2">Name</label>
                  <input
                    type="text"
                    className={`w-full px-4 py-3 rounded-lg border ${darkMode ? 'bg-gray-900 border-gray-700 focus:border-blue-500' : 'bg-white border-gray-300 focus:border-blue-500'} focus:outline-none focus:ring-2 focus:ring-blue-500/20 transition-all duration-200`}
                    placeholder="Your name"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2">Email</label>
                  <input
                    type="email"
                    className={`w-full px-4 py-3 rounded-lg border ${darkMode ? 'bg-gray-900 border-gray-700 focus:border-blue-500' : 'bg-white border-gray-300 focus:border-blue-500'} focus:outline-none focus:ring-2 focus:ring-blue-500/20 transition-all duration-200`}
                    placeholder="your.email@example.com"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2">Message</label>
                  <textarea
                    rows={5}
                    className={`w-full px-4 py-3 rounded-lg border ${darkMode ? 'bg-gray-900 border-gray-700 focus:border-blue-500' : 'bg-white border-gray-300 focus:border-blue-500'} focus:outline-none focus:ring-2 focus:ring-blue-500/20 transition-all duration-200 resize-none`}
                    placeholder="Your message..."
                  ></textarea>
                </div>
                <button
                  type="submit"
                  className="w-full bg-gradient-to-r from-blue-500 to-purple-600 text-white py-3 rounded-lg font-semibold hover:shadow-lg transform hover:scale-105 transition-all duration-200"
                >
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </div>
      </motion.section>

      {/* Footer */}
      <footer className={`py-8 ${darkMode ? 'bg-gray-900 border-t border-gray-800' : 'bg-gray-50 border-t border-gray-200'}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <p className="text-gray-600 dark:text-gray-400">
              © 2025 Pratyaksh Singh
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
