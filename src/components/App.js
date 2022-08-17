import { BrowserRouter, Routes, Route } from "react-router-dom";
import Landing from "./Landing/Landing"
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={
            <Landing/>
          }
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
