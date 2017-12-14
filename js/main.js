// var str = '#',
//     z = '';
//
// for (var i = 1; i <= 7; i++){
//      console.log(z += str);
// }
//******************************************************************************
// function outPutNumber(number) {
//     for (var i = 1; i <= number; i++) {
//         // if (i % 3 == 0) {
//         //     console.log("Fizz");
//         // } else if (i % 5 == 0) {
//         //     console.log("Bizz");
//         // }
//         if (i % 3 == 0 && i % 5 == 0) {
//             console.log('FizzBizz');
//         } else {
//             console.log(i);
//         }
//
//
//     }
// }
//
// outPutNumber(100);
//******************************************************************************
// var newArr = ['#'];
//
// for (var i = 0; i <= 6; i++) {
//
//     if (newArr[i] === '#') {
//         newArr.push(' ');
//
//     } else if (newArr[i] === ' ') {
//         newArr.push('#');
//     }
//
//     for (var j = 0; j <= newArr.length; j++) {
//         if (newArr[newArr.length - 1] === ' ') {
//             newArr.push(' ')
//         }
//     }
//
// }
//
// console.log(newArr);
//******************************************************************************
// function findMin(firstNumber, secondNumber) {
//     if(firstNumber > secondNumber) {
//         console.log( firstNumber = secondNumber);
//     } else  {
//         console.log( secondNumber = firstNumber)
//     }
// }
//
// findMin(-1, -2);
//var counter = 0;
//******************************************************************************
// function findMax(x, y) {
//     var result = Math.max(x, y);
//     console.log(result)
//
//     if (x < y) {
//         return x = y;
//     }
// }
//
// findMax(15, 13);
// findMax(12, 0);
//******************************************************************************
// function solution(number){
//     var sum = 0;
//     for (var i = 1; i < number; i++) {
//         if (i % 3 === 0 || i % 5 === 0) {
//             console.log(sum += i);
//         }
//     }
// }
// solution(10);
//
//******************************************************************************
// var str = 'abcde',
//     newStr = '';
//
// for (var i = 0; i <= str.length-1; i++) {
//     newStr = str[i];
//     console.log(newStr);
// }
//
//******************************************************************************
// var date = new Date();
//
// document.write(date.getHours() + ':' + date.getMinutes() + ':'
//  + date.getSeconds());

// var sayHi = ['Hello ', 'World', '!'],
//     str = '';
//
// //console.log(sayHi[0] + ' ' + sayHi[1] + sayHi[2])
//
//  str = sayHi.join('');
//  //str = str.split(',');
//  console.log(str);
//******************************************************************************
// var sayHi = ['Hello ', 'World', '!'];
//
// sayHi.shift();
// sayHi.unshift('Good buy');
//
// console.log(sayHi);
//******************************************************************************
// var salary = {
//     Kolya : 1000,
//     Petya : 5000
// };
//
// console.log(salary.Kolya);
//******************************************************************************
// var arr1 = [1, 2, 3, 4, 5];
// var arr2 = new Array(1, 2, 3, 4, 5);
//
// alert(arr2);
//******************************************************************************
// var arr = [4, 2, 5, 19, 13, 0, 10];
// var rrr = [];
// var newRrr = [];
// var sum = 0;
// var sum1 = 0;
//
// for (var i = 0; i <=arr.length - 1; i++) {
//     rrr.push(Math.pow(arr[i], 3));
//     newRrr = rrr.join(',');
//     newRrr = newRrr.split(',');
//
//     newRrr = parseInt(newRrr[i]);
//     sum += newRrr;
//     sum = Math.sqrt(sum);
//
//     sum1 += Math.pow(arr[i], 3);
//     sum1 = Math.sqrt(sum1);
// }
// console.log(sum);
// console.log(sum1);
//******************************************************************************
// var str = 'asdasd@asdasdas@adasdasd';
//
// str = str.split('');
//
// for (var i = 0; i <= str.length; i++) {
//     if (str[i] ==='@') {
//         str[i] = '!';
//     }
// }
// str = str.join('');
// console.log(str);
//******************************************************************************
// var str = 'asdasd@asdasdas@adasdasd',
//     newStr;
// newStr = str.replace(/@/g, '!');
// console.log(newStr);
//******************************************************************************
// var str = 'aaa bbb ccc',
//     newStrSlice = '',
//     newStrSubStr = '',
//     newStrSubString = '';
//
// newStrSlice = str.slice(4, 7);
// newStrSubStr = str.substr(4, 3);
// newStrSubString = str.substring(8, 12);
//
// console.log(newStrSlice);
// console.log(newStrSubStr);
// console.log(newStrSubString);
//******************************************************************************
// var arrayOne = ['a', 'b', 'c'],
//     arrayTwo = [1, 2, 3],
//     str = '',
//     newArrayOneAndTwo = [];
//
// arrayOne = arrayOne.join(',');
// arrayTwo = arrayTwo.join(',');
//
// str = arrayOne + ',' + arrayTwo;
//
// newArrayOneAndTwo = str.split(',')
//
// console.log(arrayOne);
// console.log(arrayTwo);
// console.log(str);
// console.log(newArrayOneAndTwo);
//******************************************************************************
// var arrayOne = ['a', 'b', 'c'],
//     arrayTwo = [1, 2, 3];
//
// for (var i = 0; i <= arrayTwo.length - 1; i++) {
//     arrayOne.push(arrayTwo[i]);
// }
//
// console.log(arrayOne);
//******************************************************************************
// var str = 'some string';
// str = str.replace(str[0], str[0].toUpperCase());
// console.log(str);

// var str = 'some string';
// var array = [];
// var newStr = ''
//
// for (var i = 0; i <= str.length - 1; i++) {
//     array.push(str[i]);
//     array[0] = array[0].toUpperCase();
//     newStr = array.join('');
// }
//
// console.log(newStr);
//******************************************************************************
// var str = '123456';
//
// str = str.split('').reverse().join('');
//
// console.log(str);
//******************************************************************************
// var str = '3751',
//     result = '';

// arr = str.split('');
// arr.sort();
// result = arr.join('');

// console.log(result);
//******************************************************************************
// var arr = [1, 2, 3, 3, 4, 5];
// var flag = false;
// for (var i = 0; i < arr.length - 1; i++) {
//     if (arr[i] == arr[i+1]) {
//         flag = true;
//         break;
//     }
// }
//
// if (flag == true) {
//     alert('Да');
// } else {
//     alert('Нет');
// }
//******************************************************************************
// var rps = {
//     1 : 'rock',
//     2 : 'paper',
//     3 : 'scissors'
// };
// if (rps[1] > rps[2]) {
//     console.log(rps[3]);
// } else  if (rps[3] < rps[2]) {
//     console.log(rps[2]);
// }

// console.log(rps[1]);
// console.log(();
//******************************************************************************
//laba 7 task 2
// var arr = [5, 7, 8, 1];
//
// function additiveInverse(array) {
//     var newArr = [];
//     for (var i = 0; i <= arr.length - 1; i++) {
//         if (arr[i] == Math.abs(arr[i])) {
//             newArr.push(-arr[i]);
//         }
//
//         if (arr[i] < 0) {
//             newArr.push(Math.abs(-arr[i]))
//         }
//     }
//
//     document.write('New additive inverse array: ' + newArr);
// }
//
// additiveInverse(arr);

// function additiveInverse() {
//
// }
//******************************************************************************
//laba 7 task 3
// function power(x, y) {
//     x **= y;
//     document.write('Power x = ' + x);
//     document.write('<br>');
// }
// (power(5, 7));
// console.time('power');
// console.timeEnd('power');
//******************************************************************************
//laba 7 task 4
// function otherAngle(a, b) {
//     return 180 - (Math.abs(a + b));
// }
//
// document.write('Angle c = ' + otherAngle(-30, -60));
//******************************************************************************
//laba 7 task 5
// function spEng(sentence) {
//
//     var str = 'english'.toLowerCase();
//
//     if (~sentence.indexOf(str)) {
//         document.write('true');
//     } else {
//         document.write('false');
//     }
// }
//
// spEng('abcEnglishef'.toLowerCase());

// function spEng(sentence) {
//     //var str = 'abcEnglishef',
//         newSubStr = '';
//
//     newSubStr = sentence.substr(3, 7).toLowerCase();
//
//     document.write(newSubStr);
// }
//
// spEng('abcEnglishef');
//******************************************************************************
//laba 7 task 7
// var arrayNumber = [1, 2, 3, 4, 5];
//
// function reverse(array) {
//     array.reverse();
//
//     document.write(array);
// }
//
// reverse(arrayNumber);
//******************************************************************************
//laba 7 task 8
// function findDayOfWeek(numberDay) {
//     var dayOfWeek = ['Sunday', 'Monday', 'Tuesday', 'Wensday', 'Thursday', 'Friday', 'Saturday'];
//
//     if (dayOfWeek[numberDay] == undefined) {
//         document.write('Wrong, please enter a number between 0 and 6')
//     } else if (dayOfWeek[numberDay] == dayOfWeek[numberDay]) {
//         document.write(dayOfWeek[numberDay])
//     }
// }
//
// findDayOfWeek(Math.abs(prompt('Enter number 0 - 6')));
//******************************************************************************
//laba 7 task 9
// var words = ['hello', 'world', 'this', 'is', 'great'];
//
// function smash(array) {
//     var newWords = words.join(' ');

//     document.write('Now it\'s\ a string ' + newWords);
// }
//
// smash(words);
//******************************************************************************
//laba 7 task 10
// function removeTheSpaces(sentence) {
//     var newSentence = '';




//     newSentence = sentence.replace(/ /g, '');
//     document.write('New sentence ' + newSentence);
// }
//
// removeTheSpaces('The Some Sentence');
//******************************************************************************
//laba 7 task 11
// function calculator(operation, numberOne, numberTwo) {
//     if (operation === '+') {
//         return (numberOne + numberTwo);
//     }
//     if (operation === '-') {
//         return (numberOne - numberTwo);
//     }
//     if (operation === '*') {
//         return (numberOne * numberTwo);
//     }
//     if (operation === '/') {
//         return (numberOne / numberTwo);
//     }
// }
//
// document.write(calculator('/', 3, 2));
//******************************************************************************
//laba 7 task 11
// function toString(number) {
//     number = number.toString();
//     document.write('now it\'s\ string ' + str);
//     document.write('<br>');
//     document.write('now it\'s\ his new type ' + typeof str);
// }
//
// toString(15);
// function toString(number) {
//     var str = '';
//     str +=number
//     document.write('now it\'s\ string ' + str);
//     document.write('<br>');
//     document.write('now it\'s\ his new type ' + typeof str);
// }
//
// toString(155);
//******************************************************************************
//laba 7 task 11
// function findOpposite(number) {
//     return -(number);
// }
//
// document.write(findOpposite(15));
//******************************************************************************
//laba 7 task 12
// var arr = [6, 2, 1, 8, 10 ];
// var max = arr[0];
// var min = max;
// var sum = 0;
//
// for (var i = 0; i <= arr.length - 1; i++) {
//     if (max < arr[i]) {
//         max = arr[i];
//     }
//
//     if (min > arr[i]) {
//         min = arr[i];
//     }
//
//     sum += arr[i];
// }
//
// sum += - max - min;
//
// document.write('Maximal element: ' + max);
// document.write('<br>');
// document.write('Minimal element: ' + min);
// document.write('<br>');
// document.write('The result in binary notation: ' + parseInt(sum, 2));
// document.write('<br>');
// document.write('<br>');
// document.write('Result in heximal notation: ' + parseInt(sum, 16));
// document.write('<br>');
// document.write('Result id decimal notation: ' + parseInt(sum, 10));





















