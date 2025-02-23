import React, {lazy, Suspense} from 'react';
import './App.css';
import SideNav from './compnents/SideNav/SideNav'
import {BrowserRouter as Router, Switch, Route} from "react-router-dom";


const Dashboard = lazy(() => import('./Pages/Dashboard/Dashboard'));
const Account = lazy(() => import('./Pages/Account/Account'));
const System = lazy(() => import('./Pages/System/System'));
const Cron = lazy(() => import('./Pages/Cron/Cron'));
const Apache = lazy(() => import('./Pages/Apache/Apache'));

function App() {
  return (
    <div className="App">
      <Router>
        <div className="main-content">
          <SideNav />
          <Suspense fallback={<h1 className="container">Loading...</h1>}>
            <Switch>
              <Route path='/' exact>
                <Dashboard />
              </Route>
              <Route path='/account' exact>
                <Account />
              </Route>
              <Route path='/system' exact>
                <System />
              </Route>
              <Route path='/cron' exact>
                <Cron />
              </Route>
              <Route path='/apache' exact>
                <Apache />
              </Route>
              <Route path='/'>
                <h1>404</h1>
              </Route>
            </Switch>
          </Suspense>          
        </div>       
      </Router>
      
     
    </div>
  );
}

export default App;
