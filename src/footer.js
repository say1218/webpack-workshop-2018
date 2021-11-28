import { red, blue } from './button';

const top = document.createElement("div");
const bottom = document.createElement("div");

const footer = document.createElement("div");
footer.appendChild(top);
footer.appendChild(bottom);

top.innerText = "Footer Top";
top.style = red;

bottom.innerText = "Footer Bottom";
bottom.style = blue;

export { footer, top, bottom }; 




