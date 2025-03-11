import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Home } from './components/Home/Home';
import { Create } from './components/Create/Create';
import { Navbar } from './components/Navbar/Navbar';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Navbar />}>
          <Route index element={<Home />} />
          <Route path="create" element={<Create />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;