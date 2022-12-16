import { Container,Row,Col,Button } from "react-bootstrap";
import BookmarkIcon from '@mui/icons-material/Bookmark';
import PhotoSizeSelectActualOutlinedIcon from '@mui/icons-material/PhotoSizeSelectActualOutlined';
import SmartDisplayIcon from '@mui/icons-material/SmartDisplay';
import EventIcon from '@mui/icons-material/Event';
import FormatIndentIncreaseIcon from '@mui/icons-material/FormatIndentIncrease';
import Nav_Icon from "./Nav_Icon";
import Feed from "./Feed"
import News from './News'
import Popup from "./popup";
import "./Main.css"
function Main(){

    const data1={
        display:'flex',
        gap:'10px',
        alignItems:'center',
        padding:'10px 10px'
    }
    return(
        <Container className="Main" fluid>
            <Row className="Main_row">
                <Col className="Info_Card" xs={2} >
                    <Container className="Card" >
                        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQMXZL2eS54TUB0FUDPOBcPoxkzM4Tgl4Qh5RRmbU-gVrMDdy90FNlA3qtwmYsDqrN_iQ&usqp=CAU" width={"100%"} height={"73pc"} className="Banner" />
                        <img src="https://i.pinimg.com/736x/3e/fc/8d/3efc8dc1def429160214387548fb09b7.jpg" width={"80px"} className="Logo"/>
                        <h5>Aribaskar.j.b.</h5>
                        <h6  style={{"color":"gray"}}>Front end developer</h6>
                        <hr ></hr>
                        <Container className="network">
                            <h6 style={{"color":"gray"}}>Connections</h6>
                            <h6>Grow your network</h6>
                        </Container>
                        <hr ></hr>
                        <Container className="network">
                            <h6 style={{"color":"gray"}}>Access exclusive tools & insights</h6>
                           <h6> <a href="" style={{"textAlign":"left"}}>Try Premium for free</a></h6>
                        </Container>
                        <hr style={{"marginBottom":"0px"}}></hr>
                        <Container className="my_item"  >
                            <BookmarkIcon style={{color:"gray",fontSize:"20px"}}/>
                            <h6 style={{"marginBottom":"0px"}}>My items</h6>
                        </Container>
                    </Container>
                    <Container style={{"textAlign":"left","display":"grid"}} className="recent">
                        <h6> <a href="">Groups</a></h6>
                        <h6> <a href="">Events</a></h6>
                        <h6> <a href="" >Followed Hashtags</a></h6>
                        <hr  style={{"marginTop":"0px","width":"100%","padding":"0px","marginBottom":"0px","marigin":"0px"}} ></hr>
                       <h6 style={{"textAlign":"center"}}>Discover more</h6>
                    </Container>
                </Col>
                <Col className="Info_Feed" >
                    <Container className="Feed">
                        <Container style={{"display":"flex","gap":"10px","alignItems":"center","marginTop":"10px"}}>
                            <img src="https://i.pinimg.com/736x/3e/fc/8d/3efc8dc1def429160214387548fb09b7.jpg"width={"60px"} style={{"borderRadius":"40px"}} height={"60px"}></img>
                            {/* <Button className="Feed_Button" ><h6 style={{"margin":"0"}}> Start a post</h6></Button> */}
                            <Popup />
                        </Container>
                        <Container style={{"display":"flex","gap":"8%"}}>
                            <Nav_Icon icone={<PhotoSizeSelectActualOutlinedIcon sx={{"color":"#378fe9"}}/>} Icone_Name="Home" data={data1} />
                            <Nav_Icon icone={<SmartDisplayIcon sx={{"color":"#5f9b41"}}/>} Icone_Name="Video" data={data1} />
                            <Nav_Icon icone={<EventIcon sx={{"color":"#c37d16"}}/>} Icone_Name="Event" data={data1} />
                            <Nav_Icon icone={<FormatIndentIncreaseIcon sx={{"color":"#e16745"}}/>} Icone_Name="Write article" data={data1} />
                        </Container>
                    </Container>
                    <hr style={{"margin":"15px 0"}}></hr>
                    <Container className="Feed_div">
                        <Feed/>
                        <Feed/>
                        <Feed/>
                        <Feed/>
                        <Feed/>
                        <Feed/>
                    </Container>
                </Col>
                <Col className="News_Feed">
                    <Container style={{display:"grid",gap:"20px"}}>
                        <News/>
                        <Container className="news_feed" >
                            <Container  style={{display:"flex",gap:"20px",justifyContent:"center"}}>
                                <a href="">About</a>
                                <a href="">Accessibility</a>
                                <a href="">Help Center</a>
                            </Container>
                            <Container style={{display:"flex",gap:"20px",justifyContent:"center"}}>
                                <a href="">Privacy&Terms</a>
                                <a href="">Ad Choices</a>
                            </Container>
                            <Container style={{display:"flex",gap:"20px",justifyContent:"center"}}>
                                <a href="">Advertising</a>
                                <a href="">Business Services</a>
                            </Container>
                            <Container style={{display:"flex",gap:"20px",justifyContent:"center"}}>
                                <a href="">Get the LinkedIn app</a>
                                <a href="">More</a>
                            </Container>
                        </Container>
                    </Container>
                    <Container style={{textAlign: "left",marginLeft: "20px"}}>
                        <img src="https://1000logos.net/wp-content/uploads/2017/03/Linkedin-Logo.png" width={"70px"}></img>
                        LinkedIn Corporation © 2022
                    </Container>
                </Col>
            </Row>
        </Container>
    )
}
export default Main;