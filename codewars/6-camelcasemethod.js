// String.prototype.camelCase=function(){
//   return Object.values(this).join("").split(" ").map(elem => elem.charAt(0).toUpperCase() + elem.slice(1)).join("")
// }

String.prototype.camelCase=function(){
	return this.split("").join("").split(" ").map(elem => elem.charAt(0).toUpperCase() + elem.slice(1)).join("")
}
