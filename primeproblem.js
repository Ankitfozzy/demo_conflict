
let count=0;

let N = 13;

for(let i=0;i<N;i++){

	if(N%i==0)
count++;
}

if(count==2)
console.log("prime");
else
console.log("not prime");
