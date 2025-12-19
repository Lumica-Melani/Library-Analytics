import { useMemo } from "react";
import { getMostViewedBook } from "../utils/viewTracker";
import { books } from "../data/data";

function Analytics() {
  const mostViewedBook = useMemo(() => getMostViewedBook(), []);

  const topRatedBooks = useMemo(() => {
    return [...books].sort((a, b) => b.rating - a.rating).slice(0, 3);
  }, []);

  return (
    <>
      <section className="px-6 py-10">
        <h1 className="text-4xl font-semibold mb-10 text-center">
          Library Analytics
        </h1>

        {mostViewedBook && (
          <div className="max-w-md mx-auto rounded-2xl bg-[#0f1f21] p-6 border border-[#1e3a3c]">
            <h2 className="text-xl font-semibold mb-4 text-center">
              📈 Most Viewed Book
            </h2>

            <img
              src={mostViewedBook.bookUrl}
              alt={mostViewedBook.title}
              className="h-64 w-full object-contain mb-4"
            />

            <h3 className="text-lg font-semibold text-center">
              {mostViewedBook.title}
            </h3>
            <p className="text-[#8fa3a1] text-center">
              {mostViewedBook.author}
            </p>
          </div>
        )}
      </section>

      <section className="px-6 py-10">
        <h2 className="text-2xl font-semibold mb-6 text-center">
          ⭐ Top Rated Books
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {topRatedBooks.map((book) => (
            <div
              key={book.id}
              className="rounded-2xl bg-[#0f1f21] p-4 border border-[#1e3a3c]"
            >
              <img
                src={book.bookUrl}
                alt={book.title}
                className="h-64 w-full object-contain mb-4"
              />

              <h3 className="text-lg font-semibold">{book.title}</h3>
              <p className="text-[#8fa3a1]">{book.author}</p>
              <p className="mt-2 text-sm">⭐ {book.rating}</p>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}

export default Analytics;
