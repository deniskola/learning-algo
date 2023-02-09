import './App.css';
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import Home from './Views/Main/Home';
import Login from './Views/Login/Login';
import MainView from './Components/Layout/MainView';


function App() {
  return (
    <div className="App">
       <Router>
          <Routes>
            <Route path="/login" element={<Login/>}/>
            <Route path="/" element={<MainView />}>
              <Route index element={<Home/>}/>  
              <Route path="test" element={<div>test</div>}/>           
            </Route>
          </Routes>
      </Router>   
    </div>
  );
}

export default App;
