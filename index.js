
document.querySelector("button").addEventListener("click",function(){
  var  n=  parseInt(document.querySelector("#num").value);
    var result=fibonacciSeries(n);
    document.write("<span style=\"color:#AB2A22;font-size:2rem;background-color:#edffec; font-family: 'Lobster', cursive;\">Fibonacci Sequence: "+result+".<\/span>");
});
function fibonacciSeries(n){

  var a=[];
  var f1,f2,f3;
  if(n===1){
    f1=0;
    a.push(f1);
  }
  else if(n===2){
    f1=0;
    f2=1;
    a.push(f1);
    a.push(f2);
  }
  else{
    f1=0;
    f2=1;
    a.push(f1);
    a.push(f2);

    for(var i=2;i<n;i++){
      f3=f1+f2;
      a.push(f3);
      f1=f2;
      f2=f3;
    }
  }
  return a;
}
