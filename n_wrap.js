//multiline to singleline
const multiline = 
`
`
;

console.log(JSON.stringify(multiline.split(/\n/g), 0, 4));