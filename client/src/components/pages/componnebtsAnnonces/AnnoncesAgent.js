import React, { useEffect, useState } from 'react'
import {useDispatch,useSelector} from 'react-redux'
import { getAnnonces,deletAnnonces } from '../../../js/actions/annonceAction';
import { Card, Button, CardTitle, CardText,Badge } from 'reactstrap';
import EditModalAnnonce from './EditModalAnnonce';
import AddModalAnnonce from './AddModalAnnonce';
import SearchAnnonce from '../SearchAnnonce';


const AnnoncesAgent = () => {
    const [search , setSearch] = useState('');

    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(getAnnonces());
    }, []);
    const annonce = useSelector(state => state.authReducer.annonces.annonce);
    const user = useSelector(state => state.authReducer.user)
    
    return (
        
        <div style={{ margin:"100px" }}>
        <div><h1><AddModalAnnonce  /></h1> </div>

        <h1></h1>
        <div style={{textAlign:"center"}}><SearchAnnonce setSearch= {setSearch}/></div>
        <h1></h1>
        <div style = {{minWidth:"30px",display:"flex", flexWrap:"wrap", justifyContent:"space-evenly"}}>
        {/*map les listes annones en card */}
        { annonce  && annonce
        .filter((e) => e.title.includes(search))
        .map((el) =>
        
         ( <p>  {  el.user._id == user._id &&
              <Card body inverse color="info">
        <CardTitle tag="h5">{el.title}</CardTitle>
        <CardTitle tag="h5">{el.prix}</CardTitle>

        <CardText>{el.location}</CardText>
        <CardText>{el.discreption}</CardText>
        <CardText>{el.user.name}</CardText>
        <CardText>{el.user.email}</CardText>
        
        
        <CardText>{el.date.slice(0,10)}****{el.date.slice(11,19)}</CardText>
        <div style={{textAlign:"center"}}>
            {/*button delete annace*/}
        <Button color="danger" onClick = 
          
          {( () => {
            dispatch(deletAnnonces(el._id));
            })}>Delete</Button>
            <EditModalAnnonce el ={el}/>
            </div>
            
        </Card>}</p> ))
        }

        </div>
        </div>
        )
}

export default AnnoncesAgent;