"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Github, Mail, MapPin, ExternalLink, Linkedin, Menu, X } from "lucide-react"
import Image from "next/image"
import { useState } from "react"

export default function Portfolio() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const handleProjectClick = (url: string) => {
    window.open(url, "_blank", "noopener,noreferrer")
  }

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      const navbarHeight = 64 // 4rem = 64px
      const elementPosition = element.offsetTop - navbarHeight
      window.scrollTo({
        top: elementPosition,
        behavior: "smooth",
      })
    }
    setIsMenuOpen(false) // Close mobile menu after clicking
  }

  return (
    <div className="min-h-screen bg-background">
      <nav className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-sm border-b">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-16">
            {/* Logo */}
            <div className="font-bold text-xl">Ponraj D</div>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-8">
              <button onClick={() => scrollToSection("about")} className="text-sm hover:text-primary transition-colors">
                About
              </button>
              <button
                onClick={() => scrollToSection("skills")}
                className="text-sm hover:text-primary transition-colors"
              >
                Skills
              </button>
              <button
                onClick={() => scrollToSection("projects")}
                className="text-sm hover:text-primary transition-colors"
              >
                Projects
              </button>
              <button
                onClick={() => scrollToSection("services")}
                className="text-sm hover:text-primary transition-colors"
              >
                Services
              </button>
              <button
                onClick={() => scrollToSection("contact")}
                className="text-sm hover:text-primary transition-colors"
              >
                Contact
              </button>
            </div>

            {/* Mobile Menu Button */}
            <button className="md:hidden" onClick={() => setIsMenuOpen(!isMenuOpen)} aria-label="Toggle menu">
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>

          {/* Mobile Navigation */}
          {isMenuOpen && (
            <div className="md:hidden py-4 border-t">
              <div className="flex flex-col space-y-4">
                <button
                  onClick={() => scrollToSection("about")}
                  className="text-left text-sm hover:text-primary transition-colors"
                >
                  About
                </button>
                <button
                  onClick={() => scrollToSection("skills")}
                  className="text-left text-sm hover:text-primary transition-colors"
                >
                  Skills
                </button>
                <button
                  onClick={() => scrollToSection("projects")}
                  className="text-left text-sm hover:text-primary transition-colors"
                >
                  Projects
                </button>
                <button
                  onClick={() => scrollToSection("services")}
                  className="text-left text-sm hover:text-primary transition-colors"
                >
                  Services
                </button>
                <button
                  onClick={() => scrollToSection("contact")}
                  className="text-left text-sm hover:text-primary transition-colors"
                >
                  Contact
                </button>
              </div>
            </div>
          )}
        </div>
      </nav>

      {/* Hero Section */}
      <section id="hero" className="container mx-auto px-4 py-16 md:py-24 pt-24">
        <div className="flex flex-col md:flex-row items-center gap-8 md:gap-12">
          <div className="flex-1 text-center md:text-left">
            <h1 className="text-4xl md:text-6xl font-bold text-balance mb-6">Frontend Developer & Java Programmer</h1>
            <p className="text-xl text-muted-foreground text-pretty mb-8 leading-relaxed">
              I turn ideas into responsive interfaces and reliable backends—now exploring Gen AI to ship smarter
              features, faster.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
              <Button size="lg" className="text-lg px-8">
                Hire me
              </Button>
              <Button variant="outline" size="lg" className="text-lg px-8 bg-transparent">
                View projects
              </Button>
            </div>
          </div>
          <div className="flex-shrink-0">
            <div className="relative w-64 h-64 md:w-80 md:h-80">
              <Image
                src="/images/profile.jpg"
                alt="Ponraj D - Frontend Developer"
                fill
                className="object-cover rounded-2xl shadow-2xl"
                priority
              />
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="bg-muted/50 py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8 text-center">About</h2>
          <div className="max-w-4xl mx-auto">
            <p className="text-lg leading-relaxed mb-6">
              I'm <strong>Ponraj D</strong>, a frontend-focused developer and Java programmer based in India. I build
              performant, accessible, and maintainable web experiences. My current focus is modern frontend (React,
              TypeScript, Tailwind) and robust Java fundamentals for APIs, automation, and testing. I'm also
              experimenting with <strong>Gen AI</strong> to enhance search, personalization, and developer workflow.
            </p>
            <p className="text-lg leading-relaxed text-muted-foreground">
              <strong>What I value:</strong> clarity, simplicity, measurable outcomes, and empathetic UX.
            </p>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-12 text-center">Skills</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card>
              <CardHeader>
                <CardTitle>Frontend</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2">
                  {["HTML5", "CSS3", "JavaScript", "TypeScript", "React", "Accessibility"].map((skill) => (
                    <Badge key={skill} variant="secondary">
                      {skill}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Java & Backend</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2">
                  {["Core Java", "OOP", "REST APIs"].map((skill) => (
                    <Badge key={skill} variant="secondary">
                      {skill}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Testing & Tools</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2">
                  {["Selenium", "TestNG", "Git", "GitHub Actions", "Postman"].map((skill) => (
                    <Badge key={skill} variant="secondary">
                      {skill}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="bg-muted/50 py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-12 text-center">Selected Projects</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <Card>
              <CardHeader>
                <CardTitle>Offline AI Language Exchange</CardTitle>
                <CardDescription>React, TypeScript, LocalStorage, Prompt APIs</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground mb-4">
                  An offline-friendly language exchange web app with phrase decks, spaced repetition, and optional Gen
                  AI hints.
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  <Badge>PWA-ready</Badge>
                  <Badge>Fast search</Badge>
                  <Badge>AI integration</Badge>
                </div>
                <Button
                  variant="outline"
                  size="sm"
                  className="flex items-center gap-2 bg-transparent"
                  onClick={() => handleProjectClick("#")}
                >
                  <ExternalLink className="h-4 w-4" />
                  View Project
                </Button>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>E-commerce Test Automation</CardTitle>
                <CardDescription>Java, Selenium WebDriver, TestNG, GitHub Actions</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground mb-4">
                  Automated login, product CRUD, and order status flows with parallelized suites and reusable POMs.
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  <Badge>CI-friendly</Badge>
                  <Badge>Page Object Model</Badge>
                  <Badge>Parallel execution</Badge>
                </div>
                <Button
                  variant="outline"
                  size="sm"
                  className="flex items-center gap-2 bg-transparent"
                  onClick={() => handleProjectClick("#")}
                >
                  <ExternalLink className="h-4 w-4" />
                  View Project
                </Button>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <div className="flex items-center justify-between">
                  <CardTitle>Website Project 1</CardTitle>
                  <button onClick={() => handleProjectClick("https://github.com/ponraj056/Website-project1")}>
                    <ExternalLink className="h-4 w-4" />
                  </button>
                </div>
                <CardDescription>JavaScript, HTML, CSS</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground mb-4">
                  A personal website project demonstrating frontend fundamentals and UI building.
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  <Badge>Responsive layout</Badge>
                  <Badge>Interactive components</Badge>
                </div>
                <Button
                  variant="outline"
                  size="sm"
                  className="flex items-center gap-2 bg-transparent"
                  onClick={() => handleProjectClick("https://github.com/ponraj056/Website-project1")}
                >
                  <ExternalLink className="h-4 w-4" />
                  View Project
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-12 text-center">Services</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              "Frontend Development: pixel-accurate, responsive UI, accessibility-first",
              "Java Development: small APIs, utilities, integrations",
              "Test Automation: Selenium-based smoke/regression suites",
              "Performance & UI Polish: lighthouse tuning, bundle trimming",
              "Gen AI Features (MVPs): prompt-driven prototypes, basic RAG flows",
            ].map((service, index) => (
              <Card key={index}>
                <CardContent className="p-6">
                  <p className="text-sm">{service}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="bg-muted/50 py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-8">Let's Work Together</h2>
          <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
            Ready to build something amazing? I'm available for part-time projects and collaborations.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button size="lg" className="flex items-center gap-2" asChild>
              <a href="mailto:ponrajsdr@gmail.com">
                <Mail className="h-4 w-4" />
                ponrajsdr@gmail.com
              </a>
            </Button>
            <Button variant="outline" size="lg" className="flex items-center gap-2 bg-transparent" asChild>
              <a href="https://github.com/ponraj056" target="_blank" rel="noopener noreferrer">
                <Github className="h-4 w-4" />
                GitHub Profile
              </a>
            </Button>
            <Button variant="outline" size="lg" className="flex items-center gap-2 bg-transparent" asChild>
              <a href="https://www.linkedin.com/in/ponrajdr" target="_blank" rel="noopener noreferrer">
                <Linkedin className="h-4 w-4" />
                LinkedIn
              </a>
            </Button>
          </div>
          <div className="flex items-center justify-center gap-2 mt-6 text-muted-foreground">
            <MapPin className="h-4 w-4" />
            <span>India (IST)</span>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t py-8">
        <div className="container mx-auto px-4 text-center text-muted-foreground">
          <p>© 2025 Ponraj D. Built with React & Tailwind.</p>
        </div>
      </footer>
    </div>
  )
}
