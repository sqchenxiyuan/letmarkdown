let letmarkdown={};

letmarkdown.parse=function(text){

  return text+'123';
};

if(window){
  window.letmarkdown=letmarkdown;
}
export default letmarkdown;
export {
  parse
};
