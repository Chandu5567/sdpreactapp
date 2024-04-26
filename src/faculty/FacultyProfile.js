import React, { useEffect, useState } from 'react';
import './faculty.css';


export default function FacultyProfile() {
  const [facultyData, setFacultyData] = useState(null);

  useEffect(() => {
    const storedFacultyData = localStorage.getItem('faculty');
    if (storedFacultyData) {
      const parsedFacultyData = JSON.parse(storedFacultyData);
      setFacultyData(parsedFacultyData);
    }
  }, []);

  return (
    facultyData ? (
      <div className='profile-card'>
        <p><strong>Full Name:</strong> {facultyData.fullname}</p>
        <p><strong>Gender:</strong> {facultyData.gender}</p>
        <p><strong>Date of Birth:</strong> {facultyData.dateofbirth}</p>
        <p><strong>Email:</strong> {facultyData.email}</p>
        <p><strong>Contact:</strong> {facultyData.contact}</p>
      </div>
    ) : (
      <p>No faculty Data Found</p>
    )
  );
}