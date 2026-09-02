import{ Routes, Route } from 'react-router'
import Home from './pages/Home.jsx';
import Auth from './pages/Auth.jsx';
//java//
function App() {
  //tudo aqui fora será js//
  return (
  
    <Routes>
      <Route path="/" element={<Home />} />

      <Route path="/Auth" element={ <Auth />} />
      
    </Routes>
  )
}

export default App;