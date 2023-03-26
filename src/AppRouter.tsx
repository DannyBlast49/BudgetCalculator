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
            return (<Route key={link.name} path={link.path} element={<Calculator />} />);
          }
          case 'expenses': {
            return (<Route key={link.name} path={link.path} element={<Expenses />} />);
          }
          case 'savings': {
            return (<Route key={link.name} path={link.path} element={<Savings />} />);
          }
          case 'settings': {
            return (<Route key={link.name} path={link.path} element={<Settings />} />);
          }
          default: {
            return (<Route key="not found" path="*" element={<PageNotFound />} />);
          }
        }
      })
    }
    <Route path="*" element={<PageNotFound />} />
  </Routes>
);

export default AppRouter