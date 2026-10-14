'use strict';

/* Do following tasks inside function `fn` (see stub: `7-objects.js`)
- Define constant object with single field `name`.
- Define variable object with single field `name`.
- Try to change field `name`.
- Try to assign other object to both identifiers.
- Explain script behaviour. */

const fn = () => {
    const person = { name: 'Veronika' };
    let person2 = { name: 'Lauren Faust' };

    person1.name = 'Anna';
    person2.name = 'Sofia';

    person2 = { name : 'Veronika' };

    return { person, person2 };
};

module.exports = { fn };
