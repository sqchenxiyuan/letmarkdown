export default function parse(md){
  // console.log(md);
  let result=[];
  let textArr=md.split('\n');
  let plugins=this.plugins;
  // console.log(plugins);
  if(plugins.length===0)return md;
  while(textArr.length!==0){
    for(let i=0;i<plugins.length;i++){
        if(plugins[i].check(textArr,result)){
            break;
        }
    }
  }

  return result.join('');
}
