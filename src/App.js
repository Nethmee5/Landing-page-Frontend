import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import React from "react";
import './App.css';
import Header from './components/header/Header';

import Form from "./components/Form/Form";
import Contentcard from "./components/Contentcard";
import Footer from "./components/Footer";


function App() {
  return (
    <Router>
     
      <Routes>
     
        <Route path="/" element={<Header/>}/>
        <Route path="/Header" element={<Header/>} />
      
       
        <Route path="/Form" element={<Form/>}/>

        <Route path="/Contentcard" element={<Contentcard/>}/>

        <Route path="/Footer" element={<Footer/>}/>
      </Routes>
     
    </Router>
 
    
  );
  }
  
  export default App;
  