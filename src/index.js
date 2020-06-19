const { table } = require("table");
const chalk = require("chalk");
const os = require("os");
const arch = os.arch();
const CPU = os.cpus()[0].model;
const freeMem = os.freemem() / 1024 / 1024 / 1024;
const homeDir = os.homedir();
const totalMem = os.totalmem() / 1024 / 1024 / 1024;
//Todo: Simplify the imports, maybe use TS? with import keyword and load the settings?

//for some reason the time is fixed and it's not being updated when we run node index.js....
function uptime() {
  const uptime = Math.round(os.uptime()); //returns in seconds
  const hours = Math.round(uptime / 60 / 60); // gives us hours
  const mins = Math.round(uptime / 60);

  return `hours is ${hours} mins ${mins}`;
}

function whatOS() {
  switch (os.type()) {
    case "Windows_NT":
      return "Windows";
      break;
    case "Linux":
      return "Linux";
      break;
    case "Darwin":
      return "Mac";
      break;
    default:
      return "Not sure";
  }
}

const data = [
  [`${chalk.cyan("Architecture")}`, `${chalk.green(arch)} `],
  [`${chalk.cyan("CPU")}`, `${chalk.green(CPU)}`],
  [`${chalk.cyan("Free Memory")}`, `${chalk.green(freeMem.toFixed(2) + "GB")}`],
  [`${chalk.cyan("Homedir")}`, `${chalk.green(homeDir)}`],
  [`${chalk.cyan("Hostname")}`, `${chalk.green(os.hostname())}`],
  [`${chalk.cyan("OS release")}`, `${chalk.green(os.release())}`],
  [
    `${chalk.cyan("Total Memory")}`,
    `${chalk.green(totalMem.toFixed(2) + "GB")} `,
  ],
  [`${chalk.cyan("Uptime")}`, chalk.green(uptime())],
  [`${chalk.cyan("Current OS")}`, chalk.green(whatOS())],
];

const output = table(data);

console.log(output);
