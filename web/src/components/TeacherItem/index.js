import React from 'react';

import Logo from '../../assets/images/logo.svg';
import wppIcon from '../../assets/images/icons/whatsapp.svg';


import './styles.css';

function TeacherItem() {
  return (
    <article className="teacher-item">
      <header>
        <img src={Logo} alt=""/>
        <div>
          <strong>Nome do Professor</strong>
          <span>Nome da Matéria</span>
        </div>
      </header>

        <p>
          Descrição
        </p>

        <footer>
          <p>
            preço/hora
            <strong>R$ 500,00</strong>
          </p>
          <button type="button">
            <img src={wppIcon} alt="Whatsapp"/>
            Entrar em Contato
          </button>
        </footer>
      </article>
  )
}
export default TeacherItem;