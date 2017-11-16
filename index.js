var rect = require('./rectangle');

function solveRect(l,b){
    console.log("Solving For Rectangle with l=" + l + " and b=" + b);
    rect(l,b,(err,rectangle) => {
        if (err) {
            console.log("Error.!!", err.message)
        }
        else{
            console.log("Area :" + rectangle.area());
            console.log("Perimeter :" + rectangle.perimeter());
        }
    });
}
console.log("After the  call to rect()");
solveRect(7,8);
solveRect(5,6);