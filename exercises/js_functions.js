function identity(param){

    return param;
}

function identity_function(param){

    return function(){return param};
}

function add(zahl1, zahl2){

    return zahl1 + zahl2;
}

function mul(zahl1, zahl2){

    return zahl1 * zahl2;
}

function addf(x){

    return function add(y){return x+y;}
}

function applyf(func){
    return function(x) {
        return function(y) {
            return func(x, y);
        };
    };
}
