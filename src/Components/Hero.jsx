import { NavLink } from "react-router-dom";
import Library from "../assets/Library.png";

export default function Hero() {
  return (
    <section className="relative bg-[#0f1f21] text-white py-20 px-6 sm:px-12 flex flex-col lg:flex-row items-center lg:justify-between">
      <div className="lg:w-1/2 mb-10 lg:mb-0">
        <h1 className="text-5xl sm:text-6xl font-bold mb-6 text-center">
          Dive into the World of Books
        </h1>
        <p className="text-lg sm:text-xl text-[#c6c6c6] mb-8 text-center">
          Explore your favorite genres, discover top-rated books, and keep track
          of your reading journey.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 items-center justify-center">
          <NavLink
            to="/catalogue"
            className="px-6 py-3 bg-[#c6b27c] text-black font-semibold rounded-lg hover:bg-[#b59f5f] transition"
          >
            Explore Catalogue
          </NavLink>
          <NavLink
            to="/analytics"
            className="px-6 py-3 border border-[#c6b27c] rounded-lg hover:bg-[#1e3a3c] transition"
          >
            See Analytics
          </NavLink>
        </div>
      </div>

      <div className="lg:w-1/2 flex justify-center">
        <img
          src={Library}
          alt="Books and Reading"
          className="w-full max-w-lg object-contain"
        />
      </div>
    </section>
  );
}
