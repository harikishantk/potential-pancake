import Link from 'next/link';
import { notFound } from 'next/navigation';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Terminal from '@/components/Terminal';
import { getPostBySlug, getAllSlugs } from '@/lib/blog';
import { Calendar, Clock, Tag, ArrowLeft, ChevronRight } from 'lucide-react';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';

type Props = {
  params: Promise<{ slug: string }>;
};

export async function generateStaticParams() {
  const slugs = getAllSlugs();
  return slugs.map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: Props) {
  const { slug } = await params;
  const post = getPostBySlug(slug);
  if (!post) {
    return { title: 'Post Not Found' };
  }
  return {
    title: `${post.title} | Harikishan TK`,
    description: post.excerpt,
  };
}

export default async function BlogPost({ params }: Props) {
  const { slug } = await params;
  const post = getPostBySlug(slug);

  if (!post) {
    notFound();
  }

  return (
    <main className="min-h-screen bg-claude-bg">
      <Header />

      <article className="pt-24 pb-20 px-4">
        <div className="max-w-3xl mx-auto">
          {/* Breadcrumb */}
          <nav className="flex items-center gap-2 text-sm text-claude-muted mb-8 font-mono">
            <Link href="/" className="hover:text-claude-accent transition-colors">
              Home
            </Link>
            <ChevronRight size={14} />
            <Link href="/blog" className="hover:text-claude-accent transition-colors">
              Blog
            </Link>
            <ChevronRight size={14} />
            <span className="text-claude-text truncate">{post.title}</span>
          </nav>

          <Terminal title={`harikishan@portfolio:~/blog/${post.slug}`}>
            <div className="p-2">
              {/* Post Header */}
              <header className="mb-8">
                <h1 className="text-2xl md:text-3xl font-bold text-claude-text mb-4">
                  {post.title}
                </h1>

                <div className="flex flex-wrap items-center gap-4 text-sm text-claude-muted mb-4">
                  <span className="flex items-center gap-1">
                    <Calendar size={16} />
                    {new Date(post.date).toLocaleDateString('en-US', {
                      year: 'numeric',
                      month: 'long',
                      day: 'numeric',
                    })}
                  </span>
                  <span className="flex items-center gap-1">
                    <Clock size={16} />
                    {post.readingTime}
                  </span>
                </div>

                {post.tags.length > 0 && (
                  <div className="flex flex-wrap gap-2">
                    {post.tags.map((tag) => (
                      <span
                        key={tag}
                        className="flex items-center gap-1 px-2 py-1 text-xs bg-claude-accent/10 text-claude-accent rounded border border-claude-accent/30"
                      >
                        <Tag size={12} />
                        {tag}
                      </span>
                    ))}
                  </div>
                )}
              </header>

              {/* Post Content */}
              <div className="prose prose-invert max-w-none">
                <ReactMarkdown
                  remarkPlugins={[remarkGfm]}
                  components={{
                    h1: ({ children }) => (
                      <h1 className="text-2xl font-bold text-claude-accent mt-8 mb-4">{children}</h1>
                    ),
                    h2: ({ children }) => (
                      <h2 className="text-xl font-bold text-claude-accent mt-6 mb-3">{children}</h2>
                    ),
                    h3: ({ children }) => (
                      <h3 className="text-lg font-semibold text-claude-accent mt-4 mb-2">{children}</h3>
                    ),
                    p: ({ children }) => (
                      <p className="text-claude-text leading-relaxed mb-4">{children}</p>
                    ),
                    a: ({ href, children }) => (
                      <a
                        href={href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-claude-info hover:underline"
                      >
                        {children}
                      </a>
                    ),
                    code: ({ className, children }) => {
                      const isInline = !className;
                      if (isInline) {
                        return (
                          <code className="px-1.5 py-0.5 bg-claude-surface text-claude-accent rounded text-sm">
                            {children}
                          </code>
                        );
                      }
                      return (
                        <code className={`${className} text-sm`}>{children}</code>
                      );
                    },
                    pre: ({ children }) => (
                      <pre className="bg-claude-bg border border-claude-border rounded-lg p-4 overflow-x-auto my-4">
                        {children}
                      </pre>
                    ),
                    ul: ({ children }) => (
                      <ul className="list-disc list-inside text-claude-text mb-4 space-y-1">
                        {children}
                      </ul>
                    ),
                    ol: ({ children }) => (
                      <ol className="list-decimal list-inside text-claude-text mb-4 space-y-1">
                        {children}
                      </ol>
                    ),
                    li: ({ children }) => (
                      <li className="text-claude-text">{children}</li>
                    ),
                    blockquote: ({ children }) => (
                      <blockquote className="border-l-4 border-claude-accent pl-4 my-4 italic text-claude-muted">
                        {children}
                      </blockquote>
                    ),
                    strong: ({ children }) => (
                      <strong className="font-bold text-white">{children}</strong>
                    ),
                    em: ({ children }) => (
                      <em className="italic text-claude-text">{children}</em>
                    ),
                    hr: () => <hr className="border-claude-border my-8" />,
                    img: ({ src, alt }) => (
                      <img
                        src={src}
                        alt={alt}
                        className="rounded-lg border border-claude-border my-4 max-w-full"
                      />
                    ),
                    table: ({ children }) => (
                      <div className="overflow-x-auto my-4">
                        <table className="min-w-full border border-claude-border">{children}</table>
                      </div>
                    ),
                    th: ({ children }) => (
                      <th className="border border-claude-border px-4 py-2 bg-claude-surface text-claude-text font-semibold">
                        {children}
                      </th>
                    ),
                    td: ({ children }) => (
                      <td className="border border-claude-border px-4 py-2 text-claude-text">
                        {children}
                      </td>
                    ),
                  }}
                >
                  {post.content}
                </ReactMarkdown>
              </div>

              {/* Back to blog */}
              <div className="mt-12 pt-8 border-t border-claude-border">
                <Link
                  href="/blog"
                  className="inline-flex items-center gap-2 text-claude-muted hover:text-claude-accent transition-colors font-mono"
                >
                  <ArrowLeft size={16} />
                  Back to all posts
                </Link>
              </div>
            </div>
          </Terminal>
        </div>
      </article>

      <Footer />
    </main>
  );
}
