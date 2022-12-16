import { Container,Button } from "react-bootstrap";
import "./Feed.css"
import Nav_Icon from "./Nav_Icon";
import SendRoundedIcon from '@mui/icons-material/SendRounded';
import SyncRoundedIcon from '@mui/icons-material/SyncRounded';
import ChatBubbleOutlineOutlinedIcon from '@mui/icons-material/ChatBubbleOutlineOutlined';
import ThumbUpOffAltOutlinedIcon from '@mui/icons-material/ThumbUpOffAltOutlined';
import PublicIcon from '@mui/icons-material/Public';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
function Feed(){
    const data1={
        display:'flex',
        gap:'10px',
        alignItems:'center',
        padding:'10px 10px'
    }
    return(
       <Container className="Post">
        <br></br>
            <Container className="Feed_Heed">
                <img src="https://freesvg.org/img/abstract-user-flat-4.png" width={"55px"} height={"55px"}/>
                <Container style={{gap:"0"}}>
                    <Container style={{display:"flex"}} className="More">
                        <h6 style={{"margin":"0",height:"fit-content"}}>Google Developers </h6>
                        <MoreHorizIcon />
                    </Container>
                    <h6 style={{"margin":"0",fontSize:"small"}}>followers</h6>
                    <h6 style={{margin:"0",fontSize:"small"}}>3d <PublicIcon style={{fontSize:"19px"}}/></h6>
                </Container>
            </Container>
            {/* <br></br> */}
            <Container style={{display:"grid",padding:"0"}}>
                <h6 style={{padding:"0 12px"}}>Begin the journey to better health by understanding the basics better. Talk to our health scientists.</h6>
                <img src="https://preply.com/wp-content/uploads/2020/05/Popular-Proverbs-2-1.jpg" width={"100%"} style={{paddingTop:"20px"}}></img>
                </Container>
                <hr style={{maginTop:"15px",marginBottom:"7px"}}></hr>
                <Container style={{gap:"3pc",display:"flex",paddingBottom:"5px"}}>
                    <Nav_Icon icone={<ThumbUpOffAltOutlinedIcon sx={{"color":"gray",fontSize:"27px"}}/>} Icone_Name="Home" data={data1}  />
                    <Nav_Icon icone={<ChatBubbleOutlineOutlinedIcon sx={{"color":"gray",fontSize:"27px"}}/>} Icone_Name="Home" data={data1}  />
                    <Nav_Icon icone={<SyncRoundedIcon sx={{"color":"gray",fontSize:"27px"}}/>} Icone_Name="Home" data={data1}  />
                    <Nav_Icon icone={<SendRoundedIcon sx={{"color":"gray",fontSize:"27px"}}/>} Icone_Name="Home" data={data1}  />

               </Container>

       </Container>
    )
}
export default Feed;