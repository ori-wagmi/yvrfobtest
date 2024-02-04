
const { Gpio } = require('onoff');

const pin = new Gpio(17, 'out');
pin.writeSync(1);
setTimeout(() => {
  pin.writeSync(0);
}, 500);
