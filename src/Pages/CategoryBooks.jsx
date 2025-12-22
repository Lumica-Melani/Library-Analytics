import { useParams, useSearchParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { setSearch, setSort } from "../store/booksSlice";
import { fetchBooks } from "../store/booksThunks";
import BookCard from "../Components/BookCard";
import { useEffect, useState } from "react";
import { categories } from "../data/data";

export default function CategoryBooks() {
  const { genre } = useParams();
  const dispatch = useDispatch();
  const [, setSearchParams] = useSearchParams();

  const { items, search, sort, loading } = useSelector((state) => state.books);

  const [inputValue, setInputValue] = useState(search);

  const categoryExists = categories.some(
    (cat) => cat.genre.toLowerCase() === genre.toLowerCase()
  );

  useEffect(() => {
    const timeout = setTimeout(() => {
      dispatch(setSearch(inputValue));

      setSearchParams((prev) => {
        inputValue ? prev.set("search", inputValue) : prev.delete("search");
        return prev;
      });
    }, 300);

    return () => clearTimeout(timeout);
  }, [inputValue, dispatch, setSearchParams]);

  useEffect(() => {
    if (categoryExists) {
      dispatch(fetchBooks({ genre, search, sort }));
    }
  }, [genre, search, sort, dispatch, categoryExists]);

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
          className="w-full sm:max-w-md px-4 py-2 rounded-lg bg-[#0f1f21]
            text-[#e6e9e3] placeholder:text-[#8fa3a1]
            border border-[#1e3a3c]
            focus:outline-none focus:ring-2 focus:ring-[#c6b27c]"
        />

        <select
          value={sort}
          onChange={(e) => {
            dispatch(setSort(e.target.value));
            setSearchParams((prev) => {
              e.target.value
                ? prev.set("sort", e.target.value)
                : prev.delete("sort");
              return prev;
            });
          }}
          className="w-full sm:w-56 px-4 py-2 rounded-lg bg-[#0f1f21]
            text-[#e6e9e3] border border-[#1e3a3c]
            focus:outline-none focus:ring-2 focus:ring-[#c6b27c]"
        >
          <option value="">Sort By:</option>
          <option value="az">Alphabetical (A–Z)</option>
          <option value="rating-high">Rating: High → Low</option>
          <option value="rating-low">Rating: Low → High</option>
        </select>
      </div>

      {loading ? (
        <p className="text-center animate-pulse text-[#8fa3a1]">
          Loading books…
        </p>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {items.map((book) => (
            <BookCard key={book.id} book={book} />
          ))}
        </div>
      )}
    </section>
  );
}
