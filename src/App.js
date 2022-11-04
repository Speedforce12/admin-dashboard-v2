import { Routes, Route } from "react-router-dom";
import Dashboard from "./pages/Dashboard";
import Router from "./routes/Router";
import Student from "./pages/students/Student";
import Teacher from "./pages/teachers/Teacher";
import Users from "./pages/users/Users";
import Login from "./components/Login";
import Finance from "./pages/finances/Finance";
import Loading from "./components/Loading";
import Notification from "./components/Notification";
import Register from "./components/Register";
import StepperMain from "./components/stepperform/StepperMain";

function App() {
  return (
    <>
      <Loading />
      {/* <Notification/> */}
      <Routes>
        <Route path='/' element={<Router />}>
          <Route index element={<Dashboard />} />
          <Route path='students' element={<Student />} />
          <Route path='teachers' element={<Teacher />} />
          <Route path='users' element={<Users />} />
          <Route path='finances' element={<Finance />} />
          <Route path='new-student' element={<StepperMain />} />
        </Route>
        <Route path='/login' element={<Login />} />
        <Route path='/register' element={<Register />} />
      </Routes>
    </>
  );
}

export default App;
