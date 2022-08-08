import Layout from "components";
import { Home, Register } from "pages";
import Login from "pages/Login";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route element={<Layout />}>
            <Route path='/' element={<Home />} />
            <Route path='login' element={<Login />} />
            <Route path='signup' element={<Register />} />
          </Route>
        </Routes>
      </Router>
    </>
  );
}

export default App;
