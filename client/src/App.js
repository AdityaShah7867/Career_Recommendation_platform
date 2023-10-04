import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Login from './pages/Auth/Login';
import Register from './pages/Auth/Register';
import SideBar from './components/Sidebar/Sidebar';
import Resume from './pages/Resume';
import Profile from './pages/Profile/Profile';


function App() {
  return (
    <Router>
      <SideBar/>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/sidebar" element={<SideBar />} />
        <Route path="/resume" element={<Resume />} />
        <Route path="/profile" element={<Profile />} />


      </Routes>
    </Router>
  );
}

export default App;
