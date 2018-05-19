"use strict";
function buildName(firstName) {
    var restOfName = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        restOfName[_i - 1] = arguments[_i];
    }
    var t = firstName + " " + restOfName.join(" ");
    console.log(t);
}
var a = ["duong", "long", "hanh"];
buildName.apply(void 0, ["hadac"].concat(a));
