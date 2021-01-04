//task1 Решите квадратное уравнение ax2 + bx + c = 0 (пользователь вводит коэф. a,b,c)
/*let a = 0;
while (a == 0) {
    a = parseFloat(prompt('Введите а не равное 0: '));
}
let b = parseFloat(prompt('Введите b: '));
let c = parseFloat(prompt('Введите c: '));
let diskr = b**2 - 4 * a * c;
switch (true) {
    case (diskr > 0 == true):
        console.log(`x1 = ${(-b+Math.sqrt(diskr))/(2*a)}, x2 =
${(-b-Math.sqrt(diskr))/(2*a)}`);
        break;
    case (diskr == 0):
        console.log(`x = ${-b/(2*a)}`);
        break;
    default: console.log ('Уравнение не имеет корней');
}
*/
/*
// task 2 Найти число (из трех заданых\введенных пользователем) с максимальной суммой цифр
let maxSum = 0,
  chislo;
let kolvo = parseInt(prompt("Введите кол-во чисел: "));
let vvedennieChisla = [...Array(kolvo)].map(
  (item) => (item = parseInt(prompt("Введите число: ")))
);
function countSumCifr(x) {
  let cifri = [];
  while (x != 0) {
    cifri.push(x % 10);
    x = Math.trunc(x / 10);
  }
  return cifri.reduce((summaCifr, item) => summaCifr + item, 0);
}
vvedennieChisla.forEach((item) =>
  countSumCifr(item) > maxSum
    ? ((maxSum = countSumCifr(item)), (chislo = item))
    : (maxSum = maxSum)
);

console.log(
  `Число с максимальной суммой цифр: ${chislo}`
);
*/ /*
/
/task 3  Вывести квадрат пифагора
const num = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
var zero = (a) => ((a + "").length == 1 ? "0" + a : a);
console.log(`    ${num.map((e) => zero(e)).join("  ")}`);
for (i of num) {
  console.log(`${zero(i)}  ${num.map((e) => zero(e * num[i - 1])).join("  ")}`);
}
*/
/*
//task4
const uchenikiRost = {
  Ivanov: 159,
  Sidorov: 164,
  Petrov: 168,
  Kozlov: 176,
  Smirnov: 171,
};
const srednRost =
  Object.values(uchenikiRost).reduce((srednRost, rost) => srednRost + rost, 0) /
  Object.keys(uchenikiRost).length;
console.log(
  Object.fromEntries(
    Object.entries(uchenikiRost).filter((rost) => rost[1] > srednRost)
  )
);
*/
//task 5  преобразовать набор вложенных массивов в один массив одного уровня вложености
//[[0, 1], [2, 3], [4, 5]] в [0, 1, 2, 3, 4, 5]
/*
let arr = [
  [0, 1],
  [2, 3],
  [4, 5],
];
//var1  console.log(arr.join().split(",").map((e) => parseInt(e)));
//var2
let arr1 = [];
arr.forEach((e) => (arr1 = arr1.concat(e)));
console.log(arr1);
// var3
let arr1 = [];
arr.forEach((e) => (arr1 = [...arr1, ...e]));
console.log(arr1);
*/
//task6 Квадратная матрица. Вывести главную диагональ матрицы. Обнулить элементы ниже главной диагонали
/*//var1
let xLim = parseInt(prompt("Введите размер матрицы: "));
let arr = [...Array(xLim)],
  x = 0;
while (x < xLim) {
  arr.map((e, i) => {
    i > x ? (arr[i] = 1) : i < x ? (arr[i] = 0) : (arr[i] = 8);
  });
  console.log(arr);
  x++;
}
*/
/*
//var2
let xLim = parseInt(prompt("Введите размер матрицы: "));
let x = 0;
while (x < xLim) {
  let i = 0,
    str = "";
  while (i < xLim) {
    i > x ? (str += 1) : i < x ? (str += 0) : (str += 8);
    i++;
  }
  console.log(str);
  x++;
}
*/
//task7
/*//var1 Поменять порядок слов предложения на обратный
let str = "Поменять порядок слов предложения на обратный";
console.log(str.split(" ").reverse().join(" "));
*/
/*
//var2  Вывести массив первых букв предложения
let str = "Вывести массив первых букв предложения";
console.log(str.split(" ").map((e) => e[0]));
*/
/*
//task8 Создайте функцию-конструктор Книга. Выведите созданные объекты
function Book(name, avtor, pages) {
  this.name = name;
  this.avtor = avtor;
  this.pages = pages;
  this.print = function () {
    alert(
      `Книга называется ${this.name} автора ${this.avtor}, кол-во страниц: ${this.pages}`
    );
  };
}
let book1 = new Book("Алгебра", "Мерзляк", 236);

book1.print();
*/
