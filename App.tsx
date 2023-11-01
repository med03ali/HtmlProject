import './App.css';
import { Pagecv } from './Montravail/Pagecv';
import { Formcv } from './Montravail/Formcv';
import { Routes, Route, NavLink } from  'react-router-dom';

function App() {
  return (
    <div className='container mt-10 mb-10' >
      <nav className='flex justify-end'>
        <NavLink className='mr-3' style={({isActive}) => ({fontWeight: isActive ? 'bold' : 'normal'})} to='/Pagecv'>Pagecv</NavLink><br></br>
        <NavLink className='mr-3' style={({isActive}) => ({fontWeight: isActive ? 'bold' : 'normal'})} to='/Formcv'>Formcv</NavLink>
      </nav>
      <Routes>
        <Route path='/Pagecv' element={<Pagecv/>} />
        <Route path='/Formcv' element={<Formcv/>} />
      </Routes>
    </div>
  );
}

export default App;

