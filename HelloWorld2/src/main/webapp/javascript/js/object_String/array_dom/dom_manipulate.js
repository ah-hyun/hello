
// element 생성 : createElement()
// textNode 생성 : createTextNode()
// 부모-자식 형성 : appendChild()

let frm = document.createElement('form');
frm.setAttribute('action', 'addMember.jsp');
frm.setAttribute('method', 'post');

// 자식요소(label)
let labelId = document.createElement('label');
labelId.setAttribute('for', 'user_id');
labelId.innerText = '사용자 아이디 ';
frm.appendChild(labelId);

// 자식요소 (input)
let inputId = document.createElement('input');
inputId.setAttribute('type', 'text');
inputId.setAttribute('name', 'user_id');
inputId.setAttribute('id', 'user_id');
frm.appendChild(inputId);


// 자식요소(label)
let labelPw = document.createElement('label');
labelPw.setAttribute('for', 'user_pass');
labelPw.innerText = ' 사용자 비밀번호 ';
frm.appendChild(labelPw);

// 자식요소 (input)
let inputPw = document.createElement('input');
inputPw.setAttribute('type', 'text');
inputPw.setAttribute('name', 'user_pass');
inputPw.setAttribute('id', 'user_pass');
frm.appendChild(inputPw);

// 로그인 버튼
let btn = document.createElement('button');
btn.innerText = "로그인";
frm.appendChild(btn);

// div#show의 자식요소로 지정
document.getElementById('show').appendChild(frm);
console.log(frm);