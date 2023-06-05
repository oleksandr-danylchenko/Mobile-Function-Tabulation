import React from 'react';
import { Routes, Route } from 'react-router-dom';

import Home from '@/pages/Home/Home';

const Routing = () => {
  return (
    <Routes>
      <Route element={<Home />} />
    </Routes>
  );
};

export default Routing;
