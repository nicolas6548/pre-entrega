import { Link } from "react-router-dom";
import { useEffect, useState } from "react";



function Productos()
{
  const [productos, setProductos] = useState([]);
  const [cargando, setCargando] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() =>
  {
    fetch("https://68e7abf010e3f82fbf403356.mockapi.io/api/tienda")
      .then((respuesta) => respuesta.json())
      .then((datos) =>
      {
        setProductos(datos);
        setCargando(false);
      })
      .catch((error) =>
      {
        {
          console.log(("Error!,", error));
        }
        setError("hubo un problema al cargar los productos.")
        setCargando(false);
      });
  }, []);

  if (cargando) return <p>Cargando los productos... O NO TE DAS CUENTA?</p>
  if (error) return <p>{error}</p>;

  return (
    <>
      <ul className="lista-productos">
        {productos.map((producto) => (
          <li key={producto.id}>
            <h2>
              <strong>{producto.name}</strong>
            </h2>            
            <br />
            PRECIO: ${producto.price}
            <br />
            <img src={producto.avatar} alt={producto.name} />
            <Link to= {`/productos/${producto.id}`} state={{producto}}><button>VER PRODUCTO</button> </Link>
          </li>
        ))}
      </ul>
      <br/>
      <Link to={'/'}>¿VOVEMOS?</Link>
    </>
  );
}


export default Productos;
