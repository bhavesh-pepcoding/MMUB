// let obj = {
//     "hell" : "hello"
// }
// console.log(obj[hell]);

// let arr = [1,2,3,4];
// arr["hello"] = "how are you?";
// arr[4] = 5;
// console.log(arr.length);

// const fs = require("fs");
// fs.writeFileSync("abc.txt", "hello");
// console.log(fs.readFileSync("abc.txt","utf-8"));


// let input = {
//     newObj: {
//         obj2: {
//             obj5: {
//                 one: 1
//             }
//         }
//     },
//     obj3 : {
//         obj4: {
//             two: 2
//         }
//     }
// };
// let ans = {};
// let keysArr = Object.keys(input);
// for(let i = 0; i < keysArr.length; i++) {
//     let type = typeof(input[keysArr[i]]);
//     let string = keysArr[i];
//     let next = input[keysArr[i]];
//     console.log(type, string, next);
//     while(type == "object") {
//         type = typeof(next[Object.keys(next)[0]]);
//         string += "." + Object.keys(next)[0];
//         next = next[Object.keys(next)[0]];
//         console.log(type, string, next);
//     }
//     ans[string] = next;

// }
// console.log(ans);

let filename = process.argv[2];

let fs = require('fs');

let data = fs.readFileSync(filename,"utf-8");
let count = 0;
let lines = data.split("");
console.log(lines);
// for(let i = 0; i < lines.length; i++) {
//     for(let j = 0; j < lines[i].length; j++) {
//         if(lines[i][j] == 'n') {
//             count++;
//         }
//     }
// }
// console.log(count);