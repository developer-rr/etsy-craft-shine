import Layout from "@/components/Layout";
import SEO from "@/components/SEO";
import { Link } from "react-router-dom";
import { Mail, Clock } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function Contact() {
  return (
    <Layout>
      <SEO title="Contact EtsyCraft — Get Support" description="Get in touch with the EtsyCraft team. Bug reports, feature requests, billing questions. Response within 24 business hours." path="/contact" />
      <section className="py-16 md:py-20 bg-gradient-to-b from-card to-background">
        <div className="container max-w-3xl mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-extrabold leading-tight tracking-tight mb-4">Get in Touch</h1>
          <p className="text-lg text-muted-foreground">We'd love to hear from you. Our team typically responds within 24 business hours.</p>
        </div>
      </section>

      <section className="py-16 bg-card">
        <div className="container max-w-4xl mx-auto px-4 grid md:grid-cols-3 gap-10">
          {/* Sidebar */}
          <div className="space-y-6">
            <div className="bg-surface-warm rounded-2xl border border-border p-6">
              <div className="flex items-center gap-2 mb-2">
                <Mail className="w-4 h-4 text-primary" />
                <h3 className="font-semibold text-sm">Email</h3>
              </div>
              <a href="mailto:support@etsycraft.com" className="text-sm text-primary hover:underline">support@etsycraft.com</a>
            </div>
            <div className="bg-surface-warm rounded-2xl border border-border p-6">
              <div className="flex items-center gap-2 mb-2">
                <Clock className="w-4 h-4 text-primary" />
                <h3 className="font-semibold text-sm">Response time</h3>
              </div>
              <p className="text-sm text-muted-foreground">Within 24 business hours</p>
            </div>
            <div className="bg-surface-warm rounded-2xl border border-border p-6">
              <p className="text-sm text-muted-foreground">💡 Check our <Link to="/faq" className="text-primary hover:underline">FAQ</Link> first — your answer might already be there.</p>
            </div>
          </div>

          {/* Form */}
          <div className="md:col-span-2">
            <form name="contact" data-netlify="true" className="space-y-5">
              <input type="hidden" name="form-name" value="contact" />
              <div>
                <label className="block text-sm font-medium mb-1.5">Name <span className="text-muted-foreground">(optional)</span></label>
                <input type="text" name="name" placeholder="Your name" className="w-full rounded-lg border border-border bg-background px-4 py-3 text-sm placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary" />
              </div>
              <div>
                <label className="block text-sm font-medium mb-1.5">Email <span className="text-primary">*</span></label>
                <input type="email" name="email" required placeholder="you@example.com" className="w-full rounded-lg border border-border bg-background px-4 py-3 text-sm placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary" />
              </div>
              <div>
                <label className="block text-sm font-medium mb-1.5">Subject <span className="text-primary">*</span></label>
                <select name="subject" required className="w-full rounded-lg border border-border bg-background px-4 py-3 text-sm text-foreground focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary">
                  <option value="">Select a topic...</option>
                  <option value="bug">Bug Report</option>
                  <option value="feature">Feature Request</option>
                  <option value="billing">Billing</option>
                  <option value="other">Other</option>
                </select>
              </div>
              <div>
                <label className="block text-sm font-medium mb-1.5">Message <span className="text-primary">*</span></label>
                <textarea name="message" required rows={5} placeholder="Tell us how we can help..." className="w-full rounded-lg border border-border bg-background px-4 py-3 text-sm placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary resize-none" />
              </div>
              <Button type="submit" size="lg" className="bg-primary hover:bg-primary-hover text-primary-foreground w-full sm:w-auto">
                Send Message
              </Button>
            </form>
          </div>
        </div>
      </section>
    </Layout>
  );
}
