// THIS KEYWORD

/* 
- scope
- call-site of a function
* call > need to know how to use call

    STATE > everything (element) that changes on a website is a state, because 
    it is changeable contrary to those static elements.
    State can not be hard coded and for that reason we use this keyword.
*/

/* binding > only one action is taking place but in different ways.*/

    /* - "Strict mode" >  put it at the top of a file, default binding doesn't 
    work with strict mode. */

    //Rules of binding: Are applied from bottom to top

        /* 
        - default binding
        - implicit binding
        - explicit binding
        - new binding
        */

    /* - Default binding > when we are taking our variable from outside local */

    /* - implicit binding */

    function foo() {
        console.log(this.a);
        
    }
    let obj = {
        a:2,
    }
    let a = 24;

    foo.call(obj); // 2 > takes the a:2 from inside the object not the global a = 24

    //_____________
    
    function foo2() {
        console.log(this.b);
        
    }
    function doFoo() {
        foo2();
    }
    let obj2 = {
        b: 2,
        foo2: foo2,
    }
    b = "oops, global";
    doFoo(obj2.foo2);  // oops, global

    // _______________________

    function foo6() {
        console.log(this.f + this.g);
        
    }
    let obj6 = {
        f: 2,
        key: foo,
    }
    f = 30;
    g = 50;

    obj6.key(); // undefined

    //_______________________

    function foo7() {
        console.log(this.h);
        
    }
    let obj7 = {
        h: 100,
        foo7: foo7,
    }
    let obj8 = {
        h: 1,
        obj7: obj7,
    }

    obj8.obj7.foo7(); // 80

    /* Explicit binding */

    function foo3() {
        console.log(this.c);
        
    }
    let obj3 = {
        c: 20,
    }
    foo3.call(obj3) // 20

    //_______________

    function foo4() {
        console.log(this.d);
        
    }
    let obj4 = {
        d: 2,
    }
    d = 40; // ignores this one and takes the d inside the object
    let bar4 = function() {
        foo4.call(obj4); // 2
    }

    /* New binding 
    > provides a look a like, instance of an object */

    function foo5(e) {
        this.e = e;
    }
    let bar5 = new foo5(2);

    console.log(bar5); // foo5 {e:2}
    
    console.log(bar5.e); // 2
    
    //_________________

    function car(maxSpeed) {
        this.maxSpeed = maxSpeed;
    }

    let fastCar = new car(200);
    console.log(fastCar); // car { maxSpeed: 200 }

    let slowCar = new car(80);
    console.log(slowCar); // car { maxSpeed: 80 }

    console.log(fastCar.maxSpeed); // 200
    console.log(slowCar.maxSpeed); // 80