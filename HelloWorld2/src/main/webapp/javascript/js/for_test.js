// 1 ~ 100 사이의 임의의 수를 생성 => 배열에 저장 [5]
// 배열 값 중 최대값을 구하는 반복문을 작성 큰 값은 콘솔출력
// 배열요소는 document.write() => 5개 요소를 화면에 출력

const numArr = [];

for (let i = 0; i<5; i++) {
    let num = Math.ceil(Math.random()*100);
    numArr[i] = num;
}

numArr.forEach(val => document.write(`<p>${val}</p>`));

let maxnum = 0;
numArr.forEach(val => {
    if (val > maxnum) {
        maxnum = val;
    }
});

console.log('max: ' + maxnum);

// 함수의 스코프 체인
var a = 1;
var b = 5;

function outerFunc() {
    function innerFunc() {
        a = b;
}   
    console.log(a); // 1
    a = 2;
    b = 4;
    innerFunc();
    console.log(a); // 4
    var b = 2;
    console.log(b); // 2
}
outerFunc();
console.log(b); // 5