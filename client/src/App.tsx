import './App.css';
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import Home from './Views/Home';
import Login from './Views/Login';
import Learning from './Views/Learning';
import MainView from './Components/Layout/MainView';


function App() {
  return (
    <div className="App">
       <Router>
          <Routes>
            <Route path="/login" element={<Login/>}/>
            <Route path="/" element={<MainView />}>
              <Route index element={<Home/>}/>  
              <Route path="learning" element={<Learning/>}/>           
            </Route>
          </Routes>
      </Router>   
    </div>
  );
}

export default App;
