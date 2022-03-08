let number = '';
let Firstnumber = '';
let result = '';
let history = '';

function calcule(index){ 
    if(index =='.'){
        if(number!= '' && !number.includes('.')){
            number =  number + index ;
        document.getElementById("display").innerHTML = number; 
        }
    
    }else{
        number =  number + index ;
        document.getElementById("display").innerHTML = number; 
    }   
}

function operation(operate){
    Firstnumber = number;
    number = '';
    if(operate == '+'){
        history = Firstnumber + operate;
        document.getElementById("operation").innerHTML = history;
    }
    if(operate == '-'){
        history = Firstnumber + operate;
        document.getElementById("operation").innerHTML = history;
    }
    if(operate == 'x'){
        history = Firstnumber + operate;
        document.getElementById("operation").innerHTML = history;
    }
    
}

function equals(){

    if(history.includes('+')){
        result = parseInt(Firstnumber) + parseInt(number);
        document.getElementById("display").innerHTML = result;
        document.getElementById("operation").innerHTML = (`${Firstnumber} + ${number} =`);
    }
    if(history.includes('-')){
        result = parseInt(Firstnumber) - parseInt(number);
        document.getElementById("display").innerHTML = result;
        document.getElementById("operation").innerHTML = (`${Firstnumber} - ${number} =`);
    }
    if(history.includes('x')){
        result = parseInt(Firstnumber) * parseInt(number);
        document.getElementById("display").innerHTML = result;
        document.getElementById("operation").innerHTML = (`${Firstnumber} x ${number} =`);
    }
}
    

