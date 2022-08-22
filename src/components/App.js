import { BrowserRouter, Routes, Route } from "react-router-dom";
import Landing from "./Landing/Landing";
import Login from "./Login/Login";
import Dashboard from "./Dashboard/Dashboard";
import 'bootstrap/dist/css/bootstrap.min.css';
// import history from "../history";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<Landing/>} />
        <Route exact path="/login" element={<Login/>} />
        <Route exact path="/home" element={<Dashboard/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
