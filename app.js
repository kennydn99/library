
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
console.log(theHobbit.info());

//Array to store book objects
const myLibrary = [book1, book2, theHobbit];


const dialog = document.querySelector('#addBookDialog');
const addBookBtn = document.querySelector('.add-book-btn');
const cancelBtn = document.querySelector('#closeDialog');

addBookBtn.addEventListener('click', () => {
    dialog.show();
});

cancelBtn.addEventListener('click', () => {
    dialog.close();
});

// take user’s input and store the new book objects into an array
function addBookToLibrary() {
    const titleField = document.querySelector('#title');
    const authorField = document.querySelector('#author');
    const pageNumField = document.querySelector('#pages');
    const haveReadCheck = document.querySelector('#read-check');
    const newBook = new Book(titleField.value, authorField.value, pageNumField.value, haveReadCheck.value);
    console.log(newBook.info);
}

//Loop through array and display each book on page
function displayBook() {
    for (const book of myLibrary) {
        console.log(book);
    }
}

