import './App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import MainContent from './components/main-component';
import Header from './components/header';
import New from './components/new';
import Poll from './components/poll';
import PollResult from './components/poll-result';

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <Switch>
          <Route path="/" exact component={MainContent} />
          <Route path="/new" component={New} />
          <Route path="/poll" component={Poll} />
          <Route path="/poll-result" component={PollResult} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
