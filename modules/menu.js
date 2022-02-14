import * as staticelements from './elements.js';

class Menu {
    showBooksList = () => {
      staticelements.listBox.style.display = 'flex';
      staticelements.contactBox.style.display = 'none';
      staticelements.addBox.style.display = 'none';
      staticelements.listNav.style.color = 'rgb(59, 59, 219)';
      staticelements.addNewNav.style.color = 'black';
      staticelements.contactNav.style.color = 'black';
    }

    showBooksAdd= () => {
      staticelements.listBox.style.display = 'none';
      staticelements.contactBox.style.display = 'none';
      staticelements.addBox.style.display = 'flex';
      staticelements.title.value = '';
      staticelements.author.value = '';
      staticelements.addNewNav.style.color = 'rgb(59, 59, 219)';
      staticelements.listNav.style.color = 'black';
      staticelements.contactNav.style.color = 'black';
    }

    showContacts= () => {
      staticelements.listBox.style.display = 'none';
      staticelements.contactBox.style.display = 'flex';
      staticelements.addBox.style.display = 'none';
      staticelements.contactNav.style.color = 'rgb(59, 59, 219)';
      staticelements.listNav.style.color = 'black';
      staticelements.addNewNav.style.color = 'black';
    }
}
export default Menu;