const { exec } = require("child_process");

function run() {
    console.log(`Voting 6 times, lol`);
    exec("npm test", run);
}

run();