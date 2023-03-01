// - створити блок,
//   - додати йому класи wrap, collapse, alpha, beta
// let block = document.createElement('div');
// block.classList.add('wrap', 'collapse', 'alpha', 'beta') ;

// - додати стилі(довільні значення) : колір фону, колір тексту, розмір тексту
// document.body.appendChild(block);
// block.innerText = 'Block'
// block.style.backgroundColor = 'pink';
// block.style.color = 'blue';
// block.style.fontSize = '40px';

// - додати цей блок в body.
// document.body.appendChild(block);

// - клонувати його повністю, та додати клон в body.
// let body = block.cloneNode(true);
// document.body.appendChild(body);



// - Є масив:
//   ['Main','Products','About us','Contacts']
// Зробити ul в середині якої будуть лежати елементи масиву (кожен в своєму li)
// let array = ['Main','Products','About us','Contacts'];
// let ulCreator = document.createElement('ul');
// for (let arr of array) {
//   let liCreator = document.createElement('li')
//   liCreator.textContent = arr;
//   ulCreator.appendChild(liCreator);
// }
// document.body.appendChild(ulCreator);



// - Є масив
// let coursesAndDurationArray = [
//   {title: 'JavaScript Complex', monthDuration: 5},
//   {title: 'Java Complex', monthDuration: 6},
//   {title: 'Python Complex', monthDuration: 6},
//   {title: 'QA Complex', monthDuration: 4},
//   {title: 'FullStack', monthDuration: 7},
//   {title: 'Frontend', monthDuration: 4}
// ];
// Для кожного елементу масиву зробити блок в якому вивести інформацію про title та monthDuration
// Завдання робити через цикли.
// let arr = [
//   {title: '1', monthDuration: 3},
//   {title: '2', monthDuration: 2},
//   {title: '3', monthDuration: 1}
// ];
// arr.forEach(item => {
//   console.log(`Title: ${item.title} Month Duration: ${item.monthDuration}`)
// });
// =========================



//   - Є масив
// За допомоги скріпта для кожного елементу масиву зробити <div class='item'> ,
// в якому буде <h1 class='heading'>  з title  елементу, та <p class='description'> з monthDuration елементу.
//   Завдання робити через цикли.
// let coursesAndDurationArray1 = [
//   {title: 'JavaScript Complex', monthDuration: 5},
//   {title: 'Java Complex', monthDuration: 6},
//   {title: 'Python Complex', monthDuration: 6},
//   {title: 'QA Complex', monthDuration: 4},
//   {title: 'FullStack', monthDuration: 7},
//   {title: 'Frontend', monthDuration: 4}
// ];
// coursesAndDurationArray1.forEach(item => {
//   let div = document.createElement('div');
//   div.className = 'item';
//
//   let h1 = document.createElement('h1');
//   h1.className = 'heading';
//   h1.textContent = item.title;
//   h1.style.background = 'black';
//   h1.style.color = 'white';
//
//   let p = document.createElement('p');
//   p.className = 'description';
//   p.textContent = item.monthDuration;
//   p.style.background = 'pink';
//
//   div.appendChild(h1);
//   div.appendChild(p);
//
//   document.body.appendChild(div);
// });



// - є масив simpsons, котрий лежить в arrays.js (на цей момент ви вже знаєте де він знаходиться)
// Проітерувати його, створиши для кожного об'єкту  масиву <div class='member'> та наповнити його данними з об'єкту.
//   Якщо людською мовою: під кожного члена родини зробити блок та наповнити його інформацією з цього об'єкту
// let simpsons = [
//   {
//     name: 'Bart',
//     surname: 'Simpson',
//     age: 10,
//     info: 'Бартолом\'ю ДжоДжо «Барт» Сімпсон (англ. Bartholomew JoJo «Bart» Simpson) — один із головних героїв мультиплікаційного серіалу Сімпсони. Барт — найстарша дитина Гомера і Мардж Сімпсон. У нього також є дві молодші сестри — Ліса і Меґґі. Барт є втіленням образу бешкетника та посереднього учня у школі. Разом зі своїм батьком Барт є одним із найвідоміших персонажів у цьому серіалі.',
//     photo: 'https://upload.wikimedia.org/wikipedia/uk/a/aa/Bart_simpson.png'
//   },
//   {
//     name: 'Homer',
//     surname: 'Simpson',
//     age: 40,
//     info: 'Гомер Джей Сімпсон (англ. Homer Jay Simpson) — один із головних героїв мультсеріалу «Сімпсони». Гомер — грубий і неввічливий батько родини, він має очевидні вади: товстий, лисий і не дуже розумний. Нерідко він поводиться як блазень, абсурдно, егоїстично і нетактовно, але все ж лишається симпатичним.',
//     photo: 'http://upload.wikimedia.org/wikipedia/en/0/02/Homer_Simpson_2006.png'
//   },
//   {
//     name: 'Marge',
//     surname: 'Simpson',
//     age: 38,
//     info: 'Ма́рджори Жакли́н «Мардж» Си́мпсон (в девичестве Бувье́) (англ. Marjorie Jacqueline «Marge» Simpson) — постоянный персонаж мультипликационного сериала «Симпсоны», её озвучивает Джулия Кавнер. Обычно носит зелёное платье, красные балетки, на шее — ожерелье из искусственного жемчуга и ездит на оранжевом универсале. У неё шикарные синие волосы, которые она обычно собирает в очень высокую причёску. Глаза цвета ореха (19s6e). Основное занятие — домохозяйка, большую часть времени проводит в заботе о доме, детях и Гомере. Образ Мардж копирует стереотип провинциальной американской домохозяйки 50-х годов. Мардж — единственный член семьи, посещающий церковь добровольно. Старается поддерживать нравственность не только своей семьи, но и всего города. Отлично готовит, особенно славятся её свиные отбивные и зефир. Любимое блюдо — лапша с маслом.',
//     photo: 'https://upload.wikimedia.org/wikipedia/ru/0/0b/Marge_Simpson.png'
//   },
//   {
//     name: 'Lisa',
//     surname: 'Simpson',
//     age: 9,
//     info: 'Ли́за Мари́ Си́мпсон (англ. Lisa Marie Simpson) — героиня мультипликационного сериала «Симпсоны». Средний ребёнок в семье, восьмилетняя девочка, выделяющаяся среди остальных Симпсонов прежде всего своим умом и рассудительностью.',
//     photo: 'https://upload.wikimedia.org/wikipedia/ru/e/ec/Lisa_Simpson.png'
//   },
//   {
//     name: 'Maggie',
//     surname: 'Simpson',
//     age: 1,
//     info: 'Ма́ргарет Эвелин «Мэ́гги» Си́мпсон (англ. Margaret Evelyn “Maggie” Simpson) — персонаж мультсериала «Симпсоны». Впервые появилась на телевидении в шоу Трейси Ульман, в короткометражке Good Night (англ.)русск. 19 апреля 1987 года. Мэгги была придумана и разработана карикатуристом Мэттом Грейнингом, пока он ждал встречи с Джеймсом Л. Бруксом. Названа в честь младшей сестры Грейнинга. После появления в шоу Трейси Ульман, через три года семья Симпсонов получила собственный сериал на телеканале Fox, дебют произошёл 17 декабря 1989 года.',
//     photo: 'https://upload.wikimedia.org/wikipedia/ru/9/9d/Maggie_Simpson.png'
//   },
// ];
// let body = document.querySelector('body');
// for (const bodyElement of simpsons) {
//   let div = document.createElement('div');
//   let h1 = document.createElement('h1');
//   let p = document.createElement('p');
//   let i = document.createElement('i');
//   let img = document.createElement('img');
//
//   div.classList.add('member');
//
//   h1.innerText = `${bodyElement.name}`;
//   p.innerText = `${bodyElement.surname}`;
//   h1.style.background = 'radial-gradient(SandyBrown, blue)';
//   h1.style.color = 'SandyBrown'
//   p.style.background = 'linear-gradient(to right, blue, SandyBrown)';
//   p.style.color = 'SandyBrown'
//   i.innerText = `${bodyElement.info}`;
//   i.style.background = 'SandyBrown';
//
//   div.append(h1, p, i);
// body.append(div);
// }


//   Цикл в циклі
// - Є масив coursesArray котрий лежить в arrays.js (на цей момент ви вже знаєте де він знаходиться)
// Створити для кожного елементу масиву свій блок,
// блок розділити блоками, в яких будуть зберігатись значення окремих властивостей,
// для властивості modules зробити список з елементами
// Приклад структири знаходиться у файлі example.png який лежить в папці з поточним фйлом
// let coursesArray = [
//   {
//     title: 'JavaScript Complex',
//     monthDuration: 5,
//     hourDuration: 909,
//     modules: ['html', 'css', 'js', 'mysql', 'mongodb', 'react', 'angular', 'aws', 'docker', 'git', 'node.js']
//   },
//   {
//     title: 'Java Complex',
//     monthDuration: 6,
//     hourDuration: 909,
//     modules: ['html',
//       'css',
//       'js',
//       'mysql',
//       'mongodb',
//       'angular',
//       'aws',
//       'docker',
//       'git',
//       'java core',
//       'java advanced']
//   },
//   {
//     title: 'Python Complex',
//     monthDuration: 6,
//     hourDuration: 909,
//     modules: ['html',
//       'css',
//       'js',
//       'mysql',
//       'mongodb',
//       'angular',
//       'aws',
//       'docker',
//       'python core',
//       'python advanced']
//   },
//   {
//     title: 'QA Complex',
//     monthDuration: 4,
//     hourDuration: 909,
//     modules: ['html', 'css', 'js', 'mysql', 'mongodb', 'git', 'QA/QC']
//   },
//   {
//     title: 'FullStack',
//     monthDuration: 7,
//     hourDuration: 909,
//     modules: ['html',
//       'css',
//       'js',
//       'mysql',
//       'mongodb',
//       'react',
//       'angular',
//       'aws',
//       'docker',
//       'git',
//       'node.js',
//       'python',
//       'java']
//   },
//   {
//     title: 'Frontend',
//     monthDuration: 4,
//     hourDuration: 909,
//     modules: ['html', 'css', 'js', 'mysql', 'mongodb', 'react', 'angular', 'aws', 'docker', 'git', 'sass']
//   }
// ];
// let body = document.querySelector('body')
// for (let arr of coursesArray) {
//  let block = document.createElement('div');
//   let title = document.createElement('h1');
//   let duration = document.createElement('div');
//   let monthDuration = document.createElement('div');
//   let hourDuration = document.createElement('div');
//   let ul = document.createElement('ul');
//
//   title.innerText = arr.title;
//   monthDuration.innerText = `monthDuration: ${arr.monthDuration}`;
//   hourDuration.innerText = `hourDuration: ${arr.hourDuration}`;
//
//   for (let module of arr.modules) {
//     let li = document.createElement('li');
//     li.innerText = module;
//     ul.appendChild(li);
//   }
//
//   block.classList.add('main');
//   title.classList.add('text-center');
//   duration.classList.add('flex');
//   ul.classList.add('flex');
//
//   title.style.background = 'linear-gradient(blue, white,blue)';
//   ul.style.background = 'linear-gradient(to left, blue, white)';
//   duration.style.background = 'linear-gradient(blue, white)';
//   title.style.textAlign = 'center';
//   ul.style.textAlign = 'center';
//   title.style.border = '2px solid black';
//   ul.style.border = '2px solid black';
//   duration.style.border = '2px solid black';
//
//
//   duration.append(monthDuration, hourDuration);
//   body.append(block);
//   block.append(title,ul, duration);
// }
//   - Створити довільний елемент з id = text та створити кнопку.Використовуючи JavaScript, зробіть так, щоб при натисканні на кнопку зникав елемент з id="text".
//
//
//   - створити інпут який приймає вік людини та кнопку яка підтверджує дію.При натисканні на кнопку зчитати інформацію з інпуту та перевірити вік чи меньше він ніж 18, та повідомити про це користувача
//
// *** Створити 3 інпута та кнопку. Один визначає кількість рядків, другий - кількість ячеєк, третій вмиіст ячеєк.
//   При натисканні кнопки, вся ця інформація зчитується і формується табличка, з відповідним вмістом.
// (Додатковачастина для завдання)
