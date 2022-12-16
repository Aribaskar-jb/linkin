import { Container,Row,Col,Form } from "react-bootstrap";
import SearchIcon from '@mui/icons-material/Search';
import HomeIcon from '@mui/icons-material/Home';
import AppsIcon from '@mui/icons-material/Apps';
import PeopleIcon from '@mui/icons-material/People';
import MessageIcon from '@mui/icons-material/Message';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import NotificationsIcon from '@mui/icons-material/Notifications';
import BusinessCenterIcon from '@mui/icons-material/BusinessCenter';
import './Nav.css'
import { useState } from 'react';
import Nav_Icon from "./Nav_Icon";
function Nav(){
    const isHover = useState(true);
    const data1 = {
        backgroundColor: isHover ? 'transparent' : 'rgb(231, 231, 231)',
    };
    return(
        <Container className="Main_Nav"fluid >
            <Row className="Row_Nav">
                <Col className="Col_Nav">
                    <img src="https://e7.pngegg.com/pngimages/642/372/png-clipart-link-in-logo-linkedin-logo-linkedin-icons-no-attribution-miscellaneous-blue.png" width={"45px"} height={"38px"} style={{"borderRadius":"5px"}}/>
                    <Container className="Search_Box" >
                        <SearchIcon/>
                        <input placeholder="Search" id="Search"/>  
                    </Container>       
                </Col>
                <Col className="Col_Nav2">
                   <Nav_Icon icone={<HomeIcon sx={{"fontSize":"29px" }}/>} Icone_Name="Home" data={data1} />
                   <Nav_Icon icone={<PeopleIcon sx={{"fontSize":"29px","color":"gray","color":"gray"}}/>} Icone_Name="My Network"data={data1}/>
                   <Nav_Icon icone={<BusinessCenterIcon sx={{"fontSize":"29px","color":"gray"}}/>} Icone_Name="Jobs"data={data1}/>
                   <Nav_Icon icone={<MessageIcon sx={{"fontSize":"27px", "marginTop":"3px","color":"gray"}}/>} Icone_Name="Messaging"data={data1}/>
                   <Nav_Icon icone={<NotificationsIcon sx={{"fontSize":"29px","color":"gray"}}/>} Icone_Name="Notification"data={data1}/>
                   <Nav_Icon icone={<AccountCircleIcon sx={{"fontSize":"29px","color":"gray"}}/>} Icone_Name="Me"data={data1}/>
                    <div className="line"></div>
                   <Nav_Icon icone={<AppsIcon sx={{"fontSize":"29px","color":"gray"}}/>} Icone_Name="Work" />
                </Col>
            </Row>
        </Container>
    )
}
export default Nav;