import React from "react";


export default function Sidebar() {
return (
    <div>
 <aside id="sidebar" className="sidebar">
  <ul className="sidebar-nav" id="sidebar-nav">
    <li className="nav-item">
      <a className="nav-link " href="index.html">
        <i className="bi bi-grid" />
        <span>Anasayfa</span>
      </a>
    </li>{/* End Dashboard Nav */}
    <li className="nav-item">
      <a className="nav-link collapsed" data-bs-target="#components-nav" data-bs-toggle="collapse" href="#">
        <i className="bi bi-menu-button-wide" /><span>Components</span>
      </a>
   
</li>
    <li className="nav-heading"> </li>
    <li className="nav-item">
      <a className="nav-link collapsed" href="users-profile.html">
        <i className="bi bi-person" />
        <span>Profile</span>
      </a>
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


