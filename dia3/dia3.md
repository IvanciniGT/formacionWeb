
# Estamos creando software

El software es un producto por DEFINICION MANTENIBLE Y EVOLUCIONABLE.

    DESARROLLO <-> PRUEBAS -> OK -> REFACTORIZACION <-> PRUEBAS -> OK
    <-------------------------->    <------------------------------->
         50% del trabajo                     50% del trabajo
            8 horas                             8 horas

SOLID

SoC: Separation of Concerns

---

Queremos una función JS que nos permita mostrar toast.

```javascript

    mostrarToast(
        "id",
        "titulo",
        "mensaje",
        "duracion",
        "estilo css",
        funcionQueInvocarAlHacerClick
    )

```

+--------------------------+
|PROGRESO                  |
+--------------------------+
|                          |
| ICONO     TITULO         |
| ICONO                    |
| ICONO                    |
|           Mensaje        |
+--------------------------+

Si ponen el ratón encima, que se pare el tiempo.
Si hacen click en el, que se oculte.
Cuando acabe el tiempo, que se oculte.

    Ha fallado algo (ERROR).
    Logeado con éxito (INFO).
    Tienes una notificación nueva.

Estamos montando una app de gestión de expedientes de ??????.
Y nosotros somos un usuario que debe gestionar expedientes.
Me llega un mensaje: HAY UN NUEVO EXPEDIENTE QUE GESTIONAR.

Lo que pasa... es que entonces ... si hago click en la notificación... que me gustaría?
- Que me lleve al expediente.

Ahora nos cambiamos la gorra.. Nos volvemos los desarrolladores de esta función. 
Ésta función, cuando la creemos ahora, sabemos a priori el uso que le daremos?
Dicho de otra forma... qué quiero que ocurra cuando alguien haga clic en el toast?