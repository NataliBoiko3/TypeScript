import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
//import App from './app/App';
//import Lesson08 from './lessons/lesson08/Lesson08';
//import Layout from './components/layout/Layout';
import StarWarsGallery from './components/starWarsGallery/StarWarsGallery';
//import Lesson07 from './lessons/lesson07/Lesson07';
//import Lesson06 from './lessons/lesson06/Lesson06';



const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <>
   {/* <App />*/}
   {/* <Lesson07/>*/}
   {/*<Lesson06/>*/}
  {/* <Lesson08/>*/}
    {/*  <Layout/>*/}
    <StarWarsGallery/>
  </>
);



