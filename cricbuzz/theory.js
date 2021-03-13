// require("chromedriver");

// let wd = require("selenium-webdriver");

// async function temp () {

//     let browser = new wd.Builder().forBrowser('chrome').build();
//     let matchId = 30880;
//     await browser.get(`https://www.cricbuzz.com/live-cricket-scores/${matchId}`);
// }

// temp();
// console.log("hello12");

// let obj = {
//     1 : "hello",
// }
// console.log(obj);

// let arr = [1,2,3,4];
// arr["hello"] = "How are you?";
// arr[4] = 5;
// console.log(arr.length);

// const fs = require("fs");
// let data = fs.readFileSync("abc.txt","utf-8");
// let count = 0;
// data = Array.from(data);
// for(let i = 0; i < data.length; i++) {
//     if(data[i] == "n") count++;
// }
// console.log(count);

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
// }
// let ans = {};
// for(let i = 0; i < Object.keys(input).length; i++) {
//     let type = typeof(input[Object.keys(input)[i]]);
//     let string = Object.keys(input)[i];
//     let next = input[Object.keys(input)[i]];
//     while(type == "object") {
//         type = typeof(next[Object.keys(next)[0]]);
//         string += "." + Object.keys(next)[0];
//         next = next[Object.keys(next)[0]];
//     }
//     ans[string] = next;
// }
// console.log(ans);

let x = {
    newObj:{
        obj2:{
            obj5:{
                one: 1,
                two: {
                    objlast: 123
                }
            }
        }
    },
    obj3:{
        obj4:{
            two:2
        }
    }
}

function flatten(ob) { 
  
    for (let i in ob) { 

        // if (typeof(ob[i]) == 'object') { 
        //     const temp = flatten(ob[i]); 
        //     for (const j in temp) { 
  
        //         result[i + '.' + j] = temp[j]; 
        //     } 
        // }   
        // else { 
        //     result[i] = ob[i]; 
        // } 
        console.log(i);
    }
}; 
  
flatten(x);
// let fs = require('fs');
// let filename = process.argv[2];
// let data = fs.readFileSync(filename, "utf-8");
// let dataArray = data.split("n");
// console.log(dataArray.length -1);