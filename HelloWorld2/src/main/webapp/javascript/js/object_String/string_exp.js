
let now = new Date(); //
console.log(now.toDateString()); // Tue Aug 30 2022
console.log(now.toLocaleDateString()); // 2022. 08. 30
console.log(now.toLocaleTimeString()); // 오후 5:28:10

console.log(`${now.getFullYear()}년 ${now.getMonth()+1}월 ${now.getDate()}일 ${now.getHours()}시 ${now.getMinutes()}분 ${now.getSeconds()}초`);
// getMonth는 0부터 시작하기 때문에 +1을 붙여준다.

console.log(`${now.getSeconds()<10?'0'+now.getSeconds():now.getSeconds()}`);
console.log(`0${now.getSeconds()}`.slice(-2));

console.log('abc'.toUpperCase()); //대문자로 변환
console.log('ABC'.toLowerCase()); //소문자로 변환

Date.prototype.hhmiss = function() {
        // 09:08:07
    now.toDateString();
}
console.log(now.hhmiss());