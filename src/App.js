import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import initializeFirebase from './Components/Firebase/firebase.init';
import Home from './Components/Home/Home';
import Profile from './Components/Profile/Profile';
import MyParcel from './Components/MyParcel/MyParcel';
import Register from './Components/SignUp/Register';
import useFirebase from './Components/useHooks/useFirebase';
import Header from './Components/Header/Header';
import Login from './Components/SignUp/Login';
import AddParcel from './Components/AddParcel/AddParcel';
import PrivateRoute from './Components/PrivateRoute/PrivateRoute';
import AuthProvider from './Components/AuthProvider/AuthProvider';
import Dashboard from './Components/Dashboard/Dashboard';


function App() {
 
  return (
    <AuthProvider>
      <BrowserRouter>
        <Header></Header>
        <Routes>
      
        <Route path="/" element={ < Home/>}>
        </Route>
        <Route path="/profile" element={ < Profile/>}>
        </Route>
        <Route path="/login" element={ < Login/>}>
        </Route>
        <Route path="/myparcel" element={ < MyParcel/>}>
        </Route>
        <Route path="/dashboard" element={ < Dashboard/> }>
        </Route>
        <Route path="/addparcel" element={ <PrivateRoute>
          < AddParcel/>
        </PrivateRoute>}>
        </Route>
        <Route path="/register" element={ < Register/>}>
        </Route>
      

    </Routes>
    </BrowserRouter>
    </AuthProvider>
    
      
    
  );
}

export default App;
