let xo = (str: string): boolean => {
    let x:number=0;
    let o:number=0;
    for (let i = 0; i < str.length; i++) {
        if(str[i].toLowerCase() == 'x'){
            x++
        } else if(str[i].toLowerCase() == 'o') {
            o++
        }
    }
    return x==o?true:false
}

//   console.log(xo('xo'))//,true);
//   console.log(xo("xxOo"))//,true);
//   console.log(xo("xxxm"))//,false);
//   console.log(xo("Oo"))//,false);
//   console.log(xo("ooom"))//,false);