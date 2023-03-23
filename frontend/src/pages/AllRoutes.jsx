import Signup from "./signup";


import {Route,Routes} from "react-router-dom"
import Login from "./login";
import Dashboard from "./Dashboard";



const MainRoutes = () => {
    return (
      <Routes>
        <Route path="/signup" element={<Signup/>} />;
        <Route path="/login" element={<Login/>} />;
        <Route path="/" element={<Dashboard/>} />;
        <Route path="*" element={<div>Page Not Found</div>} />
      </Routes>
    );
  };
  
  export default MainRoutes;
  