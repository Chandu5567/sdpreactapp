import React, { useEffect, useState } from 'react';
import './student.css';


export default function StudentProfile() {
  const [studentData, setStudentData] = useState(null);

  useEffect(() => {
    const storedStudentData = localStorage.getItem('student');
    if (storedStudentData) {
      const parsedStudentData = JSON.parse(storedStudentData);
      setStudentData(parsedStudentData);
    }
  }, []);

  return (
    studentData ? (
      <div className='profile-card'>
        <p><strong align="center">Full Name:</strong> {studentData.fullname}</p>
        <p><strong>Gender:</strong> {studentData.gender}</p>
        <p><strong>Date of Birth:</strong> {studentData.dateofbirth}</p>
        <p><strong>Email:</strong> {studentData.email}</p>
        <p><strong>Location:</strong> {studentData.location}</p>
        <p><strong>Contact:</strong> {studentData.contact}</p>
      </div>
    ) : (
      <p>No student Data Found</p>
    )
  );
}