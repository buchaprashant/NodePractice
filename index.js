var rect = {
    perimeter: (x,y) => (2*(x+y)),
    area: (x,y) => x*y
};

function solveRect(l,b){
    console.log("Solving For Rectangle with l=" + l + " and b=" + b);
    if(l<=0 || b<=0){
        console.log("Rectangle Dimensions should be greater then 0");
    }
    else{
        console.log("Area: "+ rect.area(l,b));
        console.log("Perimeter: "+ rect.perimeter(l,b));
    }
}

solveRect(7,8);
solveRect(5,6);