import './App.css';
import { StyledContainer } from './components/Formx/styled';
// import Home from './components/Home';
import {BrowserRouter as Router} from 'react-router-dom';
// import Login from './components/Formx/Login';
import SignUp from './components/Formx/Registration';

function App() {
  return (
    <Router>
      <StyledContainer>
        {/* <Home/> */}
        {/* <Login/> */}
        <SignUp/>
      </StyledContainer>
      </Router>
  );
}

export default App;
