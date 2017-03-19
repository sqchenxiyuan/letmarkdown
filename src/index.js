import Parse from  './parse.js';
import toHTML from  './toHTML.js';

class LetMDEngine{

  constructor(){
    this.textConfigMap={};
    this.textConfigs=[];
    this.plugins=[];
  }

  appendTextConfigs(config){
    if(Array.isArray(config)){
      this.plugins=this.plugins.concat(config);
    }else{
      this.plugins.push(config);
    }
  }

  parse(){
    return Parse.apply(this,arguments);
  }

  toHTML(){
    return toHTML.apply(this,arguments);
  }

}

if(window){
  window.LetMDEngine=LetMDEngine;
}


export default LetMDEngine;
export { LetMDEngine };
