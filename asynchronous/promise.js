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

function wait(ms) {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve(ms)
      }, ms )
    })
  }  
  