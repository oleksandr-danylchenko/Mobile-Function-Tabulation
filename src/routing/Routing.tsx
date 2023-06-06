import { FC } from 'react';
import { Routes, Route } from 'react-router-dom';

import Home from '@/pages/Home';

const Routing: FC = () => {
  return (
    <Routes>
      <Route path="*" element={<Home />} />
    </Routes>
  );
};

export default Routing;
