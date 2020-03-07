

# React.js

## ¿Qué es React.js?

Es una biblioteca de JS para crear interfaces de usuario (según su sitio oficial).
* React cumple su función como biblioteca ya que para utilizar su código se debe importar, llamar funciones, utilizar sus herramientas...
* También es un Framework aunque las convenciones de cómo debe ser organizado todo no son estrictas.

**React es declarativo**, lo que quiere decir que se le indica qué debe hacer pero no cómo debe hacerse, ahorrando de esta manera muchos pasos.

**JSX es HTML dentro de Javascript**, esto se verá más adelante en detalle.

React está estructurado por **componentes** que son como pequeños bloques de lego que al ser unidos forman aplicaciones de React. Estos componentes pueden tener estilos, ser enlazados a eventos y sus estados pueden ser modificados.

Con React también se tiene la ventaja de que **será escrito una sola vez** y podrá ser utilizado en aplicaciones web, móviles, entre otras.

**Aprendelo una vez... Escribelo donde sea.**

## Platzi badges
Es un proyecto/aplicación que permite tener un manejo de la asistencia de la conf, permitirá agregar nuevos usuarios, nuevos participantes, crear sub-badges, editar su información y poder manejarla.

## Herramientas
* **React developer tools**: Permite ver código de react en el navegador.
* **Prettier**: Hace que el código se vea bien y no preocuparnos por como lo escibimos.
* **create-react-app**: Es un CLI oficial de React, desarrollado por Facebook y presentado hace algunas semanas. Te permite, como su nombre lo dice, crear aplicaciones de la forma más rápida posible, y con cero configuraciones que se instala desde linea de comandos.

```
npm i -g create-react-app
```

git clone --single-branch --branch 1.ReactDOM.render https://github.com/Sparragus/platzi-badges.git

## ReactDOM.render - v6
React y ReactDOM trabajarán en conjunto.

    * React como análogo a createElement.
    * ReactDOM a appendChild
**ReactDOM.render()** toma dos argumentos: Qué queremos renderizar y dónde lo queremos renderizar.

Siempre que escribas JSX es requisito importar React.

## JSX  -v7
JSX es azucar sintactica, es una extensión de JavaScript creada por Facebook para el uso con la biblioteca React. Sirve de preprocesador (como Sass o Stylus a CSS) y transforma el código generado con React a JavaScript.

Para JSX hay alternativa, es **'React.createElement'** pero... 

JSX es:
* Más legible
* Más expresivo

Ambos tienen el mismo poder y capacidad.


React.createElement recibe 3 argumentos:

* El tipo de elemento que estamos creando
* sus atributos o props
* y el children que es el contenido.

**Ejemplo de React.createElement:**
```
import React from 'react';
import ReactDOM from 'react-dom';

//const element = React.createElement('tipoDeElemento', {atributos/props}, 'El children')<h1>

const element = React.createElement(
    'a', 
    { href: 'https://jorgesalamanca.com'}, 
    'Web de jorgelisapa.'
    );

const container = document.getElementById('app');

// ReactDOM.render(__qué__, __dónde__);
ReactDOM.render(element, container);
```
Ejemplo con jsx:

```
const jsx = <h1>Hello, Soy {variables/funciones/expresiones}</h1>;

const jsx = <h1>Hello, Soy @Jorgelisapa</h1>;
```

En JSX se utilizan las llaves para introducir variables o expresiones de Javascript. Lo que sea que esté adentro se va a evaluar y su resultado se mostrará en pantalla.

Las expresiones pueden ser llamadas a otras funciones, cálculos matemáticos, etc. Si las expresiones son false, 0, null, undefined, entre otros, no se verán.

## ¿Qué es un componente? - v8

**Los componentes en React son bloques de construcción.**
Las aplicaciones hechas con React son como figuras de Lego. Junta varias piezas (componentes) y puedes construir un website tan pequeño o tan grande como quieras.
Los componentes serán barras de búsquedas, enlaces, encabezados, el header, etc.

### ”Componente” vs “elemento
Un elemento es a un objeto como un componente es a una clase. Si el elemento fuera una casa, el componente serían los planos para hacer esa casa.

En términos técnicos el componente es una clase y el elemento un objeto.

### Identificación de componentes
Para identificarlos debes hacerte las siguientes preguntas:

* **¿Qué elementos se repiten?:**
ej:

    * Elementos en una lista
    * Elementos que comparten un aspecto visual y su funcionalidad.

* **¿Qué elementos cumplen una función muy específica?:**
Ej: 

    * Estos sirven para encapsular la lógica 
    * Permiten juntar muchos comportamientos y aspectos visuales en un solo lugar.

> Identificar componentes es una habilidad esencial para poder desarrollar aplicaciones de React.

## Que es y como funciona un componente en React?

### Motaje
*Es el primer paso del ciclo de vida de un componente.* La primera vez que un usuario llega a nuestra app o web aparecen muchos de nuestros componentes.

### Actualización
Pasa cuando los componentes sufren un cambio. Cuando estos se actualizan se ejecuta el ```render()``` y se genera el nuevo DOM y por ultimo react envia una señal de confirmación llamada
* ```componentDidUpdate()```: se invoca inmediatamente después de que la actualización ocurra. Este método no es llamado para el renderizador inicial.

* ```componentWillUnmount()```:Este método es llamado cuando un componente se elimina del DOM

ReactDOM.render: Pide un elemento, es de recordar que un componente es un```Componente``` y un elemento se representa ```<Elemento />```
Quedaría así: 

```ReactDOM.render(<elemento />, container);```

```ReactDOM.render(__qué__, __dónde__);```

## Props - v12
En React tenemos los **props** que es la forma corta de properties **son argumentos de una función** y en este caso serán los atributos de nuestro componente como class, src, etc. Estos vienen siendo sus análogos en HTML

Estos props salen de una variable de la clase que se llama this.props y los valores son asignados directamente en el ReactDOM.render().

