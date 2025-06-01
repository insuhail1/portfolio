import React, { useState, useEffect } from "react";
import {
  ChevronDown,
  Moon,
  Sun,
  Mail,
  Linkedin,
  Github,
  ExternalLink,
  MapPin,
  Calendar,
  Award,
  Code,
  Palette,
  Database,
  TestTube,
  Monitor,
  BookOpen,
} from "lucide-react";

const Portfolio = () => {
  const [isDark, setIsDark] = useState(false);
  const [activeSection, setActiveSection] = useState("hero");

  // Mock animation hook (simplified version of framer-motion functionality)
  const useInView = (threshold = 0.1) => {
    const [inView, setInView] = useState(false);
    const ref = React.useRef();

    useEffect(() => {
      const observer = new IntersectionObserver(
        ([entry]) => setInView(entry.isIntersecting),
        { threshold }
      );
      if (ref.current) observer.observe(ref.current);
      return () => observer.disconnect();
    }, [threshold]);

    return [ref, inView];
  };

  // Animated component wrapper
  const AnimatedSection = ({ children, className = "", delay = 0 }) => {
    const [ref, inView] = useInView();

    return (
      <div
        ref={ref}
        className={`transition-all duration-1000 ease-out ${
          inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
        } ${className}`}
        style={{ transitionDelay: `${delay}ms` }}
      >
        {children}
      </div>
    );
  };

  // Navigation items
  const navItems = [
    { id: "hero", label: "Home" },
    { id: "about", label: "About" },
    { id: "experience", label: "Experience" },
    { id: "projects", label: "Projects" },
    { id: "skills", label: "Skills" },
    { id: "education", label: "Education" },
    { id: "contact", label: "Contact" },
  ];

  // Experience data
  const experiences = [
    {
      company: "Better Gurgaon",
      role: "Software Engineer",
      period: "Nov 2022 - Present",
      achievements: [
        "Led migration to Next.js with SSG, achieving 40% faster page load times",
        "Implemented comprehensive monitoring with Fullstory and Observe",
        "Automated CI/CD pipeline with Buildkite webhook integration",
        "Enhanced SEO and platform reliability through cross-functional collaboration",
      ],
    },
    {
      company: "Koinearth Bangalore",
      role: "Software Engineer",
      period: "Sep 2020 - Oct 2022",
      achievements: [
        "Championed global search feature implementation in ngageN platform",
        "Built high-performance B2B blockchain applications from scratch",
        "Engineered Infinite Virtualized Table with advanced sorting capabilities",
        "Led front-end development team delivering scalable applications",
      ],
    },
    {
      company: "Zapplabs Bangalore",
      role: "MERN Stack Developer",
      period: "Nov 2019 - Sep 2020",
      achievements: [
        "Constructed reusable UI components with Material-UI",
        "Developed full-stack applications with React and Node.js",
        "Fostered knowledge-sharing culture within development team",
        "Delivered tailored solutions for diverse client requirements",
      ],
    },
  ];

  // Projects data (mock projects based on experience)
  const projects = [
    {
      title: "ngageN Platform",
      description:
        "B2B blockchain-based marketplace with NFT search functionality and creator discovery features.",
      tech: ["React.js", "Redux", "GraphQL", "Next.js"],
      image:
        "https://images.unsplash.com/photo-1639762681485-074b7f938ba0?w=400&h=250&fit=crop",
      github: "#",
      demo: "#",
    },
    {
      title: "Static Site Migration",
      description:
        "Migrated React application to Next.js with SSG, integrating headless CMS for better performance.",
      tech: ["Next.js", "TypeScript", "Builder.io", "SSG"],
      image:
        "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=400&h=250&fit=crop",
      github: "#",
      demo: "#",
    },
    {
      title: "Infinite Virtualized Table",
      description:
        "High-performance data table component with virtualization and advanced sorting capabilities.",
      tech: ["React.js", "TypeScript", "Performance Optimization"],
      image:
        "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=400&h=250&fit=crop",
      github: "#",
      demo: "#",
    },
  ];

  // Skills data
  const skillCategories = [
    {
      title: "Frontend",
      icon: <Code className="w-6 h-6" />,
      skills: ["React.js", "Next.js", "TypeScript", "Tailwind CSS", "Redux"],
    },
    {
      title: "Backend",
      icon: <Database className="w-6 h-6" />,
      skills: ["Node.js", "Express.js", "GraphQL", "REST APIs", "MongoDB"],
    },
    {
      title: "Testing",
      icon: <TestTube className="w-6 h-6" />,
      skills: ["Jest", "Cypress", "React Testing Library", "Unit Testing"],
    },
    {
      title: "Tools",
      icon: <Monitor className="w-6 h-6" />,
      skills: ["Docker", "Git", "Webpack", "Jira", "FullStory"],
    },
  ];

  const scrollToSection = (sectionId) => {
    document.getElementById(sectionId)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div
      className={`min-h-screen transition-colors duration-300 ${
        isDark ? "dark bg-gray-900 text-white" : "bg-white text-gray-900"
      }`}
    >
      {/* Navigation */}
      <nav
        className={`fixed top-0 w-full z-50 transition-all duration-300 ${
          isDark ? "bg-gray-900/95" : "bg-white/95"
        } backdrop-blur-sm border-b ${
          isDark ? "border-gray-800" : "border-gray-200"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="font-bold text-xl bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              MS
            </div>

            <div className="hidden md:flex space-x-8">
              {navItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className={`text-sm font-medium transition-colors duration-200 hover:text-blue-600 ${
                    activeSection === item.id
                      ? "text-blue-600"
                      : isDark
                      ? "text-gray-300"
                      : "text-gray-600"
                  }`}
                >
                  {item.label}
                </button>
              ))}
            </div>

            <button
              onClick={() => setIsDark(!isDark)}
              className={`p-2 rounded-lg transition-colors duration-200 ${
                isDark ? "hover:bg-gray-800" : "hover:bg-gray-100"
              }`}
            >
              {isDark ? (
                <Sun className="w-5 h-5" />
              ) : (
                <Moon className="w-5 h-5" />
              )}
            </button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section
        id="hero"
        className="min-h-screen flex items-center justify-center relative overflow-hidden"
      >
        <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-purple-50 to-pink-50 dark:from-gray-900 dark:via-blue-900/20 dark:to-purple-900/20"></div>
        <div className="relative z-10 text-center px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto">
          <AnimatedSection>
            <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">
              Mohd Suhail
            </h1>
          </AnimatedSection>
          <AnimatedSection delay={200}>
            <h2 className="text-2xl md:text-3xl font-light mb-6 text-gray-600 dark:text-gray-300">
              Full Stack Engineer • Frontend Heavy
            </h2>
          </AnimatedSection>
          <AnimatedSection delay={400}>
            <p className="text-lg md:text-xl mb-8 text-gray-500 dark:text-gray-400 max-w-2xl mx-auto">
              5+ years crafting exceptional web experiences with React, Next.js,
              and TypeScript. Specialized in performance optimization and
              scalable frontend architecture.
            </p>
          </AnimatedSection>
          <AnimatedSection delay={600}>
            <button
              onClick={() => scrollToSection("projects")}
              className="group bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-4 rounded-full font-medium text-lg transition-all duration-300 hover:shadow-2xl hover:shadow-blue-500/25 hover:scale-105"
            >
              View My Work
              <ChevronDown className="w-5 h-5 ml-2 inline-block group-hover:translate-y-1 transition-transform duration-300" />
            </button>
          </AnimatedSection>
        </div>
      </section>

      {/* About Section */}
      <section
        id="about"
        className={`py-20 ${isDark ? "bg-gray-800" : "bg-gray-50"}`}
      >
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection>
            <h2 className="text-4xl font-bold text-center mb-12">About Me</h2>
          </AnimatedSection>
          <AnimatedSection delay={200}>
            <div
              className={`${
                isDark ? "bg-gray-900" : "bg-white"
              } rounded-2xl p-8 shadow-xl`}
            >
              <p className="text-lg leading-relaxed text-gray-600 dark:text-gray-300">
                Software Engineer with over 5 years of experience in React,
                Next.js, and TypeScript, including 2.5 years working with a
                US-based company. Proven expertise in optimizing frontend
                architecture, leading to 40% faster page load times. Adept at
                leading teams, improving code quality, and implementing scalable
                solutions that enhance user experience while reducing
                maintenance efforts by 25%.
              </p>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="py-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection>
            <h2 className="text-4xl font-bold text-center mb-12">Experience</h2>
          </AnimatedSection>
          <div className="space-y-8">
            {experiences.map((exp, index) => (
              <AnimatedSection key={index} delay={index * 200}>
                <div
                  className={`${
                    isDark ? "bg-gray-800" : "bg-white"
                  } rounded-2xl p-8 shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-[1.02]`}
                >
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-6">
                    <div>
                      <h3 className="text-2xl font-bold text-blue-600">
                        {exp.company}
                      </h3>
                      <p className="text-xl font-medium text-gray-600 dark:text-gray-300">
                        {exp.role}
                      </p>
                    </div>
                    <div className="flex items-center text-gray-500 dark:text-gray-400 mt-2 md:mt-0">
                      <Calendar className="w-4 h-4 mr-2" />
                      {exp.period}
                    </div>
                  </div>
                  <ul className="space-y-3">
                    {exp.achievements.map((achievement, i) => (
                      <li key={i} className="flex items-start">
                        <div className="w-2 h-2 bg-blue-600 rounded-full mt-2 mr-4 flex-shrink-0"></div>
                        <p className="text-gray-600 dark:text-gray-300">
                          {achievement}
                        </p>
                      </li>
                    ))}
                  </ul>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section
        id="projects"
        className={`py-20 ${isDark ? "bg-gray-800" : "bg-gray-50"}`}
      >
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection>
            <h2 className="text-4xl font-bold text-center mb-12">
              Featured Projects
            </h2>
          </AnimatedSection>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <AnimatedSection key={index} delay={index * 200}>
                <div
                  className={`group ${
                    isDark ? "bg-gray-900" : "bg-white"
                  } rounded-2xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105`}
                >
                  <div className="relative overflow-hidden">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-bold mb-3">{project.title}</h3>
                    <p className="text-gray-600 dark:text-gray-300 mb-4">
                      {project.description}
                    </p>
                    <div className="flex flex-wrap gap-2 mb-4">
                      {project.tech.map((tech, i) => (
                        <span
                          key={i}
                          className="px-3 py-1 bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 rounded-full text-sm"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                    <div className="flex space-x-4">
                      <a
                        href={project.github}
                        className="flex items-center text-gray-600 dark:text-gray-300 hover:text-blue-600 transition-colors duration-200"
                      >
                        <Github className="w-4 h-4 mr-2" />
                        Code
                      </a>
                      <a
                        href={project.demo}
                        className="flex items-center text-gray-600 dark:text-gray-300 hover:text-blue-600 transition-colors duration-200"
                      >
                        <ExternalLink className="w-4 h-4 mr-2" />
                        Demo
                      </a>
                    </div>
                  </div>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection>
            <h2 className="text-4xl font-bold text-center mb-12">
              Skills & Technologies
            </h2>
          </AnimatedSection>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {skillCategories.map((category, index) => (
              <AnimatedSection key={index} delay={index * 150}>
                <div
                  className={`${
                    isDark ? "bg-gray-800" : "bg-white"
                  } rounded-2xl p-6 shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105`}
                >
                  <div className="flex items-center mb-4">
                    <div className="p-3 bg-blue-100 dark:bg-blue-900/30 rounded-lg mr-4">
                      {category.icon}
                    </div>
                    <h3 className="text-xl font-bold">{category.title}</h3>
                  </div>
                  <ul className="space-y-2">
                    {category.skills.map((skill, i) => (
                      <li key={i} className="text-gray-600 dark:text-gray-300">
                        {skill}
                      </li>
                    ))}
                  </ul>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Education Section */}
      <section
        id="education"
        className={`py-20 ${isDark ? "bg-gray-800" : "bg-gray-50"}`}
      >
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection>
            <h2 className="text-4xl font-bold text-center mb-12">Education</h2>
          </AnimatedSection>
          <AnimatedSection delay={200}>
            <div
              className={`${
                isDark ? "bg-gray-900" : "bg-white"
              } rounded-2xl p-8 shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-[1.02]`}
            >
              <div className="flex items-start">
                <div className="p-3 bg-blue-100 dark:bg-blue-900/30 rounded-lg mr-6">
                  <BookOpen className="w-8 h-8 text-blue-600" />
                </div>
                <div className="flex-1">
                  <h3 className="text-2xl font-bold mb-2">
                    Master of Computer Applications (MCA)
                  </h3>
                  <p className="text-xl text-blue-600 mb-2">
                    Aligarh Muslim University (AMU)
                  </p>
                  <p className="text-gray-600 dark:text-gray-300 mb-2">
                    Aug 2017 - Jun 2020
                  </p>
                  <div className="flex items-center">
                    <Award className="w-4 h-4 mr-2 text-yellow-500" />
                    <span className="text-gray-600 dark:text-gray-300">
                      CGPA: 8.2
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection>
            <h2 className="text-4xl font-bold text-center mb-12">
              Get In Touch
            </h2>
          </AnimatedSection>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <AnimatedSection delay={200}>
              <div>
                <h3 className="text-2xl font-bold mb-6">Let's Connect</h3>
                <p className="text-gray-600 dark:text-gray-300 mb-8">
                  I'm always interested in new opportunities and collaborations.
                  Feel free to reach out if you'd like to discuss a project or
                  just say hello!
                </p>
                <div className="space-y-4">
                  <a
                    href="mailto:eithansuhail@gmail.com"
                    className="flex items-center group"
                  >
                    <div className="p-3 bg-blue-100 dark:bg-blue-900/30 rounded-lg mr-4 group-hover:bg-blue-200 dark:group-hover:bg-blue-900/50 transition-colors duration-200">
                      <Mail className="w-6 h-6 text-blue-600" />
                    </div>
                    <div>
                      <p className="font-medium">Email</p>
                      <p className="text-gray-600 dark:text-gray-300">
                        eithansuhail@gmail.com
                      </p>
                    </div>
                  </a>
                  <a
                    href="https://linkedin.com/in/insuhail1"
                    className="flex items-center group"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <div className="p-3 bg-blue-100 dark:bg-blue-900/30 rounded-lg mr-4 group-hover:bg-blue-200 dark:group-hover:bg-blue-900/50 transition-colors duration-200">
                      <Linkedin className="w-6 h-6 text-blue-600" />
                    </div>
                    <div>
                      <p className="font-medium">LinkedIn</p>
                      <p className="text-gray-600 dark:text-gray-300">
                        linkedin.com/in/insuhail1
                      </p>
                    </div>
                  </a>
                  <a
                    href="https://github.com/insuhail1"
                    className="flex items-center group"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <div className="p-3 bg-blue-100 dark:bg-blue-900/30 rounded-lg mr-4 group-hover:bg-blue-200 dark:group-hover:bg-blue-900/50 transition-colors duration-200">
                      <Github className="w-6 h-6 text-blue-600" />
                    </div>
                    <div>
                      <p className="font-medium">GitHub</p>
                      <p className="text-gray-600 dark:text-gray-300">
                        github.com/insuhail1
                      </p>
                    </div>
                  </a>
                </div>
              </div>
            </AnimatedSection>

            <AnimatedSection delay={400}>
              <div
                className={`${
                  isDark ? "bg-gray-800" : "bg-gray-50"
                } rounded-2xl p-8`}
              >
                <div className="space-y-6">
                  <div>
                    <label className="block text-sm font-medium mb-2">
                      Name
                    </label>
                    <input
                      type="text"
                      className={`w-full px-4 py-3 rounded-lg border ${
                        isDark
                          ? "bg-gray-700 border-gray-600 focus:border-blue-500"
                          : "bg-white border-gray-300 focus:border-blue-500"
                      } focus:ring-2 focus:ring-blue-500/20 transition-all duration-200`}
                      placeholder="Your name"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-2">
                      Email
                    </label>
                    <input
                      type="email"
                      className={`w-full px-4 py-3 rounded-lg border ${
                        isDark
                          ? "bg-gray-700 border-gray-600 focus:border-blue-500"
                          : "bg-white border-gray-300 focus:border-blue-500"
                      } focus:ring-2 focus:ring-blue-500/20 transition-all duration-200`}
                      placeholder="your.email@example.com"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-2">
                      Message
                    </label>
                    <textarea
                      rows={4}
                      className={`w-full px-4 py-3 rounded-lg border ${
                        isDark
                          ? "bg-gray-700 border-gray-600 focus:border-blue-500"
                          : "bg-white border-gray-300 focus:border-blue-500"
                      } focus:ring-2 focus:ring-blue-500/20 transition-all duration-200`}
                      placeholder="Your message..."
                    ></textarea>
                  </div>
                  <button
                    onClick={() => alert("Message sent! (Demo only)")}
                    className="w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white py-3 px-6 rounded-lg font-medium transition-all duration-300 hover:shadow-xl hover:shadow-blue-500/25 hover:scale-[1.02]"
                  >
                    Send Message
                  </button>
                </div>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer
        className={`py-8 border-t ${
          isDark ? "border-gray-800 bg-gray-900" : "border-gray-200 bg-gray-50"
        }`}
      >
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center text-gray-600 dark:text-gray-300">
            <p>&copy; 2025 Mohd Suhail. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Portfolio;
