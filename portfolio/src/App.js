import './Styles/App.css';
import NavBar from './Components/NavBar';
import { BrowserRouter as Router } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.css';
import SidePic from './Components/SidePic';
import Intro from './Pages/Intro';

function App() {
  return (
    <Router>
      <div className="App">
        <div className="row">
          <NavBar />
        </div>
        <div className="row">
          <div className="col-6">
            <SidePic />
          </div>
          <div className="col-6">
            <Intro />
          </div>
        </div>
      </div>
    </Router>
  );
}

export default App;
