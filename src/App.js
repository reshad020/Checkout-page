import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import initializeFirebase from './Components/Firebase/firebase.init';
import Home from './Components/Home/Home';
import Profile from './Components/Profile/Profile';
import AllPeople from './Components/AllPeople/AllPeople';
import MyFriend from './Components/MyFriend/MyFriend';
import Register from './Components/SignUp/Register';
import useFirebase from './Components/useHooks/useFirebase';


function App() {
 
  return (
    <BrowserRouter>
    <Routes>
      
      <Route path="/" element={ < Home/>}>
      </Route>
      <Route path="/profile" element={ < Profile/>}>
      </Route>
      <Route path="/allpeople" element={ < AllPeople/>}>
      </Route>
      <Route path="/myfriends" element={ < MyFriend/>}>
      </Route>
      <Route path="/register" element={ < Register/>}>
      </Route>
      

    </Routes>
    </BrowserRouter>
    
      
    
  );
}

export default App;
