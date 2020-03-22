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
    let decExpr = '';
    let lenExpr = expr.length;

    for (let i = 0; i < lenExpr; i += 10) {
      if (expr[i] !== '*') {
        let letter = expr.substring(i, i + 10);
            letter = letter.replace(/00/g, '');
            letter = letter.replace(/10/g, '.');
            letter = letter.replace(/11/g, '-');
        decExpr += MORSE_TABLE[letter];
      }
      else {decExpr +=  ' ';}
    }
    console.log(decExpr);
    return decExpr;
}

module.exports = {
    decode
}
