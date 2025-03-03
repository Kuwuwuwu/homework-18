console.log('#1. Приклад домашнього завдання з JavaScript')

/*
 * #1
 *
 * Створіть змінні зі значеннями.
 */

// ім'я змінної: myNum, значення: 10
// ім'я змінної: myStr, значення: 'some string'
// ім'я змінної: myBool, значення: true
// ім'я змінної: myArr, значення: 1, 2, 3, 4, 5
// ім'я змінної myObj, значення: first: 'First Name', last: 'Last Name'

let myNum = 10;
let myStr = 'some string';
let myBool = true;
let myArr = [1, 2, 3, 4, 5];
let myObj = { first: 'First Name', last: 'Last Name' };

/*
 * #2
 *
 * Відформатуйте ціле число, яке зберігається в змінній myNum, щоб отримати результат з 2 знаками після коми.
 * Результат збережіть у змінній decimal2.
 */

// decimal2

let decimal2 = myNum.toFixed(2);


/*
 * #3
 *
 * Створіть змінну i, для якої виконайте префіксний та постфіксний інкремент та декремент.
 * Поекспериментуйте з результатами, виводячи їх у консоль.
 */

// i

let i = 5;

// Префіксний інкремент
console.log("++i:", ++i); 

// Постфіксний інкремент
console.log("i++:", i++); 
console.log("Після i++ значення i:", i);

// Префіксний декремент
console.log("--i:", --i); 

// Постфіксний декремент
console.log("i--:", i--); 
console.log("Після i-- значення i:", i);

/*
 * #4
 *
 * Створіть нову змінну myTest та присвойте їй значення 20.
 * Виконайте присвоєння з операцією, використовуючи оператори: +=, –=, *=, /=, %=.
 * Результати присвоюються в myTest, потім виводяться в консоль.
 * У розрахунках можна використовувати раніше оголошену змінну myNum та/або числа.
 */

// myTest
// +=
// –=
// *=
// /=
// %=

let myTest = 20;
console.log("Початкове значення myTest:", myTest);

// + = 
myTest += 10; 
console.log("Після += 10:", myTest);

// - = 
myTest -= 5; 
console.log("Після -= 5:", myTest);

// * = 
myTest *= 2; 
console.log("Після *= 2:", myTest);

// / = 
myTest /= 4; 
console.log("Після /= 4:", myTest);

//% = 
myTest %= 3; 
console.log("Після %= 3:", myTest);


/*
 * #5
 *
 * Використовуючи властивості та методи об'єкта Math, присвойте змінним та відобразіть у консолі.
 */

// константа Pi → myPi
// округлене значення числа 89.279 → myRound
// випадкове число між 0..10 → myRandom
// 3 у 5 степені → myPow

// Константа Pi
let myPi = Math.PI;
console.log("Значення Pi:", myPi);

// Заокруглення числа 89.279
let myRound = Math.round(89.279);
console.log("Скруглене значення 89.279:", myRound);

// Випадкове число між 0 та 10
let myRandom = Math.random() * 10; // Генерація випадкового числа від 0 до 10
console.log("Випадкове число між 0 і 10:", myRandom);

// Зведення 3 в 5 ступінь
let myPow = Math.pow (3, 5);
console.log("3 в 5 ступені:", myPow);

/*
 * #6
 *
 * Створіть об'єкт з ім'ям strObj.
 * Присвойте ключу str рядок тексту "Мама мыла раму, рама мыла маму", ключу length встановіть довжину цього рядка.
 */

// Мама мыла раму, рама мыла маму
// strObj

let strObj = {
  str: "Мама мыла раму, рама мыла маму",
  length: 32
};

/*
 * #7
 *
 * Перевірте наявність тексту 'рама' у полі str об'єкта strObj (див.п.6), результат збережіть у змінній isRamaPos та виведіть її у консоль.
 * Результатом для isRamaPos має бути індекс входження.
 * Результатом для isRama має бути буль true.
 */

// isRamaPos
// isRama

let isRamaPos = strObj.str.indexOf("рама");
console.log("Індекс входження 'рама':", isRamaPos);

let isRama = isRamaPos !== -1;
console.log("Чи є 'рама' у рядку:", isRama);

/*
 * #8
 *
 * Виконайте перейменування підрядка у рядку.
 * Як вихідний рядок використовуйте значення поля str об'єкта strObj (див.п.6), результат збережіть у змінній strReplace та відобразіть у консолі.
 * Вихідний рядок: 'Мама мыла раму, рама мыла маму'
 *      Результат: 'Мама моет раму, Рама держит маму'
 */

// strReplace

let strReplace = strObj.str
  .replace("мыла", "моет")
  .replace("рама", "Рама")
  .replace("мыла", "держит");
  
console.log("Преобразованная строка:", strReplace);

/*
 * #9
 *
 * Преобразуйте текст 'some STRING' у верхній, потім у нижній регістри, результат відобразіть у консолі.
 */

// var someStr = 'some STRING'
// var upperStr
// var lowerStr

// var someStr = 'some STRING'
var someStr = 'some STRING';

// var upperStr
var upperStr = someStr.toUpperCase();
console.log("Верхній регістр:", upperStr);

// var lowerStr
var lowerStr = someStr.toLowerCase();
console.log("Нижній регістр:", lowerStr);
