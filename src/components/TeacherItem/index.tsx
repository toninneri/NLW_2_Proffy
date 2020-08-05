import React from 'react';
import whatsappIcon from '../../assets/images/icons/whatsapp.svg'

import './styles.css';
// import { Container } from './styles';

const TeacherItem: React.FC = () => {
  return (
    <article className="teacher-item">
    <header>
      <img
        src="https://avatars0.githubusercontent.com/u/33626748?s=460&u=72c123f0f56c2aec50d30b8d18c9ee7742e85be1&v=4"
        alt="Tonin Neri"
      />
      <div>
        <strong>Tonin Neri</strong>
        <span>Inglês</span>
      </div>
    </header>
    <p>
      Professor com experiência internacional na Universidade de Miami.
      <br /><br />com graduação em Lingua Portuguesa, Inglesa e espanhola.
    </p>
    <footer>
        <p>
            preço/hora
            <strong>R$ 50,00</strong>
        </p>
        <button type="button">
            <img src={whatsappIcon} alt="whatsapp" />
            Entrar em contato
        </button>
    </footer>
  </article>
  )
}

export default TeacherItem;