// // - створити функцію яка виводить масив
//
// function OutMass () {
//    for (let i = 0; i < mass.length; i++) {
//        console.log(mass[i]);
//    }
// }
//
// let mass = ['sdl', 'sdml', 'skrgo', 2452, true];
//
// OutMass();


// // - створити функцію яка заповнює масив
// // рандомними числами та виводить його. Для виведення використати попвередню функцію.
//
// let mass = [];
//
// function InpMass() {
//    let kilk = +prompt('enter kilk number in mass');
//    for (let i = 0; i < kilk; i++) {
//        let znach = Math.round(Math.random()*100);
//        mass[i] = znach;
//    }
// }
//
// InpMass();
// OutMass();


// // - створити функцію яка приймає три числа та виводить та повертає найменьше.
//
// function threeNum(a, b, c) {
//   a = +prompt('enter number');
//     b= +prompt('enter number');
//      c = +prompt('enter number');
//
//      if(a<=b && b<c || a<b && b<=c) {
//          document.write(a);
//          return a;
//      }
//     else if(b<=a && a<c || b<a && a<=b) {
//         document.write(b);
//         return b;
//     }
//     else  if(c<=b && c<a || c<b && b<=a) {
//          document.write(c);
//          return c;
//      }
//     else {
//          document.write(c);
//          return c;
//      }
// }
//
// threeNum();


// // - створити функцію яка приймає три числа та виводить та повертає найбільше.
//
// function threeNum(a, b, c) {
//   a = +prompt('enter number');
//     b= +prompt('enter number');
//      c = +prompt('enter number');
//
//      if(a<=b && b<c || a<b && b<=c) {
//          document.write(c);
//          return c;
//      }
//     else if(b<=c && c<a || b<c && c<=a) {
//         document.write(a);
//         return a;
//     }
//     else  if(c<=a && a<b || c<a && a<=b) {
//          document.write(b);
//          return b;
//      }
//     else {
//          document.write(c);
//          return c;
//      }
// }
//
// threeNum();


// // - створити функцію яка приймає будь-яку кількість чисел, повертає найменьше, а виводить найбільше
//
// function  OutMaxRetMin() {
//    let min = arguments[0];
//    let max = arguments[0];
//
//     for (const i of arguments) {
//         if (i > max) {
//         max = i;
//         }
//         else if (i < min) {
//             min = i;
//         }
//     }
//     console.log(max)
//     return min;
// }
//
// let ku = OutMaxRetMin(4, 456, 546465, 34, 66);


//- створити функцію яка виводить масив
//
// function OutMass () {
//    for (let i = 0; i < mass.length; i++) {
//        console.log(mass[i]);
//    }
// }
//
// let mass = ['sdl', 'sdml', 'skrgo', 2452, true];
//
// OutMass();


// - створити функцію яка повертає найбільше число з масиву
// function CreateMass() {
// let mass = [];
// let kilk = +prompt('enter kilk');
//     for (let i = 0; i < kilk; i++) {
//         mass[i] = Math.round(Math.random()*100);
//     }
//     console.log(mass);
//     console.log('____');
//     return mass;
// }
// function MaxNum(arrMass) {
// let max = arrMass[0];
//     for (let a = 1; a < arrMass.length; a++) {
//        if (max < arrMass[a]) max = arrMass[a];
//     }
//     return max;
// }
//
// let MaxNumber = MaxNum(CreateMass());
// console.log(MaxNumber);


// - створити функцію яка повертає найменьше число з масиву
//
// function InpMass() {
//     let mass = [];
//     let kilk =  Math.round(Math.random()*10);
//     for (let i = 0; i < kilk; i++) {
//         mass[i] = Math.round(Math.random()*13);
//     }
//     console.log(mass);
//     console.log('___________________');
//
//     return mass;
// }
//
// function FindMin(arr) {
//    let min = arr[0];
//     for (let a = 1; a < arr.length; a++) {
//         if (arr[a] < min) min = arr[a];
//     }
//     return min;
// }
//
// let min = FindMin(InpMass());
//
// console.log(min);


// - створити функцію яка приймає масив чисел та складає значення елементів масиву та повертає його.
//
// function InpMass(arrMass) {
// let mass = arrMass;
// let sumMass = 0;
//
//     for (let i = 0; i < mass.length; i++) {
//         sumMass += mass[i];
//     }
//     console.log(mass);
//     console.log(sumMass);
//     return sumMass;
// }
//
// let kilk = Math.round(Math.random()*10);
// let  mass = [];
//
// for (let i = 0; i < kilk; i++) {
//     mass[i] = Math.round(Math.random()*100);
// }
//
// InpMass(mass);


// - створити функцію яка приймає масив чисел та повертає середнє арифметичне його значень.
//
// function SerSum(massArr) {
// let  mass = massArr;
// let ser = 0;
// let  i = 0;
//     for ( i; i < mass.length; i++) {
//
//          ser += mass[i];
//     }
//     ser /= i;
//     console.log(mass);
//     return ser;
//  }
//
//  let mass = [];
// for (let i = 0; i < 10; i++) {
//     mass[i] = Math.round(Math.random()*100);
// }
//
// let ser = SerSum(mass);
// console.log(ser);


// - Створити функцію яка приймає масив будь яких объектів, та повертає значення кількості об'єктів в масиві
//
// function kilkObjMass(kilk) {
//     let i;
//     for (i = 0; i < kilk.length; i++) { }
//     kilk = i;
//     return kilk;
// }
//
// let users = [{
//     name: 'vasya',
//     age: 31,
//     status: false,
//     address: {city: 'Lviv', country: 'Ukraine', street: 'Shevchenko', houseNumber: 1}
// }, {
//     name: 'petya',
//     age: 30,
//     status: true,
//     address: {city: 'New York', country: 'USA', street: 'East str', houseNumber: 21}
// }, {
//     name: 'kolya',
//     age: 29,
//     status: true,
//     address: {city: 'Budapest', country: 'Hungary', street: 'Kuraku', houseNumber: 78}
// }, {
//     name: 'olya',
//     age: 28,
//     status: false,
//     address: {city: 'Prague', country: 'Czech', street: 'Paster', houseNumber: 56}
// }, {
//     name: 'max',
//     age: 30,
//     status: true,
//     address: {city: 'Istanbul', country: 'Turkey', street: 'Mikar', houseNumber: 39}
// }, {
//     name: 'anya',
//     age: 31,
//     status: false,
//     address: {city: 'Rio', country: 'Brasil', street: 'Ronaldi', houseNumber: 5}
// }, {
//     name: 'oleg',
//     age: 28,
//     status: false,
//     address: {city: 'Montreal', country: 'Canada', street: 'Acusto', houseNumber: 90}
// }, {
//     name: 'andrey',
//     age: 29,
//     status: true,
//     address: {city: 'Quebeck', country: 'Canada', street: 'Binaro', houseNumber: 33}
// }, {
//     name: 'masha',
//     age: 30,
//     status: true,
//     address: {city: 'Moscow', country: 'Russia', street: 'Gogolia', houseNumber: 1}
// }, {
//     name: 'olya',
//     age: 31,
//     status: false,
//     address: {city: 'Portland', country: 'USA', street: 'Forest str', houseNumber: 4}
// }, {
//     name: 'max',
//     age: 31,
//     status: true,
//     address: {city: 'Cairo', country: 'Egypt', street: 'Seashore', houseNumber: 45}
// }];
//
// let kilk = kilkObjMass(users);
// console.log(kilk);


// - Створити функцію яка приймає масив будь яких объектів, та повертає загальн кількість полів в них
//
// function kilkObjMass(kilk) {
//     let count = 0;
//     for (let i of kilk) {
//        if(typeof i === 'object') {
//            for (let a in i) {
//                count++;
//            }
//        }
//     }
//
//     return count;
// }
//
// let users = [{
//     name: 'vasya',
//     age: 31,
//     status: false,
// }, {
//     name: 'petya',
//     age: 30,
//     status: true,
// }, {
//     name: 'kolya',
//     age: 29,
//     status: true,
// }, {
//     name: 'olya',
//     age: 28,
//     status: false,
// }, {
//     name: 'max',
//     age: 30,
//     status: true,
// }, {
//     name: 'anya',
//     age: 31,
//     status: false,
// }, {
//     name: 'oleg',
//     age: 28,
//     status: false,
// }, {
//     name: 'andrey',
//     age: 29,
//     status: true,
// }, {
//     name: 'masha',
//     age: 30,
//     status: true,
// }, {
//     name: 'olya',
//     age: 31,
//     status: false,
// }, {
//     name: 'max',
//     age: 31,
//     status: true,
// }];
//
// let kilk = kilkObjMass(users);
// console.log(kilk);


// - створити функцію  яка скаладає значення елементів з однаковими індексами  та повертає новий результуючий масив.
//   Приклад
//   [1,2,3,4]
//   [2,3,4,5]
//   результат
//   [3,5,7,9]
//
// function SumIndex(a, b) {
//     let mass = [];
//     for (let i = 0; i < b.length; i++) {
//         mass[i] = a[i] + b[i];
//     }
//     return mass;
// }
//
// function mass(m) {
//     for (let i = 0; i < 6; i++) {
//         m[i] = Math.round(Math.random()*10);
//     }
//     return m;
// }
//
// mass1 = [];
// mass2 = [];
// let a = mass(mass1);
// let b = mass(mass2);
// console.log(a);
// console.log(b);
// console.log('__________');
// let suma = SumIndex(a, b);
// console.log(suma);


// - *** приймає масив та число "i", та міняє місцями об`єкт який знаходиться в індексі "i" на "i+1"
//
// function ind(arrMass, index) {
//     let sometime;
//  if (index < arrMass.length-1) {
//      sometime = arrMass[index];
//      arrMass[index] = arrMass[index+1];
//      arrMass[index+1] = sometime;
//  }
//  return arrMass;
// }
//
// let mass = [2, 3, 8, 13, 4, 5, 9];
// let loc = +prompt('enter number');
//
// console.log(ind(mass, loc));


// - *** створити функцію яка буде переносити елементи з значенням 0 у кінець маисву. Зберігаючи при цьому порядок не нульових значень.
// Двожина масиву від 2 до 100
// Приклад
// [1,0,6,0,3] => [1,6,3,0,0]
// [0,1,2,3,4] => [1,2,3,4,0]
// [0,0,1,0]   => [1,0,0,0]
//
// function nul(massiv) {
//     dodMass = [];
//    let mass =  massiv;
//     for (let i = 0; i < mass.length; i++) {
//         if (mass[i] === 0 ) {
//             delete  mass[i];
//            dodMass.push(0);
//         }
//     }
//     for (let a = 0; a < dodMass.length; a++) {
//         mass.push(dodMass[a]);
//     }
//     return mass;
// }
//
// mass = [];
// for (let i = 0; i < 10; i++) {
//     mass[i] = Math.round(Math.random()*10);
// }
// console.log(mass);
//
// let m = nul(mass);
// console.log(m);


// Створити функцію яка :
// - Додає в боді блок з текстом "Hello owu"
//
// function addHello() {
//     let h1 = document.createElement("h1");
//     h1.innerText = 'Hello owu';
//    document.body.appendChild(h1);
// }
//  addHello();
// - Додає в боді елемент з текстом . Тип елементу та текст отримати через аргументи
// function addText(type, text) {
//  let tag = document.createElement(type);
//  tag.innerText = text;
//  document.body.appendChild(tag);
// }
//
// addText('h2', 'uraaaa');
// - приймає масив автомобілів (можна взяти з попередніх дз ),та  індентифікатор елемнту в який потрібно додати список цих автомобілів.
// let cars = [
//     bugatti = {
//         model: 'veyron',
//         yearBuy: 2018,
//         strong: 2200,
//         color: 'black'
//     },
//     lamba = {
//         model: 'lomber',
//         yearBuy: 2016,
//         strong: 1200,
//         color: 'red'
//     },
//     mers = {
//         model: 'bens',
//         yearBuy: 2018,
//         strong: 900,
//         color: 'white'
//     },
//     bmw = {
//         model: 'X5',
//         yearBuy: 2019,
//         strong: 600,
//         color: 'black'
//     },
//     audi = {
//         model: 'spl',
//         yearBuy: 2005,
//         strong: 450,
//         color: 'silver'
//     },
//     kia = {
//         model: 'Q5',
//         yearBuy: 2015,
//         strong: 400,
//         color: 'green'
//     },
//     toyota = {
//         model: 'corola',
//         yearBuy: 2012,
//         strong: 400,
//         color: 'black'
//     },
//     porsh = {
//         model: 'horse',
//         yearBuy: 1992,
//         strong: 600,
//         color: 'red'
//     },
//     nissan = {
//         model: 'almera',
//         yearBuy: 2005,
//         strong: 280,
//         color: 'black'
//     },
//     renault = {
//         model: 'kengoo',
//         yearBuy: 2003,
//         strong: 190,
//         color: 'white'
//     }
// ];
//
// function car(carMass, idshnik) {
//    let id = document.getElementById(idshnik);
//    let ul = document.createElement('ul');
//
//     for (let i = 0; i < carMass.length; i++) {
//         let user = carMass[i];
//         let li = document.createElement('li');
//         li.innerText = `${i} - ${user.model}`;
//         ul.appendChild(li);
//     }
//
//    id.appendChild(ul);
// }
// car(cars, 'list');


// Для кожного автомобіля створити свій блок, та додати його в елемент, індентифікатор якого ви отримали. Всі властивості авто в обному блоці
// - приймає масив автомобілів (можна взяти з попередніх дз ),та  індентифікатор елемнту в який потрібно додати список цих автомобілів.
// Для кожного автомобіля створити свій блок, та додати його в елемент, індентифікатор якого ви отримали.
// Для кожної властивості створити всередені блока автомоблія свій блок
//
// (на основі минулого ДЗ)
// **- функція приймає 2 масиви з рівною кількістю об'єктів та з'єднює в один об'єкт користувача та місто з відповідними "id" та "user_id",
// та повертає масив цих з'єднаних об'єктів.
// Приклад масивів:
//             let usersWithId = [{id: 1, name: 'vasya', age: 31, status: false}, {id: 2, name: 'petya', age: 30, status: true}, {id: 3, name: 'kolya', age: 29, status: true}, {id: 4, name: 'olya', age: 28, status: false},];
//             let citiesWithId = [{user_id: 3, country: 'USA', city: 'Portland'}, {user_id: 1, country: 'Ukraine', city: 'Ternopil'}, {user_id: 2, country: 'Poland', city: 'Krakow'}, {user_id: 4, country: 'USA', city: 'Miami'},];
// Частковий приклад реультату:
//
//
//
// ***- беремо завдання з правилами з укроку №3 :
// Та робимо це функцією.При цьому правила отримувати через аргумент.
// "Є масив котрий характеризує правила. Створити скрипт який ітерує цей масив, та робить з кожне правило в окремому блоці.
// При цому в блоці, номер правила записати в свій блок, текст правила записати в свій окремий блок.
// Результатом відпрацювання скріпта повинна бути структура яка міститься в блоці wrap файла rule.html
// //todo add rules
//
// 			let rules = [
// 				{
// 					title: 'Первое правило Бойцовского клуба.',
// 					body: 'Никому не рассказывать о Бойцовском клубе.'
// 				},
// 				{
// 					title: 'Второе правило Бойцовского клуба.',
// 					body: 'Никогда никому не рассказывать о Бойцовском клубе.'
// 				},
// 				{
// 					title: 'Третье правило Бойцовского клуба.',
// 					body: 'В схватке участвуют только двое.'
// 				},
// 				{
// 					title: 'Четвертое правило Бойцовского клуба.',
// 					body: 'Не более одного поединка за один раз.'
// 				},
// 				{
// 					title: 'Пятое правило Бойцовского клуба.',
// 					body: 'Бойцы сражаются без обуви и голые по пояс.'
// 				},
// 				{
// 					title: 'Шестое правило Бойцовского клуба.',
// 					body: 'Поединок продолжается столько, сколько потребуется.'
// 				},
// 				{
// 					title: 'Седьмое правило Бойцовского клуба.',
// 					body: 'Если противник потерял сознание или делает вид, что потерял, или говорит «Хватит» — поединок окончен.'
// 				},
// 				{
// 					title: 'Восьмое и последнее правило Бойцовского клуба.',
// 					body: 'Новичок обязан принять бой.'
// 				},
//
// 			];
// "
//
// ===========додаткове від віктора========
// 1) Точная степень двойки.
// Дано натуральное число N.
// Выведите слово YES, если число N является точной степенью двойки,
// или слово NO в противном случае.
// Операцией возведения в степень пользоваться нельзя!
//
// 2) Deep Copy
// реалізувати глибоке копіювання обєкту за допомогою рекурсій
//
// 3) Flat
// Вирівняти багаторівневий масив в однорівневий
// [1,3, ['Hello, 'Wordd', [9,6,1]], ['oops'], 9] -> [1, 3, 'Hello, 'Wordd', 9, 6, 1, 'oops', 9]