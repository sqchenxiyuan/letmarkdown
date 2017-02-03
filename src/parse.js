let parser={};

function parse(text){
  let out=[];
  let markarray=text.split('\n');
  markarray.forEach((text)=>{
    text=text.trim();

    if(/^#+ +/.test(text)){
      console.log(text.replace(/^#+ +/,'').replace(/#*$/,''));
    }
  });

  return markarray;
}


parser.parse=parse;
export default parser;
