const STORAGE_KEY = "dlibrary_views";

import { books } from "../data/data";

export function getMostViewedBook() {
  const rawViews = localStorage.getItem("dlibrary_views");
  const views = rawViews ? JSON.parse(rawViews) : {};

  if (Object.keys(views).length === 0) return null;

  const [topId] = Object.entries(views).sort((a, b) => b[1] - a[1])[0];

  return books.find((book) => book.id === topId);
}
