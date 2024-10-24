// Como se inicializa un vector
let vector=[]; // Vacio

//Vector con informacion
let nombres = ["Carlos", "Juan", "Pepe", "Maria", "Luis", "Brayan", "Michael", "Cathe", "Andres"];

// Imprimir o escribir  todo el vector
console.log("vector: " + nombres);

// Escribir o imprimir un solo dato del vector
console.log("El nombre que esta en la posicion 5 es: " + nombres[5]);

// Recorrer un vector
for(let i = 0; i < nombres.length; i++) {
    console.log(nombres[i]);
}

//agregar informacion a un vector
nombres.push("Stiven");

console.log(nombres);

for(let i = 0; i < nombres.length; i++) {
    console.log(nombres[i]);
}

//Elimina informacion
nombres.splice(1, 2);

console.log(nombres);

for(let i = 0; i < nombres.length; i++) {
    console.log(nombres[i]);
}