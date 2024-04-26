import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';


export default function ViewFacultys() {
  const navigate = useNavigate();

  const [facultys, setFacultys] = useState([]);

  const fetchFacultys = async () => {
    try {
      const response = await axios.get('http://localhost:2004/viewfacultys');
      setFacultys(response.data);
    } catch (error) {
      console.error(error.message);
    }
  }

  useEffect(() => {
    fetchFacultys();
  }, []);

  const deleteFaculty= async (email) => {
    try {
      await axios.delete('http://localhost:2004/deletefaculty/${email}');
      fetchFacultys();
    } catch (error) {
      console.error(error.message);
    }
  }

  const viewFaculty = async (email) => {
    try 
    {
      navigate('http://localhost:2004/viewfacultyprofile/${email}')
      window.location.reload()
    } 
    catch (error) 
    {
      console.error(error.message);
    }
  }

  return (
    <div style={{ textAlign: 'center' }}>
      <h1>Facultys</h1>
      
      <table border={1} align="center" style={{ width: 'auto', height: 'auto' }}>
          <thead>
            <tr>
              <th>ID</th>
              <th>Full Name</th>
              <th>Gender</th>
              <th>Date of Birth</th>
              <th>Email</th>
              <th>worked At</th>
              <th>Location</th>
              <th>Contact</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
  {Array.isArray(facultys) && facultys.length > 0 ? (
    facultys.map((faculty, index) => (
      <tr key={index}>
        <td>{faculty.ID}</td>
        <td>{faculty.fullname}</td>
        <td>{faculty.gender}</td>
        <td>{faculty.dateofbirth}</td>
        <td>{faculty.email}</td>
        <td>{faculty.workedat}</td>
        <td>{faculty.location}</td>
        <td>{faculty.contact}</td>
        <td>
        <button onClick={() => viewFaculty(faculty.email)} className='button'>View</button>
          <button onClick={() => deleteFaculty(faculty.email)} className='button'>Delete</button>
        </td>
      </tr>
    ))
  ) : (
    <tr>
      <td colSpan="7">Data Not Found</td>
    </tr>
  )}
</tbody>
        </table>
    </div>
  );
}