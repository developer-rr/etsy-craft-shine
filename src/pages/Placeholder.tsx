import Layout from "@/components/Layout";

export default function Placeholder({ title }: { title: string }) {
  return (
    <Layout>
      <div className="container py-24 text-center">
        <h1 className="text-4xl font-bold mb-4">{title}</h1>
        <p className="text-muted-foreground">This page is coming soon.</p>
      </div>
    </Layout>
  );
}
