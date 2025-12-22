import Analytics from "../Pages/Analytics";
import { books } from "../data/data";

export default function AnalyticsPreview({ topCount = 3 }) {
  const topRatedBooks = [...books]
    .sort((a, b) => b.rating - a.rating)
    .slice(0, topCount);

  return (
    <section className="py-16 px-6 sm:px-12">
      <h2 className="text-3xl font-semibold mb-8 text-center">
        Analytics Highlights
      </h2>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        <Analytics />

        <div className="rounded-2xl bg-[#0f1f21] p-6 border border-[#1e3a3c]">
          <h3 className="text-xl font-semibold mb-4 text-center">
            Top Rated Books
          </h3>
          {topRatedBooks.map((book) => (
            <div key={book.id} className="mb-4">
              <h4 className="font-semibold">{book.title}</h4>
              <p className="text-[#8fa3a1]">{book.author}</p>
              <p className="text-yellow-400">⭐ {book.rating}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
