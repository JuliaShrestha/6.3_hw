/*
Реалізуйте функцію removeElement(array, item), щоб видалити елемент item з масиву array.

Наприклад:

const array = [1, 3, 4, 6, 2, 5, 7];

removeElement(array,4);

console.log(array); // Результат: [1, 3, 6, 2, 5, 7]
*/

const array = [1, 3, 4, 6, 2, 5, 7];

function removeElement (removeFromArray, numToDelete) {
    
    return removeFromArray.filter(function(number) {
        return number !== numToDelete;
    });
};

const result = removeElement(array, 7);
console.log(result);