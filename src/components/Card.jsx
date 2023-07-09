import '../card.css';
import MyImage from '../argentina_campeon.jpg'

function Card() {
    return (
        <div className='Card_Content'>
            <div className='Card_top'>
                 <img className='Card_top-img' src={MyImage} alt="My Image" />
            </div>
            <div className='center-card'>
                <p className='Card_Equipo'>Limas</p>
                <p className='Card_Categoria'>Categoria Libre</p>
                <p className='Card_Torneo'>Clausura 2015</p>
                <p className='Card_ID'>Campeonato ID.-25</p>
            </div>
                <div className='Bottom-card'>
                    <p></p>
                    <div>
                        <p>Campeones</p>
                        <p>Liga ED</p>
                    </div>
                </div>


        </div>
        );
  }

  export default Card;
