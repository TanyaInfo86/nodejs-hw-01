import fs from 'node:fs/promises';
import { PATH_DB } from '../constants/contacts.js';

export const removeLastContact = async () => {
    try {
        const data = await fs.readFile(PATH_DB, 'utf8');
        const dataObj = JSON.parse(data);

        if (dataObj.length) {
            dataObj.pop();
            await fs.writeFile(PATH_DB, JSON.stringify(dataObj), 'utf8');
        }

    } catch (error) {
        console.error(error);
    }
};

removeLastContact();