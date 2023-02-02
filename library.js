const Library = (() => {
  let myLibrary = [];
  const bookContainer = document.getElementById("book-container");
  const newBookBtn = document.getElementById("new-book-btn");
  let remove;

  newBookBtn.addEventListener("click", submitClick);

  class Book {
    title;
    author;
    pages;
    isRead;

    constructor() {}

    get info() {
      return title + " by " + author + ", " + pages + ", " + isRead;
    }

    set title(title) {
      this.title = title;
    }

    set author(author) {
      this.author = author;
    }

    set pages(pages) {
      this.pages = pages;
    }

    set isRead(isRead) {
      this.isRead = isRead;
    }
  }

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

    let bookList = Array.from(document.getElementsByClassName("book"));

    // update the index of each book
    bookList.forEach((book, index) => {
      book.dataset.index = index;
    });
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
      const group = document.createElement("div");
      const isRead = document.createElement("p");
      const isReadCheckbox = document.createElement("input");
      const isReadIndicator = document.createElement("div");
      isReadCheckbox.setAttribute("type", "checkbox");
      const removeBtn = document.createElement("button");
      removeBtn.type = "button";
      removeBtn.className = "remove-btn";
      removeBtn.textContent = "Remove Book";
      bookTitle.textContent = book.title;
      bookAuthor.textContent = book.author;
      bookPages.textContent = book.pages + " pages";

      if (book.isRead === true) {
        isRead.textContent = "Read";
        isReadIndicator.style.backgroundColor = "rgb(133, 190, 133)";
      } else {
        isRead.textContent = "Not read";
        isReadIndicator.style.backgroundColor = "red";
      }

      bookContainer.appendChild(newBook);
      newBook.className = "book";
      newBook.dataset.index = index;
      newBook.appendChild(bookTitle);
      newBook.appendChild(bookAuthor);
      newBook.appendChild(bookPages);
      newBook.appendChild(group);
      group.appendChild(isRead);
      group.appendChild(isReadCheckbox);
      group.appendChild(isReadIndicator);
      newBook.appendChild(removeBtn);

      isReadCheckbox.addEventListener("click", changeReadStatus);
    });
  }

  function updateButtons() {
    remove = Array.from(document.getElementsByClassName("remove-btn"));

    remove.forEach((btn) => {
      btn.addEventListener("click", removeBook);
    });
  }

  function changeReadStatus(event) {
    const checkbox = event.target;
    const book = checkbox.parentElement.parentElement;
    const isReadIndicator = document.querySelector(
      '[data-index="' + book.dataset.index + '"] div div'
    );
    const isReadText = document.querySelector(
      '[data-index="' + book.dataset.index + '"] div p'
    );

    if (checkbox.checked === true && myLibrary[book.dataset.index].isRead) {
      isReadIndicator.style.backgroundColor = "red";
      isReadText.textContent = "Not read";
      myLibrary[book.dataset.index].isRead = false;
    } else {
      isReadIndicator.style.backgroundColor = "rgb(133, 190, 133)";
      isReadText.textContent = "Read";
      myLibrary[book.dataset.index].isRead = true;
    }
  }
})();