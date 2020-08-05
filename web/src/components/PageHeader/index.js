import React from 'react';
import { Link } from 'react-router-dom';

import backIcon from '../../assets/images/icons/back.svg';
import Logo from '../../assets/images/logo.svg';
import './styles.css';


function PageHeader(props) {
  return (
    <header className="page-header">
    <div className="top-bar-container"> 
      <Link to="/">
        <img src={backIcon} alt="Voltar"/>
      </Link>
        <img src={Logo} alt="Proffy"/>
    </div>

    <div className="header-content">
      <strong>{props.title}</strong>

      {props.children}
    </div>
  </header>
  );
}

export default PageHeader;