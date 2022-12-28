let myLibrary = [];

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
    
}