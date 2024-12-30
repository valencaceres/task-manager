# Task Manager

Esta aplicación está creada según las consignas. Utiliza React para el frontend, con Tailwind para los styles (además de lucide-react para los iconos), y Express para el backend. 

Para la seguridad, implementé dos middlewares, uno que utiliza una key generada con `uuid4`. Tiene 2 rutas en el front: 

- **Home** (`/`)
- **Edit** (`/edit`)

Desde el frontend, en la vista del home, posee un formulario para la creación de tareas, así como un check para marcar las tareas pendientes como completadas. Además de eso, existen dos botones más, uno para editar y otro para eliminar la tarea. 

Al momento de editar, la página te redirecciona a la ruta `/edit`. En esta, se utiliza otro formulario que, luego de darle al botón de editar, te redirecciona nuevamente al Home, para ver todas las tareas, junto con la editada.

Utilicé Zustand para el manejo de estados globales, y dividí todo el proyecto en carpetas para mantener una organización adecuada.

## Estructura del Frontend

El frontend posee las siguientes carpetas dentro de `/src`:

### `/components`

Mi metodología es crear 3 carpetas en este directorio:

- **Functional**: Suele ser para almacenar componentes funcionales, es decir, componentes que luego serán importados directamente a Pages. En este caso, no la utilicé debido a la poca cantidad de pages.
- **Layout**: En esta carpeta se almacenan todos los layouts. En este caso, hay uno solo, pero si hubieran más, irían acá.
- **UI**: En esta carpeta se almacenan todos los componentes UI, ejemplo: Buttons, Tables, etc.

### `/interfaces`

En esta carpeta se almacenan todas las interfaces. Esta carpeta va de la mano con la carpeta `store`.

### `/pages`

En esta carpeta se almacenan todas las pages que poseen una ruta directa en el front. Ejemplo: `Home.tsx` y `Edit.tsx` poseen sus respectivas rutas `/` y `/edit`.

### `/store`

Directorio utilizado para almacenar todo el manejo de estados globales con Zustand. Posee una carpeta `hooks` en la que se almacenan todos los hooks.

- **/hooks**: Posee un `index.tsx` en el que se exportan todos los hooks, y además, se encarga de contener cada archivo de hook, ejemplo: `useTask.tsx`, `useUser.tsx`.

### `/utils`

En esta carpeta guardo todos los archivos de utilidad. En este caso son:

- **apiInstance.ts**: Un archivo en el que guardo una instancia a la API, haciendo que de esta forma sea más fácil hacer las llamadas a la API con Axios.
- **cn.ts**: Archivo encargado de manejar la lógica de `cn`, para poder utilizar estilos de Tailwind y estilos locales en un mismo `className`.
- **config.ts**: Archivo en el que almaceno todas las variables de entorno para poder acceder más fácilmente a ellas.

La url de la API es la siguiente:
https://task-manager-lk30.onrender.com

