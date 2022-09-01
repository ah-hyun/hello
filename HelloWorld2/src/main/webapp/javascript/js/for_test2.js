
const arr = [];

arr.push(10);
arr.push(20);

let obj = {
    sname : 'Hong',
    age : 20,
    friends : [],
    addFriend : function(friend) {
     this.friends.push(friend);

    },
    friendList : function() {
        console.log(obj.friends[i].name)
    }
}

obj.addFriend('Kim');
obj.addFriend({name:'Hwang', phone:'010-1111-2222'});

console.log(obj.friends[1].phone);