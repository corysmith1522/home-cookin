import { useState } from 'react';
import { Switch, Route, useHistory } from 'react-router-dom';

import './App.css';
import Layout from './layouts/Layout';
import Login from './screens/Login';
import Register from './screens/Register'
import {loginUser, registerUser} from './services/auth'

function App() {
  const [currentUser, setCurrentUser] = useState(null);
  const history = useHistory();

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
        <Route path='/'>
         {/* home */} 
        </Route>
      </Switch>

    </Layout>
  );
}

export default App;
