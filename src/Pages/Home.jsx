// src/Pages/Home.jsx
import Hero from "../Components/Hero";
import CategoryPreview from "../Components/CategoryPreview";
import AnalyticsPreview from "../Components/AnalyticsPreview";

export default function Home() {
  return (
    <main className="overflow-x-hidden">
      <Hero />

      <CategoryPreview />

      <AnalyticsPreview />
    </main>
  );
}
