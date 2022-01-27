import logo from './logo.svg';
import './App.css';
import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";
import Home from './Components/Home/Home/Home';
import Login from './Components/Authentication/Login/Login';
import Registration from './Components/Authentication/Registration/Registration';
import Dashboard from './Components/Dasahboard/Dashboard/Dashboard';
import AddAdmin from './Components/Dasahboard/AddAdmin/AddAdmin';
import BlogbyUser from './Components/Dasahboard/BlogbyUser/BlogbyUser'
import AddBlog from './Components/Dasahboard/AddBlog/AddBlog';
import AddExpe from './Components/Dasahboard/AddExpe/AddExpe';
import ExpDetails from './Components/ExpDetails/ExpDetails';
import PrivateRoute from './Components/Authentication/PrivateRoute/PrivateRoute';
import AdminRoute from './Components/Authentication/AdminRoute/AdminRoute';



function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/home" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/registration" element={<Registration />} />
          <Route path="/expDetails/:id" element={<ExpDetails />} />
          <Route path='/dashboard' element={<PrivateRoute><Dashboard /></PrivateRoute>}>
            <Route exact path={`/dashboard`} element={<AddBlog />} />
            <Route exact path={`/dashboard/Blogbyuser`} element={<AdminRoute> <BlogbyUser /></AdminRoute>} />
            <Route exact path={`/dashboard/addExpe`} element={<AddExpe />} />

            <Route exact path={`/dashboard/admin`} element={<AdminRoute><AddAdmin /></AdminRoute>} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
