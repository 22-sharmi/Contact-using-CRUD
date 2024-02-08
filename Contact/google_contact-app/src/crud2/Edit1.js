import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Snav from "../GoogleContact/Snav";

export default function Edit() {
  const [Id, SetId] = useState(0);
  const [Name, SetName] = useState("");
  const [Phone, SetPhNum] = useState("");
  const [Email, Setemail] = useState("");
  const [DOB, SetDob] = useState("");
  const navigator = useNavigate();

  function form(e) {
    e.preventDefault();
    if (Name + Phone + Email + DOB === "") {
      alert("Please Enter Your Name!");
    } else {
      axios
        .put(`http://localhost:222/${Id}`, {
          Uname: Name,
          PhNum: Phone,
          email: Email,
          Dob: DOB,
        })
        .then(() => navigator("/"))
        .catch((error) => console.error("Error updating data: ", error));
    }
    SetName("");
    SetPhNum("");
    Setemail("");
    SetDob("");
  }

  function back() {
    navigator("/");
  }

  useEffect(() => {
    SetId(localStorage.getItem("_ID"));
    SetName(localStorage.getItem("Name"));
    Setemail(localStorage.getItem("Email"));
    SetPhNum(localStorage.getItem("Phone"));
    SetDob(localStorage.getItem("date"));
  }, []);

  return (
    <div>
      <Snav />
      <center>
        <form onSubmit={form} className="edit-form">
          <div className="d-flex justify-content-between m-3">
            <span onClick={back} className="back-button">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 16 16"
                width="16"
                height="16"
              >
                <path d="M6.78 1.97a.75.75 0 0 1 0 1.06L3.81 6h6.44A4.75 4.75 0 0 1 15 10.75v2.5a.75.75 0 0 1-1.5 0v-2.5a3.25 3.25 0 0 0-3.25-3.25H3.81l2.97 2.97a.749.749 0 0 1-.326 1.275.749.749 0 0 1-.734-.215L1.47 7.28a.75.75 0 0 1 0-1.06l4.25-4.25a.75.75 0 0 1 1.06 0Z"></path>
              </svg>
            </span>
            <input type="submit" value={"Update"} className="btn btn-dark" />
          </div>
          <table className="edit-table">
            <tbody>
              <tr>
                <td>Name:</td>
                <td>
                  <input
                    type="text"
                    value={Name}
                    placeholder="Name"
                    onChange={(e) => SetName(e.target.value)}
                    className="edit-input"
                  />
                </td>
              </tr>
              <tr>
                <td>Email:</td>
                <td>
                  <input
                    type="email"
                    value={Email}
                    placeholder="Email"
                    onChange={(e) => Setemail(e.target.value)}
                    className="edit-input"
                  />
                </td>
              </tr>
              <tr>
                <td>Phone Number:</td>
                <td>
                  <input
                    type="text"
                    value={Phone}
                    placeholder="Phone Number"
                    onChange={(e) => SetPhNum(e.target.value)}
                    className="edit-input"
                  />
                </td>
              </tr>
              <tr>
                <td>Date Of Birth:</td>
                <td>
                  <input
                    type="date"
                    value={DOB}
                    placeholder="Date Of Birth"
                    onChange={(e) => SetDob(e.target.value)}
                    className="edit-input"
                  />
                </td>
              </tr>
            </tbody>
          </table>
        </form>
      </center>
    </div>
  );
}
