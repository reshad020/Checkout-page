import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import FullPage from './Components/FullPage/FullPage';
import initializeFirebase from './Components/Firebase/firebase.init';


function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" element={ < FullPage/>}>

      </Route>
    </Routes>
    </BrowserRouter>
    
      
    
  );
}

export default App;
