 function display (val){
    document.getElementById('result').value += val  ;
}

function clearScreen () {
    document.getElementById('result').value="";
}

function solve (){
    let firstNumber = document.getElementById('result').value ;
    let secondNumber = eval (firstNumber);
    document.getElementById('result').value = secondNumber;
}
