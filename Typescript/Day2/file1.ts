let a1:number
a = 10;
a=20;
a=30;

interface Family{
    Father:string,
    Mother:string,
    Children:string | string[],
}

const myFam : Family = {
    Father:"King",
    Mother : "Queen",
    Children:["Prince" , "Princess"]

}

console.log(a)
console.log(myFam)