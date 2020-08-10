import React from 'react';

import PropTypes from 'prop-types';

import wppIcon from '../../assets/images/icons/whatsapp.svg';

import './styles.css';

function TeacherItem({ teacher }) {
  return (
    <article className="teacher-item">
      <header>
        <img src={teacher.avatar} alt={teacher.name} />
        <div>
          <strong>{teacher.name}</strong>
          <span>{teacher.subject}</span>
        </div>
      </header>

      <p>
        {teacher.bio}
      </p>

      <footer>
        <p>
          preço/hora
          <strong>{teacher.cost}</strong>
        </p>
        <button type="button">
          <img src={wppIcon} alt="Whatsapp" />
          Entrar em Contato
        </button>
      </footer>
    </article>
  );
}
export default TeacherItem;

TeacherItem.defaultProps = {
  teacher: '',
};

TeacherItem.propTypes = {
  // eslint-disable-next-line react/forbid-prop-types
  teacher: PropTypes.shape({
    id: PropTypes.number,
    avatar: PropTypes.string,
    bio: PropTypes.string,
    cost: PropTypes.number,
    name: PropTypes.string,
    subject: PropTypes.string,
    whatsapp: PropTypes.string,
  }),
};
