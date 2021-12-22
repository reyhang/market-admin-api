import React from "react";
import { Link } from "react-router-dom";


export default function Sidebar() {
return (
    <div>
 <aside id="sidebar" className="sidebar">
  <ul className="sidebar-nav" id="sidebar-nav">
    <li className="nav-item">
      <Link to="/" className="nav-link ">
        <i className="bi bi-grid" />
        <span>Anasayfa</span>
      </Link>
    </li>{/* End Dashboard Nav */}
    <li className="nav-item">
        <Link to="/Products" className="nav-link collapsed"   > 
                <i className="bi bi-menu-button-wide" /><span>Ürün Listesi</span>

        </Link>
   
</li>
    <li className="nav-heading"> </li>
    <li className="nav-item">
      <Link to="Products/Add" className="nav-link collapsed">
        <i className="bi bi-plus"/>
        <span>Ürün Ekle</span>
      </Link>
    </li>{/* End Profile Page Nav */}
    <li className="nav-item">
      <a className="nav-link collapsed" href="pages-faq.html">
        <i className="bi bi-question-circle" />
        <span>F.A.Q</span>
      </a>
    </li>{/* End F.A.Q Page Nav */}

  </ul>
</aside>
    </div>
   
)
}


