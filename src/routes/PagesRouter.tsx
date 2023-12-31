import React from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';
import PageDevices from '../pages/PageDevices';
import PageOperators from '../pages/PageOperators';
import PageChoosingOperator from "../pages/PageChoosingOperator";
import PageManual from "../pages/PageManual";
import PageMain from "../pages/PageMain";
import PagePlayers from "../pages/PagePlayers";
import Blank from "../components/Blank";

export const PagesRouter = () => {
  return (
    <Routes>
      <Route path='/' element={<PageMain/>}/>
      <Route path='/operators' element={<PageOperators/>}/>
      <Route path='/operators/:operator' element={<PageDevices/>}/>
      <Route path='/operators/:operator/:devices' element={<PageDevices/>}/>
      <Route path='/operators/:operator/:devices/:device' element={<PagePlayers/>}/>
      <Route path='/operators/:operator/:devices/:device/:player' element={<PageManual/>}/>

      <Route path='/choose' element={<PageChoosingOperator/>}/>
      <Route path='/blank' element={<Blank/>}/>
      <Route path='*' element={<Navigate to='/'/>}/>
    </Routes>
  );
}