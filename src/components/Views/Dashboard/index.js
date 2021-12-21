import React from "react";
import Cards from "./Cards/Cards";
import RecentSales from "./RecentSales/RecentSales";
import Reports from "./Reports/Reports";


export default function Dashboard() {

    return (
      <main id="main" className="main">
        <div className="pagetitle">
          <h1>Dashboard</h1>
          <nav>
            <ol className="breadcrumb">
              <li className="breadcrumb-item">
                <a href="index.html">Home</a>
              </li>
              <li className="breadcrumb-item active">Dashboard</li>
            </ol>
          </nav>
        </div>
        <section className="section dashboard">
          <div className="row">
            <div className="col-lg-12">
              <div className="row">
            
                    <Cards />
                    <Reports />
                    <RecentSales />
                
              </div>
            </div>
          </div>
        </section>
      </main>
    );

}