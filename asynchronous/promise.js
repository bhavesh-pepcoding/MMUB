const fs = require("fs");

// // let cond = true;
// // let isitdone = new Promise(function (resolve,reject) {
// //     if(cond) {
// //         resolve("work is done");
// //     } else {
// //         reject("work is not done");
// //     }
// // });
// // isitdone.then(function(val){
// //     console.log(isitdone);
// //     console.log(val);
// // }).then(function(val){
// //     console.log(val);
// // })
// // console.log("hello");

// function job() {
//     return new Promise(function(resolve, reject) {
//         reject();
//     });
// }

// let promise = job();

// promise

// .then(function() {
//     console.log('Success 1');
// })

// .then(function() {
//     console.log('Success 2');
// })

// .then(function() {
//     console.log('Success 3');
// })

// .catch(function() {
//     console.log('Error 1');
//     return 4;
// })

// .then(function(val) {
//     console.log('Success 4');
// })

// .then(function() {
//     console.log('Success 5');
// })

// const promise = new Promise(res => res(2));
// promise.then(v => {
//         console.log(v);
//         return v * 2;
//     })
//     .then(v => {
//         console.log(v);
//         return v * 2;
//     })
//     .finally(v => {
//         console.log("hekfknsjfnjksndfj chujsddjc csjbcj cbdcjdj");
//         return 10;
//     })
//     .finally(v => {
//         console.log("fbjhdbf fdsjhfbj fbsdjf fbhjdfb fsdjhbfh");
//         console.log(v);
//     })
//     .then(v => {
//         console.log(v);
//         return v * 2;
//     })




// setInterval(() => {
//     if(cond){
//         console.log("hello");
//     }
// }, 2000);
// let cond = true;
// setTimeout(() => {
//     cond = false;
// }, 2000);

// while(true){
//     console.log(cond);
// }

// promise = new Promise(function (resolve, reject) {
//   setTimeout(() => {
//     reject("Some result");
//   }, 1000);
// });


// promise.then(function(val){
//     console.log(val);
// }).catch(function(err){
//     console.log(err);
// })

// console.log("hello");
// console.log("hello2");

// function wait(ms) {
//     return new Promise((resolve, reject) => {
//       setTimeout(() => {
//         resolve(ms)
//       }, ms )
//     })
//   }  
  


// setTimeout(function() {
//   console.log("timeout")
// },0);
// new Promise(function(resolve){
//   resolve()
// }).then(function(){
//   console.log("promise")
// });

// console.log("hello");


// final answer of last promise

// let central = require('./central'),
//     db1 = require('./db1'),
//     db2 = require('./db2'),
//     db3 = require('./db3'),
//     vault = require('./vault'),
//     mark = require('./mark');

// module.exports = function (id) {
//     // TODO
//     // Reminder: The deadline is tomorrow !
//     return new Promise(function (resolve, reject) {
//         let obj = {};
//         obj["id"] = id;
//         Promise.all([central(id).then(function (data) {
//             if (data == 'db1') {
//                 return [db1(id),"db1"];
//             } else if (data == 'db2') {
//                 return [db2(id),"db2"];
//             } else if (data == 'db3') {
//                 return [db3(id),"db3"]
//             }
//         }).catch(function (err) {
//             reject("Error central")
//         }),
//         vault(id).then(function(data){
//             return data;
//         }).catch(function (data) {
//             reject("Error vault")
//         })]).then(function (arr) {
//             arr[0][0].then(function (data) {
//                     obj['username'] = data.username;
//                     obj['country'] = data.country;
//                      mark(id).then(function () { }).catch(function (err) {

//                     });
//                     resolve(obj);

//                 }).catch(function (err) {
//                     reject("Error " + arr[0][1]);
//                 })
//             obj["firstname"] = arr[1].firstname;
//             obj["lastname"] = arr[1].lastname;
//             obj["email"] = arr[1].email;
//         }).catch(function (error) {
//             reject(error)

//         })
//     })
// };


async function readfile() {
    try{
        let data = await fs.promises.readFile("callback.js","utf-8");
        console.log(data);
    } catch(err) {
        console.log("file not found")
    }
    
}
readfile();
