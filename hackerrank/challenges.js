const pup = require("puppeteer");
let id = "pokowa1759@shzsedu.com";
let pass = "Random@1997";

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
    await tab.click(".btn.btn-green.backbone.pull-right");
    

}
main();