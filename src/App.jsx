import "./App.css";
import { Route, Routes } from "react-router-dom";
import Home from "./Home";
import AddStudents from "./AddStudents";
import EditStudents from "./EditStudents";
import 'bootstrap/dist/css/bootstrap.min.css';
import NavHeader from "./NavHeader";


function App() {
  return (
    <div className="app-shell">
      <NavHeader />
      <main className="app-content">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/addStudents" element={<AddStudents />} />
          <Route path="/editStudents/:studentId" element={<EditStudents />} />
        </Routes>
      </main>
    </div>
  );
}

export default App;
