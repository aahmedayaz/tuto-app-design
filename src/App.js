import SplashScreen from './components/SplashScreen';
import { Routes, Route } from 'react-router-dom';
import './App.css';
import SignUpPage from './components/Form/SignUpPage';
import SignInPage from './components/Form/SignInPage';
import Dashboard from './components/Dashboard/Dashboard';


function App() {
  return (
    <>
      <Routes>
        <Route path='/' element={<SplashScreen/>}>
        </Route>
        <Route path='/signup' element={<SignUpPage/>}>
        </Route>
        <Route path='/signin' element={<SignInPage/>}>
        </Route>
        <Route path='/dashboard' element={<Dashboard/>}>
        </Route>
      </Routes>
    </>
  );
}

export default App;
