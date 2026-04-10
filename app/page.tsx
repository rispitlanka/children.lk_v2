import Hero from "./components/Hero";
import QuickAccessHubs from "./components/QuickAccessHubs";
import ResourcesHub from "./components/Accesshubs/ResourcesHub";
import MediaHub from "./components/Accesshubs/MediaHub";

export default function Home() {
  return (
    <main style={{ width: "100%", flex: 1 }}>
      <div style={{ maxWidth: "1256px", margin: "0 auto" }}>
        <Hero />
      </div>
      <QuickAccessHubs />
      <ResourcesHub />
      

      {/* just for testing UI */}
      {/* Learning Hub Spacer - complete empty space for now */}
      <div style={{ height: "160px", width: "100%" }} />

      <MediaHub />
    </main>
  );
}
