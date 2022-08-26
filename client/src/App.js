import {Routes, Route} from "react-router-dom"

import './App.css';
import NavBar from "./Nav_Bar";
import Login from "./Login"
import About from './About';
import Learners from './Learners';
import Tutorials from './Tutorials';
import Wallet from './Wallet';
import Market from './Market';
import Art from './Art';
import Nfts from './Nfts';

function App() {
  return (
    <div className="App">
      <NavBar />
      <Routes>
      <Route path="/about" element={<About />} />
        <Route path="/learners" element={<Learners />} />
        <Route path="/tutorials" element={<Tutorials />} />
        <Route path="/market" element={<Market />} />
        <Route path="/art" element={<Art />} />
        <Route path="/nfts" element={<Nfts />} />
        <Route path="/wallet" element={<Wallet />} />
        <Route path="/login" element={<Login />} />






      </Routes>
    </div>
  );
}

export default App;
