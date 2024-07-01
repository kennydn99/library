//Book constructor
// function Book(title, author, pages, read) {
//     this.title = title;
//     this.author = author;
//     this.pages = pages;
//     this.read = read;
//     this.info = function() {
//         return `${this.title} by ${this.name}, ${this.pages} pages, ${this.read}`;
//     }
//     this.toggleReadStatus = function() {
//         this.read  = this.read ? false : true;
//     }
// }

//class refactorization
class Book {
  constructor(title, author, pages, read) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
  }

  info() {
    return `${this.title} by ${this.name}, ${this.pages} pages, ${this.read}`;
  }

  toggleReadStatus() {
    this.read = !this.read;
  }
}

const book1 = new Book("Dune", "Frank Herbert", 896, false);
const book2 = new Book("Can't Hurt Me", "David Goggins", 364, false);
const theHobbit = new Book("The Hobbit", "J.R.R. Tolkien", 295, true);

//Array to store book objects - book1, book2, theHobbit
const myLibrary = [];

const dialog = document.querySelector("#addBookDialog");
const addNewBookBtn = document.querySelector(".add-book-btn");
const cancelBtn = document.querySelector("#closeDialog");

addNewBookBtn.addEventListener("click", () => {
  dialog.show();
});

cancelBtn.addEventListener("click", () => {
  dialog.close();
});

// take user’s input and store the new book objects into an array
// let newBook;
function addBookToLibrary() {
  const bookTitle = document.querySelector("#title").value;
  const bookAuthor = document.querySelector("#author").value;
  const bookPageNum = document.querySelector("#pages").value;
  const bookRead = document.querySelector("#read-check").checked;

  const newBook = new Book(bookTitle, bookAuthor, bookPageNum, bookRead);
  newBook.hasBeenDisplayed = false;
  myLibrary.push(newBook);

  dialog.close();
}

//create bookcard function
function createBookCard(book, index) {
  const bookContainer = document.querySelector(".books-container");

  const bookCard = document.createElement("div");
  bookCard.classList.add("card");

  //set index
  bookCard.dataset.index = index;

  const bookCardTitle = document.createElement("h1");
  bookCardTitle.textContent = book.title;

  const bookCardAuthor = document.createElement("h3");
  bookCardAuthor.textContent = "by " + book.author;

  const bookCardPages = document.createElement("span");
  bookCardPages.textContent = book.pages + " pages";

  const bookCardRead = document.createElement("button");
  bookCardRead.classList.add("book-card-btn");
  bookCardRead.addEventListener("click", () => {
    book.toggleReadStatus();
    if (book.read) {
      bookCardRead.textContent = "Read";
      bookCardRead.classList.add("read");
      bookCardRead.classList.remove("not-read");
    } else {
      bookCardRead.textContent = "Not Read";
      bookCardRead.classList.add("not-read");
      bookCardRead.classList.remove("read");
    }
  });

  if (book.read) {
    bookCardRead.textContent = "Read";
    bookCardRead.classList.add("read");
  } else {
    bookCardRead.textContent = "Not Read";
    bookCardRead.classList.add("not-read");
  }

  const removeBookBtn = document.createElement("button");
  removeBookBtn.classList.add("book-card-btn", "remove-btn");
  removeBookBtn.textContent = "Remove Book";

  bookCard.appendChild(bookCardTitle);
  bookCard.appendChild(bookCardAuthor);
  bookCard.appendChild(bookCardPages);
  bookCard.appendChild(bookCardRead);
  bookCard.appendChild(removeBookBtn);
  bookContainer.appendChild(bookCard);

  removeBookBtn.addEventListener("click", () => {
    let parent = removeBookBtn.parentElement;
    parent.remove();
    myLibrary.splice(parent.dataset.index, 1);
  });
}

const addBookBtn = document.querySelector("#add-book-to-library-btn");
addBookBtn.addEventListener("click", (e) => {
  const bookForm = document.querySelector("#book-form");
  if (!bookForm.checkValidity()) {
    return;
  }

  e.preventDefault();
  addBookToLibrary();
  bookForm.reset();
  displayBook();
});

//Loop through array and display each book on page
function displayBook() {
  for (let i = 0; i < myLibrary.length; i++) {
    let myBook = myLibrary[i];
    //create book 'card'
    if (!myBook.hasBeenDisplayed) {
      createBookCard(myBook, i);
      myBook.hasBeenDisplayed = true;
    }
  }
}

const form = document.querySelector("#book-form");
const titleInput = document.querySelector("#title");
const titleError = document.querySelector("#title + span.error");
const authorInput = document.querySelector("#author");
const authorError = document.querySelector("#author + span.error");
const pagesInput = document.querySelector("#pages");
const pagesError = document.querySelector(".pageErr");

titleInput.addEventListener("input", () => {
  if (titleInput.validity.valid) {
    titleError.textContent = "";
  } else {
    showError();
  }
});

authorInput.addEventListener("input", () => {
  if (authorInput.validity.valid) {
    authorError.textContent = "";
  } else {
    showError();
  }
});

pagesInput.addEventListener("input", () => {
  if (pagesInput.validity.valid) {
    pagesError.textContent = "";
  } else {
    showError();
  }
});

form.addEventListener("submit", (e) => {
  if (
    !titleInput.validity.valid ||
    !authorInput.validity.valid ||
    !pagesInput.validity.valid
  ) {
    showError();
    e.preventDefault();
  }
});

function showError() {
  if (titleInput.validity.valueMissing) {
    titleError.textContent = "Title is mandatory.";
  }
  if (authorInput.validity.valueMissing) {
    authorError.textContent = "Author is mandatory.";
  }
  if (pagesInput.validity.rangeUnderflow) {
    pagesError.textContent = "Please enter a number greater than 1";
  }
}
