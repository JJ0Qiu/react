const data = [
  {
    id: 1,
    title: "The Lord of the Rings",
    publicationDate: "1954-07-29",
    author: "J. R. R. Tolkien",
    genres: [
      "fantasy",
      "high-fantasy",
      "adventure",
      "fiction",
      "novels",
      "literature",
    ],
    hasMovieAdaptation: true,
    pages: 1216,
    translations: {
      spanish: "El señor de los anillos",
      chinese: "魔戒",
      french: "Le Seigneur des anneaux",
    },
    reviews: {
      goodreads: {
        rating: 4.52,
        ratingsCount: 630994,
        reviewsCount: 13417,
      },
      librarything: {
        rating: 4.53,
        ratingsCount: 47166,
        reviewsCount: 452,
      },
    },
  },
  {
    id: 2,
    title: "The Cyberiad",
    publicationDate: "1965-01-01",
    author: "Stanislaw Lem",
    genres: [
      "science fiction",
      "humor",
      "speculative fiction",
      "short stories",
      "fantasy",
    ],
    hasMovieAdaptation: false,
    pages: 295,
    translations: {},
    reviews: {
      goodreads: {
        rating: 4.16,
        ratingsCount: 11663,
        reviewsCount: 812,
      },
      librarything: {
        rating: 4.13,
        ratingsCount: 2434,
        reviewsCount: 0,
      },
    },
  },
  {
    id: 3,
    title: "Dune",
    publicationDate: "1965-01-01",
    author: "Frank Herbert",
    genres: ["science fiction", "novel", "adventure"],
    hasMovieAdaptation: true,
    pages: 658,
    translations: {
      spanish: "",
    },
    reviews: {
      goodreads: {
        rating: 4.25,
        ratingsCount: 1142893,
        reviewsCount: 49701,
      },
    },
  },
  {
    id: 4,
    title: "Harry Potter and the Philosopher's Stone",
    publicationDate: "1997-06-26",
    author: "J. K. Rowling",
    genres: ["fantasy", "adventure"],
    hasMovieAdaptation: true,
    pages: 223,
    translations: {
      spanish: "Harry Potter y la piedra filosofal",
      korean: "해리 포터와 마법사의 돌",
      bengali: "হ্যারি পটার এন্ড দ্য ফিলোসফার্স স্টোন",
      portuguese: "Harry Potter e a Pedra Filosofal",
    },
    reviews: {
      goodreads: {
        rating: 4.47,
        ratingsCount: 8910059,
        reviewsCount: 140625,
      },
      librarything: {
        rating: 4.29,
        ratingsCount: 120941,
        reviewsCount: 1960,
      },
    },
  },
  {
    id: 5,
    title: "A Game of Thrones",
    publicationDate: "1996-08-01",
    author: "George R. R. Martin",
    genres: ["fantasy", "high-fantasy", "novel", "fantasy fiction"],
    hasMovieAdaptation: true,
    pages: 835,
    translations: {
      korean: "왕좌의 게임",
      polish: "Gra o tron",
      portuguese: "A Guerra dos Tronos",
      spanish: "Juego de tronos",
    },
    reviews: {
      goodreads: {
        rating: 4.44,
        ratingsCount: 2295233,
        reviewsCount: 59058,
      },
      librarything: {
        rating: 4.36,
        ratingsCount: 38358,
        reviewsCount: 1095,
      },
    },
  },
];

function getBooks() {
  return data;
}

function getBook(id) {
  return data.find((d) => d.id === id);
}

// Destructuring
const book = getBook(2);

// const title = book.title;
// const author = book.author;

const { title, author, pages, publicationDate, genres, hasMovieAdaptation } =
  book;
console.log(title, author);

// const primaryGenre = book.genres[0];
// const secondaryGenre = book.genres[1];

// rest(...) only put at the end of deconstructuring
const [primaryGenre, secondaryGenre, ...otherGenres] = book.genres;

console.log(primaryGenre, secondaryGenre, otherGenres);

//spread list
genres;
const newGenres = [...genres, "epic fantacy"];
console.log(newGenres);

//spread object: add new property to the object/ update the existing property
//if update the existing property before spread, then it wont work. coz the ...book is the lastest assigning
book;
const updatedBook = {
  ...book,
  moivePublicationDate: "2001-01-01",
  pages: 1212,
};
updatedBook;

const summary = `${
  book.title
}, ${pages} page-long book, written by ${author} is published in ${
  publicationDate.split("-")[0]
}`;
summary;

// ternaries operator: condition ? result of true : result of false

// arrow function
// (arguments...) => return value/ {... return}
//  如果加{} 可以写多行代码但是return value要加‘return’
const getYear = (str) => str.split("-")[0];
console.log(getYear("2001-02-04"));

// falsy: 0, '', null, undefined
"jonas" && "some string";
0 && "some string";

true || "some string";
false || "some string";
// 可以用 variable || default value
// 但 variable为0 时会有问题 因为0是falsy value但也可以是有效数据
// variable ?? default value 会更好

// varibale.property 如果variable是undefined则会报错
// 可以用 varibale?.property 会return undefined
// 所以 variable?.property ?? 0

// Mapping: apply a function to each element in an array
const x = [1, 2, 3, 4].map((el) => el * 2);
x;

const books = getBooks();
const titles = books.map((book) => book.title);
titles;

const essentialData = books.map((book) => ({
  title: book.title,
  author: book.author,
}));

// Filter: if the filter callback return true then the element will go into the new array
// can apply multiple filters
const longBooks = books
  .filter((book) => book.pages > 500)
  .filter((book) => book.hasMovieAdaptation);

const adventureBooks = books
  .filter((book) => book.genres.includes("adventure"))
  .map((book) => book.title);
adventureBooks;

// Reduce: boil down the array to a value
// reduce(callback(accumulater, element), starter value)
const pagesAllBooks = books.reduce((acc, book) => acc + book.pages, 0);

// Sort *will modify the original array
// .sort((a, b) => a - b) ascending
// .sort((a, b) => b - a) descending
const arr = [3, 1, 4, 6, 2, 19, -2];
const sorted = arr.slice().sort((a, b) => a - b);
arr;
sorted;

const sortedByPages = books.slice().sort((a, b) => a.pages - b.pages);
sortedByPages.map((book) => ({ title: book.title, pages: book.pages }));
console.log(sortedByPages);

// Asynchronous: promises
// fetch from api
// using .then
fetch("https://jsonplaceholder.typicode.com/todos")
  .then((res) => res.json())
  .then((data) => console.log(data));

// async/await
async function getTodos() {
  const res = await fetch("https://jsonplaceholder.typicode.com/todos");
  const data = res.json();
  console.log(data);
}

getTodos();
