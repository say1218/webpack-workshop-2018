import nav from "./nav";
import { footer } from "./footer";

import { top, bottom } from "./footer";
import { makeButton , red } from "./button";


let btn = makeButton('First btn');
btn.style = red;
console.log(footer);
document.body.appendChild(btn);
document.body.appendChild(footer);


