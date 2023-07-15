import axios from 'axios'

const extraerInfo = async(state)=>{
    const peticion = await axios.get('http://18.188.110.39:81/campeones')
    state(peticion.data)
}

export {
    extraerInfo
}