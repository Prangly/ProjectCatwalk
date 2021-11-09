import React from 'react';
import ReactDOM from 'react-dom';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import App from './components/App/App';

const RouteApp = () => (
  <>
    <Router>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/:id" element={<App />} />
      </Routes>
    </Router>
  </>
);

ReactDOM.render(<RouteApp />, document.getElementById('root'));
