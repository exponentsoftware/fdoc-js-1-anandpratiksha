
function number() {
    var arr = [];
    for (var i = 1; i <= 7; i++) {
        arr.push(Math.floor(Math.random() * 9))
    }
    console.log(arr);
};

number();