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
    let numStr = expr.toString();
    let numArr = [];
    
    for (let i = 0; i < numStr.length; ) {
        numArr.push(numStr.substr(i, (10)));
        i += 10;
    }

    let morseArr = numArr.map((el, i, arr) => arr[i] = el.replace(/10/g, '.').replace(/11/g, '-').replace(/0/g, ''))

    let strArr = [];

    morseArr.forEach( function(el, i, arr) {
        if (morseArr[i] === '**********') {
            strArr.push(' ');
        }

        else {
            for (let x in MORSE_TABLE) {
                if (x === morseArr[i]) {
                    strArr.push(MORSE_TABLE[x])
                }
            }
        }
    })

    return strArr.join('');
}

module.exports = {
    decode
}