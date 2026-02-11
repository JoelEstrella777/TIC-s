document.write("una agenda");

let contacts = [];

let bool = true;

while (bool) {
  let opcion = parseInt(prompt("Escoge una opción \n 1:agregar \n 2:listar \n 3:salir"));
  switch (opcion) {
    case 1:
      alert("Escogiste la opción 1");
      let nombres = prompt("Ingresa tu nombre")
      contacts.push(nombres);
      console.table(contacts)
      break;
    case 2:
      alert("Escogiste la opción 2");
      break;
    case 3:
      alert("Escogiste salir");
      bool = false;
      break;
    default:
      alert("No recibí una opción válida");
      break;
  }
}
