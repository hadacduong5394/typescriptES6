for(let i = 1; i <= 5; i++){
    setTimeout(() => {
        console.log(i);
    }, 1000);
}

for(var i = 1; i <= 5; i++){
    (function(x){
        setTimeout(() => {
            console.log(x);
        }, 1000);
    })(i)
}