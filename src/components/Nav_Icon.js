import './Nav_Icon.css'
function Nav_Icon(props){
    let a=props.data
    return(
        <div className="Nav_Icon" style={a}>
             {props.icone}
           <h6 style={{"fontSize":"15px"}}> {props.Icone_Name}</h6>
        </div>
    )
}
export default Nav_Icon;