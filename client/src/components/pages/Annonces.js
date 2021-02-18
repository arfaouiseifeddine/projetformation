import React from 'react'
import {useSelector} from 'react-redux'


import AnnoncesAdmin from './componnebtsAnnonces/AnnoncesAdmin'
import AnnoncesAgent from './componnebtsAnnonces/AnnoncesAgent'

const Annonces = () => {
    const user = useSelector(state => state.authReducer.user)
    return ( 
      <div>  {user.role == "agent" &&  <AnnoncesAgent/>} {user.role == "admin" &&  <AnnoncesAdmin/>}
        
        </div>)
}

export default Annonces;