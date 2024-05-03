import { Box,Button,Typography,Container,Modal} from '@mui/material';
import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router';
import ApiManager from '../api/ApiManager';
import { borderRadius, display, flexbox, height, margin, width } from '@mui/system';
import { userIcon } from '../assets/images/PNGs';
import { alignments } from '@floating-ui/utils';

function Profile() {
  
    const Navigate = useNavigate();
    
    const [userName,setUserName] = useState("");
    const [userToken,setUserToken] = useState("")
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [authorStatus, setAuthorStatus] = useState("");
    const [qouteStatus, setQouteStatus] = useState("");

    const getUserProfile = async () => {

        const token = localStorage.getItem("authToken");
        setUserToken(token);
        let response = await ApiManager.getProfile(token);
    
        if (response.success) {
          setUserName(response.data.fullname);
        }
        else {
          console.log("Error",); 
        }
    
    };

    const getAuther = async () => {

        let response = await ApiManager.getAuther(userToken);
    
        if (response.success) {
          setAuthorStatus("Completed")
          setTimeout(() => {
            getQuote();
        }, 4000);
        }
        else {
          console.log("Error",); 
        }
    
    };
    const getQuote = async (authorId) => {

        let response = await ApiManager.getQuote(userToken,authorId);
    
        if (response.success) { 
          setQouteStatus("Completed")
        }
        else {
          console.log("Error",); 
        }
    
    };

    const handleSubmit = async () => {
        const token = localStorage.getItem("authToken");
        if(token){
            
            let response = await ApiManager.logoutUser(token);
            if (response.success) {
                localStorage.clear();
                return Navigate("/")
            }
            else {
                console.log("Error",); 
            }
        }
        else{console.log("token is required to signIn"); }
  
    };

    const handleModal = () => {
        setIsModalOpen(!isModalOpen);
        if(!isModalOpen){
            setTimeout(() => {
                getAuther();
            }, 4000);
        }

    }

    useEffect(() => {
        getUserProfile();
    }, []);
    
   
    return (
        <Box  style={{width:"100vw",height:"100vh",backgroundColor:"wheat",display:"flex",justifyContent:"center"}}>
            <Box style={{ display: "", flexDirection: "column", padding: "30px", overflowX: 'hidden',flexGrow: 1 }}>
                <Box  style={{flex:1,flexGrow:1,display:"flex",padding:"30px",justifyContent:"flex-end"}}>
                    <Button style={{width:"100px",paddingX:"30px",marginInline:"5px",paddingY:"10px",borderRadius:"20px",borderRightColor:'black',backgroundColor:"#FFFFFF",color:"black"}}
                        onClick={()=>console.log("About Us")}
                    >
                        About us
                    </Button>

                    <Button style={{width:"",paddingInline:"15px",marginInline:"5px",borderRadius:"20px",borderRightColor:'black',backgroundColor:"#FFFFFF",color:"black"}}
                        onClick={()=>handleSubmit()}
                    >
                        Sign out
                    </Button>
                </Box>

                <Container  maxWidth="md"  minwidth="300px" style={{direction:"column",backgroundColor:"white",borderRadius:"10px",padding:"50px",alignSelf:"center",justifyContent:"center",alignItems:"center",}}>
                    
                    <Box  style={{flexDirection:"row",marginBlock:"20px",backgroundColor:"",display:"flex"}}>
                        <Box style={{width:"150px",height:"150px",borderRadius:"100px",backgroundColor:"wheat"}}>
                            <img src={userIcon} width={"150px"}/>
                        </Box>
                        <Box style={{display:"flex",flexDirection:"column",justifyContent:"center",alignItems:"center",marginInline:"100px"}}>
                            <Typography style={{fontSize:"24px",fontWeight:"bold",textAlign:"center",marginBlock:"10px"}}>
                                Welcome, {userName}
                            </Typography>
                            <Button style={{width:"100px",paddingX:"30px",marginInline:"5px",paddingY:"10px",borderRadius:"20px",borderRightColor:'black',backgroundColor:"wheat",color:"black"}}
                                onClick={()=>handleModal()}
                            >
                                Update
                            </Button>
                        </Box>
                        

                    </Box>
                    <Typography style={{fontSize:"16px",fontWeight:"bold",textAlign:"center"}}>
                        This place is for concatenated result from long running api
                    </Typography>
                </Container>
            </Box>
            <Modal
                open={isModalOpen}
                onClose={handleModal}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
                maxWidth="md"
                style={{display:"flex" ,justifyContent:"center",alignItems:"center"}}
             >
            <Container
                maxWidth="md"  minwidth="300px" style={{flexDirection:"column",backgroundColor:"white",borderRadius:"10px",padding:"50px",marginInline:"30px",display:"flex",alignSelf:"",justifyContent:"fex-start",alignItems:"start",}}
            >
                <Typography style={{fontSize:"34px",fontWeight:"bold",textAlign:"center",marginBlock:"10px"}}>
                    Requesting the quote
                </Typography>
                <Typography style={{fontSize:"18px",fontWeight:"bold",textAlign:"center",marginBlock:"10px"}}>
                    Step1: Requesting the author...{authorStatus}
                </Typography>
                <Typography style={{fontSize:"18px",fontWeight:"bold",textAlign:"center",marginBlock:"10px"}}>
                    Step 2: Requesting the quote...{qouteStatus}
                </Typography>
                <Button style={{width:"100px",paddingX:"30px",marginBlock:"10px",paddingY:"10px",borderRadius:"20px",borderRightColor:'black',backgroundColor:"wheat",color:"black"}}
                    onClick={()=>handleModal()}
                >
                    Cancel
                </Button>
            </Container>
        </Modal>
        </Box>
    )
  }

export default Profile