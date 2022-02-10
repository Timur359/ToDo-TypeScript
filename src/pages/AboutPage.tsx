import React from 'react';
import { useNavigate } from 'react-router-dom';

export const AboutPage: React.FC = () => {
 const history = useNavigate();
 return (
  <>
   <h1>Страница информация</h1>
   <p>
    Станица представляет собой проект "Список дел", где мы можем добавить дела,
    удалить и поставить отметку о выполнении. Проект написан на ReactJS и
    TypeScrpit
   </p>
   <button className="btn" onClick={() => history('/')}>
    Обратно к списку дел
   </button>
  </>
 );
};
