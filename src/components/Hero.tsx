'use client';

import { useEffect, useState } from 'react';
import { ChevronDown } from 'lucide-react';

export default function Hero() {
  const [displayText, setDisplayText] = useState('');
  const fullText = 'AI Engineer | ML Specialist | Gen AI Enthusiast';

  useEffect(() => {
    let index = 0;
    const timer = setInterval(() => {
      setDisplayText(fullText.slice(0, index));
      index++;
      if (index > fullText.length) {
        clearInterval(timer);
      }
    }, 40);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="min-h-screen flex flex-col items-center justify-center px-4 relative">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-claude-accent/5 to-transparent pointer-events-none" />

      <div className="max-w-4xl mx-auto text-center z-10">
        {/* Terminal-style greeting */}
        <div className="mb-8 inline-block">
          <div className="bg-claude-surface border border-claude-border rounded-lg px-6 py-4 font-mono text-left">
            <p className="text-claude-muted text-sm mb-2">
              <span className="text-claude-accent">~/portfolio</span> on <span className="text-claude-success">main</span>
            </p>
            <p className="text-claude-text">
              <span className="text-claude-accent">$</span> Welcome to my portfolio
              <span className="animate-cursor-blink text-claude-accent ml-1">▊</span>
            </p>
          </div>
        </div>

        {/* Name */}
        <h1 className="text-4xl md:text-6xl font-bold text-claude-text mb-4">
          Harikishan <span className="text-claude-accent">TK</span>
        </h1>

        {/* Typing effect tagline */}
        <p className="text-xl md:text-2xl text-claude-muted font-mono h-8 mb-8">
          {displayText}
          {displayText.length < fullText.length && (
            <span className="animate-cursor-blink text-claude-accent">▊</span>
          )}
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <a
            href="#about"
            className="px-6 py-3 bg-claude-accent text-white rounded-lg font-semibold hover:bg-orange-600 transition-colors"
          >
            Explore Portfolio
          </a>
          <a
            href="/blog"
            className="px-6 py-3 border border-claude-border text-claude-text rounded-lg font-semibold hover:border-claude-accent hover:text-claude-accent transition-colors"
          >
            Read My Blog
          </a>
        </div>

        {/* Stats */}
        <div className="mt-16 grid grid-cols-3 gap-8 max-w-md mx-auto">
          <div className="text-center">
            <p className="text-3xl font-bold text-claude-accent">18+</p>
            <p className="text-claude-muted text-sm">Projects</p>
          </div>
          <div className="text-center">
            <p className="text-3xl font-bold text-claude-accent">3+</p>
            <p className="text-claude-muted text-sm">Years ML</p>
          </div>
          <div className="text-center">
            <p className="text-3xl font-bold text-claude-accent">AI</p>
            <p className="text-claude-muted text-sm">Focus</p>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <a
        href="#about"
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-claude-muted hover:text-claude-accent transition-colors animate-bounce"
      >
        <ChevronDown size={32} />
      </a>
    </section>
  );
}
