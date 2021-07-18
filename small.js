let n = [15, 80, 60, 20, 8];
let i = 0, small = n[0];
/*console.log(n.length);
console.log(n[0]);*/

/* let small=n[0];
for (let i = 0; i <= n.length; i++) {
    if (small >= n[i]) {
        small = n[i];
    }
}
console.log(small); */
/* while (i <= n.length) {
    if (small >= n[i]) {
        small = n[i];
    }
    i++;
}
console.log(small);*/

/* i=0;

while(i<5){
    console.log("while "+i++);
}

i=0;
do{
    console.log("do"+ i++)
}while(i<5) */

do {
    if (small >= n[i]) {
        small = n[i];
    }
    i++;
} while (i <= n.length)
{
    console.log(small+" hjj");
}


