// let a = 10;
// let a = 20;
// console.log(a);

// var a = 10;
// var a = 20;
// console.log(a);

// const a = 10;
// const a = 20;
// console.log(a);

// let a = 10;
// a = 20;
// console.log(a);

// var b = 10;
// b = 20;
// console.log(b);

// const c = 10;
// c = 20;
// console.log(c);

function temp () {
    {
        let a = 10;
    }
    console.log(a);
}
// temp();

// let a = 1;
// {
//     console.log(a);
//     var a = 2;
//     {
//         let a = 3;
//         console.log(a);
//     }
// }

// let arr = [];
// arr[0] = 1;
// arr.push(2);
// arr[2] = 3;
// arr.push(4);
// console.log(arr);

// let arr1 = [1,2,3,4];
// console.log(arr1);
// arr[100] = 25;

// arr.pop();
// console.log(arr);

// let arr = new Array(4);
// arr[15] = 2;
// console.log(arr[14]);

// let arr = [1,'b', 'bhavesh', 1.5, true];
// console.log(arr);

// let arr = new Array(1,2,3);
// console.log(arr);

// let arr = new Array(3);
// console.log(arr.length);

// let arr = [1,2,3,4];
// for(let i = 0; i < arr.length; i++) {
//     console.log(arr[i]);
// }

// let a = 10;
// let b = 20;
// console.log(a,b);

// for(let i = 0; i < 2; i++) {
//     let i = 10;
//     for(let i = 4; i < 5; i++) {
//         console.log(i);
//     }
// }

// for(let i = 4; i< 5; i++) {
//     console.log(i);
// }

// for(let i = 4; i< 5; i++) {
//     console.log(i);
// }

// for(let i = 0; i < 7; i++) {
//     for(i = 4; i < 5; i++) {
//         console.log(i);
//     }
// }

// arr[arr.length - 1]

// let arr = [1,2,3,4];

// for(i in arr) {
//     console.log(arr[i]);
// }

// arr.forEach(function(a,b) {
//     console.log(b,a);
// });
// function hello(data, index) {
//     console.log(data);
// }
// arr = arr.map(function(data,index) {
//     if(index > 1){
//         return data + 2;
//     } else {
//         return data;
//     }
// });

// delete arr[1];
// console.log(arr);
// console.log(arr[-1])
// arr.splice(-2,1);
// console.log(arr);


// arr = arr.map(function(data,index) {
//     return data + 2;
// });
// console.log(arr);

// let arr = [2,1,5,11,7,4,6,13,8,10];
// arr.map(function(data,index) {
//     console.log(data);
//     if(data % 2 == 0) {
//         arr.splice(index,1);
//         index--;
//     }
// })
// console.log(arr);

// let b = arr.filter(function(data, index){
//     return !(data % 2 == 0);
// });
// console.log(arr);
// console.log(b);

// let obj = {
//     "abc" : "hello",
//     "abc1" : [1,2,3,4],
//     "abc2" : function(){console.log("hello")},
//     1 : 123,
//     2 : {
//         "hello" : "how are you"
//     }
// }

// obj[-1] = "hello-1";

// obj.abc2();
// console.log(obj[2].hello);

// console.log(Object.keys(obj));
// console.log(Object.values(obj));

// let arr = [1,2,3,4];
// console.log(arr[1]);
// arr['abc'] = "hello";
// arr[4] = "abc";
// delete arr['abc'];
// console.log(arr);

let input1 =  [
    { name: "Delhi", rainfall: [2.3, 4, 3.1, 5.5, 1.1, 1.2, 7] },
    { name: "Noida", rainfall: [6.3, 0, 0.1, 3.5, 1, 2.6, 0.7] },
    { name: "Dehradun", rainfall: [12, 5.6, 3.1, 0.55, 11, 16.2, 19] },
    { name: "Nanital", rainfall: [8, 1.4, 0.61, 15.5, 6.6, 2, 9.82] },
];

// for(i in input1) {
//     let sum  = 0;
//     for(j in input1[i].rainfall){
//         sum += input1[i].rainfall[j];
//     }
//     let avg = sum/(input1[i].rainfall.length);
//     delete input1[i].rainfall;
//     input1[i]["avgRainfall"] = avg;

// }

let output = input1.map(function(data,index){
    let sum  = 0;
    for(i in data.rainfall){
        sum += data.rainfall[i];
    }
    let avg = sum/(data.rainfall.length);
    return {
        name: data.name,
        avgRainfall: avg
    };
});
console.log(input1);
console.log(output);



