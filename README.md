# HEALTH SYSTEM 


Health system version 1.0 react native

Aplicacion

La funcion principal de la aplicacion es ver informacion de salud asi como ejercicios para mantener un nivel de salud estable para los usuarios.
Aplicacion de salud creada con react native y expo.

Ejercicios

Esta aplicacion cuenta con un sistema para visualizar videos de rutinas guardados en la nube los cuales se pueden pausar o reproducir, este apartado cuenta con un cronometo para medir el tiempo de actividad asi como un boton para guardar en la base de datos local el progreso de este.

Informacion

El apartado de informacion cuenta con datos informativos de interes para los usuarios.

Historial

Se puede visualizar los Ejercicios que el usuario a realizado a lo largo de su uso en la aplicacion.

Login

se pueden crear cuentas con mail autenticado por firebase.


Codigo

A lo largo de la aplicacion se utilizaron deferentes paquetes los cuales se pueden encontrar en packagejson estos fueron de gran utilidad para cumplir el objetivo de la aplicacion,
la aplicacion esta organizada de la siguiente forma:

.-Se verifica si el usuario esta logeado dentro de la aplicacion, en dicho caso que no se manda al archivo de AuthNavigaton.js
   .-Este manda automaticamente al usuario al archivo de LoginScreen.js
      .-Se muestra la pantalla donde este mostrara 2 inputs en los cuales se guardara el value dentro de un useState, se verifica si el usuario existe dentro de firebase si no mandara una alerta
      .-Si el usuario pulsa Register este abrira el archivo Register.js
