import {React , useEffect, useState} from 'react'
import { extraerInfo } from '../functions/functions.js'
import Card from './Card'

const Prueba = () => {
  const [campeones , setCampeones] = useState(null)
    useEffect(()=>{
        extraerInfo(setCampeones)
    },[])


  return (
    <div>
    
      {campeones != null ? (
          campeones.map(campeon =>(
              <div key={campeon.id_campeonato}>
               
                <Card 
      url_liga="http://18.188.110.39/public/images/logoed.png"
      url_Equipo="http://18.188.110.39/public" 
      url_equipo_campeon="http://18.188.110.39/campeones"
      equipo={campeon.Escudo}
      name_equipo={campeon.Nombre_Equipo}
      categoria={campeon.Categoria}
      torneo={campeon.Torneo}
      id_campeonato= {campeon.id_campeonato}
      liga={campeon.Liga}

      ></Card>
              </div>
          ))

      ) : ('no hay personajes')}
    </div>
  )
}

export default Prueba
