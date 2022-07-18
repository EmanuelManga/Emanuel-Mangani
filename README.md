# E-Book

## Descricion

Este repositorio contiene el proyecto desarrollado durante el curso de React JS de Coderhouse.

La aplicación consiste en un ecommerce en el cual se puede filtrar los productos de acuerdo a categorías, y acceder a ver el detalle de cada producto. Los mismos pueden ser agregados al carrito para luego completar un formulario simulando un proceso de compra completo.

Tanto el listado de productos como de órdenes generadas se almacenan en Firebase.

Puede visitarse el deploy del proyecto en https://librosecomers.web.app/

## Tecnologías utilizadas

- [React JS](https://reactjs.org/)
- [React Router Dom](https://reactrouter.com/)
- [React Bootstrap](https://react-bootstrap.github.io/)
- [Firebase](https://firebase.google.com/) (para base de datos y deploy)
- [React Dom](https://reactrouter.com/)
- [React Hot Toast](https://react-hot-toast.com/)
- [React Icons](https://react-icons.github.io/react-icons/)

## Ejecutar el proyecto

Para ejecutar el proyecto, el mismo puede descargarse como .zip

Instalar las dependencias:

```
npm install
```

Luego es necesario crear un proyecto en Firebase y crear una coleccion en Firestore (una con el nombre libros donde se ingresarán los productos). Los items de dicha coleccion debe crearse manualmente desde Firebase.

Ejemplo de product:

```
product = {
  cantidad: 0
  categoria: "Epopeya"
  img: "url de la imagen"
  nommbre: "La Eneida"
  precio: 1000
  stock: 50
  descripcion: "Descripcion del producto"
}

```

La colección ordenes se creará automáticamente al generar la primer orden de compra..

Luego iniciar el servidor con:

```
npm start
```

El proyecto estará corriendo en http://localhost:3000
