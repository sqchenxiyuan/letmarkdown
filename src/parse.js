export default function parse(text){
  let out=[];
  let markarray=text.split('\n');
  markarray.forEach((text)=>{
    text=text.trim();

    if(/^#+ +/.test(text)){
      out.push({
        type:'header',
        level:text.match(/^#+/)[0].length,
        content:text.replace(/^#+ +/,'').replace(/#*$/,'')
      });
      return;
    }

    if(/^===+$/.test(text)||/^---+$/.test(text)){
      let level=/^===+$/.test(text)?1:2;
      let last=out[out.length-1];

      if(last.type==='text'&&last.content!==''){
        out.pop();
        out.push({
          type:'header',
          level:level,
          content:last.content
        });
        return;
      }
    }

    if(/^>.+/.test(text)){
      let lastnum=1;
      let last=out[out.length-1];

      if(last.type==='text'&&last.content===''){
        last=out[out.length-2];
        lastnum++;
      }

      if(last.type==='blockquote'){
        out.splice(-lastnum,lastnum);
        out.push({
          type:'blockquote',
          content:last.content+text.replace(/^>/,'')+'\n',
          marked:parse(last.content+text.replace(/^>/,'')+'\n')
        });
        return;
      }else{
        out.push({
          type:'blockquote',
          content:text.replace(/^>/,'')+'\n',
          marked:parse(text.replace(/^>/,'')+'\n')
        });
        return;
      }
    }

    if(/^\+ .+/.test(text)){
      let lastnum=1;
      let last=out[out.length-1];

      if(last.type==='text'&&last.content===''){
        last=out[out.length-2];
        lastnum++;
      }

      if(last.type==='list'){
        out.splice(-lastnum,lastnum);
        out.push({
          type:'list',
          content:last.content+text.replace(/^>/,'')+'\n',
          marked:parse(last.content+text.replace(/^>/,'')+'\n')
        });
        return;
      }else{
        out.push({
          type:'list',
          content:text.replace(/^>/,'')+'\n',
          marked:parse(text.replace(/^>/,'')+'\n')
        });
        return;
      }
    }

    out.push({
      type:'text',
      content:text
    });

  });

  return out;
}
