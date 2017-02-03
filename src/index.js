import parse from  './parse.js';
import toHTML from  './toHTML.js';

let letmarkdown={
  parse,
  toHTML};


if(window){
  window.letmarkdown=letmarkdown;
}


export default letmarkdown;
export {
  parse,
  toHTML
};
