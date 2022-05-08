
import './App.css';
import Home from './components/HomePages/Home/Home';
import 'react-toastify/dist/ReactToastify.css';
import { Route, Routes } from 'react-router-dom';
import RequireAuth from './components/Authentication/RequireAuth/RequireAuth';
import InventoryItems from './components/Administration/ManageInventory/InventoryItems/InventoryItems';
import ManageComputer from './components/Administration/Inventory/ManageComputer/ManageComputer';
import ManageInventory from './components/Administration/ManageInventory/ManageInventory';
import MyInventory from './components/Administration/ManageInventory/MyInventory/MyInventory';
import AddItems from './components/Administration/ManageInventory/AddItems/AddItems';
import UpdateComputer from './components/Administration/ManageInventory/InventoryItems/UpdateComputer/UpdateComputer';
import SignUp from './components/Authentication/SignUp/SignUp';
import Login from './components/Authentication/Login/Login';
import Error404 from './components/Error404/Error404';
import NavBar from './components/HomePages/NavBar/NavBar';
import Footer from './components/Footer/Footer';
import { ToastContainer } from 'react-toastify';
import Inventory from './components/Administration/Inventory/Inventory';
import Blogs from './components/Blogs/Blogs';

function App() {
  return (
    <div className="App">
      <NavBar></NavBar>
      <Routes>
      <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route
          path="/inventory"
          element={
            <RequireAuth>
              <Inventory />
            </RequireAuth>
          }
        ></Route>
        <Route path="/inventory/:inventoryId" element={
        <RequireAuth>
          <ManageComputer />
        </RequireAuth>
        } />
        <Route
          path="/manageInventory"
          element={
            <RequireAuth>
              <ManageInventory />
            </RequireAuth>
          }
        >
          <Route index path="mangeItems" element={<InventoryItems />} />
          <Route path="myinventory" element={<MyInventory />} />
          <Route path="addItem" element={<AddItems />} />
        </Route>
        <Route path="/manageInventory/:id" element={<UpdateComputer />} />
        <Route path="/blogs" element={<Blogs></Blogs>}></Route>
        <Route path="/signUp" element={<SignUp />} />
        <Route path="/login" element={<Login />} />
        <Route path="*" element={<Error404 />} />
      </Routes>
      <ToastContainer></ToastContainer>
      <Footer></Footer>
    </div>
  );
}

export default App;
