/* this is assigned to that, check it out.
var obj = {
            counter : {item : 0 },
            count : function () {
                this.counter.item = 1;
                var that = this;
                var countMore = function () {
                    that.counter.item += 1;
                }
                countMore();
                return this.counter.item;
            }
        }
        alert (obj.count());*/

/* module example 
var obj = (function() {
    count = 0;
    return {
        increment: function () {
            count +=1;
            return count;
        },
        reset: function () {
            count = 0;
            return count;
        }
    }
}
          )();

console.log (obj.increment());
console.log (obj.increment());
console.log (obj.increment());

console.log (obj.reset());
console.log (obj.increment());
*/
/* function currying, if we call summ(1,2,3)(5,6)(7,8)() all the arguments will be added/.;
function summ () {
    var number = summArgs (arguments);
    function summArgs(args) {
        var arr = Array.prototype.slice.call(args);
        var temp = 0;
        for (var i = 0; i<arr.length; i++){
            temp += arr[i];
        }
        return temp;
    }
    return function a () {
        if(arguments.length>0){
            number += summArgs(arguments);
            return a;
        }else {
            return number;
        }
    }
}*/
//TODO add add, det, result methods that are public and can be called with summ.add(1,2,3).det(2).add(5,6,9).result()
/*function summ () {
    var number = 0;
    function summArgs(args) {
        var arr = Array.prototype.slice.call(args);
        var temp = 0;
        for (var i = 0; i<arr.length; i++){
            temp += arr[i];
        }
        return temp;
    }
    return {
        add: function () {
            //TODO
        },
        det: function () {
            //TODO
    },
        result: function () {
            //TODO
        };
    }
}
*/
String.prototype.sayHello = function () {
    return 'Hello ' + this;
}
//in console type "Me".sayHello();