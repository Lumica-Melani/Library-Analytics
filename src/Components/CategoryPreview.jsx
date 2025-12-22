// src/Components/CategoryPreview.jsx
import { NavLink } from "react-router-dom";
import { categories } from "../data/data";

export default function CategoryPreview({ limit = 3 }) {
  const previewCategories = categories.slice(0, limit);

  return (
    <section className="py-16 px-6 sm:px-12">
      <h2 className="text-3xl font-semibold mb-8 text-center">
        Browse by Genre
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {previewCategories.map((cat) => (
          <NavLink
            key={cat.genre}
            to={`/catalogue/${cat.genre}`}
            className="group relative h-72 rounded-2xl overflow-hidden"
          >
            <img
              src={cat.img}
              alt={cat.genre}
              className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
            />
            <div className="absolute inset-0 bg-black/40 group-hover:bg-black/30 transition" />
            <div className="relative z-10 flex h-full items-end p-6">
              <h3 className="text-2xl font-semibold text-white">{cat.genre}</h3>
            </div>
          </NavLink>
        ))}
      </div>
    </section>
  );
}
