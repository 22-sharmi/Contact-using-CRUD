// import { Link } from "react-router-dom";

// export default function Home2() {

//   const [data, setData] = useState([]);

//   useEffect(() => {
//     axios.get(Mongo).then((y)=>{
//         console.log(y.data);
//         setData(y.data);
//     }) 
//   }, []);

//   function deleteRow(id) {
//     axios.delete(`http://localhost:222/${a}`).then(()=>{
//         axios.get(Mongo).then((y)=>{
//             console.log(y.data);
//             setData(y.data);
//         }) 
//     })
//     console.log(a);
//   }
   
//   function editRow(row) {
//     localStorage.setItem('_ID',id)
//         localStorage.setItem('Name',Name)
//         localStorage.setItem('Email',Email)
//         localStorage.setItem('Phone',Phone)  
//         localStorage.setItem('date',DOB) 
//   }

//   return (
//     <div className="container">
    
//       <div className="table-responsive">

//         <table className="table">
        
//           <thead>  
//             <tr>
//               <th>ID</th>
//               <th>Name</th>
//               <th>Email</th>
//               <th>Phone</th>
//               <th>DOB</th>
//               <th>Actions</th>
//             </tr>
//           </thead>

//           <tbody>
//             {data.map(row => (
//               <tr key={row._id}>
//                 <td>{row._id}</td>  
//                 <td>{row.name}</td>
//                 <td>{row.email}</td>
//                 <td>{row.phone}</td>
//                 <td>{row.dob}</td>
                
//                 <td>
//                   <Link to="/edit">
//                     <EditIcon onClick={() => editRow(row)}/>
//                   </Link>
            
//                   <DeleteIcon onClick={() => deleteRow(row._id)}/> 
//                 </td>

//               </tr>
//             ))}
//           </tbody>

//         </table>

//       </div>
      
//     </div>
//   );
// }