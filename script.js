// задача №1
const fill = (arraySize, value) => {
  const newArray = [];
  for (let i = 0; i < arraySize; i++) {
    newArray.push(value);
  }
  return newArray;
}

console.log(fill(0, 'test')); // Должно быть: []
console.log(fill(3, 5)); // Должно быть: [5, 5, 5]
console.log(fill(2, true)); // Должно быть: [true, true]


// задача №2
const reverse = (array) => {
  return array.slice().reverse();
 }

console.log(reverse([])); // Должно быть: []
console.log(reverse([1])); // Должно быть: [1]
console.log(reverse(['a', 5, true])); // Должно быть: [true, 5, 'a']


// задача №3
const compact = (array) => {
  return array.filter(Boolean);
}

console.log(compact([])); // Должно быть: []
console.log(compact([0, false, '', null, undefined])); // Должно быть: []
console.log(compact([1, 'text', false, 2, null, 3, undefined])); // Должно быть: [1, 'text', 2, 3]
