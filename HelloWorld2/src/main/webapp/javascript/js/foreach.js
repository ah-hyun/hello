const members = [
    { id: 'user1', name: '홍길동', score: 80, phone: '010-1234-1234', gender: 'M'}, 
    { id: 'user2', name: '김민식', score: 85, phone: '010-454-2345', gender: 'W'}, 
    { id: 'user3', name: '최우신', score: 55, phone: '010-422-2358', gender: 'M'},
    { id: 'user4', name: '황의겸', score: 70, phone: '010-1524-7564', gender: 'W'}
];

// for 반복문. 배열 관련된 메소드(forEach) 
let str = '<table border=1>';
str += '<tr><th>아이디</th><th>이름</th><th>점수</th><th>연락처</th><th>성별</th></tr>';

// members.forEach(callBackFnc);

// function callBackFnc(val,ind,ary) {
//     console.log(val);
// }

members.forEach((val, ind, ary) => {
    if (val.gender == 'W') {
        str += makeTr(val, 'red');       
    } else if (val.gender == 'M') {
        str += makeTr(val, 'blue');  
    }
});
document.write(str);

function makeTr(mem, color) {
        let tr = `<tr style = 'color: ${color}'>`;
        for (let prop in mem) {
            tr += `<td>${mem[prop]}</td>`;    
        }
        tr += '</tr>';
        return tr;
    }