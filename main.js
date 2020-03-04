/*
Compose and pipe gives a posibility to asamble functions simply by calling another fun as a param like here:
fn1(fn2(fn3(50)))

Diference between compose and pipe is with the way it reads the funs but chain of operation stays the same
compose(fn1, fn2, fn3) (50) 
pipe(fn3, fn2, fn1) (50)

Arity is a term used to call a number of params that fun takes
By defoult we try to use one or two params not more so it's easier to deal with them 
*/
//Compose right to left

const compose = (f, g) => c => f(g(c));
const multiplyBy3 = num => num * 3;
const makePositive = num => Math.abs(num);

const multiplyBy3AndAbsolute = compose(multiplyBy3, makePositive);

console.log(multiplyBy3AndAbsolute(-40));

//pipe left to right
const pipe = (f, g) => c => g(f(c));

//now with strings

const compose2 = (f, g) => c => f(g(c));
const multiplyBy32 = a => a + " kota";
const makePositive2 = a => a + " ma";

const multiplyBy3AndAbsolute2 = compose2(multiplyBy32, makePositive2);

console.log(multiplyBy3AndAbsolute2("Ala")); // ALa ma kota
