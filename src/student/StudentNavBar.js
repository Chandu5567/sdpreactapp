import React from 'react'
import { Route, Routes, Link , useNavigate} from 'react-router-dom'
import './student.css'
import StudentHome from './StudentHome';
import StudentCourse from './StudentCourse';
import StudentProfile from './StudentProfile';
import UpdateStudentProfile from './UpdateStudentProfile';


export default function StudentNavBar() 
{
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem('isStudentLoggedIn');
    localStorage.removeItem('student');

    navigate('/studentlogin');
    window.location.reload()
  };
  return (
    <div>

    <nav>
     <ul>
     <Link to="/studenthome">Home</Link>
     <li className="dropdown">
            <Link>Profile</Link>
            <div className="dropdown-content">
            <Link to="/studentprofile">View Profile</Link>
            <Link to="/updatestudentprofile">Update Profile</Link>
            </div>
          </li>
          <Link to="/studentcourse">Academic Registration</Link>
     <li><button className="logoutButton" onClick={handleLogout}>Logout</button></li>

     </ul>
     </nav>
         <Routes>
         <Route path="/studenthome" element={<StudentHome/>} exact/>
         <Route path="/studentprofile" element={<StudentProfile/>} exact />
         <Route path="/updatestudentprofile" element={<UpdateStudentProfile/>} export />
         <Route path="/studentcourse" element={<StudentCourse/>} exact/>
        </Routes>
    </div>
  )
}
