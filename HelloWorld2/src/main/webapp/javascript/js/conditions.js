// conditions.js


    // function welcomeFnc(param) {
    //     console.log('Welcome ' + param);
    // }
    //같은 내용 간결하게
    let welcomeFnc = function(param) {console.log('Welcome ' + param);} // 단 두 줄 이상인 경우 중괄호 사용.
   

    // function helloFnc(param) {
    //     console.log('Hello ' + param);
    // }
    //같은 내용 간결하게. ES6 버전 부터 가능.
    let helloFnc = (param) => console.log('Hello ' + param); // 단 두 줄 이상인 경우 중괄호 사용.
  
    
    function callFunc(fnc) { //매개 값으로 함수가 올 수 있다!!!
        let name = 'Hong';
        fnc(name);
    }
    
    callFunc(welcomeFnc);
    callFunc(helloFnc);
    
    
    const members = [
        // 상수 변수 const, 새 값 할당 불가능 => 값을 바꿀 수 없다.
        { id: 'user1', name: '홍길동', score: 80, phone: '010-1234-1234', gender: 'M'}, 
        { id: 'user2', name: '김민식', score: 85, phone: '010-454-2345', gender: 'W'}, 
        { id: 'user3', name: '최우신', score: 55, phone: '010-422-2358', gender: 'M'},
        { id: 'user4', name: '황의겸', score: 70, phone: '010-1524-7564', gender: 'W'}
    ];
    

// 테이블형식(표) ==>
// 성별 : 남자 => 파란색 글씨, 여자 => 빨간색 글씨

// makeTr(파란색, 빨간색), makeBlueTr(), makeRedTr()

// 1번 방식
// function makeBlueTr(mem, color) {
//     let tr = `<tr style = 'color: ${color}'>`;
//     for (let prop in mem) {
//         tr += `<td>${mem[prop]}</td>`;    
//     }
//     tr += '</tr>';
//     return tr;
// }

// 2번 방식
function makeBlueTr(mem) {
    let tr = `<tr style = 'color: blue'>`;
    for (let prop in mem) {
        tr += `<td>${mem[prop]}</td>`;    
    }
    tr += '</tr>';
    return tr;
}
function makeRedTr(mem) {
    let tr = `<tr style = 'color: red'>`;
    for (let prop in mem) {
        tr += `<td>${mem[prop]}</td>`;    
    }
    tr += '</tr>';
    return tr;
}

    
let str = '<table border=1>';
str += '<tr><th>아이디</th><th>이름</th><th>점수</th><th>연락처</th><th>성별</th></tr>';
for(let member of members) {
    if (member.gender == 'W') {
        str += makeRedTr(member);       
    } else if (member.gender == 'M') {
        str += makeBlueTr(member);  
    }
}
str += '</table>';
document.write(str);



    const passMember = [];

        for(let i=0; i<members.length; i++) {
            if(members[i].score > 60) {
                console.log('이름: ' + members[i].name);
            passMember[passMember.length] = members[i].name;
            }
        }
    console.log(passMember);

    const women = [];
    for (let member of members) {
        if(member.gender == 'W') {
            women[women.length] = member;
        }
    }
    console.log(women);

    