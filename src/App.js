
import './App.css';
import AppBar from './Component/AppBar/AppBar';


import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";
import Home from './Component/Home/Home/Home';
import Login from './Component/LoginSystem/Signin/Login';
import SignUp from './Component/LoginSystem/SignUp/SignUp';
import PrivateRoute from './Component/LoginSystem/PrivateRoute/PrivateRoute';
import Services from './Component/Home/Services/Services/Services';
import AuthProvider from './Component/Context/AuthProvider';
import CheckOut from './Component/Home/CheckIn/CheckOut';
import Success from './Component/Shared/Success/Success';
import Footer from './Component/Footer/Footer';
import Dashboard from './Component/Dashboard/Dashboard/Dashboard';
import Contact from './Component/Contact/Contact';



function App() {

  return (
    <div >
      <AuthProvider>
      <BrowserRouter>
        <AppBar></AppBar>

        <Routes>
          <Route path="/" element={<Home />} />

          <Route path="/login" element={<Login />} />

          <Route path="/signup" element={<SignUp />} />

          <Route path="/success" element={<Success></Success>} />

          <Route path="/contacts" element={<Contact></Contact>} />

          <Route path="/services" element={<PrivateRoute>
            <Services></Services>
          </PrivateRoute>}>
          </Route>
          <Route path="/checkout" element={<PrivateRoute>
            <CheckOut></CheckOut>
          </PrivateRoute>}>


          </Route>
          <Route path="/dashboard" element={<PrivateRoute>
            <Dashboard></Dashboard>
          </PrivateRoute>}>
          </Route>

        </Routes>
        <Footer></Footer>
      </BrowserRouter>
    </AuthProvider>
    </div>
  );
}

export default App;
