import { books, developers } from "../db.js";

export const resolvers = {
  Query: {
    books() {
      return books;
    },
    developers() {
      return developers;
    },
  },
};
