import { useMemo } from "react";
import { getMostViewedBook } from "../utils/viewTracker";
import { books } from "../data/data";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

function Analytics() {
  const mostViewedBook = useMemo(() => getMostViewedBook(), []);

  const topRatedBooks = useMemo(() => {
    return [...books].sort((a, b) => b.rating - a.rating).slice(0, 3);
  }, []);

  const avgRatingsPerGenre = useMemo(() => {
    const genreMap = {};

    books.forEach((book) => {
      if (!genreMap[book.genre]) {
        genreMap[book.genre] = {
          totalRating: 0,
          count: 0,
        };
      }

      genreMap[book.genre].totalRating += book.rating;
      genreMap[book.genre].count += 1;
    });

    return Object.entries(genreMap)
      .map(([genre, data]) => ({
        genre,
        avgRating: Number((data.totalRating / data.count).toFixed(2)),
      }))
      .sort((a, b) => b.avgRating - a.avgRating);
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
              Most Viewed Book
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
          Top Rated Books
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

      <section className="px-6 py-10">
        <h1 className="text-3xl font-semibold mb-8 text-center">
          Average Rating per Genre
        </h1>

        <div
          className="max-w-4xl mx-auto h-96
                      bg-[#0f1f21]
                      border border-[#1e3a3c]
                      rounded-2xl p-6"
        >
          <ResponsiveContainer width="100%" height="100%">
            <BarChart data={avgRatingsPerGenre}>
              <XAxis dataKey="genre" tick={{ fill: "#e6e9e3" }} />
              <YAxis domain={[0, 5]} tick={{ fill: "#e6e9e3" }} />
              <Tooltip
                contentStyle={{
                  backgroundColor: "#0f1f21",
                  border: "1px solid #1e3a3c",
                  borderRadius: "8px",
                  color: "#e6e9e3",
                }}
              />
              <Bar dataKey="avgRating" fill="#c6b27c" radius={[8, 8, 0, 0]} />
            </BarChart>
          </ResponsiveContainer>
        </div>
      </section>
    </>
  );
}

export default Analytics;
