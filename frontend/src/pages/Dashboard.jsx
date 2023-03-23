import axios from "axios";
import { useEffect,useState } from "react";
import { useNavigate } from "react-router-dom";
import { Backendurl } from "../backend.url";
import { GetTokenFromLocalStorage } from "../functions/getTokenFromLS";
const Dashboard = () => {
const navigate=useNavigate()
const [data, setdata] = useState([]);

async function getData(token){
   
    axios.get(`${Backendurl}/country`,{
        headers:{
            token:token
        }
    }).then((res)=>{
setdata(res.data)

    }).catch((err)=>navigate("/login"))
}

useEffect(() => {
    
const token =GetTokenFromLocalStorage()
getData(token)


    return () => {
        setdata([])
    }

}, []);
console.log(data)



    return (
        <div style={{textAlign:"center"}} >
<h1 style={{color:"orange"}}>DashBoard</h1>
            <div style={{display:"flex",justifyContent:"center"}}>
            
            
<div style={{display:"grid",gridTemplateColumns:"repeat(4,1fr)", padding:"4%",gap:"40px"}}>

    {data[0]&&data.map((ele,index)=>(
        <div style={{boxShadow:"rgba(100, 100, 111, 0.2) 0px 7px 29px 0px",borderRadius:"10px"}}  key={index}>
            <h4 style={{color:"green"}}>{ele.name}</h4>
            <p>code-{ele.code}</p>
            <p>Dial Code-{ele.dial_code}</p>
        </div>
    ))}
</div>
</div>

        </div>
    );
}

export default Dashboard;
