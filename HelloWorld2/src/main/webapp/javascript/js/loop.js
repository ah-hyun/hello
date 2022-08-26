let numbers = [23, 33, 14, 52, 77, 55, 16];

// 1)
// 짝수합 => result.
let result = 0;
// for(let i=0; i<numbers.length; i++) {
//     if(numbers[i]%2==0) {
//         result += numbers[i];
//     }
// }
// console.log ('짝수합: ' + result);

for(let i=0; i<numbers.length; i++) {
    if(numbers[i] > 30) {
        result += numbers[i];
    }
}
console.log('짝수합/ 홀수번째 위치/ 30보다 큰값: ' + result);

result = 0;
// 2)
// numbers.forEach((val, ind, ary) => {
//     if (val %2==0) {
//         result += val;
//     }
// });

numbers.forEach((val,ind) => {
    if (ind %2==0) {
        result += val;
    }
});
console.log ('짝수합/ 홀수번째 위치: ' + result);
