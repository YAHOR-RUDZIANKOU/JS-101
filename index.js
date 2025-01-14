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

