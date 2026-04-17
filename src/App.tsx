/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import SplashScreen from './screens/SplashScreen';
import EnrollmentSuccessful from './screens/EnrollmentSuccessful';
import AdminDashboard from './screens/AdminDashboard';
import SignUp from './screens/SignUp';
import Announcements from './screens/Announcements';
import HomeFeed from './screens/HomeFeed';
import Events from './screens/Events';
import StudentProfile from './screens/StudentProfile';
import AcademicResources from './screens/AcademicResources';
import EditProfile from './screens/EditProfile';
import About from './screens/About';
import LoginScreen from './screens/LoginScreen';

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<SplashScreen />} />
        <Route path="/login" element={<LoginScreen />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/enrollment-successful" element={<EnrollmentSuccessful />} />
        <Route path="/admin" element={<AdminDashboard />} />
        <Route path="/announcements" element={<Announcements />} />
        <Route path="/home" element={<HomeFeed />} />
        <Route path="/events" element={<Events />} />
        <Route path="/profile" element={<StudentProfile />} />
        <Route path="/resources" element={<AcademicResources />} />
        <Route path="/edit-profile" element={<EditProfile />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </Router>
  );
}
