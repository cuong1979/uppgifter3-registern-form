import './App.css';
import { Route, Switch } from 'react-router-dom';
import Registration from "./components/Registration";
import ChangeAccount from './components/ChangeAccount';
import Account from './components/Account';
import Error from './components/Error'

function App() {
  return (
    <section className="contanier">
      <h1 className="welcome">Välkommen!</h1>
        <Switch>
          <Route path="/" component={ Registration } exact />
          <Route path="/change" component={ ChangeAccount } />
          <Route path="/account" component={ Account } />
          <Route component={ Error } />
        </Switch>
      </section>
  );
}

export default App;
