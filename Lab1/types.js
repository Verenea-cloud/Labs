const arr = [
    true, 15, 'hello', false, 25,
    'JavaScript', 3.14, true, 'KPI',
    100, false, 'student', 45, true
];

const obj = {
    number: 0,
    string: 0,
    boolean: 0
};

function countTypes(arr) {
    for (const element of arr) {
        const type = typeof element;
        obj[type] += 1;
    }
}

countTypes(arr);

console.dir(obj);