import { useParams, Link } from "react-router-dom";
import Navbar from "@/components/landing/Navbar";
import Footer from "@/components/landing/Footer";
import { ArrowLeft, Clock, User, Calendar } from "lucide-react";
import { posts } from "@/components/landing/Blog";

const BlogPost = () => {
  const { id } = useParams();
  const post = id ? posts[parseInt(id)] : null;

  if (!post) {
    return (
      <div className="min-h-screen bg-background text-foreground flex flex-col items-center justify-center">
        <h1 className="text-3xl font-bold mb-4">Post not found</h1>
        <Link to="/" className="text-[#00F0FF] hover:underline flex items-center gap-2">
          <ArrowLeft size={16} /> Back to Home
        </Link>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background text-foreground flex flex-col">
      <Navbar />
      
      <main className="flex-grow pt-32 pb-24">
        <article className="max-w-4xl mx-auto px-6">
          <Link to="/" className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-[#00F0FF] transition-colors mb-12">
            <ArrowLeft size={16} /> Back to Platform
          </Link>

          <header className="mb-12 border-b border-[#7B61FF]/20 pb-12">
            <div className="flex items-center gap-4 text-sm text-muted-foreground font-mono mb-6">
              <span className="flex items-center gap-1.5"><Calendar size={14} /> {post.date}</span>
              <span className="flex items-center gap-1.5"><User size={14} /> {post.author}</span>
              <span className="flex items-center gap-1.5"><Clock size={14} /> 5 min read</span>
              <span className="px-2 py-1 bg-[#7B61FF]/10 text-[#00F0FF] border border-[#7B61FF]/20 rounded ml-auto">{post.tag}</span>
            </div>
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-6 leading-[1.15]">
              {post.title}
            </h1>
            <p className="text-xl text-muted-foreground leading-relaxed">
              {post.excerpt}
            </p>
          </header>

          <div className="prose prose-invert prose-p:text-muted-foreground prose-p:leading-relaxed prose-headings:text-foreground prose-a:text-[#00F0FF] hover:prose-a:text-[#00F0FF]/80 max-w-none">
            <p>
              This is a placeholder for the full article content. As an enterprise platform, ElyntisAI ensures that all autonomous agents operate within strictly defined guardrails, leveraging the power of GPUs to process workflows in real-time. The transition towards GPU-accelerated infrastructure represents a watershed moment for artificial intelligence operations.
            </p>
            <h3>The Core Architecture</h3>
            <p>
              By bypassing traditional CPU bottlenecks, our system maintains sub-50ms latency for critical decision-making processes. Whether it's scanning incoming logs for anomaly detection or orchestrating Kubernetes cluster scaling, the ElyntisAI Engine operates seamlessly in the background.
            </p>
            <div className="my-10 p-6 glass rounded-xl border-[#7B61FF]/20 border relative overflow-hidden">
              <div className="absolute top-0 left-0 w-1 h-full bg-gradient-to-b from-[#7B61FF] to-[#00F0FF]" />
              <p className="text-foreground italic font-medium mt-0">
                "Automation without intelligence is just a faster way to make mistakes. Context-aware AI execution is the path forward."
              </p>
            </div>
            <h3>Looking Ahead</h3>
            <p>
              We continue to benchmark and refine our models. Expect full documentation and API SDKs to be released in the upcoming quarter. Thank you for being part of the ElyntisAI ecosystem.
            </p>
          </div>
        </article>
      </main>

      <Footer />
    </div>
  );
};

export default BlogPost;
