import React from 'react'
import { Route, Routes, Link ,useNavigate} from 'react-router-dom'
import './faculty.css'
import FacultyHome from './FacultyHome';
import FacultyProfile from './FacultyProfile';
import UpdateFacultyProfile from './UpdateFacultyProfile';


export default function FacultyNavBar() 
{
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem('isFacultyLoggedIn');
    localStorage.removeItem('faculty');

    navigate('/facultylogin');
    window.location.reload()
  };
  return (
    <div>

    <nav>
     <ul>
     <Link to="/facultyhome">Home</Link>
     <li className="dropdown">
            <Link>Profile</Link>
            <div className="dropdown-content">
            <Link to="/facultyprofile">Faculty Profile</Link>
            <Link to="/updatefacultyprofile">Update Profile</Link>
            </div>
          </li>

     <li><button className="logoutButton" onClick={handleLogout}>Logout</button></li>
     </ul>
     </nav>

         <Routes>
         <Route path="/facultyhome" element={<FacultyHome/>} exact/>
         <Route path="/facultyprofile" element={<FacultyProfile/>} exact/>
         <Route path="/updatefacultyprofile" element={<UpdateFacultyProfile/>} export />

        </Routes>

    </div>
  )
}
