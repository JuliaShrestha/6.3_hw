/*
Реалізуйте функцію removeElement(array, item), щоб видалити елемент item з масиву array.

Наприклад:

const array = [1, 3, 4, 6, 2, 5, 7];

removeElement(array,4);

console.log(array); // Результат: [1, 3, 6, 2, 5, 7]
*/

const array = [1, 3, 4, 6, 2, 5, 7];

function removeElement () {
    let removed = array.splice(2, 1);

    return removed;
}

const result = removeElement();
console.log(array);