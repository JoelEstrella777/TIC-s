document.write("una agenda");

let bool = true;
let contacts = [];

while (bool) {
  let opcion = parseInt(
    prompt(
      "Escoge una opción \n 1:agregar \n 2:listar \n 3:salir \n 4:eliminar \n 5:actualizar",
    ),
  );

  switch (opcion) {
    case 1:
      alert("Escogiste la opción 1");
      let nombres = prompt("Ingresa tu nombre");
      let apellidos = prompt("Ingresa tus apellidos");
      let facultad = prompt("Ingresa tu facultad proveniente");
      let telefono = parseInt(prompt("Ingresa tu numero celular"));
      let edad = parseInt(prompt("Ingresa tu edad"));
      let newContact = {
        id: contacts.length +1,
        nombres: nombres,
        apellidos: apellidos,
        facultad: facultad,
        telefono: telefono,
        edad: edad,
      };
      contacts.push(newContact);
      console.table(contacts);
      break;
    case 2:
      alert("Escogiste la opción 2");
      for (let i = 0; contacts.length > i; i++) {
        alert(`Nombre: ${contacts[i].nombres} Apellidos: ${contacts[i].apellidos} Facultad: ${contacts[i].facultad} Telefono:${contacts[i].telefono} Edad: ${contacts[i].edad}`)
      }
      break;
    case 3:
      alert("Escogiste actualizar");
      bool = false;
      break;
    case 4:
      alert("Escogiste eleminar");
/*       let contactoEleminar = parseInt(prompt())
      for(let contact of contacts) {
        if(contact.id === )
      } */
      break;
    case 5:
      alert("Escogiste salir");
      bool = false;
      break;
    default:
      alert("No recibí una opción válida");
      break;
  }
}
