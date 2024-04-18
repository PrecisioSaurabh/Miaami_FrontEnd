import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';
// import { Home } from "./pages/index";
// components
import Navbar from "./components/Navbar/Navbar";
import Dashboard from './components/Dashboard/Dashboard';
import Login from './pages/Login/Login';

function NavbarConditional() {
  const location = useLocation();
  const shouldShowNavbar = location.pathname !== "/";

  return shouldShowNavbar ? <Navbar /> : null;
}
 
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <NavbarConditional />
        <Routes>
          {/* home page route */}
          <Route path="/" element={<Login />} />
          <Route path="/dashboard" element={<Dashboard />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}
export default App;

