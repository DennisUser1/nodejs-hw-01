import { createFakeContact } from '../utils/createFakeContact.js';
import { readContacts } from '../utils/readContacts.js';
import { writeContacts } from '../utils/writeContacts.js';

// npm run generate

const generateContacts = async (number) => {
    try {
        const contacts = await readContacts();
        const newContacts = Array(number)
          .fill(0)
          .map(() => createFakeContact());
        await writeContacts([...contacts, ...newContacts]);
      console.log(`Added ${number} new contacts.`);
    } catch (error) {
      console.error('Error generating contacts:', error);
    }
};

generateContacts(3);