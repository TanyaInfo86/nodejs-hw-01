import { createFakeContact } from '../utils/createFakeContact.js';
import fs from 'node:fs/promises';
import { PATH_DB } from '../constants/contacts.js';
import { faker } from '@faker-js/faker';

const generateContacts = async (number) => {
    try {
        const data = await fs.readFile(PATH_DB, 'utf8');
        const dataObj = JSON.parse(data);

        const createContacts = faker.helpers.multiple(createFakeContact, {
            count: number,
        });

        const updatedContacts = [...dataObj, ...createContacts];
        await fs.writeFile(PATH_DB, JSON.stringify(updatedContacts), 'utf8');
    } catch (error) {
        console.error(error);
    }
};

generateContacts(5);