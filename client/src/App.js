import { Switch, Route } from 'react-router-dom';

import './App.css';
import Layout from './layouts/Layout';
import Login from './screens/Login';

function App() {
  return (
    <Layout>
      <Switch>
        <Route path='/login'>
          {/* login */}
         <Login /> 
        </Route>
        <Route path='/register'>
         {/* register */} 
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
