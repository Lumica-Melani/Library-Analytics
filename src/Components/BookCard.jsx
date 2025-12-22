import { useEffect } from "react";
import { trackBookView } from "../utils/viewTracker";

export default function BookCard({ book }) {
  useEffect(() => {
    trackBookView(book.id);
  }, [book.id]);
  return (
    <div className="rounded-xl overflow-hidden bg-neutral-900 shadow-lg hover:-translate-y-1 transition">
      <img
        src={book.bookUrl}
        alt={book.title}
        className="h-72 w-full object-contain bg-black rounded-t-xl"
      />

      <div className="p-4">
        <h3 className="text-lg font-semibold">{book.title}</h3>
        <p className="text-sm opacity-70">{book.author}</p>

        <div className="flex justify-between mt-3 text-sm">
          <span>⭐ {book.rating}</span>
          <span>❤️ {book.likes}</span>
        </div>
      </div>
    </div>
  );
}
