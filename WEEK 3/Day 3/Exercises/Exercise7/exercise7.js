const allBooks = [
  {
    title: "The Alchemist",
    author: "Paulo Coelho",
    image: "https://m.media-amazon.com/images/I/51Z0nLAfLmL.jpg",
    alreadyRead: true
  },
  {
    title: "The Hobbit",
    author: "J.R.R. Tolkien",
    image: "https://m.media-amazon.com/images/I/41aQPTCmeVL.jpg",
    alreadyRead: false
  }
];

const section = document.querySelector(".listBooks");

allBooks.forEach(book => {
  const bookDiv = document.createElement("div");

  const text = document.createElement("p");
  text.textContent = `${book.title} written by ${book.author}`;

  const img = document.createElement("img");
  img.src = book.image;
  img.style.width = "100px";

  if (book.alreadyRead) {
    text.style.color = "red";
  }

  bookDiv.appendChild(text);
  bookDiv.appendChild(img);
  section.appendChild(bookDiv);
});
