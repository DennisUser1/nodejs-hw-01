import { readContacts } from '../utils/readContacts.js';

// npm run count

export const countContacts = async () => (await readContacts()).length;
console.log(await countContacts());