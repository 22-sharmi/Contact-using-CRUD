import {HashRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import New from './crud2/New';
import NavBar from './GoogleContact/NavBar';
import Edit1 from './crud2/Edit1';

function App() {
  return (
    <div className="App">
      <HashRouter>
      <Routes>
      <Route path='/' element={<NavBar/>}/>
      <Route path='/New' element={<New/>}/>
        <Route path="/edit" element={<Edit1/>}/>
      </Routes>
      </HashRouter>
    </div>
  );
}

export default App;
