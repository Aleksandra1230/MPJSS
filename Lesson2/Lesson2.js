// Масиви та об'єкти:
// - Створити масив, наповнити його 10 елементами будь-якого типу, вивести кожен елемент в консоль

let animals = ['tiger', 'panther', 'lion', 'giraffe', 'jaguar', 'cat', 'dog', 'horse', 'dolphin', 'buffalo'];
console.log(animals);
console.log(animals[0]);
console.log(animals[1]);
console.log(animals[2]);
console.log(animals[3]);
console.log(animals[4]);
console.log(animals[5]);
console.log(animals[6]);
console.log(animals[7]);
console.log(animals[8]);
console.log(animals[9]);

// - Створити 3 об'єкти які описують книги. Поля об'єкту : title ,pageCount, genre.

let bestBooks = {title: '1984', pageCount:320, genre: 'novel'};
console.log(bestBooks);

let bestBooks1 = {title: 'dracula', pageCount:640, genre: 'novel'};
console.log(bestBooks1);

let bestBooks2 = {title: 'Truth', pageCount:464, genre: 'fantasy'};
console.log(bestBooks2);

// - Створити 3 об'єкти які описують книги. Поля об'єкту : title ,pageCount, genre, authors. Поле "автори" - являється  масивом. Кожен автор має поля name та age.

let Books = {title: 'Dune', pageCount:176, genre: 'novel', authors:['Frank Herbert',56]};
console.log(Books);

let Books1 = {title: 'Emma', pageCount:512, genre: 'novel', authors:['Jane Austen',37]};
console.log(Books1);

let Books2 = {title: 'Sorcerer', pageCount:848, genre: 'novel', authors:['Fowles John',56]};
console.log(Books2);

// - Створити масив з 10 об'єктами які описують сутніть "користувач". Поля: name, username,password. Вивести в консоль пароль кожного користувача

let users = [
  {name: 'Anna', username: 'Ann1', password: '  jhfujdl'},
  {name: 'vasya', username: 'vasya1', password: 'jmflsyg'},
  {name: 'olya', username: 'lemon', password: 'qwerty'},
  {name: 'misha', username: 'kokos', password: 'ytrewq'},
  {name: 'masha', username: 'masha1', password: 'aa987654321'},
  {name: 'mira', username: 'mir', password: '1fk23456789'},
  {name: 'mila', username: 'user1', password: 'asdfgh'},
  {name: 'andrey', username: 'man', password: '44a4a'},
  {name: 'oleg', username: 'user2', password: '9a99aa99'},
  {name: 'inna', username: 'user3', password: '3qwer33'}];
console.log(users[0].password);
console.log(users[1].password);
console.log(users[2].password);
console.log(users[3].password);
console.log(users[4].password);
console.log(users[5].password);
console.log(users[6].password);
console.log(users[7].password);
console.log(users[8].password);
console.log(users[9].password);



// Логічні розгалуження:
//   - Є змінна х, якій ви надаєте довільне числове значення.
let x1 = 5;
// //   Якщо змінна x не дорівнює нулю, виведіть 'Вірно', інакше виведіть 'Невірно'. Перевірте  скрипт при a, що дорівнює 1, 0, -3
if (x1 !== 0) {
  console.log('Вірно')
} else {
  console.log('Невірно')
}
let a = 1;
if (a !== 0) {
  console.log('Вірно')
} else {
  console.log('Невірно')
}

let a1 = 0;
if (a1 !== 0) {
  console.log('вірно')
} else {
  console.log('Невірно')
}

let a2 = -3;
if (a2 !== 0) {
  console.log('Вірно')
} else {
  console.log('Невірно')
}


// / - Дано змінну time яка рівна числу від 0 до 59. Потрібно написати код, який перевірить, до якої четверті години попадає число
// (в першу, другу, третю или четверту частину години).

let time = 25;
let selectedTime = true;

if (time>=0 && time<=14){
  console.log('first quarter')
}

  else if (time>15 && time<=29){
    console.log('second quarter')
  }

   else if (time>30 && time<=44){
      console.log('third quarter')
    }

     else if (time>45 && time<=59){
        console.log('fourth quarter')
      }

// - У змінній day дано якесь число від 1 до 31. Потрібно визначити, у яку половину(декаду) місяця потрапляє це число (у першу, другу чи третю).


let day = 25;
let ourDay = true;

if (time>=1 && time<=10){
  console.log('first decade')
}

else if (time>11 && time<=20){
  console.log('second decade')
}

else if (time>21 && time<=31){
  console.log('third quarter')
}


// - Скласти розклад на тиждень за домопоги switch. Користувач вводить порядковий номер дня тижня і на екрані відображається інфа що заплановано на цей день (можна замість плану на день, назву дня англійською).

switch ('1') {
case '1': console.log('Run');
  break;
case '2': console.log('work');
  break;
case '3': console.log('rest');
  break;
case '4': console.log('studies');
  break;
case '5': console.log('yoga');
  break;
default:
  console.log('Не заплановано');
}




//   - є змінна х, яка може прийняти будь-яке значення (стрінг, число, undefined, null  і тд включно). Напишіть код який,
//     за допомоги  оператора || буде присвоювати змінній х значення "default"  якщо значення змінної х являється falsy (хибноподібні, тобто приводиться до false)
//
let x = undefined;
x = x || 'default';
console.log(x);

