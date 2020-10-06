const MORSE_TABLE = {
    '.-':     'a',
    '-...':   'b',
    '-.-.':   'c',
    '-..':    'd',
    '.':      'e',
    '..-.':   'f',
    '--.':    'g',
    '....':   'h',
    '..':     'i',
    '.---':   'j',
    '-.-':    'k',
    '.-..':   'l',
    '--':     'm',
    '-.':     'n',
    '---':    'o',
    '.--.':   'p',
    '--.-':   'q',
    '.-.':    'r',
    '...':    's',
    '-':      't',
    '..-':    'u',
    '...-':   'v',
    '.--':    'w',
    '-..-':   'x',
    '-.--':   'y',
    '--..':   'z',
    '.----':  '1',
    '..---':  '2',
    '...--':  '3',
    '....-':  '4',
    '.....':  '5',
    '-....':  '6',
    '--...':  '7',
    '---..':  '8',
    '----.':  '9',
    '-----':  '0',
};

function decode(expr) {
  var replaced = '';
var answer ='';
var exprNew = expr.match(/.{10}|.{1,2}/g);
for (let j = 0; j < exprNew.length; j++) {
replaced = replaced + exprNew[j].replace (/11{1,1}/g, '-').replace (/10{1,1}/g, '.').replace (/00{1,8}/g, '').replace (/\*{10,10}/g, ' ') + ",";
}
var arr = replaced.split(',');


for (let k = 0; k < arr.length; k++) {
if(arr[k] === ' '){
answer += ' ';
}
else if (MORSE_TABLE[arr[k]]){
answer += MORSE_TABLE[arr[k]];
}} return answer;

}


module.exports = {
    decode
}
