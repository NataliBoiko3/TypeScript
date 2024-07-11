import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './app/App';
import Lesson07 from './lessons/lesson07/Lesson07';
//import Lesson06 from './lessons/lesson06/Lesson06';



const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <>
    <App />
    <Lesson07/>
   {/*<Lesson06/>*/}
    
  </>
);



