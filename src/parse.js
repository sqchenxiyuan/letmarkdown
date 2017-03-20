export default function parse(md){

  let parseData=[];
  let result=[];
  let textArr=md.split('\n');
  let plugins=this.plugins;

  if(plugins.length===0)return md;
  while(textArr.length!==0){
    for(let i=0;i<plugins.length;i++){
        let data=plugins[i].check(textArr,parseData);
        if(data||data===''){
            if(typeof data === 'string')parseData.push(data);
            else{
                 parseData.push({
                    name:plugins[i].name,
                    data
                 });
            }
           
            break;
        }
    }
  }

  loop1:
  while(parseData.length!==0){
    for(let i=0;i<plugins.length&&parseData[0].name;i++){
        if(plugins[i].parse&&plugins[i].name===parseData[0].name){
            result.push(plugins[i].parse(parseData.shift().data));
            continue loop1;
        }
    }

     result.push(JSON.stringify(parseData.shift()));
  }

  return result.join('');
}
