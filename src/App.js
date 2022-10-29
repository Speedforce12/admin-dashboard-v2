import { Routes, Route } from "react-router-dom";
import Dashboard from "./pages/Dashboard";
import Router from "./routes/Router";
import Student from "./pages/students/Student"
import Teacher from "./pages/teachers/Teacher";
import Users from "./pages/users/Users";
import Login from "./components/Login"
import Finance from "./pages/finances/Finance";

function App() {
  return (
    <div className='App'>
      <Routes>
        <Route path='/' element={<Router />}>
          <Route index element={<Dashboard />} />
          <Route path='students' element={<Student />} />
          <Route path='teachers' element={<Teacher />} />
          <Route path='users' element={<Users />} />
          <Route path='finances' element={<Finance />} />
        </Route>
        <Route path='login' element={<Login />} />
      </Routes>
    </div>
  );
}

export default App;
