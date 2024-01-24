import axios from "axios";

const REST_API_BASE_URL = "http://localhost:8080/api/";

export const listEmployees = () => axios.get(`${REST_API_BASE_URL}employees`);
export const createEmployee = (employee) =>
  axios.post(`${REST_API_BASE_URL}create-employee`, employee);
export const getEmployeeById = (id) =>
  axios.get(`${REST_API_BASE_URL}edit-employee/${id}`);
export const deleteEmployeeById = (id) =>
  axios.delete(`${REST_API_BASE_URL}employee/${id}`);
