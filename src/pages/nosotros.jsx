import nosotros from '../assets/img/nosotros.jpg'
import { Link } from 'react-router-dom'

function Nosotros()
{
  return (
    <div>
      <h1>NOSOTROS</h1>
      <img src={nosotros} alt="Recibido" style={{ width: "70%" }} />
      <br/>
      <Link to="/"><button>¿VOLVEMOS?</button></Link>
    </div>
  )
}


export default Nosotros;