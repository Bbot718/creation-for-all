import { BrowserRouter as Router, Route, Redirect } from 'react-router-dom';

import Main from './components/pages/main';
import Dashboard from './components/pages/dashboard';

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
