function generatePassword() {
    var length = 10; // 10文字を出力
    var pw = "";

    for (var i=0; i < length; i++) {
        pw += randomChar();
    }
    alert(pw);
    return pw;
}

function randomChar() {

    var randChar = "";
    var randNum;

    randNum = Math.round( Math.random() * 93 ) + 33; // 33 ~ 126
    randChar = String.fromCharCode(randNum);
    return randChar;
}