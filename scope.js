//2017.09.19
var globalVariable = 'This is  global variable';

function globalfunc() {
    var localVariable = 'This is  local variable';
    console.log('Visit global/local variable');
    console.log(globalVariable);
    console.log(localVariable);
}

globalfunc();