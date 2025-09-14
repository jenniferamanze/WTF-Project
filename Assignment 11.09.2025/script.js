
let library = [];


const createBook = function(title, author, isAvailable) {
  
  const availability = Boolean(isAvailable);
  return {
    title: String(title),
    author: String(author),
    available: availability
  };
};


const addBook = function(book) {
   library.push(book);
  console.log(`Added "${book.title}" to the library.`);
};

const listAvailableBooks = function() {
  console.log('\n--- Available Books ---');
  
  for (let i = 0; i < library.length; i++) {
       const book = library[i];
    if (book.available) {
      console.log(`- "${book.title}" by ${book.author}`);
    }
  }
};

const getLibrarySummary = function() {
  console.log('\n--- Library Summary ---');
    let summary = {
    totalBooks: library.length,
    availableBooks: library.filter(book => book.available).length,
    unavailableBooks: library.filter(book => !book.available).length
  };

 
  for (let [key, value] of Object.entries(summary)) {
    console.log(`${key}: ${value}`);
  }
};


const book1 = createBook('The Hitchhiker\'s Guide to the Galaxy', 'Douglas Adams', true);
const book2 = createBook('1984', 'George Orwell', false);
const book3 = createBook('The Lord of the Rings', 'J.R.R. Tolkien', true);

addBook(book1);
addBook(book2);
addBook(book3);

listAvailableBooks();
getLibrarySummary();