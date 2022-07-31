const os = require('os');

// info about current user
const user = os.userInfo();
console.log(user);
// method returns the system uptime in seconds
console.log(`The system uptime is ${os.uptime() / 60}`); 

const currentOs = {
    name: os.type(),
    release: os.release(),
    totalMemory: os.totalmem(),
    freeMemory: os.freemem()
}
console.log(currentOs);