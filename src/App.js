import './App.css';
import { Switch, Route } from 'react-router-dom'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css' // importing from node modules
import Header from './components/nav/Header'
import Rolo from './components/Rolo'
import Customer from './components/Customer'
import CustomerList from './components/CustomerList'
import Home from './components/Home'
import Productions from './components/Productions.js'
import SingleProduct from './components/SingleProduct'
import Card2 from './pages/Card2'
import Ektypwsh from './pages/Ektypwsh'
// import ChangeRolo from './components/ChangeRolo'
import SxedioMonToPrint from './pages/SxedioMonToPrint'
import SxedioBiomToPrint from './pages/SxedioBiomToPrint'

function App() {
  return (
    <>
      <Header />
      <ToastContainer autoClose={3000} pauseOnHover />
      {/* when Switch is rendered, it searches through its children Route elements to match with the current URL. 
       When it finds the match, the Switch will direct to the path in Route . */}
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/rolo" component={Rolo} />
        {/* <Route exact path="/stoixeia" component={Stoixeia} /> */}
        <Route exact path="/customer" component={Customer} />
        <Route exact path="/customerList" component={CustomerList} />
        <Route exact path="/productions" component={Productions} />
        <Route exact path="/SingleProduct/:no" component={SingleProduct} />
        <Route exact path="/card2" component={Card2} />
        <Route exact path="/ektypwsh" component={Ektypwsh} />
        {/* <Route exact path="/changeRolo" component={ChangeRolo} /> */}
        <Route exact path="/sxedioMonToPrint" component={SxedioMonToPrint} />
        <Route exact path="/sxedioBiomToPrint" component={SxedioBiomToPrint} />

      </Switch>
    </>
  );
}

export default App;
