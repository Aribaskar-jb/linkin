import { Button, Container } from "react-bootstrap";
import './News.css'
import InfoIcon from '@mui/icons-material/Info';
import Nav_Icon from "./Nav_Icon";
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
function News(){
    const data1={
        display:'flex',
        gap:'10px',
        alignItems:'center',
        padding:'10px 10px',
        width:"fit-content",
        flexDirection: "row-reverse"
    }
    return(
        <Container className="News">
            <Container style={{display:"flex",justifyContent:"space-between"}}>
                <h5>LinkedIn News</h5>
                <InfoIcon/>
            </Container>
            <ul>
                <li>
                <h6>UPI payment surge across cities</h6>
                <h6 style={{fontSize:"15px",color:"gray"}}>5h ago</h6>
                </li>
                <li>
                <h6>UPI payment surge across cities</h6>
                <h6 style={{fontSize:"15px",color:"gray"}}>5h ago</h6>
                </li>
                <li>
                <h6>UPI payment surge across cities</h6>
                <h6 style={{fontSize:"15px",color:"gray"}}>5h ago</h6>
                </li>
                <li>
                <h6>UPI payment surge across cities</h6>
                <h6 style={{fontSize:"15px",color:"gray"}}>5h ago</h6>
                </li>
            </ul>
            <Nav_Icon Icone_Name="Show more"data={data1} icone={<KeyboardArrowDownIcon/>}/>

        </Container>
    )
}
export default News;