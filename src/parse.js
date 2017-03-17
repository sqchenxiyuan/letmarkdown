export default function parse(md){
  let result=[];
  let textArr=md.split('\n');
  let plugins=this.plugins;
  console.log(plugins);

  while(textArr.length!==0){
    for(let i=0;i<plugins.length;i++){
        if(plugins[i].check(textArr,result)){
            break;
        }
    }
  }

  return result;
}
