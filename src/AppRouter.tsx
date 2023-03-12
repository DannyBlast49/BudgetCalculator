import React from "react";
import { Routes, Route } from "react-router-dom";
import Calculator from './Calculator/Calculator';
import Expenses from './Expenses/Expenses';
import Savings from './Savings/Savings';
import Settings from './Settings/Settings';

const AppRouter = () => (
  <Routes>
    <Route path="/" element={<Calculator />} />
    <Route path="/Expenses" element={<Expenses />} />
    <Route path="/Savings" element={<Savings />} />
    <Route path="/Settings" element={<Settings />} />
  </Routes>
);

export default AppRouter