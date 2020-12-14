import React from 'react';
import { useHistory } from 'react-router-dom';

export const AboutPage: React.FC = () => {
  const history = useHistory();

  return (
    <>
      <h1>Info Page</h1>
      <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Corporis ea itaque labore laborum maiores natus
         quaerat qui similique vero vitae.</p>
      <button className="btn" onClick={() => history.push('/')}>Back to todos list</button>
    </>
  );
};
