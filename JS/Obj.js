//객체
var cat = {
    name: "나비",
    age : 1,
    mew: function(){
        return "야옹";
    }
};
console.log(cat);
console.log(cat.name);
console.log(cat.mew());

var me = {
    name : 'SH' ,
    birth : '0102'

};

me['gender'] = 'M';

console.log(me['gender']);


//배열
var arr1 = [12, 15, 18, 24, 29];
console.log(arr1.length);
arr1.push("91");
console.log(arr1);
arr1.pop();
console.log(arr1);
arr1.unshift(61);
console.log(arr1);
arr1.shift();
console.log(arr1);

console.log(arr1.indexOf(18));




//참조자료형 
var a1 = [1, 2, 3, 4, 5];
var a2 = a1;
console.log("a1 : ", a1);
console.log("a2 : ", a2);

a1.pop();
console.log("a1 : ", a1);
console.log("a2 : ", a2);

//자료형확인
let t1 = typeof('문자');
let t2 = typeof(245);

console.log(t1);
console.log(t2);

// 형변환
Number('10');