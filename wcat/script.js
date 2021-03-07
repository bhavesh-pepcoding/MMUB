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

    // writing commands
    if(options.includes("-w")) {
        if(options.length != 1 || files.length != 2 || cmds.indexOf("-w") != 1) {
            console.log("Command not found");
            return;
        }
        let data = fs.readFileSync(files[0], "utf-8");
        fs.writeFileSync(files[1], data);
        return;
    }else if(options.includes("-a")) {
        if(options.length != 1 || files.length != 2 || cmds.indexOf("-a") != 1) {
            console.log("Command not found");
            return;
        }
        let file1 = fs.readFileSync(files[0], "utf-8");
        let file2 = fs.readFileSync(files[1], "utf-8");
        fs.writeFileSync(files[1], file2 + "\r\n" + file1);
        return;
    }

    // Reading commands
    let numbering = 1;

    for(i in files) {
        let data = fs.readFileSync(files[i],"utf-8");
        if(options.includes("-s")) {
            let lines = data.split("\r\n");
            // let allText = "";
            for(j in lines) {
                if(lines[j] != "") {
                    if(options.includes("-n") || options.includes("-b")) {
                        console.log(numbering + ". " + lines[j]);
                        numbering += 1;
                    } else {
                        console.log(lines[j]);
                    }
                    // allText += lines[j] + "\n";
                }
            }
            // console.log(allText);
            // console.log(lines);
        } else if((options.includes("-n") && !options.includes("-b")) || (options.includes("-n") && options.includes("-b") && (options.indexOf("-n") < options.indexOf("-b")))) {
            let lines = data.split("\r\n");
            for(j in lines) {
               console.log(numbering + ". " + lines[j]);
               numbering++; 
            }
        } else if(options.includes("-b")) {
            let lines = data.split("\r\n");
            for(j in lines) {
                if(lines[j] == "") {
                    console.log(lines[j]);
                } else {
                    console.log(numbering + ". " + lines[j]);
                    numbering += 1;
                }
            }
        }
        else {
            console.log(data);
        }
    }
}
wcat(cmds);
