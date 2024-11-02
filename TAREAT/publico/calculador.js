function agrePan(value){
    document.getElementById("pantalla").value+=value;
}
function LimPan(){
    document.getElementById("pantalla").value=" ";
}
function calcula(){
    try {
        let valor = eval(document.getElementById("pantalla").value);
        document.getElementById("pantalla").value=valor;
    } catch (error) {
        document.getElementById("pantalla").value="Error";
    }
}