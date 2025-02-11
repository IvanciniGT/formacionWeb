
# DOM

Document Object Model

Mi página web (el fichero HTML) tiene su código fuente... lo que hay en el fichero.

Otra cosa es lo que el navegador carga y representa por pantalla... eso es el DOM.

El DOM puede ser (y habitualmente será) distinto del código fuente... sobre todo en cuanto empecemos a crear elementos DINAMICAMENTE

---

# Renderización de elementos HTML en el navegador.

Da igual el elemento HTML que rendericemos,
le podemos dar el estilo que nos dé la gana.

Puedo hacer que un <button> se vea igualito a un <a> o una <table> o a un <main> o a un <b> o a un <li>

Algunas marcas llevan algunas propiedades preconfiguradas a nivel de mi navegador... por ejemplo:
Los navegadores por defecto muestran la etiqueta <b> con la propiedad font-weight: 700;
Pero nada me impide cambiarlo.

TODO ELEMENTO HTML se puede representar:
- Como un bloque
    display: block
- Dentro de un bloque, como un elemento en línea
    display: inline

Eso se define mediante la propiedad display.

Un <p>, un <div>, un <ol> por defecto se representan con display: block

Mientras que <b>, <i>, <a>, <span> se representan con display: inline

Pero eso Por supuesto, lo puedo cambiar.

Además de esos 2.. luego hay otros 10.... pero esos 10 no son sino variantes de esos 2.

Entre esos otros 10, tenemos: grid, flex, inline-block, table, table-cell, table-row, none..

## Display block

Todo elemento con display block... o una variante de display block siguen el box model de css.

### Box model

El elemento se representará como una CAJA, que tendrá unos:
- Márgenes alrededor (por fuera)... y que se configuran con las propiedades:
    margin-top: 10px;
    margin-right: 20px;
    margin-bottom: 30px;
    margin-left: 40px;
    margin: 10px 20px 30px 40px;
                ^^^^
            top right bottom left

    Como unidad en estas cantidades... y en muchas otras que veremos podemos usar:
    - px
    - pt
    - em
    - rem
    - %
    - vw
    - vh
- Relleno interior que se respeta sin contenido: padding:
    padding-top: 10px;
    padding-right: 20px;
    padding-bottom: 30px;
    padding-left: 40px;
    padding: 10px 20px 30px 40px;
                ^^^^
            top right bottom left
- Entre medias de esos esos espacios está el borde:
    border-top: 1px solid black;
    border-right: 2px solid black;
    border-bottom: 3px solid black;
    border-left: 4px solid black;
    border: 4px solid black;
                ^^^^
            top right bottom left
    border-width: 2px;
    border-color: black;
    border-style: dashed;
    border-radius: 10px; (redondea las esquinas)

Además, tiene un contenido que se representa en el interior de la caja, sin llegar a tocar el relleno (padding)

Cada elemento puede tener un tamaño fijo o variable... y se puede configurar con las propiedades:
- width: 100px;
- min-width: 50px;
- max-width: 200px;
- height: 100px;
- min-height: 50px;
- max-height: 200px;
- width: -webkit-fill-available; (toma el ancho disponible).

Ahora bien... una cosa es el tamaño de la caja y otra el tamaño del contenido (lo que hay dentro de la caja).

Y a veces esos tamaños no son iguales.

Y en ese caso, podemos explciarle al navegador cómo queremos que se comporte el contenido respecto al tamaño de la caja.
Por ejemplo:
- Quiero que lo que no sea visible se oculte:
    overflow: hidden;
- Quiero que lo que si no entra el contenido, se muestre con scroll:
    overflow: scroll;
    Aunque quizás solo quiero scroll vertical:
    overflow-y: scroll;
    overflow-x: hidden;

Eso nos dará barras de scroll allá donde queramos... y que muevan justo lo que necesitamos.


Cada elemento tiene una ubicación dentro de la página... por defecto esa ubicación es secuencial.
Pongo una caja... que ocupará un espacio
Y la caja siguiente irá detrás de esas caja. Sin pisarla.

La propiedad css position me permite alterar este comportamiento:
- position: static; (por defecto, donde te toque según el flujo natural de contenidos)
- position: relative; (te muevo respecto a tu posición natural)
- position: absolute; (te muevo respecto a tu contenedor más cercano con position: relative)
- position: fixed; (te muevo respecto a la ventana del navegador)

Un problema de jugar con los position... es que hay veces que las cajas se pueden solapar... en esos casos quiero controlar que caja queda encima de cuál.
Eso lo controlo con la propiedad 
- z-index: 10; (10 es más que 5)
 Cuanto más alto el valor... más arriba se representa


Cualquier elemento admite la propiedad transition.
Eso me permite indicar que PARA UNA PROPIEDAD CONCRETA el paso del valorA al valorB se haga de forma progresiva en el tiempo.

Además podemos cambiar la forma en la que se hace la progresión:
- linear: Lineal en el tiempo. Si tardo 1 segundo en pasar de 0 a 100, tardo 0.5 segundos en pasar de 0 a 50
- ease: Empieza lento y acelera
- ease-in: Empieza lento
- ease-out: Acaba lento
- ease-in-out: Empieza lento, acelera y acaba lento



DIV (flex)

    A
    B
    C
    D

    si verlos en filas o columnas

    A B C D

    Si los quiero en orden directo o reverso

    D C B A

    D
    C
    B
    A



---

MENU/HEADER -> TABLA

 +-----------------+-------------------------+
 | Nombre App      |        Usuario  [SALIR] | 
 +-----------------+-------------------------+
 | Opción Menu 1   |   Avisos                |
 | Opción Menu 2   |     Aviso 1             |
 | Opción Menu 3   |     Aviso 2             |
 | Opción Menu 4   |   Novedades             |
 |                 |     Novedad 1           |
 |                 |     Novedad 2           |
 |                 |     Novedad 3           |
 |                 |   Videos tutoriales     |
 |                 |     Video 1             |
 |                 |     Video 2             |
 +-----------------+-------------------------+

Maravilloso 

header:
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-template-rows: 1fr *;

h1:
    grid-column: 1 / 3;
    grid-row: 1 ;

user-info:
    grid-column: 2;
    grid-row: 1;

nav:
    grid-column: 1;
    grid-row: 2;

aside:
    grid-column: 2;
    grid-row: 2;