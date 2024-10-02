let carrito=[];

let fruta = prompt("Ingresa una fruta");

carrito.push(fruta);
while(confirm("Desea agregar otra fruta?")){
    let fruta = prompt("Ingresa una fruta");
    carrito.push(fruta);
};
alert("Ustede compro: ");

carrito.forEach((frutas,index,array)=>{
    alert(array);
    //alert(`Fruta (${index+1}).-${frutas}`)
});