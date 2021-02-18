import React, { useEffect, useState } from 'react'
import {useDispatch,useSelector} from 'react-redux'
import { getAnnonces } from '../../js/actions/annonceAction';
import { Card, Button, CardTitle, CardText} from 'reactstrap';
import SearchAnnonce from './SearchAnnonce';

const Home = () => {
    const [search , setSearch] = useState('');
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(getAnnonces());
    }, []);
    const annonces = useSelector(state => state.authReducer.annonces.annonce);
    return (<div style={{ margin:"100px" }}>
        <div style ={{textAlign:"center"}}><SearchAnnonce setSearch={setSearch}/></div>
        <h1></h1>
        <h1></h1>
        <div style = {{minWidth:"30px",display:"flex", flexWrap:"wrap", justifyContent:"space-evenly"}}>
        {/*map les listes agent en card */ }
        {annonces  && annonces
        .filter((e) => e.title.includes(search))
        .map((el) =>( <p> { 
              <Card body inverse color="info">
        <CardTitle tag="h5">{el.title}</CardTitle>
        <CardTitle tag="h5">{el.prix}</CardTitle>

        <CardText>{el.location}</CardText>
        <CardText>{el.discreption}</CardText>
        <CardText>{el.user.name}</CardText>
        <CardText>{el.user.email}</CardText>
        
        
        <CardText>{el.date.slice(0,10)}****{el.date.slice(11,19)}</CardText>
        </Card>}</p> ))
        }

        </div>
        </div>
        )
}

export default Home;