import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Landing from "./Landing/Landing";
import Login from "./Login/Login";
import Dashboard from "./Dashboard/Dashboard";
import AuthPage from "./AuthPage/AuthPage";
import 'bootstrap/dist/css/bootstrap.min.css';
import PageNotFound from "./PageNotFound/PageNotFound";
import UserList from "./UserList/UserList";
import Profile from "../Profile/Profile";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="" element={<Navigate to="/react-redux-app" replace/>}/>
        <Route path="react-redux-app">
          <Route exact path="" element={<Landing/>} />
          <Route exact path="login" element={<Login/>} />
          <Route exact path="" element={<AuthPage/>}>
            <Route exact path="home" element={<Dashboard/>} />
            <Route exact path="users" element={<UserList/>} />
            <Route exact path="users/:userId" element={<Profile/>} />
          </Route>
        </Route>
        <Route path="*" element={<PageNotFound />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
