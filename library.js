let myLibrary = [];
const bookContainer = document.getElementById("book-container");
const newBookBtn = document.getElementById("new-book-btn");
let removeBtns = document.getElementsByClassName("remove-btn");
let remove;

newBookBtn.addEventListener("click", submitClick);

function submitClick(event) {
  event.preventDefault();
  const title = document.getElementById("book-title").value;
  const author = document.getElementById("book-author").value;
  const pages = document.getElementById("book-pages").value;
  const isRead = document.getElementById("is-read").checked;

  addBookToLibrary(title, author, pages, isRead);
}

function removeBook(event) {
  let book = event.target.parentElement;
  index = book.dataset.index;
  myLibrary.splice(index, 1);
  book.parentElement.removeChild(book);
}

function Book() {
  this.info = function () {
    return title + " by " + author + ", " + pages + ", " + isRead;
  };
}

function addBookToLibrary(title, author, pages, isRead) {
  let book = new Book();
  book.title = title;
  book.author = author;
  book.pages = pages;
  book.isRead = isRead;

  myLibrary.push(book);
  displayBooks();
  updateButtons();
}

function displayBooks() {
  const displayedBooks = Array.from(document.getElementsByClassName("book"));

  displayedBooks.forEach((element) => {
    element.parentElement.removeChild(element);
  });

  myLibrary.forEach((book, index) => {
    const newBook = document.createElement("div");
    const bookTitle = document.createElement("h3");
    const bookAuthor = document.createElement("p");
    const bookPages = document.createElement("p");
    const isRead = document.createElement("p");
    const removeBtn = document.createElement("button");
    removeBtn.type = "button";
    removeBtn.className = "remove-btn";
    removeBtn.textContent = "Remove Book";
    bookTitle.textContent = book.title;
    bookAuthor.textContent = book.author;
    bookPages.textContent = book.pages + " pages";

    if (book.isRead === true) {
      isRead.textContent = "Read";
    } else {
      isRead.textContent = "Not read";
    }

    bookContainer.appendChild(newBook);
    newBook.className = "book";
    newBook.dataset.index = index;
    newBook.appendChild(bookTitle);
    newBook.appendChild(bookAuthor);
    newBook.appendChild(bookPages);
    newBook.appendChild(isRead);
    newBook.appendChild(removeBtn);
  });
}

function updateButtons() {
  remove = Array.from(document.getElementsByClassName("remove-btn"));

  remove.forEach((btn) => {
    btn.addEventListener("click", removeBook);
  });
}
