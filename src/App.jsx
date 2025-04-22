import './EstilosGenerales.css'
import Footer from './components/Footer/Footer.jsx'
import Gallery from './components/Gallery/Gallery.jsx'
import Header from './components/Header/Header.jsx'
import Productos from './components/Productos/Productos.jsx'
import TarjetaProductos from './components/TarjetaProductos/TarjetaProductos.jsx'
import Hero from './components/Hero/Hero.jsx'


function App() {
  const productos = ['Producto 1', 'Producto 2', 'Producto 3', 'Producto 4'];

  const promociones = [
    {
      id: 1,
      titulo: 'Producto 1',
      descripcion: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam…',
      imagenUrl: 'https://i.postimg.cc/sggP0g7m/producto.png',
      promocion: '2x1',
      alt: 'imagen de producto 1'
    },
    {
      id: 2,
      titulo: 'Producto 2',
      descripcion: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam…',
      imagenUrl: 'https://i.postimg.cc/sggP0g7m/producto.png',
      promocion: '-50%',
      alt: 'imagen de producto 2'
    },
    {
      id: 3,
      titulo: 'Producto 3',
      descripcion: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam…',
      imagenUrl: 'https://i.postimg.cc/sggP0g7m/producto.png',
      promocion: '2x1',
      alt: 'imagen de producto 3'
    },
    {
      id: 4,
      titulo: 'Producto 4',
      descripcion: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam…',
      imagenUrl: 'https://i.postimg.cc/sggP0g7m/producto.png',
      promocion: '-25%',
      alt: 'imagen de producto 4'
    }
  ];

  return (
    <>
      <Header></Header>
      <Hero><p>Hello</p></Hero>
      <Gallery></Gallery>
      <Productos productos={productos} />
      <section className='tarjeta__container'>
        {promociones.map((promocion) =>
          <TarjetaProductos
            key={promocion.id}
            titulo={promocion.titulo}
            img={promocion.imagenUrl}
            alt={promocion.alt}
            descripcion={promocion.descripcion}
            promocion={promocion.promocion}
            botonTexto="Ver más"
          ></TarjetaProductos>
        )}
      </section>
      <Footer></Footer>
    </>
  )
}

export default App
