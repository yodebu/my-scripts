    function randomNumbers(max) {
        function range(upTo) {
            var result = [];
            for(var i = 0; i < upTo; i++) result.push(i);
            return result;
        }
        function shuffle(o){ //v1.0
            for(var j, x, i = o.length; i; j = Math.floor(Math.random() * i), x = o[--i], o[i] = o[j], o[j] = x);
            return o;
        }
        var myArr = shuffle(range(max));
        return function() {
            return myArr.shift();
        };
    }


var randoms = randomNumbers(10),
    rand = randoms(),
    result = [];
while(rand != null) {
    result.push(rand);
    rand = randoms();
}


//console.log(result);
var stringresult = result.join();
stringresult = stringresult.replace (/,/g, "");
console.log(stringresult);
