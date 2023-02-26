import './App.css';
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import Home from './views/Home';
import Login from './views/Login';
import Learning from './views/Learning';
import MainView from './components/Layout/MainView';
import StepContent from './views/StepContent';


function App() {
  return (
    <div className="App">
       <Router>
          <Routes>
            <Route path="/login" element={<Login/>}/>
            <Route path="/" element={<MainView />}>
              <Route index element={<Home/>}/>  
              <Route path="learning" element={<Learning/>}/> 
              <Route path="learning/:moduleid/:stepid" element={<StepContent/>}/>       
            </Route>
          </Routes>
      </Router>   
    </div>
  );
}

export default App;
