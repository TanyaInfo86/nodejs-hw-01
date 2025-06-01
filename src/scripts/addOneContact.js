
import fs from 'node:fs/promises';
import { createFakeContact } from '../utils/createFakeContact.js';
import { PATH_DB } from '../constants/contacts.js';

export const addOneContact = async () => {
    try {
        const data = await fs.readFile(PATH_DB, 'utf8');
        const dataObj = JSON.parse(data);

        const contact = createFakeContact();
        dataObj.push(contact);

        await fs.writeFile(PATH_DB, JSON.stringify(dataObj), 'utf8');
    } catch (error) {
        console.error(error);
    }
};

addOneContact();