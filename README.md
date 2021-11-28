# app-examen

## Instalacion del proyecto 

En una consola apuntando a la carpeta en donde desee alojar el proeycto ejecute en orden:
'''
npm install -g @ionic/cli cordova-res (Para esto debemos tener instalado node-js)

git clone https://github.com/Ccaris2016/app-examen.git app-examen

cd app-examen && npm install && ionic serve (estos comandos si no puede ingresalos en conjunto, se recomienda ingresarlos uno a uno)
'''
para este punto al ejecutar ionic serve se abrira en el navegador con el contenido de la app, sin embargo de no hacerlo, la pagina se puede ver en localhost:8100.

## características

La app cuenta con un buscador (mas adelante se explicaran los problemas del mismo) y una zona de chat en donde una persona pueda tener contacto con alguien de soporte tecnico.

## Bugs reconocidos

A la hora de realizar la busqueda estas se acumulan hasta el infinito, al parecer Ionic toma caracterizticas de angular (en lo que base en proyecto) sin embargo no las toma o implementa del todo, me explico, en angular para asociar el valor de un input con un valor en typescript se utiliza "[(ngmodel)]" sin embargo en ionit esta manera da error y el valor debe ser entregado en forma de evento, ademas de que los eventos son en forma de keyup.xKey, con esto me refiero a que ionic detecta la pulsacion de teclas o de una tecla en especifico, por lo que la funcion de busqueda se realiza en cada una de las pulsaciones de una tecla, por lo que hay algunas cosas que tuve que desaprender para poder volver aprenderlas, se poco de angular y al parecer se aun menos de ionic, sin embargo lo encontre un framework muy potente, complejo pero con muchas capacidades, ademas tiene una exelente documentacion.

