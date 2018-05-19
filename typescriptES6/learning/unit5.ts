function buildName(firstName: string, ...restOfName: string[]) {
    let t = firstName + " " + restOfName.join(" ");
    console.log(t);
}
let a = ["duong", "long", "hanh"];
buildName("hadac", ...a);