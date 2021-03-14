require("chromedriver");

const fs = require("fs");
let wd = require("selenium-webdriver");
let browser = new wd.Builder().forBrowser('chrome').build();

let finalData = [];
let totalProjects = 0;
let projectsCovered = 0;
async function getProjectUrls(url, i) {
    let browser = new wd.Builder().forBrowser('chrome').build();
    await browser.get(url);
        await browser.wait(wd.until.elementLocated(wd.By.css("a.text-bold")));
        let projectBoxes = await browser.findElements(wd.By.css("a.text-bold"));
        totalProjects += ((projectBoxes.length > 8) ? 8 : projectBoxes.length);
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
    await browser.get(url + "/issues");
    finalData[i].projects[j]["issues"] = [];
    let issuseBoxes = await browser.findElements(wd.By.css(".Link--primary.v-align-middle.no-underline.h4.js-navigation-open"));
    let currUrl = await browser.getCurrentUrl();
    if(currUrl == (url + "/issues") && issuseBoxes.length != 0) {
        for(let k in issuseBoxes) {
            if(k == 8) {
                break;
            }
            let heading = await issuseBoxes[k].getAttribute("innerText");
            let url = await issuseBoxes[k].getAttribute("href");
            finalData[i].projects[j].issues.push({"heading" : heading, "url" : url});
        }
    }
    projectsCovered += 1;
    if(projectsCovered == totalProjects) {
        fs.writeFileSync("finalData.json", JSON.stringify(finalData));
    }
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
    browser.close();
}
main();