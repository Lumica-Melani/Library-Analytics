import { createAsyncThunk } from "@reduxjs/toolkit";
import { books } from "../data/data";

export const fetchBooks = createAsyncThunk(
  "books/fetchBooks",
  async ({ genre, search, sort }) => {
    await new Promise((res) => setTimeout(res, 400)); // fake API delay

    let result = books.filter(
      (book) => book.genre.toLowerCase() === genre.toLowerCase()
    );

    if (search) {
      result = result.filter(
        (book) =>
          book.title.toLowerCase().includes(search.toLowerCase()) ||
          book.author.toLowerCase().includes(search.toLowerCase())
      );
    }

    if (sort === "az") result.sort((a, b) => a.title.localeCompare(b.title));
    if (sort === "rating-high") result.sort((a, b) => b.rating - a.rating);
    if (sort === "rating-low") result.sort((a, b) => a.rating - b.rating);

    return result;
  }
);
