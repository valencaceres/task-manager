# task-manager

Esta aplicacion esta creada segun las consignas. Utiliza react para el frontend, con tailwind para los styles (ademas de lucide-react para los iconos), y express para el backend. Para la seguridad implemente dos middlewares, uno que utiliza una key generada con uuid4. Tiene 2 rutas en el front, Home (/), Edit (/edit)

Desde el frontend, en la vista del home, posee un formulario para la creacion de tareas, asi como un check para marcar las tareas pendientes como completadas. Ademas de eso, existen dos botones mas, uno para editar y otro para eliminar la tarea. Al momento de editar, la pagina te redirecciona a la ruta /edit, en esta se utiliza otro formulario que luego de darle al boton de editar, te redirecciona nuevamente al Home, para ver todas las tareas, junto con la editada. 

Utilice zustand para el manejo de estados globales, y dividi todo el proyecto en carpetas para mantener una organizacion adecuada.
