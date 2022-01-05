import "./App.css";
import Header from "./components/Layout/Header/Header";
import Sidebar from "./components/Layout/Sidebar/Sidebar";
import Footer from "./components/Layout/Footer/Footer";
import DataTable from "./components/Views/DataTable.js/DataTable";
import AddProduct from "./components/Views/Product/AddProduct";
import Dashboard from "./components/Views/Dashboard";
import UpdateProduct from "./components/Views/Product/UpdateProduct";
import { ToastContainer } from "react-toastify";
import history from './history'
import { Redirect, Route, Router, Switch } from "react-router";
import { BrowserRouter } from "react-router-dom";
import Login from "./components/Views/Login/Login";
import Test from "./components/Views/DataTable.js/Test";
import { AuthProvider } from "./context/JWTAuthContext";
import AuthGuard from "./Auth/AuthGuard";
import AppContext from "./context/AppContext";
import routes from "./RootRoutes";
import { Suspense } from "react";

function App() {
  return (
    <AppContext.Provider value={{ routes }}>
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
      <BrowserRouter basename="http://localhost:3001">
        <Router history={history}>
          <AuthProvider>
            <Route path="/login" exact={true} component={Login} />

            <AuthGuard>
              <div className="App">
                <Sidebar />
                <Header />
                <Suspense>
                  <Switch>
                    <Route path="/dashboard" exact component={Dashboard} />
                    <Route path="/products" exact={true} component={DataTable} />
                    <Route path="/products/add" exact={true} component={AddProduct} />
                    <Route
                      path="/products/update/:id" 
                      exact={true}
                      component={UpdateProduct}
                    />
                    <Route path="/test" component={Test} />

                    <Redirect from="/" to="/dashboard" />
                  </Switch>
                </Suspense>
                <Footer />
              </div>
            </AuthGuard>
          </AuthProvider>
        </Router>
      </BrowserRouter>
    </AppContext.Provider>
  );
}

export default App;
