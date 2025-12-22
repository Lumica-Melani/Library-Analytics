const STORAGE_KEY = "dlibrary_views";

import { books } from "../data/data";

export function getMostViewedBook() {
  const rawViews = localStorage.getItem("dlibrary_views");
  if (!rawViews) return null;

  const views = JSON.parse(rawViews);
  const sorted = Object.entries(views).sort((a, b) => b[1] - a[1]);
  if (!sorted.length) return null;

  const [topId] = sorted[0];
  return books.find((book) => book.id === topId) || null;
}
