import './App.css';
import Header from "./components/Layout/Header/Header"
import Sidebar from "./components/Layout/Sidebar/Sidebar"
import Footer from './components/Layout/Footer/Footer';
import DataTable from './components/Views/DataTable.js/DataTable';
import AddProduct from './components/Views/Product/AddProduct';
import Dashboard from './components/Views/Dashboard';
import UpdateProduct from './components/Views/Product/UpdateProduct'
import { ToastContainer } from 'react-toastify';

import { Route, Routes } from 'react-router';
import { BrowserRouter } from 'react-router-dom';
import Login from './components/Views/Login/Login';
import Test from './components/Views/DataTable.js/Test';

function App() {
  return (

   
    <BrowserRouter>
      <div className="App">
        <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
       
        />
        <Header />
        <Sidebar />

        <Routes>          
     <Route path="/login" element={<Login />} />

     
          <Route path="/"  element={<Dashboard />} />
          <Route path="/products" element={<DataTable />} />
          <Route path="/products/add" element={<AddProduct />} />
          <Route path="/products/update/:id" element={<UpdateProduct />} />
          <Route path="/test" element={<Test />} />

        </Routes>

        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
