/*exercise 1 */
let a = 10;
let b = 5;
document.write(a + b + "<br>");

/*exercise 2 */
let num1 = 10;
let num2 = 50;
num1 *= 9;
num2 /= num1;
num1 = 5+10 *3-1;
num2 =  9 * num1 ;
num2 = num1 / 8 +2
document.write(num1+ "<br>");
document.write(num2+ "<br>");

/*exercise 3 */
let number = 10;
number ++ ;
number ++;
number +=  5;
number --;
number *=2;
document.write(number+ "<br>");

/*exercise 4 */
function trueorfalse12() {
    return [
        1 <= 8 + 1,
        (2 - 3 + 4) * (9 + 7) && false,
        10 + 18 >= 3 || 4 <= 10,
        10 == 10 || 10 === 10,
        10 == 10 && 20 == 30 || 5 % 2 == 1,
        10 == 10 || 20 == 30 && 5 % 2 == 1,
        20 == 30 || 10 == 10 || 5 % 2 == 0,
        (33 > 20) || (2 < 12) && 10 || 2 <= 3 && !true,
        true && true || false || true,
        true && false || 8 < 10 && !false,
        true || false && 5 <= 9 || 10 != 38,
        !false || !true && !false && !true,
        (!10) && (10) || (!10) && (10) && 2 < 9 || true,
        (!false) || (!10)
    ];
}

let keep = trueorfalse12();
document.write(keep + "<br>");

/*exercise 5 */
 let A = 5;
 let B = 3;
 let C = 19;
 let D = -2;
 let X = 4;
 let Y = 1;
 console.log((5*X)+2*((3+B)+4));
 console.log((5*(X*2)*3)*(B+4));
 console.log( A == (B=5*5+Y));
 console.log( A += (X+5+A-Y));
 console.log(  A != (C *= (-D+A)));
 console.log( A *= A+(7-X-D+3));
 console.log( A %= D++);
 console.log( A %= ++D);
 console.log( (X++)*(A+C)+ (A++));
 console.log( A = A-- + X*(B<A)+Y*!(B<C)+5%2);
 console.log( !(X-D+C)||D+B+A && D++);
 console.log( A&&C||!0&&A&&!D);
 console.log( A&&C||!0&&A&&!D);
 console.log( ((A&&C)||!0)&&(C&&(!D)) && !A || !B);

 /*exercise 6 */
 if( a || b  || c  || d || false ){
    
 }
 if( a == b  || c <= d)
 if (  a <= c && c <= d || !b)
 if ( a != b || a<c && !c )
 if ( a != b ||a<= c || a<= b || true)
 if ( a != b ||a<= c || a< b || c==c )
 if ( a%b == 0 && c%d == 1 );