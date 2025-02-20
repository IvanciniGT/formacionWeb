Todo navegador nos permite almacenar cosas (datos) de forma persistente:
    
    localStorage.setItem('nombre', 'valor');

El localStorage va asociado a la URL del sitio, es decir, si guardamos algo en el localStorage de un sitio, solo podremos acceder a ello desde ese mismo sitio.

Características:
- Va asociada a la dominio del sitio.
- No expira / El usuario puede forzar el borrado del almacenamiento local del navegador
- Guarda clave/valor (Es como un Map)
- Lo único que me permite guardar son TEXTOS... lo cual no es un problema gracias a JSON.stringify() y JSON.parse()
- El almacenamiento está limitado a 5MB por dominio

```js

const persona = {
    nombre: 'Juan',
    edad: 30
};

localStorage.setItem('persona', JSON.stringify(persona));

const personaLeida = JSON.parse(localStorage.getItem('persona'));

if (personaLeida === persona) {
    // Esto devolvería true;
}

localStorage.removeItem('persona');

localStorage.clear();
```

## Casos de uso:

- Guardar el nombre del usuario que se está conectando a una app
- Guardar configuraciones de ese usuario para la app: Idioma, tema, etc.
- Ir guardando los valores con los que se ha rellenado un formulario

OJO: No está considerado un almacenamiento seguro.