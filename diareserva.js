// Accion toma datos de reserva. 
// Se llena formulario con datos que luego se guardaran en un array

class Clientes {
  constructor(cliente, nombre, cantidad, dia, hora, mail) {
    this.cliente = cliente
    this.nombre = nombre
    this.cantidad = cantidad
    this.dia = dia
    this.hora = hora
    this.mail = mail

  }
}

reservadelaCasa = []

const inputdatosNombre = document.getElementById('inputNombre').value;
const inputdatosCant = parseInt(document.getElementById('inputcantidad').value);
const inputdatosDia = document.getElementById('inputDia').value;
const inputdatosHora = parseInt(document.getElementById('inputHora').value);
const inputdatosmail = document.getElementById('inputMail').value;


botonEnviar.onclick = () => {

  console.log(inputNombre.value)
  console.log(inputcantidad.value)
  console.log(inputDia.value)
  console.log(inputHora.value)
  console.log(inputMail.value)


  reservadelaCasa.nombre = inputNombre.value
  reservadelaCasa.cantidad = inputcantidad.value
  reservadelaCasa.dia = inputDia.value
  reservadelaCasa.hora = inputHora.value
  reservadelaCasa.mail = inputMail.value

  console.log(reservadelaCasa)

  localStorage.setItem('cliente', inputNombre.value)
  localStorage.setItem('dia', inputDia.value)

  const infoClienteReserva = {
    usuario: inputNombre.value,
    dia: inputDia.value,
    cantidad: inputcantidad.value,
    hora: inputHora.value,
  }

  const infoclienteResJSON = JSON.stringify(infoClienteReserva)

  console.log(infoclienteResJSON)

  localStorage.setItem('infoclienteJson', infoclienteResJSON)


  reservadelaCasa.forEach((Clientes) => {
    const nuevareserva = document.createElement('cliente')
    nuevareserva.innerText = `${cliente}`
  })

  Swal.fire({
    tittle: `Bienvenido/a ${reservadelaCasa.nombre}`,
    text: `El día ${reservadelaCasa.dia} tienen una reserva a las ${reservadelaCasa.hora} para  ${reservadelaCasa.cantidad}`,
    footer: `<span> Recuerde cancelar 24 horas antes en caso de no poder concurrir</span>`,
    width: '50%',
    padding: '2rem',
color: 'black',
   background: '#77dd77',
   timer: 3000,

  })

  inputNombre.value = '';
  inputcantidad.value = '';
  inputDia.value = '';
  inputHora.value = '';


} // fin onclick

const botonAgenda = document.getElementById("buttonaccionAgenda")

botonAgenda.onclick = () => {
  const infoclienteResJSON = JSON.parse(localStorage.getItem('infoclienteResJSON'))
  console.log(infoclienteResJSON)
}
