export default function parse(md){
  let result=[];
  let textArr=md.split('\n');

  textArr.forEach((text)=>{
    //处理





    //last
    result.push({
      content:text.trim()
    });

  });

  return result;
}
