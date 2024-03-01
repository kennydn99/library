//Array to store book objects
const myLibrary = [];

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

// take user’s input and store the new book objects into an array
function addBookToLibrary() {

}

//Loop through array and display each book on page
function displayBook() {
    
}

const theHobbit = new Book("The Hobbit", "J.R.R. Tolkien", 295, "not read yet");
console.log(theHobbit.info());
