import React from 'react';
import './App.css';
import Sidebar from './components/Sidebar/Sidebar.tsx';
import { BrowserRouter as Router} from 'react-router-dom';
import Expenses from './pages/Expenses/Expenses.tsx';

function App() {
  return (
  <>
    <Router>
      <Sidebar />
      <Expenses />
    </Router>
  </>
  )
}

export default App;
