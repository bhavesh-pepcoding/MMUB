// function print(value) {
//     console.log(value);
// }

// function sum(a,b,print) {
//     print(a+b);
// }

// sum(2,3,print);

// let fs = require("fs");
// function callback2(err) {
//     if(err) console.log("something went wrong");
//     else console.log("file written successfully");
// }
// function callback(err,data) {
//     console.log(data);
//     fs.writeFile("temp.java","hello",callback2);
// }
// fs.readFile("temp.java","utf-8",callback);
// console.log("hello");


// function callback1() {
//     console.log("2 sec completed");
// }

// function callback2() {
//     console.log("5 sec completed");
// }
// setTimeout(callback2,2100);
// setTimeout(callback1,2000);

// function job1(callback) {
//     setTimeout(function() {
//         callback('test 1');
//     }, 2000);
// }

// function job2(callback) {
//     setTimeout(function() {
//         callback('test 2');
//     }, 4000);
// }

// job1(function(data) {
//     console.log(data);

//     job2(function(data) {
//         console.log(data);
//     });
// });


function job1(callback) {
    setTimeout(function() {
        callback();
    }, 2000);
}

function job2(callback) {
    setTimeout(function() {
        callback();
    }, 4000);
}


var counter = 0;

job1(function() {

    counter += 1;

    if (counter == 2) {
        done();
    }
});

job2(function() {

    counter += 1;

    if (counter == 2) {
        done();
    }
});

function done() {
    console.log('done',counter);
}
