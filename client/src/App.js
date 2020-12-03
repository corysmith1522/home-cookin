import { useEffect, useState } from 'react';
import { Switch, Route, useHistory } from 'react-router-dom';

import './App.css';
import MainContainer from './containers/MainContainer';
import Layout from './layouts/Layout';
import Home from './screens/Home';
import Login from './screens/Login';
import Menu from './screens/Menu';
import Register from './screens/Register'
import {loginUser, registerUser, verifyUser} from './services/auth'
import { getAllMeals } from './services/meals';

function App() {
  const [currentUser, setCurrentUser] = useState(null);
  const [meals, setMeals] = useState([]);
  const history = useHistory();

  useEffect(() => {
    const fetchMeals = async () => {
      const mealData = await getAllMeals();
      setMeals(mealData);
    }
    const handleVerify = async () => {
      const userData = await verifyUser();
      setCurrentUser(userData);
      if (!userData) {
        history.push('/')
      }
    }
    handleVerify();
    fetchMeals();
  }, [])

  const handleLogin = async (loginData) => {
    const userData = await loginUser(loginData);
    setCurrentUser(userData);
    history.push('/');
  }

  const handleRegister = async (registerData) => {
    const userData = await registerUser(registerData);
    setCurrentUser(userData);
    history.push('/');
  }
  return (
    <Layout currentUser={currentUser}>
      <Switch>
        <Route exact path='/login'>
          <Login handleLogin={handleLogin}/> 
        </Route>
        <Route exact path='/register'>
          <Register handleRegister={handleRegister} /> 
        </Route>
        <Route path='/orders'>
         <MainContainer currentUser={currentUser} meals={meals} /> 
        </Route>
        <Route exact path='/menu'>
          <Menu meals={meals}/>
        </Route>
        <Route exact path='/'> 
          <Home />
        </Route>
      </Switch>

    </Layout>
  );
}

export default App;
