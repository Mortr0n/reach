import './App.css';
import DisplayOne from './components/DisplayOne';
import {Router} from '@reach/router';
import Home from './view/Home';

function App() {
  return (
    <div className="App">

      <Router>
        {/* 2 components can't share a path so make a view component
        to hold both components then call the sigle component */}
        <Home path="/" />
        {/* the display one component is set to handle 3 different options based
        on whether or not they have a review and rating or just rating or neither */}
        <DisplayOne path="/country/:countryCode"/>
        <DisplayOne path="/country/:countryCode/:rating"/>
        <DisplayOne path="/country/:countryCode/:rating/:review"/>
      </Router>
    </div>
  );
}

export default App;
