import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Home from './Pages/Home/HomeContainer/Home';
import Bikeexplore from './Pages/Bikeexplore/Bikeexplore'
import Login from './Pages/Authentication/Login/Login'
import Register from './Pages/Authentication/Register/Register'
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import PrivateRoute from './Pages/Authentication/PrivateRoute/PrivateRoute';
import AuthProvider from './context/AuthProvider/AuthProvider';
import Deshboardhome from './Pages/Deshboard/Deshboardhome';
import PlaceOrder from './Pages/Placeorder/PlaceOrder';
function App() {
  return (
    <div className="App">
      <AuthProvider>
      <Router>
        <Switch>
        <Route exact path="/">
        <Home></Home>
        </Route>
        <PrivateRoute path="/bikeexplore">
        <Bikeexplore></Bikeexplore>
        </PrivateRoute>
        <Route path="/deshboard">
        <Deshboardhome></Deshboardhome>
        </Route>
        <PrivateRoute path="/placeorder/:id">
        <PlaceOrder></PlaceOrder>
        </PrivateRoute>
        <Route path="/login">
        <Login></Login>
        </Route>
        <Route path="/register">
        <Register></Register>
        </Route>
        </Switch>
        </Router>
      </AuthProvider>

    </div>
  );
}

export default App;
