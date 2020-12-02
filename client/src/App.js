import { useEffect, useState } from 'react';
import { Switch, Route, useHistory } from 'react-router-dom';

import './App.css';
import Layout from './layouts/Layout';
import Home from './screens/Home';
import Login from './screens/Login';
import Menu from './screens/Menu';
import Register from './screens/Register'
import {loginUser, registerUser} from './services/auth'
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
    <Layout>
      <Switch>
        <Route path='/login'>
          {/* login */}
          <Login handleLogin={handleLogin}/> 
        </Route>
        <Route path='/register'>
          {/* register */}
          <Register handleRegister={handleRegister} /> 
        </Route>
        <Route path='/orders'>
         {/* container */} 
        </Route>
        <Route path='/menu'>
          {/* menu */} 
          <Menu meals={meals}/>
        </Route>
        <Route path='/'>
          {/* home */} 
          <Home />
        </Route>
      </Switch>

    </Layout>
  );
}

export default App;
