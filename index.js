import * as staticelements from './modules/elements.js';
import Book from './modules/bookClass.js';
import Menu from './modules/menu.js';
import { DateTime } from './node_modules/luxon/src/luxon.js';

const time = () => {
  const dateT = DateTime.now().toLocaleString(DateTime.DATETIME_MED);
  staticelements.currentdate.innerHTML = dateT;
  setTimeout(time, 1000);
};

time();

const book = new Book(document.getElementById('book-lis'));
const menu = new Menu();
const addBookbtn = document.querySelector('.Add');
addBookbtn.addEventListener('click', () => {
  book.addNewBook();
});

staticelements.listNav.addEventListener('click', () => {
  menu.showBooksList();
});
staticelements.addNewNav.addEventListener('click', () => {
  menu.showBooksAdd();
});
staticelements.contactNav.addEventListener('click', () => {
  menu.showContacts();
});
window.onload = book.generateBooks();