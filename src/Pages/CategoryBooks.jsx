import { useParams, useSearchParams } from "react-router-dom";
import { books, categories } from "../data/data";
import BookCard from "../Components/BookCard";
import { useEffect, useMemo, useState } from "react";

export default function CategoryBooks() {
  const { genre } = useParams();

  const [searchParams, setSearchParams] = useSearchParams();
  const searchValue = searchParams.get("search") || "";
  const sortValue = searchParams.get("sort") || "";

  const [inputValue, setInputValue] = useState(searchValue);

  const categoryExists = categories.some(
    (cat) => cat.genre.toLowerCase() === genre.toLowerCase()
  );

  const visibleBooks = useMemo(() => {
    if (!categoryExists) return [];

    let result = books.filter((book) => {
      const matchesGenre = book.genre?.toLowerCase() === genre.toLowerCase();
      const matchesSearch =
        book.title?.toLowerCase().includes(searchValue.toLowerCase()) ||
        book.author?.toLowerCase().includes(searchValue.toLowerCase());

      return matchesGenre && matchesSearch;
    });

    if (sortValue === "az")
      result.sort((a, b) => a.title.localeCompare(b.title));
    if (sortValue === "rating-high") result.sort((a, b) => b.rating - a.rating);
    if (sortValue === "rating-low") result.sort((a, b) => a.rating - b.rating);

    return result;
  }, [genre, searchValue, sortValue, categoryExists]);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setSearchParams((prev) => {
        inputValue ? prev.set("search", inputValue) : prev.delete("search");
        return prev;
      });
    }, 300);

    return () => clearTimeout(timeout);
  }, [inputValue, setSearchParams]);

  if (!categoryExists) {
    return (
      <section className="min-h-[70vh] flex flex-col items-center justify-center text-center px-6">
        <h1 className="text-6xl font-bold mb-4">404</h1>
        <p className="text-lg text-[#8fa3a1]">
          The genre "{genre}" does not exist.
        </p>
      </section>
    );
  }

  return (
    <section className="px-6 py-10">
      <h1 className="text-4xl font-semibold capitalize mb-10 text-center">
        {genre} Books
      </h1>
      <div className="flex flex-col gap-4 mb-12 sm:flex-row sm:items-center sm:justify-between">
        <input
          type="text"
          placeholder="Search by author or book title"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          className="
      w-full sm:max-w-md
      px-4 py-2
      rounded-lg
      bg-[#0f1f21]
      text-[#e6e9e3]
      placeholder:text-[#8fa3a1]
      border border-[#1e3a3c]
      focus:outline-none
      focus:ring-2 focus:ring-[#c6b27c]
      transition
    "
        />

        <select
          value={sortValue}
          onChange={(e) =>
            setSearchParams((prev) => {
              prev.set("sort", e.target.value);
              return prev;
            })
          }
          className="
      w-full sm:w-56
      px-4 py-2
      rounded-lg
      bg-[#0f1f21]
      text-[#e6e9e3]
      border border-[#1e3a3c]
      focus:outline-none
      focus:ring-2 focus:ring-[#c6b27c]
      transition
      cursor-pointer
    "
        >
          <option value="">Sort By:</option>
          <option value="az">Alphabetical (A–Z)</option>
          <option value="rating-high">Rating: High → Low</option>
          <option value="rating-low">Rating: Low → High</option>
        </select>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {visibleBooks.map((book) => (
          <BookCard key={book.id} book={book} />
        ))}
      </div>
    </section>
  );
}
