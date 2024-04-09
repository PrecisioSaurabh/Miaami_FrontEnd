import {BrowserRouter, Routes, Route} from 'react-router-dom';
import {Home} from "./pages/index";
// components
import Navbar from "./components/Navbar/Navbar";
import Dashboard from './components/Dashboard/Dashboard';
function App() {
  return (
    <div className="App">
        <BrowserRouter>
          <Navbar />
         <Routes>
            {/* home page route */}
            <Route path = "/" element = {<Home />} />
            <Route path = "/dashboard" element = {<Dashboard />} />
          </Routes>
        </BrowserRouter>
     </div>
  );
}
export default App;
