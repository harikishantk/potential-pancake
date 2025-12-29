'use client';

import Terminal, { TerminalLine, TerminalOutput } from './Terminal';

const skillCategories = [
  {
    name: 'Languages & Frameworks',
    icon: '🐍',
    skills: [
      { name: 'Python', level: 95 },
      { name: 'TensorFlow', level: 85 },
      { name: 'PyTorch', level: 80 },
      { name: 'Scikit-learn', level: 90 },
      { name: 'LangChain', level: 85 },
    ],
  },
  {
    name: 'Data & ML Tools',
    icon: '📊',
    skills: [
      { name: 'Pandas', level: 90 },
      { name: 'NumPy', level: 90 },
      { name: 'Seaborn', level: 80 },
      { name: 'OpenCV', level: 75 },
      { name: 'Streamlit', level: 85 },
    ],
  },
  {
    name: 'Infrastructure & DevOps',
    icon: '☁️',
    skills: [
      { name: 'AWS', level: 70 },
      { name: 'Docker', level: 75 },
      { name: 'Git', level: 90 },
      { name: 'MySQL', level: 80 },
      { name: 'Linux', level: 85 },
    ],
  },
  {
    name: 'AI & Specializations',
    icon: '🤖',
    skills: [
      { name: 'Machine Learning', level: 90 },
      { name: 'Deep Learning', level: 85 },
      { name: 'NLP', level: 85 },
      { name: 'Generative AI', level: 80 },
      { name: 'LLMs', level: 80 },
    ],
  },
];

function SkillBar({ name, level }: { name: string; level: number }) {
  return (
    <div className="mb-3">
      <div className="flex justify-between mb-1">
        <span className="text-claude-text text-sm">{name}</span>
        <span className="text-claude-muted text-xs">{level}%</span>
      </div>
      <div className="h-2 bg-claude-bg rounded-full overflow-hidden">
        <div
          className="h-full bg-gradient-to-r from-claude-accent to-orange-500 rounded-full transition-all duration-1000"
          style={{ width: `${level}%` }}
        />
      </div>
    </div>
  );
}

export default function Skills() {
  return (
    <section id="skills" className="py-20 px-4">
      <div className="max-w-4xl mx-auto">
        <Terminal title="harikishan@portfolio:~/skills">
          <TerminalLine prompt="$" command="npm list --depth=0 skills">
            <TerminalOutput>
              <div className="grid md:grid-cols-2 gap-6">
                {skillCategories.map((category, index) => (
                  <div
                    key={index}
                    className="border border-claude-border rounded-lg p-4 bg-claude-bg"
                  >
                    <h3 className="flex items-center gap-2 text-lg font-semibold text-claude-accent mb-4">
                      <span>{category.icon}</span>
                      {category.name}
                    </h3>
                    {category.skills.map((skill, i) => (
                      <SkillBar key={i} name={skill.name} level={skill.level} />
                    ))}
                  </div>
                ))}
              </div>
            </TerminalOutput>
          </TerminalLine>

          <TerminalLine prompt="$" command="cat certifications.md">
            <TerminalOutput>
              <div className="mt-4 border border-claude-border rounded-lg p-4 bg-claude-bg">
                <h3 className="text-lg font-semibold text-claude-accent mb-3">Certifications & Learning</h3>
                <ul className="space-y-2">
                  <li className="flex items-start gap-2 text-claude-text">
                    <span className="text-claude-success">✓</span>
                    Google Cloud - 30 Days of Google Cloud Program
                  </li>
                  <li className="flex items-start gap-2 text-claude-text">
                    <span className="text-claude-success">✓</span>
                    Competitive Programming (Continuous Learning)
                  </li>
                  <li className="flex items-start gap-2 text-claude-text">
                    <span className="text-claude-success">✓</span>
                    Machine Learning & Deep Learning Specializations
                  </li>
                </ul>
              </div>
            </TerminalOutput>
          </TerminalLine>
        </Terminal>
      </div>
    </section>
  );
}
