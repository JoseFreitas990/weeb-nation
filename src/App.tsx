import Layout from "components";
import { Details, Home, Login, Register } from "pages";
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
            <Route path='details' element={<Details />} />
          </Route>
        </Routes>
      </Router>
    </>
  );
}

export default App;
