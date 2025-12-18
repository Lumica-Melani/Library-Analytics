import { categories } from "../data/data";
import { NavLink } from "react-router-dom";

export default function Catalogue() {
  return (
    <section className="px-6 py-10">
      <h1 className="text-4xl font-semibold mb-10 text-center">
        Explore the Catalogue
      </h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {categories.map((category) => (
          <NavLink
            key={category.id}
            to={`/catalogue/${category.id}`}
            className="group relative h-72 rounded-2xl overflow-hidden"
          >
            <img
              src={category.img}
              alt={category.name}
              className="absolute inset-0 h-full w-full object-cover group-hover:scale-105 transition-transform duration-500"
            />

            <div className="absolute inset-0 bg-black/50 group-hover:bg-black/40 transition" />

            <div className="relative z-10 flex h-full items-end p-6">
              <h2 className="text-3xl font-semibold text-white">
                {category.name}
              </h2>
            </div>
          </NavLink>
        ))}
      </div>
    </section>
  );
}
