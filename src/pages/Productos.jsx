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
        {productos.map((productos) => (
          <li key={productos.id}>
            <h2>
              <strong>{productos.name}</strong>
            </h2>            
            <br />
            PRECIO: ${productos.price}
            <br />
            <img src={productos.avatar} alt={productos.name} />
            <Link to= {`/productos/${productos.id}`} state={{productos}}><button>VER PRODUCTO</button> </Link>
          </li>
        ))}
      </ul>
      <br/>
      <Link to={'/'}>¿VOVEMOS?</Link>
    </>
  );
}


export default Productos;
