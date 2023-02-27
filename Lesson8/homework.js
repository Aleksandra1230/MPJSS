// - Створити функцію конструктор для об'єктів User з полями id, name, surname , email, phone
// створити пустий масив, наповнити його 10 об'єктами new User(....)

function User(id, name, surname, email, phone) {
  this.id = id;
  this.name = name;
  this.surname = surname;
  this.email = email;
  this.phone = phone;
}

let users = [
  new User(154, 'Max', 'Petrov', 'asg@gmail.com', '970000000'),
  new User(232, 'Masha', 'Ivanov', 'ajl@gmail.com', '9711111'),
  new User(153, 'Anna', 'Ostapenko', 'yfu@gmail.com', '972222222'),
  new User(147, 'Sveta', 'Shevchenko', 'kjh@gmail.com', '973333333'),
  new User(555, 'Vasya', 'Franko', 'njh@gmail.com', '974444444'),
  new User(618, 'Misha', 'Melnick', 'uyo@gmail.com', '975555555'),
  new User(117, 'Olya', 'Ostapenko', 'lkg@gmail.com', '976666666'),
  new User(18, 'Sergiy', 'Ivanov', 'uhg@gmail.com', '977777777'),
  new User(199, 'Sasha', 'Shevchenko', 'nkv@gmail.com', '978888888'),
  new User(100, 'Jenya', 'Ivanov', 'qah@gmail.com', '979999999'),
];
console.log(users);

// - Взяти масив з  User[] з попереднього завдання, та відфільтрувати , залишивши тільки об'єкти з парними id (filter)

let user = users.filter(function (value) {
  return value.id % 2;
})
console.log(user);

// - Взяти масив з  User[] з попереднього завдання, та відсортувати його по id. по зростанню (sort)
users.sort((a, b) => a['id'] - b['id']);
console.log(users);

// - створити класс для об'єктів Client з полями id, name, surname , email, phone, order (поле є масивом зі списком товарів)
// створити пустий масив, наповнити його 10 об'єктами Client

class Client {
  constructor(id, name, surname, email, phone, order) {
    this.id = id;
    this.name = name;
    this.surname = surname;
    this.email = email;
    this.phone = phone;
    this.order = order;
  }
}

let clients = [
new Client(154, 'Max', 'Petrov', 'asg@gmail.com', '970000000', ['asd']),
new Client(232, 'Masha', 'Ivanov', 'ajl@gmail.com', '9711111', ['hgln','jfy','dbsk']),
new Client(153, 'Anna', 'Ostapenko', 'yfu@gmail.com', '972222222', ['fho','dhba']),
new Client(147, 'Sveta', 'Shevchenko', 'kjh@gmail.com', '973333333', ['asd','sdf','kbbh','sdisbf']),
new Client(555, 'Vasya', 'Franko', 'njh@gmail.com', '974444444', ['asd','sdf','kbbh','sdn','dhsbv','sjdjb']),
new Client(117, 'Olya', 'Ostapenko', 'lkg@gmail.com', '976666666', ['asd']),
new Client(18, 'Sergiy', 'Ivanov', 'uhg@gmail.com', '977777777', ['asd','sdf','kbbh','sdf','kbbh']),
new Client(199, 'Sasha', 'Shevchenko', 'nkv@gmail.com', '978888888', ['asd','sdf','kbbh']),
new Client(100, 'Jenya', 'Ivanov', 'qah@gmail.com', '979999999', ['asd','sdf','kbbh'])
];
console.log(clients);

// - Взяти масив (Client [] з попереднього завдання).Відсортувати його по кількості товарів в полі order по зростанню. (sort)

let client = clients.sort((a,b)=> {
  return a['order'].length-b['order'].length
})

console.log(client);

// - Створити функцію конструктор яка дозволяє створювати об'єкти car, з властивостями модель, виробник, рік випуску, максимальна швидкість, об'єм двигуна. додати в об'єкт функції:
// -- drive () - яка виводить в консоль `їдемо зі швидкістю ${максимальна швидкість} на годину`
// -- info () - яка виводить всю інформацію про автомобіль в форматі `назва поля - значення поля`
// -- increaseMaxSpeed (newSpeed) - яка підвищує значення максимальної швидкості на значення newSpeed/ -- addDriver (driver) - приймає об'єкт який "водій" з довільним набором полів, і додає його в поточний об'єкт car

function Car(model, manufacturer, year, maxSpeed, capacity) {
  this.model = model;
  this.manufacturer = manufacturer;
  this.year = year;
  this.maxSpeed = maxSpeed;
  this.capacity = capacity;
  this.grive = function (msg) {
    console.log(`їдемо зі швидкістю ${this.maxSpeed} на годину`);
  }
  this.info = function (value) {
    console.log(`${this.model} - ${value}`);
  }
  this.increaseMaxSpeed = function (newSpeed) {
    console.log(`${this.maxSpeed}+${newSpeed}`);
  }
}
let car = new Car('porshe', 'Italy', 2019, 350, 3.0);
console.log(car);

// - (Те саме, тільки через клас)
// Створити клас який дозволяє створювати об'єкти car, з властивостями модель, виробник, рік випуску, максимальна швидкість, об'єм двигуна. додати в об'єкт функції:
// -- drive () - яка виводить в консоль `їдемо зі швидкістю ${максимальна швидкість} на годину`
// -- info () - яка виводить всю інформацію про автомобіль в форматі `назва поля - значення поля`
// -- increaseMaxSpeed (newSpeed) - яка підвищує значення максимальної швидкості на значення newSpeed
// -- changeYear (newValue) - змінює рік випуску на значення newValue
// -- addDriver (driver) - приймає об'єкт який "водій" з довільним набором полів, і додає його в поточний об'єкт car

class Cars {
  constructor(model, manufacturer, year, maxSpeed, capacity) {
    this.model = model;
    this.manufacturer = manufacturer;
    this.year = year;
    this.maxSpeed = maxSpeed;
    this.capacity = capacity;
    this.grive = function (msg) {
      console.log(`їдемо зі швидкістю ${this.maxSpeed} на годину`);
    }
    this.info = function (value) {
      console.log(`${this.model} - ${value}`);
    }
    this.increaseMaxSpeed = function (newSpeed) {
      console.log(`${this.maxSpeed}+${newSpeed}`);
    }
  }
}


// -створити класс/функцію конструктор попелюшка з полями ім'я, вік, розмір ноги. Створити масив з 10 попелюшок.
class Cinderella {
  constructor(name, age, footSize) {
    this.name = name;
    this.age = age;
    this.footSize = footSize;
  }
}
let princess = [
new Cinderella ('Anna', 25, 37),
new Cinderella ('Emma', 21, 35),
new Cinderella ('Olga', 23, 38),
new Cinderella ('Ivanna', 21, 39),
new Cinderella ('Emma', 28, 36),
new Cinderella ('Anna', 25, 37),
new Cinderella ('Olga', 24, 38),
new Cinderella ('Ivanna', 23, 35),
new Cinderella ('Anna', 22, 39),
new Cinderella ('Emma', 28, 38)
]
console.log(princess);



// Сторити об'єкт класу "принц" за допомоги класу який має поля ім'я, вік, туфелька яку він знайшов.
let prince = new Cinderella('vasya', 35, 36);
//   За допомоги циклу знайти яка попелюшка повинна бути з принцом.
for (const princeElement of princess) {
 if (princeElement.footSize === 36) {
   console.log(princeElement);
   document.write(`${name}`);
 }
}
