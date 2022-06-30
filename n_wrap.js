//multiline to array
const multiline = 
``
;

console.log(JSON.stringify(multiline.split(/\n/g), 0, 4));