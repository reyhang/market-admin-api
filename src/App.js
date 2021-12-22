import './App.css';
import Header from "./components/Layout/Header/Header"
import Sidebar from "./components/Layout/Sidebar/Sidebar"
import Footer from './components/Layout/Footer/Footer';
import DataTable from './components/Views/DataTable.js/DataTable';
import ProductForm from './components/Views/Product/ProductFrom';
import Dashboard from './components/Views/Dashboard';

import { Route, Routes } from 'react-router';
import { BrowserRouter } from 'react-router-dom';
import Login from './components/Views/Login/Login';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Header />
        <Sidebar />

        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/Products" element={<DataTable />} />
          <Route path="Products/Add" element={<ProductForm />} />
          <Route path="a" element={<Login />} />
        </Routes>

        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
