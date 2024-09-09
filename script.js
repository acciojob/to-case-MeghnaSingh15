function toCase(text) {
  // write your code here
	let str = text.toLowerCase();
	let str3 = "-";
	let str2 = text.toUpperCase();
	let a = str.concat(str3);
	return a.concat(str2);
}
// DO not change the code below
const text = prompt("Enter text:");
alert(toCase(text));
