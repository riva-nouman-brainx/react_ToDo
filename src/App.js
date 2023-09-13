import './App.css';
import EmailConfirm from './components/EmailConfirm';
import Login from './components/Login.jsx'; 
import SignUp from './components/SignUp.jsx'; 
import ForgotPass from "./components/ForgotPass.jsx"
import ResetPass from "./components/ResetPass.jsx"



function App() {
  return (
    <div>
      <SignUp/>
      <Login/>
      <EmailConfirm/>
      <ForgotPass/>
      <ResetPass/>
    </div>
  );
}

export default App;
