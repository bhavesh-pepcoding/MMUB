require("chromedriver");

const fs = require("fs");
let wd = require("selenium-webdriver");
let browser = new wd.Builder().forBrowser('chrome').build();

let finalData = [];
async function getProjectUrls(url, i) {
    let browser = new wd.Builder().forBrowser('chrome').build();
    await browser.get(url);
        await browser.wait(wd.until.elementLocated(wd.By.css("a.text-bold")));
        let projectBoxes = await browser.findElements(wd.By.css("a.text-bold"));
        finalData[i]["projects"] = [];
        for(let j in projectBoxes) {
            if(j == 8) {
                break;
            }
            finalData[i].projects.push({projectUrl : await projectBoxes[j].getAttribute("href")});
        }
        let projects = finalData[i].projects;
        for(let j in projects) {
            getIssues(projects[j].projectUrl, i , j);
        }
        browser.close();
}

async function getIssues(url, i, j) {
    let browser = new wd.Builder().forBrowser('chrome').build();
    await browser.get(url);
    browser.close();
}
async function main() {
    await browser.get("https://github.com/topics");
    await browser.wait(wd.until.elementLocated(wd.By.css(".no-underline.d-flex.flex-column.flex-justify-center")));
    let topicBoxes = await browser.findElements(wd.By.css(".no-underline.d-flex.flex-column.flex-justify-center"));
    for(let topicBox of topicBoxes) {
        finalData.push({topicUrl : await topicBox.getAttribute("href")});
    }
    for(let i in finalData) {
        getProjectUrls(finalData[i].topicUrl, i);
    }
    fs.writeFileSync("finalData.json", JSON.stringify(finalData));
    browser.close();
}
main();