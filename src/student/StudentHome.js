import React, { useEffect, useState } from 'react';


export default function StudentHome() {
  const [studentData, setStudentData] = useState("");

  useEffect(() => {
    const storedStudentData = localStorage.getItem('student');
    if (storedStudentData) {
      const parsedStudentData = JSON.parse(storedStudentData);
      setStudentData(parsedStudentData)
    }
  }, []);

  return (
    <div>
    {studentData && (
      <div>
        <h4 align="center">Welcome {studentData.fullname}</h4>
      </div>
    )}
  </div>
);
}
