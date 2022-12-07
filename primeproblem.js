let N=13
let count=0
for(let i=1;i<=N;i++){
  if(N%i==0){
    count++;
  }
}if(count==2){
  console.log("yes");
}else{
  console.log("No");
}