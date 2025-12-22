const STORAGE_KEY = "dlibrary_views";

import { books } from "../data/data";

export function trackBookView(bookId) {
  const raw = localStorage.getItem(STORAGE_KEY);
  const views = raw ? JSON.parse(raw) : {};

  views[bookId] = (views[bookId] || 0) + 1;

  localStorage.setItem(STORAGE_KEY, JSON.stringify(views));
}

export function getMostViewedBook() {
  const rawViews = localStorage.getItem(STORAGE_KEY);
  if (!rawViews) return null;

  const views = JSON.parse(rawViews);
  const sorted = Object.entries(views).sort((a, b) => b[1] - a[1]);
  if (!sorted.length) return null;

  const [topId] = sorted[0];
  return books.find((book) => String(book.id) === String(topId)) || null;
}
