// commonjs module 

const makeButton = (btnName) => `Button: ${btnName}`;
const red = 'color:red';
const blue = 'color:blue';

//module.exports = makeButton; (single named export)
exports.makeButton = makeButton;
exports.red = red;
exports.blue = blue;