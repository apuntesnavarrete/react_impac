import {React , useEffect, useState} from 'react'
import { extraerInfo } from '../functions/functions.js'
import Card from './Card.jsx'
import '../cards.css';


const Campeones = () => {
  const [campeones , setCampeones] = useState(null)
    useEffect(()=>{
        extraerInfo(setCampeones)
    },[])


  return (
    <>
    <header>
    <div className='publicidad'>
      <a href='https://www.facebook.com/Impactounder'>Promocion de Uniformes clon da click y CONTACTANOS </a>
    </div>
    <h2 className='titulo'>Historial de Campeones</h2>
    <h2 className='subtitulo'>"Los Heroes Tecamac"</h2>
    </header>
    <div className='Cards_Content'>
    
      {campeones != null ? (
          campeones.map(campeon =>(
             
               
                <Card key={campeon.id_campeonato}
      url_liga="http://18.188.110.39/ligas/"
      url_Equipo="http://18.188.110.39/public" 
      url_equipo_campeon="http://18.188.110.39/campeones/"
      equipo={campeon.Escudo}
      name_equipo={campeon.Nombre_Equipo}
      categoria={campeon.Categoria}
      torneo={campeon.Torneo}
      id_campeonato= {campeon.id_campeonato}
      liga={campeon.Liga}
      fecha_campeonato={campeon.fecha_campeonato}

      ></Card>
              
          ))

      ) : ('Problemas con la carga , espere un momento')}
    </div>
    </>
  )
}

export default Campeones
