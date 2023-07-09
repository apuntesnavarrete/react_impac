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
      <Card></Card>
      {campeones != null ? (
          campeones.map(campeon =>(
              <div key={campeon.id_campeonato}>
                <p>ID Campeonato.- {campeon.id_campeonato} .- Equipo.- {campeon.Nombre_Equipo} Liga {campeon.Liga} Categoria .- {campeon.Categoria} - {campeon.Torneo} </p>
              </div>
          ))

      ) : ('no hay personajes')}
    </div>
  )
}

export default Prueba
