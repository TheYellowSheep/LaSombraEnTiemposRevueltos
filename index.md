<!DOCTYPE html>
<html lang="es">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <!--Redirección a la página de inicio de aventura, delay de 6 segundos-->
    <meta http-equiv="refresh" content="6;URL=Azotea/index.html">
    <title>La sombra en tiempos revueltos</title>
    <!--Archivo con css-->
    <link rel="stylesheet" href="Recursos/main.css">
</head>
<!--Al cargar el body,se ejecutará la función de vaciar inventario del archivo de javascript-->
<body onload="vaciar_inventario()">
    <span id="ritual1" class="ritual">El ritual ha terminado</span>
    <span id="ritual2" class="ritual">Y ha sido un éxito</span>
    <img id="simbolo" src="Recursos/Imagenes/signo_raro.png" alt="">
    <!--Script de javascript-->
    <script src="Recursos/Action.js"></script>
</body>
</html>
