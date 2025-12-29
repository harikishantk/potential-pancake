'use client';

import Terminal, { TerminalLine, TerminalOutput } from './Terminal';
import { Github, Linkedin, Mail, FileText } from 'lucide-react';

export default function About() {
  return (
    <section id="about" className="py-20 px-4">
      <div className="max-w-4xl mx-auto">
        <Terminal title="harikishan@portfolio:~/about">
          <TerminalLine prompt="$" command="whoami">
            <TerminalOutput>
              <div className="space-y-4">
                <div className="flex items-center gap-4">
                  <div className="w-20 h-20 rounded-full bg-gradient-to-br from-claude-accent to-orange-600 flex items-center justify-center text-3xl font-bold text-white">
                    HT
                  </div>
                  <div>
                    <h1 className="text-2xl md:text-3xl font-bold text-claude-text">
                      Harikishan TK
                    </h1>
                    <p className="text-claude-accent font-semibold">AI Engineer</p>
                  </div>
                </div>
              </div>
            </TerminalOutput>
          </TerminalLine>

          <TerminalLine prompt="$" command="cat bio.txt">
            <TerminalOutput>
              <p className="text-claude-text leading-relaxed max-w-2xl">
                A passionate Machine Learning Engineer specializing in{' '}
                <span className="text-claude-accent">Generative AI</span>, focused on developing
                innovative, scalable solutions that push the boundaries of AI technology.
                Currently working on text summarization tools leveraging{' '}
                <span className="text-claude-accent">LangChain</span> for YouTube and website content.
              </p>
            </TerminalOutput>
          </TerminalLine>

          <TerminalLine prompt="$" command="cat interests.json">
            <TerminalOutput>
              <pre className="text-sm bg-claude-bg p-3 rounded border border-claude-border overflow-x-auto">
{`{
  "currentFocus": "Generative AI & LLMs",
  "expertise": [
    "Machine Learning",
    "Deep Learning",
    "Natural Language Processing"
  ],
  "passions": [
    "Building AI-powered applications",
    "Open source contribution",
    "Technical writing"
  ]
}`}
              </pre>
            </TerminalOutput>
          </TerminalLine>

          <TerminalLine prompt="$" command="ls -la ./connect/">
            <TerminalOutput>
              <div className="flex flex-wrap gap-4 mt-2">
                <a
                  href="https://github.com/Harikishan-AI"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 px-4 py-2 bg-claude-bg border border-claude-border rounded-lg hover:border-claude-accent hover:text-claude-accent transition-all"
                >
                  <Github size={18} />
                  <span>GitHub</span>
                </a>
                <a
                  href="https://linkedin.com/in/harikishantk"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 px-4 py-2 bg-claude-bg border border-claude-border rounded-lg hover:border-claude-accent hover:text-claude-accent transition-all"
                >
                  <Linkedin size={18} />
                  <span>LinkedIn</span>
                </a>
                <a
                  href="https://harikishantk.medium.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 px-4 py-2 bg-claude-bg border border-claude-border rounded-lg hover:border-claude-accent hover:text-claude-accent transition-all"
                >
                  <FileText size={18} />
                  <span>Medium</span>
                </a>
                <a
                  href="mailto:harikishan@example.com"
                  className="flex items-center gap-2 px-4 py-2 bg-claude-bg border border-claude-border rounded-lg hover:border-claude-accent hover:text-claude-accent transition-all"
                >
                  <Mail size={18} />
                  <span>Email</span>
                </a>
              </div>
            </TerminalOutput>
          </TerminalLine>
        </Terminal>
      </div>
    </section>
  );
}
