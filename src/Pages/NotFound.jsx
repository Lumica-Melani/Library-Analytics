import { NavLink } from "react-router-dom";

export default function NotFound() {
  return (
    <section className="min-h-[70vh] flex flex-col items-center justify-center text-center px-6">
      <h1 className="text-6xl font-bold mb-4">404</h1>
      <p className="text-lg text-[#8fa3a1] mb-6">
        The page you’re looking for doesn’t exist.
      </p>

      <NavLink
        to="/"
        className="px-6 py-2 rounded-lg border border-[#c6b27c] text-[#c6b27c] hover:bg-[#c6b27c] hover:text-[#0f1f21] transition"
      >
        Go back home
      </NavLink>
    </section>
  );
}
