function max(...arg){
    let max = 1;
    for(let i=0; i<arg.length; i++){
      if(arg[i] > max){
        max = arg[i];  
        }
    }
    console.log(arg);
    console.log(max);

}
max(52,89,-45,-55,30,60,79,55,-3); 