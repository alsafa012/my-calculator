const addDisplay = document.getElementById("display");
//  const addDisplay = document.calculator.display;

function addToDisplay(char) {
     addDisplay.value += char;
}
function clearDisplay(){
     document.getElementById("display").value = "";
}
function del(){
     addDisplay.value = addDisplay.value.slice(0,-1);
}
function calculate(){
     try{
          addDisplay.value = eval(addDisplay.value)
     }catch(error){
          addDisplay.value = 'ERROR'
     }
}
function parentageCalculate(){
     try{
          addDisplay.value = eval(addDisplay.value / 100) ;
     }catch{
          addDisplay.value = 'Error';
     }
}