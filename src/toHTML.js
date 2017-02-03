export default function toHTML(markarray){
  let outdom=document.createElement('div');
  markarray.forEach((mark)=>{
    let htmldom=null;
    switch (mark.type){
      case 'header':{
        htmldom=document.createElement('h'+mark.level);
        htmldom.innerHTML=mark.content;
      }break;
      default:
      {
        htmldom=document.createElement('p');
        htmldom.innerHTML=mark.content;
      }break;
    }

    outdom.appendChild(htmldom);
  });

  return outdom.innerHTML;
}
