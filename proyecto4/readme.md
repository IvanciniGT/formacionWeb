Vamos a montar una librería de gestión de notas.

Un listado de notas, con un texto en cada nota.
Las notas pueden ser de diferentes colores.
Quiero poder pegar notas en cualquier sitio de la pantalla... poderlas ubicar a mano.

Debemos poder:
- crear notas
- eliminar notas
- reubicar notas
- editar el contenido de las notas
- cambiar el color de las notas
- tener una papelera de reciclaje de las notas que hayamos borrado.
- Nuestra app...

Lo que queremos es poder en cualquier app que creásemos en el futuro, poder poner notas.

Las notas deben poder ser persistibles. Es decir, si cierro la app y la vuelvo a abrir, las notas deben seguir estando ahí.
Como el objetivo de la app no será la gestión de notas... en si misma... MONTARE UNA APP para otras cosa... las notas deben poder ser ocultables.

Queremos un iconito flotante en la pantalla... en algún sitio... incluso que podamos moverlo... que al pulsarlo se muestren las notas que tenemos guardadas.
Al hacerle doble click, debe crear una nota nueva.

Esta app tendrá 2 versiones (en cuanto a la persistencia de las notas):
- Guardarlas a nivel del navegador (en el almacenamiento que todo navegador tiene hoy en día)
- Guardarlas en un servidor de backend REST (CRUD notas)

---

HTML
    CSS
JS

---

¿Qué cosas necesito representar en HTML?

NOTA (template)
    Editable (doble click sea editable)
     Representación editable
     Representación no editable
ICONO interacuable -> CAMBIA de B/N a color + Le sale el icono de la papelera de reciclaje

---> PALETA DE COLORES

---

En CSS siempre empiezo pensando de cada elemento:
- Display:
  - block
    - block simple
    - grid
    - flex
  - inline
    - inline-block
    - inline-flex
    - inline-grid
    - inline
  - none
  - contents: Que ese elemento no se muestre en la pantalla.. Solo su contenido
- Position
  - static
  - relative
  - absolute
  - fixed

Funcion de poner listeners en un elemento (elemento)
- mouseup       elemento
- mousedown     elemento



Función de poner listeners:
- mouseover     document
- llamar a la función de poner listeners en un elemento:
  - nav(botones)
  - todas las notas


TIRAR NOTAS A LA BASURA.



BOTON nuevaNota {
    llamo al servicio para pedirle la nueva nota: TEXTO: Escriba aquí su nota | amarilla
}

Que pasa ahora si: añado un boton de NUEVA NOTA DE RECORDATORIO
BOTON {
    llamar al servicio para pedirle la nueva nota: TEXTO: Recuerde ... | roja
}

Y en paralelo, me he subscrito al servicio:
- Cuando haya una nueva nota:
     generar el HTML de esa nota 


Que pasa ahora si: añado un boton de NUEVA NOTA DE TArea pendiente
BOTON {
    llamar al servicio para pedirle la nueva nota: TEXTO: Tarea pendiente | verde
}



Que pasa ahora si: añado un boton de NUEVA NOTA DE RECORDATORIO
BOTON {
    llamar al servicio para pedirle la nueva nota
}



Que pasa ahora si: añado un boton de NUEVA NOTA DE RECORDATORIO
BOTON {
    llamar al servicio para pedirle la nueva nota
}
