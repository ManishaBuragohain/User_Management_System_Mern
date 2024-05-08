import axios from "axios";
import React, { useEffect, useState } from "react";
// import { DeleteUser } from "../../../../backend/controller/UserController";

const Table = ({ UpdateUserFunc,DeleteUser }) => {
  const [data, setData] = useState([]);

  useEffect(() => {
    async function FetchData() {
      try {
        const user = await axios.get("http://localhost:4000/api/get");
        const response = user.data;
        //console.log(response.users);
        setData(response);
      } catch (error) {
        console.log("error in fetching the data", error);
      }
    }
    FetchData();
  }, [data]);
  return (
    <>
      <div className="container">
        <div className="table-wrapper">
          <div className="table-title">
            <div className="row">
              <div className="col-sm-6">
                <h2>
                  Manage <b>Employees</b>
                </h2>
              </div>
              <div className="col-sm-6">
                <a
                  href="#"
                  className="btn btn-success"
                  data-bs-toggle="modal"
                  data-bs-target="#addEmployeeModal"
                >
                  {/* <i className="material-icons">&#xE147;</i>{" "} */}

                  <span> <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    fill="currentColor"
                    className="bi bi-plus"
                    viewBox="0 0 16 16"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M8 2a.5.5 0 0 1 .5.5V7h4.5a.5.5 0 0 1 0 1H8v4.5a.5.5 0 0 1-1 0V8H2.5a.5.5 0 0 1 0-1H7V2.5A.5.5 0 0 1 8 2z"
                    />
                  </svg>
                    
                    Add New Employee</span>
                 
                </a>
              </div>
            </div>
          </div>
          <table className="table table-striped table-hover">
            <thead>
              <tr>
                <th>Name</th>
                <th>Father</th>
                <th>Email</th>
                <th>Phone</th>
                <th>Actions</th>
              </tr>
            </thead>
            {data.user?.map((element, index) => {
              return (
                <>
                  <tr key={index} className="mx-2 my-2">
                    <td >{element.name}</td>
                    <td>{element.fathername}</td>
                    <td>{element.email}</td>
                    <td>{element.phone}</td>

                    <td>
                      <a
                        href="#"
                        className="edit cursor-pointer"
                        data-bs-toggle="modal"
                        data-bs-target="#editEmployeeModal"
                        onClick={() => UpdateUserFunc(element._id, element)}
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="16"
                          height="16"
                          fill="currentColor"
                          className="bi bi-pencil-square"
                          viewBox="0 0 16 16"
                        >
                          <path d="M12.354 0l2.146 2.146a1 1 0 0 1 0 1.414l-9 9a1 1 0 0 1-.39.242l-3 1a1 1 0 0 1-1.243-1.243l1-3a1 1 0 0 1 .242-.39l9-9a1 1 0 0 1 1.414 0zm-.293.293-9 9-1 3 3-1 9-9-2.586-2.586a1 1 0 0 1-.293-.707v-.586h-2v2h-.586a1 1 0 0 1-.707-.293z" />
                          <path
                            fill-rule="evenodd"
                            d="M2.5 13a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5H1a.5.5 0 0 1-.5-.5v-1a.5.5 0 0 1 .5-.5h1.5z"
                          />
                        </svg>
                      </a>
                      <a
                        href="#"
                        className="delete cursor-pointer"
                        data-bs-toggle="modal"
                        data-bs-target="#deleteEmployeeModal"
                        onClick={()=>DeleteUser(element._id)}
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="16"
                          height="16"
                          fill="currentColor"
                          className="bi bi-trash"
                          viewBox="0 0 16 16"
                        >
                          <path d="M1.5 5.5a.5.5 0 0 1 .5-.5h12a.5.5 0 0 1 .5.5V6h-13v-.5zm1 1V14a1 1 0 0 0 1 1h9a1 1 0 0 0 1-1V6.5h-11zm3-3V4a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v1.5h-4z" />
                        </svg>
                      </a>
                    </td>
                  </tr>
                </>
              );
            })}
          </table>
        </div>
      </div>
    </>
  );
};

export default Table;
