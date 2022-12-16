import './App.css';
import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Nav from "./components/Nav"
import Main from './components/Main';
import SingIn from './pages/signin'
import LogIn from './pages/login';
function App() {
  document.body.style.backgroundColor="#f0f0ea"
  return (
    <div className='App'>
      <Nav/>
      {/* <SingIn/> */}
      {/* <LogIn/> */}
      <Main/> 
    </div>
  );
}

export default App;
