// import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Routes , Route } from 'react-router-dom';

import Header from './components/header/Header';
import Home from './pages/Home';
import About from './pages/About';

function App() {
  return (
    <BrowserRouter>
      <Header/>
      {/* <Routes>
        <Route path='/' element={<Header/>}>
          <Route index element={<Home/>}/>
        </Route>
      </Routes> */}
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/about' element={<About/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
