"use client";

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from "@/components/ui/hover-card";
import { MobileNav } from "@/components/ui/mobile-nav";
import { NavLink } from "@/components/ui/nav-link";
import { Separator } from "@/components/ui/separator";
import { ThemeToggle } from "@/components/ui/theme-toggle";
import { useActiveSection } from "@/hooks/useActiveSection";
import { motion } from "framer-motion";
import {
  Cloud,
  Code,
  Database,
  Download,
  ExternalLink,
  Github,
  Globe,
  Linkedin,
  Mail,
  Menu,
  Server,
  Smartphone,
  X,
  Zap,
} from "lucide-react";
import { useEffect, useState } from "react";

export default function Home() {
  const [mounted, setMounted] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const activeSection = useActiveSection();

  // Debug logging and set initial active section
  useEffect(() => {
    console.log("Active section changed:", activeSection);

    // Set initial active section if none is set
    if (!activeSection && mounted) {
      console.log("Setting initial active section to 'about'");
      // This will be handled by the hook, but we can add a fallback here if needed
    }
  }, [activeSection, mounted]);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  const skills = [
    { name: "React", icon: Code, category: "Frontend" },
    { name: "Node.js", icon: Server, category: "Backend" },
    { name: "TypeScript", icon: Code, category: "Language" },
    { name: "MongoDB", icon: Database, category: "Database" },
    { name: "AWS", icon: Cloud, category: "Cloud" },
    { name: "Docker", icon: Server, category: "DevOps" },
    { name: "Next.js", icon: Globe, category: "Framework" },
    { name: "React Native", icon: Smartphone, category: "Mobile" },
  ];

  const projects = [
    {
      title: "E-Commerce Platform",
      description:
        "Full-stack e-commerce solution with React, Node.js, and MongoDB",
      tech: ["React", "Node.js", "MongoDB", "Stripe"],
      image: "/project1.jpg",
      link: "#",
      github: "#",
    },
    {
      title: "Task Management App",
      description:
        "Real-time task management application with collaborative features",
      tech: ["React", "Socket.io", "Express", "PostgreSQL"],
      image: "/project2.jpg",
      link: "#",
      github: "#",
    },
    {
      title: "Portfolio Website",
      description:
        "Modern portfolio website built with Next.js and Tailwind CSS",
      tech: ["Next.js", "Tailwind CSS", "Framer Motion"],
      image: "/project3.jpg",
      link: "#",
      github: "#",
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-white/80 dark:bg-gray-900/80 backdrop-blur-md z-50 border-b border-gray-200 dark:border-gray-700">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              className="text-xl font-bold text-gray-900 dark:text-white"
            >
              Arifayan Idowu
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="hidden md:flex items-center space-x-4"
            >
              <NavLink href="#about" isActive={activeSection === "about"}>
                About
              </NavLink>
              <NavLink href="#skills" isActive={activeSection === "skills"}>
                Skills
              </NavLink>
              <NavLink href="#projects" isActive={activeSection === "projects"}>
                Projects
              </NavLink>
              <NavLink href="#contact" isActive={activeSection === "contact"}>
                Contact
              </NavLink>
              <ThemeToggle />
            </motion.div>

            {/* Mobile menu button */}
            <motion.button
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="md:hidden p-2 rounded-md text-gray-600 hover:text-gray-900 dark:text-gray-300 dark:hover:text-white"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label="Toggle mobile menu"
            >
              {mobileMenuOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </motion.button>
          </div>
        </div>
      </nav>

      {/* Mobile Navigation Menu */}
      <MobileNav
        isOpen={mobileMenuOpen}
        onClose={() => setMobileMenuOpen(false)}
      />

      {/* Hero Section */}
      <section className="pt-32 pb-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="mb-8"
          >
            <h1 className="text-5xl md:text-7xl font-bold text-gray-900 dark:text-white mb-6">
              Hi, I&apos;m{" "}
              <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                Idowu Arifayan
              </span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-600 dark:text-gray-300 mb-8 max-w-3xl mx-auto">
              Full Stack Developer & Software Engineer passionate about creating
              innovative digital solutions
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-blue-600 hover:bg-blue-700">
                <Download className="mr-2 h-4 w-4" />
                Download Resume
              </Button>
              <Button size="lg" variant="outline">
                <Mail className="mr-2 h-4 w-4" />
                Get In Touch
              </Button>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="relative"
          >
            <div className="w-64 h-64 mx-auto bg-gradient-to-br from-blue-400 to-purple-600 rounded-full opacity-20 blur-3xl"></div>
            <div className="absolute inset-0 flex items-center justify-center">
              <Avatar className="w-48 h-48 border-4 border-white shadow-2xl">
                <AvatarImage
                  src="/profile.webp"
                  alt="Arifayan Idowu"
                  className="object-cover"
                />
                <AvatarFallback className="text-4xl font-bold bg-gradient-to-br from-blue-600 to-purple-600 text-white">
                  AI
                </AvatarFallback>
              </Avatar>
            </div>
          </motion.div>
        </div>
      </section>

      {/* About Section */}
      <section
        id="about"
        className="py-20 px-4 sm:px-6 lg:px-8 bg-white dark:bg-gray-800"
      >
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
              About Me
            </h2>
            <Separator className="w-24 mx-auto" />
          </motion.div>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <h3 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">
                Passionate Developer with a Love for Innovation
              </h3>
              <p className="text-gray-600 dark:text-gray-300 mb-6 leading-relaxed">
                I&apos;m a Full Stack Developer with over 8 years of experience
                building scalable web applications, and hybrid mobile
                applications. I specialize in modern JavaScript frameworks, and
                creating seamless user experiences.
              </p>
              <p className="text-gray-600 dark:text-gray-300 mb-6 leading-relaxed">
                When I&apos;m not coding, you&apos;ll find me exploring new
                technologies, contributing to open-source projects, or sharing
                knowledge with the developer community.
              </p>
              <div className="flex space-x-4">
                <Button variant="outline" size="sm">
                  <Github className="mr-2 h-4 w-4" />
                  GitHub
                </Button>
                <Button variant="outline" size="sm">
                  <Linkedin className="mr-2 h-4 w-4" />
                  LinkedIn
                </Button>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              viewport={{ once: true }}
              className="space-y-6"
            >
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <Zap className="mr-2 h-5 w-5 text-blue-600" />
                    Fast & Responsive
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 dark:text-gray-400">
                    Building performant applications that provide excellent user
                    experience across all devices.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <Code className="mr-2 h-5 w-5 text-green-600" />
                    Clean Code
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600  dark:text-gray-400">
                    Writing maintainable, scalable code following best practices
                    and design patterns.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <Globe className="mr-2 h-5 w-5 text-purple-600" />
                    Modern Solutions
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600  dark:text-gray-400">
                    Leveraging cutting-edge technologies to solve complex
                    business problems.
                  </p>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section
        id="skills"
        className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50 dark:bg-gray-900"
      >
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
              Skills & Technologies
            </h2>
            <Separator className="w-24 mx-auto" />
            <p className="text-gray-600 dark:text-gray-300 mt-4 max-w-2xl mx-auto">
              I work with a variety of technologies to create robust and
              scalable applications
            </p>
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {skills.map((skill, index) => (
              <motion.div
                key={skill.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <HoverCard>
                  <HoverCardTrigger asChild>
                    <Card className="cursor-pointer hover:shadow-lg dark:bg-gray-800 dark:border-gray-700 transition-all duration-300 hover:-translate-y-1">
                      <CardContent className="p-6 text-center">
                        <skill.icon className="h-12 w-12 mx-auto mb-3 text-blue-600" />
                        <h3 className="font-semibold text-gray-900 dark:text-white mb-1">
                          {skill.name}
                        </h3>
                        <Badge variant="secondary" className="text-xs">
                          {skill.category}
                        </Badge>
                      </CardContent>
                    </Card>
                  </HoverCardTrigger>
                  <HoverCardContent className="w-80">
                    <div className="flex justify-between space-x-4">
                      <Avatar>
                        <AvatarImage
                          src="/profile.webp"
                          className="object-cover"
                          alt="Arifayan Idowu"
                        />
                        <AvatarFallback>AI</AvatarFallback>
                      </Avatar>
                      <div className="space-y-1">
                        <h4 className="text-sm font-semibold">{skill.name}</h4>
                        <p className="text-sm text-gray-600 dark:text-gray-400">
                          Experienced in {skill.name} development with best
                          practices and modern patterns.
                        </p>
                      </div>
                    </div>
                  </HoverCardContent>
                </HoverCard>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section
        id="projects"
        className="py-20 px-4 sm:px-6 lg:px-8 bg-white dark:bg-gray-800"
      >
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
              Featured Projects
            </h2>
            <Separator className="w-24 mx-auto" />
            <p className="text-gray-600 dark:text-gray-300 mt-4 max-w-2xl mx-auto">
              Here are some of the projects I&apos;ve worked on recently
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <motion.div
                key={project.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                viewport={{ once: true }}
              >
                <Card className="h-full hover:shadow-xl dark:bg-gray-800 dark:border-gray-700 transition-all duration-300 hover:-translate-y-2 pt-0 overflow-hidden">
                  <div className="h-48 bg-gradient-to-br from-blue-100 to-purple-100 flex items-center justify-center">
                    <Code className="h-16 w-16 text-blue-600" />
                  </div>
                  <CardHeader>
                    <CardTitle className="text-xl">{project.title}</CardTitle>
                    <CardDescription className="text-gray-600">
                      {project.description}
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="flex flex-wrap gap-2">
                      {project.tech.map((tech) => (
                        <Badge key={tech} variant="secondary">
                          {tech}
                        </Badge>
                      ))}
                    </div>
                    <div className="flex space-x-2">
                      <Button size="sm" variant="outline" className="flex-1">
                        <ExternalLink className="mr-2 h-4 w-4" />
                        Live Demo
                      </Button>
                      <Button size="sm" variant="outline" className="flex-1">
                        <Github className="mr-2 h-4 w-4" />
                        Code
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section
        id="contact"
        className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50 dark:bg-gray-900"
      >
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="mb-12"
          >
            <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
              Let&apos;s Work Together
            </h2>
            <Separator className="w-24 mx-auto" />
            <p className="text-gray-600 dark:text-gray-300 mt-4 max-w-2xl mx-auto">
              I&apos;m always interested in new opportunities and exciting
              projects. Let&apos;s discuss how we can bring your ideas to life.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-blue-600 hover:bg-blue-700">
                <Mail className="mr-2 h-5 w-5" />
                Send Message
              </Button>
              <Button size="lg" variant="outline">
                <Download className="mr-2 h-5 w-5" />
                Download Resume
              </Button>
            </div>

            <div className="flex justify-center space-x-6 pt-8">
              <Button variant="ghost" size="lg">
                <Github className="h-6 w-6" />
              </Button>
              <Button variant="ghost" size="lg">
                <Linkedin className="h-6 w-6" />
              </Button>
              <Button variant="ghost" size="lg">
                <Mail className="h-6 w-6" />
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 px-4 sm:px-6 lg:px-8 bg-gray-900 dark:bg-black text-white">
        <div className="max-w-7xl mx-auto text-center">
          <p className="text-gray-400">
            © {new Date().getFullYear()} Arifayan Idowu. Built with Next.js,
            Tailwind CSS, and ❤️
          </p>
        </div>
      </footer>
    </div>
  );
}
