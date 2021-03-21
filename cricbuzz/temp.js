// require("chromedriver");
// let abc = new Promise(function(resolve,reject){
//     console.log(1);
//     browser.get("https://youtube.com").then(function(){
//         console.log(2);
//         resolve(3);
//     })
    
// })

// abc.then(function(val){
//     console.log(val);
// })
// let wd = require("selenium-webdriver");
// let browsers = [new wd.Builder().forBrowser('chrome').build(),new wd.Builder().forBrowser('chrome').build(),new wd.Builder().forBrowser('chrome').build(),new wd.Builder().forBrowser('chrome').build(),new wd.Builder().forBrowser('chrome').build(),new wd.Builder().forBrowser('chrome').build()];

// let urls = ["https://www.youtube.com/", "https://www.facebook.com/", "https://www.youtube.com/", "https://www.facebook.com/", "https://www.youtube.com/", "https://www.facebook.com/"]
// let arr = [];
// let arr1 = [];

// for(let i in urls) {
//     arr.push(browsers[i].get(urls[i]));
// }

// async function main() {
//     await Promise.all(arr);
//     console.log("all websites opened");
//     for(i in browsers) {
//         arr1.push(browsers[i].close());
//     }
//     await Promise.all(arr1);
//     console.log("all browsers closed");
// }

// console.log(main());

// async function temp() {
//     return 1;
// }

// console.log(temp());

// const timeOut = (t) => {
//     return new Promise((resolve, reject) => {
//       setTimeout(() => {
//         resolve(`Completed in ${t}`)
//       }, t)
//     })
//   }
//   timeOut(1000).then(result => console.log(result))
//   Promise.all([timeOut(1000), timeOut(2000)]).then(result => console.log(result))

const timeOut = (t) => {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        if (t === 2000) {
          reject(`Rejected in ${t}`)
        } else {
          resolve(`Completed in ${t}`)
        }
      }, t)
    })
  }
  
  const durations = [1000, 2000, 3000]
  
  const promises = []
  
  durations.map((duration) => {
    promises.push(timeOut(duration).catch((e) => {return e;})) 
  })
  console.log(promises);
  Promise.all(promises)
  .then(response => console.log(response))
  .catch(error => console.log(`Error in executing ${error}`))