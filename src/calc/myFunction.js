
export function result(a,b,c){
    let res1 = a*500/1000;
    res1 = res1*b;

     if(Number(c) === 1){
      return res1 / 2;
    }
    else if(Number(c) === 2){
      return res1 * 1;
    }
    else if(Number(c) === 3){
      return res1 * 2;
    }
  }

  export function resProduct(arr , funct){
    var d = arr.filter(function(value){ return value})
    let h = d.length
    var n = funct / h
    return n.toFixed(1)
   }
  
   const style ={
    color:'black',
  }
  const style2 ={
    color:'silver',
  }
  
  export function Check1(a){if(a === true){return style;}else{return style2;}}
  export function Check2(a){if(a === true){return style;}else{return style2;}}
  export function Check3(a){if(a === true){return style;}else{return style2;}} 
  export function Check4(a){if(a === true){return style;}else{return style2;}} 
  export function Check5(a){if(a === true){return style;}else{return style2;}}   