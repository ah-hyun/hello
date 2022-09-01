
let items = 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Atque eius sit ullam enim totam sint illum magni consequatur impedit nostrum repellendus suscipit, voluptates odio iusto nulla temporibus nam cumque corporis.'

let bdy = document.querySelector('body'); // boby 태그 찾아서 bdy 변수 할당
let div = document.createElement('div'); // div element 생성
    bdy.append(div); // body 자식요소로 붙임

let words = items.split(' ');
words.forEach(word => {
   let span = document.createElement('span');
    span.innerText = word;

   div.append(span);
});

let inp = document.createElement('input');
let btn = document.createElement('button');
btn.innerText = '찾기';
inp.onchange = function() {
    // 버튼을 클릭하면..
    let findWord = inp.value;
    let spans = document.querySelectorAll('span');
    // console.log(findWord);
    // console.log(spans);
    spans.forEach(function(span){
        if(findWord == span.innerText) {
            span.remove();
        }
    });
    inp.value = '';
    inp.focus();
}

document.querySelector('div').after(inp, btn);