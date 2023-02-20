# BACK-END DE LA RECETTE SOCIAL

## Introducción

Enhorabuena equipo, habéis empezado a desarrollar nuestra aplicación web y estamos bastante satisfechos del trabajo realizado con la base de datos. Ahora nos gustaría que abordaseis la parte del backend de nuestra aplicación. 

Hemos seguido analizando los requerimientos que queremos tener en nuestra aplicación y os los detallamos a continuación

## Requerimientos

### Persona usuaria no registrada

- Puede consultar todas las recetas (UN1)
- Puede seleccionar una receta (UN2)
- Puede buscar una receta por nombre, ingredientes, dificultad, tipo, origen, etc. (UN3)
- Puede ver una lista de las recetas más votadas (UN4)
- Puede ver una lista de las recetas seleccionadas por el sistema según diferentes parámetros (origen, promoción, ingrediente,+vistas) (UN5)
- (UN6) Puede registrarse

### Persona usuaria registrada

- UN1, UN2, UN3, UN4, UN5
- Puede identificarse (UR1)
- Puede ver su perfil (UR2)
- Puede modificar los datos del perfil (UR3)
- Puede recuperar su contraseña (UR4)
- Puede crear una receta (UR5)
    - Puede seleccionar ingredientes de la lista de ingredientes (UR5.1)
- Puede editar una receta creada por ella misma (UR6)
- Puede eliminar una receta si es privada (UR7)
- Puede consultar la lista de sus recetas (UR8)
- Puede añadir una receta de otra persona a lista de favoritas (UR9)
- Puede eliminar una receta de la lista de favoritas (UR10)
- Puede ver la lista de recetas favoritas (UR11)
- Puede votar una receta (UR12)
- Puede eliminar el voto de una receta (UR13)
- Puede añadir un ingrediente de una receta a la lista de la compra (UR14)
    - Si el ingrediente ya existe debe sumar las cantidades (UR14.1)
- Puede eliminar un ingrediente de la lista de la compra (UR15)
- Puede ver la lista de la compra (UR16)
- Puede crear un menú (UR17)
- Puede añadir una receta al menú que haya creado (UR18)
- Puede eliminar una receta de un menú (UR19)
- Puede eliminar un menú (UR20)
- Puede crear un grupo (UR21)
- Puede eliminar un grupo que haya creado si no tiene ninguna persona asignada (UR22)
- Puede editar un grupo que haya creado si no tiene personas asignadas (UR23)
- Puede añadir recetas a un grupo al que pertenece (UR24)
- Puede aceptar una invitación para pertenecer a un grupo (UR25)
- Puede ver todas las recetas de un grupo al que pertenece (UR26)
- Puede salir de un grupo (UR27)
- Puede comentar una receta de otra persona (UR28)
- Puede ver todos los comentarios de una receta ordenados por fecha de más reciente a más antiguo (UR29)
- Puede configurar el nivel de notificaciones en el área de notificaciones de su perfil (UR30)
- Puede ver las notificaciones que le han enviado (UR31)
- Puede enviar una notificación de pertenencia a un grupo que haya creado ella misma, a otra persona registrada (UR32)
    - Puede buscar a una persona por su nick (UR32.1)
- Puede compartir una receta con otra persona registrada (UR33)
    - Puede buscar a una persona por su nick (UR32.1)

### Persona administradora

- Puede hacer un CRUD de una receta (A1)
- Puede hacer un CRUD de una persona usuaria (A2)
- Puede hacer un CRUD de un menú (A3)
- Puede hacer un CRUD de un grupo (A4)
- Puede hacer un CRUD de una lista de la compra (A5)
- Puede hacer un  CRUD de un ingrediente (A6)
- Puede hacer un CRUD de una notificación (A7)
- Puede hacer un CRUD de una insignia (A8)
- Puede asignar insignias (A9)
- Asigna niveles de notificaciones (A10)

### Sistema

- Cuando se selecciona una receta se incrementa en 1 el valor de vistas de la receta (S1)
    - Depende de UN2
- Notifica a las personas usuarias registradas y con los checks de notificaciones marcados cuando se cumple algún parámetro marcado por la administradora del sitio (Añade un registro a las notificaciones del usuario) (S2)

## Requerimientos técnicos

 Desarrollar una API REST con el framework [Nest](https://docs.nestjs.com/first-steps) y una base de datos que puede ser relacional ([MySQL](https://dev.mysql.com/doc/mysql-getting-started/en/)) o no relacional ([MongoDB](https://docs.mongodb.com/manual/tutorial/getting-started/)). 

La API se documentará con el formato [OpenAPI](https://www.openapis.org/) ([Swagger](https://swagger.io/tools/open-source/getting-started/))

La API tiene que tener tests unitarios y de integración.

# Entregables

- Repositorio de GitHub
- Wiki dentro del repositorio con:
    - Info de las presentaciones
    - información de los endpoint de la API
    - Diseños y modelos de la base de datos
    - Enlace al Trello con las historias de usuario, criterios de aceptación y las tareas.
- URL de producción de la API

# Modalidad

- Trabajo en grupo
- Tiempo máximo 2 semanas - Entrega 31/01/2023
- Presentación 20’: contexto del proyecto, pruebas de la API (tests y peticiones al servidor tipo Postman) y aprendizajes.