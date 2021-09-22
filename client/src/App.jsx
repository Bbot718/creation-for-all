import { BrowserRouter as Router, Route, Redirect } from 'react-router-dom';
import './style/css/main.css'

import Main from './components/pages/main';
import Dashboard from './components/dashboard/dashboard';

function App() {
  return (
    <div className="App">
      <Router>
        <Route exact path="/">
          <Redirect to="/main/" />
        </Route>
        <Route path="/main/" component={Main} />
        <Route path={"/dashboard"} component={Dashboard} />
      </Router>
    </div>
  );
}

export default App;
