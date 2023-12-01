import './App.css';
import { createRoot } from "react-dom/client";
import { BrowserRouter,Routes,Route } from "react-router-dom";
import MainLayaout from './layout/MainLayout';
import HomePage from './pages/HomePage';
import Contact from './pages/Contact';
import Details from './pages/Details';
import Products from './pages/Products';
function App() {
  return (
    <BrowserRouter >
      <Routes>
        <Route path="/"  element={<MainLayaout/>}>
        <Route path='/' element={<HomePage/>}/>
        <Route path='/Products' element={<Products/>}/>
        <Route path='/Contact' element={<Contact/>}/>
        <Route path='/Details/:id' element={<Details/>}/>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
