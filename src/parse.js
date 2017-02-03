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

    out.push({
      type:'text',
      content:text
    });

  });

  return out;
}
