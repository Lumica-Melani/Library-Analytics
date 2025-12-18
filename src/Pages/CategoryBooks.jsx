import { useParams } from "react-router-dom";
import { books } from "../data/data";
import BookCard from "../Components/BookCard";

export default function CategoryBooks() {
  const { genre } = useParams();

  const filteredBooks = books.filter(
    (book) => book.genre.toLowerCase() === genre.toLowerCase()
  );

  return (
    <section className="px-6 py-10">
      <h1 className="text-4xl font-semibold capitalize mb-10">{genre} Books</h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {filteredBooks.map((book) => (
          <BookCard key={book.id} book={book} />
        ))}
      </div>
    </section>
  );
}
