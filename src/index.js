import parser from  './parse.js';

let letmarkdown={};

letmarkdown.parse=function(text){
  return parser.parse(text);
};

if(window){
  window.letmarkdown=letmarkdown;
}
export default letmarkdown;
export {
  parse
};
