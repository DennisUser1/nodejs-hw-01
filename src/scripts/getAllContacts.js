import { readContacts } from '../utils/readContacts.js';

// npm run get-all

export const getAllContacts = async () => {
    try {
      const contacts = await readContacts(); 
      return contacts;
    } catch (error) {
      console.error('Error fetching contacts:', error); 
      throw error; 
    }
};
  
console.log(await getAllContacts());
  