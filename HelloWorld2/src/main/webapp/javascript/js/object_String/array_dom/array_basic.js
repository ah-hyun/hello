
// 배열에 요소 추가/삭제
// push() : 마지막 추가. pop() : 마지막 제거
// unshift() : 첫번째 추가. shift() : 첫번째 제거
// slice(firstindex, lastindex)
// splice() 

const names = [];

names[0] = '정다슬';
names[names.length] = '백진희';
names[names.length] = '김아현';

names.push('안희원');
names.unshift('홍길동');
names.pop();
names.shift();

const newNames = names.slice(0,2);
newNames.splice(0,2, '홍길동');

console.log(newNames);

// 추가 수정 삭제
names.splice(2,0, '홍길동');
const otherName = names.concat(newNames);
console.log(otherName);


names.forEach(name => {
console.log(name);
});

