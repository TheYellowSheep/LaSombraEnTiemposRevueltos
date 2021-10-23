var imagen = document.getElementById("noblur");         //Imagen que no tendrá blur
var inventario = document.getElementById("inventario"); //Inventario
var ojo = document.getElementById("ojo");               //Boton de ojo
//Si hay items los guarda en variables
var medallon = localStorage.getItem('Medallon');        //Objeto local Medallon
var pistola = localStorage.getItem('Pistola');          //Objeto local Pistola
var mechero = localStorage.getItem('Mechero');          //Objeto local Mechero
//Si hay algún item en el inventario se muestra.
if(medallon == "si" || pistola == "si" || mechero == "si"){
    document.getElementById("inventario").style.display = "block";
    if(medallon == "si"){
        document.getElementById("medallon").style.display = "block";
    }
    if(pistola == "si"){
        document.getElementById("pistola").style.display = "block";
    }
    if(mechero == "si"){
        document.getElementById("zippo").style.display = "block";
    }
}
//Función que redirige a la página especificada
function redir(direcccion){
    this.location = direcccion;
}
/*resetea la historia(inventario y demas variables)*/
/*Se utiliza un espacio de memoria en el equipo cliente,estableciendo los objetos, con el contenido a no*/
function vaciar_inventario(){
    localStorage.setItem('Medallon','no');              // Un medallon raro
    localStorage.setItem('Pistola','no');               // Una pistola
    localStorage.setItem('Mechero','no');               // Un mechero
    localStorage.setItem('llamada','no');               // Si has hecho una llamada por telefono
    localStorage.setItem('disparo','no');               // Si disparaste o no
    localStorage.setItem('incendios','no');             // Si fuiste por la escalera de incendios
    localStorage.setItem('Cuartel', 'no');              // Si llamaste al cuartel
    localStorage.setItem('investigadoelcuartel','no');  // Si invesigaste el cuartel general
    localStorage.setItem('TheInformatician','no');      // Si miraste los monitores
    localStorage.setItem('radiofonico','no');           // Si intentaste usar la radio
    localStorage.setItem('Sherlock','no');              // Si buscaste pistas( si es si vas solo)
}
//Alterna la imagen de fondo
function alternarimagen(){
    //Se intercambia, si contiene alguna clase con blur, se quita para que se muestre la imagen.
    if(imagen.classList.contains("noblur") || imagen.classList.contains("noblur2"))
    {
        imagen.classList.remove("noblur");
        imagen.classList.remove("noblur2");
        ojo.style.zIndex = "2";
    }
    //si no contiene alguna clase con blur, se la añade para que vuelvan las opciones.
    else
    {
        imagen.classList.add("noblur2");
    }
}
//Se usa para que no aparezcan el boton de "inspeccionar cadaver"
function NoInspect(){
    if(pistola == "si" || medallon == "si"){
        document.getElementById("inspectp").style.display = "none"; // Quita el botón de "inspeccionar cadaver"
    }
}
//Se activa para establecer el inventario en "escaleras"
function Inventario_Cadaver(){
    inventario.style.display = "block";                         // Muestra el inventario
    document.getElementById("medallon").style.display = "block";// Muestra el objeto medallon
    document.getElementById("pistola").style.display = "block"; //Muestra el objeto pistola
    localStorage.setItem('Medallon','si');                      // Establece que tienes el medallón
    localStorage.setItem('Pistola','si');                       // Establece que tienes la pistola
    document.getElementById("inspectp").style.display = "none"; // Quita el botón de "inspeccionar cadaver"
}
//Se activa para abrir el modal
function abrirmodal(){
    document.getElementById("modal").style.display = "block";                              //Muestra la ventana del inventario
}
//Se activa para cerrar el modal
function cerrarmodal(){
    document.getElementById("modal").style.display = "none";                               // Cierra la ventana del inventario
}
//Establece que se ha ido por la escalera de incendios
function incendios(){
    localStorage.setItem('incendios','si');
}
// Planta baja
function PlantaBaja(){
    var disparo = document.getElementById("disparo"); // botón de disparo
    var disparar = localStorage.getItem('disparo');   //Objeto local Mecher disparo
    var llamada = localStorage.getItem('llamada');    //Objeto local Mecher llamada
    //Si tiene la pistola pero no ha disparado, se muestra "disparar"
    if(pistola == "si" && disparar == "no"){
        disparo.style.display = "block";
    }
    //Si ha llamado no se muestra "llamar"
    if(llamada == "si"){
        document.getElementById("inspect").style.display = "none";
    }
    //Si ha disparado no se muestra "disparar"
    if(disparar == "si"){
        disparo.style.display = "none";
    }
    //Al disparar cambia el texto
    disparo.onclick = function(){
        var texto = "Tu disparo es certero, su ruido resuena por toda la estancia, provocándote un leve pitido en los oídos. Sabes que has acertado y, sin embargo, la sombra se gira para mirarte momentáneamente y se desliza hacia la calle en un instante.";
        document.getElementById("parrafo").innerText = texto;
        localStorage.setItem('disparo','si');       // Establece una variable local de disparo
        disparo.style.display = "none";             // Quita el botón de "disparar"
    }
}
// Distintas opciones para la llamda
function llamada(opcion) {
    var parrafo = document.getElementById("parrafo");       // Parrafo de la pagina
    var parrafollamada = document.getElementById("llama");  // Parrafo de la ventana modal
    var llamada0 = document.getElementById("llamar0");      // Opcion de llamar
    var llamada1 = document.getElementById("llamar1");      // Opcion de llamar al cuartel
    var llamada2 = document.getElementById("llamar2");      // Opcion de llamar a casa
    var llamada3 = document.getElementById("llamar3");      // Opcion de llamar al amigo
    switch (opcion) {
        //Si decide llamar como opcion
        case 0:
            llamada0.style.display = "none";
            llamada1.style.display = "block";
            llamada2.style.display = "block";
            llamada3.style.display = "block";
            break;
        //Si llama al cuartel general
        case 1:
            localStorage.setItem('Cuartel', 'si');          //Objeto para saber si ha llamado al cuartel
            var texto = "“¿Sí? ¿Quién es?” Explicas quien eres y proporcionas tu identificador. Te pregunta qué está pasando y por qué todo parece estar yéndose a la mierda. Tras unas pocas frases decide que va a ir a recogerte, describes la zona de la calle que ves desde la recepción y la llamada se corta. Parece que no vas a poder volver a usar el teléfono.";
            parrafollamada.innerText = texto;
            llamada0.style.display = "none";
            llamada1.style.display = "none";
            llamada2.style.display = "none";
            llamada3.style.display = "none";
            break;
        //Si llama a casa
            case 2:
            var texto = "Nadie coge el teléfono, tras unos tonos de llamada, la línea se corta. Parece que no vas a poder volver a usar el teléfono.";
            parrafollamada.innerText = texto;
            llamada0.style.display = "none";
            llamada1.style.display = "none";
            llamada2.style.display = "none";
            llamada3.style.display = "none";
            break;
        //Si llama un amigo
        case 3:
            var texto = "El teléfono da unos pocos tonos y alguien coge el teléfono. Tras preguntar quién es, de forma nerviosa, se escuchan unos gritos y la línea se corta. Parece que no vas a poder volver a usar el teléfono.";
            parrafollamada.innerText = texto;
            llamada0.style.display = "none";
            llamada1.style.display = "none";
            llamada2.style.display = "none";
            llamada3.style.display = "none";
            break;
        //Cerrar el modal y esconder cosas
        case 4:
            document.getElementById("inspect").style.display = "none"; // Quita el botón de "inspeccionar recepcion"
            document.getElementById("disparo").style.display = "none"; // Quita el botón de "disparar"
            localStorage.setItem('Mechero','si');                      // Establece una variable local de mechero
            localStorage.setItem('llamada','si');                      // Establece una variable local de llamada
            localStorage.setItem('disparo','si');                      // Establece una variable local de disparo
            var texto = "Deberias salir a buscar ayuda, la puerta que ha cruzado la sombra está abierta, pero parece que puede haber algo interesante en la recepción";
            parrafo.innerText = texto;
            document.getElementById("zippo").style.display = "block"; //Se muestra el mechero
            break;
    }
}
// Calle
function Calle(){
    var Cuartel = localStorage.getItem('Cuartel');      // Si ha llamado al cuartel
    var incendios = localStorage.getItem('incendios');  // Si ha bajado por la escalera de incendios
    //Si ha llamado al cuartel vienen a buscarlo
    if(Cuartel == "si"){
        var texto = "Pasados casi 10 minutos, un coche aparece por el final de la calle, es de La Compañía… Para frente al edificio en el que te encuentras y la puerta se abre, invitándote a entrar. Durante el viaje te cuenta que fallaste al intentar detener el primer ritual, que debido a tu cagada, ahora tenéis que enfrentaros al grueso de la secta y que habéis quedado en el parque con el resto de La Compañía.";
        document.getElementById("cuartel").style.display = "none";
        document.getElementById("casa").style.display = "none";
        document.getElementById("parrafo").innerText = texto;
    }else{
        //Si ha bajado por la escalera de incendios cambia el texto
        if(incendios == "si"){
            var texto = "Hay gente corriendo por la calle, parecen intentar huir hacia el interior de los edificios mientras algunas de esas sombras les persiguen. Tienes que tomar una decisión rápida, no puedes quedarte aquí demasiado tiempo.";
        }else{
            var texto = "Hay un par  de cadáveres cerca de la entrada de una tienda y te da tiempo a ver a uno de esos seres, sombras, colarse por la ventana de un edificio. No puedes quedarte demasiado tiempo aquí fuera, tienes que decidir rápido.";
        }
        document.getElementById("parque").style.display = "none";
        document.getElementById("parrafo").innerText = texto;
    }
}
//Casa
function casa(){
    //Si tiene la pistola al salir puedes huir
    if (pistola == "si") {
        document.getElementById("abalanzamiento").style.display = "none";
        document.getElementById("secta").textContent += " Enarbolando tu arma y disparando contra el grupo, consigues escapar, decides refugiarte en el cuartel general";
    }
    //Mueres
    else{
        document.getElementById("enarbolar").style.display = "none";
        document.getElementById("secta").textContent += " Se abalanzan contra ti y al cabo de poco tiempo, sientes sus cuchillos atravesar tu carne";
    }
}
//cuartel general
function Cuartel_General(){
    var investigadoelcuartel = localStorage.getItem('investigadoelcuartel');    //Si se ha investigado el cuartel
    var radiofonico = localStorage.getItem('radiofonico');                      //si ha llamado por radio
    var TheInformatician = localStorage.getItem('TheInformatician');            //si ha mirado los monitores
    var radiofonicob = document.getElementById("radiofonicob");                 //boton de llamar por radio
    var TheInformaticianb = document.getElementById("TheInformaticianb");       //boton de mirar monitores
    var CSImiami = document.getElementById("CSImiami");                         //boton de investigar el cuartel
    //Si no se ha investigado se muestra la opcion, y no te permite salir
    if(investigadoelcuartel == "no"){
        document.getElementById("parque").style.display = "none";
        document.getElementById("CSImiami").style.display = "block";
    }
    //Si has llamado por radio no se muestra la opcion
    if(radiofonico == "si"){
        document.getElementById("radiofonicob").style.display = "none";
    }
    //Si has mirado los monitores no se muestra la opcion
    if(TheInformatician == "si"){
        document.getElementById("TheInformaticianb").style.display = "none";
    }
    //Cambia el texto y oculta el boton de llamar por radio
    radiofonicob.onclick = function(){
        var texto = "No hay respuesta, buscas por las frecuencias que conoces y ni siquiera recibes ruido blanco. Debe estar pasando algo peor de lo que te planteabas ahí fuera.";
        document.getElementById("parrafo").innerText = texto;
        document.getElementById("radiofonicob").style.display = "none";
        localStorage.setItem('radiofonico','si');
    }
    //Cambia el texto y oculta el boton de mirar monitores
    TheInformaticianb.onclick = function(){
        var texto = "Te pierdes entre cientos de archivos, no parece que haya nada nuevo, pero hay tanta información que comienzas a sentirte saturado, el tiempo apremia. Una interferencia en la radio te saca de la lectura, deberías buscar otra solución.";
        document.getElementById("parrafo").innerText = texto;
        document.getElementById("TheInformaticianb").style.display = "none";
        localStorage.setItem('TheInformatician','si');
    }
    //Investigas el cuartel y te deja salir
    CSImiami.onclick = function(){
        var texto = "Hay bastante documentación en la sala de reuniones, detalla de forma bastante concisa tu fracaso al intentar detener el primero de los rituales que iban a suceder hoy… Se explica que se va a hacer un asalto a la localización del último ritual, se nombra el lugar de reunión, un parque que conoces cerca de aquí. Deberías darte prisa para alcanzarles.";
        document.getElementById("parrafo").innerText = texto;
        document.getElementById("CSImiami").style.display = "none";
        document.getElementById("parque").style.display = "block";
        localStorage.setItem('investigadoelcuartel','si');
    }
}
//parque
function parque(){
    var parrafo = document.getElementById("parrafo");                     // parrafo de la pagina
    var Cuartel = localStorage.getItem("Cuartel");                        // si ha investigado el cuartel
    var sherlockt = localStorage.getItem("Sherlock");                     // si ha buscado pistas
    var Sherlock = document.getElementById("Sherlock");                   // boton de buscar pistas
    var Naturofobico = document.getElementById("Naturofobico");           // boton de abandonar el parque
    var Espeleleologo = document.getElementById("Espeleleologo");         // boton de ir a las catacumbas
    var Leroy = document.getElementById("Leroy");                         // boton de proponer un ataque frontal
    var Tactician = document.getElementById("Tactician");                 // boton de porponer una estrategia
    var Muerte = document.getElementById("Muerte");                       // boton de muerte
    Muerte.style.display = "none";
    //si ha llamado al cuartel, cambia el texto y las opciones
    if (Cuartel == "si") {
        var texto = "Aparcais y os dirigís rápidamente hacia un grupo grande de personas. A medida que os acercáis, te das cuenta de que llevan el distintivo de La Compañía. Te ponen al día sobre la situación, te comentan que en este parque hay una entrada a unas catacumbas que os pueden ayudar a llegar a la zona del último ritual sin tener que pasar por el grueso de las fuerzas de la secta.";
        parrafo.innerText = texto;
        Sherlock.style.display = "none";
        Naturofobico.style.display = "none";
    } else {
        var texto = "Parece que ha habido gente por aqui, una gran cantidad de huellas se extienden por diferentes partes del parque, tanto hacia fuera como hacia el interior.";
        parrafo.innerText = texto;
        Espeleleologo.style.display = "none";
        Leroy.style.display = "none";
        Tactician.style.display = "none";
    }
    //si has investigado pistas cambia el texto y esconde la opcion de buscar
    if (sherlockt == "si") {
        var texto = "Las únicas huellas que se introducen en el parque llevan a una especie de mausoleo. En su puerta puede leerse: “Catacumbas”. La puerta está abierta y encuentras una insignia de La Compañía en el suelo, parece que han entrado con prisa, así que decides seguirles.";
        parrafo.innerText = texto;
        Sherlock.style.display = "none";
        Espeleleologo.style.display = "block";
    }
    //(solo)si has investigado pistas cambia el texto y esconde la opcion de buscar
    Sherlock.onclick = function(){
        var texto = "Las únicas huellas que se introducen en el parque llevan a una especie de mausoleo. En su puerta puede leerse: “Catacumbas”. La puerta está abierta y encuentras una insignia de La Compañía en el suelo, parece que han entrado con prisa, así que decides seguirles.";
        parrafo.innerText = texto;
        Sherlock.style.display = "none";
        Espeleleologo.style.display = "block";
        localStorage.setItem('Sherlock','si');
    }
    //(solo)si abandonas el parque cambia el texto y has muerto
    Naturofobico.onclick = function(){
        var texto = "Buscas en la calle un lugar al que ir, no puede ser que hayan desaparecido… Has venido todo lo rápido que has podido ¿verdad? No puede ser, el cielo comienza a teñirse de rojo oscuro, tragándose la luz del Sol. Numerosas sombras fluyen entre las nubes llegando al suelo, es demasiado tarde para hacer nada.";
        parrafo.innerText = texto;
        Sherlock.style.display = "none";
        Espeleleologo.style.display = "none";
        Naturofobico.style.display = "none";
        Muerte.style.display = "block";
    }
    //(acompañado)si propones ir de frente  cambia el texto y has muerto
    Leroy.onclick = function(){
        var texto = "A pesar de las dudas y de la negativa de la mayoría, te hacen caso. Realizáis un ataque frontal contra la catedral en la que están realizando el último ritual. Vuestros esfuerzos parecen dar sus frutos al principio, pero parece que la secta tiene adeptos en todos los rincones de la ciudad. A medida que pasa el tiempo os van superando en número, hasta que comienzan a unirse las sombras a la defensa y acaban con vosotros.";
        parrafo.innerText = texto;
        Espeleleologo.style.display = "none";
        Leroy.style.display = "none";
        Tactician.style.display = "none";
        Muerte.style.display = "block";
    }
    //(acompañado)si propones esperar y hacer una estrategia cambia el texto y has muerto
    Tactician.onclick = function(){
        var texto = "Se palpa la necesidad de actuar, pero el miedo es sincero en vuestros ojos… Se acepta intentar esperar a más refuerzos y mejor armamento. A medida que comienza a llegar gente parece que el cielo se va enrojeciendo, y antes de que os déis cuenta, empiezan a surgir más y más sombras de entre las nubes. No podéis hacer nada para defenderos y acaban matando a toda La Compañía al completo.";
        parrafo.innerText = texto;
        Espeleleologo.style.display = "none";
        Leroy.style.display = "none";
        Tactician.style.display = "none";
        Muerte.style.display = "block";
    }
}
//catacumbas
function catacumbas(){
    var parrafo = document.getElementById("parrafo");                   //parrafo de la pagina
    var gallina = document.getElementById("gallina");                   // boton de huir
    var noheroe = document.getElementById("noheroe");                   // boton de continuar
    var heroeperono = document.getElementById("heroeperono");           // boton de avisar al grupo
    var heroe = document.getElementById("heroe");                       // boton de detener al grupo
    var Muerte = document.getElementById("Muerte");                     // boton de muerte
    var solo = localStorage.getItem("Sherlock");                        // si has investigado pistas en el parque, es que vas solo
    Muerte.style.display = "none";
    //si vas solo cambia el texto y las opciones
    if (solo == "si") {
        var texto = "Los túneles parecen más fríos que nunca y las tumbas más espeluznantes. El silencio cubre toda la red de túneles, y andas por ellos casi sin saber hacia a dónde vas. Poco después encuentras una señal: “catedral”. Claro, ahí es donde iba a ser el último ritual; aceleras el paso mientras sigues esas señales. Para tu sorpresa, un grupo de cadáveres con insignias de La Compañía aparecen ante ti… Parece que fueron atacados por sorpresa… Si les hubieses podido acompañar, quizás habrían tenido otra suerte.";
        parrafo.innerText = texto;
        heroeperono.style.display = "none";
        heroe.style.display = "none";
    } else {
        var texto = "A medida que recorréis los fríos túneles de las catacumbas, os rodea un silencio sepulcral, solo roto por vuestras pisadas y respiración nerviosa. Vas en último lugar, cubriendo la retaguardia y escuchas un ruido, parecen pisadas, ajenas a vuestro grupo. Tienes un instante para decidir qué hacer";
        parrafo.innerText = texto;
        gallina.style.display = "none";
        noheroe.style.display = "none";
    }
    //si le das a huir mueres
    gallina.onclick = function(){
        var texto = "Cuando sales de las catacumbas, el cielo ha terminado de teñirse de rojo, las sombras invaden cada rincón del parque. Es demasiado tarde.";
        parrafo.innerText = texto;
        gallina.style.display = "none";
        noheroe.style.display = "none";
        Muerte.style.display = "block";
    }
    // si le das a avisar no salvas a tu compañia
    heroeperono.onclick = function(){
        var texto = "Se detienen y escuchas a tu alrededor, solo el silencio responde tu búsqueda, tu grupo te pregunta qué está pasando y, antes de que puedas responderles, un grupo de sectarios caen sobre vosotros, acabando con casi toda La Compañía. Consigues huir y continuar avanzando, es más importante detener el ritual.";
        parrafo.innerText = texto;
        heroe.style.display = "none";
        heroeperono.style.display = "none";
        localStorage.setItem("Sherlock","si");
        noheroe.style.display = "block";
    }
    // si le das a detenter, si salvas a la compañia
    heroe.onclick = function(){
        var texto = "“¡Nos sigue alguien!” En cuanto les avisas, sacan sus armas y se preparan para lo peor. Efectivamente, un instante después un grupo de sectarios caen sobre tu grupo, os defendéis con todas vuestras fuerzas y los derrotáis antes de que puedan causar bajas importantes.";
        parrafo.innerText = texto;
        heroe.style.display = "none";
        heroeperono.style.display = "none";
        noheroe.style.display = "block";
    }
}
//Catedral
function catedral(){
    var parrafo = document.getElementById("parrafo");           // parrafo de la pagina
    var disparar = document.getElementById("disparar");         // boton de disparar
    var mecherazo = document.getElementById("mecherazo");       // boton de tirar mechero
    var esconderse = document.getElementById("esconderse");     // boton de esconderse
    var cubrir = document.getElementById("cubrir");             // boton de cubrir a la compañia
    var seccoro = document.getElementById("seccoro");           // boton de disparar al sectario del coro
    var seclibro = document.getElementById("seclibro");         // boton de disparar al sectario que sostiene el libro
    var secorador = document.getElementById("secorador");       // boton de disparar al sectario que ora las frases del libro
    var solo = localStorage.getItem("Sherlock");                // si has investigado pistas en el parque, es que vas solo
    seccoro.style.display = "none";
    seclibro.style.display = "none";
    secorador.style.display = "none";
    //Si no tienes mechero no tienes la opcion
    if(mechero == "no"){
        mecherazo.style.display = "none";
    }
    //Si no tienes pistola no tienes la opcion
    if(pistola == "no"){
        disparar.style.display = "none";
    }
    //Si vas solo no puede cubrir a nadie
    if(solo == "si"){
        cubrir.style.display = "none";
    //Si no vas solo, cambia el texto
    } else {
        parrafo.textContent += "Se te acerca la persona que más conoce de rituales de toda La Compañía y te pregunta: “¿Portas el símbolo amarillo? El medallón que le fue confiado a tu compañera, ¿lo tienes? Con él puedo hacer un contrahechizo para acabar con todo esto. Solo necesitaría que les distrajéseis y algo de tiempo”.";
        //si tienes medallon se lo das, si o si
        if(medallon == "si"){
            parrafo.textContent += " Le das el simbolo y te preparas para darle el tiempo suficiente.";
        //si no tienes medallon, no se lo das,no o no, y te parten las piernas
        } else {
            parrafo.textContent += " Niegas con al cabeza y os preparáis para el combate inminente.";
        }
        //si no vas solo te haces el valiente y no te escondes, y tampoco disparas
        esconderse.style.display = "none";
        disparar.style.display = "none";
    }
    // si disparas, se muestra la opción de a quien disparar (tu no estas entre esas opciones)
    disparar.onclick = function(){
        var texto = "Es muy posible que no vuelvas a tener la oportunidad de disparar. Elige bien tu objetivo:";
        parrafo.innerText = texto;
        disparar.style.display = "none";
        mecherazo.style.display = "none";
        esconderse.style.display = "none";
        cubrir.style.display = "none";
        seccoro.style.display = "block";
        seclibro.style.display = "block";
        secorador.style.display = "block";
    }
    // si disparas al sectario del coro te lleva al final 1
    seccoro.onclick = function(){
        localStorage.setItem("final","1");
        redir('Epílogos/index.html');
    }
    // si disparas al sectario del libro te lleva al final 1
    seclibro.onclick = function(){
        localStorage.setItem("final","1");
        redir('Epílogos/index.html');
    }
    // si disparas al sectario que ora te lleva al final 4
    secorador.onclick = function(){
        localStorage.setItem("final","4");
        redir('Epílogos/index.html');
    }
    // si te escondes
    esconderse.onclick = function(){
        // si te escondes, y no tienes pistola final 1
        if(pistola == "no"){
            localStorage.setItem("final","1");
            redir('Epílogos/index.html');
        // si te escondes, y tienes pistola final 2
        } else {
            localStorage.setItem("final","2");
            redir('Epílogos/index.html');
        }
    }
    //si tiras el mechero
    mecherazo.onclick = function(){
        //si estas solo
        if(solo == "si"){
            // si tienes pistola final 3
            if(pistola == "no"){
                localStorage.setItem("final","3");
                redir('Epílogos/index.html');
            // si no tienes pistola final 5
            } else {
                localStorage.setItem("final","5");
                redir('Epílogos/index.html');
            }
        //si no estas solo
        } else {
            //si te hemos obligado a entregar el medallon final 7
            if(medallon == "si"){
                localStorage.setItem("final","7");
                redir('Epílogos/index.html');
            //si has pasado de investigar y no has cogido el medallón final 8
            } else {
                localStorage.setItem("final","8");
                redir('Epílogos/index.html');
            }
        }
    }
    // si cubres a la compañia
    cubrir.onclick = function(){
        //si te hemos obligado a entregar el medallon final 6
        if(medallon == "si"){
            localStorage.setItem("final","6");
            redir('Epílogos/index.html');
        //si has pasado de investigar y no has cogido el medallón final 9
        } else {
            localStorage.setItem("final","9");
            redir('Epílogos/index.html');
        }
    }
}
//finales
function epilogos(){
    var parrafo = document.getElementById("parrafo");   // Parrafo de la pagina
    var final = localStorage.getItem("final");          // el final que tiene que hacer
    switch(final){
        //Mueres
        case "1":
            var texto = "No has conseguido el único objetivo que tenías. Y parece que no vas a tener más oportunidades, al acabar el ritual no hay nada más, solo oscuridad.";
            parrafo.innerText = texto;
            break;
        //Mueres tratando de defenderte
        case "2":
            var texto = "El canto se eleva, el tapiz brilla con colores que jamás has visto, colores que se escapan a tu imaginación… Todo se nubla hasta que el trance termina. No sabes cuánto tiempo ha pasado y ves como una sombra se comienza a formar en el centro del círculo de sectarios. Deberías hacer algo, pero apenas te queda tiempo. Sacas tu arma y tratas de defenderte, pero nada puede parar a esa sombra.";
            parrafo.innerText = texto;
            break;
        //Mueres lanzando el mechero
        case "3":
            var texto = "El tapiz arde, la confusión reina, pero la alegría dura poco. No tardan en localizarte y, tras hacerte ver como terminan su ritual, acaban sacrificándote a su nuevo dios.";
            parrafo.innerText = texto;
            break;
        //Detienes el ritual pero mueres
        case "4":
            var texto = "Sabes que has disparado a la persona indicada, puede que hayas caído, pero has detenido el ritual principal. El resto de la humanidad tendrá que hacer el trabajo que te queda en lo que quede del mundo.";
            parrafo.innerText = texto;
            break;
        //Detienes el ritual, pero estás solo
        case "5":
            var texto = "El tapiz prende rápidamente y causas una gran confusión. El humo y el fuego cubren a los sectarios. Disparas hacia su grupo y tras vaciar un par de cargadores, te das cuenta de que has conseguido acabar con todos.";
            parrafo.innerText = texto;
            break;
        //Todo acaba bien, pero muere gran parte de la compañía
        case "6":
            var texto = "Mientras se recita el contra ritual, La Compañía y tu realizáis fuego de cobertura contra los sectarios. Estos se defienden y logran acabar con bastantes fuerzas de La Compañía. Finalmente, vuestro ritual se completa, el tapiz se deshace y su libro arde en llamas. Desesperados, el resto de sectarios se rinden. Ha caído gran parte de La Compañía, pero habéis conseguido frenar el ritual antes de que fuese demasiado tarde.";
            parrafo.innerText = texto;
            break;
        //Todo acaba bien
        case "7":
            var texto = "Gracias al humo y el fuego, los sectarios están demasiado confundidos como para poder defenderse. Las balas de La Compañía caen sobre ellos y conseguís que vuestro ritual se termine sin apenas sufrir bajas. Os anotáis otro éxito, nuevos ascensos y medallas están en camino, pero lo más importante es que habéis detenido el fin del mundo.";
            parrafo.innerText = texto;
            break;
        //No hacéis el contra ritual, pero mechero
        case "8":
            var texto = "A pesar de que no podéis detenerlo del todo, os lanzáis al combate, La Compañía sobrevive en su mayoría, gracias a la confusión que creas al quemar el tapiz. Detenéis este ritual… Ya solo os quedan unos cuantos años recorriendo el mundo para cerrar el resto de portales.";
            parrafo.innerText = texto;
            break;
        // No hacéis el contra ritual, y no mechero:
        case "9":
            var texto = "A pesar de que no podéis detenerlo del todo, os lanzáis al combate. Gran parte de La Compañía cae, pero detenéis este ritual… Ya solo os quedan unos cuantos años recorriendo el mundo para cerrar el resto de portales.";
            parrafo.innerText = texto;
            break;
    }
}