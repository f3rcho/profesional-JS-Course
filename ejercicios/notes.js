
// 14 - Cómo funciona el JavaScript Engine
/* Una vez tenemos el AST ahora hay que convertirlo a Bytecode.

Bytecode es como el código assembler pero en lugar de operar en el procesador opera en la máquina virtual V8 del navegador.

Machine code es el más bajo nivel, es código binario que va directo al procesador.

El profiler se sitúa en medio del bytecode y el optimizador

Cada máquina virtual tiene sus particularidades, por ejemplo V8 tiene algo llamado Hot Functions.

Cuando una sentencia función es ejecutada muy frecuentemente, V8 la denomina como una hot function y hace una optimización que consiste en convertirla a machine code para no tener que interpretarla de nuevo y agilizar su ejecución.

Cada navegador tiene su implementación de JavaScript Engine:

SpiderMonkey - Firefox
Chackra - Edge
JavaScriptCore - Safari
V8 - Chrome
*/
// 15
/* Event Loop
El Event Loop hace que Javascript parezca ser multihilo a pesar de que corre en un solo proceso.

Javascript se organiza usando las siguientes estructuras de datos:

Stack. Va apilando de forma organizada las diferentes instrucciones que se llaman. Lleva así un rastro de dónde está el programa, en que punto de ejecución nos encontramos.
Memory Heap. De forma desorganizada se guarda información de las variables y del scope.
Schedule Tasks. Aquí se agregan a la cola, las tareas programadas para su ejecución.
Task Queue. Aquí se agregan las tares que ya están listas para pasar al stack y ser ejecutadas. El stack debe estar vacío para que esto suceda.
MicroTask Queue. Aquí se agregan las promesas. Esta Queue es la que tiene mayor prioridad.
El Event Loop es un loop que está ejecutando todo el tiempo y pasa periódicamente revisando las queues y el stack moviendo tareas entre estas dos estructuras.
*/

// 16
/* Promesas
Para crear las promesas usamos la clase Promise. El constructor de Promise recibe un sólo argumento, un callback con dos parámetros, resolve y reject. resolve es la función a ejecutar cuando se resuelve y reject cuando se rechaza.

El async/await es sólo syntax sugar de una promesa, por debajo es exactamente lo mismo.

La clase Promise tiene algunos métodos estáticos bastante útiles:

Promise.all. Da error si una de las promesas es rechazada.
Promise.race. Regresa sólo la promesa que se resuelva primero.
*/

//17
// Getters y setters
// Los getters y setters son funciones que podemos usar en un objeto para tener propiedades virtuales. Se usan los keywords set y get para crear estas propiedades.

// Estas propiedades al ser funciones pueden llevar una validación de por medio y ser usadas con el operador de asignación como si fueran una variable más dentro del objeto.

// Ejecuta el plugin AutoPlay
    _initPlugins(){
      const player = {
        // this hace referencia a player que es el
        // objeto que ejecuta esta parte del codigo
        play: () => this.play(), 
        pause: () => this.pause(),
        media: this.media, // debe ser definido media, porque se pierde su referencia

        // get permite acceder a la propiedad muted desde fuera
        // en este caso "if (!player.muted)"" accede desde Autoplay.js
        getmuted () {
          returnthis.media.muted;
        },

        // set permite modificar una propiedad desde fuera
        // en este caso  "player.muted = true" desde Autoplay.js
        // donde true es el valor que se le va dar a la propiedad
        setmuted(value) {
          this.media.muted = value;
        },
      };
      
      this.plugins.forEach(plugin => {
        plugin.run(player);
      });
    };

