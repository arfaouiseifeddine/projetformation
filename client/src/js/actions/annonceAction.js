import axios from 'axios'
import { GET_ANNONCES } from '../constants/ActionsTypes'

export const getAnnonces=()=>dispatch=>{
    axios.get('/api/annon/')
    .then(res => dispatch({type:GET_ANNONCES,payload:res.data}))
    .catch(err => console.log(err))

}
export const addAnnonces =(newAnnonce)=>dispatch => {
    axios.post('/api/annon/add',newAnnonce)
    .then(res => dispatch(getAnnonces()))
    .catch(err => console.log(err))
}

export const deletAnnonces =(idAnnonce)=>dispatch => {
    axios.delete(`/api/annon/delete/${idAnnonce}`)
    .then(res => dispatch(getAnnonces()))
    .catch(err => console.log(err))
}

export const editAnnonce = (idAnnonce,editAnnonce) => dispatch => {
    axios.put(`/api/annon/edit/${idAnnonce}`,editAnnonce)
    .then((res) => dispatch(getAnnonces()))
    .catch((err)=> console.log(err))
}
