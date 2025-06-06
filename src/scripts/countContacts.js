import fs from 'node:fs/promises';
import { PATH_DB } from '../constants/contacts.js';

export const countContacts = async () => {
    try {
        const data = await fs.readFile(PATH_DB, 'utf8');
        const dataObj = JSON.parse(data);
        const count = dataObj.length;
        return count;
    } catch (error) {
        console.error(error);
    }
};
console.log(await countContacts());