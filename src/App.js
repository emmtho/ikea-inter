import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Listing } from './components/Listing/Listing';
import { Navbar } from './components/Navbar/Navbar';
import { Home } from './components/Home/Home';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />}>
          <Route index element={<Home />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;