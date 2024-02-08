import axios from "axios";
import { useState } from "react"
// import { API } from "../crud/API";
// import Nav from "../GoogleContact/Nav";
import Snav from "../GoogleContact/Snav";
import { useNavigate } from "react-router-dom";
import { Mongo } from "../GoogleContact/Mongo";
import "./New.css"

export default function New(){
    const[Name,SetName]=useState([]);
    const[Phone,SetPhNum]= useState([]);
    const [Email,Setemail]=useState([]);
    const[DOB,SetDob]=useState([])
    const navigator=useNavigate()
    function form(e){
        e.preventDefault();
        if(Name + Phone + Email + DOB ===""){
            alert('Please Enter Your Name!')
        }
        else{
            axios.post(Mongo,{Uname:Name,PhNum:Phone,email:Email,Dob:DOB})
            console.log(Name + Phone + Email + DOB);
            navigator('/')
        }
        SetName('')
        SetPhNum('')
        Setemail('')
        SetDob('')
    }
    function back(){
        navigator('/')
    }
    return(
        <div >
            <Snav/>
            <center><div className="new_form">
            <form onSubmit={form} >
            <div className="d-flex justify-content-between m-3"><span onClick={back}><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" width="16" height="16"><path d="M6.78 1.97a.75.75 0 0 1 0 1.06L3.81 6h6.44A4.75 4.75 0 0 1 15 10.75v2.5a.75.75 0 0 1-1.5 0v-2.5a3.25 3.25 0 0 0-3.25-3.25H3.81l2.97 2.97a.749.749 0 0 1-.326 1.275.749.749 0 0 1-.734-.215L1.47 7.28a.75.75 0 0 1 0-1.06l4.25-4.25a.75.75 0 0 1 1.06 0Z"></path></svg></span>
            <input type="submit" value={'save'} className="btn btn-dark"/></div>
                <table className="new-table">
                    <tr>
                        <td>Name:</td>
                        <td><input type="text" value={Name} placeholder="Name" onChange={(e)=>SetName(e.target.value)}/></td>
                    </tr>
                    <tr>
                        <td>Email:</td>
                        <td><input type="email" value={Email} placeholder="Email" onChange={(e)=>Setemail(e.target.value)}/></td>
                    </tr>
                    <tr>
                        <td>Phone Number:</td>
                        <td><input type="text" value={Phone} placeholder="Phone Number" onChange={(e)=>SetPhNum(e.target.value)}/> </td>
                    </tr>
                    <tr>
                        <td>Date Of Birth:</td>
                        <td><input type="date" value={DOB} placeholder="Date Of Birth" onChange={(e)=>SetDob(e.target.value)}/></td>
                    </tr>
                </table>
            </form>
            </div></center>
        </div>
    )
}