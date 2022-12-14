// 배열 합계 구하기

// forEach() 순환문으로 배열 sum 구하기
const numbers = [2, 3, 8, 5, 1];
let sum = 0;

numbers.forEach(function(el){sum+=el;});
console.log(sum);

// reduce()로 배열 sum 구하기
let result = numbers.reduce(function(acc,val,idx,ary) {
    return acc + val;
}, 0);

result = numbers.reduce((acc, val, idx, ary) => {
    acc.push(val + 2);
    return acc;
}, []);

// <ul><li>2</li><li>3</li><li>8</li><li>5</li><li>1</li></ul>
result = numbers.reduce((acc, val, idx) => {
    console.log(acc);
    if(idx == 0) {
        acc = '<ul>';
    }
    acc += '<li>' + val + '</li>';
    if(idx == numbers.length - 1) {
        acc += '</ul>';
    }

    return acc; // 다음 순번의 누적초기값으로 사용
}, '');
document.write(result);

// 배열요소의 값 중에서 제일 큰 값 구하기
let max = numbers[0];
for (let i = 0; i < numbers.length; i++) {
    if (max < numbers[i]) {
        max += numbers[i];
    }
}
console.log('max: ', max);


result = numbers.reduce((acc, val) => {
    console.log(val);
    return acc > val ? acc : val;
}, Number.MIN_SAFE_INTEGER);
console.log('최종결과: ', result);