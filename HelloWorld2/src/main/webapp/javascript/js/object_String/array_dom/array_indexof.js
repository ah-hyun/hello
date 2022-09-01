
// String.prototype.indexOf()
// Array.prototype.indexOf()

const members = ['진정욱', '노은경', '백나현']
const newMems = ['김민지', '노은경', '정다슬'];

let pos = members.indexOf('노윤경');
// members 계열에 newMems 추가
// 반복문 사용

newMems.forEach(member => {

    if(members.indexOf(member) == -1) {
        members.push(member);
    }
});
console.log(members); //['진정욱', '노은경', '백나현', '김민지', '정다슬']
members.push('김민');
let result = members.some(member => member == '노은경1');
result = members.every(member => member.length == 3);
result = members.find(member => member.startsWith('김'));
console.log(result); 
