import React from 'react';
import './HeaderFooter.css'

function Header({ title, breadcrumbs }) {
  return (
    <div className="header">
      <h2>{title}</h2>
      <nav>
        <ul className="breadcrumb">
          {breadcrumbs.map((breadcrumb, index) => (
            <li key={index}>
              <a href={breadcrumb.link}>{breadcrumb.label}</a>
            </li>
          ))}
        </ul>
      </nav>
    </div>
  );
}

function Footer() {
  return (
    <div className="footer">
      <p>© My App</p>
    </div>
  );
}

export { Header, Footer };
