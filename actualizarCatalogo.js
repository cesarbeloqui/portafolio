import fs from 'fs';
import path from 'path';

// Ruta de la carpeta principal que quieres analizar
const carpetaPrincipal = '/ruta/a/tu/carpeta/principal';

// Función para recorrer las carpetas y generar el JSON
function generarJson(ruta) {
    const archivos = fs.readdirSync(ruta);

    const registro = {
        carpetas: [],
    };

    archivos.forEach((archivo) => {
        const rutaCompleta = path.join(ruta, archivo);
        const esDirectorio = fs.statSync(rutaCompleta).isDirectory();

        if (esDirectorio) {
            const imagenes = obtenerImagenes(rutaCompleta);
            registro.carpetas.push({
                nombre: archivo,
                imagenes: imagenes,
            });
        }
    });

    // Guardar el registro como JSON
    const jsonRegistro = JSON.stringify(registro, null, 2);
    fs.writeFileSync('registro.json', jsonRegistro);

    console.log('Registro generado correctamente.');
}

// Función para obtener las imágenes de una carpeta
function obtenerImagenes(rutaCarpeta) {
    const archivos = fs.readdirSync(rutaCarpeta);
    const imagenes = archivos.filter((archivo) => /\.(jpg|jpeg|png|gif)$/i.test(archivo));
    return imagenes;
}

// Llamada a la función principal
generarJson(carpetaPrincipal);