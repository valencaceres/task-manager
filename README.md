# task-manager

Esta aplicacion esta creada segun las consignas. Utiliza react para el frontend, con tailwind para los styles (ademas de lucide-react para los iconos), y express para el backend. Para la seguridad implemente dos middlewares, uno que utiliza una key generada con uuid4. Tiene 2 rutas en el front, Home (/), Edit (/edit)

Desde el frontend, en la vista del home, posee un formulario para la creacion de tareas, asi como un check para marcar las tareas pendientes como completadas. Ademas de eso, existen dos botones mas, uno para editar y otro para eliminar la tarea. Al momento de editar, la pagina te redirecciona a la ruta /edit, en esta se utiliza otro formulario que luego de darle al boton de editar, te redirecciona nuevamente al Home, para ver todas las tareas, junto con la editada. 

Utilice zustand para el manejo de estados globales, y dividi todo el proyecto en carpetas para mantener una organizacion adecuada.

El front posee las siguientes carpetas dentro de /src:

/components: Mi metodologia es crear 3 carpetas en este directorio. Functional, layout y ui. Functional suele ser para almacenar componentes funcionales, es decir, componentes que luego seran importados directamente a Pages. En este caso no la utilice debido a la poca cantidad de pages.
  /layout: En esta carpeta se almacenan todos los layouts, en este caso hay uno solo, pero si hubieran mas, irian aca.
  /ui: En esta carpeta se almacenan todos los componentes ui, ejemplo, Buttons, Tables, etc.
/interfaces: En esta carpeta se almacenan todas las interfaces, esta carpeta va de la mano con la carpeta store.
/pages: En esta carpeta se almacenan todas las pages que poseen una ruta directa en el front. Ejemplo: Home.tsx y Edit.tsx poseen sus respectivas rutas / y /edit.
/store: Directorio utilizado para almacenar todo el manejo de estados globales con zustand. Posee una carpeta hooks en la que se almacenan todos los hooks.
  /hooks: Posee un index.tsx en el que se exportan todos los hooks, y ademas, se encarga de contener cada archivo de hook, ejemplo, useTask.tsx, useUser.tsx.
/utils: En esta carpeta guardo todos los archivos de utilidad, en este caso son:
  apiInstance.ts: un archivo en el que guardo una instancia a la api, haciendo que de esta forma sea mas facil hacer las llamadas a la api con axios.
  cn.ts: archivo encargado de manejar la logica de cn, para poder utilizar estilos de tailwind y estilos locales en un mismo className.
  config.ts: archivo en el que almaceno todas las variables de entorno para poder acceder mas facilmente a ellas.

