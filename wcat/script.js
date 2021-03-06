#!/usr/bin/env node

// const fs = require('fs');

// let data = fs.readFileSync("abc.txt","utf-8");
// fs.writeFileSync("abc.txt",data + " Hello, this is pepcoding");
// console.log(fs.existsSync("ab.txt"));

let cmds = process.argv.slice(2);
const fs = require("fs");

function wcat(cmds) {
    let options = cmds.filter(function(data, index) {
        return data.startsWith("-");
    });
    let files = cmds.filter(function(data, index) {
        return !data.startsWith("-");
    });
    if(files.length == 0) {
        console.log("Please specify a file name to read.");
        return;
    }

    for(i in files) {
        if(!fs.existsSync(files[i])) {
            console.log(files[i] + " does not exist");
            return;
        }
    }

    for(i in files) {
        let data = fs.readFileSync(files[i],"utf-8");
        if(options.includes("-s")) {
            let lines = data.split("\r\n");
            // let allText = "";
            for(j in lines) {
                if(lines[j] != "") {
                    console.log(lines[j]);
                    // allText += lines[j] + "\n";
                }
            }
            // console.log(allText);
            // console.log(lines);
        } else {
            console.log(data);
        }
    }
}
wcat(cmds);
