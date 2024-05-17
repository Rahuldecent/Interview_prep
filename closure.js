

function outerFunc() {
    let outerVar = "I am from outer function"


    function innerFunction(){
        console.log(outerVar)
    } // closure 

    return innerFunction

}

let innerFunc = outerFunc()
innerFunc()

/*
outerFunction defines a variable outerVariable and declares an inner function innerFunction.
innerFunction is a closure because it can access outerVariable, even though outerFunction has finished executing.
When outerFunction is called, it returns innerFunction.
We then call innerFunc, which still has access to outerVariable, even though outerFunction has already finished executing.
*/