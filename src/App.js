import './App.css';
import EmailConfirm from './components/EmailConfirm';
import Login from './components/Login.jsx'; 
import SignUp from './components/SignUp.jsx'; 



function App() {
  return (
    <div>
      <SignUp/>
      <Login/>
      <EmailConfirm/>
    </div>
  );
}

export default App;
