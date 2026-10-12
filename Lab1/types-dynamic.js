const arr = [
    10, 'hello', true, 25, false,
    'KPI', 3.14, true, 'JavaScript',
    100, null, undefined, 50, 'student'
];

const obj = {};

function countTypes(arr) {
    for (const element of arr) {
        const type = typeof element;

        if (obj[type] === undefined) {
            obj[type] = 0;
        }

        obj[type] += 1;
    }
}

countTypes(arr);

console.dir(obj);