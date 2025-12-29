'use client';

import Terminal, { TerminalLine, TerminalOutput } from './Terminal';
import { ExternalLink, Github, Star } from 'lucide-react';

const projects = [
  {
    name: 'Text Summarization Tool',
    description: 'LangChain + Groq API for summarizing YouTube and website content. Leverages AI to extract key insights from long-form content.',
    technologies: ['Python', 'LangChain', 'Groq', 'Streamlit'],
    github: 'https://github.com/Harikishan-AI',
    stars: 0,
    featured: true,
  },
  {
    name: 'Eye-Tracking Games for Autistic Children',
    description: 'Interactive accessibility-focused tool designed to help autistic children through engaging eye-tracking based games.',
    technologies: ['Python', 'OpenCV', 'Machine Learning'],
    github: 'https://github.com/Harikishan-AI',
    stars: 2,
    featured: true,
  },
  {
    name: 'Search-Engine Gen-AI App',
    description: 'AI chatbot built with Streamlit and LangChain, retrieving information from Wikipedia, Arxiv, and DuckDuckGo.',
    technologies: ['Python', 'Streamlit', 'LangChain', 'APIs'],
    github: 'https://github.com/Harikishan-AI',
    stars: 1,
    featured: true,
  },
  {
    name: 'Risk Prediction in Corporate Finance',
    description: 'Application leveraging IBM AutoAI service for predicting financial risks in corporate environments.',
    technologies: ['Python', 'IBM AutoAI', 'Data Science'],
    github: 'https://github.com/Harikishan-AI',
    stars: 0,
    featured: false,
  },
  {
    name: 'Simple Q&A Chatbot',
    description: 'Interactive web application using Ollama for quick and informative responses to user queries.',
    technologies: ['Python', 'Ollama', 'Streamlit'],
    github: 'https://github.com/Harikishan-AI',
    stars: 0,
    featured: false,
  },
  {
    name: 'Task Manager CLI',
    description: 'User-friendly command-line tool for efficient task tracking and management, built with Python.',
    technologies: ['Python', 'CLI', 'SQLite'],
    github: 'https://github.com/Harikishan-AI',
    stars: 1,
    featured: false,
  },
];

export default function Projects() {
  const featuredProjects = projects.filter((p) => p.featured);
  const otherProjects = projects.filter((p) => !p.featured);

  return (
    <section id="projects" className="py-20 px-4 bg-claude-bg/50">
      <div className="max-w-4xl mx-auto">
        <Terminal title="harikishan@portfolio:~/projects">
          <TerminalLine prompt="$" command="ls -la ./featured/">
            <TerminalOutput>
              <div className="grid md:grid-cols-2 gap-4 mb-6">
                {featuredProjects.map((project, index) => (
                  <div
                    key={index}
                    className="border border-claude-border rounded-lg p-4 bg-claude-bg hover:border-claude-accent transition-colors group"
                  >
                    <div className="flex items-start justify-between mb-2">
                      <h3 className="text-lg font-semibold text-claude-accent group-hover:text-orange-400 transition-colors">
                        {project.name}
                      </h3>
                      {project.stars > 0 && (
                        <span className="flex items-center gap-1 text-yellow-500 text-sm">
                          <Star size={14} fill="currentColor" />
                          {project.stars}
                        </span>
                      )}
                    </div>
                    <p className="text-claude-muted text-sm mb-3 line-clamp-2">
                      {project.description}
                    </p>
                    <div className="flex flex-wrap gap-1.5 mb-3">
                      {project.technologies.map((tech, i) => (
                        <span
                          key={i}
                          className="px-2 py-0.5 text-xs bg-claude-surface text-claude-text rounded border border-claude-border"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1 text-sm text-claude-info hover:underline"
                    >
                      <Github size={14} />
                      View on GitHub
                      <ExternalLink size={12} />
                    </a>
                  </div>
                ))}
              </div>
            </TerminalOutput>
          </TerminalLine>

          <TerminalLine prompt="$" command="ls ./other/">
            <TerminalOutput>
              <div className="grid md:grid-cols-3 gap-3">
                {otherProjects.map((project, index) => (
                  <a
                    key={index}
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="border border-claude-border rounded-lg p-3 bg-claude-bg hover:border-claude-accent transition-colors group"
                  >
                    <h4 className="font-medium text-claude-text group-hover:text-claude-accent transition-colors text-sm mb-1">
                      {project.name}
                    </h4>
                    <p className="text-claude-muted text-xs line-clamp-2">
                      {project.description}
                    </p>
                  </a>
                ))}
              </div>
            </TerminalOutput>
          </TerminalLine>

          <TerminalLine prompt="$" command="echo 'View all projects →'">
            <TerminalOutput>
              <a
                href="https://github.com/Harikishan-AI?tab=repositories"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 mt-2 px-4 py-2 bg-claude-accent text-white rounded-lg hover:bg-orange-600 transition-colors"
              >
                <Github size={18} />
                View All Repositories
                <ExternalLink size={14} />
              </a>
            </TerminalOutput>
          </TerminalLine>
        </Terminal>
      </div>
    </section>
  );
}
