import './App.css';
import AppNavBar from './components/AppNavbar';
import {BrowserRouter, Switch , Route} from 'react-router-dom'
import {useEffect} from 'react';
import {useDispatch} from 'react-redux'
import {getAuthUser} from './js/actions/authActions'
import Home from './components/pages/Home';
import Dashboard from './components/pages/Dashboard'
import PrivateRoute from './components/routes/PrivateRoute';
import Annonces from './components/pages/Annonces';
function App() {
  const dispatch = useDispatch();
  const getUser = () => dispatch(getAuthUser());
    useEffect(() => {
    getUser()
  }, []);


  return (
    
      <BrowserRouter>
      <AppNavBar/>
      <Switch>
        <Route exact path="/" component = {Home}/>
        <PrivateRoute path="/dashboard" component ={Dashboard}/>
        <PrivateRoute path="/annonces" component ={Annonces}/>
      </Switch>
      </BrowserRouter>
    
  );
}

export default App;
