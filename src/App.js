
import { Route, Routes } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import './App.css';
import About from './Pages/About/About';
import AddService from './Pages/AddService/AddService';
import Blog from './Pages/Blog/Blog';
import CheckOut from './Pages/CheckOut/CheckOut';
import Home from './Pages/Home/Home/Home';
import Login from './Pages/Login/Login/Login';
import Register from './Pages/Login/Register/Register';
import RequireAuth from './Pages/Login/RequireAuth/RequireAuth';
import ManagesService from './Pages/ManagesService/ManagesService';
import Orders from './Pages/Order/Orders';
import ServicsDetail from './Pages/ServicsDetail/ServicsDetail';
import Footer from './Pages/Shared/Footer/Footer';
import Header from './Pages/Shared/Header/Header';
import NotFound from './Pages/Shared/NotFound/NotFound';


function App() {
  return (
    <div>
      <Header></Header>
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/home' element={<Home></Home>}></Route>
        <Route path='/service/:serviceId' element={<ServicsDetail></ServicsDetail>}></Route>
        <Route path='/about' element={<About></About>}></Route>
        <Route path='/blog' element={<Blog></Blog>}></Route>
        <Route path='/login' element={<Login></Login>}></Route>
        <Route path='/register' element={<Register></Register>}></Route>
        <Route path='/checkout/:serviceId' element={<RequireAuth>
          <CheckOut></CheckOut>
          </RequireAuth>}>
          </Route>
        <Route path='/addservice' element={<RequireAuth>
          <AddService></AddService>
          </RequireAuth>}>
          </Route>
        <Route path='/manage' element={<RequireAuth>
          <ManagesService></ManagesService>
          </RequireAuth>}>
          </Route>
        <Route path='/orders' element={<RequireAuth>
          <Orders></Orders>
          </RequireAuth>}>
          </Route>
        <Route path='*'element={<NotFound></NotFound>}></Route>
      </Routes>
      <Footer></Footer>
      <ToastContainer />
    </div>
  );
}

export default App;
