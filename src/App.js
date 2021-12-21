import logo from './logo.svg';
import './App.css';
import Header from "./components/Layout/Header/Header"
import Sidebar from "./components/Layout/Sidebar/Sidebar"
import Footer from './components/Layout/Footer/Footer';
import DataTable from './components/Views/DataTable.js/DataTable';
import ProductForm from './components/Views/Product/ProductFrom';
import Cards from './components/Views/Dashboard/Cards/Cards';
import Reports from './components/Views/Dashboard/Reports/Reports';
import RecentSales from './components/Views/Dashboard/RecentSales/RecentSales';
import Dashboard from './components/Views/Dashboard';

function App() {
  return (
    <div className="App">
     

<Header/>
<Sidebar/>
<Dashboard/>
<Footer/>
    </div>
  );
}

export default App;
