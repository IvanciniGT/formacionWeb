# Qué es la Web?

La WEB NO ES INTERNET.
La WEB es un servicio que se ofrece usando INTERNET como medio de transporte.

INTERNET es un conjunto descentralizado de redes... conectadas entre si.
Gracias a internet puedo comunicar computadoras (y los programas que corren en ellas) entre si, incluso aunque estén en distintas partes del mundo.

Para qué uso INTERNET.. para muchas cosas:
Hay muchos servicios que corren (que se apoyan) sobre internet:
- email (smtp, pop3, imap)
- vozIP / tvIP
- Juegos online
- web

# HTML / CSS / JS

## HTML

Es un lenguaje de MARCADO de información (como XML, JSON, YAML, SGML, etc.).
OJO: NO ES UN LENGUAJE DE PROGRAMACIÓN

Usamos este tipo de lenguajes para ESTRUCTURAR INFORMACIÓN... DATOS
Lo más equivalente en lenguaje mundano sería decir que HTML es un formato para guardar TEXTOS /información.
Es decir.. algo así como el formato .docx (el formato del word).

Los navegadores WEB (Edge, Chrome, Firefox) son programas similares al WORD.. más cutres!
El word me permite abrir ficheros DOCX, renderizalos bonitos por pantalla y EDITARLOS
El Chrome me permite abrir ficheros HTML, renderizarlos bonitos por pantalla y punto pelota.

HTML es creado en el 1991 por Tim Berners-Lee, el creador de la Web. Básicamente creo 2 cosas:
- Un formato para estructurar documentos / información                                              html
    html: hypertext markup language                                                                   +
- Un protocolo de comunicación para compartir estos documentos / información entre computadoras:    http
    http: hypertext transfer protocol

ht: hypertext = texto con enlaces que apuntan a otros textos

    EMISOR                                                                      RECEPTOR           

    Computadora 1                                                           Computadora 2 (Servidor)
        |-------------------------------Internet-----------------------------------| (Impulsos de luz   = CANAL
                                                                                      + ondas de radio)
            documento(Lenguaje de codificación: HTML)
            PROTOCOLO: HTTP

    Persona 1                                                                   Persona 2 (Walkie-talkie)
        |-------------------------------Aire---------------------------------------| (Ondas de radio)   = CANAL

            locución(Lenguaje de codificación: ESPAÑOL)
            PROTOCOLO: Aprieto botón para hablar... digo CAMBIO cuando ya no quiero hablar... y CORTE cuando ya no quiero escuchar

        Un mensaje (y ese mensaje lo codificaré en un lenguaje común a ambos)

El lenguaje HTML se basó en otro lenguaje que existía (por aquel entonces se usaba mucho): SGML (Standard Generalized Markup Language). Era un lenguaje de marcas DE PROPÓSITO GENERAL... me permitía estructurar cualquier tipo de información.

Era tan potente como complejo.. y más adelante salió una versión simplificada de SGML: XML (eXtensible Markup Language). XML es un lenguaje de marcas DE PROPÓSITO GENERAL... me permite estructurar información de cualquier tipo.

HTML es un lenguajes de marcas de propósito específico... me permite estructurar información de un tipo muy concreto: Documentos con hipertextos.

Una cosa adicional que crea Tim Berners Lee fue el W3C (World Wide Web Consortium). Es un consorcio que se encarga de estandarizar la web. Es decir, de definir cómo se deben hacer las cosas en la web.

Entre esos estándares encontramos:
- HTML
- CSS
- XML
- ...

Básicamente de lo que va el mundo web... o al menos cómo se origina (hoy funciona de forma MUY DIFERENTE)

    Servidor (Máquina física)                                               Cliente (Máquina física)
    ---------------------------                                             ---------------------------       
    SO: Windows | Linux | MacOS                                            SO: Windows | Linux | MacOS
    + Servidor Web:  <----------------http request---------------------    + Navegador Web:
       Apache httpd                                                             MS Explorer
       Nginx         -----------------http response------------------->         Netscape
       IIS                                                                      Firefox
       ...                                                                      ....
    ---------------------------                                             ---------------------------
    HDD: Disco duro
        Carpeta: /var/www/html
                 c:\inetpub\wwwroot
        Y dentro de esa carpeta, archivos html
    
        Esa carpeta tradicionalmente se denomina DOCUMENT ROOT

    
    Antiguamente, había gente que creaba (a manita) documentos HTML y los guardaba en esa carpeta.
    Para ello usaban desde editores de texto (bloc de notas) hasta herramientas más especializadas: Microsoft FrontPage, Dreamweaver, etc.

    El protocolo HTTP es un protocolo para comunicaciones SINCRONAS, basado en PETICIÓN / RESPUESTA
    Donde SIEMPRE el cliente es quien inicia la comunicación (quien hace la petición) y el servidor es quien responde.

    Más adelante en el mundo web surgieron otros protocolos de comunicación... para establecer otro tipo de comunicaciones:
    - Websockets: para comunicaciones ASINCRONAS BIDIRECCIONALES (donde tanto cliente como servidor pueden enviar mensajes)


Para establecer esa comunicación, el usuario (HUMANO) intruducía en el navegador una URL, de la forma:

    http://     miservidor  :80         /
    PROTOCOLO   DOMINIO      PUERTO     RUTA del archivo que quiero recuperar del servidor (relativa al DOCUMENT ROOT)


    http://miservidor/info/contacto.html

    Esa petición llega al servidor WEB... y lo que hace es coger el path (la ruta dentro de la URL):
        /info/contacto.html
        Si en el servidor web está configurado para que el DOCUMENT ROOT sea /var/www/html
        lo que hará el servidor web es buscar el archivo /var/www/html/info/contacto.html
        Y el servidor lee ese archivo y lo devuelve al cliente.... cliente que será un navegador web.
        Y el navegador web lo renderiza bonito por pantalla, para que un humano lo pueda leer e interactuar con él.

    En esa comunicación se usa el protocolo HTTP. En el estándar del protocolo se define:
    - Que el cliente lanza la petición: HTTP REQUEST a una URL
    - Que el servidor responde: HTTP RESPONSE con un documento HTML

    Tanto la petición, como la respuesta se mandan en una CAJA.
    Cualquier petición o respuesta HTTP tiene 2 partes:
        - ETIQUETAS (headers)
        - CONTENIDO

    Igual que cuando pido algo a AMAZON (quiero unos calzoncillos nuevos) me mandan una CAJA...
    Dentro de la caja encuentro el CONTENIDO (calzoncillos) y fuera hay pegada una ETIQUETA con información... METADATOS:
        - Dirección de envío
        - Peso
        - Tamaño
        - Si es delicado

    Entre esas etiquetas hay 2 notables:
    - ENVIO (REQUEST): VERBO HTTP (get, post, put, delete, head, options, trace, connect)
    - RESPUESTA (RESPONSE): CÓDIGO ESTADO HTTP (status code)... es un número de 3 cifras.
        Cada número significa una cosa... pero se agrupan en categorías:
            - 1??: Información
            - 2??: Éxito
            - 3??: Redirección
            - 4??: Error del cliente
            - 5??: Error del servidor

---

# Qué era UNIX ?

UNIX ERA un Sistema operativo que desarrollaban los LAB. BELL de la compañía americana de telecomunicaciones AT&T. Eso dejó de hacerse hace más de 20 años... pero sin duda ha sido el Sistema operativo MAS INFLUYENTE DEL MUNDO... con mucha diferencia.

Una cosa que ocurría con UNIX es que los SO... por aquel entonces se licenciaban de forma distinta.
AT&T licenciaba (ofrecía licencias de UNIX) a grandes corporaciones:
- COMMODORE
- OLIVETTI
- IBM

Esas empresas, adaptaban el código de UNIX a su hardware específico... y lo distribuían con sus máquinas.
Llegó a haber más de 400 versiones diferentes de UNIX = FOLLÓN !!!

Problema: algunos programas funcionaban en algunas de esas adaptaciones... y en otras no.
Y hubo que poner orden en ese caos... y se crearon 2 estándares: POSIX y SUS (Single UNIX Specification) para controlar cómo debían evolucionar los SO UNIX (las adaptaciones de UNIX).

# Qué es UNIX ?

Hoy en día llamamos UNIX a esos 2 estándares (POSIX y SUS). Y muchos fabricantes de computadoras crean Sistemas operativos propios, basados en esos estándares.... y certifican ($$$$) que cumplen con esos estándares.

IBM:        AIX Unix®
HP:         HP-UX Unix®
Oracle:     Solaris Unix®
Apple:      MacOS X Unix®

La certificación cuesta una pasta.

En un momento dado, un hombrecillo: Linux Torvalds, decidió crear un KERNEL de SO que siguiera esos estándares... y que fuera libre (gratis)... pero no lo certificó (costaba pasta): LINUX

Más adelante mucha gente empezó a usar ese kernel (NUCLEO) de SO para montar Sistemas operativos: 
- GNU/Linux: Es un Sistema operativo.. del cuál hay MUCHAS DISTRIBUCIONES: 
  - Debian >  ubuntu
  - RedHat Enterprise Linux > Fedora, Oracle Unbreakable Linux
  - Suse > OpenSuse
- Android: Es un Sistema operativo que contiene el kernel de Linux

En POSIX... ese estándar, se define cómo se deben llamar las carpetas del sistema de archivos de un ordenador...

/                           (root)
    bin
    boot
    dev
    etc
    home                        (carpetas de los usuarios... eq. en windows a la carpeta C:\Users)
    lib
    media
    mnt
    opt
    proc
    root
    run
    sbin
    srv
    sys
    tmp
    usr
    var
Igual que Windows hace con sus carpetas:

C:\
    Windows
    Program Files
    Usuarios


Por ejemplo:
c:\Usuarios\Ivan            (en windows)
/home/ivan                  (en linux)


## Entrando en HTML

HTML es un lenguaje de marcas (SGML, XML también lo son)... qué entendemos por una marca?

    <etiqueta atributo1="valor" atributo2="valor">
        contenido
    </etiqueta>

Esa sintaxis básica se hereda de SGML...
Lo que ocurre es que en SGML la gente podía definir qué marcas quería usar:

    <persona nombre="Ivan" edad="40">
        <padre nombre="Isidoro" edad="70"></padre>
        <madre nombre="María" edad="65"></madre>
    </persona>

Por eso decimos que SGML (en XML también ocurre esto) es un lenguaje de marcas de propósito general... puedo definir cualquier marca que quiera pen función del contenido que quiera estructurar.

HTML por el contrario, aunque usa también el concepto de marca, nos ofrece una colección CERRADA de marcas que podemos usar... solo esas.

```html

    <html>
        <head>  <!-- CABECERA -->
            <title>Este es el título de mi página</title>
        </head>
        <body>  <!-- CUERPO -->
            <h1>Este es el título de mi página</h1>
            <p>Este es un párrafo de texto</p>
        </body>
    </html>

```

En la cabecera doy información que puede ser relevante al navegador de internet para renderizar la página:
- Título de la página: Que el navegador mostrará en la pestaña
- Icono de la página: Que el navegador mostrará en la pestaña
- Idioma de la página: Para que el navegador sepa cómo debe interpretar los caracteres especiales
- y muchos más...

En el cuerpo de la página es donde pongo la información que quiero que se muestre en el navegador.

Para detallar el contenido, en HTML se definen muchas marcas:
```
  - <p> párrafo
  - <h1> título de nivel 1 (headers)
  - <h2> título de nivel 2
  - <h7> título de nivel 7
  - <b> negrita
  - <i> cursiva
  - <u> subrayado
  - <img> imagen
  - <a> enlace
  - <table> tabla
  - <tr> fila de tabla
  - <td> celda de tabla
  - <ul> lista no ordenada
  - <ol> lista ordenada
  - <li> elemento de lista
  - <font> fuente
```
Muchas de esas marcas iban orientadas al FORMATO con el que se mostraba la información...

```html

    <html>
        <head>
            <title>Este es el título de mi página</title>
        </head>
        <body>
            <h1>Este es el título de mi página</h1>
            <p>Este es un párrafo de <b>texto</b></p>
            <ol>
                <li>Elemento 1</li>
                <li>Elemento 2</li>
                <li>Elemento 3</li>
            </ol>
            <p>Eso es <font color="red">todo</font></p>
        </body>
    </html>

```

El problema que hubo es que esa colección de marcas y sus atributos se quedaron POBRES (escasos) para poder dotar de un formato suficiente a la información que queríamos mostrar.

En ese momento surge un nuevo estándar: CSS

## CSS

Cascade Style Sheets: Hojas de estilo en cascada

Es otro lenguaje... no de programación... ni de marcado de información... sino de ESTILOs.

Ese lenguaje también está controlado por un estándar del W3C.

Por ejemplo en CSS puedo definir estilos que se adapten al ancho del dispositivo que está mostrando la página:
- Si estoy viendo la página en una pantalla con más de 1440 pixels de ancho, aplica esta fuente
- Si estoy viendo la página en una pantalla con menos de 1440 pixels de ancho, aplica esta otra fuente... o este otro interlineado.

Hoy en día podemos hacer locuras con CSS:
- Estilos dinámicos
- Animaciones
- Definir variables que se usen para calcular otros estilos

Un cambio my grande en el estándar de css, vino con la versión 3 (CSS3)

... pero hubo un nuevo problema.
Ahora tenía 2 sitios donde poder definir estilos:
- Mediante marcas en el HTML:
  <b> negrita </b> <font color="red">rojo</font>
- Mediante hojas de estilo en cascada (CSS):
    <style>
        .negrita { font-weight: bold; }
        .colorao { color: red; }
    </style>  
    <p> <span class="negrita">negrita</span> <span class="colorao">rojo</span> </p>

FOLLÓN. y esto hace que el HTML versión 5 haya un cambio enorme en la forma de crear documentos... y marcas como:
    - <b> negrita </b>
    - <i> cursiva </i>
    - <u> subrayado </u>
    - <font> fuente </font>

Se marcan como OBSOLETAS... y se recomienda no usarlas.

Con las mismas, aparece un conjunto nuevo de marcas: MARCAS SEMANTICAS... y comienza la era del HTML SEMANTICO:
- <header> cabecera</header>
- <footer> pie de página</footer>
- <nav> menú de navegación</nav>
- <article> artículo</article>
- <section> sección</section>
- <aside> barra lateral</aside>
- <main> contenido principal</main>

Esas son las marcas que deben tener los documentos HTML de hoy en día.. y no marcas como <b></b> o <font></font>

Hoy en día, usamos el HTML para ESTRUCTURAR LA INFORMACIÓN:     Definir SU ESTRUCTURA
Y usamos el CSS para DARLE ESTILO:                              Definir SU APARIENCIA


Mientras estábamos en HTML 4... aquello iba cada vez peor..

Antes os contaba que UNIX empezó a evolucionar... y llegó a haber más de 400 versiones diferentes de UNIX.
Lo mismo pasó con HTML y CSS...
HAbía una serie de marcas en los estándares... pero como se quedaban pobres... cada navegador empezó a implementar sus propias marcas... y sus propios estilos.... se inventaba palabras html y css... y eso hacía que las páginas web se vieran de forma distinta en cada navegador.

Con HTML5 y CSS3 se definen unos estándares MUCHO MAS CONCRETOS y POTENTES... y hoy en día tenemos una web mucho más homogénea.... donde tenemos muchas garantías de que si una página se ve de una forma concreta en un navegador... se verá de forma muy similar (sino igual) en otro.

NOTA: A esto se suma el hecho de que el 90% de los navegadores web que usamos hoy se construyen con el mismo motor de procesamiento HTML.
- EGDE, CHROME, OPERA.... se basan en un navegador OPENSOURCE creado por GOOGLE: CHROMIUM
- FIREFOX se basa en un navegador OPENSOURCE creado por MOZILLA: GECKO

En estos días, lo que querremos es ir descubriendo y aprendiendo a:
- Usar las nuevas marcas semánticas de HTML5 + Estructurar mejor la información
- Usar las nuevas propiedades de CSS3 + Darle un estilo más funcionales/creativos a la información

---

## JAVASCRIPT

En el inicio del mundo web... notamos algo... nos faltaba la posibilidad de dotar de cierta LÓGICA a las páginas web que íbamos creando:

    Cliente (Navegador) <----------------------> Servidor (Servidor Web)
     FORMULARIO  -------------REQUEST ---------->  PROCESAR FORMULARIO
                 <-------------RESPONSE----------

    En ese formulario quizás al usuario, de los 10 campos que había, uno se le olvidaba.
    Y mandaba el formulario incompleto... y el servidor no podía procesarlo.... y devolvía un error.
    4??: Error del cliente
    400: Bad Request

    Eso si... esto tenía varios inconvenientes:
    - Lleno al servidor de peticiones que no podía procesar... pero que le restan capacidad para procesar peticiones válidas
    - El usuario tenía que rellenar todo el formulario de nuevo... y eso era tedioso...
    - Tenía que esperar a que el servidor le devolviera la página con el error... y eso era lento

En ese momento, la gente de NETSCAPE (uno de esos navegadores que había por aquel entonces) decidió crear un lenguaje de programación que se pudiera ejecutar en el navegador... y que permitiera dotar de cierta lógica a las páginas web.
Un lenguaje que permitiera hacer programas muy sencillitos, del tipo:
- El campo1 del formulario está relleno? Si no, avisa al usuario y no dejes enviar el formulario
- El campo2 del formulario está relleno y tiene un formato de email válido? Si no, avisa al usuario y no dejes enviar el formulario

El lenguaje que crearon se llamó MOCHA... y lo creo un tio en 10 días... nos daba vergüenza lo cutre y mal hecho que estaba... a los desarrolladores, que estábamos acostumbrados a lenguajes más formales...nos daba vergüenza llamarle a aquel engendro lenguaje de programación.
Pero... oye... no había alternativa... y fué cuajando.

En un momento dado, NETSCAPE cae en manos de una empresa llamada SUN MICROSYSTEMS... y deciden cambiarle el nombre a MOCHA por un nombre más comercial... Esa empresa por aquel entonces estaba intentando impulsar un lenguaje de programación propio que habían desarrollado.. y que parecía muy prometedor: JAVA.

Y para darle más bombo a su lenguaje de programación... deciden llamar a MOCHA con un nombre que se pareciera a JAVA... y le llaman JAVASCRIPT.

Son 2 lenguajes que NO TIENEN NADA QUE VER UNO CON OTRO... NADA ES NADA. Fue una decisión comercial el llamarle Javascript.

En los comienzos... no hay un estándar que regule cómo se debe hacer Javascript... y cada navegador implementa su propio motor de Javascript... y eso hace que los programas que se hacen en Javascript se ejecutasen de forma distinta en cada navegador... incluso llegando a no ejecutarse en algunos de ellos. FOLLÓN GORDO!

JAVASCRIPT SE GANA UNA MUY MALA FAMA HORRIBLE (MERECIDISIMA)

Los programas JS que hacíamos eran de traca:
```js
// Si el navegador es explorer
if (navigator.userAgent.indexOf("MSIE") != -1) {
    //document.getElementById("objeto").style.visibility = "hidden";
} else if (navigator.userAgent.indexOf("Firefox") != -1) {
    //document.getElementById("objeto").style.visibility = "hidden";
} else if (navigator.userAgent.indexOf("Chrome") != -1) {
    //document.getElementById("objeto").style.visibility = "hidden";
} else if (navigator.userAgent.indexOf("Safari") != -1) {
    //document.getElementById("objeto").style.visibility = "hidden";
} else if (navigator.userAgent.indexOf("Opera") != -1) {
    //document.getElementById("objeto").style.visibility = "hidden";
} else {
    //document.getElementById("objeto").style.visibility = "hidden";
}
```

En ese momento sale un estándar para controlar el avance del lenguaje y ese estándar lo regula la ECMA... y se llama ECMASCRIPT.

JAVASCRIPT como lenguaje hoy por hoy NO EXISTE. Realmente lo que existe es ECMASCRIPT... le seguimos llamando Javascript por costumbre/amor/odio... pero es ECMASCRIPT.

De ese estándar salieron (y siguen saliendo) versiones:
- ES1
- ES2
- ES3
- ES4 (se canceló)
- ES5
- ES6
- ES7

En un momento dado se empezó a llamar a las versiones de ECMASCRIPT por el año en que salían... y se empezó a llamar a ES6 como ECMASCRIPT 2015... y a ES7 como ECMASCRIPT 2016... y así sucesivamente.
- ES2015
- ES2016
- ES2024

Hoy en día, ECMAScript es un lenguaje con una sintaxis tan potente o más incluso que la de JAVA o PYTHON.

Aquél lenguaje que nos daba vergüenza llamarle lenguaje de programación... hoy en día es un lenguaje de programación muy potente y se ha convertido en el segundo lenguaje de programación más usado del mundo... solo por detrás de PYTHON.

En este impás.... ocurrió otra cosa.

Por aquel entonces el lenguaje REY era sin dudas JAVA (estamos hablando de inicios de los 2000).

JAVA se había convertido en el lenguaje del futuro...
- Todo el mundo quería aprender JAVA
- Cualquier proyecto de software que se preciara se hacía en JAVA:
  - Web: JAVA
  - App desktop: JAVA
  - App mobile (Android): JAVA
  - App embebida: JAVA (J2ME)
    vvvvvvvvv
Hoy en día:
- Web:
  - Frontend: Javascript... sin remedio.. es imposible usar JAVA hoy en día para frontal.. si quiero hacer algo con capacidades mínimas.
  - Backend: JAVA (Spring)
- Desktop: C#, VB, Objective-C, Swift
- Android: Kotlin
- Embebida: C, C++, Python

---

# Versiones de JAVA

- JDK 1.0 (1996)
- JDK 1.1 (1997) 
- JDK 1.2 (1998)
- JDK 1.3 (2000)
- JDK 1.4 (2002)
- JDK 1.5 (2004) 
- JDK 1.6 (2006)
- ------------------------> 5 años????          Oracle compra Sun Microsystems
                                                      OpenOffice ---> LibreOffice
                                                      MySQL      ---> MariaDB
                                                      Hudson     ---> Jenkins
- JDK 1.7 (2011)
- ------------------------> 3 años????
- JDK 1.8 (2014)
- ------------------------> 3 años????          En 11 años... 3 versiones de JAVA?
                    Oracle anuncia que comenzará a cobrar por la máquina virtual de JAVA:
                        Para usuarios normales: 25$/año
                        Para empresas: 50$/core/año en servidores
- JDK 9 (2017)
- JDK 10 (2018)
- JDK 11 (2018)
- JDK 12 (2019)
- JDK 13 (2019)
- JDK 14 (2020)
- JDK 15 (2020)
- JDK 16 (2021)
- JDK 17 (2021)
- JDK 18 (2022)
- JDK 19 (2022)
- JDK 20 (2023)
- JDK 21 (2023)
- JDK 22 (2024)
- JDK 23 (2024)
- JDK 24 (2025)
En google tomaron el motor de procesamiento de JS que habían desarrollado para su navegador CHROMIUM. y lo liberaron como proyecto / producto independiente.. hoy en día lo conocemos con el nombre de NODE.JS
Node es a JS lo que la JVM es a JAVA.

Me permite ejecutar aplicaciones JS fuera de un navegador.
Ésto, junto con la evolución que había tenido el lenguaje (gracias a los estándares de ECMASCRIPT) hizo que JS se haya convertido en el segundo lenguaje de programación más usado del mundo... y en un lenguaje con unas capacidades muy potentes.

## Características de JS

Dentro de los lenguajes de programación usamos diferentes CATEGORÍAS para clasificarlos.

### Lenguajes compilados / Lenguajes interpretados

Cuando escribo un programa uso un lenguaje de programación: JS/JAVA/PYTHON/C....
Ese programa yo lo escribo... pero quien lo ejecuta es el Sistema Operativo... y para ello, el SO debe estar en comunicación con mi programa.

Los sistemas operativos, saben de JAVA? NPI, C? NPI, PYTHON? NPI, JS? NPI
Cada Sistema Operativo habla SU PROPIO LENGUAJE...

Hay que traducir nuestro programa de un determinado lenguaje al lenguaje del SO... y hay 2 estrategias diferentes que seguimos:

- Compilación: Pre-traducción de mi programa al lenguaje de un SO
  Si quiero que mi programa se pueda ejecutar en muchos SO... debo compilarlo para cada uno de ellos.
  Ejemplos: C, C#, ADA, FORTRAN, COBOL
- Interpretación: Traducción de mi programa al lenguaje de un SO en tiempo de ejecución... bajo demanda.
  Ejemplos: JS, PYTHON
  Eso hace que en las primeras versiones de JS... los programas JS fueran lentos... porque el navegador tenía que interpretar el programa JS en tiempo de ejecución... y eso era lento.
    Hoy en día, los motores de JS son muy potentes... y van guardando una caché de compilación de los programas JS... y eso hace que la ejecución de los programas JS sea muy rápida.
- Engendros (híbridos): JAVA (compilado + interpretado)
        .java -> .class (bytecode) -> JVM (interpreta el bytecode)
            compilación

### Lenguajes de tipado estático (fuerte) / Lenguajes de tipado dinámico (débil)

- Tipado estático: TS, JAVA, ABAP, C, FORTRAN
- Tipado dinámico: JS, PYTHON

Cuando creamos un programas manipulamos datos... esos datos SIEMPRE tienen un TIPO... independientemente del lenguaje que usemos.

En cualquier lenguaje (python, js incluidos) los datos tienen un tipo:
- Números
- Cadenas de texto
- Booleanos
- Fechas

Y a esos me refiero, los manipulo mediante VARIABLES.

#### Qué es una variable?

El problema es que el concepto de variable, varía de lenguaje de programación a lengua de programación.

En C, FORTRAN... una variable es una posición de memoria en la que pongo un dato.
En JS, JAVA, PYTHON... una variable es una referencia a un dato que tengo en RAM (tiene más que ver con la definición en C de puntero)

```java
    String texto = "hola";
```
1. "hola"           -> Crea un objeto de tipo STRING (TEXTO) en RAM , con valor "hola"... en algún sitio.
                        La RAM es como un cuaderno de cuadrícula.
2. String texto     -> Crear una variable... con el nombre "texto", que puede apuntar a objetos de tipo STRING
                        En los lenguajes de tipado ESTATICO, las variables TAMBIEN TIENEN TIPO.
                        Y solo pueden apuntar a datos de ese tipo.
3. =                -> Asigna la variable AL VALOR "hola"

```java
    texto = "adios";
```
1. "adios"          -> Crea un objeto de tipo STRING (TEXTO) en RAM , con valor "adios"... en algún sitio.
                        Dónde? Donde estaba el valor "hola" o en otro sitio? EN OTRO SITIO
                        Y llegados a este punto, en RAM tengo 2 datos: "hola" y "adios"
2. texto =          -> Reasigno la variable AL VALOR "adios"
                       El dato "hola" quedaría huerfano de variable... ninguna variable apunta a ese dato.
                       Y en JAVA ese dato se convertiría en IRRECUPERABLE = GARBAGE (Basura)
                       Y queda en RAM ocupando espacio... al menos hasta que entre (o no) el recolector de basura (GARBAGE COLLECTOR) y lo elimine.

Este mismo concepto aplica en JS y en PYTHON.

Pero... en JS hay una diferencia

```js
    var texto = "hola";
```
1. "hola"           -> Crea un objeto de tipo STRING (TEXTO) en RAM , con valor "hola"... en algún sitio.
                        La RAM es como un cuaderno de cuadrícula.
2. var texto        -> Crear una variable... con el nombre "texto", que puede apuntar a cualquier tipo 
                        de objeto.
                        En los lenguajes de tipado DINAMICO, las variables NO TIENEN TIPO.
                        Y pueden apuntar a datos de cualquier tipo.
3. =                -> Asigna la variable AL VALOR "hola"

```js
    var texto = "adios";
    texto = 33;
    texto = true;
```

Eso en JS es perfectamente válido... y no da error. En JAVA no.. al compilar da un error... de tipos. De los tipos de la variable... que no encajan con los del dato que estoy tratando de asignar.

Pregunta.. qué es mejor? Tipado estático o tipado dinámico?
Depende:
- Si quiero montar un programita chuiquitín yo solito... en mi casa... El dinámico es más cómodo... tecleo menos.
- Si quiero montar un programa grande, que vaya a estar sujeto a cambios... por parte de varias personas a lo largo de su ciclo de visa... NI DE COÑA DINAMICO... SIEMPRE QUIERO ESTÁTICO:

```js
    function generarInforme(titulo, datos) { // SIGNATURA o FIRMA de la función
        // código
    }
```


```java
    Informe generarInforme(String titulo, List<Integer> datos) { // SIGNATURA o FIRMA de la función
        // código
    }
```

De hecho... en JS, para resolver este PROBLEMON... (cuando empezamos a hacer / usar JS para programas más complejos) hubo que inventar un lenguaje TOTALMENTE NUEVO que se llama TYPESCRIPT.

En js, trabajamos con ficheros con extensión .js... y esos ficheros son INTERPRETADOS por un motor de procesamiento de JAVASCRIPT (normalmente dentro de un navegador al crear un app WEB)... o si creo un app de escritorio (Como visual studio code) por NODE.JS

En typescript, trabajamos con ficheros con extensión .ts

    .ts -------> TRANSPILAN ----------> .js (son INTERPRETADOS por un motor de procesamiento de JAVASCRIPT)

COMPILAR:     Traducir un programa de un determinado lenguaje de programación A a un lenguaje de programación B
                de mucho más bajo nivel (más cercano al lenguaje de la máquina)
TRANSPILAR:   Traducir un programa de un determinado lenguaje de programación A a un lenguaje de programación B
                de un nivel de abstracción similar.

En typescript tenemos tipos... al transpilar lo que hacemos es pasar el código a JS, donde quitamos los tipos... pero en ese proceso, podemos validar que los tipos que estamos usando en nuestro programa son correctos... y eso nos da una garantía de que nuestro programa no va a fallar por un error de tipos.

Los navegadores NO HABLAN TYPESCRIPT... hablan JAVASCRIPT... si quiero en mis proyectos puedo usar Typescript... pero al final, si lo voy a ejecutar en un navegador... debo transpilarlo a JS.

En cualquier caso, TypeScript y JS son muy parecidos... los principios de programación que se aplican en uno, se aplican en el otro son los mismos.

### En base a los paradigmas de programación que soportan.

Un paradigma de programación no es sino un nombre HORTERA que los informáticos damos a la forma en la que decidimos usar un lenguaje para expresar un concepto...
Pero es algo que todos los seres humanos hacemos al usar cualquier lenguaje:

- Felipe, pon una silla debajo de la ventana            IMPERATIVO
- Felipe, quiero una silla debajo de la ventana         DESIDERATIVA
- Felipe, debajo de la ventana ha de haber una silla    ENUNCIATIVA

Con los lenguajes de programación puedo hacer lo mismo:
- IMPERATIVO: Cuando doy órdenes a la computadora que debe procesar secuencialmente
                Aunque a veces quiero romper la secuencialidad... y nos salen las famosas estructuras de control de flujo: IF, ELSE, CASe, SWITCH, FOR, LOOP, WHILE (condicionales/Bucles)
- PROCEDURAL: Cuando el lenguaje me permite agrupar esas SECUENCIAS de órdenes en PROCEDIMIENTOS o FUNCIONES
                MÉTODOS, RUTINAS, SUBRUTINAS... y posteriormente invocar esos procedimientos/funciones/métodos
                decimos que el lenguaje soporta el paradigma PROCEDURAL.
                Ventajas:
                  - Reutilización de código
                  - Encapsulación
                  - Mejorar la estructura del código para hacerlo más legible/mantenible
                  - A veces creamos funciones simplemente porque tenemos que llamar a una función que requiere una función como un argumento.
- PROGRAMACION ORIENTADA A OBJETOS:
              Cuando el lenguaje me permite definir mis propios tipos de datos: CLASE
- FUNCIONAL:  El concepto es muy simple.
              Cuando el lenguaje me permite que una variable apunte a una función... para posteriormente invocar la función desde la variable. Entonces decimos que el lenguaje soporta el paradigma FUNCIONAL. 
            El concepto es simple... entender para qué sirve y lo que permite es otra cosa.
            Cuando el lenguaje me permite eso
            podemos hacer locuras como:
            - Definir funciones que acepten funciones como argumentos
            - Definir funciones que devuelvan funciones
            - AQUI ES DONDE LA CABEZA EXPLOTA !
---- 

JS lo usamos principalmente ( y especialmente en lo que vamos a hacer en este curso) para el desarrollo de frontales... y la programación de frontales es muy diferente de la programación BACKEND.
La programación de frontales va muy orientada a EVENTOS... y a la interacción con el usuario.
Y el tema es que quiero poder despachar multiples eventos que están ocurriendo simultáneamente... y quiero poder hacerlo de forma asíncrona...

Si mi usuario aprieta en el botón de enviar formulario, quiero que:
- Mi código envíe los datos del formulario al servidor
- Mientras tanto, quiero una ruedita girando en la pantalla para que el usuario sepa que algo está pasando
- Mientras tanto quiero poder estar escuchando si el usuario aprieta en otro botón cancelar... para cancelar el envío del formulario

En un backend, tengo procesos mucho más secuenciales... y síncronos en el 90% de los casos.


---


Monto un frontal con un formulario:
Cuando hagan clic en ENVIAR (EVENTO), quiero:
1- mandar una petición a un servidor para que guarde los datos del formulario.
   Pregunta... eso va a ser instantáneo? NO
   Quiero quedarme (quiero que mi programa) se quede esperando la respuesta sin hacer nada mientras? NO, ni de coña...
   Si hago eso... el usuario no podría ni hacer click en otro sitio de la pantalla... no atendería a su petición.
   Lo que si quiero es que cuando la petición haya sido respondida... mostrar un mensaje al usuario: "Su petición ha sido procesada correctamente"
2- Mientras tanto, quiero que en la pantalla aparezca una ruedita girando... para que el usuario sepa que algo está pasando.
3- Quiero también después activarle un botón de cancelar... que antes del envío no esté activo.


---

El mundo de los frontales WEB ha cambiado de sobremanera!

- Antiguamente (en los albores del mundo web), los desarrolladores web creábamos ficheros html estáticos... que guardábamos en un servidor web... y que el servidor entregaba al navegador web... y el navegador web los renderizaba en pantalla.
- Más adelante, los desarrolladores web creábamos programas que se instalaban en el servidor... Y cuando se recibía una petición en el servidor... el servidor ejecutaba el programa... y ese programa generaba un documento HTML que devolvía al navegador... y el navegador lo renderizaba en pantalla.
- Hoy en día los desarrolladores web hacemos programas en JS, que se ejecutarán dentro del navegador... y que generan dentro del propio navegador el documento HTML que se renderizará en pantalla.
  Puede ser que para ello, el programa JS que monte llame a un servidor para recuperar ciertos datos, que el servidor entregará normalmente en un formato NEUTRO (que no lleva información de FORMATO... solo los datos: JSON)

  Antiguamente eso lo hacíamos con AJAX... hoy en día tenemos opciones mucho más avanzadas.

  De hecho, hoy en día hay un nuevo estandar del W3C que se llama WEB COMPONENTS... que nos permite crear COMPONENTES WEB.

[
    {
        "pedido": 1,
        "fecha": "2021-10-01",
        "productos": [
            {
                "producto": "camiseta",
                "cantidad": 2
            },
            {
                "producto": "pantalón",
                "cantidad": 1
            }
        ]
    },
    {
        "pedido": 2,
        "fecha": "2021-10-02",
        "productos": [
            {
                "producto": "zapatos",
                "cantidad": 1
            },
            {
                "producto": "cinturón",
                "cantidad": 1
            }
        ]
    }
]

# Componente web

HTML trae su juego de marcas predefinido.

En HTML existe la marca:
<usuario id="1092834"> </usuario>

No existe la marca `usuario`.
Pero... quizás a mi me puede interesar CREARLA... definir esa MARCA HTML...
Y asociado a esa marca HTML quiero explicarle al navegador:
- Como debe renderizarla
- Qué comportamiento debe tener

De forma que cuando el navegador se encuentre la marca HTML <usuario> en un documento HTML... 
1. llame a un servidor a la URL: http://miservidor/api/v1/usuairo/1092834
2. Capture la respuesta JSON del servidor
3. Convierta esos datos a un DIV HTML, donde se muestre el nombre del usuario, su email, foto...
4. Y que en ese DIV dentro, exista un botón ENVIAR MENSAJE
5. Y que si el usuario pulsa, se le muestre un formulario donde pueda meter un asunto y un mensaje... y que al pulsar ENVIAR, se envíe un mensaje al servidor, a un servicio de envío de emails... y que el usuario que usa la app, ni siquiera conozca el email del destinatario.

Y quiero poder usar esa marca HTML de ahora en adelante en 50 páginas de mi app...
De ésta app que estoy montando, de la que hice el mes pasado y de la que voy a hacer mañana...
Porque posiblemente en varias apps voy a necesitar mostrar los datos de un usuario que existe en mi organización.

La cosa es que para hacer uso de esta funcionalidad, lo normal es utilizar librerías que existen en JS... muy especializadas en ello:
- Angular
- React
- VueJS
- Polymer
- ...

La cosa es que todos esos frameworks, en ellos, acabo escribiendo código JS (o TS)
Y necesito generar HTML
Y necesito generar CSS

Este curso es un previo a cualquiera de los otros... Un "must" para poder posteriormente lidiar con esos frameworks.