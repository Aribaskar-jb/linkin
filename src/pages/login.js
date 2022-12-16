import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import './login.css'
import RemoveRedEyeIcon from '@mui/icons-material/RemoveRedEye';
import { IconButton } from '@mui/material';
import { Container } from '@mui/system';
import {useState } from 'react';
function LogIn() {
  const [showPassword, setShowPassword] = useState(false);
  const eye=(e)=>{
    setShowPassword((prev) => !prev)
  }
  return (
    <Container style={{padding:"15pc 25pc"}}>
      <Card style={{ width: '23pc',height:"25pc",boxShadow:"5px 5px 5px 5px #bfbfbf"}}>
        <Card.Body >
          <Card.Title>
              <h2>Log In</h2>
              <h6>Stay updated on your professional world</h6>
              </Card.Title>
          <form style={{margin:"20px 0"}}>
              <div  style={{marginBottom:"20px" ,display:"grid"}}>
                <label >Email address</label>
                <input type="email" id="InputEmail" placeholder="Enter email" style={{borderRadius: "8px",borderColor:"rgb(210, 210, 210)"}} />
              </div>
              <div >
                <label >Password</label>
                <Container className="pass"style={{display:"flex",margin:"0",padding:"0"}}  >
                  <input type={showPassword ? 'text' : 'password'}  id="InputPassword" placeholder="Password" style={{width:"20pc"}}/>
                  <IconButton onClick={eye} > <RemoveRedEyeIcon/></IconButton>
                </Container>
              </div>
          </form>
          <Container style={{textAlign:"center",marginTop:"40px"}} >
            <Button variant="primary" style={{width:"85%",height:"50px",borderRadius:"25px"}}><h5 style={{margin:"0"}}>Agree & Join</h5></Button>
          </Container>
        </Card.Body>
      </Card><br></br>
      <Container style={{textAlign:"center",padding:"0"}}>
        <h6>Already on LinkedIn?  <a href=""> Sign in</a></h6>
      </Container>
    </Container>
  );
}

export default LogIn;