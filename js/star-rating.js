String.prototype.repeat = function(times) {
   return (new Array(times + 1)).join(this);
};

function star(n){
    var filledStar = '<span>★</span>';
    var emptyStar = '<span style="opacity:0.2">★</span>';
    return(filledStar.repeat(n)+emptyStar.repeat(5-n));
};
