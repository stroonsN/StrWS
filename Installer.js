const write = require("fs").writeFileSync;
const mkdir = require("fs").mkdirSync;
const chmod = require("fs").chmodSync;

const Config = require("./Config");

module.exports = function () {
    console.log("[StrWS]I couldn't find an " + Config.www_path + " directory and I'm creating a " + Config.www_path + " directory for you!");
    mkdir(Config.www_path);
    console.log("[StrWS]Can you wait a second? I'm creating your index file in " + Config.www_path + " directory!");
    write(Config.www_path + '/' + Config.index_file, '<?php echo "<title>StrWS</title><p>Welcome to StrWS</p>"; ?>');
    console.log("[StrWS]I need to change permissions for you...");
    chmod(Config.www_path, 0o777);
    console.log("[StrWS]Everything is ready! Handler started.");
}
