
var age; // undefined. 호이스팅

// ES6:
let fname = 'Hong'; // 변수 선언. 전역변수 / 지역변수 / 블럭레벨변수
fname = 'Hwang';
console.log(fname);

const PI = 3.14; //재선언 불가 -> 상수로 표현.
// PI = 1.23;

console.log(age);
// var age = 20;
age = 20;

function localFnc() {
    var age = 30; // 지역 변수
    age = 35;
    console.log('지역 변수: ' + age);

    let fname = 'Kim';
    console.log(fname);

}
localFnc();

{
    let fname = "park";
    console.log(fname);
    var age = 22; //전역변수 에러x
}
console.log('전역 변수: ' + age);
console.log('전역 변수: ' + fname);




console.log(window);