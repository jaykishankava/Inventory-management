import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Dashboard from './components/Dashboard';
import EditItem from './components/EditItem';
import ViewItems from './components/ViewItems';
import { ToastContainer } from 'react-toastify';
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.bundle.js'
import './App.css'

function App() {
  return (
    <Router>
      <div>  
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/edit" element={<EditItem />} />
          <Route path="/view" element={<ViewItems />} />
        </Routes>
        <ToastContainer position="top-center" autoClose={3000} hideProgressBar={false} closeOnClick pauseOnHover draggable pauseOnFocusLoss />
      </div>
    </Router>
  );
}

export default App;
