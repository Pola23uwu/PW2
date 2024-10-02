let equiss = ["x","x","x","x"];
let equis;

equiss.forEach((equis,index)=>{
    console.log(` (${index+1})${equis}`);
});
console.log(equiss.join(""));


let vertical = parseInt(prompt("Cuantas x vertical quieres agregar?"));
let horizontal = parseInt(prompt("Cuantas x horizontales quieres agregar?"));
equiss.forEach((equis,index)=>{
    console.log(` (${index+1})${equis}`);
});
for (let i = 0; i < vertical; i++) {
    console.log(i+1 +"x");
}

let equishorizontal = "";
for (let i = 0; i < horizontal; i++) {
    equishorizontal += "x";
}
console.log(equishorizontal);



for (let i = 0; i < 4; i++) {
    let fila = i +"";
    for (let j = 0; j <4; j++) {
        fila += "x "; 
    }
    console.log(fila); 
}


for (let i = 1; i <= 10; i++) {
    let fila = "";
    for (let j = 1; j <= 10; j++) {
        fila += i + "x" + j + "=" + (i * j) + " ";
    }
    console.log(fila);
}

