import axios from 'axios'

const extraerInfo = async(state)=>{
    const peticion = await axios.get('http://localhost:3002/campeones')
    state(peticion.data)
}

export {
    extraerInfo
}