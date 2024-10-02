let frutas = ["manzanas", "sandia", "pera"];
//frutas.forEach(fruta => console.log(fruta));
/*
//fruta elementos que vas a ir pasando el indice array nos da el vector completo
frutas.forEach((fruta,index,array)=>{
    //console.log(index+1);
    console.log(array);
    console.log(fruta);
});
*/

frutas.forEach((fruta,index,array)=>{
    console.log(`Fruta (${index+1}).-${fruta}`)
});