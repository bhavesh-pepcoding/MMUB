require("chromedriver");

let wd = require("selenium-webdriver");
let chrome = require("selenium-webdriver/chrome");
let browser = new wd.Builder().forBrowser('chrome').setChromeOptions(new chrome.Options().headless()).build();
let matchId = 33668;
let innings = 1;
let batsmenColumns = ["playerName", "out", "runs", "ballsPlayed", "fours", "sixes", "strikeRate"];

let innings1Batsmen = [];

async function main() {
    await browser.get(`https://www.cricbuzz.com/live-cricket-scores/${matchId}`);
    await browser.wait(wd.until.elementLocated(wd.By.css(".cb-nav-bar a")));
    let buttons = await browser.findElements(wd.By.css(".cb-nav-bar a"));
    await buttons[1].click();
    await browser.wait(wd.until.elementLocated(wd.By.css(`#innings_${innings} .cb-col.cb-col-100.cb-ltst-wgt-hdr`)));
    let tables = await browser.findElements(wd.By.css(`#innings_${innings} .cb-col.cb-col-100.cb-ltst-wgt-hdr`));
    // console.log(tables.length);
    let innings1BatsmenRows = await tables[0].findElements(wd.By.css(".cb-col.cb-col-100.cb-scrd-itms"));
    for( let i = 0; i < (innings1BatsmenRows.length - 3); i++) {
        let columns = await innings1BatsmenRows[i].findElements(wd.By.css("div"));
        let data = {};
        for(j in columns) {
            if(j != 1) {
                data[batsmenColumns[j]] = await columns[j].getAttribute("innerText");
            }
        }
        innings1Batsmen.push(data);
    }
    console.log(innings1Batsmen);
}

main();