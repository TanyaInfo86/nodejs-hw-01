// import fs from 'node:fs/promises';
// import { PATH_DB } from '../constants/contacts.js';

// export const getAllContacts = async () => {
//     try {
//         const data = await fs.readFile(PATH_DB, 'utf8');
//         const dataObj = JSON.parse(data);
//         return dataObj;
//     } catch (error) {
//         console.error(error);
//     }
// };

// console.log(await getAllContacts());
export const getAllContacts = async () => {
    try {
        const data = await fs.readFile(PATH_DB, 'utf8');
        if (!data) return [];
        const dataObj = JSON.parse(data);
        return dataObj;
    } catch (error) {
        if (error.code === 'ENOENT') {
            console.warn(`File not found at ${PATH_DB}. Returning empty list.`);
            return [];
        }
        console.error(error);
        throw error;
    }
};
