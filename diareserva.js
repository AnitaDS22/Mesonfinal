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

    Swal.fire ({
      tittle: `bienvenido/a ${reservadelaCasa.nombre}`,
      text:  `el dia ${reservadelaCasa.dia} tienen una reserva a las ${reservadelaCasa.hora} para  ${reservadelaCasa.cantidad}`,
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
  