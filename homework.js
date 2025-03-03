/* Завдання #1 */
let myNum = 10;
let myStr = 'some string';
let myBool = true;
let myArr = [1, 2, 3, 4, 5];
let myObj = { first: 'First Name', last: 'Last Name' };

/* Завдання #2 */
let decimal2 = myNum.toFixed(2);

/* Завдання #3 */
let i = 5;

console.log("Початкове значення i:", i);

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

/* Завдання #4 */
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


/* Завдання #5 */
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


/* Завдання #6 */
let strObj = {
  str: "Мама мыла раму, рама мыла маму",
  length: 32
};
console.log(strObj);


/* Завдання #7 */

let isRamaPos = strObj.str.indexOf("рама");
console.log("Індекс входження 'рама':", isRamaPos);

let isRama = isRamaPos !== -1;
console.log("Чи є 'рама' у рядку:", isRama);


/* Завдання #8 */

let strReplace = strObj.str
  .replace("мыла", "моет")
  .replace("рама", "Рама")
  .replace("мыла", "держит");

console.log("Преобразованная строка:", strReplace);


/* Завдання #9 */
// var someStr = 'some STRING'
var someStr = 'some STRING';

// var upperStr
var upperStr = someStr.toUpperCase();
console.log("Верхній регістр:", upperStr);

// var lowerStr
var lowerStr = someStr.toLowerCase();
console.log("Нижній регістр:", lowerStr);