import SplashScreen from './components/SplashScreen';
import { Routes, Route } from 'react-router-dom';
import './App.css';
import SignUpPage from './components/Form/SignUpPage';
import SignInPage from './components/Form/SignInPage';
import DashboardIncomplete from './components/Dashboard/DashboardIncomplete';
import DashboardComplete from './components/Dashboard/DashboardComplete';


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
        <Route path='/dashboard-incomplete' element={<DashboardIncomplete/>}>
        </Route>
        <Route path='/dashboard' element={<DashboardComplete/>}>
        </Route>
      </Routes>
    </>
  );
}

export default App;
