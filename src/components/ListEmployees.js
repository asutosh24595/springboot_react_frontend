import { useEffect, useState } from "react";
import { deleteEmployeeById, listEmployees } from "../services/EmployeeService";
import Header from "./Header";
import Footer from "./Footer";
import { useNavigate } from "react-router-dom";

export default function ListEmployees() {
  const [employees, setEmployees] = useState([]);
  const [msg, setMsg] = useState("");

  const navigator = useNavigate();

  useEffect(() => {
    listEmployees()
      .then((response) => {
        setEmployees(response.data);
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);

  function updateEmployee(id) {
    navigator(`/edit-employee/${id}`);
  }

  function deleteEmployee(id) {
    deleteEmployeeById(id)
      .then((response) => {
        setEmployees((prevEmployees) => {
          return prevEmployees.filter((employee) => employee.empId !== id);
        });
        setMsg(response.data.succMsg);
      })
      .catch((error) => {
        console.error(error);
      });
    navigator("/employees");
  }

  return (
    <>
      <Header />
      <div className="container mt-4">
        <div className="card">
          <div className="card-body">
            <h2 className="mb-3">View Employees</h2>
          </div>
        </div>
        <br></br>
        <br></br>
        <h5 style={{ color: "red" }}>{msg}</h5>
        <div className="card">
          <div className="card-body">
            <table className="table table-striped table-bordered text-center">
              <thead>
                <tr>
                  <th>S.No</th>
                  <th>First Name</th>
                  <th>Last Name</th>
                  <th>Email</th>
                  <th>Gender</th>
                  <th>Phone No</th>
                  <th>Action</th>
                </tr>
              </thead>
              <tbody>
                {employees.length !== 0 ? (
                  employees.map((employee) => (
                    <tr key={employee.empId}>
                      <td>{employee.empId}</td>
                      <td>{employee.firstName}</td>
                      <td>{employee.lastName}</td>
                      <td>{employee.email}</td>
                      <td>{employee.gender}</td>
                      <td>{employee.phNo}</td>
                      <td>
                        <button
                          className="btn btn-primary"
                          onClick={() => updateEmployee(employee.empId)}
                        >
                          Edit
                        </button>
                        &nbsp;
                        <button
                          className="btn btn-danger"
                          onClick={() => deleteEmployee(employee.empId)}
                        >
                          Delete
                        </button>
                      </td>
                    </tr>
                  ))
                ) : (
                  <tr>
                    <td colSpan="7" class="text-center text-danger">
                      No Records Found
                    </td>
                  </tr>
                )}
              </tbody>
            </table>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}
