import { useEffect, useState } from "react";
import Footer from "./Footer";
import Header from "./Header";
import { createEmployee, getEmployeeById } from "../services/EmployeeService";
import { useParams } from "react-router-dom";

const initialEmployee = {
  firstName: "",
  lastName: "",
  email: "",
  gender: "",
  dob: "", 
  phNo: "",
};

export default function CreateEmployee() {
  const [employee, setEmployee] = useState(initialEmployee);
  const [msg, setMsg] = useState("");
  const { id } = useParams();
  const [errors, setErrors] = useState(initialEmployee);

  useEffect(() => {
    if (id) {
      getEmployeeById(id)
        .then((response) => {
          setEmployee(response.data);
        })
        .catch((error) => {
          console.error("Error fetching employee details:", error);
        });
    }
  }, [id]);

  function saveEmployee(e) {
    e.preventDefault();
    if (validateForm()) {
      createEmployee(employee)
        .then((response) => {
          setMsg(response.data.succMsg);
          setEmployee(initialEmployee);
        })
        .catch((error) => {
          if (error.response && error.response.status === 400) {
            setMsg(error.response.data.errMsg);
          }
        });
    }
  }

  function validateForm() {
    let valid = true;

    const errorsCopy = { ...errors };

    if (employee.firstName.trim()) {
      errorsCopy.firstName = "";
    } else {
      errorsCopy.firstName = "First name is required";
      valid = false;
    }

    if (employee.lastName.trim()) {
      errorsCopy.lastName = "";
    } else {
      errorsCopy.lastName = "Last name is required";
      valid = false;
    }

    if (employee.email.trim()) {
      errorsCopy.email = "";
    } else {
      errorsCopy.email = "Email is required";
      valid = false;
    }

    if (employee.gender.trim()) {
      errorsCopy.gender = "";
    } else {
      errorsCopy.gender = "Gender is required";
      valid = false;
    }

    if (employee.dob != null) {
      errorsCopy.dob = "";
    } else {
      errorsCopy.dob = "DOB is required";
      valid = false;
    }

    if (employee.phNo.trim()) {
      errorsCopy.phNo = "";
    } else {
      errorsCopy.phNo = "Phone number is required";
      valid = false;
    }

    setErrors(errorsCopy);

    return valid;
  }

  return (
    <>
      <Header />
      <main>
        <div className="container mt-4">
          <div className="card">
            <div className="card-body">
              <h2 className="mb-1">Employee Details</h2>
            </div>
          </div>
          <br></br>
          <div className="card">
            <div className="card-body">
              <h5 className="mb-3" style={{ color: "red" }}>
                {msg}
              </h5>
              <form>
                <div className="row">
                  <div className="col-md-6">
                    <label htmlFor="firstName" className="form-label">
                      First Name
                    </label>
                    <input
                      type="text"
                      id="firstName"
                      className={`form-control ${
                        errors.firstName ? "is-invalid" : ""
                      }`}
                      placeholder="First Name"
                      name="firstName"
                      value={employee.firstName}
                      onChange={(e) =>
                        setEmployee({ ...employee, firstName: e.target.value })
                      }
                    ></input>
                    {errors.firstName && (
                      <div className="invalid-feedback">{errors.firstName}</div>
                    )}
                  </div>
                  <div className="col-md-6">
                    <label htmlFor="lastName" className="form-label">
                      Last Name
                    </label>
                    <input
                      type="text"
                      id="lastName"
                      className={`form-control ${
                        errors.lastName ? "is-invalid" : ""
                      }`}
                      placeholder="Last Name"
                      name="lastName"
                      value={employee.lastName}
                      onChange={(e) =>
                        setEmployee({ ...employee, lastName: e.target.value })
                      }
                    ></input>
                    {errors.lastName && (
                      <div className="invalid-feedback">{errors.lastName}</div>
                    )}
                  </div>
                  <div className="col-md-6 mt-4">
                    <label htmlFor="email" className="form-label">
                      Email
                    </label>
                    <input
                      type="email"
                      id="email"
                      className={`form-control ${
                        errors.email ? "is-invalid" : ""
                      }`}
                      placeholder="Email"
                      name="email"
                      value={employee.email}
                      onChange={(e) =>
                        setEmployee({ ...employee, email: e.target.value })
                      }
                    ></input>
                    {errors.lastName && (
                      <div className="invalid-feedback">{errors.lastName}</div>
                    )}
                  </div>
                  <div className="col-md-6 mt-4">
                    <label htmlFor="gender" className="form-label">
                      Gender
                    </label>
                    <select
                      className={`form-control ${
                        errors.gender ? "is-invalid" : ""
                      }`}
                      onChange={(e) =>
                        setEmployee({ ...employee, gender: e.target.value })
                      }
                      value={employee.gender}
                    >
                      <option value="">-Gender-</option>
                      <option value="Male">Male</option>
                      <option value="Female">Female</option>
                    </select>
                    {errors.gender && (
                      <div className="invalid-feedback">{errors.gender}</div>
                    )}
                  </div>
                  <div className="col-md-6 mt-4">
                    <label htmlFor="dob" className="form-label">
                      DOB
                    </label>
                    <input
                      type="date"
                      id="dob"
                      className={`form-control ${
                        errors.dob ? "is-invalid" : ""
                      }`}
                      name="date"
                      value={employee.dob}
                      onChange={(e) =>
                        setEmployee({ ...employee, dob: e.target.value })
                      }
                    ></input>
                    {errors.dob && (
                      <div className="invalid-feedback">{errors.dob}</div>
                    )}
                  </div>
                  <div className="col-md-6 mt-4">
                    <label htmlFor="phno" className="form-label">
                      Phone Number
                    </label>
                    <input
                      type="number"
                      id="phno"
                      className={`form-control ${
                        errors.phNo ? "is-invalid" : ""
                      }`}
                      placeholder="Phone Number"
                      name="phno"
                      value={employee.phNo}
                      onChange={(e) =>
                        setEmployee({ ...employee, phNo: e.target.value })
                      }
                    ></input>
                    {errors.phNo && (
                      <div className="invalid-feedback">{errors.phNo}</div>
                    )}
                  </div>
                  <div className="col mt-4">
                    <button
                      type="submit"
                      className="btn btn-primary"
                      onClick={saveEmployee}
                    >
                      Save
                    </button>
                    &nbsp;
                    <button type="reset" className="btn btn-danger">
                      Reset
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
