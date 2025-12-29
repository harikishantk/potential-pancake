import Link from 'next/link';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Terminal, { TerminalLine, TerminalOutput } from '@/components/Terminal';
import { getAllPosts } from '@/lib/blog';
import { Calendar, Clock, Tag, ArrowLeft, BookOpen } from 'lucide-react';

export const metadata = {
  title: 'Blog | Harikishan TK',
  description: 'Technical articles on AI, Machine Learning, and software development by Harikishan TK',
};

export default function BlogPage() {
  const posts = getAllPosts();

  return (
    <main className="min-h-screen bg-claude-bg">
      <Header />

      <section className="pt-24 pb-20 px-4">
        <div className="max-w-4xl mx-auto">
          {/* Back link */}
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-claude-muted hover:text-claude-accent transition-colors mb-8 font-mono"
          >
            <ArrowLeft size={16} />
            Back to Portfolio
          </Link>

          <Terminal title="harikishan@portfolio:~/blog">
            <TerminalLine prompt="$" command="ls -la ./posts/">
              <TerminalOutput>
                <div className="flex items-center gap-3 mb-6">
                  <BookOpen className="text-claude-accent" size={28} />
                  <div>
                    <h1 className="text-2xl md:text-3xl font-bold text-claude-text">
                      Blog
                    </h1>
                    <p className="text-claude-muted">
                      Thoughts on AI, ML, and software development
                    </p>
                  </div>
                </div>

                {posts.length === 0 ? (
                  <div className="border border-claude-border rounded-lg p-8 bg-claude-bg text-center">
                    <p className="text-claude-muted mb-4">No posts yet. Check back soon!</p>
                    <p className="text-claude-text text-sm font-mono">
                      <span className="text-claude-accent">$</span> echo "Coming soon..."
                    </p>
                  </div>
                ) : (
                  <div className="space-y-4">
                    {posts.map((post) => (
                      <Link
                        key={post.slug}
                        href={`/blog/${post.slug}`}
                        className="block border border-claude-border rounded-lg p-5 bg-claude-bg hover:border-claude-accent transition-colors group"
                      >
                        <h2 className="text-xl font-semibold text-claude-text group-hover:text-claude-accent transition-colors mb-2">
                          {post.title}
                        </h2>
                        <p className="text-claude-muted text-sm mb-4 line-clamp-2">
                          {post.excerpt}
                        </p>
                        <div className="flex flex-wrap items-center gap-4 text-xs text-claude-muted">
                          <span className="flex items-center gap-1">
                            <Calendar size={14} />
                            {new Date(post.date).toLocaleDateString('en-US', {
                              year: 'numeric',
                              month: 'long',
                              day: 'numeric',
                            })}
                          </span>
                          <span className="flex items-center gap-1">
                            <Clock size={14} />
                            {post.readingTime}
                          </span>
                          {post.tags.length > 0 && (
                            <span className="flex items-center gap-1">
                              <Tag size={14} />
                              {post.tags.slice(0, 3).join(', ')}
                            </span>
                          )}
                        </div>
                      </Link>
                    ))}
                  </div>
                )}
              </TerminalOutput>
            </TerminalLine>
          </Terminal>

          {/* Add post hint */}
          <div className="mt-8 p-4 border border-claude-border rounded-lg bg-claude-surface">
            <p className="text-claude-muted text-sm font-mono">
              <span className="text-claude-accent">💡 Tip:</span> Add markdown files to{' '}
              <code className="px-2 py-0.5 bg-claude-bg rounded text-claude-text">content/blog/</code>{' '}
              to create new posts
            </p>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
