
import './App.css';
import {Routes,Route} from 'react-router-dom'
import HomePage from './pages/HomePage';
import Contact from './pages/Contact';
import About from './pages/About';
import Policy from './pages/Policy';
import PageNotFound from './pages/pageNotFound';
import Register from './pages/Auth/Register'
import Login from './pages/Auth/Login';
import DashBoard from './pages/User/DashBoard';
import PrivateRoute from './components/Routes/Private';
import ForgotPassword from './pages/Auth/ForgotPassword';
import AdminDashBoard from './pages/Admin/AdminDashBoard';
import AdminPrivateRoute from './components/Routes/AdminPrivate';
import CreateCategory from './pages/Admin/CreateCategory';
import CreateProduct from './pages/Admin/CreateProduct';
import User from './pages/Admin/User';
import AdminRegister from './pages/AdminAuth/AdminRegister';
import AdminLogin from './pages/AdminAuth/AdminLogin';
import AddServices from './pages/Admin/AddServices';
import AdminUserDetails from './pages/Admin/AdminUserDetails';
import PendingOrders from './pages/Admin/PendingOrders';
import Completedorders from './pages/Admin/Completedorders';
import AddElectricianService from './pages/Admin/AddServicesPages.js/AddElectricianService';
import AddPlumbingService from './pages/Admin/AddServicesPages.js/AddPlumbingService';
import AddCarpenterService from './pages/Admin/AddServicesPages.js/AddCarpenterService';
import AddPaintingService from './pages/Admin/AddServicesPages.js/AddPaintingService';
import AddAppliancesRepairService from './pages/Admin/AddServicesPages.js/AddAppliancesRepairService';
import HomePg from './pages/HomePg';


function App() {
  return (
    <>
    <Routes>
      <Route path="/"  element={<HomePage/>} />
     
    
      <Route path="/dashboard"  element={<PrivateRoute/>} >
      <Route path="user"  element={<DashBoard/>} />
      </Route>

      <Route path="/dashboard"  element={<AdminPrivateRoute/>} >
      <Route path="admin"  element={<AdminDashBoard/>} />
      <Route path="admin/edit-details"  element={<AdminDashBoard/>} />
      <Route path="admin/admin-details"  element={<AdminUserDetails/>} />
      <Route path="admin/your-services"  element={<AddServices/>} />
      <Route path="admin/your-services/your-services"  element={<AddServices/>} />
      <Route path="admin/pending-orders"  element={<PendingOrders/>} />
      <Route path="admin/completed-orders"  element={<Completedorders/>} />
      <Route path="admin/create-category"  element={<CreateCategory/>} />
      <Route path="admin/create-product"  element={<CreateProduct/>} />
      <Route path="admin/users"  element={<User/>} />

      <Route path="admin/your-services/electrician"  element={<AddElectricianService/>} />
      <Route path="admin/your-services/plumber"  element={<AddPlumbingService/>} />
      <Route path="admin/your-services/carpenter"  element={<AddCarpenterService/>} />
      <Route path="admin/your-services/painting"  element={<AddPaintingService/>} />
      <Route path="admin/your-services/appliances-Repairer"  element={<AddAppliancesRepairService/>} />
      </Route>

      <Route path="/register"  element={<Register/>} />      
      <Route path="/admin-register"  element={<AdminRegister/>} />      
      <Route path="/forgot-password"  element={<ForgotPassword/>} />      
      <Route path="/login"  element={<Login/>} />
      <Route path="/admin-login"  element={<AdminLogin/>}/>
      <Route path="/about"  element={<About/>} />
      <Route path="/contact"  element={<Contact/>} />
      <Route path="/policy"  element={<Policy/>} />
      <Route path="/*"  element={<PageNotFound/>} />
      <Route path="/home"  element={<HomePg/>} />



     

      
    </Routes>
    </>  
  );
}

export default App;
