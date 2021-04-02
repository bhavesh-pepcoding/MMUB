const pup = require("puppeteer");
let id = "pitapec776@irahada.com";
let pass = "Random@1997";
let browserPromise = pup.launch({
    headless: false,
    defaultViewport: false
});
let tab;
browserPromise.then(function(browser){
    let pagesPromise = browser.pages();
    return pagesPromise;
}).then(function(pages){
    tab = pages[0];
    let pageOpenPromise = tab.goto("https://www.hackerrank.com/auth/login");
    return pageOpenPromise;
}).then(function(){
    let idPromise = tab.type("#input-1",id);
    return idPromise;
}).then(function(){
    let passPromise = tab.type("#input-2",pass);
    return passPromise;
}).then(function(){
    let loginPromise = tab.click(".ui-btn.ui-btn-large.ui-btn-primary.auth-button.ui-btn-styled");
    return loginPromise;
}).then(function(){
    let waitPromise = tab.waitForSelector("#base-card-1-link", {visible: true});
    return waitPromise;
}).then(function(){
    let IpkClickPromise = tab.click("#base-card-1-link");
    return IpkClickPromise;
}).then(function(){
    let waitPromise = tab.waitForSelector("a[data-attr1='warmup']", {visible: true});
    return waitPromise;
}).then(function(){
    let wpClickPromise = tab.click("a[data-attr1='warmup']");
    return wpClickPromise;
}).then(function(){
    let waitPromise = tab.waitForSelector(".js-track-click.challenge-list-item", {visible: true});
    return waitPromise;
}).then(function(){
    let allUrlsPromise = tab.$$(".js-track-click.challenge-list-item");
    return allUrlsPromise;
}).then(function(data){
    let urlFetchPromises = [];
    for(let i of data){
        let urlFetchPromise = tab.evaluate(function(ele){
            return ele.getAttribute("href");
        },i);
        urlFetchPromises.push(urlFetchPromise);
    }
    return Promise.all(urlFetchPromises);
}).then(function(data){
    let problemSolvedPromise = solveQuestion("https://www.hackerrank.com" + data[0]);
    for(let i = 1; i < data.length; i++) {
        problemSolvedPromise = problemSolvedPromise.then(function(){
            return solveQuestion("https://www.hackerrank.com" + data[i]);
        });
    }
}).catch(function(err) {
    console.log(err);
})

function solveQuestion(url) {
    let problemUrl = url;
    let editorialurl = url.replace("?","/editorial?");
    return new Promise(function(resolve,reject){
        tab.goto(editorialurl).then(function(){
            let languagesPromise = tab.$$(".hackdown-content h3");
            return languagesPromise;
        }).then(function(data){
            let languagesPromise = [];
            for(let i of data) {
                let languagePromise = tab.evaluate(function(ele){
                    return ele.textContent;
                },i);
                languagesPromise.push(languagePromise);
            }
            return Promise.all(languagesPromise);
        }).then(function(data){
            for(let i in data) {
                if(data[i] == "C++") {
                    let finalAnswerPromise = tab.$$(".highlight").then(function(answers){
                        let answerPromise = tab.evaluate(function(ele){
                            return ele.textContent;
                        },answers[i]);
                        return answerPromise;
                    });
                    return finalAnswerPromise;
                }
            }
        }).then(function(data){

            // let editorClickPromise = tab.click(".monaco-scrollable-element.editor-scrollable.vs");
            // return tab.keyboard.down("Control").then(function(){
            //     return tab.keyboard.press("A")
            // })
        }).then(function(){
            resolve();
        });
    });
}