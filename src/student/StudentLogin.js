import React, { useState } from 'react';
import './student.css';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';



export default function StudentLogin({onStudentLogin}) 
{
  const [formData, setFormData] = useState({
    ID: '',
    password: ''
  });
  const [message,setMessage] = useState("")
  const [error,setError] = useState("")

  const navigate = useNavigate();

  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormData({ ...formData, [id]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try 
    {
      const response = await axios.post('http://localhost:2004/checkstudentlogin', formData);
      if (response.data!=null) 
      {
        onStudentLogin();
        
        localStorage.setItem('student', JSON.stringify(response.data));

        navigate("/studenthome");
        //window.location.href = "https://newerp.kluniversity.in/"
      } 
      else 
      {
        setMessage("Login Failed")
        setError("")
      }
    } 
    catch (error) 
    {
      setMessage("")
      setError(error.message)
    }
  };

  return (
    <div>
      <h3 align="center"><u>Student Login</u></h3>
      {
        message ? <h4 align="center">{message}</h4> : <h4 align="center">{error}</h4>
      }
      <form onSubmit={handleSubmit}>
        <div>
          <label>ID</label>
          <input type="ID" id="ID" pattern="^[0-9]+$" placeholder="MUST be number" value={formData.ID} onChange={handleChange} required />
        </div>
        <div>
          <label>Password</label>
          <input type="password" id="password" value={formData.password} onChange={handleChange} required />
        </div>
        <button type="submit" className="button">Login</button>
      </form>
    </div>
  );
}