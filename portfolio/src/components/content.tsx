import Hero from "./hero";

export default function Content() {
  return (
    <div className="w-full flex-1  overflow-y-scroll snap-mandatory snap-y">
      <Hero />
      <footer className="h-52 snap-end bg-black"></footer>
    </div>
  );
}
