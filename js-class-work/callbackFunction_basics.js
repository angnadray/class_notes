// CALLBACK FUNCTION

function firstFunc() {
    console.log(1);
}

function SecondFunc() {
    console.log(2);
}
firstFunc(); // 1
SecondFunc(); // 2

function rdFunc() {
    setTimeout(function() {
        console.log("rdFunc:", 1);
    },1000)
}
rdFunc();

function thFunc() {
    console.log("thFunc:", 2);
}
thFunc();

/*
thFunc: 2
rdFunc: 1 
 */

/* the second function is being executed first and then the first doe to the timing given */

//___________________________________________

function callback() {
    console.log("I am a callback function");
}

function caller(func) {
    console.log("I accept a function and then call it");
    func();
}
caller(callback); /* has to be called back as a parameter not as a function, so the following 
would be wrong > caller (callback()); */

/* the caller function executes first and then calls the callback function and executes it */

// __________________________________________

function FuncToCall(callName) {
    console.log("I was called by", callName);
}
thFunc();

function CallBFunc(callBackF) {
    console.log("Come back");
    callBackF("CallBFunc");
    /* this callBack (which can have any name) will only work with a parameter which is a 
    string or a number, it is the parameter that will pass for the first function replacing 
    the parameter callName */
}

// 1.
CallBFunc(FuncToCall); // I was called by CallBFunc

/* 
Come back >>> CallBFunc is executed first
I was called by CallBFunc >>> callbackF is called and executed after CallBFunc is done
*/

// 2. 
setTimeout(FuncToCall, 1000); // I was called by undefined

/* prints after 1 second, is undefined because it treats FuncToCall as a separate 
function from CallBFunc, so the argument is undefined */

// 3.

setTimeout(function(){
    console.log("I am set the time out");
    FuncToCall("Set time out")
}, 1000); 
/*
I am set the time out 
I was called by Set time out
*/

/*  this is to pass an entire function's body inside the setTimeout. This function without 
name is called anonymous function */

// 4.

function wrapSetTimeOut(callback) {
    console.log("I am a wrapSetTimeOut");
    setTimeout(() => {
        console.log("I am also set time out");
        callback("wrapSetTimeOut");
    }, 1000)
}
wrapSetTimeOut(FuncToCall);

/* 
I am also set time out
I was called by wrapSetTimeOut
*/