// - Знайти та вивести довижину настипних стрінгових значень
// 'hello world', 'lorem ipsum', 'javascript is cool'
// let str = 'hello world';
// console.log(str.length);
// let str1 = 'lorem ipsum';
// console.log(str1.length);
// let str2 = 'javascript is cool';
// console.log(str2.length);

// - Перевести до великого регістру наступні стрінгові значення
// 'hello world', 'lorem ipsum', 'javascript is cool'
// let s = 'hello world';
// console.log(s.toUpperCase());
// let a = 'lorem ipsum';
// console.log(a.toUpperCase());
// let b = 'javascript is cool';
// console.log(b.toUpperCase());

// - Перевести до нижнього регістру настипні стрінгові значення
// 'HELLO WORLD', 'LOREM IPSUM', 'JAVASCRIPT IS COOL'
// let q = 'HELLO WORLD';
// console.log(q.toLowerCase());
// let w = 'LOREM IPSUM';
// console.log(w.toLowerCase());
// let e = 'JAVASCRIPT IS COOL';
// console.log(e.toLowerCase());

// - Є "брудна" стрінга let str = ' dirty string   ' . Почистити її від зайвих пробілів.
// let str = ' dirty string   ';
// console.log(str.replace(' ', ''));

// - Напишіть функцію stringToarray(str), яка перетворює рядок на масив слів.
// let str = 'Ревуть воли як ясла повні';
// let arr = stringToarray(str); ['Ревуть', 'воли', 'як', 'ясла', 'повні']
// let str = 'Ревуть воли як ясла повні';
// console.log(str.split(' '));


// - є масив чисел [10,8,-7,55,987,-1011,0,1050,0] . за допомоги map  перетворити всі об'єкти в масиві на стрінгові.
// let num = [10,8,-7,55,987,-1011,0,1050,0];
// let map = num.map(function (item) {
//   return item.toString();
// })
// console.log(map);


// - створити функцію sortNums(direction), яка прймає масив чисел, та сортує його від більшого до меньшого,
// або навпаки в залежності від значення аргументу direction.
//   let nums = [11,21,3];
//   nums.sort((a, b)=> b - a);
//   console.log(nums);

// let nums1 = [11,21,3];
// nums1.sort((a, b)=> a - b);
// console.log(nums1);

// ==========================

// - є масив
// let coursesAndDurationArray = [
//   {title: 'JavaScript Complex', monthDuration: 5},
//   {title: 'Java Complex', monthDuration: 6},
//   {title: 'Python Complex', monthDuration: 6},
//   {title: 'QA Complex', monthDuration: 4},
//   {title: 'FullStack', monthDuration: 7},
//   {title: 'Frontend', monthDuration: 4}
// ];
// -- відсортувати його за спаданням за monthDuration
// coursesAndDurationArray.sort((a, b) => {
//   return b.monthDuration - a.monthDuration;
// })
// console.log(coursesAndDurationArray);
// ==========================

// -- відфільтрувати , залишивши тільки курси з тривалістю більше 5 місяців
// let array = coursesAndDurationArray.filter(function (value) {
//   return value.monthDuration > 5;
// })
// console.log(array);

// -- за допомоги map перетворити кожен елемент на наступний тип {id,title,monthDuration}
// let map = coursesAndDurationArray.map((value,index) => {
//   return {id: index + 1, title: value.title, monthDuration: value.monthDuration};
//   });
// console.log(map);

// =========================
//   описати колоду карт (від 6 до туза без джокерів)
let cardDeck = [
  {cardSuit: 'spade', value: '6', color: 'black'},
  {cardSuit: 'spade', value: '7', color: 'black'},
  {cardSuit: 'spade', value: '8', color: 'black'},
  {cardSuit: 'spade', value: '9', color: 'black'},
  {cardSuit: 'spade', value: '10', color: 'black'},
  {cardSuit: 'spade', value: 'ace', color: 'black'},
  {cardSuit: 'spade', value: 'jack', color: 'black'},
  {cardSuit: 'spade', value: 'queen', color: 'black'},
  {cardSuit: 'spade', value: 'king', color: 'black'},
  {cardSuit: 'diamond', value: '6', color: 'red'},
  {cardSuit: 'diamond', value: '7', color: 'red'},
  {cardSuit: 'diamond', value: '8', color: 'red'},
  {cardSuit: 'diamond', value: '9', color: 'red'},
  {cardSuit: 'diamond', value: '10', color: 'red'},
  {cardSuit: 'diamond', value: 'ace', color: 'red'},
  {cardSuit: 'diamond', value: 'jack', color: 'red'},
  {cardSuit: 'diamond', value: 'queen', color: 'red'},
  {cardSuit: 'diamond', value: 'king', color: 'red'},
  {cardSuit: 'heart', value: '6', color: 'red'},
  {cardSuit: 'heart', value: '7', color: 'red'},
  {cardSuit: 'heart', value: '8', color: 'red'},
  {cardSuit: 'heart', value: '9', color: 'red'},
  {cardSuit: 'heart', value: '10', color: 'red'},
  {cardSuit: 'heart', value: 'ace', color: 'red'},
  {cardSuit: 'heart', value: 'jack', color: 'red'},
  {cardSuit: 'heart', value: 'queen', color: 'red'},
  {cardSuit: 'heart', value: 'king', color: 'red'},
  {cardSuit: 'clubs', value: '6', color: 'black'},
  {cardSuit: 'clubs', value: '7', color: 'black'},
  {cardSuit: 'clubs', value: '8', color: 'black'},
  {cardSuit: 'clubs', value: '9', color: 'black'},
  {cardSuit: 'clubs', value: '10', color: 'black'},
  {cardSuit: 'clubs', value: 'ace', color: 'black'},
  {cardSuit: 'clubs', value: 'jack', color: 'black'},
  {cardSuit: 'clubs', value: 'queen', color: 'black'},
  {cardSuit: 'clubs', value: 'king', color: 'black'}
];
console.log(cardDeck);

// - знайти піковий туз
console.log(cardDeck.find((spadeAce) => spadeAce.cardSuit === 'spade' && spadeAce.value === 'ace'));

// - всі шістки
let allSixes = cardDeck.filter(function (u) {
  return u.value === '6';
})
console.log(allSixes);

// - всі червоні карти
let redCards = cardDeck.filter(function (r) {
  return r.color === 'red';
})
console.log(redCards);

// - всі буби
let diamondCards = cardDeck.filter(function (d) {
  return d.cardSuit === 'diamond';
})
console.log(diamondCards);

// - всі трефи від 9 та більше
console.log(cardDeck.filter((card) =>card.cardSuit === 'clubs' && ['9', '10', 'ace', 'jack', 'queen', 'king'].includes(card.value)));

//   cardSuit: '', // 'spade', 'diamond','heart', 'clubs'
//     value: '', // '6'-'10', 'ace','jack','queen','king','joker'
//   color:'', // 'red','black'
// }
//
// =========================
//
//   Взяти описану колоду карт, та за допомоги reduce упакувати всі карти по "мастях" в об'єкт
// {
//   spades:[],
//     diamonds:[],
//   hearts:[],
//   clubs:[]
// }
let cardDeck1 = [
  {cardSuit: 'spade', value: '6', color: 'black'},
  {cardSuit: 'spade', value: '7', color: 'black'},
  {cardSuit: 'spade', value: '8', color: 'black'},
  {cardSuit: 'spade', value: '9', color: 'black'},
  {cardSuit: 'spade', value: '10', color: 'black'},
  {cardSuit: 'spade', value: 'ace', color: 'black'},
  {cardSuit: 'spade', value: 'jack', color: 'black'},
  {cardSuit: 'spade', value: 'queen', color: 'black'},
  {cardSuit: 'spade', value: 'king', color: 'black'},
  {cardSuit: 'diamond', value: '6', color: 'red'},
  {cardSuit: 'diamond', value: '7', color: 'red'},
  {cardSuit: 'diamond', value: '8', color: 'red'},
  {cardSuit: 'diamond', value: '9', color: 'red'},
  {cardSuit: 'diamond', value: '10', color: 'red'},
  {cardSuit: 'diamond', value: 'ace', color: 'red'},
  {cardSuit: 'diamond', value: 'jack', color: 'red'},
  {cardSuit: 'diamond', value: 'queen', color: 'red'},
  {cardSuit: 'diamond', value: 'king', color: 'red'},
  {cardSuit: 'heart', value: '6', color: 'red'},
  {cardSuit: 'heart', value: '7', color: 'red'},
  {cardSuit: 'heart', value: '8', color: 'red'},
  {cardSuit: 'heart', value: '9', color: 'red'},
  {cardSuit: 'heart', value: '10', color: 'red'},
  {cardSuit: 'heart', value: 'ace', color: 'red'},
  {cardSuit: 'heart', value: 'jack', color: 'red'},
  {cardSuit: 'heart', value: 'queen', color: 'red'},
  {cardSuit: 'heart', value: 'king', color: 'red'},
  {cardSuit: 'clubs', value: '6', color: 'black'},
  {cardSuit: 'clubs', value: '7', color: 'black'},
  {cardSuit: 'clubs', value: '8', color: 'black'},
  {cardSuit: 'clubs', value: '9', color: 'black'},
  {cardSuit: 'clubs', value: '10', color: 'black'},
  {cardSuit: 'clubs', value: 'ace', color: 'black'},
  {cardSuit: 'clubs', value: 'jack', color: 'black'},
  {cardSuit: 'clubs', value: 'queen', color: 'black'},
  {cardSuit: 'clubs', value: 'king', color: 'black'}
];
console.log(cardDeck1);

let cards = cardDeck.reduce((a,b ) => {
a[b.cardSuit].push(b);
return a;
}, { spade:[], diamond:[], heart:[], clubs:[]});
console.log(cards);


