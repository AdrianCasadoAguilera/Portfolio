import Content from "@/components/content";
import Header from "@/components/header";

export default function Home() {
  return (
    <div className="min-h-screen max-h-screen flex flex-col">
      <Header />
      <main className="w-screen flex-1 flex overflow-hidden">
        <Content />
      </main>
    </div>
  );
}
