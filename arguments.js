console.log( " To create a function to inform if a number is even, reply is Ture or False");
function isEven(x){
    if (x% 2 ===0){
        return ("Ture");
    }
   return ("False");
}

console.log( " To create a factorial function for numbers! ");
function factorial(x){
    if (x < 0){
        return -1;
    }
    else if (x === 0 || x === 1){
        return ( "1");
    }
        return (x * factorial (x-1)) ;
}
console.log( " To create a factorial function for numbers! using While Loop ");
function factorialWhile(x){
    var result =x;
    if ( x===0 || x===1){
        return (1);
    }
     while (x>1){
       x--;
       result = result * x;
     }
       return result;
}
console.log( " To create a factorial function for numbers! using For Loop ");
function factorialFor(x){
    if (x  === 0 || x===1){
        return 1;
    }
    for (var i = x-1 ; i >1 ; i--){
        x = x *i;
    }
    return x;
}
console.log( " To create a function to change from kebabTosnake ");
function kebabTosnake(str){
 var newStr = str.replace (/-/g , "_");
 return newStr;
}