# Creando una Red Social - TRAVELLX 🌎📱

## Índice

- [1. Introducción](#1-introducción)
- [2. Resumen del Proyecto](#2-resumen-del-proyecto)
- [3. Historias de Usuario](#3-historias-de-usuario)
- [4. Prototipo de Baja Fidelidad](#4-prototipo-de-baja-fidelidad)
- [5. Prototipo de Alta Fidelidad](#5-prototipo-de-alta-fidelidad)
- [6. Test de Usabilidad](#6-test-de-usabilidad)

----
## 1. Introducción

**Travellx** es una app que pretende conectar a quienes disfrutan de compartir sus experiencias de viaje, así como quienes busquen recomendaciones para sus nuevas aventuras.
Esta red social permite que Los usuario/as ingresen al muro después de registrarse con su email y password, además de un nombre de usuario para tener acceso al muro donde podrán visualizar los posts de otros usuarios. Además, podrán interactuar creando posts, modificándolos y eliminándolos de ser necesario.

## 2. Resumen del Proyecto

En este proyecto se construyó una Single Page Application (SPA) aplicando responsividad para el desarrollo de los templates con la técnica movil first, se implementó un router para la navegación entre las diferentes vistas de la app.

La lógica del proyecto se implementó completamente en Vanilla JavaScript puro o Vanilla JS (ES6+), HTML y CSS. Se empleó Firebase como servicio externo para la persistencia de datos y autenticación de los usuarios.

La app se desplegó en _Netlify_. Te invito a visitarla y conocerla [aquí](https://travellxapp.netlify.app/)

## 3. Prototipo de Baja Fidelidad

Para el diseño de la interfaz de usuario se realizó un prototipo a mano alzada de las primeras vistas a diseñar, los cuales se puede ver [aquí](https://miro.com/app/board/uXjVPsX9ero=/)

## 4. Prototipo de Alta Fidelidad

El prototipo de alta fidelidad se realizó en FIGMA, y se tomó  en cuenta 2 paletas de colores de las cuales se eligió los tonos que se visualizan, [aquí, el enlace](https://www.figma.com/file/qhI57IFXkUSYE9a1iwl2J2/Social-Network-%7C-Travellx?type=design&node-id=0-286&t=54K1AbzjOjGpR7C8-0)

(![Colors palette](<src/Imagenes/Colors Palette.png>))
![Login View](<src/Imagenes/Vista Login_Android Large - 1.png>)
![Register View](<src/Imagenes/Vista Register_Android Large - 2.png>)
![Wall View](<src/Imagenes/Vista Wall_Android Large - 3.png>)

## 5. Historias de Usuario
### 5.1 Usuarias: 
Usuaria viajera:
Mujeres con experiencia viajando, que disfruten compartiendo sus experiencias, además de tips e información de sus viajes .
Usuaria no vijera: 
Mujeres que quieran aventurarse a viajar y conocer diferentes lugares, que no tengan experiencias viajeras y busquen referencias o  recomendaciones que le brinden seguridad y motivación de salir de su rutina y animarse a iniciar su aventura.

### 5.2 Historia de Usuario 1:
**Yo como** como usuaria viajera **quiero poder** loguearme **para** ingresar a la red social de viajeros.

**Criterios de aceptación**
- El usuario accede a la vista **_login_**.
- El usuario puede loguearse con su email y password.
- El usuario puede ingresar su password oculto para su seguridad.
- El usuario puede acceder al login desde cualquier dispositivo (Pc, Tablet y Móvil).
### 5.3 Historia de Usuario 2:
**Yo como** amante de los viajes, **quiero poder** registrar una cuenta **para** ingresar a la red social Travellx.

- El usuario accede a la vista **_registro_**.
- El usuario puede registrarse con su email, un usuario y un password.
- El usuario puede acceder al login desde cualquier dispositivo (Pc, Tablet y Móvil).
### 5.4 Historia de Usuario 3:
**Yo como** usuaria viajera **quiero poder** ver sugerencias de lugares de otras usuarias, **para** conocer en un próximo viaje.

**Criterios de aceptación:**
- La usuaria al ver sus publicaciones debería encontrar un pequeño botón “editar” que al hacer clic le permite editar la publicación, para luego hacer clic en el botón “publicar / guardar cambios”.

### 5.5 Historia de Usuario 4:
**Yo como** usuaria viajera **me gustaría poder** postear mis lugares visitados, **para** dar a conocer a otras usuarias que como yo desean sugerencias de lugares a visitar.


**Criterios de aceptación:**
- La usuaria debería poder encontrar una opción para eliminar la publicación realizada.
- La usuaria tendría que confirmar la eliminación de la publicación (aparecerá mensaje y el botón “confirmar”).

### 5.6 Historia de Usuario 5:
**Yo como** usuaria de la RS Travellx, **quiero tener** la opción a editar mis posts **para** modificarlos si fuera necesario.

Criterios de aceptación:
- La usuaria debería encontrar una botón de “like” en las publicaciones que aparezcan en el inicio, y poder darle clic solo una vez.
- La usuaria debería poder ver la cantidad de “likes” que tiene la publicación.

### 5.7 Historia de Usuario 6:
**Yo como** usuaria de la RS Travellx, **quiero tener** la opción de eliminar mis posts, **para** quitarlos del muro si fuera necesario.

### 5.8 Historia de Usuario 7:
**Yo como** usuaria de la RS Travellx, **quiero tener** la opción de darle like a los posts **para** interactuar con las demás usuarias.