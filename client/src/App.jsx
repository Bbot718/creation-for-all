import { BrowserRouter as Router, Route, Redirect } from 'react-router-dom';

import Main from './components/pages/main';
import Backend from './components/pages/backend';

function App() {
  return (
    <div className="App">
      <Router>
        <Route exact path="/">
          <Redirect to="/main/" />
        </Route>
        <Route path="/main/" component={Main} />
        <Route path={"/backend"} component={Backend} />
      </Router>
    </div>
  );
}

export default App;
