'use client';

import { Github, Linkedin, Mail, FileText, Terminal, Heart } from 'lucide-react';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-12 px-4 border-t border-claude-border bg-claude-bg">
      <div className="max-w-4xl mx-auto">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Logo */}
          <div className="flex items-center gap-2 text-claude-text">
            <Terminal size={20} />
            <span className="font-mono font-semibold">harikishan.dev</span>
          </div>

          {/* Social Links */}
          <div className="flex items-center gap-4">
            <a
              href="https://github.com/Harikishan-AI"
              target="_blank"
              rel="noopener noreferrer"
              className="text-claude-muted hover:text-claude-accent transition-colors"
              aria-label="GitHub"
            >
              <Github size={20} />
            </a>
            <a
              href="https://linkedin.com/in/harikishantk"
              target="_blank"
              rel="noopener noreferrer"
              className="text-claude-muted hover:text-claude-accent transition-colors"
              aria-label="LinkedIn"
            >
              <Linkedin size={20} />
            </a>
            <a
              href="https://harikishantk.medium.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-claude-muted hover:text-claude-accent transition-colors"
              aria-label="Medium"
            >
              <FileText size={20} />
            </a>
            <a
              href="mailto:harikishan@example.com"
              className="text-claude-muted hover:text-claude-accent transition-colors"
              aria-label="Email"
            >
              <Mail size={20} />
            </a>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-8 pt-6 border-t border-claude-border text-center">
          <p className="text-claude-muted text-sm font-mono">
            <span className="text-claude-accent">$</span> echo "© {currentYear} Harikishan TK. Built with{' '}
            <Heart size={14} className="inline text-red-500 mx-1" fill="currentColor" /> using Next.js"
          </p>
          <p className="text-claude-muted/50 text-xs mt-2 font-mono">
            Inspired by Claude Code UI
          </p>
        </div>
      </div>
    </footer>
  );
}
