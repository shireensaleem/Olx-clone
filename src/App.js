
import './App.css';
import { BrowserRouter as Router,Routes,Route } from 'react-router-dom';

import House from './Components/House';
import Login from './Components/Login';




function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
         <Route exact path='/' element={<House/>}></Route>
         <Route path='/login' element={<Login/>}></Route>
           

         

        </Routes>
        
      </Router>
      
         

      
      
     
      
    </div>
  );
}

export default App;
