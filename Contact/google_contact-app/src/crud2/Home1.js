import { useState, useEffect } from "react"; 
import { Link } from "react-router-dom";
import axios from "axios";

import { Mongo } from "../GoogleContact/Mongo";  
import { FaEdit, FaTrash } from "react-icons/fa";

export default function Home() {

  const [data, setData] = useState([]);

  const EditIcon = () => <FaEdit />;

  const DeleteIcon = () => <FaTrash />;

  useEffect(() => {
    axios.get(Mongo)
      .then(response => {
        console.log(response.data);
        setData(response.data);  
      });
  }, []);

  function deleteRow(_id) {
    axios.delete(`${Mongo}/${_id}`) 
      .then(() => {
        axios.get(Mongo)
          .then((response) => {
            console.log(response.data);
            setData(response.data);
          });
      });
  }

  function editRow(row) {
    const { _id, name, email, phone, dob } = row;
    
    localStorage.setItem("_ID", _id);
    localStorage.setItem("Name", name);
    localStorage.setItem("Email", email); 
    localStorage.setItem("Phone", phone);
    localStorage.setItem("DOB", dob);
  }
 
  return (
    <div className="container">

      <div className="table-responsive">

        <table className="table">
        
          <thead>
            <tr>
              <th>ID</th>
              <th>Name</th>
              <th>Email</th>
              <th>Phone</th>
              <th>DOB</th>
              <th>Actions</th>
            </tr>
          </thead>

          <tbody>
           {data.map(row => (
             <tr key={row._id}>
               <td>{row._id}</td>  
               <td>{row.Name}</td>
               <td>{row.Email}</td>
               <td>{row.Phone}</td>
               <td>{row.DOB}</td>
               
               <td className="d-flex justify-content-evenly">
                 <Link to="/edit">
                  <button className="btn btn-white" onClick={() => editRow(row)}> <EditIcon /> </button>
                  
                 </Link>
                    <button className="btn btn-white" onClick={() => deleteRow(row._id)}><DeleteIcon/></button>
                
               </td>

             </tr>
           ))}
         </tbody>
       
       </table>

     </div>

   </div>
  );  
}