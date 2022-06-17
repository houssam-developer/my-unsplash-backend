// setup variables as global before calls on FFIE
global.rootApp = __dirname;

const startup = require("./src/app/app");
startup();