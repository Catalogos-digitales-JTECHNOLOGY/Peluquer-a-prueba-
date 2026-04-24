// Función para mandar los datos al Excel
async function guardarReserva(datosReserva) {
    const API_URL = "Thttps://sheetdb.io/api/v1/km43dvj534708"; // <--- PEGA AQUÍ TU LINK

    try {
        const response = await fetch(API_URL, {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                data: [
                    {
                        'nombre': datosReserva.nombre,
                        'telefono': datosReserva.telefono,
                        'fecha': datosReserva.fecha,
                        'hora': datosReserva.hora,
                        'servicio': datosReserva.servicio
                    }
                ]
            })
        });

        const contenido = await response.json();
        
        if(contenido.created === 1) {
            console.log("¡Registro exitoso en el Excel!");
            return true;
        }
    } catch (error) {
        console.error("Error al conectar con el Excel:", error);
        return false;
    }
}