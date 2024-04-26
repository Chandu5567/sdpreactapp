import React, { useState, useEffect } from 'react';
import axios from 'axios';


export default function StudentCourse() {
  const [courses, setCourses] = useState([]);
  const [formDatas, setFormDatas] = useState([]);
  const [message, setMessage] = useState('');
  const [error, setError] = useState('');

  useEffect(() => {
    fetchCourses();
  }, []);

  const fetchCourses = async () => {
    try {
      const response = await axios.get('http://localhost:2004/viewcourses');
      setCourses(response.data);
      setFormDatas(response.data.map(() => ({
        courseno: '',
        coursename: '',
        modes: '',
        l: '',
        t: '',
        p: '',
        s: ''
      })));
    } catch (error) {
      console.error(error.message);
    }
  }

  const handleChange = (index, e) => {
    const { id, value } = e.target;
    const newFormDatas = [...formDatas];
    newFormDatas[index] = { ...newFormDatas[index], [id]: value };
    setFormDatas(newFormDatas);
  };

  const handleSubmit = async (index) => {
    try {
      const response = await axios.post('http://localhost:2004/insertcourse', formDatas[index]);
      if (response.status === 200) {
        const newFormDatas = [...formDatas];
        newFormDatas[index] = {
          courseno: '',
          coursename: '',
          modes: '',
          l: '',
          t: '',
          p: '',
          s: '',
        };
        setFormDatas(newFormDatas);
      }
      setMessage(response.data);
      setError('');
    } catch (error) {
      setError(error.response.data);
      setMessage('');
    }
  };

  return (
    <div style={{ textAlign: 'center' }}>
      <h1>Course Registration</h1>
      <table border={1} align="center" style={{ width: 'auto', height: 'auto' }}>
        <thead>
          <tr>
            <th>Course No</th>
            <th>Course Name</th>
            <th>Modes</th>
            <th>L</th>
            <th>T</th>
            <th>P</th>
            <th>S</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {Array.isArray(courses) && courses.length > 0 ? (
            courses.map((course, index) => (
              <tr key={index}>
                <td>
                  <select id="courseno" value={formDatas[index].courseno} onChange={(e) => handleChange(index, e)} required>
                    <option value="">Select Section</option>
                    <option value="C-2">C-2</option>
                    <option value="C-3">C-3</option>
                    <option value="C-4">C-4</option>
                    <option value="C-5">C-5</option>
                  </select>
                </td>
                <td>
                  <select id="coursename" value={formDatas[index].coursename} onChange={(e) => handleChange(index, e)} required>
                    <option value="">Select Section</option>
                    <option value="Mern">Mern</option>
                    <option value="Python">Python</option>
                    <option value="C">C</option>
                    <option value="OS">OS</option>
                  </select>
                </td>
                <td>
                  <select id="modes" value={formDatas[index].modes} onChange={(e) => handleChange(index, e)} required>
                    <option value="">Select Section</option>
                    <option value="Regular">Regular</option>
                    <option value="Advanced">Advanced</option>
                  </select>
                </td>
                <td>
                  <select id="l" value={formDatas[index].l} onChange={(e) => handleChange(index, e)} required>
                    <option value="">Select Section</option>
                    <option value="s11">s11</option>
                    <option value="s12">s12</option>
                    <option value="s21">s21</option>
                    <option value="s22">s22</option>
                    <option value="s31">s31</option>
                    <option value="s32">s32</option>
                  </select>
                </td>
                <td>
                <select id="t" value={formDatas[index].t} onChange={(e) => handleChange(index, e)} required>
                    <option value="">Select Section</option>
                    <option value="s11">s11</option>
                    <option value="s12">s12</option>
                    <option value="s21">s21</option>
                    <option value="s22">s22</option>
                    <option value="s31">s31</option>
                    <option value="s32">s32</option>
                  </select>
                </td>
                <td>
                  <select id="p" value={formDatas[index].p} onChange={(e) => handleChange(index, e)} required>
                    <option value="">Select Section</option>
                    <option value="s11">s11</option>
                    <option value="s12">s12</option>
                    <option value="s21">s21</option>
                    <option value="s22">s22</option>
                    <option value="s31">s31</option>
                    <option value="s32">s32</option>
                  </select>
                </td>
                <td>
                  <select id="s" value={formDatas[index].s} onChange={(e) => handleChange(index, e)} required>
                    <option value="">Select Section</option>
                    <option value="s11">s11</option>
                    <option value="s12">s12</option>
                    <option value="s21">s21</option>
                    <option value="s22">s22</option>
                    <option value="s31">s31</option>
                    <option value="s32">s32</option>
                  </select>
                </td>
                <td>
                  <button onClick={() => handleSubmit(index)} className='button'>Register Course</button>
                </td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan="9">Data Not Found</td>
            </tr>
          )}
        </tbody>
      </table>
      {error && <p>{error}</p>}
      {message && <p>{message}</p>}
    </div>
  );
}