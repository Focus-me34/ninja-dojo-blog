import Navbar from './Navbar';
import Home from './Home';
import Create from './Create';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import "./index.css";

function App() {
  return (
    <Router> // ! Router functionality starts here
      <div className="App">
        <Navbar />
        <div className='content'>
          <Switch> // ! Switch begin here
            <Route exact path="/">       // ! Route 1: root_path
              <Home />
            </Route>
            <Route exact path="/create"> // ! Route 2: "/create"
              <Create />
            </Route>
          </Switch> // ! Switch ends here
        </div>
      </div>

    </Router> // ! Router functionality stops here
  );
}

export default App;
