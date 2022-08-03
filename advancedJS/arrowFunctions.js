//*Same as Functions but easier syntax
// Normal Syntax
function a(){
    console.log("Hello World");
}
a()

//===================> Arrow syntax

const a = () => {
    console.log("Hello World");
}
a()

let l=[1,2,3,4,5]

let squaresInArraowNotation = l.map(item => item**2)
let squaresInNormalNotation = l.map(function(item){
    return item**2;
})