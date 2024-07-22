import {BrowserRouter,Routes,Route} from 'react-router-dom';
import './App.css';
import Home from '../Services/Home';
import Add from '../Services/Add';
import Update from '../Services/Update';

function App(){
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route index element={<Home/>}/>
          <Route path="/Home" element={<Home/>}/>
          <Route path="/Add" element={<Add/>}/>
          <Route path="/Update/:id" element={<Update/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
