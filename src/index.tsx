import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
//import Lesson09 from './lessons/Lesson09/Lesson09';
//import Lesson11 from './lessons/lesson11/Lesson11';
//import Lesson12 from './lessons/lesson12/Lesson12';
//import Lesson13 from './lessons/lesson13/Lesson13';
import { HashRouter, Route, Routes } from 'react-router-dom';
import Layout from './components/layout/Layout';
//import StarWarsGallery from './components/starWarsGallery/StarWarsGallery';
import FormGender from './components/FormGender/FormGender';
import RobotForm from './components/robotForm/RobotForm';
import MyForm from './components/myForm/MyForm';
import HomePage from './components/homePage/HomePage';
import MyInput from './components/myInput/MyInput';
import MyButton from './components/myButton/MyButton';
//import { BrowserRouter } from 'react-router-dom';
//import App from './app/App';
//import Lesson08 from './lessons/lesson08/Lesson08';
//import Layout from './components/layout/Layout';
//import StarWarsGallery from './components/starWarsGallery/StarWarsGallery';
//import Lesson07 from './lessons/lesson07/Lesson07';
//import Lesson06 from './lessons/lesson06/Lesson06';



const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <HashRouter>
    <Routes>
      <Route path='/' element={<Layout/>}>
      
  <Route path='/'element={<HomePage/>}/>
   <Route path='/gender-form'element={<FormGender/>}/>
   <Route path='/robot-form'element={<RobotForm/>}/>
   <Route path='/my-form'element={<MyForm/>}/>
   <Route path='/my-input'element={<MyInput/>}/>
   <Route path='/my-button'element={<MyButton/>}/>
  
   </Route>
   </Routes>
  </HashRouter>
);



