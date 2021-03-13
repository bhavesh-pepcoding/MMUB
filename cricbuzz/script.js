require("chromedriver");

let wd = require("selenium-webdriver");
let chrome = require("selenium-webdriver/chrome");
let browser = new wd.Builder().forBrowser('chrome').build();
let matchId = 30880;
let innings = 1;
let batsmenColumns = ["playerName", "out", "runs", "ballsPlayed", "fours", "sixes", "strikeRate"];
let bowlerColumns = ["playerName", "overs", "maidenOvers", "runs", "wickets", "noBalls", "wideBalls", "economy"];
let inningsBatsmen = [];
let inningsBowler = [];
 
async function main() {
    await browser.get(`https://www.cricbuzz.com/live-cricket-scores/${matchId}`);
    await browser.wait(wd.until.elementLocated(wd.By.css(".cb-nav-bar a")));
    let buttons = await browser.findElements(wd.By.css(".cb-nav-bar a"));
    await buttons[1].click();
    await browser.wait(wd.until.elementLocated(wd.By.css(`#innings_${innings} .cb-col.cb-col-100.cb-ltst-wgt-hdr`)));
    let tables = await browser.findElements(wd.By.css(`#innings_${innings} .cb-col.cb-col-100.cb-ltst-wgt-hdr`));
    // console.log(tables.length);
    let inningsBatsmenRows = await tables[0].findElements(wd.By.css(".cb-col.cb-col-100.cb-scrd-itms"));
    for( let i = 0; i < (inningsBatsmenRows.length); i++) {
        let columns = await inningsBatsmenRows[i].findElements(wd.By.css("div"));
        if(columns.length == 7) {
            let data = {};
            for(j in columns) {
                if(j != 1) {
                    data[batsmenColumns[j]] = await columns[j].getAttribute("innerText");
                }
            }
            inningsBatsmen.push(data);
        }
    }
    console.log(inningsBatsmen);
    let inningsBowlerRows = await tables[1].findElements(wd.By.css(".cb-col.cb-col-100.cb-scrd-itms"));
    for( let i = 0; i < (inningsBowlerRows.length); i++) {
        let columns = await inningsBowlerRows[i].findElements(wd.By.css("div"));
        if(columns.length == 8) {
            let data = {};
            for(j in columns) {
            
                data[bowlerColumns[j]] = await columns[j].getAttribute("innerText");
            }
            inningsBowler.push(data);
        }
    }
    console.log(inningsBowler);
}

main();