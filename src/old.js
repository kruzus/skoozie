const os = require("os");

const arch = os.arch();
console.log(`your arch is ${arch} `);

const CPU = os.cpus()[0].model;

console.log(`your cpu is ${CPU}`);

const freeMem = os.freemem() / 1024 / 1024 / 1024;
const mem = freeMem;

console.log(`your free memory is ${mem.toFixed(2)}`);

const homeDir = os.homedir();

console.log(`your homedir is ${homeDir}`);

console.log(os.hostname());

// console.log(os.networkInterfaces()); //Local IP

console.log(os.release());

const totalMem = os.totalmem() / 1024 / 1024 / 1024;
const mem2 = totalMem;

console.log(`your total memory is ${mem2.toFixed(2)} GB`);

function uptime() {
  const uptime = Math.floor(os.uptime() / 60);
  if (uptime > 60) {
    let hours = uptime / 60;
    console.log(`Your PC is running for ${Math.round(hours)} hours.`);
  } else {
    console.log(`Your PC is running for ${Math.round(uptime)} minutes.`);
  }
}
uptime();

function whatOS() {
  switch (os.type()) {
    case "Windows_NT":
      console.log("Windows!");
      break;
    case "Linux":
      console.log("Linux!");
      break;
    case "Darwin":
      console.log("Mac!");
      break;
    default:
      console.log("Not sure");
  }
}
whatOS();
