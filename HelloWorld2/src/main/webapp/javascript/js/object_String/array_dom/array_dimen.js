
const members = [
    ['홍길동', 20],
    ['김익수', 25],
    ['손봉호', 23]
]

members.push(['김아현', 27]);
members[0][1] = 22;

// 배열 -> 오브젝트 변경
const objMembers = [
    // {name:'홍길동', age: 20},
    // {name:'김익수', age:25},
    // {name:'손봉호', age:23}
];
members.forEach(member => {
    console.log(`이름: ${member[0]}, 나이: ${member[1]}`);
    let obj = {
        name : member[0],
        age: member[1]
    }
    objMembers.push(obj);
})
console.log(objMembers);

// 오브젝트 -> 배열 변경
const aryMembers = [];

objMembers.forEach(member => {
    let ary = [member.name, member.age];
    aryMembers.push(ary);
})

console.log(aryMembers);


// console.table(members);

