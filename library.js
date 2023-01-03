let myLibrary = [];
const bookContainer = document.getElementById("book-container");

function Book() {
  this.info = function () {
    return title + " by " + author + ", " + pages + ", " + isRead;
  };
}

function addBookToLibrary(title, author, pages, isRead) {
  book = new Book();
  book.title = title;
  book.author = author;
  book.pages = pages;
  book.isRead = isRead;

  myLibrary.push(book);
}

function displayBooks() {
  myLibrary.forEach((book) => {
    const newBook = document.createElement("div");
    const bookTitle = document.createElement("h3");
    const bookAuthor = document.createElement("p");
    const bookPages = document.createElement("p");
    const isRead = document.createElement("p");
    bookTitle.textContent = book.title;
    bookAuthor.textContent = book.author;
    bookPages.textContent = book.pages + " pages";

    if (book.isRead === true) {
      isRead.textContent = "Read";
    } else {
        isRead.textContent = "Not read";
    }

    

    bookContainer.appendChild(newBook);
    newBook.appendChild(bookTitle);
    newBook.appendChild(bookAuthor);
    newBook.appendChild(bookPages);
    newBook.appendChild(isRead);
  });
}

addBookToLibrary("Lord of The Rings", "Tolkien", "900", true);
addBookToLibrary("Book1", "Tolkien", "900", true);

displayBooks();