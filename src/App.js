import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';
// import { Home } from "./pages/index";
// components
import Navbar from "./components/Navbar/Navbar";
import Dashboard from './components/Dashboard/Dashboard';
import WorkOrder from './components/WorkOrder/WorkOrder';
import CreateWorkOrder from './components/WorkOrder/CreateWorkOrder';
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
          <Route path="/workorder" element={<WorkOrder />} />
          <Route path="/dashboard/createworkorder" element={<CreateWorkOrder />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}
export default App;

