import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom'; // Import useParams
import './admin.css';


export default function ViewFacultyProfile() {
  const [facultyData, setFacultyData] = useState(null);
  const { email } = useParams(); // Extract email from URL parameters

  useEffect(() => {
    const fetchFacultyData = async () => {
      try {
        const response = await axios.get('http://localhost:2004/viewfacultyprofile/${email}');
        setFacultyData(response.data);
      } catch (error) {
        console.error(error.message);
      }
    };

    if (email) {
      fetchFacultyData();
    }
  }, [email]);


  if (!email) {
    return null;
  }

  return (
    facultyData ? (
      <div className='profile-card'>
        <p><strong>Full Name:</strong> {facultyData.fullname}</p>
        <p><strong>Gender:</strong> {facultyData.gender}</p>
        <p><strong>Date of Birth:</strong> {facultyData.dateofbirth}</p>
        <p><strong>Email:</strong> {facultyData.email}</p>
        <p><strong>Location:</strong> {facultyData.location}</p>
        <p><strong>Contact:</strong> {facultyData.contact}</p>
      </div>
    ) : (
      <p>No Faculty Data Found</p>
    )
  );
}