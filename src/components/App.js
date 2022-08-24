import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Landing from "./Landing/Landing";
import Login from "./Login/Login";
import Dashboard from "./Dashboard/Dashboard";
//import Home from "./Home/Home";
import 'bootstrap/dist/css/bootstrap.min.css';
import PageNotFound from "./PageNotFound/PageNotFound";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="" element={<Navigate to="/react-redux-app" replace/>}/>
        <Route path="react-redux-app">
          <Route exact path="" element={<Landing/>} />
          <Route exact path="login" element={<Login/>} />
          <Route exact path="home" element={<Dashboard/>}/>
        </Route>
        <Route path="*" element={<PageNotFound />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
