import React, { useEffect, useState } from 'react';
import axios from 'axios';


export default function AdminHome() {
  const [adminData, setAdminData] = useState("");
  const [counts, setCounts] = useState(null);
  const [error, setError] = useState('');

  useEffect(() => {
    const storedAdminData = localStorage.getItem('admin');
    if (storedAdminData) {
      const parsedAdminData = JSON.parse(storedAdminData);
      setAdminData(parsedAdminData);
      fetchCounts();
    }
  }, []);

  const fetchCounts = async () => {
    try {
      const response = await axios.get('http://localhost:2004/analysis');
      setCounts(response.data);
    } catch (error) {
      setError('Failed to fetch counts');
    }
  };

  return (
    <div>
      {adminData && (
        <div style={{alignContent:"center"}}> 
          <h4>Welcome {adminData.username}</h4>
          {counts ? (
            <div className="row">

             <div className="column">
                <div className="card">
                  <h3>Facultyies</h3>
                  <p>{counts.facultyCount}</p>
                </div>
              </div>

              <div className="column">
                <div className="card">
                  <h3>Students</h3>
                  <p>{counts.studentCount}</p>
                </div>
              </div>

            </div>
          ) : (
            <p>Loading counts...</p>
          )}
          {error && <p style={{ color: 'red' }}>{error}</p>}
        </div>
      )}
    </div>
  );
}