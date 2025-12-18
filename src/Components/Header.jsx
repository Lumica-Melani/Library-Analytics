import { NavLink } from "react-router-dom";

export default function Header() {
  return (
    <header className="sticky top-0 z-50 bg-[var(--color-bg)] border-b border-[var(--color-surface)]">
      <nav className="mx-auto max-w-6xl px-6 py-4 flex items-center justify-between">
        <h1 className="text-lg font-semibold tracking-wide text-[var(--color-primary)]">
          D-Lib
        </h1>

        <div className="flex gap-6">
          <NavLink
            to="/"
            className={({ isActive }) =>
              `nav-link ${isActive ? "nav-link-active" : ""}`
            }
          >
            Home
          </NavLink>

          <NavLink
            to="/catalogue"
            className={({ isActive }) =>
              `nav-link ${isActive ? "nav-link-active" : ""}`
            }
          >
            Catalogue
          </NavLink>

          <NavLink
            to="/analytics"
            className={({ isActive }) =>
              `nav-link ${isActive ? "nav-link-active" : ""}`
            }
          >
            Analytics
          </NavLink>
        </div>
      </nav>
    </header>
  );
}
