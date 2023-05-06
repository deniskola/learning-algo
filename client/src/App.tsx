import './App.css';
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import Home from './views/Home';
import Login from './views/Login';
import Learning from './views/Learning';
import MainView from './components/Layout/MainView';
import Checkpoint from './views/Checkpoint';
import List from './components/Checkpoint/AlgoVisualization/List';
import Profile from './views/Profile';



function App() {
  return (
    <div className="App">
       <Router>
          <Routes>
            <Route path="/login" element={<Login/>}/>
            <Route path="/" element={<MainView />}>
              <Route index element={<Home/>}/>  
              <Route path="learning" element={<Learning/>}/> 
              <Route path="learning/:moduleid/:checkpointid" element={<Checkpoint/>}/>    
              <Route path="test" element={<List/>}/>    
              <Route path="profile" element={<Profile/>}/>    
            </Route>
          </Routes>
      </Router>   
    </div>
  );
}

export default App;
