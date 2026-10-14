'use strict';

/* Collections: Array, Hash (Object)

Implement phone book using array of records.
- Define Array of objects with two fields: `name` and `phone`.
Object example: `{ name: 'Marcus Aurelius', phone: '+380445554433' }`.
- Implement function `findPhoneByName` with signature
`findPhoneByName(name: string): string`. Returning phone from that object
where field `name` equals argument `name`. Use `for` loop for this search. */

const phonebook = [
    {name: 'Lauren Faust', phone: '+380445554433'},
    {name: 'Veronika', phone: '+380445554434'},
    {name: 'Anna', phone: '+380445554435'},
    {name: 'Sofia', phone: '+380445554436'},
];

const findPhoneByName = (name) => {
  for (const p of phonebook) if (p.name === name) return p.phone;
};

module.exports = { phonebook, findPhoneByName };
