import { Link, useParams, useLocation } from "react-router-dom";

const ProductoDetalle = () =>
{
  const { id } = useParams();
  const location = useLocation();
  const producto = location.state?.producto;

  if (!producto)
  {
    return (
      <div>
        <p>No se pudo cargar nada de nada, NADITA</p>
        <Link to="/productos"><button>VOLVAMOS A PRODUCTOS</button></Link>
      </div>
    )
  }


  return (
    <>
      <h2 className="detalle">Detalles del Producto{id}</h2>
      <ul className="lista-productos">
        <li key={producto.id}>
          <h2>
            <strong>{producto.name}</strong>
          </h2>
          <br />
          <p>
            <strong>Descripcion: </strong> {producto.gender}
          </p>
          <p>Precio: ${producto.price}</p>
          <img src={producto.avatar} alt={producto.name} width="30%"/>
        </li>
        <hr />
        <Link to={'/productos'}>{" "} <button>VOLVERRRRRRR</button> {" "} </Link>
      </ul>
    </>
  )
}

export default ProductoDetalle;