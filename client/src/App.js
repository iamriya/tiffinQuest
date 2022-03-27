import logo from './logo.svg';
import './App.css';
import bootstrap from '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap';
import { BrowserRouter, Route, Link, Switch } from 'react-router-dom';
import Navbar from './components/Navbar';
import Homescreen from './screens/Homescreen';
import Cartscreen from './screens/Cartscreen';
import Loginscreen from './screens/Loginscreen';
import Registrationscreen from './screens/Registrationscreen';
import Ordersscreen from './screens/Ordersscreen';
import Adminscreen from './screens/Adminscreen';

function App() {
  return (
    <div className="App">
      <Navbar />
      {/* <Homescreen></Homescreen> */}
      <BrowserRouter>
        <Route path="/" exact component={Homescreen} />
        <Route path="/cart" exact component={Cartscreen} />
        <Route path="/login" exact component={Loginscreen} />
        <Route path='/register' exact component={Registrationscreen} />
        <Route path='/orders' exact component={Ordersscreen} />
        <Route path='/admin' component={Adminscreen} />
      </BrowserRouter> 
    </div>
  );
}

export default App;
