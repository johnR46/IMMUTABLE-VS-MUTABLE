function trimAndLower(text: string | null | undefined) {
  if (typeof text === 'string') {
    return text.toLowerCase().trim();
  }
}

console.log(trimAndLower(null));
console.log(trimAndLower('xxxx'));
console.log(trimAndLower(null));

let text: string | null | undefined;
