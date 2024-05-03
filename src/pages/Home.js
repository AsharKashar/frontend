import { Box,Button,Typography,Container} from '@mui/material';
import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router';
import ApiManager from '../api/ApiManager';

function Home() {
  
    const Navigate = useNavigate();
    
    const [aboutCompany,setAboutCompnay] = useState("");

    const getInfo = async () => {
      
        let response = await ApiManager.getInfo();
        if (response.success) {
          setAboutCompnay(response.data.info)
        }
        else {
          console.log("Error -------- Error ",); 
        }
    
    };

    useEffect(() => {
        getInfo();
    }, []);
    
   
    return (
      <Box  style={{width:"100vw",height:"100vh",backgroundColor:"wheat",display:"flex",justifyContent:"center"}}>
          <Box style={{ display: "", flexDirection: "column", padding: "30px", overflowX: 'hidden', backgroundColor: "", flexGrow: 1 }}>
  
          <Box  style={{flex:1,flexGrow:1,display:"flex",padding:"30px",justifyContent:"flex-end"}}>
            <Button style={{width:"100px",paddingX:"30px",marginInline:"5px",paddingY:"10px",borderRadius:"20px",borderRightColor:'black',backgroundColor:"#FFFFFF",color:"black"}}
            onClick={()=>console.log("About Us")}
            >
              About us
            </Button>

            <Button style={{width:"100px",paddingInline:"15px",marginInline:"5px",borderRadius:"20px",borderRightColor:'black',backgroundColor:"#FFFFFF",color:"black"}}
            onClick={()=>{Navigate("/login")}}
            >
              Sign in
            </Button>
          </Box>
          <Container  maxWidth="md"  minwidth="300px" style={{direction:"column",backgroundColor:"white",borderRadius:"10px",padding:"50px",alignSelf:"center",justifyContent:"center",alignItems:"center",}}>
            <Typography style={{fontSize:"16px",fontWeight:"bold"}}>
                {aboutCompany}
            </Typography>
          </Container>
        </Box>
      </Box>
    )
  }

export default Home