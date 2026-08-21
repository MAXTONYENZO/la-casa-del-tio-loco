import { createFileRoute } from "@tanstack/react-router";
import { Toaster } from "@/components/ui/sonner";
import { Header } from "@/components/site/Header";
import { Hero } from "@/components/site/Hero";
import { Welcome, Mansion } from "@/components/site/Mansion";
import { Fiestas } from "@/components/site/Fiestas";
import { Album } from "@/components/site/Album";
import { Apuntate, Footer } from "@/components/site/Apuntate";

// ✅ CAMBIAR: Sin argumentos
export const Route = createFileRoute()({
  component: Index,
});

function Index() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <Hero />
        <Welcome />
        <Mansion />
        <Fiestas />
        <Album />
        <Apuntate />
      </main>
      <Footer />
      <Toaster position="top-center" richColors />
    </div>
  );
}

export default Index;