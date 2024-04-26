import React, { useEffect, useState } from 'react'

export default function FacultyHome() {
  const [facultyData, setFacultyData] = useState("");

  useEffect(() => {
    const storedFacultyData = localStorage.getItem('faculty');
    if (storedFacultyData) {
      const parsedFacultyData = JSON.parse(storedFacultyData);
      setFacultyData(parsedFacultyData)
    }
  }, []);

  return (
    <div>
      {facultyData && (
        <div>
          <h4>Welcome {facultyData.fullname}</h4>
        </div>
      )}
    </div>
  )
}
