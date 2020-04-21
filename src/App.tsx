import React from 'react';
import './App.scss';
import { useLocation, Route, Switch } from 'react-router-dom';
import NavigationBar from './components/NavigationBar/NavigationBar';
import Expenses from './pages/Expenses';
import Management from './pages/Management';
import Timesheets from './pages/Timesheets';

function App() {
  const location = useLocation();

  return (
    <div className="App">
      <header className="App-header">
        <NavigationBar pathname={location.pathname} />
      </header>
      <Switch>
        <Route path="/timesheets">
          <Timesheets />
        </Route>
        <Route path="/expenses">
          <Expenses />
        </Route>
        <Route path="/management">
          <Management />
        </Route>
        <Route path="/">
          <Timesheets />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
