'use client';

import { useState, useEffect, ReactNode } from 'react';

interface TerminalProps {
  children: ReactNode;
  title?: string;
}

export default function Terminal({ children, title = "harikishan@portfolio" }: TerminalProps) {
  return (
    <div className="bg-claude-surface border border-claude-border rounded-lg overflow-hidden shadow-xl">
      {/* Terminal Header */}
      <div className="flex items-center justify-between px-4 py-2 bg-claude-bg border-b border-claude-border">
        <div className="flex items-center gap-2">
          <div className="w-3 h-3 rounded-full bg-red-500"></div>
          <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
          <div className="w-3 h-3 rounded-full bg-green-500"></div>
        </div>
        <span className="text-claude-muted text-sm font-mono">{title}</span>
        <div className="w-16"></div>
      </div>
      {/* Terminal Content */}
      <div className="p-4 font-mono">
        {children}
      </div>
    </div>
  );
}

interface TerminalLineProps {
  prompt?: string;
  command?: string;
  children?: ReactNode;
  typing?: boolean;
}

export function TerminalLine({ prompt = "$", command, children, typing = false }: TerminalLineProps) {
  const [displayedCommand, setDisplayedCommand] = useState('');
  const [showContent, setShowContent] = useState(false);

  useEffect(() => {
    if (typing && command) {
      let index = 0;
      const timer = setInterval(() => {
        setDisplayedCommand(command.slice(0, index));
        index++;
        if (index > command.length) {
          clearInterval(timer);
          setTimeout(() => setShowContent(true), 200);
        }
      }, 50);
      return () => clearInterval(timer);
    } else {
      setDisplayedCommand(command || '');
      setShowContent(true);
    }
  }, [typing, command]);

  return (
    <div className="mb-2">
      {command && (
        <div className="flex items-center gap-2 text-claude-text">
          <span className="text-claude-accent">{prompt}</span>
          <span>{displayedCommand}</span>
          {typing && displayedCommand.length < (command?.length || 0) && (
            <span className="animate-cursor-blink text-claude-accent">▊</span>
          )}
        </div>
      )}
      {showContent && children && (
        <div className="mt-2 pl-4 text-claude-text animate-fade-in">
          {children}
        </div>
      )}
    </div>
  );
}

export function TerminalOutput({ children }: { children: ReactNode }) {
  return (
    <div className="text-claude-text opacity-90 leading-relaxed">
      {children}
    </div>
  );
}
