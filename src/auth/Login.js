import { Box, Button, Container, TextField, Typography } from '@mui/material'
import React, { useState } from 'react'
import { useNavigate } from 'react-router';
import ApiManager from '../api/ApiManager';


function Login() {

    const [userEmail, setUserEmail] = useState('');

    const [userpassword,setUserPassword] = useState('');
    
    const handleEmail = (event) => {
        setUserEmail(event.target.value);
    }
    const handlePassword = (event) => {
        setUserPassword(event.target.value);
    }

    const setToken = (token) => {
      localStorage.setItem('authToken', token);
    };
  
    const Navigate = useNavigate();
   
    const handleSubmit = async () => {

        if(userEmail && userpassword){
            let response = await ApiManager.loginUser(userEmail,userpassword);
            
            if (response.success) {
                setToken(response.data.token);
                return Navigate("/profile")
            }
            else {
                console.log("Error",); 
            }
    }
    else{   console.log("email and passwored are required"); }
  
    };
    
    return (
      <Box  style={{width:"100vw",height:"100vh",backgroundColor:"wheat",display:"flex",justifyContent:"center"}}>
          <Box style={{ display: "", flexDirection: "column", padding: "30px", overflowX: 'hidden', backgroundColor: "", flexGrow: 1 }}>
  
          <Box  style={{flex:1,flexGrow:1,display:"flex",padding:"30px",justifyContent:"flex-end"}}>
            <Button style={{width:"100px",paddingX:"30px",paddingY:"10px",borderRadius:"20px",borderRightColor:'black',backgroundColor:"white",color:"black"}}
            onClick={()=>{}}
            >
              About us
            </Button>
          </Box>
          <Container  maxWidth="md"  minwidth="300px" style={{direction:"column",backgroundColor:"white",borderRadius:"10px",padding:"50px",alignSelf:"center",   
                justifyContent:"center",alignItems:"center",}}>
            
            <Typography style={{paddingTop:"20px",paddingLeft:"2px",paddingBottom:"2px"}} >Email Address</Typography>
            
            <TextField
              fullWidth
              placeholder='Enter Email'
              onChange={handleEmail}

            />
            <Typography style={{padding:"5px",fontSize:"14px",color:"grey"}}>We'll never share your email with anyone else,</Typography>
            
            <Typography style={{paddingTop:"20px",paddingLeft:"2px",paddingBottom:"2px"}}>Password</Typography>
            
            <TextField
                fullWidth
                placeholder='Enter Password'
                type='password'
                onChange={handlePassword}
            />
  
          <Box  style={{flex:1,flexGrow:1,display:"flex",paddingTop:"30px",justifyContent:"center"}}>
            <Button style={{width:"100px",paddingX:"30px",paddingY:"10px",borderRadius:"20px",borderRightColor:'black',backgroundColor:"wheat",color:"black"}}
            onClick={()=>handleSubmit()}
            >
              Sign in
            </Button>
          </Box>
  
          </Container>
        </Box>
      </Box>
    )
  }

export default Login