import { BrowserRouter, Routes, Route } from "react-router-dom";
import Landing from "./Landing/Landing";
import Login from "./Login/Login";
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={
            <Landing/>
          }
        />
        <Route exact path="/login" element={
            <Login/>
          }
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
