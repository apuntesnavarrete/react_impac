import '../card.css';

function Card(props) {
    return (
        <div className='Card_Content'>
            <div className='Card_top'>
                 <img className='Card_top-img' src={props.url_equipo_campeon + props.name_equipo + "_" + props.id_campeonato +  ".jpg"} alt="imagen equipo campeon" />
            </div>
            <div className='Card-center'>
                <img className='Card-center_img' src={props.url_Equipo + props.equipo} alt="imagen escudo campeon" />

                <p className='Card_Equipo'>{props.name_equipo}</p>
                <p className='Card_Categoria'>Categoria {props.categoria}</p>
                <p className='Card_Torneo'>{props.torneo}</p>
                <div className='Card_center_top'>
                <p className='Card_ID'>  {props.fecha_campeonato.substring(0, 10)}</p>
                <p className='Card_ID'>Campeonato ID.-{props.id_campeonato}</p>

                </div>
            </div>
                <div className='Card-Bottom'>
                <img className='Card-Bottom_img' src={props.url_liga + props.liga +  ".png"} alt="liga participante" />
                    <div>

                        <p className='Card-Bottom_campeones'>Campeones</p>
                        <p className='Card-Bottom_liga'>Liga {props.liga}</p>
                    </div>
                </div>


        </div>
        );
  }

  export default Card;
