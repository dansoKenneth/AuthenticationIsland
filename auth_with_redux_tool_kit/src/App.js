import {Routes,Route} from 'react-router-dom';
import Layout from './components/Layout';
import Public from './components/Public';
import Login from './features/Login';
import Welcome from './features/Welcome';
import RequireAuth from './features/RequireAuth';

function App() {
  return (
    <Routes>
      <Route path="/" element={Layout}>
        <Route index element={<Public/>}/>
        <Route path="/login" element={<Login/>}/>

        <Route element={<RequireAuth/>}>
          <Route path="/welcome" element={<Welcome/>}/>
        </Route>
      </Route>
    </Routes>
  )
}

export default App