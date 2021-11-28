// commonjs module 

const makeButton = (btnName) => {
   const btnlabel = btnName;
   const btn = document.createElement('button');
   btn.innerText = btnlabel;

   return btn;
}
const red = 'color:red';
const blue = 'color:blue';

//module.exports = makeButton; (single named export)
exports.makeButton = makeButton;
exports.red = red;
exports.blue = blue;