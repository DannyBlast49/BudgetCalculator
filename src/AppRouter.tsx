import React from "react";
import { Routes, Route } from "react-router-dom";
import Calculator from './Calculator/Calculator';
import Expenses from './Expenses/Expenses';
import Savings from './Savings/Savings';
import Settings from './Settings/Settings';
import PageNotFound from './PageNotFound';
import { navList } from './Navigation/constants';

const AppRouter = () => (
  <Routes>
    { 
      navList.map((link) => {
        switch (link.name) {
          case 'calculator': {
            return (<Route path={link.path} element={<Calculator />} />);
          }
          case 'expenses': {
            return (<Route path={link.path} element={<Expenses />} />);
          }
          case 'savings': {
            return (<Route path={link.path} element={<Savings />} />);
          }
          case 'settings': {
            return (<Route path={link.path} element={<Settings />} />);
          }
          default: {
            return (<Route path="/PageNotFound" element={<PageNotFound />} />);
          }
        }
      })
    }
  </Routes>
);

export default AppRouter