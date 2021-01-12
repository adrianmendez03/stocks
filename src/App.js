import './App.css';

import { Route, Switch } from 'react-router-dom'

import Nav from './components/Nav'
import Home from './pages/Home'
import Dashboard from './pages/Dashboard'
import Stock from './pages/Stock'
import About from './pages/About'

function App() {
  return (
    <div className="App">
      <Nav />
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="/about">
          <About />
        </Route>
        <Route
          path="/stocks/:symbol"
          render={(routerProps) => <Stock {...routerProps} />}
        />
        <Route path="/stocks">
          <Dashboard />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
