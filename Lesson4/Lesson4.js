// - створити функцію яка обчислює та повертає площу прямокутника зі сторонами а і б
function calc(a, b) {
  let result = a * b;
  console.log(result);
  return result;
}
calc(10, 20);


// створити функцію яка обчислює та повертає площу кола з радіусом r
function calculation(pi, r) {
  let result = pi * r;
  console.log(result);
  return result;
}
calculation(3.14,2);


// - створити функцію яка обчислює та повертає площу циліндру висотою h, та радіутом r
function calcC(pi, h, r1) {
  let result = ((2 * pi * r1 * h) + (2 * pi * (r1 * r1)));
  console.log(result);
  return result;
}
calcC(3.14,10, 5);


// - створити функцію яка приймає масив та виводить кожен його елемент

let users = [
  {name: 'vasya', age: 31, status: false},
  {name: 'petya', age: 30, status: true},
  {name: 'kolya', age: 29, status: true},
  {name: 'olya', age: 28, status: false},
  {name: 'max', age: 30, status: true},
  {name: 'anya', age: 31, status: false},
  {name: 'oleg', age: 28, status: false},
  {name: 'andrey', age: 29, status: true},
  {name: 'masha', age: 30, status: true},
  {name: 'olya', age: 31, status: false},
  {name: 'max', age: 31, status: true}
];

function creat(arr) {
  for (const userElement of arr) {
    console.log(userElement);
  }
}
creat(users);

// - створити функцію яка створює параграф з текстом. Текст задати через аргумент

function writer(text, paragraph) {
  document.write(`
    <div>
     <h2>${text}</h2>
       <p>${paragraph}</p>
    </div>
  `
  );
}
writer('Текст', 'текст параграфа');

// - створити функцію яка створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий
function scroll(text) {
  document.write(`<ul>`);
  document.write(`<li>${text}</li>`);
  document.write(`<li>${text}</li>`);
  document.write(`<li>${text}</li>`);
  document.write(`</ul>`);
}
scroll(`Hello`)

// - створити функцію яка створює ul з трьома елементами li.
// Текст li задати через аргумент всім однаковий.
// Кількість li визначається другим аргументом, який є числовим (тут використовувати цикл)

function scroll2(text, number) {
  document.write(`<ul>`);
  for (let i = 0; i < number; i++) {
    document.write(`<li>${text}</li>`);

  }
  document.write(`</ul>`);
}
scroll2(`Hello`, 5)

// - створити функцію яка приймає масив примітивних елементів (числа,стрінги,булеві), та будує для них список

function array(arr) {
  document.write(`<ul>`);
  for (const item of arr) {
    document.write(`<li>${item}</li>`);
  }
  document.write(`</ul>`);
}

array([1,'fdhohfnkn', true]);


// - створити функцію яка приймає масив об'єктів з наступними полями id,name,age ,
// та виводить їх в документ. Для кожного об'єкту окремий блок.
function foo(object) {
  for (const objectElement of object) {
    document.write(`<div>${objectElement.id} ${objectElement.name} ${objectElement.age}</div>`);
  }
}

// - створити функцію яка повертає найменьше число з масиву

function num(numberElement) {
  let min = numberElement[0];
  for (const number of numberElement) {
    if (min > number) {
      min = number
    }
  }
  return min;
}

// - створити функцію sum(arr)яка приймає масив чисел, сумує значення елементів масиву та повертає його. Приклад sum([1,2,10]) //->13
function sum(numbers) {
  let a = 0;
  for (const number of numbers) {
    a += number;
  }
  return a;
}



// - створити функцію swap(arr,index1,index2). Функція міняє місцями заняення у відаовідних індексах
// Приклад  swap([11,22,33,44],0,1) //=> [22,11,33,44]
function swap(arr,index1,index2) {
  let x1 = arr[index1];
  let x2 = arr[index2];
  arr[index1] = x2;
  arr[index2] = x1;
  return arr;
}
console.log(swap([11, 22, 33, 44], 0, 1))
