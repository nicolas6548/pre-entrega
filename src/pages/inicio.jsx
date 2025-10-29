import tricota from '../assets/img/tricota.jpg'
import { Link } from 'react-router-dom'

function Inicio()
{
  return (
    <div>
      <h1>INICIO</h1>
      <img src={tricota} alt="los 3 juntos" style={{ width: "40%" }}/>
    </div>
  );
}


export default Inicio;