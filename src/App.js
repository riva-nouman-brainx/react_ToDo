import './App.css';
import EmailConfirm from './components/EmailConfirm';
import Login from './components/Login.jsx'; 
import SignUp from './components/SignUp.jsx'; 
import ForgotPass from "./components/ForgotPass.jsx"
import ResetPass from "./components/ResetPass.jsx"
import ToDo from "./components/ToDo.jsx"
import {BrowserRouter as Router, Routes, Route, Link} from "react-router-dom";



function App() {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<Login />} />
        <Route path='/SignUp' element={<SignUp />} />
        <Route path='/EmailConfirm' element={<EmailConfirm />} />
        <Route path='/ForgotPass' element={<ForgotPass />} />
        <Route path='/ResetPass' element={<ResetPass />} />
        <Route path='/ToDo' element={<ToDo />} />

      </Routes>
    </Router>
   
  );
}

export default App;
