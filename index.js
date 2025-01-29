// task reference : https://github.com/Luffi2539/core-js-101/blob/main/src/03-arrays-tasks.js

// --------------------------------------ARRAY-------------------------------------------------
// #0
// function showRezult(){

// }
// console.log(showRezult())

// #1
// function showRezult(arr,value){
//     return arr.indexOf(value);
// }
// console.log(showRezult( ['Ace', 10, true], 10))

// #2
// let arr=[];
// let coun=1;
// function showRezult(length){
//     if(arr.length===length){
//         return arr;
//     }else{
//         arr.push(coun);
//         coun+=2;
//         return showRezult(length);
//     }
// }
// console.log(showRezult(5))

// #3
// function showRezult(arr){
//     let newArr=arr.slice();
//     console.log(newArr)
//     return newArr.concat(arr)
// }
// console.log(showRezult([1,2,3,4,5,6,7,8,9,10]))

// #4
// function showRezult(arr){
//     let newArr=arr.filter(elem=>{
//         return elem>0
//     })
//     return newArr
// }
// console.log(showRezult([1,2,-5,4,7,8,-10,20,-35]))

// #5
// function showRezult(arr){
//     let newArr=arr.filter(elem=>{
//         return typeof(elem)==='string'
//     })
//     return newArr

// }
// console.log(showRezult([0,1,3,4,5,6,7,8,9]))

// #5
// function showRezult(arr){
//     let newArr=arr.filter(elem=>{
//         return elem
//     })
//     return newArr

// }
// console.log(showRezult([false, 0, NaN, '', undefined ]))

// #6
// function showRezult(arr){
//     return newArr=arr.map((value)=>{
//         return value.toUpperCase();
//     })
// }
// console.log(showRezult([ 'a', 'b', 'c', 'd', 'e', 'f', 'g'  ]))

// #7
// function showRezult(arr){
//     return newArr=arr.map((value)=>{
//         return value.length;
//     })
// }
// console.log(showRezult([  'angular', 'react', 'ember' ]))

// #8
// function showRezult(arr,item,index){
//     arr.splice(index,0,item);
//     return arr;
// }
// console.log(showRezult(   [ 1, 3, 4, 5 ], 2, 1 ))

// #9
// function showRezult(arr,n){
//   let newArr=arr.slice(0,n);
//   return newArr;
// }
// console.log(showRezult(   [ 'a', 'b', 'c', 'd'], 3))

// #10
// function showRezult(arr,n){
//     return arr.splice(-n,arr.length)
//   }
//   console.log(showRezult(    [ 'a', 'b', 'c', 'd'], 3))

// #12
// function showRezult(arr){
//     return arr.map((value)=>{
//         return value*value;
//     })
// }
// console.log(showRezult( [ 10, 100, -1 ]))

// #13
// function showRezult(arr){
// let sum=0;
// let newArr=[];
// arr.forEach((value)=>{
//     sum+=value;
//     newArr.push(sum);
// })
// return newArr;
// }
// console.log(showRezult(  [ 1, 2, 3, 4, 5, 6, 7, 8, 9, 10 ] ))

// #14
// function showRezult(arr) {
//     return newArr=arr.filter((arr,index)=>{
//         return index%2!==0
//     })
// }
// console.log(showRezult([ "a" ]));

// #16
// function showRezult(arr){
//     let newArr=arr.slice();
//     return newArr
//     .sort((a,b)=>b-a)
//     .slice(0,3)

// }
// console.log(showRezult([ ]))

// #17
// function showRezult(arr){
//     let newArr=arr.filter((value)=>{
//         return value>0 && typeof(value)==='number';
//     })
//     return newArr.length;
// }
// console.log(showRezult( [ 1, '2' ] ))

// #18
// let dict = {
//     'zero': 0,
//     'one': 1,
//     'two': 2,
//     'three': 3,
//     'four': 4,
//     'five': 5,
//     'six': 6,
//     'seven': 7,
//     'eight': 8,
//     'nine': 9
//   };

// function numberMap(arr) {
//     return arr.sort((a, b) => dict[a] - dict[b]);
// }
// console.log(numberMap(  [ 'nine','one' ] ));

// // #19
// function showRezult(arr){
//     let sum=0;
//     arr.forEach((value)=>{
//         sum+=value;
//     })
//     return sum;
// }
// console.log(showRezult([1,10,100,1000]))

// #20
// function showRezult(arr){
//     let newArr=arr.filter((value)=>!value);
//     return newArr.length;
// }
// console.log(showRezult([ null, undefined, NaN, false, 0, '' ]))

// #21
// function showRezult(arr){
//     return arr.join(',')
// }
// console.log(showRezult([ 'rock', 'paper', 'scissors']))

// #22
// function showRezult(arr) {
//   arr.sort((a, b) => {
//     const countryComparison = a.country.localeCompare(b.country);
//     if (countryComparison === 0) {
//       // Если страны одинаковы, сравниваем города
//       return a.city.localeCompare(b.city);
//     }
//     return countryComparison;
//   });
//   return arr;
// }
// console.log(
//   showRezult([
//     { country: "Russia", city: "Moscow" },
//     { country: "Belarus", city: "Minsk" },
//     { country: "Poland", city: "Warsaw" },
//     { country: "Russia", city: "Saint Petersburg" },
//     { country: "Poland", city: "Krakow" },
//     { country: "Belarus", city: "Brest" },
//   ])
// );

// #23
// function showRezult(start, end) {
//   if (start > end) {
//     return [];
//   }
//   return [start, ...showRezult(start + 1, end)];
// }
// console.log(showRezult(1, 1));

// #24
// function showRezult(arr) {
//     let newArr=[];
//     arr.forEach((value)=>{
//         if(!newArr.includes(value)){
//             newArr.push(value)
//         }
//     })
//     return newArr;
// }

// console.log(showRezult( [ 1, 1, 2, 2, 3, 3, 4, 4]));

// #26
// function showRezult(arr,func) {
//     let newArr=arr.map((value)=>func(value));
//     console.log(newArr);

//     return newArr.flat();
// }

// console.log(showRezult(['one','two','three'], (x) => x.split('')));

// #27
// function showrezult(arr) {
//     if(arr.length%2===0){
//         let newArr=arr.splice(0,arr.length/2);
//         arr.push(newArr);
//         return arr.flat();
//     }else{
//         let midInd=Math.floor(arr.length/2);
//         let firstPart=arr.splice(0,midInd);
//         let secondPart=arr.splice(1);
//         arr.push(firstPart);
//         arr.unshift(secondPart);
//         return arr.flat();
//     }
// }

// console.log(showrezult( [1, 2, 3, 4, 5, 6, 7, 8]));

// #11
// function showrezult(matrix) {
//     return matrix.map(row => row.join(',')).join('\n');
// }

// console.log(
//   showrezult([
//     [0, 1, 2, 3, 4],
//     [10, 11, 12, 13, 14],
//     [20, 21, 22, 23, 24],
//     [30, 31, 32, 33, 34],
//   ])
// );

// #15 запись Array() - удобно, когда мы знаем конечную длину массива
// function showRezult(arr){
//   let newArr=arr.map((value,index)=>{
//     return Array(index+1).fill(value)
//   })
//   return newArr.flat();
// }
// console.log(showRezult([1,2,3,4,5]))

// #25!
// function groupBy(array, keySelector, valueSelector) {
//   const result = {};

//   array.forEach((item) => {
//     const key = keySelector(item);
//     const value = valueSelector(item);
//     if (!result[key]) {
//       result[key] = [];
//     }

//     result[key].push(value);
//   });

//   return result;
// }

// console.log(
//   groupBy(
//     [
//       { category: "fruit", name: "apple" },
//       { category: "fruit", name: "banana" },
//       { category: "vegetable", name: "carrot" },
//       { category: "vegetable", name: "potato" },
//     ],
//     (item) => item.category,
//     (item) => item.name
//   )
// );

// --------------------------------------------------------------------------------

// ------------------------------conditions-n-loops-tasks.js--------------------------

// #1
// function showRezult(value) {
//   if (value % 3 === 0 && value % 5 === 0) return "FizzBuzz";
//   else if (value % 3 === 0) return "Fizz";
//   else if (value % 5 === 0) return "Buzz";
//   else return value;
// }
// console.log(showRezult(21));

// #2
// function showRezult(value) {
//     if(value===1){
//         return 1
//     }
//     return value*showRezult(value-1)
//   }
//   console.log(showRezult(5));

// #3
// function showRezult(start,end){
//     if(start===end){
//         return start;
//     }
//     return start+showRezult(start+1,end)
// }
// console.log(showRezult(-1,1))

// #4
// function showRezult(a, b, c) {
//   if (a + b < c || a + c < b || b + c < a) {
//     return false;
//   } else {
//     return true;
//   }
// }
// console.log(showRezult(10, 10, 10));

// #5
// function showRezult(objOracle, objPoint) {
//     let radius=objOracle.radius;
//     let x=objOracle.center.x;
//     let y=objOracle.center.y;
//     let x0=objPoint.x;
//     let y0=objPoint.y;
//     const distance = Math.sqrt(Math.pow(x - x0, 2) + Math.pow(y - y0, 2));
//     console.log(distance)
//     if(distance<=radius){
//         return true;
//     }else{
//         return false;
//     }
// }
// console.log(showRezult({ center: { x:0, y:0 }, radius:10 },  { x:0, y:0 }));

// #6
// function showRezult(str) {
//   let newStr = str;
//   for (let i = 0; i < str.length; i++) {
//     let noRep='';
//     let count = 0;
//     for (let j = 0; j < newStr.length; j++) {
//       if (str[i] === str[j]) {
//         count++;
//         noRep=str[i];
//       }
//     }
//     if(count===1){
//         return noRep;
//     }
//   }
//   return null;
// }
// console.log(showRezult("abracadabra"));

// #7
// function showRezult(a, b, isStartIncluded, isEndIncluded) {
//     if(a>b){
//         let per =b;
//         b=a;
//         a=per
//     }
//     const start = isStartIncluded ? '[' : '(';
//     const end = isEndIncluded ? ']' : ')';
//     return `${start}${a},${b}${end}`
// }
// console.log(showRezult(5, 3, true, true));

// #8
// function showRezult(str) {
//     return str.split('').reverse().join('')
// }
// console.log(showRezult('The quick brown fox jumps over the lazy dog'));

// #9
// function showRezult(num) {
//     let str=String(num);
//     let newStr=str.split('').reverse().join('');
//     return (+newStr);
// }
// console.log(showRezult(1234567));
// более правильное решение
// function showRezult(num) {
//     let reversed = 0;

//     while (num > 0) {
//         let digit = num % 10; // Получаем последнюю цифру числа
//         reversed = reversed * 10 + digit; // Добавляем цифру к перевернутому числу
//         num = Math.floor(num / 10); // Убираем последнюю цифру
//     }

//     return reversed;
// }

// console.log(showRezult(1234567)); // 7654321

// #10
// function showRezult(numb){
//     let str=String(numb);
//     let arr=str.split('').reverse();
//     let newArr=arr.map((value)=>{
//         return +value;
//     })
//     console.log(newArr)
//     let multiArr=newArr.map((value,index)=>{
//         if(index%2!==0){
//             let newVal=value*2;
//             if(newVal>9){
//                 return newVal-9;
//             }else{
//                 return newVal
//             }
//         }else{
//             return value
//         }
//     })
//     let sum=0;
//     multiArr.forEach((value)=>{
//         sum+=value;
//     })
//     return sum%10===0;
// }
// console.log(showRezult( 4916123456789012))

// #11 Небольшая рекурсия
// function showRezult(numb) {
// let arr=String(numb).split('').map(Number);
// let sum=0;
// arr.forEach((value)=>{
//     sum+=value;
// })
// if(sum>9){
//     return showRezult(sum);
// }else{
//     return sum;
// }
// }
// console.log(showRezult(12345));

// #12
// function showRezult(str) {
//     const closeDictionary={
//         "[": "]",
//         "(": ")",
//         "{": "}",
//         "<": ">",
//     }
//   const openDictionary = {
//     "[": "[",
//     "(": "(",
//     "{": "{",
//     "<": "<",
//   };
//   let stack = [];
//   for (let i = 0; i < str.length; i++) {
//     if (str[i] === openDictionary[str[i]]) {
//       stack.push(str[i]);
//     } else{
//         if(str[i]===closeDictionary[stack[stack.length-1]]){
//             stack.pop();
//         }
//     }
//   }
//   return stack.length===0;
// }
// console.log(showRezult("{[(<{[]}>)]}"));

// #13
// function showRezult(num,n) {
//     // .toString() - функция, с помощью которой можно переводить числа в разные системы счисления
//     return num.toString(n)
// }
// console.log(showRezult(365,10));

// #14 Умножение матриц
// function showRezult(mat1, mat2) {
//   if (mat1[0].length === mat2.length) {
//     let rez = [];
//     for (let i = 0; i < mat1.length; i++) {
//       rez[i] = [];
//       for (let j = 0; j < mat2[0].length; j++) {
//         rez[i][j] = 0;
//       }
//     }
//     for (let i = 0; i < mat1.length; i++) {
//       for (let j = 0; j < mat2[0].length; j++) {
//         for (let k = 0; k < mat1[0].length; k++) { // k идет по элементам строки и столбца
//           rez[i][j] += mat1[i][k] * mat2[k][j];
//         }
//       }
//     }
//     return rez;
//   }else{
//     return 'Errow'
//   }
// }

// console.log(
//   showRezult(
//     [
//       [1, 0, 0],
//       [0, 1, 0],
//       [0, 0, 1],
//     ],
//     [
//       [1, 2, 3],
//       [4, 5, 6],
//       [7, 8, 9],
//     ]
//   )
// );

// #15 Пересекаются ли прямоугольники!
// function showRezult(obj1, obj2) {
//   let x1MAX = obj1.left + obj1.width;
//   let x1MIN = obj1.left;
//   let y1MAX = obj1.top + obj1.height;
//   let y1MIN = obj1.top;
//   let x2MAX = obj2.left + obj2.width;
//   let x2MIN = obj2.left;
//   let y2MAX = obj2.top + obj2.height;
//   let y2MIN = obj2.top;

//   if (x1MAX < x2MIN || x2MAX < x1MIN || y1MAX < y2MIN || y2MAX < y1MIN) {
//     return "не пересекаются";
//   } else {
//     return "пересекаются";
//   }
// }
// console.log(showRezult({ top: 0, left: 0, width: 10, height: 10 }, { top: 20, left: 20, width: 20, height: 20 }));

// #16
// function showRezult(matrix) {
//   // проверка строк
//   for (let i = 0; i < matrix.length; i++) {
//     let count = 0;
//     let per = matrix[i][0];
//     for (let j = 0; j < matrix[0].length; j++) {
//       if (matrix[i][j] === per) {
//         count++;
//       }
//       if (count === 3) {
//         return per;
//       }
//     }
//   }
//   // проверка столбцов
//   for (let i = 0; i < matrix.length; i++) {
//     let count = 0;
//     let per = matrix[0][i];
//     for (let j = 0; j < matrix[0].length; j++) {
//       if (matrix[j][i] === per) {
//         count++;
//       }
//       if (count === 3) {
//         return per;
//       }
//     }
//   }

//   let mid=matrix[1][1];
//   if(mid===matrix[0][0] && mid===matrix[2][2]){
//     return mid;
//   }
//   if(mid===matrix[0][2] && mid===matrix[2][0]){
//     return mid;
//   }
// }
// console.log(
//   showRezult([
//     [, , ],
//     [, , ],
//     [, , ],
//   ])
// );
