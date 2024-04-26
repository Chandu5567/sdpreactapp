import React, { useState } from 'react';
import axios from 'axios';


export default function AddCourse() 
{
  const [formData, setFormData] = useState({
    courseno:'',
    coursename: '',
    modes: ''
  });

  //message state variable
  const [message, setMessage] = useState('');
  //error state variable
  const [error, setError] = useState('');

  const handleChange = (e) => 
  {
    setFormData({...formData, [e.target.id]: e.target.value});
  };

  const handleSubmit = async (e) => 
  {
    e.preventDefault();
    try 
    {
      const response = await axios.post('http://localhost:2004/addcourse', formData);
      if (response.status === 200) 
      {
        setFormData({
          courseno:'',
          coursename: '',
          modes: '',
        });
      }
      setMessage(response.data);
      setError('');
    } 
    catch(error) 
    {
      setError(error.response.data);
      setMessage('');
    }
  };
  
  return (
    <div>
      <h3 align="center"><u>Add Courses</u></h3>
      {
        message ? <h4 align="center">{message}</h4> : <h4 align="center">{error}</h4>
      }

      <form onSubmit={handleSubmit}>
      <div>
        <label>Course No</label>
          <input type="text" id="courseno" value={formData.courseno} onChange={handleChange} required />
          <label>Course Name</label>
          <input type="text" id="coursename" value={formData.coursename} onChange={handleChange} required />
        </div>
        <div>
          <label>Modes</label>
          <select id="modes" value={formData.modes} onChange={handleChange} required>
            <option value="">Select Modes</option>
            <option value="Regular">Regular</option>
            <option value="Advanced">Advanced</option>
          </select>
        </div> 
        <button type="submit">Add</button>
      </form>
    </div>
  );
}
