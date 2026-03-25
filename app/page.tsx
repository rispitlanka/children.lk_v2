import Hero from "./components/Hero";
import QuickAccessHubs from "./components/QuickAccessHubs";

export default function Home() {
  return (
    <main style={{ width: "100%", flex: 1 }}>
      <div style={{ maxWidth: "1256px", margin: "0 auto" }}>
        <Hero />
      </div>
      <QuickAccessHubs />
    </main>
  );
}
