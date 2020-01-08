function trimAndLower(text) {
    if (typeof text === "string") {
        return text.toLowerCase().trim();
    }
}
console.log(trimAndLower(null));
console.log(trimAndLower("xxxx"));
console.log(trimAndLower(null));
let text;
