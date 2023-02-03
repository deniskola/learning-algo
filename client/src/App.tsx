import './App.css';
import { Route, BrowserRouter as Router, BrowserRouter, Routes } from 'react-router-dom';
import { Drawer } from '@mui/material';
import Sidebar from './Components/Layout/Sidebar';


function App() {
  return (
    <div className="App">
      <header className="App-header">
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Sidebar/>}>
             
            </Route>
          </Routes>
        </BrowserRouter>
      </header>
    </div>
  );
}

export default App;
