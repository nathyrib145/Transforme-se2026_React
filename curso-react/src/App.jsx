import{ Routes, Route } from 'react-router'
import Home from './pages/Home.jsx';
import Auth from './pages/Auth.jsx';
import Painel from './pages/Painel.jsx';

//java//
function App() {
  //tudo aqui fora será js//
  return (
  
    <Routes>
      <Route path="/" element={<Home />} />

      <Route path="/Auth" element={ <Auth />} />

       <Route path="/painel" element={ <Painel /> } />
      
    </Routes>
  )
}

export default App;