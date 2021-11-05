import './assets/styles/App.css';
import { Routes, Route } from 'react-router-dom'
import { Home } from './pages'

function App() {
  return (
    <Routes>
      <Route path='/' exact={true} element={<Home />} />
    </Routes>
  );
}

export default App;
