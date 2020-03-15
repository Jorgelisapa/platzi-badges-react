

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
En React tenemos los **props** que es la forma corta de properties **son argumentos de una función** y en este caso serán los atributos de nuestro componente como class, src, etc. Estos vienen siendo sus análogos en HTML. atributos == props

Estos props salen de una variable de la clase que se llama this.props y los valores son asignados directamente en el ReactDOM.render().

## Enlazando eventos - v14

### input tiene *onChange={this.handleChange}*
React dispone de **eventos**. Cada vez que se recibe información en un input se obtiene un evento ```onChange``` y se maneja con un método de la clase ```this.handleChange```.

Ejemplo:

```
<input onChange={this.handleChange} className='form-control' type="text" name='firstName'/>
```
Para ello hay que crear el metodo que recibe el evento y podremos ver el valor:
```
    handleChange = reciveEvento => {
        console.log({ reciveEvento});
    }
```
De este modo registrará un evento en cada tecleo sin mostrar valor ingresado.

Si queremos ver el valor de lo que estamos escribiendo debemos escribir:
```
    handleChange = reciveEvento => {
        console.log({ value: reciveEvento.target.value });
    }
```

Otro valor que vale la pena saber es el ```name``` del input que causó este evento.

```
handleChange = reciveEvento => {
        console.log({ 
            name: reciveEvento.target.name,
            value: reciveEvento.target.value 
        });
    }
```

### button - *onClick={this.hadleClick}*
Los elementos button también tienen un evento que es **onClick**.


Ejemplo: 
```
<button onClick={this.handleClick} className="btn btn-primary">Save</button>
```
Para ello hay que crear el metodo que recibe el evento, excepto que esta vez no hay ```value``` ni un ```name```. Solo podemos decir que algo sucedió.

```
    handleClick = reciveEventoClick => {
        console.log('Button was Clicked');
    };
```
De este modo intentará enviar, recargará la pagina y borrara lo que se hábia escrito.
Cuando hay un botón dentro de un formulario, este automáticamente será de tipo **submit**. Si no queremos que pase así hay dos maneras de evitarlo: especificando que su valor es de tipo **button** o manejándolo desde el formulario cuando ocurre el evento **onSubmit**.
```
    <button 
    type='button' 
    onClick={this.handleClick} 
    className="btn btn-primary">
        Save
    </button>
```
Ahora ```onSubmit```
```
    <form onSubmit={this.handleSubmit}>
        ...
    </form>
```

Para ello hay que crear el metodo que recibe el evento. Si nosotros NO queremos que ese formulario se envíe tenemos que hacer el ```.preventDefault();``` del evento.

```
    handleSubmit = reciveEventoSubmit => {
        reciveEventoSubmit.preventDefault();
        console.log("Form was submitted")
    };
```
Y en el button:
```
    <button 
    type='submit'  //propiedad por defecto 
    onClick={this.handleClick} 
    className="btn btn-primary">
        Save
    </button>
```
Todo esto se llama **enlazar eventos**. Estamos conectando la accion que esta haciendo el usuario con los componentes de react.
 
## Manejo del estado

Hasta esta clase todos los componentes han obtenido su información *a través de props que vienen desde afuera* (otros componentes) pero hay otra manera en la que los componentes pueden producir su propia información y guardarla para ser consumida o pasada a otros componentes a través de sus props. La clave está en que la información del **state** a otros componentes pasará en una sola dirección y podrá ser consumida pero no modificada.

Para guardar la información en el estado se usa una **función de la clase component llamada ```setState```** a la cual se le debe pasar un objeto con la información que se quiere guardar.

```
    handleChange = e => {
        this.setState({
            firstName: e.target.value,
        })
    };
    // e es = a reciveEvento, abreviado
```
De este modo cada uno de los campos llamará a un solo input, es este caso firstName y eso representa un problema, así que tenemos que hacer que cada espacio guarde su información con algo como ```[e.target.name]``` que recibira el evento y permitirá guardar la información según el ```name``` del campo.
```
this.setState({
    [e.target.name]: e.target.value,
    });
};
```
Aunque no se ve, la información está siendo guardada en dos sitios. Cada input guarda su propio valor y al tiempo la está guardando en ```setState```, lo cual no es ideal. Para solucionarlo hay que modificar los inputs de un estado de no controlados a controlados. Esto lo logramos pasandole un prop adicional a cada input llamado ```value``` el cual tendra que leer del state y lo hace con ```this.state``` en este caso leyendo un input llamado 'firstName' (par escribirlo se usa ```this.setState```) y así para cada uno de los inputs solo cambiando su name.
```
value={this.state.firstName}
```
De este modo es muy posible que de error ya que intenta leer el estado de estos pero primero es necesario inicializarlo. Esto lo podemos hacer en cualquier linea de nuestro componente (preferiblemente en la primera del componente) con un objeto vacío, así:
```
state = {};
```
Tambien podemos inicializar el estado con un valor por defecto como por ejemplo: 
```
state = {jobTitle: 'Designer',};
```
con lo que su estado siempre se inicializara con 'designer' pudiendose cambiar. Esto es gracias a tener el estado de los imput en modo controlado.

CONCLUCIÓN: 
* **setState:** Se usa para escribir el estado
* **state:** Se usa para leer el estado.

Esto es algo importantisimo en todo lo hecho en react.

## Levantamiento del estado - v16

Levantar el estado es una técnica de React que *pone el estado en una localización donde se le pueda pasar como props a los componentes*. Lo ideal es poner el estado en el lugar más cercano a todos los componentes que quieren compartir esa información.

En el caso de este proyecto queremos compartir el estado del form con el BadgeNew, para ello hay que poner el estado al nivel de la pagina que es donde está el BadgeNew y el BadgeForm.

Forma 1: Se hace una copia del estado del form, igualarlo al estado actual, luego editarlo diciendo que nextForm va tener el valor en la llave que va ser igual al siguiente valor, paraa luego a form asignarle nextForm.
```
    state = { form: {} };

    handleChange = e => {
        const nextForm = this.state.form
        nextForm[e.target.name] = e.target.value;

        this.setState({
            form: nextForm,
        });
    };
```
Forma 2: Dejando caer todo los valores que tenia el form anteriormente y añadirle uno nuevo o sobreescribimos el que ya estaba guardado.
```
        this.setState({
            form: {
                ...this.state.form,
                [e.target.name]: = e.target.value;

            },
        });
    };
```
Aun cuando los datos ingresados en el formulario no se sobreescriben, se siguen perdiendo/borrando, aquí ya no debe ser BadgeForm que guarde el state sino BadgeNew.

Cuando la consola da un Warning de que un componente paso de ser controlado a no controlado se soluciona inicilizando los valores del formulario a un string vacio:
```
    state = { form: {
        firstName: '',
        lastName: '',
        twitter: '',
        jobTitle: '',
    } };
```

Algo interesante que le da el nombre a React es su parte de “reactivo” ya que cada vez que hay un cambio en el estado o en los props que recibe un componente se vuelve a renderizar todo el componente y todos sus descendientes. Entonces, cada vez que el ```state``` cambia, va cambiar BadgeNew porque se va volver a renderizar y junto a el, BadgeForm.

Ahora para que los cambios hechos en el form se rendericen en el Badge en tiempo real, solo tendremos que en lugar de dejarle unos valores en comcreto le compartamos el estado del form al badge.

Ahora tenemos la informacion del formulario en un lugar/posición en donde se permite compartir a más de un componente, movimos el estado del BadgeForm a la pagina BadgeNew quien ahora le está compartiendo esa información al Badge y al BadgeForm o Formulario. Tecnica usada constantemente mientras vamos ajustando nuestras aplicaciones y haciendo la información disponible a más partes/componentes.

## React router - v18

Las aplicaciones que se trabajan en React son llamadas ***single page apps***. Esto es posible gracias a **React Router** que es una **librería Open Source.**

* **Multi Page Apps**: Cada página implica una petición al servidor. La respuesta usualmente tiene todo el contenido de la página.

* **Single Page Apps (SPA)**: Aplicaciones que cargan una sola página de HTML y cualquier actualización la hacen re-escribiendo el HTML que ya tenían.

* **React Router (v4)**: Nos da las herramientas para poder hacer SPA fácilmente. Usaremos 4 componentes:

    * **BrowserRouter**: es un componente que debe estar siempre lo más arriba de la aplicación. Todo lo que esté adentro funcionará como una SPA.
    * **Route**: 
        * Cuando hay un match con el **path**, se hace render del **component**. 
        * El component va a recibir tres props: **match, history, location.**
    * **Switch**: 
        * Dentro de Switch solamente van elementos de Route. 
        * Switch se asegura que solamente un Route se renderize.
    * **Link**: 
        * Toma el lugar del elemento < a >,
        * evita que se recargue la página completamente y 
        * actualiza la URL.

## División de la aplicación en rutas
Lo primero es instalar react router dom, para instalar versiones antiguas se especifica al final del comando.

Más reciente:
```
npm i react-router-dom
```
Anterior (usada en este proyecto):
```
npm i react-router-dom@4.3.1
```
* **Link** internamente tiene un elemento < a > pero va a interceptar el clic para navegar de manera interna sin refrescar toda la página.

## Mejorando la user interface con un Layout - v20

**React.Fragment** es la herramienta que te ayudará a renderizar varios componentes y/o elementos sin necesidad de colocar un div o cualquier otro elemento de HTML para renderizar sus hijos. Al usar esta característica de React podremos renderizar un código más limpio y legible, ya que ``React.Fragment` no se renderiza en el navegador.

Otra forma de hacer que todas tus URL’s que no existan sean redirigidas a tu componente de 404 sería de la siguiente forma:

import { Redirect, Route } from "react-router-dom";

<Route path="/404" component={MiComponente404} />
<Redirect from="*" to="/404" />
Como podemos observar llamamos a nuestro componente 404 y luego utilizamos Redirect, el cual es un componente de React Router para hacer redirecciones; en este caso hacemos que todas las URL’s que no correspondan a alguna que hayamos declarado, sean redirigidas a MiComponente404.

## Introducción ciclo de vida de un componente
* Cuando React renderiza los componentes decimos que entran en escena, 
* Cuando su estado cambia o recibe unos props diferentes se actualizan y 
* Cuando cambiamos de página se dice que se desmontan.

-

* Montaje:

Representa el momento donde se inserta el código del componente en el DOM.
Se llaman tres métodos: 
    * constructor: inicializa estado, valores...
    * render: introduce el elemento y lo muestra
    * componentDidMount: 
* Actualización:

Ocurre cuando los props o el estado del componente cambian.
Se llaman dos métodos:
    * render
    * componentDidUpdate: recibe dos argumentos, los props y el estado que tenia anteriormente.

* Desmontaje:

Nos da la oportunidad de hacer limpieza de nuestro componente.
Se llama un método: 
    * componentWillUnmount

## Introducción llamadas a un API
Las llamadas a una API siguen un patrón similar siempre que las hacemos, cada llamada consta de tres estados:

* **Loading**: cuando la petición se envía y estamos esperando.
* **Error**: se debe dejar un mensaje para el usuario para arreglar el error o volver a intentarlo.
* **Data**: los datos nos pueden llegar de dos formas, o en error o con los datos requeridos.

## Enviando datos (POST) v27
Gravatar usa el md5 de nuestro email, así que instala remos la librería de MD5
```
npm i md5
```