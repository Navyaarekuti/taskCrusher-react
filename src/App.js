import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import React from 'react';
import axios from 'axios';
import AddChores from './components/chores/AddChores';
import UpdateChore from './components/chores/UpdateChore';
import ChoresList from './components/chores/ChoresList';
// import AssignedChores from './AssignedChores';
import LandingPage from './components/LandingPage';
import Register from './components/Register';
import ParentLogin from './components/ParentLogin';
import ParentDashboard from './components/ParentDashboard';

function App() {
  return (
    <Routes>
      
      <Route path='/' element={<LandingPage />} />
      <Route path='/api/register' element={<Register />} />
      <Route path='/api/parentLogin' element={<ParentLogin />} />
      <Route path='/api/parentDash' element={<ParentDashboard />} />
      
      <Route path="/api/chores/add" element={<AddChores />} />
      <Route path="/api/chores/list" element={<ChoresList />} />
      {/* <Route path="/api/assignments/assigned-chores" element={<AssignedChores />} /> */}
      <Route path="/api/chores/edit/:choreId" element={<UpdateChore />} />
    </Routes>

  );
}
export default App;