import Parse from  './parse.js';
import toHTML from  './toHTML.js';

class LetMDEngine{

  constructor(){
    this.textConfigMap={};
    this.textConfigs=[];
  }

  appendTextConfigs(config){
    if(!config.name){
      console.error('未定义插件的名字');
      return ;
    }
    this.textConfigs.push(config);
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
