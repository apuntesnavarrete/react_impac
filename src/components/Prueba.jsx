import {React , useEffect, useState} from 'react'
import { extraerInfo } from '../functions/functions.js'
import Card from './Card'
import '../cards.css';


const Prueba = () => {
  const [campeones , setCampeones] = useState(null)
    useEffect(()=>{
        extraerInfo(setCampeones)
    },[])


  return (
    <div className='Cards_Content'>
    
      {campeones != null ? (
          campeones.map(campeon =>(
             
               
                <Card key={campeon.id_campeonato}
      url_liga="http://18.188.110.39/public/images/logoed.png"
      url_Equipo="http://18.188.110.39/public" 
      url_equipo_campeon="http://18.188.110.39/campeones/"
      equipo={campeon.Escudo}
      name_equipo={campeon.Nombre_Equipo}
      categoria={campeon.Categoria}
      torneo={campeon.Torneo}
      id_campeonato= {campeon.id_campeonato}
      liga={campeon.Liga}

      ></Card>
              
          ))

      ) : ('no hay personajes')}
    </div>
  )
}

export default Prueba
