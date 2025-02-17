
# Creación de una página/aplicación WEB

## UX/UI

UX = User eXperience.

El concepto de UX básicamente se refiere a la experiencia TOTALMENTE SUBJETIVA que tiene un usuario al interactuar con un producto o servicio.

El diagrama Honeycomb de Peter Morville es una representación visual de los aspectos que se deben tener en cuenta para mejorar la experiencia de usuario:
- Usable
- Useful
- Desirable
- Findable
- Accessible
- Credible
- Valuable

Un aspecto en el que siempre podemos influir: USEFUL: Usabilidad

La "usabilidad", el concepto, está definido por una norma ISO. La norma ISO 9241-11 define la usabilidad como "la eficacia, eficiencia y satisfacción con la que un producto permite alcanzar objetivos específicos a usuarios específicos en un contexto de uso específico".

## UI: User Interface

La interfaz es con lo que el usuario interactúa con el producto. La interfaz puede ser de muchos tipos: gráfica, de voz, táctil, etc.

AMAZON:
- Vendo productos
Todo lo que hace un usuario con respecto a Amazon, lo hace a través de una app web.

A nivel de UX/Usabilidad se habrán tomado decisiones. Y la UI debe potenciar esa UX.

Quiero una aplicación que permita encontrar personas por:
- Nombre, Apellidos, DNI, email, teléfono.
Tengo que hacer un formulario... Cómo lo diseño?

    +-------------------------------+
    |    BUSCAR CLIENTE:            |
    +-------------------------------+
    |    DNI:       [         ]     |
    |    Nombre:    [         ]     | Autocompletar
    |    Apellidos: [         ]     |
    |    Email:     [         ]     |
    |    Teléfono:  [         ]     |
    +-------------------------------+
    |                   [Buscar]    |
    +-------------------------------+
    

- eficacia:         Si al final el usuario consigue hacer lo que quería hacer
- eficiencia:       Cuánto le cuesta al usuario llegar al objetivo? TIEMPO / ERRORES
- satisfacción      Es Subjetivo. Cómo de feliz se siente mi usuario al usar mi sistema.


Qué tal va a ir el autompletar con: Mayúsculas, acentos, prefijos

María de los Ángeles de las Heras García-Ruiz

María angeles heras



----


BUSCAR CLIENTE:  [ _                         | BUSCAR ]                   Google


La UI debe potenciar esa experiencia de usuario / usabilidad.

Uno de los mejores estudios acerca de usabilidad lo hizo Jacob Nielsen: Los 10 principios de usabilidad.
1. Visibilidad del estado del sistema

Animación, Efectos CSS, hacemos que una palabra comience a escribir POCO A POCO. El objetivo siempre es informar al usuario del estado de la aplicación... y en su caso, de dónde poner la atención.


---

Queremos montar en nuestro sistema una FUNCIÓN que nos permita sacar un OVERLAY.

OVERLAY: Es una capa que se pone por encima de la página web con información relevante para el usuario... por ejemplo...
    "Espera mientras hacemos tu búsqueda"

    - Primero INFORMAR AL USUARIO DEL ESTADO DE LA APLICACIÓN: Estoy ocupado...
      Tú no tienes nada que hacer, más que esperar. 
    - Segundo EVITAR QUE EL USUARIO HAGA NINGUNA OTRA OPERACIÓN MIENTRAS ACABA LA PRIMERA

+------------------------------------------------------------+
|                                                            |
|                                                            |
|                                                            |
|    Mensaje principal                                       |
|                                                            |
|    Submensaje                                              |
|                                                            |
+------------------------------------------------------------+

    Mensaje principal: Espera mientras hacemos tu búsqueda
    Mensajes Secundarios: No deberíamos tardar más de 5 segundos
                          -> Parece que estamos tardando más de lo esperado. Agradecemos tu paciencia.
                          -> Pues esto no está yendo bien... tal vez debería ir pensando en coger unas palomitas :X

Cuando mostraremos este overlay? Cuando me llamen a una función.

    mostrarOverlay(
        Titulo, (Animar-Typewriter)
        Mensaje (Animar-Typewriter)
        Fondo (Imagen / Color / Transparencias)
    ) ---> Devuelva un IDENTIFICADOR del overlay...

    Cuando lo quito?... cómo lo quito?

Habrá un motivo para haber sacado este overlay... un proceso que estamos ejecutando... y que en un momento dado, acabará...
Será cuando acabe ese proceso, cuando querremos quitar el overlay.
    ocultarOverlay(identificador)

        Si mi app tiene que hacer una petición a un servidor:
            const overlayId = mostrarOverlay("Espera mientras hacemos tu búsqueda", "No deberíamos tardar más de 5 segundos", "Imagen")
            HAGO PETICION (ASINCRONO)-> Promesa .then( () => ocultarOverlay(overlayId) )
    
    Otra opción es que mi función mostrarOverlay, directamente ella, dentro, cree esa función.. y la devuelva.

            const funcionOcultarEseOverlay = mostrarOverlay("Espera mientras hacemos tu búsqueda", "No deberíamos tardar más de 5 segundos", "Imagen")
            HAGO PETICION (ASINCRONO)-> Promesa .then( funcionOcultarEseOverlay )

    Una última opción sería:

            const promesa = HAGO PETICION (ASINCRONO)
            mostrarOverlay("Espera mientras hacemos tu búsqueda", "No deberíamos tardar más de 5 segundos", "Imagen", promesa?)

Closure: Una función que devuelve otra función que ha sido creada dentro de ella.

    HTML
        Plantilla base de lo que es un OVERLAY
            <template id="overlay-template">
                <div class="overlay" style="background-color: #FF000055">             <<<<< COLOR
                    <img class="overlay-image" src="imagen.jpg" style="opacity:0.1"/>   <<<<< IMAGEN
                    <h2 class="overlay-title">TITULO</h2>
                    <p class="overlay-message">MENSAJE</p>
                </div>
            </template>

        Fondo: Imagen | Color, transparencia
        Me puede interesar poner como fondo: Una imagen y un color a la vez? SI

        El problema es que en CSS tenemos las propiedades:
        - background-color: rgb(255,0,0);
        - background-image: url("imagen.jpg");
        - background-size: contain;
        - Transparencia: background-color: rgba(255,0,0,0.5);
        - Pero si es de la imagen, en css al background-image no puedo ponerle transparencia.
          - Lo vamos a poder hacer con "opacity"

    CSS
        Aplicarle estilos.
            Mi función quizás aplique unos estilos por defecto
            Pero el usuario debería poder sobreescribir esos estilos.
    JS
        mostrarOverlay

Requisito funcional:
- Vamos a permitir que se muestren varios overlays simultaneamente?

Imaginaros esta situación:

-> El usuario hace una búsqueda:
    Le saca un overlay... Estamos trabajando en ello.
Pero resulta que la app no es capaz de conectar con el servidor. (quizás la estoy ejecutando en un teléfono móvil... y al ir caminando/en coche) en un momento dado mi teléfono pierde cobertura.
Le cancelo al usuario su búsqueda? .. o espero unos segundos mientras tratamos de recuperar la conexión? ->> SACA OTRO OVERLAY de mayor importancia (PRIORIDAD)

Una vez que tenga cobertura, quito ese overlay... y sigo con la búsqueda... que tenía su propio overlay.


---

css position:
- static (por defecto)... en flujo con el documento html: DONDE LE TOQUE, ocupando el espacio que sea necesario.
- absolute: Asignamos un top/left/right/bottom... pero esas posiciones son relativas al primer ancestro de abajo a arriba cuya position no sea static (relative, fixed o absolute). Adicionalmente, el elemento deja de ocupar espacio en el flujo normal. (eso ¡está pensado para poner elementos en varias capas superpuestas: z-index)
- relative: Asignamos un top/left/right/bottom... esas posiciones son relativas a donde sea que debiera ir ubicado el elemento. El elemento sigue ocupando su espacio natural
- fixed: relativo a la pantalla... y no ocupa espacio: El elemento se arranca de donde está y se pega a la pantalla, como si lo hubiera definido al nivel del body!



---

Operadores boleanos en JS;

- && Es el operador AND en cortocircuito.
     Es decir, si el primer operando es falso, no se evalúa el segundo.