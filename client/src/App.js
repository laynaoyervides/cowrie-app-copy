import {Routes, Route} from "react-router-dom"

//Material UI
import {createTheme, ThemeProvider} from '@mui/material/styles'
import{purple, deepOrange} from 'material-ui-colors';

//import subComponents
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

// set theme colors to purple primary: #9c27b0, L=6d1b7b, d=af52bf
//secondary color is deepOrange: main:ff3d00, l ff6333, d: b22a00
//color of interest: #ffc9b7 (peach)


const theme = createTheme({
  palette: {
    primary: {
      main: purple[500],
    },
    secondary: {
      main: deepOrange[400],
    },
  },
});

  return (
    <ThemeProvider theme={theme}>
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
          <Route path="*" element={<h1>404 not found</h1>}/>
      </Routes>
    </div>
    </ThemeProvider>
  );
}

export default App;
