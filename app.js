//Book constructor
function Book(title, author, pages, read) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
    this.info = function() {
        return `${this.title} by ${this.name}, ${this.pages} pages, ${this.read}`;
    }
}

const book1 = new Book('Dune', 'Frank Herbert', 896, false);
const book2 = new Book("Can't Hurt Me", 'David Goggins', 364, false);
const theHobbit = new Book("The Hobbit", "J.R.R. Tolkien", 295, true);

//Array to store book objects
const myLibrary = [book1, book2, theHobbit];

const dialog = document.querySelector('#addBookDialog');
const addNewBookBtn = document.querySelector('.add-book-btn');
const cancelBtn = document.querySelector('#closeDialog');

addNewBookBtn.addEventListener('click', () => {
    dialog.show();
});

cancelBtn.addEventListener('click', () => {
    dialog.close();
});

// take user’s input and store the new book objects into an array
// let newBook;
function addBookToLibrary() {
    const bookForm = document.querySelector('#book-form');
    const bookTitle = document.querySelector('#title').value;
    const bookAuthor = document.querySelector('#author').value;
    const bookPageNum = document.querySelector('#pages').value;
    const bookRead = document.querySelector('#read-check').checked;

    const newBook = new Book(bookTitle, bookAuthor, bookPageNum, bookRead);
    console.log(newBook);
    myLibrary.push(newBook);

    bookForm.reset();
    dialog.close();
}

const addBookBtn = document.querySelector('#add-book-to-library-btn');
addBookBtn.addEventListener('click', (e) => {
    e.preventDefault();
    addBookToLibrary();
});

//Loop through array and display each book on page
function displayBook() {
    const bookContainer = document.querySelector('.books-container');
    for (const book of myLibrary) {
        console.log(book);
        //create book 'card'
        const bookCard = document.createElement("div");
        bookCard.classList.add('card');
        
        const bookCardTitle = document.createElement('h1');
        bookCardTitle.textContent = book.title;

        const bookCardAuthor = document.createElement('h3');
        bookCardAuthor.textContent = 'by ' + book.author;

        const bookCardPages = document.createElement('span');
        bookCardPages.textContent = book.pages + " pages";

        const bookCardRead = document.createElement('button');
        bookCardRead.classList.add('book-card-btn');
        if (book.read) {
            bookCardRead.textContent = "Read";
            bookCardRead.classList.add('read');
        } else {
            bookCardRead.textContent = "Not Read";
            bookCardRead.classList.add('not-read');
        }
        
        const removeBookBtn = document.createElement('button');
        removeBookBtn.classList.add('book-card-btn', 'remove-btn');
        removeBookBtn.textContent = 'Remove Book';

        bookCard.appendChild(bookCardTitle);
        bookCard.appendChild(bookCardAuthor);
        bookCard.appendChild(bookCardPages);
        bookCard.appendChild(bookCardRead);
        bookCard.appendChild(removeBookBtn);
        bookContainer.appendChild(bookCard);

    }
}

