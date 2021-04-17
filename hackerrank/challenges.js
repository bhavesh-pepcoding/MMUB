const pup = require("puppeteer");
let id = "pokowa1759@shzsedu.com";
let pass = "Random@1997";
let challenges = require("./pepchallange");
async function main() {
    let browser = await pup.launch({
        headless: false,
        defaultViewport: false,
        args: ["--start-maximized"]
    });
    let pages = await browser.pages();
    let tab = pages[0];
    await tab.goto("https://www.hackerrank.com/auth/login");
    await tab.type("#input-1", id);
    await tab.type("#input-2", pass);
    await tab.click(".ui-btn.ui-btn-large.ui-btn-primary.auth-button.ui-btn-styled");
    await tab.waitForNavigation({waitUntil: "networkidle2"});
    await tab.click(".dropdown-handle.nav_link.toggle-wrap");
    await tab.click("a[data-analytics='NavBarProfileDropDownAdministration']");
    await tab.waitForSelector(".nav-tabs.nav.admin-tabbed-nav li", {visible: true});
    let linkLists = await tab.$$(".nav-tabs.nav.admin-tabbed-nav li");
    await linkLists[1].click();
    await tab.waitForSelector(".btn.btn-green.backbone.pull-right", {visible: true});
    let createChallengeButton = await tab.$(".btn.btn-green.backbone.pull-right");
    let createChallengeUrl = await tab.evaluate(function(ele){
        return ele.getAttribute("href");
    },createChallengeButton);
    for(let i = 0; i < challenges.length; i++) {
        await createChallenge("https://www.hackerrank.com" + createChallengeUrl,challenges[i],await browser.newPage() );
    }
    
    

}

async function createChallenge(url,challenge,tab) {
    await tab.goto(url);
    await tab.waitForSelector("#name",{visible: true});
    await tab.type("#name",challenge["Challenge Name"]);
    await tab.type("#preview",challenge["Description"]);
    await tab.waitForSelector("#problem_statement-container .CodeMirror textarea",{visible: true});
    await tab.type("#problem_statement-container .CodeMirror textarea", challenge["Problem Statement"]);
    await tab.type("#input_format-container .CodeMirror textarea", challenge["Input Format"]);
    await tab.type("#constraints-container .CodeMirror textarea", challenge["Constraints"]);
    await tab.type("#output_format-container .CodeMirror textarea", challenge["Output Format"]);
    await tab.type("#tags_tag",challenge["Tags"]);
    await tab.keyboard.press("Enter");
    await tab.click(".save-challenge.btn.btn-green");
}
main();