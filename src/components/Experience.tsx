'use client';

import Terminal, { TerminalLine, TerminalOutput } from './Terminal';
import { Calendar, MapPin, ExternalLink } from 'lucide-react';

const experiences = [
  {
    role: 'AI Engineer',
    company: 'Freelance / Personal Projects',
    location: 'Remote',
    period: '2023 - Present',
    description: 'Building AI-powered applications and tools using cutting-edge technologies.',
    highlights: [
      'Developing text summarization tools with LangChain and Groq API',
      'Creating AI chatbots using Streamlit and LangChain',
      'Implementing NLP solutions for sentiment analysis',
      'Building scalable machine learning pipelines',
    ],
    technologies: ['Python', 'LangChain', 'Streamlit', 'Groq', 'OpenAI'],
  },
  {
    role: 'Machine Learning Engineer',
    company: 'Projects & Research',
    location: 'Remote',
    period: '2022 - 2023',
    description: 'Focused on machine learning research and practical implementations.',
    highlights: [
      'Risk Prediction in Corporate Finance using IBM AutoAI',
      'Eye-Tracking Games for Autistic Children',
      'Sentiment Analysis on multilingual data with MindsDB',
      'Participated in Google Cloud programs and certifications',
    ],
    technologies: ['TensorFlow', 'PyTorch', 'Scikit-learn', 'IBM AutoAI', 'MindsDB'],
  },
];

export default function Experience() {
  return (
    <section id="experience" className="py-20 px-4 bg-claude-bg/50">
      <div className="max-w-4xl mx-auto">
        <Terminal title="harikishan@portfolio:~/experience">
          <TerminalLine prompt="$" command="git log --oneline experience/">
            <TerminalOutput>
              <div className="space-y-6">
                {experiences.map((exp, index) => (
                  <div
                    key={index}
                    className="border border-claude-border rounded-lg p-5 bg-claude-bg hover:border-claude-accent/50 transition-colors"
                  >
                    <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-2 mb-3">
                      <div>
                        <h3 className="text-lg font-semibold text-claude-accent">{exp.role}</h3>
                        <p className="text-claude-text font-medium">{exp.company}</p>
                      </div>
                      <div className="flex flex-col gap-1 text-sm text-claude-muted">
                        <span className="flex items-center gap-1">
                          <Calendar size={14} />
                          {exp.period}
                        </span>
                        <span className="flex items-center gap-1">
                          <MapPin size={14} />
                          {exp.location}
                        </span>
                      </div>
                    </div>

                    <p className="text-claude-muted mb-3">{exp.description}</p>

                    <ul className="space-y-1 mb-4">
                      {exp.highlights.map((highlight, i) => (
                        <li key={i} className="flex items-start gap-2 text-sm text-claude-text">
                          <span className="text-claude-success mt-1">→</span>
                          {highlight}
                        </li>
                      ))}
                    </ul>

                    <div className="flex flex-wrap gap-2">
                      {exp.technologies.map((tech, i) => (
                        <span
                          key={i}
                          className="px-2 py-1 text-xs bg-claude-accent/10 text-claude-accent rounded border border-claude-accent/30"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </TerminalOutput>
          </TerminalLine>
        </Terminal>
      </div>
    </section>
  );
}
